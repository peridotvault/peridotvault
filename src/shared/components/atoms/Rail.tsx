import type { ReactNode } from "react";

/** Full-width divider for a page section; the child retains its own semantics. */
export function RailSection({ children }: { children: ReactNode }) {
  return <div className="section-rail">{children}</div>;
}

/** Vertical rails aligned to the shared content width, including in full-bleed headers. */
export function RailEdges({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-(--container-max-width) -translate-x-1/2 border-x border-line ${className}`}
    />
  );
}
