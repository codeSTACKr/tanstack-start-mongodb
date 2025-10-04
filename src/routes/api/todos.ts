/**
 * Todos API Route
 *
 * Handles GET (list all) and POST (create) operations for todos
 * Demonstrates type-safe API routes with proper error handling
 */

import { createFileRoute } from '@tanstack/react-router'
import { ObjectId } from 'mongodb'
import { getTodosCollection } from '../../lib/mongodb'
import { todoToResponse, validateTodoTitle } from '../../lib/types'
import type { ApiError, CreateTodoRequest, TodoResponse } from '../../lib/types'

export const Route = createFileRoute('/api/todos')({
  server: {
    handlers: {
      /**
       * GET /api/todos
       * Returns all todos sorted by creation date (newest first)
       */
      GET: async () => {
        try {
          const collection = await getTodosCollection()
          const todos = await collection
            .find({})
            .sort({ createdAt: -1 })
            .toArray()

          const response: Array<TodoResponse> = todos.map(todoToResponse)

          return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              // Cache for 5 seconds to demonstrate caching strategy
              'Cache-Control': 'public, s-maxage=5, stale-while-revalidate=10',
            },
          })
        } catch (error) {
          console.error('Error fetching todos:', error)
          const errorResponse: ApiError = {
            error: 'Failed to fetch todos',
            message: error instanceof Error ? error.message : 'Unknown error',
          }
          return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },

      /**
       * POST /api/todos
       * Creates a new todo
       * Request body: { title: string }
       */
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as CreateTodoRequest

          // Validate request body
          if (!validateTodoTitle(body.title)) {
            const errorResponse: ApiError = {
              error: 'Invalid request',
              message: 'Title must be a non-empty string (max 500 characters)',
            }
            return new Response(JSON.stringify(errorResponse), {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            })
          }

          const collection = await getTodosCollection()
          const now = new Date()

          const newTodo = {
            title: body.title.trim(),
            completed: false,
            createdAt: now,
            updatedAt: now,
          }

          const result = await collection.insertOne(newTodo)

          const createdTodo: TodoResponse = {
            id: result.insertedId.toString(),
            title: newTodo.title,
            completed: newTodo.completed,
            createdAt: newTodo.createdAt.toISOString(),
            updatedAt: newTodo.updatedAt.toISOString(),
          }

          return new Response(JSON.stringify(createdTodo), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          })
        } catch (error) {
          console.error('Error creating todo:', error)
          const errorResponse: ApiError = {
            error: 'Failed to create todo',
            message: error instanceof Error ? error.message : 'Unknown error',
          }
          return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },
    },
  },
})
