import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type StarBorderProps<C extends ElementType> = {
    as?: C;
    className?: string;
    color?: string;
    speed?: string;
    thickness?: number;
    children: ReactNode;
} & Omit<ComponentPropsWithoutRef<C>, "as" | "children" | "color">;

const StarBorder = <C extends ElementType = "button">({
    as: Component = "button",
    className = "",
    color = "white",
    speed = "6s",
    thickness = 1,
    children,
    ...rest
}: StarBorderProps<C>) => {
    return (
        <Component
            className={`relative inline-block overflow-hidden border border-accent_secondary/50 bg-accent_secondary rounded-xl`}
            style={{
                padding: `${thickness}px 0`,
                ...(rest.style || {})
            }}
            {...rest}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div className={`relative z-1 ${className}`}>
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;
