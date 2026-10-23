import dynamic from "next/dynamic";
import Image from "next/image";
import { createMetadata } from "@/features/seo";
import { SITE } from "@/features/seo/site.config";
import { FeatureHeader } from "@/shared/components/atoms/FeatureHeader";
import ContainerPadding from "@/shared/components/atoms/ContainerPadding";
import { LuBadgeCheck, LuLayers } from "react-icons/lu";

const AnimatedContent = dynamic(
  () => import("@/shared/components/animations/AnimatedContent"),
);
const ContainerGlass = dynamic(
  () =>
    import("@/shared/components/molecules/ContainerGlass").then((mod) => ({
      default: mod.ContainerGlass,
    })),
);
import { BurnHero } from "@/features/peridot-id/components/burn-hero";
import Pricing7 from "@/features/peridot-id/components/pricing-7";
import BentoStack from "@/features/peridot-id/components/bento-stack";
import BentoSecure from "@/features/peridot-id/components/bento-secure";

export const metadata = createMetadata({
  title: "Peridot ID — One gaming identity for players and developers",
  description:
    "PeridotID is a free gaming identity with a built-in web3 wallet for players, studios, and developers.",
  path: "/identity",
  image: `${SITE.domain}/seo/social-preview.png`,
});

const AUDIENCES = [
  {
    title: "Players",
    body: "One sign-in that works across every Peridot game. Your profile, sessions, and wallet follow you from game to game — no new account each time.",
  },
  {
    title: "Game studios",
    body: "Drop-in player identity without building auth, sessions, or account recovery yourself. Plug PeridotID in and focus on the game.",
  },
  {
    title: "Developers",
    body: "Integrate gaming-native identity the way you would with privy.io: profiles, sessions, and a wallet bundled in one integration.",
  },
] as const;

const FEATURE = [
  {
    title: "Seamless Login",
    description: "Sign in with Google, Apple, email, or passkey. Your wallet is created silently — no seed phrases, no installs.",
    image_url: "/assets/pebbo/sign-in.webp",
    image_alt: "Seamless Peridot ID login"
  },
  {
    title: "Built for Play",
    description: "Sessions, profiles, and progress that travel across every Peridot game. Log in once, pick up anywhere.",
    image_url: "/assets/pebbo/play.webp",
    image_alt: "Peridot ID built for play"
  },
  {
    title: "US Stocks, In-Wallet",
    description: "Buy NVDA, Netflix, and more straight from your Peridot wallet. Games and investments, one balance.",
    image_url: "/assets/pebbo/us-stock.webp",
    image_alt: "US Stocks in Peridot wallet"
  },
] as const;

function FeaturesSection() {
  return (
    <AnimatedContent>
      <section aria-labelledby="features" className="w-full py-24 max-md:py-10">
        <ContainerPadding className="flex flex-col items-center gap-12 max-md:gap-8">
          <FeatureHeader
            Icon={LuLayers}
            title="One ID, everything included"
            description="Login, play, and invest — three superpowers bundled into a single gaming identity."
          />
          <div className="grid w-full grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-6">
            {FEATURE.map((f) => (
              <div key={f.title} className="border bg-white/5 backdrop-blur-lg border-border duration-300 hover:-translate-y-4 overflow-hidden">
                <div className="w-full aspect-square bg-background p-10 max-md:p-6">
                  <Image
                    src={f.image_url}
                    className="w-full h-full object-cover opacity-80"
                    alt={f.image_alt}
                    draggable={false}
                    width={1280}
                    height={720}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="h-full flex flex-col gap-2 p-8 max-md:p-6">
                  <h3 className="text-2xl max-md:text-xl font-semibold">
                    <span id="features">{f.title}</span>
                  </h3>
                  <p className="text-paragraph text-lg max-md:text-base">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

function AudiencesSection() {
  return (
    <AnimatedContent>
      <section aria-labelledby="for-whom" className="w-full py-24 max-md:py-10">
        <ContainerPadding className="flex flex-col items-center gap-12 max-md:gap-8">
          <h2 className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent text-center text-5xl font-bold max-md:text-3xl">
            <span id="for-whom">Who PeridotID is for</span>
          </h2>
          <div className="grid w-full grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6">
            {AUDIENCES.map((a) => (
              <ContainerGlass key={a.title} title={a.title} description={a.body} sharp />
            ))}
          </div>
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

function StackSection() {
  return (
    <AnimatedContent>
      <section aria-labelledby="stack" className="w-full py-24 max-md:py-10">
        <ContainerPadding className="flex flex-col items-center gap-12 max-md:gap-8">
          <div className="grid w-full grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6">
            <BentoStack />
            <BentoSecure />
          </div>
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

function PricingSection() {
  return (
    <AnimatedContent>
      <section
        id="pricing"
        aria-label="Completely free to use"
        className="w-full py-24 max-md:py-10"
      >
        <ContainerPadding className="flex flex-col gap-12 max-md:gap-8">
          <FeatureHeader
            Icon={LuBadgeCheck}
            title="Completely free to use"
            description="PeridotID is completely free: no seat fee and no API-call fee for players, studios, or developers. Peridot earns a fee on on-chain transaction fees on the blockchain the user chooses. There is no hidden SDK fee."
          />
          <Pricing7 />
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

export default function PeridotIdPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <BurnHero />
      <FeaturesSection />
      <AudiencesSection />
      <StackSection />
      <PricingSection />
    </div>
  );
}
