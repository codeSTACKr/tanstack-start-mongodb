import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 min-w-full items-center">
        <Sheet>
          <SheetTrigger asChild className="mr-2 md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                to="/"
                className="text-foreground/60 transition-colors hover:text-foreground text-sm font-medium"
                activeProps={{
                  className:
                    'text-foreground transition-colors hover:text-foreground text-sm font-medium',
                }}
              >
                Home
              </Link>
              <Link
                to="/todos"
                className="text-foreground/60 transition-colors hover:text-foreground text-sm font-medium"
                activeProps={{
                  className:
                    'text-foreground transition-colors hover:text-foreground text-sm font-medium',
                }}
              >
                Todo Demo
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link to="/" className="mr-6 flex items-center space-x-2">
          <img
            src="/tanstack-word-logo-white.svg"
            alt="TanStack"
            className="h-6 dark:invert-0 invert"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            to="/"
            className="text-foreground/60 transition-colors hover:text-foreground font-medium"
            activeProps={{
              className:
                'text-foreground transition-colors hover:text-foreground font-medium',
            }}
          >
            Home
          </Link>
          <Link
            to="/todos"
            className="text-foreground/60 transition-colors hover:text-foreground font-medium"
            activeProps={{
              className:
                'text-foreground transition-colors hover:text-foreground font-medium',
            }}
          >
            Todo Demo
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
