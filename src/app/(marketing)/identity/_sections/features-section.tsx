import { SectionHeader } from "@/shared/components/atoms/SectionHeader";
import { RailCard } from "@/shared/components/molecules/RailCard";

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

export function FeaturesSection() {
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
