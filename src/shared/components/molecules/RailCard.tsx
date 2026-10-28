import Link from "next/link";
import type { ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import clsx from "clsx";
import { DotGrid } from "@/shared/components/atoms/DotGrid";

type RailCardProps = {
  title: string;
  description: string;
  media?: ReactNode;
  href?: string;
  external?: boolean;
  arrow?: boolean;
  className?: string;
};

export const RailCard = ({
  title,
  description,
  media,
  href,
  external = false,
  arrow,
  className,
}: RailCardProps) => {
  const isLink = href !== undefined;
  const showArrow = arrow ?? isLink;

  const body = showArrow ? (
    <div className="flex flex-1 items-stretch justify-between border-t border-line group-hover:border-[#0a0c0b40]">
      <div className="flex flex-col justify-center gap-2 p-8 max-md:p-6">
        <h3 className="text-3xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-background max-md:text-2xl">
          {title}
        </h3>
        <p className="text-paragraph transition-colors duration-300 group-hover:text-background">
          {description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="flex aspect-square h-auto w-auto shrink-0 items-center justify-center self-stretch border-l border-line text-foreground transition-colors duration-300 group-hover:border-[#0a0c0b40] group-hover:text-background max-md:aspect-auto max-md:h-20 max-md:w-20"
      >
        <LuArrowUpRight className="h-8 w-8 transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </div>
  ) : (
    <div className="flex flex-1 flex-col justify-center gap-2 border-t border-line p-8 max-md:p-6">
      <h3 className="text-3xl font-medium tracking-tight text-foreground max-md:text-2xl">
        {title}
      </h3>
      <p className="text-paragraph">{description}</p>
    </div>
  );

  const content = (
    <>
      {media ? (
        <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden">
          <DotGrid />
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            {media}
          </div>
        </div>
      ) : null}
      {body}
    </>
  );

  if (!isLink) {
    return (
      <div className={clsx("flex flex-col bg-background", className)}>
        {content}
      </div>
    );
  }

  const linkClass = clsx(
    "group flex flex-col bg-background transition-[background-color,box-shadow] duration-300 hover:bg-foreground hover:ring-1 hover:ring-inset hover:ring-[#0a0c0b40]",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {content}
    </Link>
  );
};
