import Reveal from "../../motion/Reveal";
import Button from "../../ui/Button";
import type { ServiceContent } from "@/content/services/types";
import styles from "./ServiceCta.module.css";

export default function ServiceCta({
  content,
}: {
  content: ServiceContent["cta"];
}) {
  return (
    <section id="cta" className={styles.section}>
      <span className={`${styles.dot} ${styles.dot1}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dot2}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dot3}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dot4}`} aria-hidden="true" />
      <Reveal className={`container ${styles.content}`}>
        <p className={styles.lede}>{content.lede}</p>
        <Button href={content.href} variant="onPhoto">
          {content.buttonLabel}
        </Button>
      </Reveal>
    </section>
  );
}
