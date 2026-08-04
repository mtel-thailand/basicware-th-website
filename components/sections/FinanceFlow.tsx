"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { content } from "@/content";
import TrendGraphIcon from "@/components/ui/TrendGraphIcon";
import FinanceDashboard from "./FinanceDashboard";
import styles from "./FinanceFlow.module.css";

const t = content.aiWorkers.financeFlow;

/* One-shot intro: a spreadsheet analysis card completes its checklist, then
   an executive dashboard assembles and holds. */
const ANALYSIS_COMPLETE_MS = 1350;
const RESULT_DELAY_MS = 300;
const ACTIVE_FLOW_VIEW = {
  once: true,
  amount: 0.45,
  margin: "0px 0px -25% 0px",
} as const;

type Phase = "idle" | "analyze" | "complete" | "result";
const EASE = [0.16, 1, 0.3, 1] as const;
const MORPH_EASE = [0.22, 1, 0.36, 1] as const;

const file = t.files[0];

/* ---------------- icons ---------------- */
function ExcelIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="2.5" width="18" height="19" rx="3" fill="#1d6f42" />
      <path d="M8.6 8l2.5 4-2.5 4h2.1l1.5-2.6L13.7 16h2.1l-2.5-4 2.5-4h-2.1l-1.5 2.6L10.7 8H8.6Z" fill="#fff" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
/* ---------------- chart helpers ---------------- */
function buildPath(series: number[], w: number, h: number, pad = 4) {
  const min = Math.min(...series);
  const max = Math.max(...series);
  const span = max - min || 1;
  const n = series.length;
  const x = (i: number) => pad + (i / (n - 1)) * (w - 2 * pad);
  const y = (v: number) => pad + (1 - (v - min) / span) * (h - 2 * pad);
  const line = series.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${x(n - 1).toFixed(1)} ${(h - pad).toFixed(1)} L${x(0).toFixed(1)} ${(h - pad).toFixed(1)} Z`;
  return { line, area, min, max };
}

const reveal = (delay = 0) =>
  ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.36, delay, ease: MORPH_EASE },
  }) as const;

function DeltaPill({ text }: { text: string }) {
  return (
    <span className={styles.deltaPill}>
      <TrendGraphIcon />
      {text}
    </span>
  );
}

function Spark({ series, delay = 0 }: { series: number[]; delay?: number }) {
  const { line, area } = buildPath(series, 100, 30, 3);
  const clipId = `spark-${useId().replaceAll(":", "")}`;

  return (
    <svg className={styles.kpiSpark} viewBox="0 0 100 30" preserveAspectRatio="none" fill="none">
      <defs>
        <clipPath id={clipId}>
          <motion.rect
            x="0"
            y="0"
            height="30"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.52, delay, ease: EASE }}
          />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <motion.path
          d={area}
          fill="var(--color-brand-cta)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.3, delay }}
        />
        <path
          d={line}
          stroke="var(--color-brand-cta)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function BarChart() {
  const max = Math.max(...t.revenue);

  return (
    <div className={styles.barChart}>
      {t.revenue.map((value, index) => {
        const latest = index === t.revenue.length - 1;
        const delay = 0.58 + index * 0.07;

        return (
          <div key={t.months[index]} className={styles.barColumn}>
            <div className={styles.barTrack}>
              <motion.div
                className={`${styles.bar} ${latest ? styles.barLatest : ""}`}
                style={{ height: `${(value / max) * 100}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.55, delay, ease: EASE }}
              >
                {latest && (
                  <motion.span
                    className={styles.barValue}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: delay + 0.48, ease: EASE }}
                  >
                    {value.toFixed(1)}
                  </motion.span>
                )}
              </motion.div>
            </div>
            <span className={styles.barMonth}>{t.months[index]}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- drag / load / result ---------------- */

/** Spreadsheet and analysis checklist presented as one continuous task. */
function AnalysisStage({ run, complete }: { run: boolean; complete: boolean }) {
  return (
    <div className={styles.analysisStage}>
      <motion.div
        className={styles.analysisCard}
        style={{ borderRadius: 24 }}
        initial={false}
        animate={{ opacity: run ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.42, ease: MORPH_EASE }}
      >
        <motion.div
          className={styles.analysisFile}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: MORPH_EASE }}
        >
          <span className={styles.analysisFileIcon}>
            <ExcelIcon />
          </span>
          <div className={styles.analysisFileInfo}>
            <p className={styles.analysisFileName}>{file.name}</p>
            <motion.p
              className={styles.analysisFileMeta}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {file.meta}
            </motion.p>
          </div>
          <motion.span
            className={styles.analysisBadge}
            initial={false}
            animate={{ opacity: run ? 1 : 0, x: run ? 0 : 8 }}
            exit={{
              opacity: 0,
              scale: 0.94,
              transition: { duration: 0.22, ease: MORPH_EASE },
            }}
            transition={{ duration: 0.24, delay: 0.12, ease: MORPH_EASE }}
          >
            {complete ? "Analysis complete" : "Analyzing"}
          </motion.span>
        </motion.div>

        <motion.div
          className={styles.analysisTrack}
          aria-hidden="true"
          exit={{ opacity: 0, scaleX: 0.96 }}
          transition={{ duration: 0.32, ease: MORPH_EASE }}
        >
          <motion.div
            className={styles.analysisFill}
            initial={false}
            animate={{ width: run ? "100%" : "0%" }}
            transition={{
              duration: ANALYSIS_COMPLETE_MS / 1000 - 0.18,
              delay: 0.12,
              ease: EASE,
            }}
          />
        </motion.div>

        <motion.div
          className={styles.analysisSteps}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: MORPH_EASE }}
        >
          {t.steps.map((step, index) => {
            const delay = 0.24 + index * 0.34;
            return (
              <motion.div
                key={step}
                className={styles.analysisRow}
                initial={false}
                animate={{
                  opacity: run ? 1 : 0.25,
                }}
                transition={{ duration: 0.3, delay, ease: EASE }}
              >
                <motion.span
                  className={styles.analysisCheck}
                  initial={false}
                  animate={{
                    scale: run ? 1 : 0,
                    rotate: run ? 0 : -12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 360,
                    damping: 18,
                    delay: delay + 0.1,
                  }}
                >
                  <CheckIcon />
                </motion.span>
                <span className={styles.analysisLabel}>{step}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Margin-by-region heatmap (regions × months, single blue ramp). */
function Heatmap() {
  return (
    <div className={styles.heatmap}>
      {t.heatValues.map((row, r) => (
        <div key={t.regions[r]} className={styles.heatRow}>
          <span className={styles.heatRegion}>{t.regions[r]}</span>
          {row.map((v, c) => (
            <motion.span
              key={c}
              className={styles.heatCell}
              style={{ background: `rgba(1, 101, 208, ${0.08 + v * 0.9})` }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.6 + 0.015 * (r * 6 + c) }}
            />
          ))}
        </div>
      ))}
      <div className={styles.heatRow}>
        <span className={styles.heatRegion} />
        {t.months.map((m) => (
          <span key={m} className={styles.heatMonth}>
            {m.slice(0, 1)}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Executive dashboard: 4 KPIs + revenue trend + margin-by-region heatmap. */
function ResultDashboard() {
  return (
    <div className={styles.resultReveal}>
      <FinanceDashboard />
    </div>
  );
}

export default function FinanceFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, ACTIVE_FLOW_VIEW);
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("analyze");

  useEffect(() => {
    if (!inView || reduce) return;
    if (phase === "analyze") {
      const id = window.setTimeout(
        () => setPhase("complete"),
        ANALYSIS_COMPLETE_MS,
      );
      return () => clearTimeout(id);
    }
    if (phase === "complete") {
      const id = window.setTimeout(() => setPhase("result"), RESULT_DELAY_MS);
      return () => clearTimeout(id);
    }
  }, [inView, reduce, phase]);

  const view: Phase = reduce ? "result" : !inView ? "idle" : phase;
  // Idle and analysis share the same scene so entering view starts in place.
  const stageKey =
    view === "idle" || view === "complete" ? "analyze" : view;

  return (
    <div ref={ref} className={styles.financeFlow}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={stageKey}
          className={styles.stage}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {(view === "idle" || view === "analyze" || view === "complete") && (
            <AnalysisStage
              run={view === "analyze" || view === "complete"}
              complete={view === "complete"}
            />
          )}
          {view === "result" && <ResultDashboard />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
