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
