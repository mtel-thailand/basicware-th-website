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

/** Abstract node glyph for the non-logo side of the connection graphic (OpenClaw). */
function NodeGlyph() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l7 2.7v5.2c0 4.4-3 7.6-7 9.1c-4-1.5-7-4.7-7-9.1V6.2z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="11" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8.4V6.5M9.5 12.5L7 14M14.5 12.5L17 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
        <Reveal className={styles.header}>
          <Eyebrow>{sectionEyebrow(sectionNumber, content.eyebrow)}</Eyebrow>
          <h2 className={`h2 ${styles.heading}`}>
            <AccentText segments={content.heading} accentClass={styles.accent} />
          </h2>
        </Reveal>

        <Reveal delay={0.1} className={styles.link}>
          <div className={styles.linkRow}>
            <div className={styles.node}>
              <span className={styles.nodeBadge}>
                <NodeGlyph />
              </span>
              <span className={styles.nodeName}>{content.counterpart.name}</span>
              <span className={styles.nodeRole}>{content.counterpart.role}</span>
            </div>

            <div className={styles.beam} aria-hidden="true">
              <span className={styles.beamTrack} />
              <span className={styles.beamPulse} />
            </div>

            <div className={styles.node}>
              {content.logo ? (
                <span className={styles.logoCard}>
                  <Image
                    src={content.logo}
                    alt={content.name}
                    width={168}
                    height={63}
                    className={styles.logo}
                  />
                </span>
              ) : (
                <span className={styles.nodeBadge}>
                  <NodeGlyph />
                </span>
              )}
              <span className={styles.nodeName}>{content.name}</span>
              <span className={styles.nodeRole}>{content.role}</span>
            </div>
          </div>

          {content.roles && content.roles.length > 0 && (
            <div className={styles.rolesRow}>
              <span className={styles.rolesLabel}>Deployed as</span>
              <div className={styles.rolesList}>
                {content.roles.map((role, i) => (
                  <Reveal key={role} delay={0.4 + i * 0.07} y={12} className={styles.roleChipWrap}>
                    <span className={styles.roleChip}>{role}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.15} className={styles.introText}>
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
        </Reveal>

        <div className={styles.capabilities}>
          <span className={styles.capabilitiesHeading}>{content.capabilitiesHeading}</span>
          <div className={styles.grid}>
            {content.capabilities.map((item, i) => (
              <Reveal key={item.title} delay={0.06 * i} y={20}>
                <div className={styles.card}>
                  <span className={styles.cardIcon}>
                    <CapabilityIcon name={item.icon} />
                  </span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
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
