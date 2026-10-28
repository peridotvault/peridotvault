import { SectionHeader } from "@/shared/components/atoms/SectionHeader";
import { ButtonLink } from "@/shared/components/molecules/Button";
import { RailCard } from "@/shared/components/molecules/RailCard";

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

export function IdentitySection() {
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
