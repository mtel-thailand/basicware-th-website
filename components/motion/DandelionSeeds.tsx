"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Ambient dandelion seeds drifting across the hero sky.
 * Configs are fixed (not random at render time) so SSR and client match.
 */
const SEEDS = [
  { left: "8%", top: "58%", size: 22, duration: 19, delay: 0, driftX: 90, driftY: -70 },
  { left: "16%", top: "44%", size: 16, duration: 23, delay: 2.5, driftX: 120, driftY: -50 },
  { left: "24%", top: "62%", size: 26, duration: 17, delay: 5, driftX: 80, driftY: -90 },
  { left: "35%", top: "38%", size: 14, duration: 26, delay: 1, driftX: 110, driftY: -40 },
  { left: "48%", top: "55%", size: 20, duration: 21, delay: 7, driftX: 100, driftY: -80 },
  { left: "60%", top: "42%", size: 15, duration: 24, delay: 3.5, driftX: 90, driftY: -60 },
  { left: "71%", top: "60%", size: 24, duration: 18, delay: 6, driftX: 70, driftY: -100 },
  { left: "82%", top: "47%", size: 17, duration: 22, delay: 4, driftX: 60, driftY: -55 },
];

function Seed({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="rgba(255,255,255,0.85)" strokeWidth="1" strokeLinecap="round">
        {/* pappus — the fluffy crown */}
        <path d="M10 9 L4 3" />
        <path d="M10 9 L9 2" />
        <path d="M10 9 L15 2" />
        <path d="M10 9 L18 5" />
        <path d="M10 9 L3 8" />
        <path d="M10 9 L18 10" />
        {/* stem + seed */}
        <path d="M10 9 Q12 14 13 20" />
      </g>
      <circle cx="13.2" cy="20.5" r="1.4" fill="rgba(255,255,255,0.9)" />
    </svg>
  );
}

export default function DandelionSeeds() {
  /* Seeds start at opacity 0, so with reduced motion they simply never
     appear. The DOM stays identical on server and client — a conditional
     `return null` here would cause a hydration mismatch. */
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {SEEDS.map((seed, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: seed.left,
            top: seed.top,
            opacity: 0,
          }}
          animate={
            reduce
              ? undefined
              : {
                  x: [0, seed.driftX * 0.4, seed.driftX],
                  y: [0, seed.driftY * 0.6, seed.driftY],
                  rotate: [0, 12, -8],
                  opacity: [0, 0.9, 0],
                }
          }
          transition={{
            duration: seed.duration,
            delay: seed.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }}
            transition={{
              duration: 3.5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Seed size={seed.size} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
