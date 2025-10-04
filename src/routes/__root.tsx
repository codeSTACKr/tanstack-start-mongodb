import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { AlertCircle } from 'lucide-react'
import Header from '../components/Header'
import { ThemeProvider } from '../components/theme-provider'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
import { Button } from '../components/ui/button'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'
import { getServerTheme } from '../server/theme'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    // Fetch theme from cookie on server for SSR
    const theme = await getServerTheme()
    return { theme }
  },

  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 max-w-md mx-auto">
      <Alert className="border-2">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle className="text-xl">404 - Page Not Found</AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-4">The page you're looking for doesn't exist.</p>
          <Button asChild variant="default" className="mt-2">
            <a href="/">Go back home</a>
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  ),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  // Get theme from route context (set by beforeLoad)
  const { theme } = Route.useRouteContext()

  // Determine className for HTML element
  // For 'system' theme, we let the client script handle it since we can't detect system preference on server
  const htmlClassName = theme === 'dark' ? 'dark' : undefined

  return (
    <html lang="en" className={htmlClassName} suppressHydrationWarning>
      <head>
        <HeadContent />
        <script src="/theme.js" />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          <Header />
          {children}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
