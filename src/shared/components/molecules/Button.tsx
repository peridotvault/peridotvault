"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { GoArrowDownRight } from "react-icons/go";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      loading = false,
      fullWidth = false,
      variant = "primary",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          "group flex h-12 items-center justify-center overflow-hidden rounded-none transition-colors duration-300",
          variant === "primary"
            ? "bg-primary text-[#0a0c0b] hover:bg-accent"
            : "bg-white text-black hover:bg-accent",
          fullWidth && "w-full",
          isDisabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          className,
        )}
        {...props}
      >
        <span className="flex h-full w-full items-center justify-center p-3 text-sm font-medium">
          {loading ? "Loading..." : children}
        </span>

        <GoArrowDownRight
          aria-hidden="true"
          className={clsx(
            "h-full w-12 shrink-0 border-l border-black/15 p-3 transition-transform duration-300",
            !isDisabled && "group-hover:-rotate-45",
          )}
        />
      </button>
    );
  },
);

Button.displayName = "Button";

const buttonLinkVariants = {
  secondary: "bg-white text-black hover:bg-accent",
  outline:
    "border border-line text-foreground hover:border-accent hover:text-accent",
} as const;

type ButtonLinkProps = {
  href: string;
  external?: boolean;
  variant?: keyof typeof buttonLinkVariants;
  className?: string;
  children: React.ReactNode;
};

export const ButtonLink = ({
  href,
  external = false,
  variant = "outline",
  className,
  children,
}: ButtonLinkProps) => {
  const cls = clsx(
    "inline-flex h-12 items-center px-6 text-base transition-colors duration-300",
    buttonLinkVariants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
};
