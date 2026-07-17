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

/* Auto-play loop timing (ms): cursor flies in, presses card 1, report shows */
const CURSOR_DELAY_S = 1.6;
const CURSOR_FLY_S = 1.2;
const PRESS_AT_MS = 3200;
const PRESS_MS = 350;
const REPORT_HOLD_MS = 5200;

/** Fake mouse pointer that flies onto the top candidate and clicks it. */
function ClickCursor() {
  return (
    <motion.div
      className={styles.cursorLayer}
      initial={{ opacity: 0, x: 150, y: 200 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: CURSOR_DELAY_S,
        duration: CURSOR_FLY_S,
        ease: [0.16, 1, 0.3, 1],
        opacity: { delay: CURSOR_DELAY_S, duration: 0.3 },
      }}
      aria-hidden="true"
    >
      <motion.span
        className={styles.cursorRipple}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2.4], opacity: [0.5, 0] }}
        transition={{ delay: PRESS_AT_MS / 1000, duration: 0.5, ease: "easeOut" }}
      />
      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        className={styles.cursorSvg}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 0.78, 1] }}
        transition={{ delay: PRESS_AT_MS / 1000, duration: PRESS_MS / 1000 }}
      >
        <path
          d="M5 3l14 8.5-6.2 1.2L16 19.5l-3 1.4-3.2-6.8L5 18V3Z"
          fill="#fff"
          stroke="#111110"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}

/** Stacked candidate cards that shuffle in, best match rising to the top. */
function CandidateStack({
  onSelectTop,
  pressing,
  showCursor,
}: {
  onSelectTop: () => void;
  pressing: boolean;
  showCursor: boolean;
}) {
  const reduce = useReducedMotion();
  // NOTE: candidates must stay the first children — the stack's tapering
  // widths are keyed off .candidate:nth-child(1..4)
  return (
    <div className={styles.stack}>
      {CANDIDATES.map((candidate, i) => {
        const isTop = i === 0;
        const Card = (isTop ? motion.button : motion.div) as typeof motion.button;
        return (
          <Card
            key={i}
            type={isTop ? "button" : undefined}
            onClick={isTop ? onSelectTop : undefined}
            aria-label={
              isTop
                ? `${candidate.name} — ${t.resumeMatch.viewHint}`
                : undefined
            }
            aria-hidden={isTop ? undefined : true}
            className={`${styles.candidate} ${isTop ? styles.candidateTop : ""} ${
              isTop && pressing ? styles.candidatePressed : ""
            }`}
            style={{ zIndex: CANDIDATES.length - i }}
            initial={
              reduce ? { opacity: 0 } : { opacity: 0, y: -80 - i * 20, scale: 1.04 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{
              duration: 0.7,
              delay: 0.5 + 0.18 * (CANDIDATES.length - 1 - i),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src={candidate.avatar}
              alt=""
              width={64}
              height={64}
              className={styles.avatar}
            />
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
            {isTop && (
              <span className={styles.viewHint} aria-hidden="true">
                {t.resumeMatch.viewHint}
              </span>
            )}
          </Card>
        );
      })}
      {showCursor && <ClickCursor />}
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
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className={styles.gaugeReadout}>
        <CountUp value={value} className={styles.gaugeValue} />
        <span className={styles.gaugeTotal}>{total}</span>
      </div>
    </div>
  );
}

/** AI match report revealed when the top candidate is clicked. */
function ResumeMatchCard({ onBack }: { onBack: () => void }) {
  const r = t.resumeMatch;
  const top = CANDIDATES[0];
  return (
    <div className={styles.reportCard}>
      <div className={styles.reportHeader}>
        <span className={styles.reportIcon}>
          <Image src="/images/workers/ai-generate.svg" alt="" width={27} height={27} />
        </span>
        <p className={styles.reportTitle}>{r.cardTitle}</p>
        <button
          type="button"
          className={styles.reportBack}
          onClick={onBack}
          aria-label={r.backLabel}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 3l10 10M13 3L3 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.reportCandidateWrap}>
        <button
          type="button"
          className={styles.reportCandidate}
          onClick={onBack}
          aria-label={r.backLabel}
        >
          <Image
            src={top.avatar}
            alt=""
            width={80}
            height={80}
            className={styles.avatar}
          />
          <div className={styles.candidateInfo}>
            <p className={styles.reportName}>{top.name}</p>
            <p className={styles.candidateRole}>{top.role}</p>
            <p className={styles.candidateLocation}>
              <LocationIcon />
              {top.location}
            </p>
          </div>
          <span className={styles.matchBadge} style={{ background: top.badge }}>
            {top.match}
          </span>
        </button>
      </div>
      <div className={styles.reportBody}>
        <div className={styles.scoreSection}>
          <ScoreGauge value={r.score} total={r.scoreTotal} />
          <div className={styles.scoreCaptionBlock}>
            <p className={styles.scoreCaption}>{r.overallLabel}</p>
            <p className={styles.scoreVerdict}>{r.overallVerdict}</p>
          </div>
        </div>
        {[
          { title: r.criteriaTitle, rows: r.criteria },
          { title: r.riskTitle, rows: r.risks },
        ].map((column) => (
          <div key={column.title} className={styles.reportColumn}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Hiring panel visual: candidate shortlist ⇄ AI match report.
 * Auto-plays in a loop while in view — a cursor clicks the top candidate,
 * the match report shows, then it returns to the shortlist. Hovering pauses
 * the loop so real clicks take over; reduced motion disables auto-play.
 */
function HiringVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [showReport, setShowReport] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.4 });
  const autoPlay = inView && !paused && !reduce;

  useEffect(() => {
    if (!autoPlay) {
      setPressing(false);
      return;
    }
    if (!showReport) {
      const press = setTimeout(() => setPressing(true), PRESS_AT_MS);
      const flip = setTimeout(() => {
        setPressing(false);
        setShowReport(true);
      }, PRESS_AT_MS + PRESS_MS);
      return () => {
        clearTimeout(press);
        clearTimeout(flip);
      };
    }
    const back = setTimeout(() => setShowReport(false), REPORT_HOLD_MS);
    return () => clearTimeout(back);
  }, [autoPlay, showReport]);

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 };
  const visible = reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 };

  return (
    <div
      ref={ref}
      className={styles.hiringVisual}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {showReport ? (
          <motion.div
            key="report"
            initial={hidden}
            animate={visible}
            exit={hidden}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <ResumeMatchCard onBack={() => setShowReport(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="stack"
            initial={hidden}
            animate={visible}
            exit={hidden}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <CandidateStack
              onSelectTop={() => setShowReport(true)}
              pressing={pressing}
              showCursor={autoPlay}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Mockup({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src} alt={alt} width={720} height={720} className={styles.mockup} />
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
  const [stacked, setStacked] = useState(false);

  // The deck effect needs room — desktop pointers only
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1100px)");
    const update = () => setStacked(query.matches && !reduce);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [reduce]);

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
