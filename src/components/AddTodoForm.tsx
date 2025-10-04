import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useCreateTodo } from '../hooks/useTodos'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function AddTodoForm() {
  const [title, setTitle] = useState('')
  const createTodo = useCreateTodo()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      createTodo.mutate({ title: title.trim() })
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Add a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={createTodo.isPending}
        className="flex-1"
      />
      <Button type="submit" disabled={createTodo.isPending || !title.trim()}>
        <Plus className="w-4 h-4 mr-2" />
        Add
      </Button>
    </form>
  )
}
