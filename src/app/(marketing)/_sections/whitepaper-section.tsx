import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/components/molecules/Button";

type WhitepaperRoadmapCardProps = {
  id: string;
  title: string;
  description: string;
  hookText: string;
  href: string;
  imgUrl: string;
};

function WhitepaperRoadmapCard({
  id,
  title,
  description,
  hookText,
  href,
  imgUrl,
}: WhitepaperRoadmapCardProps) {
  return (
    <section
      id={id}
      className="relative w-full aspect-3/4 max-md:aspect-4/3 overflow-hidden rounded-none bg-background"
    >
      <div className="absolute inset-0 z-0 top-0 left-0">
        <Image
          src={imgUrl}
          draggable={false}
          className="w-full h-full object-cover translate-y-[30%] object-top"
          loading="lazy"
          decoding="async"
          alt={title}
          width={1280}
          height={720}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-0 w-full h-2/3 bg-gradient-to-b from-background via-background to-transparent" />
      </div>

      <div className="relative lg:p-24 md:p-16 p-8 flex flex-col gap-8 max-md:gap-4 text-xl z-10">
        <h2 className="text-4xl font-medium tracking-tight text-foreground max-md:text-3xl">{title}</h2>
        <p className="text-paragraph max-md:text-base">{description}</p>
        <div className="py-4 max-md:py-2">
          <Link href={href}>
            <Button variant="secondary">{hookText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhitepaperRoadmapSection() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <div className="grid grid-cols-2 gap-px bg-line max-md:grid-cols-1">
          <WhitepaperRoadmapCard
            id="whitepaper"
            title="Whitepaper"
            description="Explore the vision, technology, and economics behind PeridotVault. Our whitepaper details how we're building the future of gaming-secure, decentralized, and player-first."
            hookText="Read Now"
            href="#"
            imgUrl="/assets/views/landing/whitepaper.webp"
          />
          <WhitepaperRoadmapCard
            id="roadmap"
            title="Roadmap"
            description="From concept to reality, our roadmap reflects our commitment to innovation and transparency. Track every stage as PeridotVault evolves."
            hookText="Get into it"
            href="/roadmap"
            imgUrl="/assets/views/landing/roadmap.gif"
          />
        </div>
        </div>
      </section>
    </>
  );
}
