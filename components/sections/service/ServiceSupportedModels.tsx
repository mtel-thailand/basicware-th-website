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
            <Reveal key={model} delay={0.05 * i} y={24}>
              <div className={styles.chip}>
                <span className={styles.mark} aria-hidden="true">
                  {model.charAt(0)}
                </span>
                <span className={styles.name}>{model}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
