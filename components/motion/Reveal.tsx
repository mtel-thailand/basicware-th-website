"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait after entering the viewport */
  delay?: number;
  /** Initial vertical offset in px */
  y?: number;
  /** Scale-in from this value — the "bloom" feel */
  scale?: number;
  className?: string;
};

/** Scroll-triggered bloom: fade + rise + slight scale, expo-out. */
export default function Reveal({
  children,
  delay = 0,
  y = 36,
  scale = 0.97,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, scale: reduce ? 1 : scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
