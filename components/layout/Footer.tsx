import Reveal from "../motion/Reveal";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./Footer.module.css";

const t = content.footer;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Reveal className={`container ${styles.inner}`} y={24}>
        <div className={styles.grid}>
          <h2 className={styles.tagline}>
            <AccentText segments={t.tagline} accentClass={styles.accent} />
          </h2>

          <div className={styles.ctaCol}>
            <a href={`mailto:${t.email}`} className={styles.cta}>
              {t.cta}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className={styles.about}>
            <p>{t.about}</p>
            <a href="#top" className={styles.learnMore}>
              {t.learnMore}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t.solutionsTitle}</h3>
            <ul className={styles.list}>
              {t.solutions.map((item) => (
                <li key={item}>
                  <a href="#solutions">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t.contactTitle}</h3>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${t.email}`}>{t.email}</a>
              </li>
              <li>
                <a href={`tel:${t.phone.replace(/[^+\d]/g, "")}`}>{t.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>{t.copyright}</p>
      </Reveal>
    </footer>
  );
}
