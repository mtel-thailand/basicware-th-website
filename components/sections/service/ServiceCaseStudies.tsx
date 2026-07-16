"use client";

import { useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServiceCaseStudies.module.css";

export default function ServiceCaseStudies({
  content,
}: {
  content: NonNullable<ServiceContent["caseStudies"]>;
}) {
  const [active, setActive] = useState(0);
  const study = content.items[active];

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle eyebrow={content.eyebrow} title={content.heading} />

        {content.items.length > 1 && (
          <div className={styles.tabs} role="tablist" aria-label="Case studies">
            {content.items.map((item, i) => (
              <button
                key={item.clientName}
                type="button"
                role="tab"
                id={`case-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`case-panel-${i}`}
                className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                onClick={() => setActive(i)}
              >
                {item.clientName}
              </button>
            ))}
          </div>
        )}

        <div id={`case-panel-${active}`} role="tabpanel" aria-labelledby={`case-tab-${active}`}>
          <Reveal key={study.clientName} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.client}>{study.clientName}</span>
              <span className={styles.industry}>{study.industry}</span>
            </div>

            {study.headline && <p className={styles.headline}>{study.headline}</p>}

            <div className={styles.columns}>
              <div>
                <h3 className={styles.columnTitle}>Challenge</h3>
                <p className={styles.columnBody}>{study.challenge}</p>
              </div>
              <div>
                <h3 className={styles.columnTitle}>Our solution</h3>
                <p className={styles.columnBody}>{study.solution}</p>
              </div>
            </div>

            {study.quote && (
              <blockquote className={styles.quote}>
                <p>&ldquo;{study.quote}&rdquo;</p>
                {study.quoteSpeaker && <cite className={styles.cite}>{study.quoteSpeaker}</cite>}
              </blockquote>
            )}

            <div className={styles.results}>
              {study.results.map((result) => (
                <div key={result.label} className={styles.stat}>
                  <span className={styles.statValue}>{result.value}</span>
                  <span className={styles.statLabel}>{result.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
