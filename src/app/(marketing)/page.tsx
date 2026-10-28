import { ScrollToTop } from "@/shared/components/atoms/ScrollToTop";
import { createMetadata } from "@/features/seo";
import { Navbar } from "@/layouts/Navbar";
import { HeroSection } from "./_sections/hero-section";
import { AboutSection } from "./_sections/about-section";
import { VideoSection } from "./_sections/video-section";
import { GameVaultSection } from "./_sections/game-vault-section";
import { IdentitySection } from "./_sections/identity-section";
import { WhitepaperRoadmapSection } from "./_sections/whitepaper-section";
import { Gallery } from "./_sections/gallery-section";

export const metadata = createMetadata({
  title: "Intelligent Decentralized Gaming",
  description:
    "Your next gaming era starts here personalized by AI and powered by blockchain. PeridotVault gives you control, simplicity, and freedom.",
  path: "/",
});

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
