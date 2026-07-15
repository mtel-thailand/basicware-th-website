import Eyebrow from "../../ui/Eyebrow";
import Reveal from "../../motion/Reveal";
import WaveDivider from "../../ui/WaveDivider";
import AccentText from "../../ui/AccentText";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServiceHero.module.css";

const SPOKE_ANGLES = [0, 60, 120, 180, 240, 300];

/** Generic decorative "gateway" mark — a hub with spokes, standing in for
 *  product photography until a designer supplies real hero art. */
function GatewayGlyph() {
  return (
    <svg viewBox="0 0 200 200" className={styles.glyphSvg} aria-hidden="true">
      <circle cx="100" cy="100" r="88" className={styles.ringOuter} />
      <circle cx="100" cy="100" r="60" className={styles.ringMid} />
      {SPOKE_ANGLES.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 88 * Math.cos(rad);
        const y = 100 + 88 * Math.sin(rad);
        return (
          <line key={angle} x1="100" y1="100" x2={x} y2={y} className={styles.spoke} />
        );
      })}
      {SPOKE_ANGLES.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 88 * Math.cos(rad);
        const y = 100 + 88 * Math.sin(rad);
        return <circle key={angle} cx={x} cy={y} r="7" className={styles.node} />;
      })}
      <circle cx="100" cy="100" r="30" className={styles.core} />
    </svg>
  );
}

export default function ServiceHero({
  content,
}: {
  content: ServiceContent["hero"];
}) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.text}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className={`h2 ${styles.title}`}>
            <AccentText segments={content.title} />
          </h1>
          <p className={styles.lede}>{content.lede}</p>
        </Reveal>

        <Reveal delay={0.15} scale={0.92} className={styles.visualWrap}>
          <div className={styles.visual} aria-hidden="true">
            <GatewayGlyph />
          </div>
        </Reveal>
      </div>

      <div className={styles.wave}>
        <WaveDivider fill="var(--color-bg-surface)" />
      </div>
    </section>
  );
}
