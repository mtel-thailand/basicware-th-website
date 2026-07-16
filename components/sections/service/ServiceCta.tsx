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
    <section className={styles.section}>
      <Reveal className={`container ${styles.content}`}>
        <p className={styles.lede}>{content.lede}</p>
        <Button href={content.href} variant="onPhoto">
          {content.buttonLabel}
        </Button>
      </Reveal>
    </section>
  );
}
