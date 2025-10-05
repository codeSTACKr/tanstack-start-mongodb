/**
 * TanStack Query Factory for Todos
 *
 * Centralized query definitions following best practices:
 * - Consistent query keys across the app
 * - Type-safe query functions using server functions
 * - Reusable queryOptions for hooks and mutations
 *
 * Note: For this simple demo with one query type, we use a flat structure.
 * For apps with multiple resource types, consider a hierarchical factory pattern.
 */

import { queryOptions } from '@tanstack/react-query'
import { getTodos } from '../server/todos'

/**
 * Query factory for all todo-related queries
 * Use this instead of raw string keys to ensure consistency
 */
export const todoQueries = {
  /**
   * Query configuration for fetching all todos
   * Uses server function for type-safe data fetching
   */
  list: () =>
    queryOptions({
      queryKey: ['todos', 'list'] as const,
      queryFn: () => getTodos(),
      // staleTime and gcTime are configured globally in root-provider.tsx
      // Override here only if this query needs different settings
    }),
}
