"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../motion/Reveal";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./GlobalReach.module.css";

const t = content.globalReach;

/* Pin positions are percentages of the 1200x720 map; sprite crops are copied
   verbatim from the Figma layout (one shared flag-pin sprite). */
const PINS: {
  key: keyof typeof t.locations;
  left: number;
  top: number;
  spriteLeft: string;
  spriteTop: string;
}[] = [
  { key: "malaysia", left: 22.3, top: 63.2, spriteLeft: "-428.96%", spriteTop: "-66.28%" },
  { key: "thailand", left: 20.1, top: 42.1, spriteLeft: "-420.44%", spriteTop: "-196.8%" },
  { key: "nanjing", left: 44.7, top: 20.4, spriteLeft: "-167.42%", spriteTop: "-196.8%" },
  { key: "japan", left: 74.6, top: 16.5, spriteLeft: "-36.66%", spriteTop: "-196.87%" },
  { key: "cambodia", left: 24.6, top: 46.1, spriteLeft: "-298.64%", spriteTop: "-196.8%" },
  { key: "vietnam", left: 32.4, top: 49.0, spriteLeft: "-298.64%", spriteTop: "-66.28%" },
  { key: "indonesia", left: 31.3, top: 79.3, spriteLeft: "-167.42%", spriteTop: "-66.28%" },
  { key: "hongkong", left: 41.8, top: 31.5, spriteLeft: "-36.65%", spriteTop: "-66.28%" },
];

export default function GlobalReach() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
          lede={t.lede}
        />

        <Reveal className={styles.mapWrap} scale={0.96}>
          <div className={styles.map}>
            <Image
              src="/images/map/asia.png"
              alt={t.mapAlt}
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              className={styles.mapImage}
            />
            {PINS.map((pin, i) => {
              const loc = t.locations[pin.key];
              return (
                <motion.div
                  key={pin.key}
                  className={styles.pin}
                  style={{ left: `${pin.left}%`, top: `${pin.top}%` }}
                  initial={{ opacity: 0, y: -48, scale: 0.6 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-25% 0px" }}
                  transition={{
                    delay: 0.3 + i * 0.12,
                    type: "spring",
                    stiffness: 320,
                    damping: 17,
                  }}
                  tabIndex={0}
                  role="img"
                  aria-label={`${loc.name} · ${loc.role}`}
                >
                  <span className={styles.ripple} />
                  <div className={styles.pinCrop}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/map/flag-pins.png"
                      alt=""
                      style={{
                        position: "absolute",
                        width: "567.42%",
                        height: "364.53%",
                        left: pin.spriteLeft,
                        top: pin.spriteTop,
                        maxWidth: "none",
                      }}
                    />
                  </div>
                  <div className={styles.tooltip} role="tooltip">
                    <span className={styles.tooltipName}>{loc.name}</span>
                    <span className={styles.tooltipRole}>{loc.role}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
