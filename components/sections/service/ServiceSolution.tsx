import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServiceSolution.module.css";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 10 17l9-10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceSolution({
  content,
}: {
  content: ServiceContent["solution"];
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.heading}
          lede={content.intro}
        />

        {content.tags && (
          <Reveal className={styles.tagsWrap}>
            <h3 className={styles.tagsHeading}>{content.tags.heading}</h3>
            <ul className={styles.tagsList}>
              {content.tags.items.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <div className={`${styles.grid} ${content.points.length === 1 ? styles.gridSingle : ""}`}>
          {content.points.map((point, i) => (
            <Reveal key={point.title} delay={0.12 * i}>
              <div className={styles.card}>
                <span className={styles.icon}>
                  <CheckIcon />
                </span>
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardBody}>{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
