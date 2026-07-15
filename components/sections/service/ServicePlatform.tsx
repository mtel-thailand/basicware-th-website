import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServicePlatform.module.css";

/** Generic spark/feature glyph — stands in until a designer supplies per-feature icons. */
function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5c.32 4.2 3.3 7.2 7.5 7.5-4.2.32-7.18 3.3-7.5 7.5-.32-4.2-3.3-7.18-7.5-7.5 4.2-.3 7.18-3.3 7.5-7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ServicePlatform({
  content,
}: {
  content: ServiceContent["platform"];
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle eyebrow={content.eyebrow} title={content.heading} />

        <div className={styles.grid}>
          {content.features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.08 * i}>
              <div className={styles.card}>
                <span className={styles.icon}>
                  <SparkIcon />
                </span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardBody}>{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
