import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import { sectionEyebrow } from "./sectionNumber";
import styles from "./ServiceProblem.module.css";

export default function ServiceProblem({
  content,
}: {
  content: ServiceContent["problem"];
}) {
  return (
    <section id="problem" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow(1, content.eyebrow)}
          title={content.heading}
          align="left"
        />

        <div className={styles.grid}>
          {content.points.map((point, i) => (
            <Reveal key={point.title ?? i} delay={0.15 * i}>
              <div className={styles.card}>
                <span className={styles.idx}>{String(i + 1).padStart(2, "0")}</span>
                {point.title && <h3 className={styles.cardTitle}>{point.title}</h3>}
                <p className={styles.cardBody}>{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
