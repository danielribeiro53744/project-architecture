import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <main className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Architecture Blog</h1>
          <p className="text-muted-foreground">
            Insights, stories, and updates from the world of modern architecture.
          </p>
        </header>
        {children}
      </div>
    </main>
  );
}
