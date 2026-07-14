"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./ScrollProgress.module.css";

/**
 * A stem that grows down the right edge as you read, a seed head riding
 * the tip — the page literally grows with you.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const growth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const tipTop = useTransform(growth, (v) => `${v * 100}%`);

  return (
    <div className={styles.track} aria-hidden="true">
      <motion.div className={styles.stem} style={{ scaleY: growth }} />
      <motion.div className={styles.tip} style={{ top: tipTop }}>
        <svg viewBox="0 0 24 24" fill="none">
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 12 L6 6" />
            <path d="M12 12 L12 4" />
            <path d="M12 12 L18 6" />
            <path d="M12 12 L4 12" />
            <path d="M12 12 L20 12" />
            <path d="M12 12 L7 19" />
            <path d="M12 12 L17 19" />
          </g>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
}
