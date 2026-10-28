import dynamic from "next/dynamic";
import { RailCard } from "@/shared/components/molecules/RailCard";

const CarouselCard = dynamic(
  () =>
    import("@/shared/components/molecules/CarouselCard").then((mod) => ({
      default: mod.CarouselCard,
    })),
);

export function AboutSection() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto w-full max-w-(--container-max-width)">
        <div className="grid gap-px bg-line md:grid-cols-3">
          <div className="flex flex-col justify-center gap-5 bg-background px-12 py-18 max-md:px-8 max-md:py-12">
            <h2 className="text-5xl font-medium tracking-tight text-foreground max-md:text-4xl">
              Elevate Your Lifestyle with the Vault of Games
            </h2>
          </div>
          <div className="flex items-center overflow-hidden bg-background md:col-span-2 py-18 max-md:py-12">
            <CarouselCard />
          </div>
        </div>
        <div className="grid gap-px border-t border-line bg-line md:grid-cols-3">
          <RailCard
            title="Developers"
            description="Ship and monetize games with vault-backed ownership."
            media={
              <i aria-hidden="true" className="hn hn-code text-[12rem] text-foreground" />
            }
          />
          <RailCard
            title="Streamers"
            description="Grow your audience with ownable moments and rewards."
            media={
              <i aria-hidden="true" className="hn hn-video-camera text-[12rem] text-foreground" />
            }
          />
          <RailCard
            title="Players"
            description="Buy, download, and truly own the games you love."
            media={
              <i aria-hidden="true" className="hn hn-gaming text-[12rem] text-foreground" />
            }
          />
        </div>
      </div>
    </section>
  );
}
