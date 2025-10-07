# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **MongoDB + TanStack Start** demonstration application showcasing modern full-stack development patterns with serverless best practices. The project serves as a reference implementation for integrating MongoDB with TanStack Start, featuring a fully-functional todo application with CRUD operations.

**Key Features:**

- Type-safe full-stack development with MongoDB (native driver, no ORM)
- Serverless-optimized connection pooling and caching
- End-to-end type safety from database to UI
- TanStack Query with optimistic updates and intelligent caching
- Modern UI with dark/light/system theme support
- Complete error handling and loading states
- Production-ready deployment configurations for multiple platforms

**Tech Stack:**

- **Framework**: TanStack Start + Router
- **Data Fetching**: TanStack Query with SSR integration
- **Database**: MongoDB Native Driver
- **UI**: React 19, TypeScript, Tailwind CSS 4, Shadcn UI components
- **Testing**: Vitest
- **Validation**: Zod

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
   Server runs on http://localhost:3000

## Commands

```bash
# Development
pnpm dev              # Start dev server on port 3000

# Build & Deploy
pnpm build            # Production build
pnpm serve            # Preview production build

# Code Quality
pnpm lint             # Lint code with ESLint
pnpm format           # Format code with Prettier
pnpm check            # Format and fix linting issues

# Database
pnpm init-db          # Initialize MongoDB indexes

# Shadcn Components
pnpx shadcn@latest add <component>    # Add individual components
```

## Architecture

### MongoDB Configuration

**Configuration File**: `src/config/mongodb.ts`

Centralized configuration for MongoDB settings:
- Database name: `tanstack-todos`
- Collection name: `todos`
- Connection pool settings optimized for serverless:
  - `maxPoolSize: 10` - Moderate connection pool for serverless
  - `minPoolSize: 1` - Maintain minimum connection
  - `maxIdleTimeMS: 5000` - Close idle connections after 5s
  - `serverSelectionTimeoutMS: 5000` - Timeout after 5s
  - `socketTimeoutMS: 30000` - Close inactive sockets after 30s

**Connection Singleton**: `src/lib/mongodb.ts`

Implements serverless-optimized connection pattern:
- Singleton connection with global caching across invocations
- Connection reuse to prevent connection exhaustion
- Promise caching for concurrent connection requests
- User-friendly error message parsing
- Type-safe collection accessors

```typescript
// Get cached connection
const { db } = await connectToDatabase()

// Type-safe collection access
const collection = await getTodosCollection()
```

**Best Practices Implemented:**

- Global variable caching for warm starts in serverless
- Appropriate connection pool limits for serverless environments
- Timeout configurations optimized for serverless cold starts
- Error handling with user-friendly messages

### Type System (`src/lib/types.ts`)

Complete end-to-end type safety with Zod validation:

**Core Types:**
- `Todo` - MongoDB document type (with ObjectId)
- `TodoResponse` - API response type (ObjectId serialized to string)
- `CreateTodoRequest` - Request body for creating todos
- `UpdateTodoRequest` - Request body for updating todos
- `ApiError` - Standardized error responses

**Zod Schemas for Runtime Validation:**
- `CreateTodoSchema` - Validates todo creation (1-500 chars, trimmed)
- `UpdateTodoSchema` - Validates todo updates with ObjectId format check
- `DeleteTodoSchema` - Validates ObjectId format for deletion

**Helper Functions:**
- `todoToResponse()` - Converts MongoDB Todo to API TodoResponse

### Server Functions (`src/server/todos.ts`)

Type-safe server functions using TanStack Start's `createServerFn`:

- **`getTodos()`** - Fetch all todos (GET, sorted by creation date descending)
- **`createTodo({ data })`** - Create new todo (POST with Zod validation)
- **`updateTodo({ data })`** - Update todo title or completed status (POST with Zod validation)
- **`deleteTodo({ data })`** - Delete todo by ID (POST with Zod validation)

**Additional Server Functions:**
- `src/server/mongodb-status.ts` - MongoDB connection status check
- `src/server/theme.ts` - Server-side theme detection from cookies

**Features:**

- Full TypeScript type safety with automatic inference
- Built-in validation using `.inputValidator()` with Zod schemas
- Proper error handling with typed responses
- Direct MongoDB access without HTTP overhead
- Seamless client-server communication

### TanStack Query Integration

**Query Factory** (`src/queries/todos.ts`):

Centralized query definitions following best practices:
- Consistent query keys: `['todos', 'list']`
- Reusable `queryOptions` with type-safe server functions
- Single source of truth for query configurations

**Query Provider** (`src/integrations/tanstack-query/root-provider.tsx`):

Default query client configuration:
- `staleTime: 30s` - Data considered fresh for 30 seconds
- `gcTime: 5min` - Cache retained for 5 minutes
- `retry: 3` - Retry failed requests 3 times with exponential backoff
- `refetchOnWindowFocus: true` - Automatic refetch on window focus
- `refetchOnReconnect: true` - Refetch after network reconnection

**Custom Hooks** (`src/hooks/useTodos.ts`):

- **`useGetTodos()`** - Fetch todos with automatic caching
- **`useCreateTodo()`** - Create todo with optimistic updates
- **`useUpdateTodo()`** - Update todo with optimistic updates
- **`useDeleteTodo()`** - Delete todo with optimistic updates

All mutation hooks implement:
- Optimistic updates for instant UI feedback
- Automatic rollback on errors
- Cache synchronization in `onSettled`
- Proper error handling

### Components (`src/components/`)

**Main Components:**
- **`TodoList.tsx`** - Main container with loading states, empty states, and error handling
- **`TodoItem.tsx`** - Individual todo with checkbox and delete button
- **`AddTodoForm.tsx`** - Input form with validation
- **`Header.tsx`** - App header with navigation and theme toggle
- **`ErrorBoundary.tsx`** - Global error boundary with MongoDB troubleshooting
- **`theme-provider.tsx`** - Theme context provider (dark/light/system)
- **`theme-toggle.tsx`** - Theme switcher component

**Shadcn UI Components** (`src/components/ui/`):
Alert, Badge, Button, Card, Checkbox, Dropdown Menu, Empty, Hover Card, Input, Sheet, Skeleton

### File-Based Routing

- `src/routes/__root.tsx` - Root layout with devtools, theme provider, and error boundary
- `src/routes/index.tsx` - Landing page with feature showcase and MongoDB connection status
- `src/routes/todos.tsx` - Todo demo page with SSR data prefetching

Route tree auto-generated in `src/routeTree.gen.ts`.

### Router Context & SSR Integration

**Router Setup** (`src/router.tsx`):
- QueryClient passed through router context for SSR compatibility
- `setupRouterSsrQueryIntegration` for seamless SSR + TanStack Query
- Default preload strategy: `intent` (on hover/focus)

**Router Context Type:**
```typescript
interface MyRouterContext {
  queryClient: QueryClient
}
```

### Path Aliases

- `@/*` maps to `./src/*`
- Configured in `tsconfig.json`
- Enabled via `vite-tsconfig-paths` plugin in `vite.config.ts`

## Development Patterns

### Adding a New Todo Field

1. Update `Todo` type in `src/lib/types.ts`
2. Update validation schemas (CreateTodoSchema, UpdateTodoSchema)
3. Update `todoToResponse()` helper
4. Modify server functions in `src/server/todos.ts`
5. Update TanStack Query hooks in `src/hooks/useTodos.ts`
6. Update UI components (`TodoItem.tsx`, `AddTodoForm.tsx`)

### MongoDB Best Practices

- Always use the connection singleton from `src/lib/mongodb.ts`
- Never create new MongoClient instances in routes or components
- Use typed collection accessors (`getTodosCollection()`)
- Handle ObjectId conversions properly using helper functions
- Implement indexes for frequently queried fields

### Caching Strategy

- TanStack Query provides client-side caching with configurable defaults
- Server functions eliminate HTTP overhead for internal calls
- Optimistic updates for mutations with automatic rollback
- `onSettled` callbacks ensure cache consistency
- No redundant refetches - optimistic updates handle most cases

### Theme System

- SSR-compatible theme detection (dark/light/system)
- Theme stored in cookies (`ui-theme`)
- Blocking script in HTML to prevent theme flash
- Theme toggle in header with smooth transitions

## Deployment

This app is serverless-ready with **branch-specific configurations** for different deployment platforms:

### Branch Structure

- **`main`** - Base implementation with generic serverless configuration
- **`netlify`** - Netlify-specific deployment configuration
- **`cloudflare`** - Cloudflare Workers basic deployment
- **`cloudflare-durable-objects`** - Advanced Cloudflare deployment with Durable Objects

### Netlify Branch (`netlify`)

**Additional Files:**
- `netlify.toml` - Netlify build configuration

**Vite Plugin:**
```typescript
import netlify from '@netlify/vite-plugin-tanstack-start'
plugins: [..., netlify()]
```

**Configuration:**
- Build command: `vite build`
- Publish directory: `dist/client`
- Node version: 24

**Official TanStack Start partner** with dedicated plugin support.

### Cloudflare Branch (`cloudflare`)

**Additional Files:**
- `wrangler.jsonc` - Cloudflare Workers configuration

**Vite Plugin:**
```typescript
import { cloudflare } from '@cloudflare/vite-plugin'
plugins: [cloudflare({ viteEnvironment: { name: 'ssr' } }), ...]
```

**Wrangler Configuration:**
- Compatibility date: `2025-09-02`
- Compatibility flags: `["nodejs_compat"]`
- Entry: `@tanstack/react-start/server-entry`

**Official TanStack Start partner** with full Cloudflare Workers integration.

### Cloudflare Durable Objects Branch (`cloudflare-durable-objects`)

**Additional Files:**
- `wrangler.jsonc` - Advanced Cloudflare configuration with Durable Objects
- `src/server-entry.ts` - Custom server entry point
- `src/server/mongodb-durable.ts` - Durable Object for MongoDB connection management

**Advanced Features:**
- MongoDB connection managed via Durable Objects for better state persistence
- Custom fetch handler that bridges Cloudflare Workers with TanStack Start
- Durable Object binding: `MONGODB_CONNECTION`

**Use Case:**
Ideal for production Cloudflare deployments requiring persistent MongoDB connections across multiple Workers instances.

### Other Supported Platforms

- **Vercel** - Standard serverless deployment
- **AWS Lambda** - Standard serverless deployment
- **Node.js hosting** - Railway, Render, Fly.io, etc.
- Any platform with Node.js 22+ and MongoDB access

### Environment Variables

**Required:**
- `MONGODB_URI` - MongoDB connection string (required for all deployments)

## Testing

- Test framework: Vitest
- Run tests: `pnpm test`
- **IMPORTANT**: Always run `pnpm lint` before confirming work is complete
- Tests should cover server functions, hooks, and component behavior

## Configuration Files

- `vite.config.ts` - Vite configuration with TanStack Start plugin
- `tsconfig.json` - TypeScript configuration with strict mode
- `eslint.config.js` - ESLint configuration
- `prettier.config.js` - Prettier configuration
- `components.json` - Shadcn UI configuration (New York style)
- `src/config/mongodb.ts` - Centralized MongoDB configuration

## Project Statistics

- **Source files**: 34 TypeScript/TSX files
- **Components**: 7 custom + 11 Shadcn UI components
- **Routes**: 3 (root, index, todos)
- **Server functions**: 4 (getTodos, createTodo, updateTodo, deleteTodo)
- **Custom hooks**: 4 (useGetTodos, useCreateTodo, useUpdateTodo, useDeleteTodo)
