import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServicePartner.module.css";

function BuildIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 21V9l8-5 8 5v12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 21v-7h6v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicePartner({
  content,
}: {
  content: NonNullable<ServiceContent["partner"]>;
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle eyebrow={content.eyebrow} title={content.heading} />

        <Reveal className={styles.intro}>
          <h3 className={styles.name}>{content.name}</h3>
          <p className={styles.body}>{content.body}</p>
        </Reveal>

        <h3 className={styles.capabilitiesHeading}>{content.capabilitiesHeading}</h3>

        <div className={styles.grid}>
          {content.capabilities.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <div className={styles.card}>
                <span className={styles.icon}>
                  <BuildIcon />
                </span>
                <div>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardBody}>{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
