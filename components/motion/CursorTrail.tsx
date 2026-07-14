"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorTrail.module.css";

/**
 * Dandelion seeds that shed from the cursor as it moves — the site-wide
 * signature interaction. Pure DOM + CSS animations (no React re-renders),
 * throttled and capped, desktop fine-pointer only.
 */
const SEED_SVG = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
    <path d="M10 9 L5 4" /><path d="M10 9 L9.5 3" /><path d="M10 9 L15 3.5" />
    <path d="M10 9 L17 6" /><path d="M10 9 L4 9" />
    <path d="M10 9 Q12 14 13 19.5" />
  </g>
  <circle cx="13.2" cy="20" r="1.3" fill="currentColor" />
</svg>`;

const SPAWN_INTERVAL_MS = 90;
const MAX_SEEDS = 14;
const LIFETIME_MS = 1300;

export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const container = containerRef.current;
    if (reduce || !fine || !container) return;

    let lastSpawn = 0;
    let lastX = 0;
    let lastY = 0;
    let alive = 0;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const travelled = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (now - lastSpawn < SPAWN_INTERVAL_MS || travelled < 24) return;
      if (alive >= MAX_SEEDS) return;
      lastSpawn = now;
      lastX = e.clientX;
      lastY = e.clientY;

      const seed = document.createElement("span");
      seed.className = styles.seed;
      seed.innerHTML = SEED_SVG;
      const size = 10 + Math.random() * 10;
      seed.style.width = `${size}px`;
      seed.style.height = `${size}px`;
      seed.style.left = `${e.clientX}px`;
      seed.style.top = `${e.clientY}px`;
      seed.style.setProperty("--drift-x", `${(Math.random() - 0.3) * 90}px`);
      seed.style.setProperty("--drift-y", `${-40 - Math.random() * 70}px`);
      seed.style.setProperty("--spin", `${(Math.random() - 0.5) * 160}deg`);
      container.appendChild(seed);
      alive += 1;

      window.setTimeout(() => {
        seed.remove();
        alive -= 1;
      }, LIFETIME_MS);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div ref={containerRef} className={styles.container} aria-hidden="true" />;
}
