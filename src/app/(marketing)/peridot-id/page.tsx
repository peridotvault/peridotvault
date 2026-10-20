import Link from "next/link";
import { createMetadata } from "@/features/seo";
import { SITE } from "@/features/seo/site.config";
import { PERIDOT_URLS } from "@/features/peridot/peridot-urls";

export const metadata = createMetadata({
  title: "Peridot ID — One gaming identity for players and developers",
  description:
    "PeridotID is a free gaming identity with a built-in web3 wallet for players, studios, and developers.",
  path: "/peridot-id",
  image: `${SITE.domain}/seo/social-preview.png`,
});

const EXTERNAL_REL = "noopener noreferrer";
const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
const CARD =
  "rounded-2xl border border-white/10 bg-surface p-6 flex flex-col gap-3";
const CTA_PRIMARY = `inline-flex min-h-[44px] items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-medium text-background ${FOCUS_RING}`;
const CTA_SECONDARY = `inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium ${FOCUS_RING}`;

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
] as const;

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-400">
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className={`underline underline-offset-4 ${FOCUS_RING}`}
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-neutral-200">
          Peridot ID
        </li>
      </ol>
    </nav>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold max-md:text-2xl">{children}</h2>;
}

export default function PeridotIdPage() {
  return (
    <div className="mx-auto w-full max-w-(--container-max-width) px-8 py-24 max-md:py-12 flex flex-col gap-20 max-md:gap-12">
      {/* 1. Hero */}
      <section aria-labelledby="peridot-id-heading" className="flex flex-col gap-6">
        <Breadcrumb />
        <h1 id="peridot-id-heading" className="text-5xl font-bold max-md:text-3xl">
          Peridot ID
        </h1>
        <p className="text-xl text-neutral-300 max-md:text-lg">
          One gaming identity for players, games, and developers.
        </p>
        <div>
          <a
            href={PERIDOT_URLS.app}
            target="_blank"
            rel={EXTERNAL_REL}
            aria-label="Visit the PeridotID app site (opens in a new tab)"
            className={`${CTA_SECONDARY} min-h-[44px]`}
          >
            Visit peridot.id
          </a>
        </div>
      </section>

      {/* 2. What is PeridotID */}
      <section aria-labelledby="what-is" className="flex flex-col gap-4">
        <SectionHeading>
          <span id="what-is">What is PeridotID?</span>
        </SectionHeading>
        <p className="text-lg text-neutral-300">
          PeridotID (Peridot Identity) is a unified sign-in for gaming. One
          identity gives players a profile and sessions that follow them
          game-to-game, and gives studios and developers a ready-made way to
          handle players without building auth from scratch.
        </p>
      </section>

      {/* 3. Who it is for */}
      <section aria-labelledby="for-whom" className="flex flex-col gap-6">
        <SectionHeading>
          <span id="for-whom">Who PeridotID is for</span>
        </SectionHeading>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {AUDIENCES.map((a) => (
            <article key={a.title} className={CARD}>
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <p className="text-neutral-300">{a.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Products incl. web3 wallet */}
      <section aria-labelledby="products" className="flex flex-col gap-6">
        <SectionHeading>
          <span id="products">Products, including the web3 wallet</span>
        </SectionHeading>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {PRODUCTS.map((p) => (
            <article key={p.title} className={CARD}>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-neutral-300">{p.body}</p>
              <ul className="list-disc pl-5 text-neutral-300 flex flex-col gap-1">
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
                  className={`${CTA_SECONDARY} mt-2`}
                >
                  {p.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Developers */}
      <section aria-labelledby="developers" className="flex flex-col gap-6">
        <SectionHeading>
          <span id="developers">Build on PeridotID</span>
        </SectionHeading>
        <p className="text-lg text-neutral-300">
          Gaming-native identity integration — profiles, sessions, and wallet
          bundled — with a free tier for getting started.
        </p>
        <ol className="grid grid-cols-3 gap-4 max-md:grid-cols-1 list-none p-0">
          {DEV_STEPS.map((s, i) => (
            <li key={s.title} className={CARD}>
              <span
                aria-hidden="true"
                className="text-sm font-semibold text-accent"
              >
                Step {i + 1}
              </span>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-neutral-300">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="flex gap-4 max-md:flex-col">
          <a
            href={PERIDOT_URLS.dashboard}
            target="_blank"
            rel={EXTERNAL_REL}
            aria-label="Open the PeridotID developer dashboard (opens in a new tab)"
            className={CTA_PRIMARY}
          >
            Open developer dashboard
          </a>
          <a
            href={PERIDOT_URLS.docs}
            target="_blank"
            rel={EXTERNAL_REL}
            aria-label="Read the Peridot developer docs (opens in a new tab)"
            className={CTA_SECONDARY}
          >
            Read the docs
          </a>
        </div>
      </section>

      {/* 6. Pricing */}
      <section aria-labelledby="pricing" className="flex flex-col gap-4">
        <SectionHeading>
          <span id="pricing">Completely free to use</span>
        </SectionHeading>
        <p className="text-lg text-neutral-300">
          PeridotID is completely free: no seat fee and no API-call fee for
          players, studios, or developers. Peridot earns a fee on on-chain
          transaction fees on the blockchain the user chooses. There is no
          hidden SDK fee.
        </p>
      </section>

      {/* 7. Security */}
      <section aria-labelledby="security" className="flex flex-col gap-4">
        <SectionHeading>
          <span id="security">Security basics</span>
        </SectionHeading>
        <p className="text-lg text-neutral-300">
          PeridotID sessions are scoped per product, and outbound links on
          this page open with evaluated referrer protections. We describe
          only what exists today — check the docs and the app for current
          account-protection guidance.
        </p>
      </section>

      {/* 8. FAQ */}
      <section aria-labelledby="faq" className="flex flex-col gap-6">
        <SectionHeading>
          <span id="faq">Frequently asked questions</span>
        </SectionHeading>
        <div className="flex flex-col gap-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-surface px-6 py-4"
            >
              <summary
                className={`min-h-[44px] cursor-pointer list-none text-lg font-medium flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden ${FOCUS_RING} rounded-lg`}
              >
                {f.q}
                <span aria-hidden="true" className="text-accent shrink-0">
                  +
                </span>
              </summary>
              <p className="pt-2 text-neutral-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 9. Dual CTA */}
      <section
        aria-labelledby="get-started"
        className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-surface p-10 text-center max-md:p-6"
      >
        <SectionHeading>
          <span id="get-started">Get started with PeridotID</span>
        </SectionHeading>
        <div className="flex gap-4 max-md:flex-col max-md:w-full">
          <a
            href={PERIDOT_URLS.app}
            target="_blank"
            rel={EXTERNAL_REL}
            aria-label="Launch the PeridotID app (opens in a new tab)"
            className={`${CTA_PRIMARY} max-md:w-full`}
          >
            Launch the app
          </a>
          <a
            href={PERIDOT_URLS.dashboard}
            target="_blank"
            rel={EXTERNAL_REL}
            aria-label="Go to the PeridotID developer dashboard (opens in a new tab)"
            className={`${CTA_SECONDARY} max-md:w-full`}
          >
            Go to developer dashboard
          </a>
        </div>
      </section>
    </div>
  );
}
