"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import CountUp from "../../motion/CountUp";
import type { ServiceContent } from "@/content/services/types";
import { sectionEyebrow } from "./sectionNumber";
import styles from "./ServiceCaseStudies.module.css";

function CaseStudyCard({
  study,
}: {
  study: NonNullable<ServiceContent["caseStudies"]>["items"][number];
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Reveal className={styles.card}>
      <div className={styles.meta}>
        <h3 className={styles.client}>{study.clientName}</h3>
        <span className={styles.industry}>{study.industry}</span>
      </div>

      {study.headline && <p className={styles.headline}>{study.headline}</p>}

      <div className={styles.results}>
        {study.results.map((result) => (
          <div key={result.label} className={styles.stat}>
            <CountUp
              value={result.value}
              prefix={result.prefix}
              suffix={result.suffix}
              locale={result.grouped}
              className={styles.statValue}
            />
            <span className={styles.statLabel}>{result.label}</span>
          </div>
        ))}
      </div>

      {study.quote && (
        <blockquote className={styles.quote}>
          <p>&ldquo;{study.quote}&rdquo;</p>
          {study.quoteSpeaker && <cite className={styles.cite}>{study.quoteSpeaker}</cite>}
        </blockquote>
      )}

      <div>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "− Hide the full story" : "+ Read the full story"}
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={styles.detailWrap}
            >
              <div className={styles.columns}>
                <div>
                  <h4 className={styles.columnTitle}>The challenge</h4>
                  <p className={styles.columnBody}>{study.challenge}</p>
                </div>
                <div>
                  <h4 className={styles.columnTitle}>The solution</h4>
                  <p className={styles.columnBody}>{study.solution}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function ServiceCaseStudies({
  content,
  sectionNumber,
}: {
  content: NonNullable<ServiceContent["caseStudies"]>;
  sectionNumber: number;
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle eyebrow={sectionEyebrow(sectionNumber, content.eyebrow)} title={content.heading} />

        <div className={styles.list}>
          {content.items.map((study) => (
            <CaseStudyCard key={study.clientName} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
