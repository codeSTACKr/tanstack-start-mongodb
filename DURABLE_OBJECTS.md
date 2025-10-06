# Durable Objects for MongoDB Connection Persistence

This guide explains how to implement Cloudflare Durable Objects for 10x better MongoDB performance.

## Performance Comparison

| Implementation | Query Latency | Notes |
|---------------|---------------|-------|
| **Default Workers** | ~300ms | Connection recreated per request |
| **With Durable Objects** | ~35ms | Connection persisted across requests |

**Performance Improvement: 10x faster queries**

Source: [Performance Profiling MongoDB on Cloudflare Workers](https://alexbevi.com/blog/2025/04/11/performance-profiling-mongodb-on-cloudflare-workers/)

## Why Durable Objects?

Cloudflare Workers are stateless by default, meaning connections are recreated for each request. Durable Objects provide:

- **State persistence** - Maintain MongoDB connection between requests
- **Connection reuse** - Eliminate connection overhead
- **Single-threaded consistency** - Guaranteed execution order per object
- **Global coordination** - Handle distributed state management

## Implementation Steps

### 1. Create Durable Object Class

Create `src/server/mongodb-durable.ts`:

```typescript
import { DurableObject } from 'cloudflare:workers'
import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'

export class MongoDBConnection extends DurableObject {
  private client: MongoClient | null = null
  private db: Db | null = null

  async getConnection() {
    // Return cached connection if exists
    if (this.client && this.db) {
      return { client: this.client, db: this.db }
    }

    // Create new connection
    const MONGODB_URI = this.env.MONGODB_URI
    if (!MONGODB_URI) {
      throw new Error('Missing MONGODB_URI')
    }

    this.client = await MongoClient.connect(MONGODB_URI, {
      maxPoolSize: 1,
      minPoolSize: 0,
      serverSelectionTimeoutMS: 5000,
    })

    this.db = this.client.db('tanstack-todos')

    return { client: this.client, db: this.db }
  }

  async fetch(request: Request) {
    // Handle requests to this Durable Object
    // Return connection info or perform operations
    const { db } = await this.getConnection()

    // Ping to verify connection
    await db.admin().ping()

    return new Response(JSON.stringify({ status: 'connected' }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
```

### 2. Configure Durable Object in wrangler.jsonc

Add Durable Object configuration:

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "tanstack-start-app",
  "compatibility_date": "2025-09-02",
  "compatibility_flags": ["nodejs_compat_v2"],

  // Add Durable Objects configuration
  "durable_objects": {
    "bindings": [
      {
        "name": "MONGODB_CONNECTION",
        "class_name": "MongoDBConnection",
        "script_name": "tanstack-start-app"
      }
    ]
  },

  // Add migration for new Durable Object
  "migrations": [
    {
      "tag": "v1",
      "new_classes": ["MongoDBConnection"]
    }
  ],

  "vars": {
    "MONGODB_URI": ""
  },
  "main": "@tanstack/react-start/server-entry"
}
```

### 3. Update MongoDB Connection to Use Durable Object

Modify `src/lib/mongodb.ts` to use the Durable Object:

```typescript
import type { Collection, Db } from 'mongodb'
import type { Todo } from './types'

// Get Durable Object stub
async function getMongoDBDurableObject() {
  const env = (globalThis as any).env
  if (!env?.MONGODB_CONNECTION) {
    throw new Error('MONGODB_CONNECTION Durable Object not bound')
  }

  // Use consistent ID for singleton behavior
  const id = env.MONGODB_CONNECTION.idFromName('mongodb-connection')
  const stub = env.MONGODB_CONNECTION.get(id)

  return stub
}

export async function connectToDatabase(): Promise<{ db: Db }> {
  const stub = await getMongoDBDurableObject()

  // Call Durable Object to get/create connection
  const response = await stub.fetch(new Request('http://internal/connect'))

  if (!response.ok) {
    throw new Error('Failed to connect to MongoDB via Durable Object')
  }

  const data = await response.json()
  return { db: data.db }
}

export async function getTodosCollection(): Promise<Collection<Todo>> {
  const { db } = await connectToDatabase()
  return db.collection<Todo>('todos')
}
```

### 4. Deploy with Durable Objects

```bash
# Deploy to Cloudflare Workers
pnpm build
wrangler deploy

# First deployment with migrations
wrangler deploy --new-migration
```

## Limitations & Considerations

### Durable Objects Constraints

- **Soft limit:** 1,000 requests per second per Durable Object
- **Pricing:** Additional cost beyond Workers (see [Cloudflare pricing](https://developers.cloudflare.com/workers/platform/pricing/))
- **Single-threaded:** Each Durable Object instance is single-threaded

### When to Use Durable Objects

✅ **Use when:**
- High query volume (> 100 requests/second)
- Performance is critical
- Budget allows for additional costs
- Need consistent connection state

❌ **Skip when:**
- Low traffic application
- Cost is primary concern
- Simple prototype/demo
- Default ~300ms latency is acceptable

### Scaling Strategy

For very high traffic (> 1,000 req/sec), implement multiple Durable Object instances with consistent hashing:

```typescript
// Hash-based routing to multiple Durable Objects
function getDurableObjectId(key: string) {
  const hash = simpleHash(key)
  const index = hash % NUM_DURABLE_OBJECTS
  return `mongodb-connection-${index}`
}
```

## Alternative: Smart Placement

Cloudflare's Smart Placement feature can optimize Worker execution location but showed minimal improvement in testing. Focus on Durable Objects for MongoDB performance.

## Monitoring & Debugging

Add logging to track connection reuse:

```typescript
export class MongoDBConnection extends DurableObject {
  private connectionCount = 0

  async getConnection() {
    if (this.client && this.db) {
      this.connectionCount++
      console.log(`Reusing connection (${this.connectionCount} times)`)
      return { client: this.client, db: this.db }
    }

    console.log('Creating new MongoDB connection')
    // ... connection logic
  }
}
```

## References

- [Cloudflare Workers and MongoDB](https://alexbevi.com/blog/2025/03/25/cloudflare-workers-and-mongodb/)
- [Performance Profiling MongoDB on Cloudflare Workers](https://alexbevi.com/blog/2025/04/11/performance-profiling-mongodb-on-cloudflare-workers/)
- [Cloudflare Durable Objects Documentation](https://developers.cloudflare.com/durable-objects/)

## Summary

Implementing Durable Objects provides significant performance improvements for MongoDB on Cloudflare Workers. While it adds complexity and cost, the 10x query latency improvement makes it worthwhile for production applications with moderate to high traffic.

**Next Steps:**
1. Test current implementation performance
2. Evaluate if 300ms latency meets requirements
3. If needed, implement Durable Objects following this guide
4. Monitor connection reuse metrics
5. Optimize Durable Object instance count based on traffic
