import Image from "next/image";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../motion/Reveal";
import Button from "../../ui/Button";
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
          <Eyebrow>{sectionEyebrow(sectionNumber, content.eyebrow)}</Eyebrow>
          <h2 className={styles.srOnly}>{content.name}</h2>

          <div className={styles.intro}>
            {content.logo && (
              <div className={styles.logoCard}>
                <Image
                  src={content.logo}
                  alt={content.name}
                  width={200}
                  height={75}
                  className={styles.logo}
                />
              </div>
            )}
            <div className={styles.introText}>
              <p className={styles.body}>{content.body}</p>
              {content.href && (
                <Button
                  href={content.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Visit {content.name}
                </Button>
              )}
            </div>
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
