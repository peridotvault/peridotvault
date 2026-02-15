import React, { forwardRef } from "react";
import type { ReactNode } from "react";

type GlassComponentProps = {
  children: ReactNode;
  className?: string;
};

const GlassComponent = forwardRef<HTMLDivElement, GlassComponentProps>(function GlassComponent(
  { children, className },
  ref
) {
  return (
    <div ref={ref} className={`border bg-white/5 backdrop-blur-md border-white/10 ${className ?? ""}`}>
      {children}
    </div>
  );
});

export default GlassComponent;
