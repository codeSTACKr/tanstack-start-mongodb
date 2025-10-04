/**
 * TanStack Query Factory for Todos
 *
 * Centralized query definitions following best practices:
 * - Consistent query keys across the app
 * - Type-safe query functions using server functions
 * - Reusable queryOptions for hooks and mutations
 */

import { queryOptions } from '@tanstack/react-query'
import { getTodos } from '../server/todos'

/**
 * Query factory for all todo-related queries
 * Use this instead of raw string keys to ensure consistency
 */
export const todoQueries = {
  /**
   * Base key for all todo queries
   */
  all: () => ['todos'] as const,

  /**
   * Query configuration for fetching all todos
   * Uses server function for type-safe data fetching
   */
  list: () =>
    queryOptions({
      queryKey: [...todoQueries.all(), 'list'],
      queryFn: () => getTodos(),
      staleTime: 1000 * 30, // Consider data fresh for 30 seconds
      gcTime: 1000 * 60 * 5, // Keep in cache for 5 minutes
    }),
}
