/**
 * Server function for theme detection
 * Reads theme preference from cookie for SSR
 */

import { createServerFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'

export type Theme = 'dark' | 'light' | 'system'

const THEME_COOKIE_NAME = 'ui-theme'

/**
 * Get theme from cookie on the server
 * Used during SSR to render correct theme class on HTML element
 */
export const getServerTheme = createServerFn().handler((): Theme => {
  const theme = getCookie(THEME_COOKIE_NAME)

  // Validate theme value
  if (theme === 'dark' || theme === 'light' || theme === 'system') {
    return theme
  }

  // Default to system if no valid theme found
  return 'system'
})
