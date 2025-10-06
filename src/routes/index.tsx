import { Link, createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { ArrowRight, Database, Shield, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../components/ui/hover-card'
import { checkMongoDBConnection } from '../server/mongodb-status'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { data } = useSuspenseQuery({
    queryKey: ['mongodb-connection-status'],
    queryFn: () => checkMongoDBConnection(),
    staleTime: 10000, // Check every 10 seconds
    refetchInterval: 10000,
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <Badge
          variant="secondary"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <Database className="w-4 h-4" />
          MongoDB + TanStack Start Demo
          <Badge
            variant={data.connected ? 'default' : 'destructive'}
            className="ml-1"
          >
            {data.connected ? 'Connected' : 'Disconnected'}
          </Badge>
        </Badge>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
          Type-safe full-stack
          <br />
          <span className="bg-gradient-to-r from-[#00684A] to-[#00ED64] bg-clip-text text-transparent">
            todos with MongoDB
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          A demonstration of MongoDB integration with TanStack Start, featuring
          end-to-end type safety and serverless-optimized connection pooling.
        </p>

        <Link to="/todos">
          <Button size="lg" className="group bg-[#00ED64] hover:bg-[#00ED64]/90 text-[#001E2B]">
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
                <div className="w-12 h-12 rounded-lg bg-[#00ED64]/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00684A] dark:text-[#00ED64]" />
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
                <div className="w-12 h-12 rounded-lg bg-[#00ED64]/10 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-[#00684A] dark:text-[#00ED64]" />
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
                <div className="w-12 h-12 rounded-lg bg-[#00ED64]/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#00684A] dark:text-[#00ED64]" />
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

      {/* Tech Stack Footer */}
      <footer className="mt-12 border-t bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-2">Built with Modern Technologies</h3>
            <p className="text-sm text-muted-foreground">A powerful stack for type-safe full-stack development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <a
              href="https://tanstack.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:border-border hover:bg-card transition-all group cursor-pointer"
            >
              <span className="text-xs text-muted-foreground mb-1">Framework</span>
              <span className="font-semibold text-sm group-hover:text-foreground transition-colors">TanStack Start</span>
            </a>

            <a
              href="https://www.mongodb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-[#00ED64]/5 border border-[#00ED64]/20 hover:border-[#00ED64]/40 hover:bg-[#00ED64]/10 transition-all group cursor-pointer"
            >
              <span className="text-xs text-muted-foreground mb-1">Database</span>
              <span className="font-bold text-sm group-hover:text-foreground transition-colors">MongoDB</span>
            </a>

            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:border-border hover:bg-card transition-all group cursor-pointer"
            >
              <span className="text-xs text-muted-foreground mb-1">Language</span>
              <span className="font-semibold text-sm group-hover:text-foreground transition-colors">TypeScript</span>
            </a>
          </div>

          <div className="text-center pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Demo application showcasing modern full-stack development patterns
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
