"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "../../motion/Reveal";
import Tilt from "../../motion/Tilt";
import WaveDivider from "../../ui/WaveDivider";
import Button from "../../ui/Button";
import AccentText from "../../ui/AccentText";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServiceHero.module.css";

const TYPE_INTERVAL_MS = 450;

function useTypedLines(count: number, reduce: boolean | null) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setVisible((v) => {
        if (v >= count) {
          clearInterval(id);
          return v;
        }
        return v + 1;
      });
    }, TYPE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [count, reduce]);

  return reduce ? count : visible;
}

function TerminalWindow({ terminal }: { terminal: ServiceContent["hero"]["terminal"] }) {
  const reduce = useReducedMotion();
  const visible = useTypedLines(terminal.length, reduce);

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalBar}>
        <span className={styles.terminalDot} />
        <span className={styles.terminalDot} />
        <span className={styles.terminalDot} />
        <span className={styles.terminalLabel}>basicware — live</span>
      </div>
      <div className={styles.terminalBody}>
        {terminal.slice(0, visible).map((line, i) => (
          <div key={i} className={`${styles.terminalLine} ${styles[`tone-${line.tone ?? "base"}`]}`}>
            {line.text}
          </div>
        ))}
        <span className={styles.terminalCursor} />
      </div>
    </div>
  );
}

export default function ServiceHero({
  content,
}: {
  content: ServiceContent["hero"];
}) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.text}>
          <div className={styles.chip}>
            <span className={styles.chipDot} />
            <span>{content.chip}</span>
          </div>
          <h1 className={`h2 ${styles.title}`}>
            <AccentText segments={content.title} />
          </h1>
          <p className={styles.lede}>{content.lede}</p>
          <div className={styles.ctaRow}>
            <Button href="#cta">{content.ctaLabel}</Button>
            <a href="#problem" className={styles.jumpLink}>
              ↓ 01 / The problem
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} scale={0.92} className={styles.visualWrap}>
          <Tilt max={6} className={styles.tilt}>
            <TerminalWindow terminal={content.terminal} />
          </Tilt>
        </Reveal>
      </div>

      <div className={styles.wave}>
        <WaveDivider fill="var(--color-bg-surface)" />
      </div>
    </section>
  );
}
