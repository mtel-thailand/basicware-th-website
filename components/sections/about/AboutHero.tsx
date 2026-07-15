import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../motion/Reveal";
import WaveDivider from "../../ui/WaveDivider";
import AccentText from "../../ui/AccentText";
import { aboutContent } from "@/content/about";
import styles from "./AboutHero.module.css";

const t = aboutContent.hero;

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <Reveal className={`container ${styles.content}`}>
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className={`h2 ${styles.title}`}>
          <AccentText segments={t.title} />
        </h1>
      </Reveal>
      <WaveDivider fill="var(--color-bg-surface)" />
    </section>
  );
}
