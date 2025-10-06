import { Component } from 'react'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Button } from './ui/button'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: (error: Error, reset: () => void) => ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * Get troubleshooting tips for MongoDB connection errors
 */
function getErrorTips(): Array<string> {
  return [
    'Check your MONGODB_URI in the .env file',
    'Verify your MongoDB credentials (username/password)',
    'Ensure your IP address is whitelisted in MongoDB Atlas',
    'Confirm MongoDB server is running and accessible',
  ]
}

/**
 * Error Boundary Component
 *
 * Catches React rendering errors and displays a fallback UI
 * instead of crashing the entire application.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  reset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.reset)
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 max-w-lg mx-auto">
          <Alert variant="destructive" className="border-2">
            <AlertCircle />
            <AlertTitle>
              {this.state.error.message}
            </AlertTitle>
            <AlertDescription>
              <p>Please check the following:</p>
              <ul className="list-inside list-disc text-sm">
                {getErrorTips().map((tip, index) => (
                  <li key={index} className="leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
              <Button onClick={this.reset} variant="default" className="mt-4">
                Try again
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      )
    }

    return this.props.children
  }
}
