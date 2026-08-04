"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../motion/Reveal";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./GlobalReach.module.css";

const t = content.globalReach;

/* Pin positions are pointed-tip percentages of globe-v2.png. The anchor keeps
   that geographic point stable when the pin size changes responsively. */
const PINS: {
  key: keyof typeof t.locations;
  x: number;
  y: number;
  spriteLeft: string;
  spriteTop: string;
}[] = [
  { key: "malaysia", x: 21.2, y: 71.5, spriteLeft: "-428.96%", spriteTop: "-66.28%" },
  { key: "thailand", x: 22.0, y: 52.5, spriteLeft: "-420.44%", spriteTop: "-196.8%" },
  { key: "nanjing", x: 47.5, y: 35.0, spriteLeft: "-167.42%", spriteTop: "-196.8%" },
  { key: "japan", x: 73.5, y: 27.5, spriteLeft: "-36.66%", spriteTop: "-196.87%" },
  { key: "cambodia", x: 26.2, y: 57.0, spriteLeft: "-298.64%", spriteTop: "-196.8%" },
  { key: "vietnam", x: 29.7, y: 54.5, spriteLeft: "-298.64%", spriteTop: "-66.28%" },
  { key: "indonesia", x: 58.0, y: 86.0, spriteLeft: "-167.42%", spriteTop: "-66.28%" },
  { key: "hongkong", x: 45.0, y: 41.0, spriteLeft: "-36.65%", spriteTop: "-66.28%" },
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
              src="/images/map/globe-v2.png"
              alt={t.mapAlt}
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              className={styles.mapImage}
            />
            {PINS.map((pin, i) => {
              const loc = t.locations[pin.key];
              return (
                <div
                  key={pin.key}
                  className={styles.pinAnchor}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  <motion.div
                    className={styles.pin}
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
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
