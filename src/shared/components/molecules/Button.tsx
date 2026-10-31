"use client";

import React from "react";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "cn";

type ButtonVariant = "primary" | "secondary" | "outline";

const variantMap = {
  primary: "default",
  secondary: "secondary",
  outline: "outline",
} as const;

// Brand hover language on top of shadcn variants. secondary/outline visuals
// are re-pinned to brand tokens so the shadcn defaults (translucent
// secondary, muted outline hover) don't change the site's look.
const variantClass: Record<ButtonVariant, string> = {
  primary: "border-background/25 hover:bg-accent",
  secondary:
    "border-background/25 bg-foreground text-background hover:bg-accent",
  outline:
    "border-foreground/30 hover:border-accent hover:bg-transparent hover:text-accent",
};

// Divider between label and arrow cell — same hue family as the outer
// border so the line continues seamlessly around the corner.
const cellDivider: Record<ButtonVariant, string> = {
  primary: "border-background/20",
  secondary: "border-background/20",
  outline: "border-foreground/25",
};

export type ButtonProps = Omit<
  React.ComponentProps<typeof ShadcnButton>,
  "variant" | "size" | "render" | "nativeButton" | "children"
> & {
  variant?: ButtonVariant;
  /** When set, renders as a Next Link (or <a> with external) — never nest this Button inside another link. */
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      href,
      external = false,
      fullWidth = false,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) {
    const isDisabled = disabled || loading;
    return (
      <ShadcnButton
        ref={ref}
        variant={variantMap[variant]}
        size="lg"
        nativeButton={!href}
        render={
          href
            ? external
              ? (
                <a href={href} target="_blank" rel="noopener noreferrer" />
              )
              : (
                <Link href={href} />
              )
            : undefined
        }
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(
          "h-12 gap-0 rounded-none px-0 ps-6 pe-0 text-sm duration-100 justify-between",
          variantClass[variant],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        <span className="flex items-center pe-6">
          {loading ? "Loading..." : children}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "flex size-12 shrink-0 items-center justify-center border-l",
            cellDivider[variant],
          )}
        >
          <GoArrowDownRight className="size-4 transition-transform duration-150 ease-out group-hover/button:-rotate-45" />
        </span>
      </ShadcnButton>
    );
  },
);

Button.displayName = "Button";
