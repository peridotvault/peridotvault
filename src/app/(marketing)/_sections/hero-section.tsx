import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/shared/components/molecules/Button";

const GlyphTide = dynamic(
  () =>
    import("@/components/react-bits/glyph-tide").then((mod) => ({
      default: mod.GlyphTide,
    })),
  {
    loading: () => <div className="absolute inset-0 bg-background" />,
  },
);

export function HeroSection() {
  return (
    <section id="hero" className="relative ml-[calc(50%-50vw)] flex min-h-[clamp(560px,90dvh,1000px)] w-screen flex-col">
      <GlyphTide
        colors={["#349b65", "#87ee83"]}
        backgroundColor="#0d0f0e"
        interactive
        clickRipples
        className="absolute inset-x-0 top-0 bottom-0 h-auto opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 bottom-0 bg-linear-to-t from-background/85 via-background/25 to-background/10"
      />
      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-(--container-max-width) flex-1 flex-col justify-start gap-10 px-12 pb-16 max-md:gap-8 max-md:px-6">
        <div aria-hidden="true" className="w-full py-8">
          <Image
            src="/logo/logo-text.svg"
            alt="Peridot Text Logo"
            width={967}
            height={220}
            priority
            draggable={false}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div className="pointer-events-auto flex shrink-0 items-center gap-4">
            <Link href="/#waitlist">
              <Button variant="secondary">Learn more</Button>
            </Link>
            <span className="inline-flex h-12 items-center border border-line bg-background/60 px-6 text-base text-foreground">
              Powered by AI
            </span>
          </div>
          <h1 className="w-[320px] shrink-0 text-3xl leading-9 font-medium text-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] max-md:w-full max-md:text-xl">
            Intelligent Decentralized Gaming
          </h1>
        </div>
      </div>
    </section>
  );
}
