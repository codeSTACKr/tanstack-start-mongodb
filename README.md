# MongoDB + TanStack Start Demo

A full-stack demonstration of **MongoDB** integration with **TanStack Start**, featuring end-to-end type safety, serverless-optimized connection pooling, and modern React patterns.

![TanStack Start + MongoDB](https://img.shields.io/badge/TanStack-Start-FF4154?style=flat-square) ![MongoDB](https://img.shields.io/badge/MongoDB-Native-47A248?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square)

## ✨ Features

- 🔒 **End-to-end type safety** from MongoDB → Server functions → React components
- 🚀 **Serverless-optimized** connection pooling (no connection exhaustion)
- ⚡ **Optimistic updates** with TanStack Query
- 🎯 **Smart caching** with stale-while-revalidate strategies
- 🎨 **Modern UI** with Shadcn components and Tailwind CSS
- 📦 **No ORM** - native MongoDB driver for full control
- 🔄 **Full CRUD** operations with todo app example

## 🛠️ Tech Stack

- **[TanStack Start](https://tanstack.com/start)** - Full-stack React framework
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing
- **[TanStack Query](https://tanstack.com/query)** - Data fetching & caching
- **[MongoDB](https://www.mongodb.com/)** - Native driver (no ORM)
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Shadcn UI](https://ui.shadcn.com/)** - Component library

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and pnpm installed
- MongoDB instance (local or [MongoDB Atlas](https://cloud.mongodb.com))

### Installation

1. **Clone and install:**

   ```bash
   git clone <your-repo-url>
   cd fresh-start
   pnpm install
   ```

2. **Configure MongoDB:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set your MongoDB connection string:

   ```bash
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/tanstack-todos

   # Or for MongoDB Atlas
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tanstack-todos
   ```

3. **Start development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── server/
│   └── todos.ts             # Server functions (createServerFn)
├── lib/
│   ├── mongodb.ts           # Serverless-optimized connection singleton
│   ├── types.ts             # Type definitions for end-to-end safety
│   └── utils.ts             # Utility functions
├── queries/
│   └── todos.ts             # TanStack Query factories
├── hooks/
│   └── useTodos.ts          # Custom hooks with caching
├── routes/
│   ├── __root.tsx           # Root layout with devtools
│   ├── index.tsx            # Landing page
│   └── todos.tsx            # Todo demo page
└── components/
    ├── TodoList.tsx         # Main todo container
    ├── TodoItem.tsx         # Individual todo with actions
    ├── AddTodoForm.tsx      # Input form
    └── ui/                  # Shadcn components
```

## 🔑 Key Patterns

### MongoDB Connection (Serverless-Ready)

```typescript
// src/lib/mongodb.ts
export async function connectToDatabase() {
  // Reuses cached connection across serverless invocations
  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db }
  }
  // Creates new connection with optimal pool settings
  const client = await MongoClient.connect(MONGODB_URI, {
    maxPoolSize: 10, // Optimal for serverless
    minPoolSize: 1,
    maxIdleTimeMS: 10000,
  })
  // Cache for next invocation
  cached.client = client
  cached.db = client.db(DB_NAME)
  return { client, db: cached.db }
}
```

### Type-Safe Server Functions

```typescript
// src/server/todos.ts
import { createServerFn } from '@tanstack/react-start'

export const getTodos = createServerFn().handler(async () => {
  const collection = await getTodosCollection()
  const todos = await collection.find({}).sort({ createdAt: -1 }).toArray()
  return todos.map(todoToResponse)
})

export const createTodo = createServerFn({ method: 'POST' })
  .validator((data: CreateTodoRequest) => {
    if (!validateTodoTitle(data.title)) {
      throw new Error('Title must be a non-empty string')
    }
    return data
  })
  .handler(async ({ data }) => {
    const collection = await getTodosCollection()
    const result = await collection.insertOne({
      title: data.title.trim(),
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return todoToResponse({ ...data, _id: result.insertedId })
  })
```

### Optimistic Updates with TanStack Query

```typescript
// src/hooks/useTodos.ts
import { updateTodo } from '../server/todos'

export function useUpdateTodo() {
  return useMutation({
    mutationKey: ['todos', 'update'],
    mutationFn: (data) => updateTodo({ data }),
    onMutate: async ({ id, ...updates }) => {
      // Cancel refetches
      await queryClient.cancelQueries({ queryKey: todoQueries.list().queryKey })
      // Snapshot for rollback
      const previous = queryClient.getQueryData(todoQueries.list().queryKey)
      // Optimistically update
      queryClient.setQueryData(todoQueries.list().queryKey, (old) =>
        old.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo)),
      )
      return { previous }
    },
    onError: (err, vars, context) => {
      // Rollback on error
      if (context?.previous) {
        queryClient.setQueryData(todoQueries.list().queryKey, context.previous)
      }
    },
    onSettled: (updatedTodo) => {
      // Update cache with server response
      if (updatedTodo) {
        queryClient.setQueryData(todoQueries.list().queryKey, (old) =>
          old.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
        )
      }
    },
  })
}
```

## 📜 Available Scripts

```bash
pnpm dev              # Start development server (port 3000)
pnpm build            # Build for production
pnpm serve            # Preview production build
pnpm test             # Run tests with Vitest
pnpm lint             # Lint code
pnpm format           # Format code with Prettier
pnpm check            # Format and fix all issues
```

## 🌐 Deployment

This application is serverless-ready and can be deployed to:

- **[Vercel](https://vercel.com)** (recommended)
- **[Netlify](https://netlify.com)**
- **AWS Lambda**
- Any Node.js hosting with MongoDB access

### Environment Variables

Set the following environment variable in your deployment:

```bash
MONGODB_URI=<your-mongodb-connection-string>
```

## 📚 Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [TanStack Router Documentation](https://tanstack.com/router)
- [TanStack Query Documentation](https://tanstack.com/query)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/)
- [Shadcn UI](https://ui.shadcn.com/)

## 📝 License

MIT
