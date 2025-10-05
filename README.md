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

- Node.js 22+ and pnpm installed
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

## 📜 Available Scripts

```bash
pnpm dev              # Start development server (port 3000)
pnpm build            # Build for production
pnpm serve            # Preview production build
pnpm test             # Run tests with Vitest
pnpm lint             # Lint code
pnpm format           # Format code with Prettier
pnpm check            # Format and fix all issues
pnpm init-db          # Initialize MongoDB indexes (run after first setup)
```

## 🌐 Deployment

This application is serverless-ready and optimized for TanStack Start's **official hosting partners**:

- [Cloudflare Workers](https://workers.cloudflare.com/) 
- [Netlify](https://netlify.com) 

**Other supported platforms:**
- [Vercel](https://vercel.com) 
- Node.js hosting (Railway, Render, etc.)

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
