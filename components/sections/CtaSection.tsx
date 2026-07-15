"use client";

import Image from "next/image";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../motion/Reveal";
import Button from "../ui/Button";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./CtaSection.module.css";

const t = content.cta;

export default function CtaSection() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.bg}>
        <Image
          src="/images/cta/bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      <svg
        className={styles.curve}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M1440 0C1196.97 86.3469 820.948 137.345 539.608 114.581C348.76 99.1356 160.127 59.8521 0.0107422 0H1440Z"
          fill="var(--color-bg-surface)"
        />
      </svg>

      <Reveal className={`container ${styles.content}`}>
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="h2">
          <AccentText segments={t.title} />
        </h2>
        <p className={styles.lede}>{t.lede}</p>
        <Button href="/contact" className={styles.button}>
          {t.button}
        </Button>
      </Reveal>
    </section>
  );
}
