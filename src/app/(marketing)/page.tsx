import Link from "next/link";
import AnimatedContent from "../../shared/components/animations/AnimatedContent";
import { FeatureHeader } from "../../shared/components/atoms/FeatureHeader";
import { ContainerGlass } from "../../shared/components/molecules/ContainerGlass";
import { CarouselCard } from "../../shared/components/molecules/CarouselCard";
import { LuPuzzle } from "react-icons/lu";
import { SlWallet } from "react-icons/sl";
import Image from "next/image";
import { Button } from "@/shared/components/molecules/Button";
import { SideCorner } from "@/shared/components/atoms/SideCorner";
import { ScrollToTop } from "@/shared/components/atoms/ScrollToTop";

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
    <div className="flex flex-col items-center justify-center text-lg">
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <ProductShowcaseSection />
      <AiFeatureSection />
      <GameVaultSection />
      <NativeWalletSection />
      <WhitepaperRoadmapSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex w-full p-2">
      <div className="relative w-full flex justify-center overflow-hidden rounded-4xl">
        <div className="max-w-(--container-max-width) flex justify-center items-center px-8 h-[80dvh] ">
          <div className="w-full text-center flex flex-col gap-6 max-md:gap-4 ">
            <div className="mb-5 ">
              <label className="shadow-xl shadow-accent/30 py-2 px-4 rounded-lg ring-1 ring-accent/30 text-base max-md:text-sm">
                {/* Closed Beta Version 0.0.5 */}
                PeridotVault Testnet Live
              </label>
            </div>
            <h1 className="text-6xl font-bold max-md:text-3xl">
              Intelligent Decentralized Gaming
            </h1>
            <p className="text-xl max-w-200 max-md:text-base">
              Your next gaming era starts here personalized by AI and powered by
              blockchain. PeridotVault gives you control, simplicity, and
              freedom.
            </p>
          </div>
        </div>

        <video
          autoPlay
          draggable={false}
          muted
          loop
          className="absolute -z-20 w-full h-full top-0 left-0 object-cover"
        >
          <source src="https://res.cloudinary.com/dcf3oktvs/video/upload/v1743225301/hb1b0kqgmkjlpy9qglzy.mp4" />
        </video>

        <div className="w-full h-full bg-background opacity-30 absolute bottom-0 -z-10" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-(--container-max-width) flex max-md:flex-col justify-between px-8 py-24 max-md:py-10 gap-10 w-full overflow-hidden"
    >
      <div className="max-w-140 flex flex-col items-start gap-5">
        <p className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent max-md:text-sm">
          Gaming isn&apos;t just a hobby
        </p>
        <h2 className="text-4xl font-bold max-md:text-3xl">
          Elevate Your Lifestyle with the Vault of Games
        </h2>
        <p className="text-xl max-md:text-base">
          Blockchain Gaming Platform that allows Gamers to Buy, Download, and
          Play their favorite Games.
        </p>
      </div>
      <CarouselCard />
    </section>
  );
}

function ProductShowcaseSection() {
  return (
    <AnimatedContent>
      <section
        id="product"
        className="max-w-(--container-max-width) flex flex-col items-center gap-2 relative pt-24 max-md:py-10 pb-12 "
      >
        <div className="flex flex-col items-center text-center max-md:text-start gap-6 px-8">
          <h2 className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent text-5xl font-bold max-md:text-3xl w-full duration-300">
            Gaming, Evolved with AI and Web3
          </h2>
          <p className="w-4/5 max-md:w-full duration-300 max-md:text-base">
            PeridotVault is more than just a platform, it&apos;s where advanced
            AI meets decentralized technology to create a smarter, more
            connected gaming experience for players and developers alike
          </p>
        </div>

        <div className="relative">
          <div className="absolute bg-gradient-radial from-accent/40 via-transparent top-0 left-0 -translate-y-1/4 -z-10 w-full h-full" />
          <Image
            src="/assets/views/landing/mockup-home.webp"
            className="object-contain"
            draggable={false}
            alt="Mockup Home Page PeridotVault Desktop"
            width={1280}
            height={720}
          />
          <div className="w-full h-2/3 bg-linear-to-t from-background absolute bottom-[5%] left-0" />
        </div>
      </section>
    </AnimatedContent>
  );
}

function AiFeatureSection() {
  return (
    <AnimatedContent>
      <section className="px-8 max-md:px-4 py-24 max-md:py-10 w-full bg-surface relative">
        <SideCorner
          position="bottom-right"
          className="absolute right-2 top-0 -translate-y-full text-surface"
        />
        <SideCorner
          position="bottom-left"
          className="absolute left-2 top-0 -translate-y-full text-surface"
        />
        <SideCorner
          position="top-right"
          className="absolute right-2 bottom-0 translate-y-full text-surface"
        />
        <SideCorner
          position="top-left"
          className="absolute left-2 bottom-0 translate-y-full text-surface"
        />
        <div className="max-w-(--container-max-width) mx-auto flex gap-12 items-center justify-between max-lg:flex-col">
          <div className="w-1/2 max-lg:w-full flex flex-col gap-6">
            <div className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent">
              <span className="uppercase text-base max-md:text-sm">
                Feature
              </span>
              <h2 className="text-4xl font-bold max-md:text-3xl">
                Smarter Play, Powered by AI
              </h2>
            </div>
            <p className="max-md:text-base">
              PeridotVault&apos;s AI curates games just for you, assists your
              journey, and keeps communities safe - making every play smarter
              and more personal.
            </p>
            <div className="flex">
              <Link href="/ai">
                <Button>Learn More Our AI Features</Button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 aspect-4/3 max-lg:w-full max-lg:aspect-video  rounded-3xl overflow-hidden bg-background">
            <Image
              src="/assets/views/landing/ai.gif"
              alt="Image Person Playing Game"
              className="w-full h-full object-cover opacity-90"
              draggable={false}
              width={1280}
              height={720}
            />
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}

function GameVaultSection() {
  const features = [
    {
      title: "Buy Games Directly",
      description: "Purchase your favorite Web2 and Web3 titles seamlessly",
    },
    {
      title: "True Ownership",
      description: "Own your games as blockchain-backed assets forever",
    },
    {
      title: "Web2 & Web3 in One Place",
      description:
        "Play traditional and blockchain games on one seamless platform",
    },
  ];

  return (
    <AnimatedContent>
      <section className="max-w-(--container-max-width) px-8 py-24 max-md:py-10 w-full flex flex-col gap-12 max-md:gap-8">
        <FeatureHeader
          Icon={LuPuzzle}
          title="GameVault"
          description="Experience a new era of gaming with GameVault where buying games is simple, fast, and transparent. Own your collection forever with blockchain-backed security."
        />
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6">
          {features.map((item) => (
            <ContainerGlass
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </AnimatedContent>
  );
}

function NativeWalletSection() {
  const highlights = [
    {
      title: "Built for Gamers",
      description:
        "A wallet that works like magic-effortless, integrated, and ready when you are.",
      image: "/assets/views/landing/build-for-gamers.webp",
    },
    {
      title: "Secure & Self-Custodial",
      description:
        "Your assets are yours-no banks, no middlemen, just pure control.",
      image: "/assets/views/landing/secure.webp",
    },
  ];

  return (
    <AnimatedContent>
      <section className="max-w-(--container-max-width) px-8 max-md:px-4 py-24 max-md:py-10 w-full ">
        <div className="flex flex-col gap-12 max-md:gap-8 p-16 max-md:p-8 border border-border rounded-2xl duration-300">
          <FeatureHeader
            Icon={SlWallet}
            title="Native Wallet"
            description="Meet the wallet that feels invisible-always there, always secure. Complete control of your digital assets, without the complexity."
          />

          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 bh">
            {highlights.map((item) => (
              <div
                className="aspect-4/3 max-lg:aspect-video max-md:aspect-4/3 border hover:-translate-y-4 duration-300 bg-white/5 backdrop-blur-lg border-border rounded-2xl overflow-hidden"
                key={item.title}
              >
                <div className="w-full aspect-5/2 bg-background">
                  <Image
                    src={item.image}
                    className="w-full h-full object-cover opacity-80"
                    alt={item.title}
                    draggable={false}
                    width={1280}
                    height={720}
                  />
                </div>
                <div className="h-full flex flex-col gap-2 p-8 max-md:p-6">
                  <h2 className="text-2xl max-md:text-xl">{item.title}</h2>
                  <p className="text-paragraph max-md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedContent>
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
      className="w-full aspect-3/4 max-md:aspect-4/3 duration-300 rounded-2xl overflow-hidden relative"
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
        />
        <div className="bg-linear-to-b from-surface via-surface absolute top-0 w-full h-2/3" />
      </div>

      <div className="relative p-24 max-md:p-8 flex flex-col gap-8 max-md:gap-4 text-xl z-10">
        <h2 className="text-4xl font-bold max-md:text-3xl">{title}</h2>
        <p className="max-md:text-base">{description}</p>
        <div className="py-4 max-md:py-2">
          <Link
            href={href}
            className="py-4 max-md:py-2 px-6 max-md:px-4 max-md:text-base max-md:rounded-lg rounded-xl duration-300 hover:-translate-y-1 bg-white text-surface hover:bg-primary"
          >
            {hookText}
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhitepaperRoadmapSection() {
  return (
    <AnimatedContent>
      <div className="w-full flex justify-center py-24 max-md:py-10">
        <div className="max-w-(--container-max-width) w-full grid grid-cols-2 max-md:grid-cols-1 gap-8 px-8 max-md:px-4">
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
    </AnimatedContent>
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
