"use client";
import { useId } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { Check, Fingerprint, KeyRound, Lock } from "lucide-react";
import { DotGrid } from "@/shared/components/atoms/DotGrid";
const SIZE = 240;
const shieldPath =
  "M120 34 L192 60 V118 C192 162 162 192 120 208 C78 192 48 162 48 118 V60 Z";
const innerShieldPath =
  "M120 58 L172 77 V118 C172 152 150 176 120 188 C90 176 68 152 68 118 V77 Z";
const badges = [
  {
    label: "Scoped sessions",
    icon: Lock,
    className: "left-[4%] top-[14%]",
    delay: 0,
    depth: 18,
  },
  {
    label: "Passkey login",
    icon: Fingerprint,
    className: "right-[4%] top-[24%]",
    delay: 1.3,
    depth: 26,
  },
  {
    label: "No seed phrases",
    icon: KeyRound,
    className: "left-[8%] bottom-[18%]",
    delay: 2.4,
    depth: 22,
  },
];
const ease = [0.22, 1, 0.36, 1] as const;
export default function BentoSecure() {
  const reduce = !!useReducedMotion();
  const clipId = useId();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), {
    stiffness: 160,
    damping: 18,
  });
  const track = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };
  const release = () => {
    px.set(0);
    py.set(0);
  };
  return (
    <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden bg-background">
      <div className="@container relative flex aspect-square w-full items-center justify-center overflow-hidden">
        <DotGrid />

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          onPointerMove={track}
          onPointerLeave={release}
          className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"
        >
          <motion.div
            style={{ rotateX, rotateY, width: SIZE, height: SIZE }}
            className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-[14px] rounded-full border border-dashed border-border motion-safe:animate-[spin_60s_linear_infinite]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[34px] rounded-full bg-white/[0.06] blur-2xl"
            />

            <svg
              aria-hidden="true"
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <defs>
                <clipPath id={clipId}>
                  <path d={shieldPath} />
                </clipPath>
              </defs>
              <path
                d={shieldPath}
                strokeWidth={1.25}
                className="fill-neutral-800 stroke-neutral-700"
              />
              <path
                d={innerShieldPath}
                strokeWidth={1}
                className="fill-neutral-950 stroke-neutral-800"
              />
              {!reduce && (
                <motion.g clipPath={`url(#${clipId})`}>
                  <motion.rect
                    x={40}
                    width={160}
                    height={28}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: [20, 200], opacity: [0, 0.9, 0.9, 0] }}
                    transition={{
                      duration: 3.4,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "easeInOut",
                      times: [0, 0.15, 0.85, 1],
                    }}
                    className="fill-white/[0.1]"
                  />
                  <motion.line
                    x1={40}
                    x2={200}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: [20, 200], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 3.4,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "easeInOut",
                      times: [0, 0.15, 0.85, 1],
                    }}
                    stroke="currentColor"
                    strokeWidth={1.25}
                    className="text-white"
                  />
                </motion.g>
              )}
              <g className="fill-white">
                <circle cx={120} cy={116} r={13} />
                <path d="M114 124 h12 l3 22 h-18 z" />
              </g>
              <circle cx={120} cy={116} r={5} className="fill-neutral-950" />
            </svg>

            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.span
                  key={badge.label}
                  animate={reduce ? undefined : { y: [0, -5, 0] }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: badge.delay,
                  }}
                  style={{ translateZ: badge.depth }}
                  className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap border border-border bg-background px-2.5 py-1 text-xs font-medium text-neutral-300 shadow-sm will-change-transform ${badge.className}`}
                >
                  <Icon className="h-3 w-3 text-neutral-400" />
                  {badge.label}
                </motion.span>
              );
            })}

            <motion.span
              initial={{ scale: reduce ? 1 : 0.6, opacity: reduce ? 1 : 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease }}
              style={{ translateZ: 30 }}
              className="absolute bottom-[12%] right-[14%] flex h-8 w-8 items-center justify-center border-[3px] border-background bg-accent text-background shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)]"
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-2 p-8 max-md:p-6">
        <h3 className="text-2xl max-md:text-xl font-semibold text-foreground">
          Secure by design
        </h3>
        <p className="text-paragraph text-lg max-md:text-base">
          Sessions scoped per product, passkey login, and zero seed phrases —
          protection without the friction.
        </p>
      </div>
    </article>
  );
}
