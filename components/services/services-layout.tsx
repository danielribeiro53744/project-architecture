import { ReactNode } from "react";

interface ServicesLayoutProps {
  children: ReactNode;
}

export function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <main className="py-16 md:py-24">
      <div className="container px-4 mx-auto">{children}</div>
    </main>
  );
}
