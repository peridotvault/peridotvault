"use client";

import React from "react";
import clsx from "clsx";
import { GoArrowDownRight } from "react-icons/go";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  fullWidth?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      loading = false,
      fullWidth = false,
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
          "rounded-xl flex items-center justify-center overflow-hidden group transition-all duration-300 bg-accent text-background h-full",
          fullWidth && "w-full",
          isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          className,
        )}
        {...props}
      >
        <span className="bg-white w-full rounded-xl h-full flex items-center justify-center text-sm p-3 font-medium">
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
