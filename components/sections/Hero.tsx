"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import DandelionSeeds from "../motion/DandelionSeeds";
import WaveDivider from "../ui/WaveDivider";
import { content } from "@/content";
import styles from "./Hero.module.css";

const t = content.hero;

const EASE = [0.16, 1, 0.3, 1] as const;

/** One word of the headline, staggered in on load. */
function Word({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className={styles.wordMask}>
      <motion.span
        className={styles.word}
        initial={{ y: "110%", rotate: 3 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax: content drifts up and fades as you scroll past the hero
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);

  // Mouse parallax: the world leans gently toward the cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 16 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 16 });
  const bgMouseX = useTransform(springX, [-1, 1], [-16, 16]);
  const bgMouseY = useTransform(springY, [-1, 1], [-10, 10]);
  const glowMouseX = useTransform(springX, [-1, 1], [-48, 48]);
  const glowMouseY = useTransform(springY, [-1, 1], [-30, 30]);

  function handleMouse(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  return (
    <section
      ref={ref}
      className={styles.hero}
      id="top"
      onMouseMove={handleMouse}
    >
      <motion.div className={styles.bg} style={{ y: bgY }}>
        <motion.div
          className={styles.bgInner}
          style={{ x: bgMouseX, y: bgMouseY }}
        >
          <Image
            src="/images/hero/bg.avif"
            alt="A dandelion on a green hillside, its seeds drifting into a blue sky and forming an infinity symbol"
            fill
            priority
            sizes="100vw"
            className={styles.bgImage}
          />
        </motion.div>
      </motion.div>

      <DandelionSeeds />

      <motion.div
        className={styles.content}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className={styles.glowWrap}
          style={{ x: glowMouseX, y: glowMouseY }}
          aria-hidden="true"
        >
          <div className={styles.glow} />
        </motion.div>

        <motion.div
          className={styles.chip}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        >
          {t.chip}
        </motion.div>

        <h1 className={styles.headline}>
          <span className={styles.line}>
            {t.headlineLine1.map((word, i) => (
              <span key={word}>
                {i > 0 && " "}
                <Word delay={0.65 + i * 0.1}>{word}</Word>
              </span>
            ))}
          </span>
          <span className={styles.line}>
            <Word delay={0.95}>
              <span className={styles.growth}>
                {t.growthPre}
                <motion.span
                  className={styles.glyph}
                  animate={
                    reduce
                      ? undefined
                      : { rotate: [0, 8, -4, 0], scale: [1, 1.06, 1] }
                  }
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/hero/dandelion-glyph.svg"
                    alt="o"
                    width={64}
                    height={64}
                  />
                </motion.span>
                {t.growthPost}
              </span>
            </Word>
            {t.headlineTail.map((word, i) => (
              <span key={word}>
                {" "}
                <Word delay={1.05 + i * 0.1}>{word}</Word>
              </span>
            ))}
          </span>
        </h1>
      </motion.div>

      <div className={styles.wave}>
        <WaveDivider fill="var(--color-bg-surface)" />
      </div>
    </section>
  );
}
