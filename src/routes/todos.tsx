import { createFileRoute } from '@tanstack/react-router'
import { TodoList } from '../components/TodoList'

export const Route = createFileRoute('/todos')({
  component: TodosPage,
})

function TodosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">Todo Demo</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A full-stack CRUD application demonstrating MongoDB integration with
            TanStack Start. Features type-safe API routes, optimistic updates,
            and smart caching.
          </p>
        </div>

        <TodoList />
      </div>
    </div>
  )
}
