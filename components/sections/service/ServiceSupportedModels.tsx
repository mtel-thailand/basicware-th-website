import Image from "next/image";
import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import { sectionEyebrow } from "./sectionNumber";
import styles from "./ServiceSupportedModels.module.css";

export default function ServiceSupportedModels({
  content,
  sectionNumber,
}: {
  content: NonNullable<ServiceContent["supportedModels"]>;
  sectionNumber: number;
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle eyebrow={sectionEyebrow(sectionNumber, content.eyebrow)} title={content.heading} />

        <div className={styles.grid}>
          {content.models.map((model, i) => (
            <Reveal key={model.name} delay={0.05 * i} y={24}>
              <div className={styles.card}>
                <div className={styles.header}>
                  {model.logo && (
                    <Image
                      src={model.logo}
                      alt=""
                      width={32}
                      height={32}
                      className={styles.logo}
                    />
                  )}
                  <h3 className={styles.name}>{model.name}</h3>
                </div>
                <p className={styles.description}>{model.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
