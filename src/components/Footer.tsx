export function Footer() {
  return (
    <footer className="mt-auto border-t bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-2">Built with Modern Technologies</h3>
          <p className="text-sm text-muted-foreground">A powerful stack for type-safe full-stack development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <a
            href="https://tanstack.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:border-border hover:bg-card transition-all group cursor-pointer"
          >
            <span className="text-xs text-muted-foreground mb-1">Framework</span>
            <span className="font-semibold text-sm group-hover:text-foreground transition-colors">TanStack Start</span>
          </a>

          <a
            href="https://www.mongodb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg bg-[#00ED64]/5 border border-[#00ED64]/20 hover:border-[#00ED64]/40 hover:bg-[#00ED64]/10 transition-all group cursor-pointer"
          >
            <span className="text-xs text-muted-foreground mb-1">Database</span>
            <span className="font-bold text-sm group-hover:text-foreground transition-colors">MongoDB</span>
          </a>

          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:border-border hover:bg-card transition-all group cursor-pointer"
          >
            <span className="text-xs text-muted-foreground mb-1">Language</span>
            <span className="font-semibold text-sm group-hover:text-foreground transition-colors">TypeScript</span>
          </a>
        </div>

        <div className="text-center pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            Demo application showcasing modern full-stack development patterns
          </p>
        </div>
      </div>
    </footer>
  )
}
