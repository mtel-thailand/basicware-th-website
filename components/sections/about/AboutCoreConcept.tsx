import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../motion/Reveal";
import AccentText from "../../ui/AccentText";
import { aboutContent } from "@/content/about";
import styles from "./AboutCoreConcept.module.css";

const t = aboutContent.coreConcept;

/** Decorative placeholder standing in for future brand photography/illustration. */
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className={styles.placeholder} aria-hidden="true">
      <div className={styles.placeholderDots} />
      <svg
        className={styles.placeholderIcon}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.5" cy="9.5" r="1.7" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="m4.5 17 4.5-5 3.5 3.8L16 12l3.5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  );
}

export default function AboutCoreConcept() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.text}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className={`h2 ${styles.heading}`}>
            <AccentText segments={t.title} />
          </h2>
          <h3 className={styles.tagline}>{t.tagline}</h3>
          <p className={styles.detail}>{t.detail}</p>
          <p className={styles.description}>{t.description}</p>
        </Reveal>

        <Reveal delay={0.18} y={44} scale={0.95} className={styles.visualWrap}>
          <ImagePlaceholder label={t.placeholderLabel} />
        </Reveal>
      </div>
    </section>
  );
}
