import dynamic from "next/dynamic";

const Grainient = dynamic(() => import("@/components/react-bits/grainient"), {
  loading: () => <div className="absolute inset-0 bg-background" />,
});

export function HeroBackground() {
  return (
    <>
      <Grainient
        colors={["#0d0f0e", "#123324", "#349b65", "#87ee83"]}
        angle={180}
        grainAmount={0.2}
        dpr={1}
        interactive
        clickSwirl
        className="absolute inset-0 opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/75 via-background/20 to-background/10"
      />
    </>
  );
}
