/**
 * MongoDB Connection Singleton
 *
 * This module implements a connection pooling pattern optimized for serverless environments.
 * Key features:
 * - Caches connection across invocations to prevent connection exhaustion
 * - Configures optimal pool size for serverless (typically 1-10 connections)
 * - Provides type-safe database and collection accessors
 *
 * Best Practices for Serverless:
 * 1. Reuse connections across function invocations
 * 2. Set appropriate maxPoolSize (lower for serverless)
 * 3. Enable connection monitoring for debugging
 * 4. Handle connection errors gracefully
 */

import { MongoClient } from 'mongodb'
import type { Collection, Db } from 'mongodb'
import type { Todo } from './types'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env')
}

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = 'tanstack-todos'

// Connection configuration optimized for serverless
const options = {
  appName: 'devrel.template.tanstack-start-todo',
  maxPoolSize: 10, // Limit connection pool size for serverless
  minPoolSize: 1,
  maxIdleTimeMS: 5000, // Close idle connections after 5s
  serverSelectionTimeoutMS: 5000, // Timeout after 5s if can't find server
  socketTimeoutMS: 30000, // Close sockets after 30s of inactivity
}

// Global cache for MongoDB client (survives across serverless function invocations)
interface CachedConnection {
  client: MongoClient | null
  db: Db | null
  promise: Promise<{ client: MongoClient; db: Db }> | null
}

const cached: CachedConnection = {
  client: null,
  db: null,
  promise: null,
}

/**
 * Get or create MongoDB connection
 * Uses singleton pattern to reuse connections across function invocations
 */
export async function connectToDatabase(): Promise<{
  client: MongoClient
  db: Db
}> {
  // Return cached connection if available
  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db }
  }

  // Return in-flight connection promise if exists
  if (cached.promise) {
    return cached.promise
  }

  // Create new connection
  cached.promise = MongoClient.connect(MONGODB_URI, options).then((client) => {
    const db = client.db(DB_NAME)
    cached.client = client
    cached.db = db
    cached.promise = null
    return { client, db }
  })

  return cached.promise
}

/**
 * Get typed collection accessor
 * Provides type-safe access to MongoDB collections
 */
export async function getTodosCollection(): Promise<Collection<Todo>> {
  const { db } = await connectToDatabase()
  return db.collection<Todo>('todos')
}

/**
 * Helper to ensure indexes are created
 *
 * IMPORTANT: This should be called during application initialization or deployment.
 *
 * For development, you can run this manually in a MongoDB shell or via a script:
 *
 * @example
 * // Create a script (e.g., scripts/init-db.ts) and run with: tsx scripts/init-db.ts
 * import { createIndexes } from './src/lib/mongodb'
 * await createIndexes()
 *
 * For production, call this during:
 * - Database migration scripts
 * - CI/CD deployment pipeline
 * - One-time setup script before first deployment
 *
 * MongoDB will create these indexes if they don't exist, so it's safe to call multiple times.
 */
export async function createIndexes(): Promise<void> {
  const collection = await getTodosCollection()

  // Create indexes for common queries
  await collection.createIndex({ createdAt: -1 })
  await collection.createIndex({ completed: 1 })

  console.log('✓ MongoDB indexes created successfully')
}
