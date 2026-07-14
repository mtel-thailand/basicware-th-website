"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../motion/Reveal";
import WaveDivider from "../ui/WaveDivider";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./Partnership.module.css";

const t = content.partnership;

/* Logos stay here — partner role/copy comes from the content dictionary */
const PARTNER_LOGOS: Record<string, React.ReactNode> = {
  byteplus: (
    <Image src="/images/partners/byteplus.svg" alt="BytePlus" width={290} height={60} />
  ),
  mtel: <Image src="/images/partners/mtel.png" alt="mtel" width={120} height={45} />,
};

const PARTNERS = t.partners.map((partner) => ({
  ...partner,
  logo: PARTNER_LOGOS[partner.key],
}));

export default function Partnership() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", reduce ? "-8%" : "8%"],
  );

  return (
    <section ref={ref} className={styles.section}>
      <motion.div className={styles.bg} style={{ y: bgY }}>
        <Image
          src="/images/partners/bg.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </motion.div>

      <WaveDivider fill="var(--color-bg-surface)" flip />

      <div className={`container ${styles.content}`}>
        <Reveal className={styles.heading}>
          <Eyebrow tone="dark" className={styles.eyebrow}>
            {t.eyebrow}
          </Eyebrow>
          <h2 className={`h2 ${styles.title}`}>
            <AccentText segments={t.title} accentClass={styles.accentDark} />
          </h2>
        </Reveal>

        <div className={styles.cards}>
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.role} delay={0.2 * i + 0.15} y={48}>
              <div className={styles.card}>
                <div className={styles.logo}>{partner.logo}</div>
                <div className={styles.cardText}>
                  <h3 className={styles.role}>{partner.role}</h3>
                  <p className={styles.copy}>{partner.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
