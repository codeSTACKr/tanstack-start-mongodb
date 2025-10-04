import { AlertCircle, CheckSquare } from 'lucide-react'
import { useGetTodos } from '../hooks/useTodos'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Skeleton } from './ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './ui/empty'
import { AddTodoForm } from './AddTodoForm'
import { TodoItem } from './TodoItem'
import { Badge } from './ui/badge'

export function TodoList() {
  const { data: todos, isLoading, error } = useGetTodos()

  const activeTodos = todos?.filter((todo) => !todo.completed) || []
  const completedTodos = todos?.filter((todo) => todo.completed) || []

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>My Todos</CardTitle>
            <CardDescription>
              Manage your tasks with MongoDB + TanStack
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">{activeTodos.length} active</Badge>
            <Badge variant="secondary">{completedTodos.length} done</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <AddTodoForm />

        {error && (
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load todos: {error.message}
            </AlertDescription>
          </Alert>
        )}

        {isLoading && (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg border"
              >
                <Skeleton className="w-5 h-5" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && todos && todos.length === 0 && (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <CheckSquare />
              </EmptyMedia>
              <EmptyTitle>No todos yet</EmptyTitle>
              <EmptyDescription>
                Add your first task to get started!
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}

        {!isLoading && activeTodos.length > 0 && (
          <div className="space-y-3">
            {activeTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        )}

        {!isLoading && completedTodos.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 mt-6">
              Completed
            </h3>
            <div className="space-y-3">
              {completedTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
