import dynamic from "next/dynamic";
import Image from "next/image";
import ContainerPadding from "@/shared/components/atoms/ContainerPadding";

const Tilt = dynamic(
  () => import("@/shared/components/atoms/Tilt"),
);
const Marquee = dynamic(
  () => import("@/shared/components/atoms/Marquee").then((mod) => ({ default: mod.Marquee })),
);

const GALLERY_ITEMS = [
  {
    imgUrl: "/img/gallery/team-working.jpg",
    alt: "Team Working",
  },
  {
    imgUrl: "/img/gallery/founder-judging-participant.jpg",
    alt: "Founder Judging Participant",
  },
  {
    imgUrl: "/img/gallery/winner-participant-with-founder.jpg",
    alt: "Winner Participant With Founder",
  },
  {
    imgUrl: "/img/gallery/hackathon-team-discussion.jpg",
    alt: "Hackathon Team Discussion",
  },
  {
    imgUrl: "/img/gallery/team-working.jpg",
    alt: "Team Working",
  },
  {
    imgUrl: "/img/gallery/founder-judging-participant.jpg",
    alt: "Founder Judging Participant",
  },
  {
    imgUrl: "/img/gallery/winner-participant-with-founder.jpg",
    alt: "Winner Participant With Founder",
  },
  {
    imgUrl: "/img/gallery/hackathon-team-discussion.jpg",
    alt: "Hackathon Team Discussion",
  },
];

export function Gallery() {
  return (
    <section className="py-24 max-md:py-10 flex flex-col items-center gap-12 overflow-hidden border-b border-line">
      <ContainerPadding className="flex flex-col gap-6 mb-12">
        <div className="px-3">
          <span className="text-accent uppercase text-base lg:text-xl md:text-lg">Community</span>
        </div>
        <h2 className="lg:text-6xl md:text-5xl text-4xl max-w-4xl font-medium tracking-tight text-foreground px-3">
          From Digital Vision to Real World Gaming Impact.
        </h2>
      </ContainerPadding>
      <div className="flex flex-col gap-8 max-w-screen justify-center">
        <Marquee>
          {GALLERY_ITEMS.map((item, index) => (
            <Tilt key={index}>
              <div className="xl:h-110 lg:h-100 md:h-90 h-80 bg-muted rounded-none border border-line overflow-hidden">
                <Image
                  src={item.imgUrl}
                  alt={item.alt}
                  width={300}
                  height={400}
                  draggable={false}
                  className="h-full w-auto object-cover shrink-0"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </Tilt>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
