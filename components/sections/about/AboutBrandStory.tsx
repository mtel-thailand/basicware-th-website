import SectionTitle from "../../ui/SectionTitle";
import Reveal from "../../motion/Reveal";
import AccentText from "../../ui/AccentText";
import { aboutContent } from "@/content/about";
import styles from "./AboutBrandStory.module.css";

const t = aboutContent.brandStory;

export default function AboutBrandStory() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          as="h1"
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
        />

        <div className={styles.body}>
          {t.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.12 * i}>
              <p className={styles.paragraph}>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
