"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import styles from "./ContentFlow.module.css";

const t = content.aiWorkers.contentFlow;

const STORYBOARD_SHOTS = 6;

const CHANNEL_DOTS: Record<string, string> = {
  TikTok: "#111110",
  Instagram: "#e1306c",
  Facebook: "#1877f2",
  Shopee: "#ee4d2d",
  YouTube: "#ff0000",
};

/* One-shot sequence: batches flip to Ready, then the first campaign opens
 * automatically and holds on its localized asset grid. */
const READY_BASE_S = 0.72;
const READY_STEP_S = 0.22;
const ASSETS_DELAY_MS = 1600;
const ACTIVE_FLOW_VIEW = {
  once: true,
  amount: 0.45,
  margin: "0px 0px -25% 0px",
} as const;

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12.5 9.5 18 20 6.5"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7v5.2l3.4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Status badge that flips from "Scheduling…" to a green "Ready ✓" pop. */
function StatusBadge({ readyAt, reduce }: { readyAt: number; reduce: boolean }) {
  return (
    <span className={styles.statusSlot}>
      {!reduce && (
        <motion.span
          className={styles.statusScheduled}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: readyAt, duration: 0.25 }}
        >
          <span className={styles.statusSpinner} aria-hidden="true" />
          {t.scheduledLabel}
        </motion.span>
      )}
      <motion.span
        className={styles.statusReady}
        initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: reduce ? 0 : readyAt,
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <CheckIcon />
        {t.readyLabel}
      </motion.span>
    </span>
  );
}

/** Planner board: scheduled content batches grouped by campaign. */
function CampaignBoard() {
  const reduce = useReducedMotion() ?? false;
  return (
    <div className={styles.window}>
      <div className={styles.windowBar}>
        <span className={styles.windowDots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.windowTitle}>{t.windowTitle}</span>
        <span className={styles.windowBadge}>{t.windowBadge}</span>
      </div>

      <div className={styles.rows}>
        {t.campaigns.map((campaign, i) => (
          <motion.div
            key={campaign.name}
            className={styles.row}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.45,
              delay: 0.1 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className={styles.dateRail}>
              <span className={styles.dateMonth}>{campaign.month}</span>
              <span className={styles.dateDay}>{campaign.day}</span>
            </span>
            <span className={styles.rowInfo}>
              <span className={styles.rowName}>{campaign.name}</span>
              <span className={styles.rowMeta}>
                <span className={styles.rowTime}>
                  <ClockIcon />
                  {campaign.time}
                </span>
                {campaign.channels.map((channel) => (
                  <span key={channel} className={styles.channelChip}>
                    <i
                      className={styles.channelDot}
                      style={{ background: CHANNEL_DOTS[channel] }}
                      aria-hidden="true"
                    />
                    {channel}
                  </span>
                ))}
              </span>
            </span>
            <span className={styles.assetCount}>{campaign.assets.length} assets</span>
            <StatusBadge readyAt={READY_BASE_S + READY_STEP_S * i} reduce={reduce} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Campaign detail: the batch's localized assets, ready to use. */
function AssetGrid() {
  const reduce = useReducedMotion() ?? false;
  const campaign = t.campaigns[0];
  const assets = campaign.assets.map((asset, i) => ({
    ...asset,
    src: `/images/workers/storyboard/shot-${(i % STORYBOARD_SHOTS) + 1}.png`,
  }));
  return (
    <div className={styles.window}>
      <div className={styles.windowBar}>
        <span className={styles.windowDots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.windowTitle}>{campaign.name}</span>
        <motion.span
          className={styles.readyPill}
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.35, ease: "backOut" }}
        >
          <CheckIcon />
          {t.assetsBadge}
        </motion.span>
      </div>

      <div className={styles.assetGrid}>
        {assets.map((asset, i) => (
          <motion.div
            key={asset.title}
            className={styles.assetTile}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.08 + 0.06 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className={styles.assetThumb}>
              <Image src={asset.src} alt="" fill sizes="220px" />
              {!reduce && <span className={styles.shimmer} aria-hidden="true" />}
              <motion.span
                className={styles.assetCheck}
                initial={reduce ? { scale: 1 } : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: reduce ? 0 : 0.42 + 0.06 * i,
                  duration: 0.25,
                  ease: "backOut",
                }}
              >
                <CheckIcon />
              </motion.span>
            </div>
            <div className={styles.assetMeta}>
              <p className={styles.assetTitle}>{asset.title}</p>
              <div className={styles.assetChips}>
                <span className={styles.kindChip}>{asset.kind}</span>
                <span className={styles.localeChip}>{asset.locale}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * Content Management panel visual: a CMS planner where content batches —
 * already planned, scheduled, and grouped by campaign — flip to "Ready" one
 * by one. The first campaign then opens automatically to reveal its localized
 * assets and holds on that final state.
 */
export default function ContentFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, ACTIVE_FLOW_VIEW);
  const reduce = useReducedMotion();
  const [showAssets, setShowAssets] = useState(false);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = window.setTimeout(() => setShowAssets(true), ASSETS_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [inView, reduce]);

  const finalState = reduce || showAssets;

  return (
    <div ref={ref} className={styles.contentFlow}>
      <AnimatePresence mode="sync" initial={false}>
        {finalState ? (
          <motion.div
            key="assets"
            className={styles.phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <AssetGrid />
          </motion.div>
        ) : inView ? (
          <motion.div
            key="board"
            className={styles.phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <CampaignBoard />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
