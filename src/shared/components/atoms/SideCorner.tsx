import React from "react";
import clsx from "clsx";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface SideCornerProps {
  position?: Position;
  size?: number; // default 50
  className?: string;
}

export const SideCorner: React.FC<SideCornerProps> = ({
  position = "top-left",
  size = 50,
  className,
}) => {
  const basePosition = {
    "top-left": "rotate-90",
    "top-right": "rotate-180",
    "bottom-right": "-rotate-90",
    "bottom-left": "",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={clsx(
        "absolute pointer-events-none",
        basePosition[position],
        className,
      )}
    >
      <path d="M0 0C0 37.3 9 50 50 50H0V0Z" fill="currentColor" />
    </svg>
  );
};
