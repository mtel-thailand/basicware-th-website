import Image from "next/image";
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
            <div className={styles.nameRow}>
              {content.logo && (
                <Image
                  src={content.logo}
                  alt={content.name}
                  width={200}
                  height={75}
                  className={styles.logo}
                />
              )}
              <h2 className={styles.srOnly}>{content.name}</h2>
            </div>
            <p className={styles.body}>{content.body}</p>
            {content.href && (
              <a
                href={content.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Visit {content.name} <span aria-hidden="true">→</span>
              </a>
            )}
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
