/**
 * Server Functions for Todos
 *
 * Modern TanStack Start pattern using createServerFn for type-safe server operations.
 * These functions run exclusively on the server and provide automatic type inference.
 */

import { createServerFn } from '@tanstack/react-start'
import { ObjectId } from 'mongodb'
import { getTodosCollection } from '../lib/mongodb'
import { todoToResponse, validateTodoTitle } from '../lib/types'
import type { CreateTodoRequest, TodoResponse, UpdateTodoRequest } from '../lib/types'

/**
 * Get all todos
 * Default method is GET
 */
export const getTodos = createServerFn().handler(async () => {
  const collection = await getTodosCollection()
  const todos = await collection
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return todos.map(todoToResponse)
})

/**
 * Create a new todo
 */
export const createTodo = createServerFn({ method: 'POST' })
  .inputValidator((data: CreateTodoRequest) => {
    if (!validateTodoTitle(data.title)) {
      throw new Error('Title must be a non-empty string (max 500 characters)')
    }
    return data
  })
  .handler(async ({ data }: { data: CreateTodoRequest }) => {
    const collection = await getTodosCollection()
    const now = new Date()

    const newTodo = {
      title: data.title.trim(),
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

    return createdTodo
  })

/**
 * Update a todo
 */
export const updateTodo = createServerFn({ method: 'POST' })
  .inputValidator((data: UpdateTodoRequest & { id: string }) => {
    if (!ObjectId.isValid(data.id)) {
      throw new Error('Invalid ID format')
    }
    if (!data.title && data.completed === undefined) {
      throw new Error('Must provide at least one field to update (title or completed)')
    }
    if (data.title !== undefined && !validateTodoTitle(data.title)) {
      throw new Error('Title must be a non-empty string (max 500 characters)')
    }
    return data
  })
  .handler(async ({ data }: { data: UpdateTodoRequest & { id: string } }) => {
    const collection = await getTodosCollection()
    const { id, ...updates } = data

    const updateData: {
      updatedAt: Date
      title?: string
      completed?: boolean
    } = {
      updatedAt: new Date(),
    }

    if (updates.title !== undefined) {
      updateData.title = updates.title.trim()
    }
    if (updates.completed !== undefined) {
      updateData.completed = updates.completed
    }

    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: 'after' },
    )

    if (!result) {
      throw new Error(`Todo with id ${id} not found`)
    }

    return todoToResponse(result)
  })

/**
 * Delete a todo
 */
export const deleteTodo = createServerFn({ method: 'POST' })
  .inputValidator((data: { id: string }) => {
    if (!ObjectId.isValid(data.id)) {
      throw new Error('Invalid ID format')
    }
    return data
  })
  .handler(async ({ data }: { data: { id: string } }) => {
    const collection = await getTodosCollection()
    const result = await collection.deleteOne({ _id: new ObjectId(data.id) })

    if (result.deletedCount === 0) {
      throw new Error(`Todo with id ${data.id} not found`)
    }

    return { success: true }
  })
