import Image from "next/image";
import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../motion/Reveal";
import Button from "../../ui/Button";
import AccentText from "../../ui/AccentText";
import type { ServiceContent, ServicePartnerCapabilityIcon } from "@/content/services/types";
import { sectionEyebrow } from "./sectionNumber";
import styles from "./ServicePartner.module.css";

/** Path data for each capability-card icon. */
const ICON_PATHS: Record<ServicePartnerCapabilityIcon, string[]> = {
  code: ["M8.5 8L4 12.5L8.5 17", "M15.5 8L20 12.5L15.5 17", "M13.5 5.5L10.5 19.5"],
  integration: [
    "M9 15L15 9",
    "M7.5 12.5l-2.1 2.1a3 3 0 1 0 4.2 4.2l2.1-2.1",
    "M16.5 11.5l2.1-2.1a3 3 0 1 0-4.2-4.2l-2.1 2.1",
  ],
  platform: [
    "M12 3.5L21 8L12 12.5L3 8z",
    "M3 12.5L12 17L21 12.5",
    "M3 17L12 21.5L21 17",
  ],
  cloud: [
    "M7.5 18.5a4.5 4.5 0 0 1-.7-8.94a5.5 5.5 0 0 1 10.6-1.8a4.25 4.25 0 0 1-.9 10.74z",
  ],
  design: [
    "M4 20l1-4.5L15.5 5L19 8.5L8.5 19z",
    "M13 7L17 11",
  ],
  testing: [
    "M12 3.5l7 2.7v5.2c0 4.4-3 7.6-7 9.1c-4-1.5-7-4.7-7-9.1V6.2z",
    "M9 12l2.2 2.2L15.5 9.7",
  ],
};

function CapabilityIcon({ name }: { name: ServicePartnerCapabilityIcon }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {ICON_PATHS[name].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

/** Arrow glyph for capability cards — same mark as the primary CTA button. */
function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicePartner({
  content,
  sectionNumber,
}: {
  content: NonNullable<ServiceContent["partner"]>;
  sectionNumber: number;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <Reveal className={styles.hero}>
          <Eyebrow className={styles.eyebrow}>{sectionEyebrow(sectionNumber, content.eyebrow)}</Eyebrow>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              {content.logo && (
                <span className={styles.logoCard}>
                  <Image
                    src={content.logo}
                    alt={content.name}
                    width={140}
                    height={52}
                    className={styles.logo}
                  />
                </span>
              )}
              <h2 className={`h2 ${styles.heading}`}>
                <AccentText segments={content.heading} accentClass={styles.accent} />
              </h2>
              <p className={styles.body}>{content.body}</p>
              {content.href && (
                <Button
                  href={content.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cta}
                >
                  Visit {content.name}
                </Button>
              )}
            </div>

            <div
              className={styles.heroArt}
              role="img"
              aria-label={`${content.counterpart.name} AI orchestration hub connecting the ${content.name} digital employee roles`}
            />
          </div>
        </Reveal>

        <div className={styles.capabilities}>
          <span className={styles.capabilitiesHeading}>{content.capabilitiesHeading}</span>
          <div className={styles.grid}>
            {content.capabilities.map((item, i) => (
              <Reveal key={item.title} delay={0.06 * i} y={20}>
                <div className={styles.card}>
                  <div className={styles.cardHead}>
                    <span className={styles.cardIcon}>
                      <CapabilityIcon name={item.icon} />
                    </span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <span className={styles.cardArrow}>
                      <ArrowIcon />
                    </span>
                  </div>
                  <p className={styles.cardBody}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
