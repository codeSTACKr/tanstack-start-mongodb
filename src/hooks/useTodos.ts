/**
 * TanStack Query Hooks for Todos
 *
 * Demonstrates best practices for:
 * - Query caching with staleTime and cacheTime
 * - Optimistic updates for better UX
 * - Proper cache invalidation strategies
 * - Type-safe API calls
 */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type {
  CreateTodoRequest,
  TodoResponse,
  UpdateTodoRequest,
} from '../lib/types'

const TODOS_QUERY_KEY = ['todos'] as const

/**
 * Fetch all todos
 * Configured with caching to reduce API calls
 */
export function useGetTodos() {
  return useQuery<Array<TodoResponse>>({
    queryKey: TODOS_QUERY_KEY,
    queryFn: async () => {
      const response = await fetch('/api/todos')
      if (!response.ok) {
        throw new Error('Failed to fetch todos')
      }
      return response.json()
    },
    staleTime: 1000 * 30, // Consider data fresh for 30 seconds
    gcTime: 1000 * 60 * 5, // Keep in cache for 5 minutes
  })
}

/**
 * Create a new todo
 * Uses optimistic updates to immediately show the new todo before server confirms
 */
export function useCreateTodo() {
  const queryClient = useQueryClient()

  return useMutation<TodoResponse, Error, CreateTodoRequest>({
    mutationFn: async (data: CreateTodoRequest) => {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Failed to create todo')
      }
      return response.json()
    },
    // Optimistic update: add todo to cache immediately
    onMutate: async (newTodo) => {
      // Cancel outgoing refetches to avoid overwriting optimistic update
      await queryClient.cancelQueries({ queryKey: TODOS_QUERY_KEY })

      // Snapshot previous value for rollback
      const previousTodos =
        queryClient.getQueryData<Array<TodoResponse>>(TODOS_QUERY_KEY)

      // Optimistically update cache with temporary todo
      queryClient.setQueryData<Array<TodoResponse>>(TODOS_QUERY_KEY, (old) => [
        {
          id: 'temp-' + Date.now(),
          title: newTodo.title,
          completed: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        ...(old || []),
      ])

      return { previousTodos }
    },
    // Rollback on error
    onError: (_error, _newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(TODOS_QUERY_KEY, context.previousTodos)
      }
    },
    // Always refetch after success or error
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY })
    },
  })
}

/**
 * Update a todo (toggle completed or edit title)
 * Uses optimistic updates for immediate UI feedback
 */
export function useUpdateTodo() {
  const queryClient = useQueryClient()

  return useMutation<
    TodoResponse,
    Error,
    { id: string; title?: string; completed?: boolean }
  >({
    mutationFn: async ({ id, ...data }: UpdateTodoRequest & { id: string }) => {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Failed to update todo')
      }
      return response.json()
    },
    // Optimistic update: update todo in cache immediately
    onMutate: async ({ id, ...updates }) => {
      await queryClient.cancelQueries({ queryKey: TODOS_QUERY_KEY })

      const previousTodos =
        queryClient.getQueryData<Array<TodoResponse>>(TODOS_QUERY_KEY)

      queryClient.setQueryData<Array<TodoResponse>>(TODOS_QUERY_KEY, (old) =>
        (old || []).map((todo) =>
          todo.id === id
            ? { ...todo, ...updates, updatedAt: new Date().toISOString() }
            : todo,
        ),
      )

      return { previousTodos }
    },
    onError: (_error, _variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(TODOS_QUERY_KEY, context.previousTodos)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY })
    },
  })
}

/**
 * Delete a todo
 * Uses optimistic updates to immediately remove from UI
 */
export function useDeleteTodo() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete todo')
      }
    },
    // Optimistic update: remove todo from cache immediately
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: TODOS_QUERY_KEY })

      const previousTodos =
        queryClient.getQueryData<Array<TodoResponse>>(TODOS_QUERY_KEY)

      queryClient.setQueryData<Array<TodoResponse>>(
        TODOS_QUERY_KEY,
        (old) => old?.filter((todo) => todo.id !== id) || [],
      )

      return { previousTodos }
    },
    onError: (_error, _id, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(TODOS_QUERY_KEY, context.previousTodos)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY })
    },
  })
}
