import { Trash2 } from 'lucide-react'
import { useDeleteTodo, useUpdateTodo } from '../hooks/useTodos'
import { cn } from '../lib/utils'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import type { TodoResponse } from '../lib/types'

interface TodoItemProps {
  todo: TodoResponse
}

export function TodoItem({ todo }: TodoItemProps) {
  const updateTodo = useUpdateTodo()
  const deleteTodo = useDeleteTodo()

  const handleToggle = () => {
    updateTodo.mutate({
      id: todo.id,
      completed: !todo.completed,
    })
  }

  const handleDelete = () => {
    deleteTodo.mutate(todo.id)
  }

  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border hover:border-border/80 transition-colors bg-card">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={handleToggle}
        disabled={updateTodo.isPending}
      />
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            'text-sm font-medium truncate',
            todo.completed && 'line-through text-muted-foreground',
          )}
        >
          {todo.title}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {new Date(todo.createdAt).toLocaleDateString()}
        </p>
      </div>
      {todo.completed && (
        <Badge variant="secondary" className="text-xs">
          Done
        </Badge>
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleDelete}
        disabled={deleteTodo.isPending}
        className="text-muted-foreground hover:text-destructive"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  )
}
