import clsx from "clsx";

export default function ContainerPadding({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-(--container-max-width) w-full mx-auto px-12 max-md:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
