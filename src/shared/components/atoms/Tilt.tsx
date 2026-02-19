import clsx from "clsx";

export default function Tilt({
  tiltDirection = "top",
  children,
}: {
  tiltDirection?: "top" | "bot";
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <div
        className={clsx(
          "transform-gpu transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.05]",
          tiltDirection === "top"
            ? "group-hover:transform-[perspective(1000px)_rotateX(-15deg)] group-hover:-translate-y-6"
            : "group-hover:transform-[perspective(1000px)_rotateX(15deg)] group-hover:translate-y-6",
        )}
      >
        {children}
      </div>
    </div>
  );
}
