import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: React.ReactNode;
  /** "light" = accent blue on light bg, "dark" = white on photo/dark bg */
  tone?: "light" | "dark";
  className?: string;
};

/** Mono uppercase section label, e.g. "AIGC CONTENT PRODUCTION". */
export default function Eyebrow({
  children,
  tone = "light",
  className,
}: EyebrowProps) {
  return (
    <span
      className={`${styles.eyebrow} ${tone === "dark" ? styles.dark : ""} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
