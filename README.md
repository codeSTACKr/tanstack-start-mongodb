# MongoDB + TanStack Start Demo

A full-stack demonstration of **MongoDB** integration with **TanStack Start**, featuring end-to-end type safety, serverless-optimized connection pooling, and modern React patterns.

![TanStack Start + MongoDB](https://img.shields.io/badge/TanStack-Start-FF4154?style=flat-square) ![MongoDB](https://img.shields.io/badge/MongoDB-Native-47A248?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square)

## ✨ Features

- 🔒 **End-to-end type safety** from MongoDB → Server functions → React components
- 🚀 **Serverless-optimized** connection pooling (prevents connection exhaustion)
- ⚡ **Optimistic updates** with TanStack Query for instant UI feedback
- 🎯 **Smart caching** with stale-while-revalidate strategies
- 🎨 **Modern UI** with Shadcn components, Tailwind CSS 4, and dark/light/system themes
- 📦 **No ORM** - native MongoDB driver for full control and flexibility
- 🔄 **Full CRUD** operations with a complete todo app example

## 🛠️ Tech Stack

- **[TanStack Start](https://tanstack.com/start)** - Full-stack React framework
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing with SSR
- **[TanStack Query](https://tanstack.com/query)** - Data fetching & caching
- **[MongoDB](https://www.mongodb.com/)** - Native driver, no ORM
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Zod](https://zod.dev/)** - Runtime validation
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Shadcn UI](https://ui.shadcn.com/)** - Component library

## 🚀 Quick Start

### Prerequisites

- **Node.js** 22+ and **pnpm** installed
- **MongoDB** instance (local or [MongoDB Atlas](https://account.mongodb.com/account/login/?utm_campaign=devrel&utm_source=third-party-content&utm_medium=cta&utm_content=tanstack-start-todo-demo&utm_term=jesse.hall))

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
├── config/
│   └── mongodb.ts           # Centralized MongoDB configuration
├── server/
│   ├── todos.ts             # Server functions (CRUD operations)
│   ├── mongodb-status.ts    # Connection status check
│   └── theme.ts             # SSR theme detection
├── lib/
│   ├── mongodb.ts           # Serverless-optimized connection singleton
│   ├── types.ts             # Type definitions + Zod schemas
│   └── utils.ts             # Utility functions
├── queries/
│   └── todos.ts             # TanStack Query factories
├── hooks/
│   └── useTodos.ts          # Custom hooks with optimistic updates
├── routes/
│   ├── __root.tsx           # Root layout with devtools
│   ├── index.tsx            # Landing page
│   └── todos.tsx            # Todo demo page
├── components/
│   ├── TodoList.tsx         # Main todo container
│   ├── TodoItem.tsx         # Individual todo with actions
│   ├── AddTodoForm.tsx      # Input form
│   └── ui/                  # Shadcn UI components
└── integrations/
    └── tanstack-query/      # Query client setup
```

## 📜 Available Scripts

```bash
# Development
pnpm dev              # Start development server (port 3000)
pnpm build            # Build for production
pnpm serve            # Preview production build

# Code Quality
pnpm lint             # Lint code with ESLint
pnpm format           # Format code with Prettier
pnpm check            # Format and fix all issues

# Database
pnpm init-db          # Initialize MongoDB indexes

# UI Components
pnpx shadcn@latest add <component>    # Add Shadcn components
```

## 🌐 Deployment

This application uses a **multi-branch deployment strategy** with platform-specific configurations:

### Branch Structure

| Branch | Purpose | Platform |
|--------|---------|----------|
| `main` | Base implementation | Generic serverless |
| `netlify` | Netlify deployment | [Netlify](https://netlify.com) |
| `cloudflare` | Basic Cloudflare deployment | [Cloudflare Workers](https://workers.cloudflare.com/) |
| `cloudflare-durable-objects` | Advanced Cloudflare deployment | Cloudflare Workers + Durable Objects |

### Deploying to Netlify

1. **Switch to netlify branch:**
   ```bash
   git checkout netlify
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Deploy to Netlify:**
   ```bash
   pnpm netlify deploy --build
   ```

4. **Set environment variables in Netlify:**
   - `MONGODB_URI` - Your MongoDB connection string

**Features:**
- Uses `@netlify/vite-plugin-tanstack-start`
- Node.js 22+ runtime
- Official TanStack Start partner

### Deploying to Cloudflare Workers

#### Basic Deployment (`cloudflare` branch)

1. **Switch to cloudflare branch:**
   ```bash
   git checkout cloudflare
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   
3. **Deploy to Cloudflare:**
   ```bash
   pnpm build
   pnpm wrangler deploy
   ```

4. **Set environment variables:**
   ```bash
   pnpm wrangler secret put MONGODB_URI
   ```

**Features:**
- Uses `@cloudflare/vite-plugin`
- Node.js compatibility v2
- Official TanStack Start partner

#### Advanced Deployment (`cloudflare-durable-objects` branch)

1. **Switch to cloudflare-durable-objects branch:**
   ```bash
   git checkout cloudflare-durable-objects
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Deploy with Durable Objects:**
   ```bash
   pnpm build
   pnpm wrangler deploy
   ```

4. **Set environment variables:**
   ```bash
   pnpm wrangler secret put MONGODB_URI
   ```

**Features:**
- MongoDB connection managed via Durable Objects
- Better state persistence across Workers instances
- Custom server entry point
- Ideal for production Cloudflare deployments

### Other Platforms

The `main` branch supports deployment to:

- **[Vercel](https://vercel.com)** - Standard serverless deployment
- **[AWS Lambda](https://aws.amazon.com/lambda/)** - Standard serverless deployment
- **Node.js hosting** - Railway, Render, Fly.io, etc.
- Any platform with Node.js 22+ and MongoDB access

Set the `MONGODB_URI` environment variable in your platform's settings.

## 🏗️ Architecture Highlights

### Serverless-Optimized MongoDB Connection

The application implements connection pooling best practices for serverless:

- **Singleton pattern** with global caching across function invocations
- **Connection reuse** to prevent connection exhaustion
- **Promise caching** for concurrent connection requests
- **Optimized pool settings**: maxPoolSize: 10, idle timeout: 5s
- **User-friendly error handling** for common MongoDB issues

See `src/lib/mongodb.ts` and `src/config/mongodb.ts` for implementation.

### Type-Safe Server Functions

Uses TanStack Start's `createServerFn` for type-safe server operations:

```typescript
// Automatic type inference from server to client
export const getTodos = createServerFn().handler(async () => {
  const collection = await getTodosCollection()
  return await collection.find({}).sort({ createdAt: -1 }).toArray()
})
```

- Full TypeScript type safety
- Zod validation with `.inputValidator()`
- No HTTP overhead for internal calls
- Seamless client-server communication

### Optimistic Updates with TanStack Query

All mutations implement optimistic updates for instant UI feedback:

```typescript
// Update UI immediately, rollback on error
const { mutate } = useUpdateTodo()
mutate({ id: todo.id, completed: !todo.completed })
```

- Instant UI updates before server confirmation
- Automatic rollback on errors
- Cache synchronization with `onSettled`
- Retry logic with exponential backoff

### Theme System

SSR-compatible theme support with zero flash:

- Dark, light, and system theme modes
- Theme stored in cookies for SSR consistency
- Blocking script prevents theme flash on page load
- Smooth transitions between themes

## 📚 Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [TanStack Router Documentation](https://tanstack.com/router)
- [TanStack Query Documentation](https://tanstack.com/query)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/?utm_campaign=devrel&utm_source=third-party-content&utm_medium=cta&utm_content=tanstack-start-todo-demo&utm_term=jesse.hall)
- [Shadcn UI](https://ui.shadcn.com/)

## 📝 Contributing

See `CLAUDE.md` for detailed architecture documentation and development patterns.

## 📄 License

MIT
