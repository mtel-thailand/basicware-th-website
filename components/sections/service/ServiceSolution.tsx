import Image from "next/image";
import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import type { ServiceContent, ServiceSolutionIcon } from "@/content/services/types";
import { sectionEyebrow } from "./sectionNumber";
import styles from "./ServiceSolution.module.css";

/** Path data for each solution-point icon, ported from the service-page design brief. */
const ICON_PATHS: Record<ServiceSolutionIcon, string[]> = {
  hub: [
    "M12 12m-2.6 0a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0-5.2 0",
    "M12 9.4V4.5",
    "M14.3 13.3l4.2 3.4",
    "M9.7 13.3l-4.2 3.4",
    "M12 4.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0",
    "M19.5 17.8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0",
    "M4.5 17.8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0",
  ],
  switch: ["M4 8h13", "M14 4.5L17.5 8L14 11.5", "M20 16H7", "M10 12.5L6.5 16L10 19.5"],
  shield: [
    "M12 3.5l7 2.7v5.2c0 4.4-3 7.6-7 9.1c-4-1.5-7-4.7-7-9.1V6.2z",
    "M9 12l2.2 2.2L15.5 9.7",
  ],
  chart: ["M4 20h16", "M7 20v-6", "M12 20V9", "M17 20V4.5"],
  sliders: [
    "M4 7h16",
    "M4 12h16",
    "M4 17h16",
    "M9 7m-1.7 0a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0",
    "M15 12m-1.7 0a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0",
    "M7.5 17m-1.7 0a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0",
  ],
  handoff: [
    "M8 7.5m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
    "M2.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5",
    "M15 8.5h6.5",
    "M18.7 5.5l3 3l-3 3",
  ],
  trend: ["M3.5 17.5L9.5 11.5L13.5 15.5L20.5 7.5", "M15.5 7.5h5v5"],
  bolt: ["M13 2.5L4.5 13.5H11L10 21.5L19.5 10H13z"],
  globe: [
    "M12 12m-8.5 0a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0",
    "M3.5 12h17",
    "M12 3.5c2.4 2.3 3.7 5.2 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.2-3.7-8.5s1.3-6.2 3.7-8.5",
  ],
};

function SolutionIcon({ name }: { name: ServiceSolutionIcon }) {
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

export default function ServiceSolution({
  content,
}: {
  content: ServiceContent["solution"];
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={sectionEyebrow(2, content.eyebrow)}
          title={content.heading}
          lede={content.intro}
          className={content.featureBanner ? styles.titleWithFeature : undefined}
        />

        {content.tags && (
          <Reveal className={styles.tagsWrap}>
            <h3 className={styles.tagsHeading}>{content.tags.heading}</h3>
            <ul className={styles.tagsList}>
              {content.tags.items.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {content.featureBanner && (
          <Reveal className={styles.featureBanner}>
            <div className={styles.featureIdentity}>
              {content.featureBanner.label && (
                <span className={styles.featureLabel}>{content.featureBanner.label}</span>
              )}
              {content.featureBanner.title && (
                <h3 className={styles.featureTitle}>{content.featureBanner.title}</h3>
              )}
              {content.featureBanner.subtitle && (
                <p className={styles.featureSubtitle}>{content.featureBanner.subtitle}</p>
              )}
            </div>
            <div className={styles.featureBrand}>
              {content.featureBanner.poweredLabel && (
                <span className={styles.featurePoweredLabel}>
                  {content.featureBanner.poweredLabel}
                </span>
              )}
              {content.featureBanner.logo && (
                <Image
                  className={styles.featureLogo}
                  src={content.featureBanner.logo}
                  alt={content.featureBanner.logoAlt ?? "Partner logo"}
                  width={136}
                  height={28}
                />
              )}
              {content.featureBanner.logo && content.featureBanner.companionLogo && (
                <span className={styles.featureLogoDivider} aria-hidden="true" />
              )}
              {content.featureBanner.companionLogo && (
                <Image
                  className={styles.featureCompanionLogo}
                  src={content.featureBanner.companionLogo}
                  alt={content.featureBanner.companionLogoAlt ?? "Partner logo"}
                  width={2392}
                  height={456}
                  sizes="(max-width: 760px) 160px, 150px"
                />
              )}
              {content.featureBanner.suffix && (
                <span className={styles.featureSuffix}>
                  {content.featureBanner.suffix}
                </span>
              )}
            </div>
            {content.featureBanner.summary && (
              <p className={styles.featureSummary}>{content.featureBanner.summary}</p>
            )}
            {content.featureBanner.items && (
              <ul className={styles.featureItems}>
                {content.featureBanner.items.map((item, index) => (
                  <li key={item}>
                    <span className={styles.featureItemNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        )}

        <div
          className={`${styles.grid} ${
            content.points.length === 1 ? styles.gridSingle : ""
          } ${content.featureBanner ? styles.gridWithFeature : ""}`}
        >
          {content.points.map((point, i) => (
            <Reveal key={point.title} delay={0.12 * i}>
              <div className={styles.card}>
                <span className={styles.icon}>
                  <SolutionIcon name={point.icon ?? "hub"} />
                </span>
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardBody}>{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
