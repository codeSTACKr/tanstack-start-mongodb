/**
 * Type Definitions
 *
 * Centralized type definitions for the entire application.
 * These types provide end-to-end type safety from database → API → frontend.
 */

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

/**
 * Validation helper for todo title
 */
export function validateTodoTitle(title: unknown): title is string {
  return (
    typeof title === 'string' && title.trim().length > 0 && title.length <= 500
  )
}
