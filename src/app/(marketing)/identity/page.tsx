import { createMetadata } from "@/features/seo";
import { SITE } from "@/features/seo/site.config";
import { IdentityHero } from "@/features/peridot-id/components/identity-hero";
import { FeaturesSection } from "./_sections/features-section";
import { StackSection } from "./_sections/stack-section";
import { PricingSection } from "./_sections/pricing-section";
import { RailSection } from "@/shared/components/atoms/Rail";

export const metadata = createMetadata({
  title: "Peridot ID — One gaming identity for players and developers",
  description:
    "PeridotID is a free gaming identity with a built-in web3 wallet for players, studios, and developers.",
  path: "/identity",
  image: `${SITE.domain}/seo/social-preview.png`,
});

export default function PeridotIdPage() {
  return (
    <div className="flex flex-col">
      <RailSection><IdentityHero /></RailSection>
      <RailSection><StackSection /></RailSection>
      <RailSection><FeaturesSection /></RailSection>
      <RailSection><PricingSection /></RailSection>
    </div>
  );
}
