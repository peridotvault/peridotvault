import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  actions?: ReactNode;
};

export const SectionHeader = ({
  title,
  actions,
}: SectionHeaderProps) => {
  return (
    <div className="grid gap-px bg-line md:grid-cols-3">
      <div className="grid gap-px bg-line md:col-span-2">
        <div className="bg-background px-12 py-18 max-md:px-8 max-md:py-12">
          <h2 className="text-7xl font-medium tracking-tight text-foreground md:text-8xl max-md:text-6xl">
            {title}
          </h2>
        </div>
      </div>
      {actions ? (
        <div className="flex items-end bg-background p-12 max-md:p-8">
          <div className="pointer-events-auto flex flex-wrap items-center gap-4">
            {actions}
          </div>
        </div>
      ) : (
        <div aria-hidden="true" className="bg-background max-md:hidden" />
      )}
    </div>
  );
};
