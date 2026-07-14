"use client";

import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../motion/Reveal";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./Education.module.css";

const t = content.education;

export default function Education() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
          lede={t.lede}
        />

        <div className={styles.certificates}>
          {t.certificates.map((cert, i) => (
            <Reveal key={cert.src} delay={0.2 * i} y={40}>
              <Image
                src={cert.src}
                alt={cert.alt}
                width={320}
                height={320}
                className={styles.certificate}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
