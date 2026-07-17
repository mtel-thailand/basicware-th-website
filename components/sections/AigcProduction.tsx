"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../motion/Reveal";
import Tilt from "../motion/Tilt";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./AigcProduction.module.css";

const t = content.aigc;
const PROMPT_TEXT = t.prompt;

/** Prompt text that types itself when scrolled into view. */
function TypewriterPrompt() {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const done = count >= PROMPT_TEXT.length;

  useEffect(() => {
    if (!inView || reduce) return;
    if (done) return;
    const id = setInterval(() => {
      setCount((current) => Math.min(current + 3, PROMPT_TEXT.length));
    }, 30);
    return () => clearInterval(id);
  }, [inView, reduce, done]);

  const visible = reduce ? PROMPT_TEXT : PROMPT_TEXT.slice(0, count);

  return (
    <p ref={ref} className={styles.promptText}>
      {visible.split("\n").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
      {!reduce && !done && <span className={styles.caret} />}
    </p>
  );
}

/* Visual config only — labels come from the content dictionary */
const CARD_IMAGES: Record<string, string | undefined> = {
  copywriting: undefined,
  image: "/images/aigc/image-gen.png",
  avatar: "/images/aigc/avatar.png",
  video: "/images/aigc/video.png",
};

const CARDS = t.cards.map((card) => ({ ...card, src: CARD_IMAGES[card.key] }));

export default function AigcProduction() {
  const [generated, setGenerated] = useState(true);
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} id="solutions">
      <div className="container">
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
        />

        <Reveal className={styles.promptWrap} delay={0.15}>
          <div className={styles.promptCard}>
            <TypewriterPrompt />
            <div className={styles.promptActions}>
              <button className={styles.modelSelect} type="button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2.5 4 7v10l8 4.5 8-4.5V7l-8-4.5Zm0 4.5 4 2.25v4.5L12 16l-4-2.25v-4.5L12 7Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                </svg>
                {t.model}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <motion.button
                className={styles.generate}
                type="button"
                aria-expanded={generated}
                aria-controls="aigc-results"
                onClick={() => setGenerated(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {t.generateLabel}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3c.3 3.9 3.1 6.7 7 7-3.9.3-6.7 3.1-7 7-.3-3.9-3.1-6.7-7-7 3.9-.3 6.7-3.1 7-7Z"
                    fill="currentColor"
                  />
                  <path d="M18.5 15c.15 1.95 1.55 3.35 3.5 3.5-1.95.15-3.35 1.55-3.5 3.5-.15-1.95-1.55-3.35-3.5-3.5 1.95-.15 3.35-1.55 3.5-3.5Z" fill="currentColor" opacity="0.7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </Reveal>

        {generated && (
          <div id="aigc-results" className={styles.grid}>
            {CARDS.map((card, i) => (
              <motion.div
                key={card.key}
                className={styles.cardWrap}
                initial={{ opacity: 0, y: reduce ? 0 : 32, scale: reduce ? 1 : 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: reduce ? 0 : 0.12 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Tilt max={9} className={styles.card}>
                  {card.key === "copywriting" ? (
                    <div className={styles.copyCard}>
                      <blockquote className={styles.quote}>{t.quote}</blockquote>
                      <p className={styles.copyCaption}>{t.quoteCaption}</p>
                    </div>
                  ) : (
                    <Image
                      src={card.src!}
                      alt={card.label}
                      fill
                      sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 285px"
                      className={styles.cardImage}
                    />
                  )}
                </Tilt>
                <p className={styles.cardLabel}>{card.label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
