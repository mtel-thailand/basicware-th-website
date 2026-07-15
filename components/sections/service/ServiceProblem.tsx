import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServiceProblem.module.css";

/** Generic warning/friction glyph flanking each pain point. */
function FrictionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 2 20h20L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 9.5v4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16.7" r="1" fill="currentColor" />
    </svg>
  );
}

export default function ServiceProblem({
  content,
}: {
  content: ServiceContent["problem"];
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.heading}
          align="left"
        />

        <div className={styles.grid}>
          {content.points.map((point, i) => (
            <Reveal key={point.title ?? i} delay={0.15 * i}>
              <div className={styles.card}>
                <span className={styles.icon}>
                  <FrictionIcon />
                </span>
                <div className={styles.cardText}>
                  {point.title && <h3 className={styles.cardTitle}>{point.title}</h3>}
                  <p className={styles.cardBody}>{point.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
