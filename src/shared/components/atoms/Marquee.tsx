"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

export function Marquee({
  children,
  speed = 20,
  direction = "left",
}: {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}) {
  const x = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const isDragging = useRef(false);
  const velocity = useRef(0);

  // 🔥 hitung width 1 set
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      const total = containerRef.current!.scrollWidth;
      setContentWidth(total / 2);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // base direction speed
  const baseSpeed = direction === "left" ? -speed : speed;

  useAnimationFrame((_, delta) => {
    if (!contentWidth) return;

    let currentVelocity = velocity.current;

    // 🔥 fallback ke base speed kalau velocity kecil
    if (Math.abs(currentVelocity) < Math.abs(baseSpeed)) {
      currentVelocity = baseSpeed;
    }

    if (!isDragging.current) {
      x.set(x.get() + (delta / 1000) * currentVelocity);

      // 🔥 decay biar smooth
      velocity.current *= 0.95;
    }

    const current = x.get();

    // 🔥 infinite wrap (no glitch)
    if (current <= -contentWidth) {
      x.set(current + contentWidth);
    }

    if (current >= contentWidth) {
      x.set(current - contentWidth);
    }
  });

  return (
    <div className="w-full ">
      <motion.div
        ref={containerRef}
        className="flex xl:gap-8 gap-6 w-max cursor-grab active:cursor-grabbing will-change-transform transform-gpu"
        style={{ x }}
        drag="x"
        dragConstraints={false}
        dragElastic={0.05}
        dragMomentum={false}
        onDragStart={() => {
          isDragging.current = true;
        }}
        onDrag={(e, info) => {
          // 🔥 ambil velocity user (JANGAN dibalik)
          velocity.current = info.velocity.x;
        }}
        onDragEnd={() => {
          isDragging.current = false;
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
