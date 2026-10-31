import { PERIDOT_URLS } from "@/features/peridot/peridot-urls";
import { Button } from "@/shared/components/molecules/Button";
import { HeroBackground } from "@/shared/components/atoms/HeroBackground";
import { McpInstallCard } from "./mcp-install-card";

export function IdentityHero() {
  return (
    <section className="relative ml-[calc(50%-50vw)] flex min-h-[80dvh] w-screen items-center justify-center bg-background px-8 pt-[calc(var(--navbar-height)+4rem)] pb-16 text-foreground">
      <HeroBackground />
      <div className="relative z-10 flex w-full max-w-(--container-max-width) justify-center">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <div className="flex max-w-3xl flex-col items-center text-center [text-shadow:0_0_28px_rgba(10,10,10,0.9)]">
            <h1 className="text-6xl font-bold max-md:text-3xl">
              One login. One handle@pid. Every game.
            </h1>
            <p className="mt-4 text-xl text-paragraph max-md:text-base">
              PeridotID is your gaming identity — login, wallet, and balance in
              one SDK.
            </p>
            <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-6">
              <Button
                href={PERIDOT_URLS.dashboard}
                external
                variant="secondary"
                aria-label="Start building with Peridot ID for free (opens in a new tab)"
              >
                Start free
              </Button>
            </div>
          </div>

          <div className="mt-10 w-full max-w-xl min-w-0">
            <McpInstallCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IdentityHero;
