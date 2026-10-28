import Link from "next/link";
import dynamic from "next/dynamic";
import { SectionHeader } from "@/shared/components/atoms/SectionHeader";
import Image from "next/image";
import { Button, ButtonLink } from "@/shared/components/molecules/Button";
import { RailCard } from "@/shared/components/molecules/RailCard";
import { ScrollToTop } from "@/shared/components/atoms/ScrollToTop";
import ContainerPadding from "@/shared/components/atoms/ContainerPadding";
import { createMetadata } from "@/features/seo";
import { Navbar } from "@/layouts/Navbar";

const CarouselCard = dynamic(
  () =>
    import("../../shared/components/molecules/CarouselCard").then((mod) => ({
      default: mod.CarouselCard,
    })),
);
const Tilt = dynamic(
  () => import("@/shared/components/atoms/Tilt"),
);
const GlyphTide = dynamic(
  () =>
    import("@/components/react-bits/glyph-tide").then((mod) => ({
      default: mod.GlyphTide,
    })),
  {
    loading: () => <div className="absolute inset-0 bg-background" />,
  },
);
const Marquee = dynamic(
  () => import("@/shared/components/atoms/Marquee").then((mod) => ({ default: mod.Marquee })),
);

export const metadata = createMetadata({
  title: "Intelligent Decentralized Gaming",
  description:
    "Your next gaming era starts here personalized by AI and powered by blockchain. PeridotVault gives you control, simplicity, and freedom.",
  path: "/",
});

type WhitepaperRoadmapCardProps = {
  id: string;
  title: string;
  description: string;
  hookText: string;
  href: string;
  imgUrl: string;
};

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <ScrollToTop />
      <HeroSection />
      <Navbar />
      <AboutSection />
      <VideoSection />
      <GameVaultSection />
      <IdentitySection />
      <WhitepaperRoadmapSection />
      <Gallery />
    </div>
  );
}

function HeroSection() {
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

function VideoSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-line">
      <video
        autoPlay
        draggable={false}
        muted
        loop
        playsInline
        className="aspect-video w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dcf3oktvs/video/upload/v1743225301/hb1b0kqgmkjlpy9qglzy.mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background to-transparent"
      />
    </section>
  );
}

function AboutSection() {
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

function GameVaultSection() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <SectionHeader
            title="The Vault for games you truly own."
            actions={
              <a
                href="https://web.peridotvault.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">Open the Vault</Button>
              </a>
            }
          />
          <div className="grid gap-px border-t border-line bg-line md:grid-cols-3 md:grid-rows-3">
            <div className="grid gap-px bg-line md:row-span-3 md:grid-rows-3">
              {GAME_VAULT_FEATURES.map((item) => (
                <RailCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  media={
                    <i aria-hidden="true" className={`${item.icon} text-[12rem] text-foreground`} />
                  }
                />
              ))}
            </div>
            <div className="relative overflow-hidden bg-background max-md:aspect-video md:col-span-2 md:row-span-2">
              <Image
                src="/assets/views/landing/mockup-home.webp"
                className="absolute inset-0 h-full w-full object-contain object-bottom"
                draggable={false}
                alt="Mockup Home Page PeridotVault Desktop"
                width={1280}
                height={720}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
                priority
              />
              <div className="absolute bottom-0 left-0 h-2/3 w-full bg-linear-to-t from-background" />
            </div>
            <div className="flex items-stretch bg-background md:col-span-2">
              <div className="flex flex-1 flex-col justify-center gap-4 p-8 max-md:p-6">
                <h2 className="text-4xl font-medium tracking-tight text-foreground max-md:text-3xl">
                  Smarter Play, Powered by AI
                </h2>
                <div className="flex">
                  <Link href="/ai">
                    <Button variant="secondary">
                      Learn More Our AI Features
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative w-2/5 shrink-0 overflow-hidden max-md:hidden">
                <Image
                  src="/assets/views/landing/ai.gif"
                  alt="Image Person Playing Game"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                  draggable={false}
                  width={1280}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const GAME_VAULT_FEATURES = [
  {
    title: "Buy Games Directly",
    description: "Purchase your favorite Web2 and Web3 titles seamlessly",
    icon: "hn hn-shopping-cart",
  },
  {
    title: "True Ownership",
    description: "Own your games as blockchain-backed assets forever",
    icon: "hn hn-lock",
  },
  {
    title: "Web2 & Web3 in One Place",
    description:
      "Play traditional and blockchain games on one seamless platform",
    icon: "hn hn-globe",
  },
];

const IDENTITY_FEATURES = [
  {
    title: "Seamless Login",
    description:
      "Sign in with Google, Apple, email, or passkey. Your wallet is created silently — no seed phrases, no installs.",
    icon: "hn hn-google",
  },
  {
    title: "Built for Play",
    description:
      "Sessions, profiles, and progress that travel across every Peridot game. Log in once, pick up anywhere.",
    icon: "hn hn-user-headset",
  },
  {
    title: "US Stocks, In-Wallet",
    description:
      "Buy NVDA, Netflix, and more straight from your Peridot wallet. Games and investments, one balance.",
    icon: "hn hn-chart-line",
  },
];

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

function IdentitySection() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <SectionHeader
            title="One identity for every game."
            actions={
              <ButtonLink href="/identity" variant="outline">
                Meet PeridotID
              </ButtonLink>
            }
          />

          <div className="grid grid-cols-3 gap-px border-t border-line bg-line max-lg:grid-cols-2 max-md:grid-cols-1">
            {IDENTITY_FEATURES.map((item) => (
              <RailCard
                key={item.title}
                title={item.title}
                description={item.description}
                media={
                  <i aria-hidden="true" className={`${item.icon} text-[12rem] text-foreground`} />
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

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

function WhitepaperRoadmapSection() {
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

function Gallery() {
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

// function TeamSection() {
//   const teamMembers = [
//     {
//       image: "/assets/teams/the-founder.webp",
//       name: "Ranaufal Muha",
//       title: "Founder, CEO",
//     },
//     {
//       image: "./assets/teams/the-backend.webp",
//       name: "Iqbal Muhakim",
//       title: "Co-Founder, Core Systems Engineer",
//     },
//   ];

//   return (
//     <AnimatedContent>
//       <section
//         id="team"
//         className="max-w-(--container-max-width) w-full flex flex-col justify-center px-8 gap-20 max-md:gap-12 py-24 max-md:py-10"
//       >
//         <div className="flex flex-col items-center gap-6 max-md:gap-4">
//           <h2 className="text-5xl font-bold max-md:text-3xl">
//             Meet Our <span className="text-accent">Team</span>
//           </h2>
//           <p className="text-xl w-200 text-center max-md:text-base">
//             Passionate Innovators Driving PeridotVault Forward
//           </p>
//         </div>
//         <div className="flex max-md:flex-col justify-center items-center gap-10 max-md:gap-6">
//           {teamMembers.map((item) => (
//             <div
//               key={item.name}
//               className="aspect-4/5 max-lg:aspect-3/4 max-md:aspect-square  duration-300 w-full h-full"
//             >
//               <TiltedCard
//                 imageSrc={item.image}
//                 altText={item.name}
//                 captionText={item.title}
//                 rotateAmplitude={12}
//                 scaleOnHover={1.1}
//                 showMobileWarning={false}
//                 showTooltip={true}
//                 displayOverlayContent={true}
//                 overlayContent={
//                   <div className="p-10 w-full h-full flex flex-col justify-end text-center">
//                     <h3 className="text-2xl font-bold">{item.name}</h3>
//                     <p>{item.title}</p>
//                   </div>
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </AnimatedContent>
//   );
// }
