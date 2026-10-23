"use client";

import dynamic from "next/dynamic";

const Hero30NoSsr = dynamic(
  () =>
    import("./hero-30").then((mod) => ({
      default: mod.Hero30,
    })),
  { ssr: false },
);

export function BurnHero() {
  return <Hero30NoSsr />;
}

export default BurnHero;
