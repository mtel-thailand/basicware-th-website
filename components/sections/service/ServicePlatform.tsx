import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import { sectionEyebrow } from "./sectionNumber";
import styles from "./ServicePlatform.module.css";

export default function ServicePlatform({
  content,
}: {
  content: ServiceContent["platform"];
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow(3, content.eyebrow)}
          title={content.heading}
          align="left"
          tone="dark"
        />

        <div className={styles.grid}>
          {content.features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.08 * i}>
              <div className={styles.card}>
                <span className={styles.idx}>{String(i + 1).padStart(2, "0")}</span>
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
