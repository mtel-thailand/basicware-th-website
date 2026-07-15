import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import AccentText from "../../ui/AccentText";
import { aboutContent } from "@/content/about";
import styles from "./AboutRole.module.css";

const t = aboutContent.role;

/* Decorative glyphs only — order matches t.points */
const POINT_ICONS = [
  // Symbiotic community — two linked circles
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  // Agile iteration — refresh loop
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 11a8 8 0 1 0-2.6 6.4M20 5v6h-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Global innovation — globe
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M3.7 12h16.6M12 3.7c2.4 2.4 3.7 5.2 3.7 8.3s-1.3 5.9-3.7 8.3c-2.4-2.4-3.7-5.2-3.7-8.3S9.6 6.1 12 3.7Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>,
];

const POINTS = t.points.map((point, i) => ({ ...point, icon: POINT_ICONS[i] }));

export default function AboutRole() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
        />

        <Reveal delay={0.1} className={styles.intro}>
          <h3 className={styles.tagline}>{t.tagline}</h3>
          <p className={styles.description}>{t.description}</p>
        </Reveal>

        <div className={styles.points}>
          {POINTS.map((point, i) => (
            <Reveal key={point.number} delay={0.15 * i + 0.2} y={40}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{point.icon}</span>
                  <span className={styles.number}>{point.number}</span>
                </div>
                <h4 className={styles.pointTitle}>{point.title}</h4>
                <p className={styles.pointBody}>{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
