import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Database, Shield, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../components/ui/hover-card'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border text-sm font-medium text-secondary-foreground mb-8">
          <Database className="w-4 h-4" />
          MongoDB + TanStack Start Demo
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
          Type-safe full-stack
          <br />
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            todos with MongoDB
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          A demonstration of MongoDB integration with TanStack Start, featuring
          end-to-end type safety and serverless-optimized connection pooling.
        </p>

        <Link to="/todos">
          <Button size="lg" className="group">
            View Demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </section>

      {/* Features Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-[#00ED64] transition-all">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  End-to-End Type Safety
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fully typed from MongoDB documents to API routes to React
                  components. No manual type assertions needed.
                </p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Type Safety Features</h4>
                <p className="text-sm text-muted-foreground">
                  Leverages TypeScript throughout the stack with Zod schemas for
                  runtime validation, ensuring type consistency from database
                  queries to UI components.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-[#00ED64] transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Serverless Optimized
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Connection pooling and caching patterns prevent connection
                  exhaustion in serverless environments.
                </p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">
                  Serverless Best Practices
                </h4>
                <p className="text-sm text-muted-foreground">
                  Implements singleton connection pattern with global caching,
                  configurable pool sizes, and automatic idle connection cleanup
                  for optimal serverless performance.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="p-6 rounded-xl border bg-card hover:shadow-lg hover:border-[#00ED64] transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Smart Caching
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  TanStack Query with optimistic updates, cache invalidation,
                  and stale-while-revalidate strategies.
                </p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">
                  Advanced Caching Strategy
                </h4>
                <p className="text-sm text-muted-foreground">
                  Optimistic UI updates provide instant feedback while mutations
                  are in flight. Automatic cache invalidation and background
                  refetching keep data fresh.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-center text-sm text-muted-foreground mb-6">Built with</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <span className="font-medium">TanStack Start</span>
            <span>•</span>
            <span className="font-medium">TanStack Router</span>
            <span>•</span>
            <span className="font-medium">TanStack Query</span>
            <span>•</span>
            <span className="font-medium">MongoDB</span>
            <span>•</span>
            <span className="font-medium">TypeScript</span>
            <span>•</span>
            <span className="font-medium">Tailwind CSS</span>
          </div>
        </div>
      </section>
    </div>
  )
}
