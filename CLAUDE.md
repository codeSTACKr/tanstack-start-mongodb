# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **MongoDB + TanStack Start** demonstration application showcasing:

- Type-safe full-stack development with MongoDB (native driver, no ORM)
- Serverless-optimized connection pooling
- End-to-end type safety from database to UI
- TanStack Query with optimistic updates and caching
- Complete CRUD operations with a todo app example

**Tech Stack:**

- TanStack Start + Router (v1.132.0)
- TanStack Query (v5.66.5)
- MongoDB Native Driver (v6.12.0)
- React 19
- TypeScript
- Tailwind CSS 4 + Shadcn components
- Vitest for testing

## Setup

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Configure MongoDB:**
   - Copy `.env.example` to `.env`
   - Set `MONGODB_URI` with your MongoDB connection string
   - For local development: `mongodb://localhost:27017/tanstack-todos`
   - For MongoDB Atlas: Get connection string from cloud.mongodb.com

3. **Start development server:**
   ```bash
   pnpm dev
   ```
   Runs on http://localhost:3000

## Commands

```bash
# Development
pnpm dev              # Start dev server on port 3000

# Build & Deploy
pnpm build            # Production build
pnpm serve            # Preview production build

# Code Quality
pnpm test             # Run tests with Vitest
pnpm lint             # Lint code
pnpm format           # Format code
pnpm check            # Format and fix linting issues

# Shadcn Components
pnpx shadcn@latest add button    # Add individual components
```

## Architecture

### MongoDB Connection (`src/lib/mongodb.ts`)

**Serverless-optimized connection pattern:**

- Singleton connection with global caching
- Connection reuse across serverless invocations
- Configured pool size: 10 connections (optimal for serverless)
- Automatic idle connection cleanup (10s)
- Type-safe collection accessors

```typescript
// Get cached connection
const { db } = await connectToDatabase()

// Type-safe collection access
const collection = await getTodosCollection()
```

**Best Practices Implemented:**

- Connection pooling with appropriate limits
- Global variable caching for warm starts
- Timeout configurations for serverless environments
- Promise caching for concurrent requests

### Type System (`src/lib/types.ts`)

End-to-end type safety:

- `Todo` - MongoDB document type (with ObjectId)
- `TodoResponse` - API response type (ObjectId serialized to string)
- `CreateTodoRequest` / `UpdateTodoRequest` - Request body types
- Helper functions for type conversion and validation

### Server Functions (`src/server/todos.ts`)

Type-safe server functions using TanStack Start's `createServerFn`:

**`getTodos()`** - Fetch all todos (GET, sorted by creation date)
**`createTodo({ data })`** - Create new todo (POST with validation)
**`updateTodo({ data })`** - Update todo title or completed status (POST)
**`deleteTodo({ data })`** - Delete todo by ID (POST)

**Features:**

- Full TypeScript type safety with automatic inference
- Built-in validation using `.validator()`
- Proper error handling with typed responses
- Direct MongoDB access without HTTP overhead
- Seamless client-server communication

### TanStack Query Integration (`src/hooks/useTodos.ts`)

Custom hooks with advanced caching strategies:

**`useGetTodos()`**

- `staleTime: 30s` - Data stays fresh for 30 seconds
- `gcTime: 5min` - Cache retained for 5 minutes
- Automatic refetching on window focus

**`useCreateTodo()`, `useUpdateTodo()`, `useDeleteTodo()`**

- Optimistic updates for instant UI feedback
- Automatic rollback on errors
- Cache invalidation after mutations
- Proper error handling

### Components (`src/components/`)

**`TodoList`** - Main container with loading states, empty states, and error handling
**`TodoItem`** - Individual todo with checkbox and delete button
**`AddTodoForm`** - Input form with validation

All components use Shadcn UI primitives (Card, Checkbox, Button, Input, Badge, Skeleton).

### File-Based Routing

- `src/routes/__root.tsx` - Root layout with devtools
- `src/routes/index.tsx` - Landing page
- `src/routes/todos.tsx` - Todo demo page

Route tree auto-generated in `src/routeTree.gen.ts`.

### Server Functions (`src/server/`)

- `src/server/todos.ts` - Server-only functions for todo operations
- Uses `createServerFn()` for type-safe server logic
- Called directly from hooks and components

### Router Context

QueryClient is passed through router context for SSR compatibility:

```typescript
interface MyRouterContext {
  queryClient: QueryClient
}
```

Setup in `src/router.tsx` with SSR-Query integration.

### Path Aliases

- `@/*` maps to `./src/*`
- Configured in `tsconfig.json`
- Enabled via `vite-tsconfig-paths` plugin

## Development Patterns

### Adding a New Todo Field

1. Update `Todo` type in `src/lib/types.ts`
2. Update `todoToResponse()` helper
3. Modify server functions in `src/server/todos.ts`
4. Update TanStack Query hooks in `src/hooks/useTodos.ts`
5. Update UI components

### MongoDB Best Practices

- Always use the connection singleton from `src/lib/mongodb.ts`
- Never create new MongoClient instances in routes
- Use typed collection accessors
- Index frequently queried fields (see `createIndexes()`)
- Handle ObjectId conversions properly

### Caching Strategy

- TanStack Query provides client-side caching with configurable defaults
- Server functions eliminate HTTP overhead for internal calls
- Optimistic updates for mutations with automatic rollback
- `onSettled` callbacks ensure cache consistency

## Deployment

This app is serverless-ready. Deploy to:

- Vercel (recommended)
- Netlify
- AWS Lambda
- Any Node.js hosting with MongoDB access

**Environment Variables:**

- `MONGODB_URI` - MongoDB connection string (required)

## Testing

- always lint before saying everything is working