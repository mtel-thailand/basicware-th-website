"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import styles from "./FinanceFlow.module.css";

const t = content.aiWorkers.financeFlow;

/* Auto-play loop timing (ms): file drops in, quick scan, dashboard holds */
const FILE_FLY_S = 1.1;
const LAND_AT_MS = 1500;
const DROP_MS = 2400;
const SCAN_MS = 1500;
const DASH_HOLD_MS = 6200;

const BAR_MAX = Math.max(...t.barValues);

type Phase = "drop" | "scan" | "dash";

function ExcelIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="2.5" width="18" height="19" rx="3" fill="#1d6f42" />
      <path
        d="M8.6 8l2.5 4-2.5 4h2.1l1.5-2.6L13.7 16h2.1l-2.5-4 2.5-4h-2.1l-1.5 2.6L10.7 8H8.6Z"
        fill="#fff"
      />
    </svg>
  );
}

function SheetsIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="2" width="15" height="20" rx="2.4" fill="#169154" />
      <path
        d="M8 10.5h8v6.5H8v-6.5Zm1.6 1.6v1h2v-1h-2Zm3.4 0v1h2v-1h-2Zm-3.4 2.3v1h2v-1h-2Zm3.4 0v1h2v-1h-2Z"
        fill="#fff"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16V5m0 0-4.5 4.5M12 5l4.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 15.5v2A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 17 9.5 10.5l4 4L21 7m0 0h-5.5M21 7v5.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** File card that drifts into the dropzone, presses, and sinks in. */
function DroppedFile({ kind, name, meta }: { kind: "excel" | "sheets"; name: string; meta: string }) {
  return (
    <motion.div
      className={styles.fileCard}
      initial={{ opacity: 0, x: 170, y: -150, rotate: 6 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [170, 0, 0, 0],
        y: [-150, 0, 0, 8],
        rotate: [6, -1.5, -1.5, 0],
        scale: [1, 1, 1, 0.82],
      }}
      transition={{
        duration: DROP_MS / 1000,
        times: [0, FILE_FLY_S / (DROP_MS / 1000), LAND_AT_MS / DROP_MS, 1],
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-hidden="true"
    >
      {kind === "excel" ? <ExcelIcon /> : <SheetsIcon />}
      <div className={styles.fileInfo}>
        <p className={styles.fileName}>{name}</p>
        <p className={styles.fileMeta}>{meta}</p>
      </div>
    </motion.div>
  );
}

/** Dashed dropzone shown while the file flies in. */
function DropZone({ file }: { file: (typeof t.files)[number] }) {
  return (
    <div className={styles.dropStage}>
      <motion.div
        className={styles.dropzone}
        initial={{ borderColor: "var(--color-border-default)" }}
        animate={{
          borderColor: [
            "var(--color-border-default)",
            "var(--color-brand-cta)",
            "var(--color-brand-cta)",
          ],
          backgroundColor: [
            "var(--color-bg-surface)",
            "var(--color-bg-brand-subtle)",
            "var(--color-bg-brand-subtle)",
          ],
        }}
        transition={{ duration: DROP_MS / 1000, times: [0, 0.45, 1] }}
      >
        <motion.span
          className={styles.dropIcon}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <UploadIcon />
        </motion.span>
        <p className={styles.dropTitle}>{t.dropTitle}</p>
        <p className={styles.dropHint}>{t.dropHint}</p>
        <span className={styles.dropKinds} aria-hidden="true">
          <ExcelIcon />
          <SheetsIcon />
        </span>
        <motion.span
          className={styles.dropRipple}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 2.6], opacity: [0.45, 0] }}
          transition={{ delay: LAND_AT_MS / 1000, duration: 0.6, ease: "easeOut" }}
          aria-hidden="true"
        />
      </motion.div>
      <DroppedFile kind={file.kind} name={file.name} meta={file.meta} />
    </div>
  );
}

/** Brief indeterminate scan between the drop and the dashboard reveal. */
function ScanCard({ file }: { file: (typeof t.files)[number] }) {
  return (
    <div className={styles.dropStage}>
      <div className={styles.scanCard}>
        {file.kind === "excel" ? <ExcelIcon /> : <SheetsIcon />}
        <div className={styles.scanInfo}>
          <p className={styles.fileName}>{file.name}</p>
          <p className={styles.scanLabel}>{t.analyzing}</p>
          <div className={styles.scanTrack}>
            <motion.div
              className={styles.scanFill}
              initial={{ width: "8%" }}
              animate={{ width: "96%" }}
              transition={{ duration: SCAN_MS / 1000, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Tiny cash-flow sparkline inside the first KPI tile. */
function KpiSparkline({ active }: { active: boolean }) {
  const line = "M3 26 C 14 24, 22 20, 32 21 S 52 12, 62 13 S 80 5, 91 3";
  return (
    <svg
      className={styles.kpiSpark}
      viewBox="0 0 94 30"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={`${line} L91 30 L3 30 Z`} fill="var(--color-brand-cta)" opacity="0.1" />
      <motion.path
        d={line}
        stroke="var(--color-brand-cta)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
      />
    </svg>
  );
}

/** Auto-generated mini dashboard: KPI tiles, revenue bars, margin heatmap. */
function MiniDashboard({ animate }: { animate: boolean }) {
  const pop = (delay: number) => ({
    initial: animate ? { opacity: 0, y: 14 } : false,
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className={styles.dashboard}>
      <motion.div className={styles.dashHeader} {...pop(0)}>
        <span className={styles.dashLogo} aria-hidden="true">
          <TrendIcon />
        </span>
        <p className={styles.dashTitle}>{t.dashboardTitle}</p>
        <span className={styles.dashBadge}>{t.generatedBadge}</span>
      </motion.div>

      <div className={styles.kpiRow}>
        {t.kpis.map((kpi, i) => (
          <motion.div key={kpi.label} className={styles.kpiTile} {...pop(0.12 + 0.1 * i)}>
            <p className={styles.kpiLabel}>{kpi.label}</p>
            <p className={styles.kpiValue}>{kpi.value}</p>
            <span className={styles.kpiDelta}>
              <TrendIcon />
              {kpi.delta}
            </span>
            {i === 0 && <KpiSparkline active={animate} />}
          </motion.div>
        ))}
      </div>

      <div className={styles.chartRow}>
        <motion.div className={styles.chartCard} {...pop(0.3)}>
          <p className={styles.chartTitle}>{t.barTitle}</p>
          <div className={styles.barChart}>
            {t.barValues.map((value, i) => {
              const peak = value === BAR_MAX;
              return (
                <div key={t.months[i]} className={styles.barCol}>
                  {peak && <span className={styles.barValue}>{value}</span>}
                  <div className={styles.barTrack}>
                    <motion.div
                      className={`${styles.bar} ${peak ? styles.barPeak : ""}`}
                      initial={animate ? { height: "0%" } : false}
                      animate={{ height: `${(value / BAR_MAX) * 100}%` }}
                      transition={{
                        duration: 0.7,
                        delay: 0.45 + 0.07 * i,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>
                  <span className={styles.barLabel}>{t.months[i]}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div className={styles.chartCard} {...pop(0.4)}>
          <p className={styles.chartTitle}>{t.heatTitle}</p>
          <div className={styles.heatmap}>
            {t.regions.map((region, r) => (
              <div key={region} className={styles.heatRow}>
                <span className={styles.heatRegion}>{region}</span>
                {t.heatValues[r].map((value, c) => (
                  <motion.span
                    key={c}
                    className={styles.heatCell}
                    style={{ background: `rgba(1, 101, 208, ${0.06 + value * 0.9})` }}
                    initial={animate ? { opacity: 0, scale: 0.6 } : false}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.55 + 0.03 * (r * 6 + c) }}
                  />
                ))}
              </div>
            ))}
            <div className={styles.heatRow}>
              <span className={styles.heatRegion} />
              {t.months.map((month) => (
                <span key={month} className={styles.heatMonth}>
                  {month.slice(0, 1)}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Financial Analysis panel visual: a spreadsheet file (Excel and Google
 * Sheets, alternating each cycle) drops into an upload zone, a quick scan
 * runs, and a mini financial dashboard — KPIs, revenue bars, a margin
 * heatmap — assembles itself. Loops while in view; hover pauses; reduced
 * motion shows the finished dashboard statically.
 */
export default function FinanceFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("drop");
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.4 });
  const autoPlay = inView && !paused && !reduce;

  useEffect(() => {
    if (!autoPlay) return;
    const ms = phase === "drop" ? DROP_MS : phase === "scan" ? SCAN_MS : DASH_HOLD_MS;
    const id = setTimeout(() => {
      if (phase === "dash") setCycle((c) => c + 1);
      setPhase(phase === "drop" ? "scan" : phase === "scan" ? "dash" : "drop");
    }, ms);
    return () => clearTimeout(id);
  }, [autoPlay, phase]);

  const file = t.files[cycle % t.files.length];
  const view = reduce ? "dash" : phase;
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.97 };
  const visible = reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 };

  return (
    <div
      ref={ref}
      className={styles.financeFlow}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={view === "dash" ? "dash" : view === "scan" ? "scan" : `drop-${cycle}`}
          className={styles.stage}
          initial={hidden}
          animate={visible}
          exit={hidden}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {view === "drop" && <DropZone file={file} />}
          {view === "scan" && <ScanCard file={file} />}
          {view === "dash" && <MiniDashboard animate={!reduce} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
