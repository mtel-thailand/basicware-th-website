import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import { sectionEyebrow } from "./sectionNumber";
import styles from "./ServicePartner.module.css";

export default function ServicePartner({
  content,
  sectionNumber,
}: {
  content: NonNullable<ServiceContent["partner"]>;
  sectionNumber: number;
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.panel}>
          <div className={styles.intro}>
            <Eyebrow>{sectionEyebrow(sectionNumber, content.eyebrow)}</Eyebrow>
            <h2 className="h2">{content.name}</h2>
            <p className={styles.body}>{content.body}</p>
          </div>

          <div className={styles.capabilities}>
            <span className={styles.capabilitiesHeading}>{content.capabilitiesHeading}</span>
            <div className={styles.grid}>
              {content.capabilities.map((item) => (
                <div key={item.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
