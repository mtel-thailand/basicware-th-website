"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../motion/Reveal";
import Tilt from "../motion/Tilt";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./ModelGateway.module.css";

const t = content.modelGateway;

/* Grid mirrors Figma: BasicRouter spans 2 cols × 2 rows, logos fill the rest.
   Order is row-major starting after the router card. */
const MODELS = [
  { name: "Claude", file: "claude.png" },
  { name: "DeepSeek", file: "deepseek.png" },
  { name: "Gemini", file: "gemini.png" },
  { name: "GLM", file: "glm.png" },
  { name: "OpenAI", file: "openai.png" },
  { name: "Doubao", file: "doubao.png" },
  { name: "HappyHorse", file: "happyhorse.png" },
  { name: "Kimi", file: "kimi.png" },
  { name: "Kling", file: "kling.png" },
  { name: "MiniMax", file: "minimax.png" },
  { name: "Qwen", file: "qwen.png" },
  { name: "Seedance", file: "seedance.png" },
];

export default function ModelGateway() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<AccentText segments={t.title} />}
        />

        <div className={styles.grid}>
          <Reveal className={styles.routerWrap} scale={0.9}>
            <Tilt max={6} className={styles.router}>
              <div className={styles.routerArt}>
                <Image
                  src="/images/models/basicrouter-art.png"
                  alt=""
                  fill
                  sizes="300px"
                />
              </div>
              <div className={styles.routerLabel}>
                <Image
                  src="/images/models/basicrouter-logo.png"
                  alt="BasicRouter logo"
                  width={60}
                  height={60}
                  className={styles.routerLogo}
                />
                <span>{t.routerName}</span>
              </div>
            </Tilt>
          </Reveal>

          {MODELS.map((model, i) => (
            <Reveal key={model.name} delay={0.06 * i + 0.15} y={28} scale={0.85}>
              <motion.div
                className={styles.chip}
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{
                  duration: 3 + (i % 4) * 0.7,
                  delay: (i % 5) * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={reduce ? undefined : { scale: 1.08, y: -4 }}
              >
                <Image
                  src={`/images/models/${model.file}`}
                  alt={`${model.name} logo`}
                  width={66}
                  height={66}
                  className={styles.logo}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
