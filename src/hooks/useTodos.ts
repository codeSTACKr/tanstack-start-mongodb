/**
 * TanStack Query Hooks for Todos
 *
 * Demonstrates best practices for:
 * - Query factories instead of raw string keys
 * - Query caching with staleTime and cacheTime
 * - Optimistic updates for better UX
 * - Proper cache invalidation strategies
 * - Type-safe server function calls
 */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { todoQueries } from '../queries/todos'
import { createTodo, deleteTodo, updateTodo } from '../server/todos'
import type {
  CreateTodoRequest,
  TodoResponse,
  UpdateTodoRequest,
} from '../lib/types'

/**
 * Fetch all todos
 * Uses centralized query factory for consistent keys and configuration
 */
export function useGetTodos() {
  return useQuery(todoQueries.list())
}

/**
 * Create a new todo
 * Uses optimistic updates to immediately show the new todo before server confirms
 */
export function useCreateTodo() {
  const queryClient = useQueryClient()

  return useMutation<
    TodoResponse,
    Error,
    CreateTodoRequest,
    { previousTodos: Array<TodoResponse> | undefined }
  >({
    mutationKey: ['todos', 'create'],
    mutationFn: (data: CreateTodoRequest) => createTodo({ data }),
    // Optimistic update: add todo to cache immediately
    onMutate: async (newTodo) => {
      // Cancel outgoing refetches to avoid overwriting optimistic update
      await queryClient.cancelQueries({ queryKey: todoQueries.list().queryKey })

      // Snapshot previous value for rollback
      const previousTodos = queryClient.getQueryData<Array<TodoResponse>>(
        todoQueries.list().queryKey,
      )

      // Optimistically update cache with temporary todo
      queryClient.setQueryData<Array<TodoResponse>>(
        todoQueries.list().queryKey,
        (old) => [
          {
            id: 'temp-' + Date.now(),
            title: newTodo.title,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          ...(old || []),
        ],
      )

      return { previousTodos }
    },
    // Rollback on error
    onError: (_error, _newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(
          todoQueries.list().queryKey,
          context.previousTodos,
        )
      }
    },
    // Update cache with server response (replace temp todo with real one)
    onSettled: (createdTodo) => {
      if (createdTodo) {
        queryClient.setQueryData<Array<TodoResponse>>(
          todoQueries.list().queryKey,
          (old) =>
            (old || []).map((todo) =>
              todo.id.startsWith('temp-') ? createdTodo : todo,
            ),
        )
      }
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
    { id: string; title?: string; completed?: boolean },
    { previousTodos: Array<TodoResponse> | undefined }
  >({
    mutationKey: ['todos', 'update'],
    mutationFn: (data: UpdateTodoRequest & { id: string }) => updateTodo({ data }),
    // Optimistic update: update todo in cache immediately
    onMutate: async ({ id, ...updates }) => {
      await queryClient.cancelQueries({ queryKey: todoQueries.list().queryKey })

      const previousTodos = queryClient.getQueryData<Array<TodoResponse>>(
        todoQueries.list().queryKey,
      )

      queryClient.setQueryData<Array<TodoResponse>>(
        todoQueries.list().queryKey,
        (old) =>
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
        queryClient.setQueryData(
          todoQueries.list().queryKey,
          context.previousTodos,
        )
      }
    },
    onSettled: (updatedTodo) => {
      // Update cache with server response (no refetch needed)
      if (updatedTodo) {
        queryClient.setQueryData<Array<TodoResponse>>(
          todoQueries.list().queryKey,
          (old) =>
            (old || []).map((todo) =>
              todo.id === updatedTodo.id ? updatedTodo : todo,
            ),
        )
      }
    },
  })
}

/**
 * Delete a todo
 * Uses optimistic updates to immediately remove from UI
 */
export function useDeleteTodo() {
  const queryClient = useQueryClient()

  return useMutation<
    void,
    Error,
    string,
    { previousTodos: Array<TodoResponse> | undefined }
  >({
    mutationKey: ['todos', 'delete'],
    mutationFn: (id: string) => deleteTodo({ data: { id } }),
    // Optimistic update: remove todo from cache immediately
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: todoQueries.list().queryKey })

      const previousTodos = queryClient.getQueryData<Array<TodoResponse>>(
        todoQueries.list().queryKey,
      )

      queryClient.setQueryData<Array<TodoResponse>>(
        todoQueries.list().queryKey,
        (old) => old?.filter((todo) => todo.id !== id) || [],
      )

      return { previousTodos }
    },
    onError: (_error, _id, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(
          todoQueries.list().queryKey,
          context.previousTodos,
        )
      }
    },
    // Deletion already reflected in optimistic update, but onSettled ensures consistency
    onSettled: () => {
      // Could add refetch here if needed, but optimistic update should suffice
    },
  })
}
