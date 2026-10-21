import dynamic from "next/dynamic";
import { createMetadata } from "@/features/seo";
import { SITE } from "@/features/seo/site.config";
import { PERIDOT_URLS } from "@/features/peridot/peridot-urls";
import { FeatureHeader } from "@/shared/components/atoms/FeatureHeader";
import { Button } from "@/shared/components/molecules/Button";
import ContainerPadding from "@/shared/components/atoms/ContainerPadding";
import GlassComponent from "@/shared/components/atoms/GlassComponent";
import {
  LuBadgeCheck,
  LuCode,
  LuShieldCheck,
} from "react-icons/lu";

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
import { AppShowcase } from "@/features/peridot-id/components/app-showcase";

export const metadata = createMetadata({
  title: "Peridot ID — One gaming identity for players and developers",
  description:
    "PeridotID is a free gaming identity with a built-in web3 wallet for players, studios, and developers.",
  path: "/identity",
  image: `${SITE.domain}/seo/social-preview.png`,
});

const EXTERNAL_REL = "noopener noreferrer";
const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

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

const PRODUCTS = [
  {
    title: "Web3 wallet",
    body: "A wallet built for players, bundled with their identity.",
    bullets: [
      "Your game assets and collectibles live beside your profile",
      "Works on the blockchain you choose at transaction time",
      "No separate wallet install needed to start playing",
    ],
    cta: { label: "Open the app", href: PERIDOT_URLS.app },
  },
  {
    title: "Profiles & sessions",
    body: "One profile that carries progress and identity across games.",
    bullets: [
      "Shared sign-in and sessions across Peridot games",
      "Player profile that follows players game-to-game",
      "Studios skip building auth and account plumbing",
    ],
    cta: { label: "Explore the app", href: PERIDOT_URLS.app },
  },
] as const;

const DEV_STEPS = [
  {
    title: "Create a project",
    body: "Register your game in the developer dashboard to get started.",
  },
  {
    title: "Add PeridotID to your game",
    body: "Follow the integration guide to add sign-in, profiles, and the wallet to your client.",
  },
  {
    title: "Go live",
    body: "Launch to players with the same identity across every title you ship.",
  },
] as const;

const FAQS = [
  {
    q: "Is PeridotID free?",
    a: "Yes. There is no seat fee and no API-call fee for players, studios, or developers. Peridot earns a fee on on-chain transaction fees on the blockchain the user chooses — nothing else.",
  },
  {
    q: "Which blockchains does it work with?",
    a: "Transactions settle on the blockchain the user chooses at transaction time. We do not lock players or studios into a single chain.",
  },
  {
    q: "Do players need a wallet before they start?",
    a: "No. The wallet is bundled with the player's PeridotID, so players can sign in and play without installing a separate wallet first.",
  },
  {
    q: "How do developers start integrating?",
    a: "Create a project in the developer dashboard, follow the integration guide to add PeridotID to your game, then go live. The developer section above links both the dashboard and the docs.",
  },
  {
    q: "Where do a player's keys and assets live?",
    a: "The player's wallet and assets are tied to their PeridotID and travel with their profile from game to game. For recovery and custody specifics, check the docs and the app's current guidance.",
  },
  {
    q: "How is this different from privy.io?",
    a: "Privy offers general embedded wallets for apps. PeridotID is gaming-native: identity, cross-game profiles, shared sessions, and a player wallet bundled as one integration built for games.",
  },
  {
    q: "How do you estimate Privy and ZeroDev costs?",
    a: "The hero calculator multiplies users × actions per day × 30. For Privy we apply the public tier base ($299 Core, $499 Scale, $2,000 PAYG past 10,000 MAU) plus $0.01 per signature past the 50,000 included signatures. For ZeroDev we count each action as one wallet signature (10 credits), apply $69 Launch up to 100,000 credits and $399 Scale up to 1,000,000 credits, plus $0.001 per credit beyond that. Gas-sponsorship premiums are excluded, so real bills can be higher. Sources: privy.io/pricing and zerodev.app/pricing.",
  },
] as const;

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
              <ContainerGlass key={a.title} title={a.title} description={a.body} />
            ))}
          </div>
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

function ProductsSection() {
  return (
    <AnimatedContent>
      <section aria-labelledby="products" className="w-full py-24 max-md:py-10">
        <ContainerPadding className="flex flex-col items-center gap-12 max-md:gap-8">
          <h2 className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent text-center text-5xl font-bold max-md:text-3xl">
            <span id="products">Products, including the web3 wallet</span>
          </h2>
          <div className="grid w-full grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6">
            {PRODUCTS.map((p) => (
              <GlassComponent
                key={p.title}
                className="flex flex-col gap-3 rounded-2xl p-8 max-md:p-6"
              >
                <h3 className="text-xl font-semibold max-md:text-lg">
                  {p.title}
                </h3>
                <p className="text-neutral-300">{p.body}</p>
                <ul className="flex list-disc flex-col gap-1 pl-5 text-neutral-300">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <a
                    href={p.cta.href}
                    target="_blank"
                    rel={EXTERNAL_REL}
                    aria-label={`${p.cta.label} in the PeridotID app (opens in a new tab)`}
                    className={`inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium duration-300 hover:bg-surface hover:text-white ${FOCUS_RING}`}
                  >
                    {p.cta.label}
                  </a>
                </div>
              </GlassComponent>
            ))}
          </div>
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

function DevelopersSection() {
  return (
    <AnimatedContent>
      <section
        id="developers"
        aria-label="Build on PeridotID"
        className="w-full py-24 max-md:py-10"
      >
        <ContainerPadding className="flex flex-col gap-12 max-md:gap-8">
          <FeatureHeader
            Icon={LuCode}
            title="Build on PeridotID"
            description="Gaming-native identity integration — profiles, sessions, and wallet bundled — with a free tier for getting started."
          />
          <ol className="grid w-full list-none grid-cols-3 gap-8 p-0 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-6">
            {DEV_STEPS.map((s, i) => (
              <GlassComponent
                key={s.title}
                className="flex flex-col gap-3 rounded-2xl p-8 max-md:gap-2 max-md:p-6"
              >
                <span
                  aria-hidden="true"
                  className="text-sm font-semibold text-accent"
                >
                  Step {i + 1}
                </span>
                <h3 className="text-xl font-semibold max-md:text-lg">
                  {s.title}
                </h3>
                <p className="text-neutral-300 max-md:text-base">{s.body}</p>
              </GlassComponent>
            ))}
          </ol>
          <div className="flex gap-6 max-md:flex-col max-md:gap-4">
            <a
              href={PERIDOT_URLS.dashboard}
              target="_blank"
              rel={EXTERNAL_REL}
              aria-label="Open the PeridotID developer dashboard (opens in a new tab)"
              className={`rounded-xl ${FOCUS_RING}`}
            >
              <Button tabIndex={-1}>Open developer dashboard</Button>
            </a>
            <a
              href={PERIDOT_URLS.docs}
              target="_blank"
              rel={EXTERNAL_REL}
              aria-label="Read the Peridot developer docs (opens in a new tab)"
              className={`rounded-lg ${FOCUS_RING}`}
            >
              <GlassComponent className="flex min-h-[44px] items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-sm font-medium duration-300 hover:bg-surface hover:text-white">
                Read the docs
              </GlassComponent>
            </a>
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
        <ContainerPadding>
          <FeatureHeader
            Icon={LuBadgeCheck}
            title="Completely free to use"
            description="PeridotID is completely free: no seat fee and no API-call fee for players, studios, or developers. Peridot earns a fee on on-chain transaction fees on the blockchain the user chooses. There is no hidden SDK fee."
          />
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

function SecuritySection() {
  return (
    <AnimatedContent>
      <section
        id="security"
        aria-label="Security basics"
        className="w-full py-24 max-md:py-10"
      >
        <ContainerPadding>
          <FeatureHeader
            Icon={LuShieldCheck}
            title="Security basics"
            description="PeridotID sessions are scoped per product, and outbound links on this page open with evaluated referrer protections. We describe only what exists today — check the docs and the app for current account-protection guidance."
          />
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

function FaqSection() {
  return (
    <AnimatedContent>
      <section aria-labelledby="faq" className="w-full py-24 max-md:py-10">
        <ContainerPadding className="flex flex-col gap-12 max-md:gap-8">
          <h2 className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent text-4xl font-bold max-md:text-3xl">
            <span id="faq">Frequently asked questions</span>
          </h2>
          <div className="flex w-full flex-col gap-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-white/5 px-6 py-4"
              >
                <summary
                  className={`flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-lg font-medium [&::-webkit-details-marker]:hidden ${FOCUS_RING}`}
                >
                  {f.q}
                  <span aria-hidden="true" className="shrink-0 text-accent">
                    +
                  </span>
                </summary>
                <p className="wrap-break-word pt-2 text-neutral-300">{f.a}</p>
              </details>
            ))}
          </div>
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

function FinalCtaSection() {
  return (
    <AnimatedContent>
      <section
        aria-labelledby="get-started"
        className="w-full py-24 max-md:py-10"
      >
        <ContainerPadding>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-white/5 p-10 text-center max-md:p-6">
            <h2 className="bg-linear-to-tr from-primary via-accent to-accent bg-clip-text text-transparent text-4xl font-bold max-md:text-3xl">
              <span id="get-started">Get started with PeridotID</span>
            </h2>
            <div className="flex gap-6 max-md:w-full max-md:flex-col max-md:gap-4">
              <a
                href={PERIDOT_URLS.app}
                target="_blank"
                rel={EXTERNAL_REL}
                aria-label="Launch the PeridotID app (opens in a new tab)"
                className={`rounded-xl max-md:w-full ${FOCUS_RING}`}
              >
                <Button tabIndex={-1}>Launch the app</Button>
              </a>
              <a
                href={PERIDOT_URLS.dashboard}
                target="_blank"
                rel={EXTERNAL_REL}
                aria-label="Go to the PeridotID developer dashboard (opens in a new tab)"
                className={`rounded-lg max-md:w-full ${FOCUS_RING}`}
              >
                <GlassComponent className="flex min-h-[44px] items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-sm font-medium duration-300 hover:bg-surface hover:text-white">
                  Go to developer dashboard
                </GlassComponent>
              </a>
            </div>
          </div>
        </ContainerPadding>
      </section>
    </AnimatedContent>
  );
}

export default function PeridotIdPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <BurnHero />
      <AppShowcase />
      <AudiencesSection />
      <ProductsSection />
      <DevelopersSection />
      <PricingSection />
      <SecuritySection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
