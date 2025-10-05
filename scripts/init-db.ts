/**
 * Database Initialization Script
 *
 * Creates necessary MongoDB indexes for the application.
 * Run this script during:
 * - Initial database setup
 * - Database migration scripts
 * - CI/CD deployment pipeline
 *
 * Usage: pnpm init-db
 */

import { getTodosCollection } from '../src/lib/mongodb'

async function createIndexes(): Promise<void> {
  const collection = await getTodosCollection()

  // Create indexes for common queries
  await collection.createIndex({ createdAt: -1 })
  await collection.createIndex({ completed: 1 })

  console.log('✓ MongoDB indexes created successfully')
}

// Run the script
createIndexes()
  .then(() => {
    console.log('✓ Database initialization complete')
    process.exit(0)
  })
  .catch((error) => {
    console.error('✗ Database initialization failed:', error)
    process.exit(1)
  })
