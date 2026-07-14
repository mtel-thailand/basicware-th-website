"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../motion/Reveal";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./GrowthLoop.module.css";

const t = content.growthLoop;

/* Visual config only — step copy comes from the content dictionary */
const STEP_VISUALS = [
  { image: "/images/loop/stage-1.png", rotate: -8 },
  { image: "/images/loop/stage-2.png", rotate: -5 },
  { image: "/images/loop/stage-3.png", rotate: 0 },
  { image: "/images/loop/stage-4.png", rotate: 5 },
  { image: "/images/loop/stage-5.png", rotate: 8 },
];

const STEPS = t.steps.map((step, i) => ({ ...step, ...STEP_VISUALS[i] }));

const CYCLE_MS = 2800;

export default function GrowthLoop() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const stageInView = useInView(stageRef, { once: true, margin: "-15% 0px" });
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const [paused, setPaused] = useState(false);

  // Wait for the entrance stagger to finish, then start walking the loop
  useEffect(() => {
    if (!stageInView) return;
    const id = setTimeout(() => setEntered(true), 1400);
    return () => clearTimeout(id);
  }, [stageInView]);

  useEffect(() => {
    if (!entered || paused || reduce) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % STEPS.length),
      CYCLE_MS,
    );
    return () => clearInterval(id);
  }, [entered, paused, reduce]);

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
        />

        <div
          ref={stageRef}
          className={styles.stage}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Arc guide, drawn on scroll */}
          <svg
            className={styles.arc}
            viewBox="0 0 1200 400"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M60 360 Q600 -140 1140 360"
              stroke="var(--color-brand-cta)"
              strokeOpacity="0.35"
              strokeWidth="2"
              strokeDasharray="6 10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>

          <div className={styles.cards}>
            {STEPS.map((step, i) => {
              const isActive = entered && !reduce && active === i;
              return (
                <motion.div
                  key={step.number}
                  className={styles.cardSlot}
                  initial={{
                    opacity: 0,
                    y: reduce ? 0 : 60,
                    scale: reduce ? 1 : 0.85,
                    rotate: 0,
                  }}
                  animate={
                    stageInView
                      ? {
                          opacity: 1,
                          y: isActive ? -12 : 0,
                          scale: isActive ? 1.06 : 1,
                          rotate: isActive ? 0 : step.rotate,
                          zIndex: isActive ? 5 : 1,
                        }
                      : undefined
                  }
                  whileHover={
                    reduce ? undefined : { rotate: 0, scale: 1.06, y: -12, zIndex: 6 }
                  }
                  transition={{
                    duration: entered ? 0.6 : 0.8,
                    delay: entered ? 0 : 0.18 * i + 0.2,
                    ease: [0.34, 1.3, 0.5, 1],
                  }}
                  onClick={() => setActive(i)}
                >
                  <div
                    className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                  >
                    <div className={styles.cardText}>
                      <p className={styles.number}>{step.number}</p>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.caption}>{step.caption}</p>
                    </div>
                    <div className={styles.illustration}>
                      <Image
                        src={step.image}
                        alt={`Dandelion growth stage ${step.number}: ${step.title}`}
                        fill
                        sizes="(max-width: 600px) 60vw, 200px"
                      />
                    </div>
                    {!reduce && (
                      <motion.div
                        className={styles.cardProgress}
                        key={isActive ? `active-${active}` : "idle"}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        transition={
                          isActive
                            ? { duration: CYCLE_MS / 1000, ease: "linear" }
                            : { duration: 0.2 }
                        }
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Reveal delay={0.4} className={styles.footer}>
            <p className={styles.lede}>{t.lede}</p>
            <div className={styles.indicator}>
              <span>{t.indicator}</span>
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <path
                  d="M21 8a9 9 0 0 0-15.5-3.4L3 7m0 0V3m0 4h4m-4 9a9 9 0 0 0 15.5 3.4L21 17m0 0v4m0-4h-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
