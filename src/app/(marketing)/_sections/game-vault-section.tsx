import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/shared/components/atoms/SectionHeader";
import { Button } from "@/shared/components/molecules/Button";
import { RailCard } from "@/shared/components/molecules/RailCard";

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

export function GameVaultSection() {
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
