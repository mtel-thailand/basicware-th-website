"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "onPhoto";
  className?: string;
  onClick?: () => void;
};

/**
 * Pill CTA with arrow. Magnetic hover: the button leans toward the cursor,
 * and the arrow nudges forward.
 */
export default function Button({
  children,
  href = "#contact",
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  function handleMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={`${styles.button} ${variant === "onPhoto" ? styles.onPhoto : ""} ${className ?? ""}`}
    >
      <span>{children}</span>
      <svg
        className={styles.arrow}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 12h15m0 0-6-6m6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}
