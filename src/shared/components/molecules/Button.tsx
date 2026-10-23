"use client";

import React from "react";
import clsx from "clsx";
import { GoArrowDownRight } from "react-icons/go";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  fullWidth?: boolean;
  /** Opt-in square corners (default keeps the rounded brand shape). */
  sharp?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      loading = false,
      fullWidth = false,
      sharp = false,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const radius = sharp ? "rounded-none" : "rounded-xl";

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          `flex items-center justify-center overflow-hidden group transition-all duration-300 bg-accent text-background h-full ${radius}`,
          fullWidth && "w-full",
          isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          className,
        )}
        {...props}
      >
        <span className={`bg-white w-full h-full flex items-center justify-center text-sm p-3 font-medium ${radius}`}>
          {loading ? "Loading..." : children}
        </span>

        <GoArrowDownRight
          className={clsx(
            "w-14 h-12 p-3 duration-300",
            !isDisabled && "group-hover:-rotate-45",
          )}
        />
      </button>
    );
  },
);

Button.displayName = "Button";
