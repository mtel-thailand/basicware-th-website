"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import styles from "./ProductVideoFlow.module.css";

const t = content.aiWorkers.videoFlow;

const SHOTS = t.shots.map((shot, i) => ({
  ...shot,
  src: `/images/workers/storyboard/shot-${i + 1}.png`,
}));

/* Auto-play loop timing (ms): storyboard builds, merges, video plays */
const BOARD_MS = 3600;
const MERGE_MS = 1000;
const FRAME_MS = 1150;
const VIDEO_MS = FRAME_MS * SHOTS.length;
const TOTAL_SECONDS = 15;

type Phase = "board" | "merge" | "video";

function timecode(frame: number) {
  const s = Math.round((frame * TOTAL_SECONDS) / SHOTS.length);
  return `00:${String(s).padStart(2, "0")}`;
}

/**
 * Product Video panel visual: six storyboard shots pop in one by one, then
 * fly together into a single video player that "plays" the cut with a
 * Ken Burns drift, before exploding back into the storyboard. Hover pauses;
 * reduced motion shows the static storyboard.
 */
export default function ProductVideoFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("board");
  const [frame, setFrame] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.4 });
  const autoPlay = inView && !paused && !reduce;

  useEffect(() => {
    if (!autoPlay) return;
    const ms = phase === "board" ? BOARD_MS : phase === "merge" ? MERGE_MS : VIDEO_MS;
    const id = setTimeout(() => {
      if (phase === "merge") setFrame(0);
      setPhase(phase === "board" ? "merge" : phase === "merge" ? "video" : "board");
    }, ms);
    return () => clearTimeout(id);
  }, [autoPlay, phase]);

  useEffect(() => {
    if (!autoPlay || phase !== "video") return;
    const id = setInterval(() => setFrame((f) => (f + 1) % SHOTS.length), FRAME_MS);
    return () => clearInterval(id);
  }, [autoPlay, phase]);

  const merged = phase !== "board" && !reduce;
  const playing = phase === "video";

  return (
    <div
      ref={ref}
      className={styles.videoFlow}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Storyboard grid */}
      <div className={styles.board} aria-hidden="true">
        {SHOTS.map((shot, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <motion.div
              key={shot.title}
              className={styles.tile}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.92 }}
              animate={
                merged
                  ? {
                      opacity: 0,
                      y: `${(0.5 - row) * 108}%`,
                      x: `${(1 - col) * 108}%`,
                      scale: 0.25,
                    }
                  : { opacity: 1, x: 0, y: 0, scale: 1 }
              }
              transition={{
                duration: merged ? 0.55 : 0.5,
                delay: merged ? 0.05 * i : 0.14 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.tileImage}>
                <Image src={shot.src} alt="" fill sizes="240px" />
              </div>
              <div className={styles.tileLabel}>
                <span className={styles.tileNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.tileTitle}>{shot.title}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Video player */}
      {!reduce && (
        <motion.div
          className={styles.player}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={
            merged
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.7, transition: { duration: 0.35 } }
          }
          transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className={styles.playerBar}>
            <span className={styles.playerDot} />
            <span className={styles.playerFile}>
              {playing ? t.fileName : t.generating}
            </span>
            <span className={styles.playerDuration}>{t.duration}</span>
          </div>
          <div className={styles.playerScreen}>
            <AnimatePresence initial={false}>
              <motion.div
                key={playing ? frame : "poster"}
                className={styles.playerFrame}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.09 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.4 },
                  scale: { duration: FRAME_MS / 1000 + 0.5, ease: "linear" },
                }}
              >
                <Image
                  src={SHOTS[playing ? frame : 0].src}
                  alt=""
                  fill
                  sizes="560px"
                />
              </motion.div>
            </AnimatePresence>
            <motion.span
              className={styles.playButton}
              animate={
                playing
                  ? { opacity: 0, scale: 1.5 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.4, delay: playing ? 0.2 : 0.6 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
              </svg>
            </motion.span>
            <AnimatePresence>
              {playing && (
                <motion.span
                  className={styles.shotChip}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {String(frame + 1).padStart(2, "0")} · {SHOTS[frame].title}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className={styles.playerControls}>
            <div className={styles.progressTrack}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: "0%" }}
                animate={{ width: playing ? "100%" : "0%" }}
                transition={
                  playing
                    ? { duration: VIDEO_MS / 1000, ease: "linear" }
                    : { duration: 0.2 }
                }
              />
            </div>
            <span className={styles.playerTime}>
              {timecode(playing ? frame : 0)} / {t.duration}
            </span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={styles.controlIcon}>
              <path
                d="M4 9v6h4l5 4V5L8 9H4Zm13.5 3a3.5 3.5 0 0 0-2-3.15v6.3a3.5 3.5 0 0 0 2-3.15Z"
                fill="currentColor"
              />
            </svg>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={styles.controlIcon}>
              <path
                d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </div>
  );
}
