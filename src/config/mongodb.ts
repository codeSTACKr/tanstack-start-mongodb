/**
 * MongoDB Configuration
 *
 * Centralized configuration for MongoDB connection settings,
 * database names, and collection names.
 */

/**
 * Database name
 */
export const DB_NAME = 'tanstack-todos'

/**
 * Collection name for todos
 */
export const COLLECTION_NAME = 'todos'

/**
 * MongoDB connection configuration optimized for Cloudflare Workers
 * Note: appName should be set in the consuming module (mongodb.ts)
 */
export const MONGODB_CONNECTION_CONFIG = {
  maxPoolSize: 1, // Cloudflare Workers: Use minimal pooling (1 connection)
  minPoolSize: 0, // Cloudflare Workers: No minimum connections
  serverSelectionTimeoutMS: 5000, // Timeout after 5s if can't find server
} as const
