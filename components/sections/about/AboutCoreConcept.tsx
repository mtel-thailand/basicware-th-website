import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../motion/Reveal";
import AccentText from "../../ui/AccentText";
import { aboutContent } from "@/content/about";
import styles from "./AboutCoreConcept.module.css";

const t = aboutContent.coreConcept;

export default function AboutCoreConcept() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.text}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className={`h2 ${styles.heading}`}>
            <AccentText segments={t.title} />
          </h2>
          <h3 className={styles.tagline}>{t.tagline}</h3>
          <p className={styles.detail}>{t.detail}</p>
          <p className={styles.description}>{t.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
