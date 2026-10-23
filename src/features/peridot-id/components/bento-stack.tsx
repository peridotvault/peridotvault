"use client";
import { useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { Fingerprint, Gamepad2, Layers, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
const SIZE = 240;
const C = SIZE / 2;
const W = 128;
const H = 64;
const STEP = 26;
const layers: {
  label: string;
  icon: LucideIcon;
  meta: string;
}[] = [
  { label: "Identity", icon: Fingerprint, meta: "One login · passkey" },
  { label: "Wallet", icon: Wallet, meta: "$0 seat · $0 signature" },
  { label: "Your App", icon: Gamepad2, meta: "Sessions · shared progress" },
];
const slab = (cx: number, cy: number) =>
  `M${cx} ${cy - H / 2} L${cx + W / 2} ${cy} L${cx} ${cy + H / 2} L${cx - W / 2} ${cy} Z`;
const slabSide = (cx: number, cy: number, depth: number) =>
  `M${cx - W / 2} ${cy} L${cx} ${cy + H / 2} V${cy + H / 2 + depth} L${cx - W / 2} ${cy + depth} Z`;
const slabSideR = (cx: number, cy: number, depth: number) =>
  `M${cx} ${cy + H / 2} L${cx + W / 2} ${cy} V${cy + depth} L${cx} ${cy + H / 2 + depth} Z`;
const ease = [0.22, 1, 0.36, 1] as const;
export default function BentoStack() {
  const reduce = !!useReducedMotion();
  const [spread, setSpread] = useState(false);
  const [hot, setHot] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), {
    stiffness: 160,
    damping: 18,
  });
  const track = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || locked) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };
  const release = () => {
    setLocked(false);
    px.set(0);
    py.set(0);
    setSpread(false);
    setHot(null);
  };
  const gap = spread ? STEP + 22 : STEP;
  const baseY = C + 34;
  return (
    <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-none border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="@container relative min-h-[220px] flex-1 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]"
        />

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          onPointerMove={track}
          onPointerEnter={() => setSpread(true)}
          onPointerLeave={release}
          className="absolute inset-0 flex items-center justify-center p-4 [perspective:900px]"
        >
          <motion.div
            style={{ rotateX, rotateY, width: SIZE, height: SIZE }}
            className="relative shrink-0 scale-[0.85] [transform-style:preserve-3d] @sm:scale-100 @2xl:scale-[1.12]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-[14px] rounded-full border border-dashed border-neutral-300 motion-safe:animate-[spin_60s_linear_infinite] dark:border-neutral-700"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[34px] rounded-full bg-neutral-900/[0.04] blur-2xl dark:bg-white/[0.06]"
            />

            <svg
              aria-hidden="true"
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              {layers.map((layer, index) => {
                const cy = baseY - index * gap;
                const lit = (hot ?? layers.length - 1) === index;
                return (
                  <motion.g
                    key={layer.label}
                    initial={false}
                    animate={{ y: cy - baseY }}
                    transition={{ duration: 0.55, ease }}
                    onMouseEnter={() => setHot(index)}
                    onPointerEnter={() => setLocked(true)}
                    onPointerLeave={() => setLocked(false)}
                  >
                    <path
                      d={slabSide(C, baseY, 10)}
                      className={
                        lit
                          ? "fill-neutral-700 dark:fill-neutral-600"
                          : "fill-neutral-300 dark:fill-neutral-700"
                      }
                    />
                    <path
                      d={slabSideR(C, baseY, 10)}
                      className={
                        lit
                          ? "fill-neutral-800 dark:fill-neutral-500"
                          : "fill-neutral-200 dark:fill-neutral-800"
                      }
                    />
                    <path
                      d={slab(C, baseY)}
                      strokeWidth={1}
                      className={`transition-colors duration-300 ${
                        lit
                          ? "fill-neutral-900 stroke-neutral-900 dark:fill-neutral-900 dark:stroke-accent"
                          : "fill-white stroke-neutral-300 dark:fill-neutral-950 dark:stroke-neutral-700"
                      }`}
                    />

                    {[-1, 0, 1].map((k) => (
                      <line
                        key={k}
                        x1={C - W / 2 + (W / 4) * (k + 1)}
                        y1={baseY - (H / 4) * (k + 1)}
                        x2={C + (W / 4) * (k + 1)}
                        y2={baseY + H / 2 - (H / 4) * (k + 1)}
                        stroke="currentColor"
                        strokeWidth={0.75}
                        className={
                          lit
                            ? "text-white/20 dark:text-neutral-900/20"
                            : "text-neutral-200 dark:text-neutral-800"
                        }
                      />
                    ))}
                    <layer.icon
                      x={C - 7}
                      y={baseY - 7}
                      width={14}
                      height={14}
                      strokeWidth={2}
                      className={
                        lit
                          ? "text-white dark:text-white"
                          : "text-neutral-500 dark:text-neutral-400"
                      }
                    />
                  </motion.g>
                );
              })}
            </svg>

            {layers.map((layer, index) => {
              const lit = hot === index;
              const cy = baseY - index * gap;
              return (
                <motion.span
                  key={layer.label}
                  initial={false}
                  animate={{ top: cy - 10, opacity: spread || lit ? 1 : 0.55 }}
                  transition={{ duration: 0.55, ease }}
                  style={{ translateZ: 22 }}
                  className={`pointer-events-none absolute -right-8 whitespace-nowrap border border-border bg-background px-2.5 py-1 text-xs font-medium shadow-sm transition-colors duration-200 ${
                    lit
                      ? "text-white dark:text-white"
                      : "text-neutral-500 dark:text-neutral-500"
                  }`}
                >
                  {layer.label}
                </motion.span>
              );
            })}

            <motion.span
              initial={false}
              animate={{
                opacity: hot === null ? 0 : 1,
                y: hot === null ? 4 : 0,
              }}
              transition={{ duration: 0.2 }}
              style={{ translateZ: 30 }}
              className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-none bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white shadow-sm dark:bg-white dark:text-neutral-900"
            >
              {hot === null ? "" : layers[hot].meta}
            </motion.span>

            <motion.span
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ translateZ: 22 }}
              className="absolute left-[2%] top-[10%] inline-flex items-center gap-1.5 whitespace-nowrap rounded-none border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-sm will-change-transform dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
            >
              <Layers className="h-3 w-3 text-neutral-500 dark:text-neutral-400" />
              One integration
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-2 p-8 max-md:p-6">
        <h3 className="text-2xl max-md:text-xl font-semibold text-foreground">
          One stack, every game
        </h3>
        <p className="text-paragraph text-lg max-md:text-base">
          Identity, wallet, and games ship together from a single integration,
          with the same login for all three.
        </p>
      </div>
    </article>
  );
}
