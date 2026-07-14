"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../motion/Reveal";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./Education.module.css";

const t = content.education;

/* Per design annotation (8 Jul): steps only, no certificate image;
   the BytePlus certification step (last) is the highlighted one. */
const HIGHLIGHTED_STEP = 2;

const STEPS = t.steps.map((step, i) => ({
  ...step,
  highlight: i === HIGHLIGHTED_STEP,
}));

function CertificateIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m9.75 9 1.5 1.5 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Education() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
          lede={t.lede}
        />

        <div className={styles.steps}>
          {/* Progress line connecting the three steps */}
          <svg className={styles.progress} viewBox="0 0 1200 4" preserveAspectRatio="none" aria-hidden="true">
            <motion.line
              x1="100"
              y1="2"
              x2="1100"
              y2="2"
              stroke="var(--color-brand-cta)"
              strokeOpacity="0.3"
              strokeWidth="2"
              strokeDasharray="6 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          {STEPS.map((step, i) => (
            <Reveal key={step.eyebrow} delay={0.2 * i} y={40}>
              <div
                className={`${styles.card} ${step.highlight ? styles.highlight : ""}`}
              >
                {step.highlight && (
                  <motion.div
                    className={styles.badge}
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{
                      delay: 0.2 * i + 0.5,
                      type: "spring",
                      stiffness: 260,
                      damping: 14,
                    }}
                  >
                    <CertificateIcon />
                  </motion.div>
                )}
                <p className={styles.stepEyebrow}>{step.eyebrow}</p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepCaption}>{step.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
