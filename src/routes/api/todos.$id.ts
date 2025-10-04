/**
 * Individual Todo API Route
 *
 * Handles GET (single), PATCH (update), and DELETE operations for a specific todo
 * Demonstrates dynamic route parameters with type safety
 */

import { createFileRoute } from '@tanstack/react-router'
import { ObjectId } from 'mongodb'
import { getTodosCollection } from '../../lib/mongodb'
import { todoToResponse, validateTodoTitle } from '../../lib/types'
import type { ApiError, TodoResponse, UpdateTodoRequest } from '../../lib/types'

export const Route = createFileRoute('/api/todos/$id')({
  server: {
    handlers: {
      /**
       * GET /api/todos/:id
       * Returns a single todo by ID
       */
      GET: async ({ params }) => {
        try {
          const { id } = params

          // Validate ObjectId format
          if (!ObjectId.isValid(id)) {
            const errorResponse: ApiError = {
              error: 'Invalid ID',
              message: 'The provided ID is not a valid MongoDB ObjectId',
            }
            return new Response(JSON.stringify(errorResponse), {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            })
          }

          const collection = await getTodosCollection()
          const todo = await collection.findOne({ _id: new ObjectId(id) })

          if (!todo) {
            const errorResponse: ApiError = {
              error: 'Not found',
              message: `Todo with id ${id} not found`,
            }
            return new Response(JSON.stringify(errorResponse), {
              status: 404,
              headers: { 'Content-Type': 'application/json' },
            })
          }

          const response: TodoResponse = todoToResponse(todo)

          return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'public, s-maxage=5, stale-while-revalidate=10',
            },
          })
        } catch (error) {
          console.error('Error fetching todo:', error)
          const errorResponse: ApiError = {
            error: 'Failed to fetch todo',
            message: error instanceof Error ? error.message : 'Unknown error',
          }
          return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },

      /**
       * PATCH /api/todos/:id
       * Updates a todo (title and/or completed status)
       * Request body: { title?: string, completed?: boolean }
       */
      PATCH: async ({ params, request }) => {
        try {
          const { id } = params

          // Validate ObjectId format
          if (!ObjectId.isValid(id)) {
            const errorResponse: ApiError = {
              error: 'Invalid ID',
              message: 'The provided ID is not a valid MongoDB ObjectId',
            }
            return new Response(JSON.stringify(errorResponse), {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            })
          }

          const body = (await request.json()) as UpdateTodoRequest

          // Validate request body
          if (!body.title && body.completed === undefined) {
            const errorResponse: ApiError = {
              error: 'Invalid request',
              message:
                'Must provide at least one field to update (title or completed)',
            }
            return new Response(JSON.stringify(errorResponse), {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            })
          }

          if (body.title !== undefined && !validateTodoTitle(body.title)) {
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
          const updateData: Record<string, any> = {
            updatedAt: new Date(),
          }

          if (body.title !== undefined) {
            updateData.title = body.title.trim()
          }
          if (body.completed !== undefined) {
            updateData.completed = body.completed
          }

          const result = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateData },
            { returnDocument: 'after' },
          )

          if (!result) {
            const errorResponse: ApiError = {
              error: 'Not found',
              message: `Todo with id ${id} not found`,
            }
            return new Response(JSON.stringify(errorResponse), {
              status: 404,
              headers: { 'Content-Type': 'application/json' },
            })
          }

          const response: TodoResponse = todoToResponse(result)

          return new Response(JSON.stringify(response), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })
        } catch (error) {
          console.error('Error updating todo:', error)
          const errorResponse: ApiError = {
            error: 'Failed to update todo',
            message: error instanceof Error ? error.message : 'Unknown error',
          }
          return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      },

      /**
       * DELETE /api/todos/:id
       * Deletes a todo
       */
      DELETE: async ({ params }) => {
        try {
          const { id } = params

          // Validate ObjectId format
          if (!ObjectId.isValid(id)) {
            const errorResponse: ApiError = {
              error: 'Invalid ID',
              message: 'The provided ID is not a valid MongoDB ObjectId',
            }
            return new Response(JSON.stringify(errorResponse), {
              status: 400,
              headers: { 'Content-Type': 'application/json' },
            })
          }

          const collection = await getTodosCollection()
          const result = await collection.deleteOne({ _id: new ObjectId(id) })

          if (result.deletedCount === 0) {
            const errorResponse: ApiError = {
              error: 'Not found',
              message: `Todo with id ${id} not found`,
            }
            return new Response(JSON.stringify(errorResponse), {
              status: 404,
              headers: { 'Content-Type': 'application/json' },
            })
          }

          return new Response(null, { status: 204 })
        } catch (error) {
          console.error('Error deleting todo:', error)
          const errorResponse: ApiError = {
            error: 'Failed to delete todo',
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
