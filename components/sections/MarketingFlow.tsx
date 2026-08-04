"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import styles from "./MarketingFlow.module.css";

const t = content.aiWorkers.marketingFlow;

/* One-pass timing: five quick steps, then the completed results remain visible. */
const STEP_MS = 140;
const RESULTS_PHASE = t.steps.length;
const ACTIVE_FLOW_VIEW = {
  once: true,
  amount: 0.45,
  margin: "0px 0px -25% 0px",
} as const;

function DatabaseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="7" ry="2.8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 5.5v6.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V5.5M5 12v6.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V12"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FinderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="10.5" cy="8.8" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6.8 14.6c.7-1.6 2.1-2.5 3.7-2.5s3 .9 3.7 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M15.8 15.8 21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function WandIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20 15 9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path
        d="M17.5 3.5 18.2 5.8 20.5 6.5 18.2 7.2 17.5 9.5 16.8 7.2 14.5 6.5 16.8 5.8Z"
        fill="currentColor"
      />
      <path d="M20 11.5 20.4 12.8 21.7 13.2 20.4 13.6 20 14.9 19.6 13.6 18.3 13.2 19.6 12.8Z" fill="currentColor" />
      <path d="M11 3 11.4 4.3 12.7 4.7 11.4 5.1 11 6.4 10.6 5.1 9.3 4.7 10.6 4.3Z" fill="currentColor" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 3 3 10.5l6.2 2.3L11.5 19l3-4.5L21 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.2 12.8 21 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="13" width="3.6" height="7" rx="1" fill="currentColor" />
      <rect x="10.2" y="9" width="3.6" height="11" rx="1" fill="currentColor" />
      <rect x="16.4" y="4.5" width="3.6" height="15.5" rx="1" fill="currentColor" />
    </svg>
  );
}

const STEP_ICONS = [DatabaseIcon, FinderIcon, WandIcon, PlaneIcon, BarsIcon];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12h15m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Rising sparkline drawn into the corner of a result card. */
function Sparkline({ tone, active }: { tone: "blue" | "green"; active: boolean }) {
  const stroke = tone === "green" ? "#16a34a" : "#7ea6ff";
  const line = "M4 52 C 24 48, 34 42, 50 44 S 82 28, 96 30 S 122 12, 136 6";
  return (
    <svg
      className={styles.sparkline}
      viewBox="0 0 140 60"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={`${line} L136 60 L4 60 Z`} fill={stroke} opacity={active ? 0.12 : 0.06} />
      <motion.path
        d={line}
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={false}
        animate={{ pathLength: active ? 1 : 0.25, opacity: active ? 1 : 0.4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {tone === "green" && (
        <motion.circle
          cx="136"
          cy="6"
          r="4"
          fill={stroke}
          initial={false}
          animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
          transition={{ delay: active ? 0.3 : 0, duration: 0.15 }}
        />
      )}
    </svg>
  );
}

/**
 * Marketing Assistant panel visual: a five-step campaign pipeline that
 * plays step 1 → 5 once, then reveals and holds the A/B test results.
 * Reduced motion skips directly to the completed state.
 */
export default function MarketingFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const reduce = useReducedMotion();
  const inView = useInView(ref, ACTIVE_FLOW_VIEW);

  useEffect(() => {
    if (!inView) return;

    if (reduce) return;

    const timers = Array.from({ length: RESULTS_PHASE }, (_, index) =>
      window.setTimeout(() => setPhase(index + 1), STEP_MS * (index + 1)),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [inView, reduce]);

  const view = reduce ? RESULTS_PHASE : phase;
  const showResults = view === RESULTS_PHASE;

  return (
    <div ref={ref} className={styles.flowCard}>
      <div className={styles.steps}>
        {t.steps.map((step, i) => {
          const Icon = STEP_ICONS[i];
          const purple = i === 2;
          const active = view === i;
          return (
            <div key={step.name} className={styles.stepWrap}>
              <div
                className={`${styles.stepCard} ${purple ? styles.stepPurple : ""} ${
                  active ? styles.stepActive : ""
                }`}
              >
                <span className={styles.stepNum}>{i + 1}</span>
                <span className={styles.stepIcon}>
                  <Icon />
                </span>
                <p className={styles.stepName}>{step.name}</p>
                <p className={styles.stepCaption}>{step.caption}</p>
              </div>
              {i < t.steps.length - 1 && (
                <span
                  className={`${styles.arrow} ${view > i ? styles.arrowDone : ""}`}
                  aria-hidden="true"
                >
                  <ArrowIcon />
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.results}>
        {t.results.map((result, i) => {
          const win = result.tone === "green";
          return (
            <motion.div
              key={result.label}
              className={`${styles.resultCard} ${win ? styles.resultWin : ""}`}
              initial={false}
              animate={
                showResults
                  ? { opacity: 1, y: 0 }
                  : { opacity: reduce ? 1 : 0.25, y: reduce ? 0 : 10 }
              }
              transition={{
                duration: 0.28,
                delay: showResults ? 0.05 * i : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.resultTop}>
                <span className={`${styles.resultIcon} ${win ? styles.resultIconWin : ""}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="9" cy="8" r="3" fill="currentColor" />
                    <circle cx="16" cy="9" r="2.4" fill="currentColor" opacity="0.7" />
                    <path
                      d="M4 19c.8-2.9 2.7-4.5 5-4.5s4.2 1.6 5 4.5"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {result.badge && (
                  <motion.span
                    className={styles.winBadge}
                    initial={false}
                    animate={showResults ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
                    transition={{
                      delay: showResults ? 0.22 : 0,
                      duration: 0.18,
                      ease: "backOut",
                    }}
                  >
                    {result.badge}
                  </motion.span>
                )}
              </div>
              <p className={styles.resultLabel}>{result.label}</p>
              <p className={`${styles.resultValue} ${win ? styles.resultValueWin : ""}`}>
                {result.value}
              </p>
              {result.caption && <p className={styles.resultCaption}>{result.caption}</p>}
              <Sparkline tone={result.tone} active={showResults} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
