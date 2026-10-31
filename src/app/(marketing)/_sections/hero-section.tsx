import Image from "next/image";
import { Button } from "@/shared/components/molecules/Button";
import { HeroBackground } from "@/shared/components/atoms/HeroBackground";

export function HeroSection() {
  return (
    <section id="hero" className="relative ml-[calc(50%-50vw)] flex min-h-[clamp(560px,90dvh,1000px)] w-screen flex-col">
      <HeroBackground />
      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-(--container-max-width) flex-1 flex-col justify-start gap-10 px-12 pt-(--navbar-height) pb-16 max-md:gap-8 max-md:px-6">
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
            <Button href="/#waitlist" variant="secondary">Learn more</Button>
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
