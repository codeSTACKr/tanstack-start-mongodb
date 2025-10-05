/**
 * Type Definitions
 *
 * Centralized type definitions for the entire application.
 * These types provide end-to-end type safety from database → API → frontend.
 */

import { z } from 'zod'
import type { ObjectId } from 'mongodb'

/**
 * Todo model as stored in MongoDB
 * Uses ObjectId for _id field which is MongoDB's default
 */
export interface Todo {
  _id?: ObjectId
  title: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Todo as returned from API (with string id instead of ObjectId)
 * ObjectId is serialized to string when sent over HTTP
 */
export interface TodoResponse {
  id: string
  title: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

/**
 * Request body for creating a new todo
 */
export interface CreateTodoRequest {
  title: string
}

/**
 * Request body for updating a todo
 */
export interface UpdateTodoRequest {
  title?: string
  completed?: boolean
}

/**
 * API error response
 */
export interface ApiError {
  error: string
  message?: string
}

/**
 * Zod Schemas for Runtime Validation
 */

/**
 * Schema for creating a new todo
 */
export const CreateTodoSchema = z.object({
  title: z
    .string()
    .min(1, 'Title must not be empty')
    .max(500, 'Title must be less than 500 characters')
    .transform((val) => val.trim()),
})

/**
 * Schema for updating a todo
 */
export const UpdateTodoSchema = z.object({
  id: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
    message: 'Invalid ID format',
  }),
  title: z
    .string()
    .min(1, 'Title must not be empty')
    .max(500, 'Title must be less than 500 characters')
    .transform((val) => val.trim())
    .optional(),
  completed: z.boolean().optional(),
})

/**
 * Schema for deleting a todo
 */
export const DeleteTodoSchema = z.object({
  id: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
    message: 'Invalid ID format',
  }),
})

/**
 * Helper to convert MongoDB Todo to API TodoResponse
 */
export function todoToResponse(todo: Todo): TodoResponse {
  return {
    id: todo._id!.toString(),
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  }
}
