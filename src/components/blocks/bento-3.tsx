"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MessageSquare, MousePointer2, PenLine, Sparkles } from "lucide-react";
import { DotGrid } from "@/shared/components/atoms/DotGrid";
type Person = {
  name: string;
  role: string;
  photo: string;
  angle: number;
  live?: boolean;
};
const innerOrbit: Person[] = [
  {
    name: "Alex Ortega",
    role: "In match",
    photo: "https://i.pravatar.cc/80?img=12",
    angle: 0,
    live: true,
  },
  {
    name: "Mina Tanaka",
    role: "In lobby",
    photo: "https://i.pravatar.cc/80?img=47",
    angle: 120,
  },
  {
    name: "Sam Okafor",
    role: "Chatting",
    photo: "https://i.pravatar.cc/80?img=33",
    angle: 240,
  },
];
const outerOrbit: Person[] = [
  {
    name: "Dana Lee",
    role: "Spectating",
    photo: "https://i.pravatar.cc/80?img=5",
    angle: 60,
  },
  {
    name: "Jonas Reyes",
    role: "In match",
    photo: "https://i.pravatar.cc/80?img=56",
    angle: 180,
    live: true,
  },
  {
    name: "Kai Novak",
    role: "In lobby",
    photo: "https://i.pravatar.cc/80?img=68",
    angle: 300,
  },
];
const INNER_R = 68;
const OUTER_R = 104;
const HALO_R = 156;
const SIZE = 232;
type Activity = {
  person: Person;
  verb: string;
  Icon: typeof PenLine;
};
const leftFeed: Activity[] = [
  { person: innerOrbit[1], verb: "is browsing Store", Icon: MousePointer2 },
  { person: outerOrbit[1], verb: "joined the party", Icon: PenLine },
  { person: outerOrbit[2], verb: "sent an invite", Icon: MousePointer2 },
];
const rightFeed: Activity[] = [
  { person: innerOrbit[0], verb: "sent a chat", Icon: MessageSquare },
  { person: outerOrbit[0], verb: "is browsing Vault", Icon: MousePointer2 },
  { person: innerOrbit[2], verb: "joined the match", Icon: MessageSquare },
];
const ease = [0.22, 1, 0.36, 1] as const;
const PAUSE =
  "group-hover/orbit:[animation-play-state:paused] group-focus-within/orbit:[animation-play-state:paused]";
const SPIN_36 = `motion-safe:animate-[spin_36s_linear_infinite] ${PAUSE}`;
const SPIN_36_BACK = `motion-safe:animate-[spin_36s_linear_infinite_reverse] ${PAUSE}`;
const SPIN_54 = `motion-safe:animate-[spin_54s_linear_infinite] ${PAUSE}`;
const SPIN_54_BACK = `motion-safe:animate-[spin_54s_linear_infinite_reverse] ${PAUSE}`;
function Orbit({
  radius,
  ring,
  seat,
  people,
  spokes,
}: {
  radius: number;
  ring: string;
  seat: string;
  people: Person[];
  spokes?: boolean;
}) {
  const center = SIZE / 2;
  const reduce = useReducedMotion();
  return (
    <div
      className={`pointer-events-none absolute inset-0 will-change-transform hover:z-20 focus-within:z-30 ${ring}`}
    >
      {spokes && (
        <svg
          aria-hidden="true"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="absolute inset-0 h-full w-full"
        >
          {people.map((person, index) => {
            const a = (person.angle * Math.PI) / 180;
            const x2 = Math.round((center + Math.cos(a) * radius) * 100) / 100;
            const y2 = Math.round((center + Math.sin(a) * radius) * 100) / 100;
            return (
              <g key={person.name}>
                <line
                  x1={center}
                  y1={center}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  className="text-neutral-200 dark:text-neutral-800"
                />

                {!reduce && (
                  <motion.line
                    x1={x2}
                    y1={y2}
                    x2={center}
                    y2={center}
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    pathLength={100}
                    strokeDasharray="10 90"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: [100, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      delay: index * 1.2,
                      ease: "easeInOut",
                    }}
                    className="text-neutral-500 dark:text-neutral-400"
                  />
                )}
              </g>
            );
          })}
        </svg>
      )}
      {people.map((person) => (
        <div
          key={person.name}
          className="absolute left-1/2 top-1/2 origin-top-left"
          style={{
            transform: `rotate(${person.angle}deg) translate(${radius}px) rotate(${-person.angle}deg)`,
          }}
        >
          <div
            className={`group/seat pointer-events-auto relative -translate-x-1/2 -translate-y-1/2 will-change-transform ${seat}`}
          >
            <span
              tabIndex={0}
              aria-label={`${person.name}, ${person.role}`}
              className="block h-9 w-9 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 overflow-hidden rounded-full border-2 border-white bg-neutral-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out group-hover/seat:scale-105 group-focus-within/seat:scale-105 dark:border-neutral-900 dark:bg-neutral-800 dark:shadow-none"
            >
              <img
                src={person.photo}
                alt={person.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
            {person.live && (
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-neutral-900" />
            )}
            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[10px] font-medium leading-none text-white opacity-0 shadow-sm transition-[opacity,transform] duration-200 group-hover/seat:translate-y-0 group-hover/seat:opacity-100 group-focus-within/seat:translate-y-0 group-focus-within/seat:opacity-100 dark:bg-white dark:text-neutral-900">
              {person.name}
              <span className="ml-1 text-neutral-400 dark:text-neutral-500">
                {person.role}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
function ActivityChip({
  feed,
  offset,
  reduce,
  className,
}: {
  feed: Activity[];
  offset: number;
  reduce: boolean;
  className: string;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (reduce) return;
    let id: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => {
      setIndex((i) => (i + 1) % feed.length);
      id = setInterval(() => setIndex((i) => (i + 1) % feed.length), 4200);
    }, offset);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [feed.length, offset, reduce]);
  const { person, verb, Icon } = feed[index];
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: reduce ? 0 : 8,
            filter: reduce ? "blur(0px)" : "blur(4px)",
          }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            y: reduce ? 0 : -8,
            filter: reduce ? "blur(0px)" : "blur(4px)",
          }}
          transition={{ duration: 0.45, ease }}
          className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-1 pl-1 pr-2.5 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.16)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none"
        >
          <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            <img
              src={person.photo}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="whitespace-nowrap text-[10px] font-medium leading-none text-neutral-700 dark:text-neutral-200">
            {person.name.split(" ")[0]}{" "}
            <span className="font-normal text-neutral-500 dark:text-neutral-400">
              {verb}
            </span>
          </span>
          <Icon className="h-3 w-3 shrink-0 text-neutral-400 dark:text-neutral-500" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default function Bento3() {
  const reduce = !!useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [showActivity, setShowActivity] = useState(false);
  const center = SIZE / 2;
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setShowActivity(width >= 820 || (width >= 384 && height >= 620));
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  return (
    <article className="dark group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden bg-background">
      <div
        ref={stageRef}
        className="@container relative flex aspect-square w-full items-center justify-center overflow-hidden"
      >
        <DotGrid />
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="absolute inset-0 z-10 flex items-center justify-center p-4"
        >
          <div
            className="group/orbit relative shrink-0 scale-[0.82] @sm:scale-100 @2xl:scale-[1.12]"
            style={{ width: SIZE, height: SIZE }}
          >
            <svg
              aria-hidden="true"
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <circle
                cx={center}
                cy={center}
                r={HALO_R}
                fill="none"
                stroke="currentColor"
                strokeDasharray="2 8"
                className="text-neutral-200/70 dark:text-neutral-800/70"
              />
              <circle
                cx={center}
                cy={center}
                r={OUTER_R}
                fill="none"
                stroke="currentColor"
                strokeDasharray="3 5"
                className="text-neutral-200 dark:text-neutral-800"
              />
              <circle
                cx={center}
                cy={center}
                r={INNER_R}
                fill="none"
                stroke="currentColor"
                className="text-neutral-200 dark:text-neutral-800"
              />
            </svg>

            <Orbit
              radius={INNER_R}
              ring={SPIN_36}
              seat={SPIN_36_BACK}
              people={innerOrbit}
              spokes
            />
            <Orbit
              radius={OUTER_R}
              ring={SPIN_54_BACK}
              seat={SPIN_54}
              people={outerOrbit}
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.span
                aria-hidden="true"
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-5 rounded-full bg-neutral-900/15 blur-xl transition-transform duration-500 group-hover/orbit:scale-125 dark:bg-white/20"
              />
              {!reduce &&
                [0, 1].map((i) => (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1.5,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full border border-neutral-900 will-change-transform dark:border-white"
                  />
                ))}
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-neutral-700 to-neutral-950 text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-black/10 transition-transform duration-500 ease-out group-hover/orbit:scale-105 dark:from-white dark:to-neutral-300 dark:text-neutral-900 dark:shadow-[0_0_32px_-4px_rgba(255,255,255,0.35),inset_0_1px_0_rgba(255,255,255,0.9)] dark:ring-white/40">
                <Sparkles className="h-5 w-5 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] dark:drop-shadow-none" />
              </span>
            </div>
          </div>
        </motion.div>

        {showActivity && (
          <>
            <ActivityChip
              feed={leftFeed}
              offset={1400}
              reduce={reduce}
              className="hidden left-4 top-[24%] @sm:block @2xl:left-[12%]"
            />
            <ActivityChip
              feed={rightFeed}
              offset={3500}
              reduce={reduce}
              className="hidden right-4 bottom-[26%] @sm:block @2xl:right-[12%]"
            />
          </>
        )}

        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium text-neutral-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
          6 players in this session
        </span>
      </div>

      <div className="flex flex-col gap-2 p-8 max-md:p-6">
        <h3 className="text-2xl max-md:text-xl font-semibold text-foreground">
          Play together, live
        </h3>
        <p className="text-paragraph text-lg max-md:text-base">
          Everyone plays in the same session at once, with presence and
          invites that keep the whole party in the loop.
        </p>
      </div>
    </article>
  );
}
