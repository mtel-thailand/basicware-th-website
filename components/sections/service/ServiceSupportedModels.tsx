import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServiceSupportedModels.module.css";

export default function ServiceSupportedModels({
  content,
}: {
  content: NonNullable<ServiceContent["supportedModels"]>;
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle eyebrow={content.eyebrow} title={content.heading} />

        <div className={styles.grid}>
          {content.models.map((model, i) => (
            <Reveal key={model.name} delay={0.05 * i} y={24}>
              <div className={styles.card}>
                <span className={styles.mark} aria-hidden="true">
                  {model.name.charAt(0)}
                </span>
                <h3 className={styles.name}>{model.name}</h3>
                <p className={styles.description}>{model.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
