"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import CountUp from "../motion/CountUp";
import AccentText from "../ui/AccentText";
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

/** Stacked candidate cards that shuffle in, best match rising to the top. */
function CandidateStack() {
  const reduce = useReducedMotion();
  return (
    <div className={styles.stack} aria-hidden="true">
      {CANDIDATES.map((candidate, i) => (
        <motion.div
          key={i}
          className={styles.candidate}
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
        </motion.div>
      ))}
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
  visual: React.ReactNode;
}[] = [
  { stat: { value: 60, suffix: "%" }, visual: <CandidateStack /> },
  {
    stat: { value: 40, suffix: "x" },
    visual: (
      <Mockup
        src="/images/workers/mockup-marketing.png"
        alt="Marketing Assistant dashboard showing intelligent data insights"
      />
    ),
  },
  {
    stat: { value: 85, suffix: "%" },
    visual: (
      <Mockup
        src="/images/workers/mockup-video.png"
        alt="Six-shot storyboard generated from product specs"
      />
    ),
  },
  {
    visual: (
      <Mockup
        src="/images/workers/mockup-finance.png"
        alt="Financial analysis dashboard with charts and key metrics"
      />
    ),
  },
  {
    stat: { value: 200, suffix: "%" },
    visual: (
      <Mockup
        src="/images/workers/mockup-content.png"
        alt="Content batches dashboard with localization packages"
      />
    ),
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
  const dim = useTransform(progress, [index / count, 1], [0, 0.35]);

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
        {stacked && (
          <motion.div
            className={styles.panelDim}
            style={{ opacity: dim }}
            aria-hidden="true"
          />
        )}
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
