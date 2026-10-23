"use client";

import ContainerPadding from "@/shared/components/atoms/ContainerPadding";
import Image from "next/image";
import {
  cubicBezier,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  Apple,
  ChevronRight,
  Fingerprint,
  Gamepad2,
  Mail,
  Swords,
  Trophy,
  Wallet,
} from "lucide-react";
import { LuGamepad2 } from "react-icons/lu";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

type Step = {
  title: string;
  body: string;
  asideEyebrow: string;
  asideTitle: string;
  asideBody: string;
  chip: string;
};

const STEPS: Step[] = [
  {
    title: "Sign in once",
    body: "Socials, email, or passkey — no seed phrase to write down, no wallet to install before the first play.",
    asideEyebrow: "Auth",
    asideTitle: "Social · Email · Passkey",
    asideBody: "Wallet created silently on first login",
    chip: "No seed phrases",
  },
  {
    title: "Your profile follows you",
    body: "Handle, level, and progress live on the identity itself. New game, same player — nothing to re-create.",
    asideEyebrow: "Identity",
    asideTitle: "@ranaplay · Level 24",
    asideBody: "One handle across every title",
    chip: "Shared profile",
  },
  {
    title: "Wallet included",
    body: "Assets and collectibles sit beside the profile, ready on the chain the player picks at transaction time.",
    asideEyebrow: "Wallet",
    asideTitle: "1,240 PRDT · 6 collectibles",
    asideBody: "Chain picked at transaction time",
    chip: "$0 seat · $0 signature",
  },
  {
    title: "Play everywhere",
    body: "Sessions carry across every Peridot title. Pick up mid-quest on any game, on any device.",
    asideEyebrow: "Session",
    asideTitle: "Session live",
    asideBody: "Mid-quest in Neon Drift · resumes anywhere",
    chip: "Synced across games",
  },
];

function subscribeToMinWidth(query: string) {
  return (callback: () => void): (() => void) => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  };
}

function useIsDesktop(): boolean {
  const query = "(min-width: 768px)";
  return useSyncExternalStore(
    subscribeToMinWidth(query),
    () => window.matchMedia(query).matches,
    () => true,
  );
}

const STEP_COUNT = STEPS.length;
const SEGMENT = 1 / STEP_COUNT;
const FADE = 0.06;
const SHEET_EASE = cubicBezier(0.32, 0.72, 0, 1);

function presenceWindow(index: number): { input: number[]; output: number[] } {
  const enter = index * SEGMENT;
  const exit = (index + 1) * SEGMENT;
  if (index === 0) return { input: [exit - FADE, exit - 0.02], output: [1, 0] };
  if (index === STEP_COUNT - 1)
    return { input: [enter - 0.02, enter + FADE], output: [0, 1] };
  return {
    input: [enter - 0.02, enter + FADE, exit - FADE, exit - 0.02],
    output: [0, 1, 1, 0],
  };
}

function driftWindow(
  index: number,
  distance: number,
): { input: number[]; output: number[] } {
  const enter = index * SEGMENT;
  const exit = (index + 1) * SEGMENT;
  if (index === 0) return { input: [0, exit], output: [0, -distance] };
  if (index === STEP_COUNT - 1)
    return { input: [enter - 0.02, 1], output: [distance, 0] };
  return { input: [enter - 0.02, exit], output: [distance, -distance] };
}

function ScreenChrome({ label }: { label: string }): ReactNode {
  return (
    <div className="flex items-center justify-between pt-5 pb-3">
      <span className="text-[13px] font-medium tracking-tight text-foreground">
        {label}
      </span>
      <span className="size-6 rounded-none bg-foreground/10" aria-hidden="true" />
    </div>
  );
}

function LoginScreen(): ReactNode {
  const methods = [
    { icon: Mail, label: "Continue with Email" },
    { icon: Apple, label: "Continue with Apple" },
    { icon: Fingerprint, label: "Continue with passkey" },
  ];
  return (
    <div className="flex h-full flex-col px-4 pb-4">
      <ScreenChrome label="Peridot ID" />
      <p className="mt-3 text-xl font-medium tracking-tight text-foreground">
        One login for every game.
      </p>
      <p className="mt-1 text-[11px] text-muted-foreground">
        Pick a method — the wallet is created for you.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {methods.map((item) => (
          <div
            key={item.label}
            className="flex h-11 items-center gap-2.5 rounded-none border border-border bg-background px-4"
          >
            <item.icon className="size-4 text-foreground" aria-hidden="true" />
            <span className="text-xs font-medium text-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["No seed phrase", "No install"].map((chip) => (
          <span
            key={chip}
            className="rounded-none border border-border bg-background px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="flex-1" />
      <div className="flex h-11 items-center justify-center rounded-none bg-accent text-xs font-semibold text-background">
        Start playing
      </div>
    </div>
  );
}

function ProfileScreen(): ReactNode {
  return (
    <div className="flex h-full flex-col px-4 pb-4">
      <ScreenChrome label="Profile" />
      <div className="mt-2 flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-none bg-accent text-base font-bold text-background">
          R
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">@ranaplay</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            Level 24 · 3 games
          </p>
        </div>
        <span className="ml-auto rounded-none bg-accent/15 px-2.5 py-1 text-[10px] font-semibold text-accent">
          Lv 24
        </span>
      </div>
      <div className="mt-4 rounded-none border border-border bg-background p-3.5">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-foreground">Season progress</p>
          <p className="font-mono text-[10px] tabular-nums text-muted-foreground">
            78%
          </p>
        </div>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-none bg-foreground/10">
          <div className="h-full w-[78%] rounded-none bg-accent" />
        </div>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
          <Trophy className="size-3.5 text-accent" aria-hidden="true" />
          12 achievements this season
        </div>
      </div>
      <div className="flex-1" />
      <p className="text-center text-[10px] text-muted-foreground">
        Same profile in every Peridot game
      </p>
    </div>
  );
}

const LOOT = [
  "from-emerald-400 to-teal-600",
  "from-amber-300 to-orange-600",
  "from-sky-400 to-indigo-600",
  "from-fuchsia-400 to-purple-700",
  "from-lime-300 to-emerald-600",
  "from-rose-400 to-red-700",
];

function WalletScreen(): ReactNode {
  return (
    <div className="flex h-full flex-col px-4 pb-4">
      <ScreenChrome label="Wallet" />
      <div className="mt-2 rounded-none border border-border bg-background p-4">
        <p className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
          Balance
        </p>
        <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
          1,240 <span className="text-sm font-medium">PRDT</span>
        </p>
        <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
          <Wallet className="size-3.5" aria-hidden="true" />
          Bundled with your ID · $0 fees
        </p>
      </div>
      <p className="mt-4 mb-2 text-[11px] font-medium text-muted-foreground">
        6 collectibles
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {LOOT.map((tone, i) => (
          <div
            key={tone}
            className={`flex aspect-square items-end rounded-none bg-gradient-to-br p-1.5 ${tone}`}
          >
            <span className="rounded-none bg-black/45 px-1.5 py-0.5 text-[9px] font-semibold text-white">
              #{i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="flex-1" />
    </div>
  );
}

const GAMES = [
  { name: "Neon Drift", state: "Continue · Lv 12", active: true },
  { name: "Vault Siege", state: "Continue · Lv 8", active: false },
  { name: "Pixel Harvest", state: "New season live", active: false },
  { name: "Starforge", state: "Quest 3 of 9", active: false },
];

function GamesScreen(): ReactNode {
  return (
    <div className="flex h-full flex-col px-4 pb-4">
      <ScreenChrome label="Your games" />
      <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
        <Gamepad2 className="size-3.5" aria-hidden="true" />
        Signed in everywhere
      </p>
      <div className="mt-3 flex flex-col gap-2">
        {GAMES.map((game) => (
          <div
            key={game.name}
            className={`flex items-center gap-2.5 rounded-none border p-3 ${
              game.active
                ? "border-accent/50 bg-background"
                : "border-border bg-background"
            }`}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-none bg-accent/15">
              <Swords className="size-4 text-accent" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-foreground">
                {game.name}
              </p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">
                {game.state}
              </p>
            </div>
            <ChevronRight
              className="ml-auto size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
      <div className="flex-1" />
    </div>
  );
}

const SCREENS: ReactNode[] = [
  <LoginScreen key="login" />,
  <ProfileScreen key="profile" />,
  <WalletScreen key="wallet" />,
  <GamesScreen key="games" />,
];

function ShowcaseHeading(): ReactNode {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-semibold tracking-widest text-accent uppercase">
        <LuGamepad2 className="size-4" aria-hidden="true" />
        How it works
      </p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
        From login to loot.
      </h2>
      <p className="mt-3 max-w-sm text-paragraph md:text-lg">
        One identity with profile, sessions, and wallet — following players game
        to game.
      </p>
    </div>
  );
}

function ScreenStage({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="relative aspect-[9/16] w-[320px] overflow-hidden rounded-none border border-white/10 bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] sm:w-[360px] [@media(max-height:760px)]:w-[280px]">
      {children}
    </div>
  );
}

function ScreenLayer({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  children: ReactNode;
}): ReactNode {
  const enter = index * SEGMENT;
  const cover = (index + 1) * SEGMENT;
  const isFirst = index === 0;
  const isLast = index === STEP_COUNT - 1;

  const y = useTransform(
    progress,
    isFirst ? [0, 1] : [enter - FADE, enter + FADE],
    isFirst ? ["0%", "0%"] : ["103%", "0%"],
    { ease: SHEET_EASE },
  );
  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [cover - FADE, cover + FADE],
    isLast ? [1, 1] : [1, 0.93],
  );
  const dim = useTransform(
    progress,
    isLast ? [0, 1] : [cover - FADE, cover + FADE],
    isLast ? [0, 0] : [0, 0.42],
  );
  const radius = useTransform(
    progress,
    isFirst
      ? [cover - FADE, cover + FADE]
      : isLast
        ? [enter - FADE, enter + FADE]
        : [enter - FADE, enter + FADE, cover - FADE, cover + FADE],
    isFirst ? [0, 0] : isLast ? [0, 0] : [0, 0, 0, 0],
  );

  return (
    <motion.div
      style={{ y, scale, borderRadius: radius }}
      className="absolute inset-0 overflow-hidden bg-surface"
    >
      {children}
      <motion.div
        style={{ opacity: dim }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black"
      />
    </motion.div>
  );
}

function StepCard({
  progress,
  index,
  step,
}: {
  progress: MotionValue<number>;
  index: number;
  step: Step;
}): ReactNode {
  const presence = presenceWindow(index);
  const drift = driftWindow(index, 36);
  const opacity = useTransform(progress, presence.input, presence.output);
  const y = useTransform(progress, drift.input, drift.output);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="rounded-none border border-border bg-white/5 p-6">
        <span className="text-sm font-semibold text-accent">
          Step {index + 1}
        </span>
        <h3 className="mt-3 text-3xl font-bold text-foreground">
          {step.title}
        </h3>
        <p className="mt-3 text-paragraph md:text-lg">{step.body}</p>
        <div className="mt-5 rounded-none border border-border bg-background p-4">
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            {step.asideEyebrow}
          </p>
          <p className="mt-1.5 text-sm font-medium text-foreground">
            {step.asideTitle}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {step.asideBody}
          </p>
        </div>
        <span className="mt-4 inline-flex rounded-none border border-border bg-background px-3.5 py-1.5 text-xs text-muted-foreground">
          {step.chip}
        </span>
      </div>
    </motion.div>
  );
}

function SegmentTick({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}): ReactNode {
  const fill = useTransform(
    progress,
    [index * SEGMENT, (index + 1) * SEGMENT],
    [0, 1],
  );

  return (
    <span className="h-[3px] w-9 overflow-hidden rounded-none bg-border">
      <motion.span
        style={{ scaleX: fill, originX: 0 }}
        className="block h-full w-full bg-foreground"
      />
    </span>
  );
}

export function AppShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const pinned = isDesktop && !prefersReducedMotion;

  return (
    <section id="how-it-works" aria-label="How Peridot ID works" className="w-full scroll-mt-24 py-24 max-md:py-10">
      {pinned ? (
        <div ref={wrapperRef} className="relative h-[420svh]">
          <div className="sticky top-0 flex h-svh items-center overflow-hidden">
            <div className="max-w-(--container-max-width) mx-auto grid w-full grid-cols-[1fr_auto_1fr] items-center gap-x-16 px-12">
              <div className="flex h-[600px] max-h-[80svh] w-full flex-col self-stretch">
                <ShowcaseHeading />
                <Image
                  src="/assets/pebbo/pointing-to-right.webp"
                  alt="Pebbo pirate mascot"
                  width={640}
                  height={640}
                  sizes="(max-width: 1280px) 30vw, 420px"
                  draggable={false}
                  className="mt-auto h-auto w-full self-stretch object-contain object-bottom select-none pointer-events-none"
                />
              </div>

              <div className="relative">
                <div className="relative z-10 flex flex-col items-center gap-7">
                  <ScreenStage>
                    <div className="absolute inset-0">
                      {SCREENS.map((screen, i) => (
                        <ScreenLayer
                          key={STEPS[i]?.title}
                          progress={scrollYProgress}
                          index={i}
                        >
                          {screen}
                        </ScreenLayer>
                      ))}
                    </div>
                  </ScreenStage>
                  <div className="flex items-center gap-2" aria-hidden="true">
                    {STEPS.map((step, i) => (
                      <SegmentTick
                        key={step.title}
                        progress={scrollYProgress}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative h-[420px]">
                {STEPS.map((step, i) => (
                  <StepCard
                    key={step.title}
                    progress={scrollYProgress}
                    index={i}
                    step={step}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ContainerPadding className="flex flex-col gap-12">
          <ShowcaseHeading />
          <Image
            src="/assets/pebbo/pointing-to-right.webp"
            alt="Pebbo pirate mascot"
            width={400}
            height={400}
            sizes="(max-width: 768px) 200px, 240px"
            draggable={false}
            className="w-[200px] max-w-full object-contain select-none pointer-events-none"
          />
          <div className="flex justify-center">
            <ScreenStage>
              <div className="absolute inset-0">{SCREENS[2]}</div>
            </ScreenStage>
          </div>
          <ol className="flex flex-col gap-12">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <span className="text-sm font-semibold text-accent">
                  Step {i + 1}
                </span>
                <h3 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-paragraph md:text-lg">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </ContainerPadding>
      )}
    </section>
  );
}

export default AppShowcase;
