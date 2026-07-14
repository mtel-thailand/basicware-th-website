import Eyebrow from "./Eyebrow";
import Reveal from "../motion/Reveal";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  /** Heading size: h2 (default, 48px) or display-like */
  as?: "h2" | "h3";
  className?: string;
};

/** Eyebrow + heading + optional lede, the standard section opener. */
export default function SectionTitle({
  eyebrow,
  title,
  lede,
  align = "center",
  tone = "light",
  as: Tag = "h2",
  className,
}: SectionTitleProps) {
  return (
    <Reveal
      className={`${styles.wrap} ${align === "left" ? styles.left : ""} ${tone === "dark" ? styles.dark : ""} ${className ?? ""}`}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <Tag className={`${styles.title} ${Tag === "h3" ? "h3" : "h2"}`}>
        {title}
      </Tag>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </Reveal>
  );
}
