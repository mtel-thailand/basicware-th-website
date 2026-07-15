import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import AccentText from "../../ui/AccentText";
import { aboutContent } from "@/content/about";
import styles from "./AboutValues.module.css";

const t = aboutContent.values;

/* Decorative glyphs only — order matches t.cards */
const VALUE_ICONS = [
  // Customer Success — check badge
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="m8.5 12.3 2.4 2.4 4.6-4.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Global Tech Pride — star
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8L6.7 20.1l1-6L3.4 9.9l6-.9L12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
  // Global Community — network nodes
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="5.5" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18.5" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.5 6.8 7 15.9M13.5 6.8 17 15.9M7.7 18h8.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  // Agile & Clever — lightning bolt
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M13 3 5.5 13.5h5L11 21l7.5-10.5h-5L13 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
  // Client as Buddy — handshake
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3.5 11.5 7 8l3 2 2-1.7L15.5 11l1.7-1.7L20.5 12l-4 4-3-2-2.2 2.2L8 13.3l-1.8 1.8-2.7-2.6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
];

const CARDS = t.cards.map((card, i) => ({ ...card, icon: VALUE_ICONS[i] }));

export default function AboutValues() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
        />

        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.12 * i} y={40}>
              <div className={styles.card}>
                <span className={styles.icon}>{card.icon}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
