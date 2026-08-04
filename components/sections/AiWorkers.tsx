"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import CountUp from "../motion/CountUp";
import AccentText from "../ui/AccentText";
import MarketingFlow from "./MarketingFlow";
import ProductVideoFlow from "./ProductVideoFlow";
import ContentFlow from "./ContentFlow";
import FinanceFlow from "./FinanceFlow";
import { content } from "@/content";
import styles from "./AiWorkers.module.css";

const t = content.aiWorkers;

/* Visual config only — candidate text comes from the content dictionary */
const CANDIDATE_VISUALS = [
  { badge: "#d4ffd8", avatar: "/images/workers/avatar-4.png" },
  { badge: "#d4faff", avatar: "/images/workers/avatar-3.png" },
  { badge: "#fffed4", avatar: "/images/workers/avatar-2.png" },
  { badge: "#fffed4", avatar: "/images/workers/avatar-1.png" },
];

const CANDIDATES = t.candidates.map((candidate, i) => ({
  ...candidate,
  ...CANDIDATE_VISUALS[i],
}));

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const FOCUS_DELAY_MS = 420;
const REPORT_DELAY_MS = 920;
const HIRING_EASE = [0.22, 1, 0.36, 1] as const;
const HIRING_REVEAL_EASE = [0.16, 1, 0.3, 1] as const;
const HIRING_LAYOUT_SPRING = {
  type: "spring",
  stiffness: 250,
  damping: 30,
  mass: 0.78,
} as const;
const ACTIVE_FLOW_VIEW = {
  once: true,
  amount: 0.45,
  margin: "0px 0px -25% 0px",
} as const;

/** Stacked candidate cards that shuffle in, best match rising to the top. */
function CandidateStack({
  active,
  focusTop,
}: {
  active: boolean;
  focusTop: boolean;
}) {
  const reduce = useReducedMotion();

  // NOTE: candidates must stay the first children — the stack's tapering
  // widths are keyed off .candidate:nth-child(1..4)
  return (
    <div className={styles.stack}>
      {CANDIDATES.map((candidate, i) => {
        const isTop = i === 0;

        return (
          <motion.div
            key={candidate.name}
            className={`${styles.candidate} ${
              isTop ? styles.candidateSharedHost : ""
            }`}
            style={{ zIndex: CANDIDATES.length - i }}
            initial={
              reduce
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: 24 + i * 8,
                    scale: 0.985,
                    boxShadow: isTop
                      ? "none"
                      : "0 8px 10px rgba(0, 0, 0, 0.1)",
                  }
            }
            animate={
              reduce
                ? { opacity: 1 }
                : !active
                  ? undefined
                  : focusTop
                    ? isTop
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1.01,
                          boxShadow: "0 16px 30px rgba(1, 101, 208, 0.22)",
                        }
                      : {
                          opacity: 0,
                          y: 0,
                          scale: 0.985,
                          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.08)",
                        }
                    : {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        boxShadow: isTop
                          ? "none"
                          : "0 8px 10px rgba(0, 0, 0, 0.1)",
                      }
            }
            transition={
              focusTop
                ? {
                    duration: 0.32,
                    delay: isTop ? 0 : i * 0.02,
                    ease: HIRING_EASE,
                  }
                : {
                    duration: 0.4,
                    delay: 0.04 * i,
                    ease: HIRING_EASE,
                  }
            }
          >
            {isTop && (
              <motion.span
                layoutId="hiring-selected-shell"
                className={styles.candidateSharedShell}
                transition={HIRING_LAYOUT_SPRING}
              />
            )}
            {isTop ? (
              <motion.span
                layoutId="hiring-selected-avatar"
                className={`${styles.sharedAvatar} ${styles.sharedAvatarList}`}
                transition={HIRING_LAYOUT_SPRING}
              >
                <Image
                  src={candidate.avatar}
                  alt=""
                  width={64}
                  height={64}
                  className={styles.sharedAvatarImage}
                />
              </motion.span>
            ) : (
              <Image
                src={candidate.avatar}
                alt=""
                width={64}
                height={64}
                className={styles.avatar}
              />
            )}
            <div className={styles.candidateInfo}>
              <p className={styles.candidateName}>{candidate.name}</p>
              <p className={styles.candidateRole}>{candidate.role}</p>
              <p className={styles.candidateLocation}>
                <LocationIcon />
                {candidate.location}
              </p>
            </div>
            <span
              className={styles.matchBadge}
              style={{ background: candidate.badge }}
            >
              {candidate.match}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

const RISK_TONES: Record<"green" | "yellow" | "red", string> = {
  green: "#1fc16b",
  yellow: "#f5a623",
  red: "#ef4444",
};

/** Circular 95/100 gauge with an animated arc, gap opening at the bottom. */
function ScoreGauge({ value, total }: { value: number; total: string }) {
  const reduce = useReducedMotion();
  const size = 110;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  // Arc spans 290° with the 70° gap centered at the bottom
  const arcFraction = 290 / 360;
  const fillFraction = arcFraction * (value / 100);

  return (
    <div className={styles.gauge}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <defs>
          <linearGradient id="scoreGaugeFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01398c" />
            <stop offset="100%" stopColor="#0067ff" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-border-subtle)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={`${arcFraction} 1`}
          transform={`rotate(125 ${size / 2} ${size / 2})`}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#scoreGaugeFill)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          transform={`rotate(125 ${size / 2} ${size / 2})`}
          initial={reduce ? { pathLength: fillFraction } : { pathLength: 0 }}
          animate={{ pathLength: fillFraction }}
          transition={{ duration: 0.52, delay: 0.04, ease: HIRING_EASE }}
        />
      </svg>
      <div className={styles.gaugeReadout}>
        <CountUp
          value={value}
          className={styles.gaugeValue}
          springStiffness={260}
          springDamping={28}
        />
        <span className={styles.gaugeTotal}>{total}</span>
      </div>
    </div>
  );
}

/** AI match report revealed automatically after the shortlist settles. */
function ResumeMatchCard() {
  const r = t.resumeMatch;
  const top = CANDIDATES[0];
  const reduce = useReducedMotion();
  const revealFrom = reduce ? false : { opacity: 0 };

  return (
    <div className={styles.reportCard}>
      <motion.span
        className={styles.reportBackdrop}
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.44,
          ease: HIRING_REVEAL_EASE,
        }}
      />
      <motion.div
        className={styles.reportHeader}
        initial={revealFrom}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.38,
          delay: reduce ? 0 : 0.08,
          ease: HIRING_REVEAL_EASE,
        }}
      >
        <span className={styles.reportIcon}>
          <Image src="/images/workers/ai-generate.svg" alt="" width={27} height={27} />
        </span>
        <p className={styles.reportTitle}>{r.cardTitle}</p>
      </motion.div>
      <div className={styles.reportCandidateWrap}>
        <div className={styles.reportCandidate}>
          <motion.span
            layoutId="hiring-selected-shell"
            className={styles.reportCandidateShell}
            initial={
              reduce
                ? false
                : {
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(130, 140, 154, 0.35)",
                    boxShadow: "0 8px 10px rgba(0, 0, 0, 0.1)",
                  }
            }
            animate={{
              backgroundColor: "#fafaf8",
              borderColor: "#0165d0",
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    layout: HIRING_LAYOUT_SPRING,
                    backgroundColor: {
                      duration: 0.46,
                      delay: 0.06,
                      ease: HIRING_REVEAL_EASE,
                    },
                    borderColor: {
                      duration: 0.5,
                      delay: 0.04,
                      ease: HIRING_REVEAL_EASE,
                    },
                    boxShadow: {
                      duration: 0.4,
                      ease: HIRING_REVEAL_EASE,
                    },
                  }
            }
          />
          <motion.span
            layoutId="hiring-selected-avatar"
            className={`${styles.sharedAvatar} ${styles.sharedAvatarReport}`}
            initial={
              reduce
                ? false
                : {
                    filter: "grayscale(0.8)",
                  }
            }
            animate={{ filter: "grayscale(0)" }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    layout: HIRING_LAYOUT_SPRING,
                    filter: {
                      duration: 0.5,
                      delay: 0.04,
                      ease: HIRING_REVEAL_EASE,
                    },
                  }
            }
          >
            <Image
              src={top.avatar}
              alt=""
              width={80}
              height={80}
              className={styles.sharedAvatarImage}
            />
          </motion.span>
          <motion.div
            className={styles.candidateInfo}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: reduce ? 0 : 0.14,
              ease: HIRING_REVEAL_EASE,
            }}
          >
            <p className={styles.reportName}>{top.name}</p>
            <p className={styles.candidateRole}>{top.role}</p>
            <p className={styles.candidateLocation}>
              <LocationIcon />
              {top.location}
            </p>
          </motion.div>
          <motion.span
            className={styles.matchBadge}
            style={{ background: top.badge }}
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.44,
              delay: reduce ? 0 : 0.2,
              ease: HIRING_REVEAL_EASE,
            }}
          >
            {top.match}
          </motion.span>
        </div>
      </div>
      <div className={styles.reportBody}>
        <motion.div
          className={styles.scoreSection}
          initial={reduce ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: reduce ? 0 : 0.24,
            ease: HIRING_REVEAL_EASE,
          }}
        >
          <ScoreGauge value={r.score} total={r.scoreTotal} />
          <div className={styles.scoreCaptionBlock}>
            <p className={styles.scoreCaption}>{r.overallLabel}</p>
            <p className={styles.scoreVerdict}>{r.overallVerdict}</p>
          </div>
        </motion.div>
        {[
          { title: r.criteriaTitle, rows: r.criteria },
          { title: r.riskTitle, rows: r.risks },
        ].map((column, index) => (
          <motion.div
            key={column.title}
            className={styles.reportColumn}
            initial={reduce ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.48,
              delay: reduce ? 0 : 0.32 + index * 0.08,
              ease: HIRING_REVEAL_EASE,
            }}
          >
            <p className={styles.reportColumnTitle}>{column.title}</p>
            <ul className={styles.reportList}>
              {column.rows.map((row) => (
                <li key={row.label} className={styles.reportRow}>
                  <span
                    className={styles.riskDot}
                    style={{ background: RISK_TONES[row.tone] }}
                    aria-hidden="true"
                  />
                  <span className={styles.reportRowLabel}>{row.label}</span>
                  <span className={styles.reportRowValue}>{row.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * Hiring panel visual: candidate shortlist → AI match report.
 * The two-step story plays once as soon as the panel enters view. There are
 * no simulated clicks, manual controls, hover states, or repeating loops.
 */
function HiringVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"shortlist" | "focus" | "report">(
    "shortlist",
  );
  const reduce = useReducedMotion();
  const inView = useInView(ref, ACTIVE_FLOW_VIEW);
  const showReport = phase === "report";

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      const reveal = window.setTimeout(() => setPhase("report"), 0);
      return () => window.clearTimeout(reveal);
    }

    const focus = window.setTimeout(() => setPhase("focus"), FOCUS_DELAY_MS);
    const reveal = window.setTimeout(() => setPhase("report"), REPORT_DELAY_MS);

    return () => {
      window.clearTimeout(focus);
      window.clearTimeout(reveal);
    };
  }, [inView, reduce]);

  return (
    <div ref={ref} className={styles.hiringVisual}>
      <AnimatePresence mode="sync" initial={false}>
        {showReport ? (
          <motion.div key="report" initial={false}>
            <ResumeMatchCard />
          </motion.div>
        ) : (
          <motion.div
            key="stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.44, ease: HIRING_EASE }}
          >
            <CandidateStack active={inView} focusTop={phase === "focus"} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Stat values and visuals stay here; eyebrow/title/labels come from the dictionary */
const PANEL_VISUALS: {
  stat?: { value: number; suffix: string };
  title?: React.ReactNode;
  visual: React.ReactNode;
}[] = [
  { stat: { value: 60, suffix: "%" }, visual: <HiringVisual /> },
  {
    stat: { value: 40, suffix: "x" },
    visual: <MarketingFlow />,
  },
  {
    stat: { value: 85, suffix: "%" },
    visual: <ProductVideoFlow />,
  },
  {
    visual: <FinanceFlow />,
  },
  {
    stat: { value: 200, suffix: "%" },
    visual: <ContentFlow />,
  },
];

const PANELS = t.panels.map((panel, i) => ({ ...panel, ...PANEL_VISUALS[i] }));

type PanelData = (typeof PANELS)[number];

/**
 * One card in the scroll deck. Panels are sticky at a cascading offset;
 * as the next card slides over, the pinned one gently scales back and dims,
 * so the whole section reads like flipping through a deck.
 */
function StackedPanel({
  panel,
  index,
  count,
  progress,
  stacked,
}: {
  panel: PanelData;
  index: number;
  count: number;
  progress: MotionValue<number>;
  stacked: boolean;
}) {
  const targetScale = 1 - (count - 1 - index) * 0.045;
  const scale = useTransform(progress, [index / count, 1], [1, targetScale]);

  return (
    <div
      className={styles.panelSlot}
      style={stacked ? { top: `calc(96px + ${index * 24}px)` } : undefined}
    >
      <motion.article
        className={styles.panel}
        style={stacked ? { scale } : undefined}
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={styles.panelTexture}
          style={{ backgroundImage: "url(/images/workers/seeds-texture.jpg)" }}
          aria-hidden="true"
        />
        <div className={styles.panelText}>
          <div className={styles.panelHeading}>
            <p className={styles.panelEyebrow}>{panel.eyebrow}</p>
            <h3 className={styles.panelTitle}>{panel.title}</h3>
          </div>
          <div className={styles.statBlock}>
            {panel.stat ? (
              <CountUp
                value={panel.stat.value}
                suffix={panel.stat.suffix}
                className={styles.stat}
              />
            ) : (
              <span className={styles.statSmall}>{panel.statText}</span>
            )}
            <p className={styles.statLabel}>{panel.statLabel}</p>
          </div>
        </div>
        <div className={styles.panelVisual}>{panel.visual}</div>
      </motion.article>
    </div>
  );
}

export default function AiWorkers() {
  const deckRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const stacked = !reduce;

  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
        />

        <div
          ref={deckRef}
          className={`${styles.panels} ${stacked ? styles.panelsStacked : ""}`}
        >
          {PANELS.map((panel, i) => (
            <StackedPanel
              key={panel.eyebrow}
              panel={panel}
              index={i}
              count={PANELS.length}
              progress={scrollYProgress}
              stacked={stacked}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
