import { createMetadata } from "@/features/seo";
import { SITE } from "@/features/seo/site.config";
import { SectionHeader } from "@/shared/components/atoms/SectionHeader";
import { RailCard } from "@/shared/components/molecules/RailCard";
import { Navbar } from "@/layouts/Navbar";
import { BurnHero } from "@/features/peridot-id/components/burn-hero";
import Pricing7 from "@/features/peridot-id/components/pricing-7";
import BentoStack from "@/features/peridot-id/components/bento-stack";
import BentoSecure from "@/features/peridot-id/components/bento-secure";
import Bento3 from "@/components/blocks/bento-3";

export const metadata = createMetadata({
  title: "Peridot ID — One gaming identity for players and developers",
  description:
    "PeridotID is a free gaming identity with a built-in web3 wallet for players, studios, and developers.",
  path: "/identity",
  image: `${SITE.domain}/seo/social-preview.png`,
});

const FEATURE = [
  {
    title: "Seamless Login",
    description: "Sign in with Google, Apple, email, or passkey. Your wallet is created silently — no seed phrases, no installs.",
    icon: "hn hn-google",
  },
  {
    title: "Built for Play",
    description: "Sessions, profiles, and progress that travel across every Peridot game. Log in once, pick up anywhere.",
    icon: "hn hn-user-headset",
  },
  {
    title: "US Stocks, In-Wallet",
    description: "Buy NVDA, Netflix, and more straight from your Peridot wallet. Games and investments, one balance.",
    icon: "hn hn-chart-line",
  },
] as const;

function FeaturesSection() {
  return (
    <>
      <section aria-label="Features" className="w-full border-b border-line">
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <SectionHeader
            title="One ID, everything included"
          />
          <div className="grid grid-cols-3 gap-px border-t border-line bg-line max-lg:grid-cols-2 max-md:grid-cols-1">
            {FEATURE.map((f) => (
              <RailCard
                key={f.title}
                title={f.title}
                description={f.description}
                media={
                  <i aria-hidden="true" className={`${f.icon} text-[12rem] text-foreground`} />
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function StackSection() {
  return (
    <>
      <section aria-label="Stack" className="w-full border-b border-line">
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <div className="grid gap-px bg-line md:grid-cols-3">
            <BentoStack />
            <BentoSecure />
            <Bento3 />
          </div>
        </div>
      </section>
    </>
  );
}

function PricingSection() {
  return (
    <>
      <section
        id="pricing"
        aria-label="Completely free to use"
        className="w-full border-b border-line"
      >
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <SectionHeader
            title="Completely free to use"
          />
          <Pricing7 />
        </div>
      </section>
    </>
  );
}

export default function PeridotIdPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <BurnHero />
      <FeaturesSection />
      <StackSection />
      <PricingSection />
    </div>
  );
}
