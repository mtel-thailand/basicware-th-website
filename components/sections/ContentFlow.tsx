"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import styles from "./ContentFlow.module.css";

const t = content.aiWorkers.contentFlow;

/* Visual config only — asset text comes from the content dictionary */
const ASSETS = t.assets.map((asset, i) => ({
  ...asset,
  src: `/images/workers/storyboard/shot-${i + 1}.png`,
}));

const CHANNEL_DOTS: Record<string, string> = {
  TikTok: "#111110",
  Instagram: "#e1306c",
  Facebook: "#1877f2",
  Shopee: "#ee4d2d",
  YouTube: "#ff0000",
};

/* Auto-play loop timing: batches flip to Ready, cursor clicks campaign 1,
 * the asset grid shows, then it returns to the board */
const READY_BASE_S = 1.1;
const READY_STEP_S = 0.35;
const CURSOR_DELAY_S = 2.3;
const CURSOR_FLY_S = 1.0;
const PRESS_AT_MS = 3600;
const PRESS_MS = 350;
const ASSETS_HOLD_MS = 5800;

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

/** Fake mouse pointer that flies onto the first campaign and clicks it. */
function ClickCursor() {
  return (
    <motion.div
      className={styles.cursorLayer}
      initial={{ opacity: 0, x: 140, y: 190 }}
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

/** Status badge that flips from "Scheduling…" to a green "Ready ✓" pop. */
function StatusBadge({ readyAt, reduce }: { readyAt: number; reduce: boolean }) {
  return (
    <span className={styles.statusSlot}>
      {!reduce && (
        <motion.span
          className={styles.statusScheduled}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: -8 }}
          transition={{ delay: readyAt, duration: 0.25 }}
        >
          <span className={styles.statusSpinner} aria-hidden="true" />
          {t.scheduledLabel}
        </motion.span>
      )}
      <motion.span
        className={styles.statusReady}
        initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduce ? 0 : readyAt, duration: 0.35, ease: "backOut" }}
      >
        <CheckIcon />
        {t.readyLabel}
      </motion.span>
    </span>
  );
}

/** Planner board: scheduled content batches grouped by campaign. */
function CampaignBoard({
  onSelect,
  pressing,
  showCursor,
}: {
  onSelect: (index: number) => void;
  pressing: boolean;
  showCursor: boolean;
}) {
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
          <motion.button
            key={campaign.name}
            type="button"
            className={`${styles.row} ${
              i === 0 && pressing ? styles.rowPressed : ""
            }`}
            onClick={() => onSelect(i)}
            aria-label={`${campaign.name} — ${t.viewHint}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.15 * i,
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
            <span className={styles.assetCount}>{campaign.assets}</span>
            <StatusBadge readyAt={READY_BASE_S + READY_STEP_S * i} reduce={reduce} />
            <span className={styles.viewHint} aria-hidden="true">
              {t.viewHint}
            </span>
          </motion.button>
        ))}
      </div>

      {showCursor && <ClickCursor />}
    </div>
  );
}

/** Campaign detail: the batch's localized assets, ready to use. */
function AssetGrid({
  campaignIndex,
  onBack,
}: {
  campaignIndex: number;
  onBack: () => void;
}) {
  const reduce = useReducedMotion() ?? false;
  const campaign = t.campaigns[campaignIndex];
  return (
    <div className={styles.window}>
      <div className={styles.windowBar}>
        <button
          type="button"
          className={styles.backButton}
          onClick={onBack}
          aria-label={t.backLabel}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M14.5 5 8 12l6.5 7"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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
        {ASSETS.map((asset, i) => (
          <motion.div
            key={asset.title}
            className={styles.assetTile}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.12 + 0.09 * i,
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
                  delay: reduce ? 0 : 0.55 + 0.09 * i,
                  duration: 0.3,
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
 * by one. An auto-play cursor clicks a campaign to reveal its localized
 * assets, ready to use, then loops back. Hovering pauses the loop so real
 * clicks take over; reduced motion disables auto-play.
 */
export default function ContentFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [pressing, setPressing] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.4 });
  const autoPlay = inView && !paused && !reduce;
  const showAssets = selected !== null;

  useEffect(() => {
    if (!autoPlay) return;
    if (!showAssets) {
      const press = setTimeout(() => setPressing(true), PRESS_AT_MS);
      const flip = setTimeout(() => setSelected(0), PRESS_AT_MS + PRESS_MS);
      return () => {
        clearTimeout(press);
        clearTimeout(flip);
        setPressing(false);
      };
    }
    const back = setTimeout(() => setSelected(null), ASSETS_HOLD_MS);
    return () => clearTimeout(back);
  }, [autoPlay, showAssets]);

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 };
  const visible = reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 };

  return (
    <div
      ref={ref}
      className={styles.contentFlow}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {showAssets ? (
          <motion.div
            key="assets"
            className={styles.phase}
            initial={hidden}
            animate={visible}
            exit={hidden}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <AssetGrid campaignIndex={selected} onBack={() => setSelected(null)} />
          </motion.div>
        ) : (
          <motion.div
            key="board"
            className={styles.phase}
            initial={hidden}
            animate={visible}
            exit={hidden}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <CampaignBoard
              onSelect={setSelected}
              pressing={pressing}
              showCursor={autoPlay}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
