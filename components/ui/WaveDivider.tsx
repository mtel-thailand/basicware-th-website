import styles from "./WaveDivider.module.css";

type WaveDividerProps = {
  /** Fill color of the wave (the section it transitions INTO) */
  fill?: string;
  /** Flip vertically for a bottom→top transition */
  flip?: boolean;
  className?: string;
};

/**
 * Rolling-hill divider between full-bleed photo sections and page sections.
 * Path traced from the Figma "Illustration" divider (1440x120).
 */
export default function WaveDivider({
  fill = "var(--color-bg-page)",
  flip = false,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={`${styles.wrap} ${flip ? styles.flip : ""} ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M457.999 0C484.485 0 508.897 1.02811 528.424 2.75684C547.416 3.94963 565.583 5.36257 573.459 6.29492C676.335 18.4693 776.04 38.874 872.233 57.417C989.418 80.007 1095.15 98.1273 1222.69 108.771C1295.03 114.808 1367.37 118.478 1440 119.899V120H-0.0078125V119.999C40.6445 78.0606 116.341 41.6402 220.714 17.874C273.328 5.89411 373.442 1.00839 433.303 0.305664C441.261 0.105996 449.524 0 457.999 0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
