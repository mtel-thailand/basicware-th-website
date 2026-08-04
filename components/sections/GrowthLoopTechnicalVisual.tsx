import styles from "./GrowthLoopTechnicalVisual.module.css";

const STAGE_LABELS = [
  "Plan: input map technical visualization",
  "Produce: generation engine technical visualization",
  "Measure: live signal technical visualization",
  "Learn: model update technical visualization",
  "Scale: multi-channel technical visualization",
] as const;

function PlanVisual() {
  return (
    <svg viewBox="0 0 180 140" aria-hidden="true">
      <g className={styles.gridLines}>
        <path d="M23 26h134M23 53h134M23 80h134M23 107h134" />
        <path d="M36 15v112M72 15v112M108 15v112M144 15v112" />
      </g>
      <g className={styles.signalPath}>
        <path d="M36 99 72 72l36 10 36-43" />
      </g>
      <g className={styles.nodeSet}>
        <circle cx="36" cy="99" r="8" />
        <circle cx="72" cy="72" r="8" />
        <circle cx="108" cy="82" r="8" />
        <circle cx="144" cy="39" r="10" className={styles.activeNode} />
      </g>
      <path className={styles.scanLine} d="M24 116h132" />
    </svg>
  );
}

function ProduceVisual() {
  return (
    <svg viewBox="0 0 180 140" aria-hidden="true">
      <g className={styles.flowBlocks}>
        <rect x="13" y="29" width="35" height="24" rx="6" />
        <rect x="13" y="61" width="35" height="24" rx="6" />
        <rect x="13" y="93" width="35" height="18" rx="6" />
      </g>
      <g className={styles.flowArrows}>
        <path d="M52 41h19M52 73h19M52 102h19" />
      </g>
      <rect className={styles.engineBody} x="70" y="28" width="60" height="85" rx="15" />
      <rect className={styles.engineCore} x="84" y="42" width="32" height="32" rx="8" />
      <path className={styles.spark} d="m100 48 3.7 8.3 8.3 3.7-8.3 3.7L100 72l-3.7-8.3L88 60l8.3-3.7L100 48Z" />
      <g className={styles.outputFrames}>
        <rect x="139" y="33" width="27" height="20" rx="5" />
        <rect x="139" y="61" width="27" height="20" rx="5" />
        <rect x="139" y="89" width="27" height="20" rx="5" />
      </g>
      <path className={styles.flowArrows} d="M130 70h8" />
      <g className={styles.corePins}>
        <path d="M82 22v6M94 22v6M106 22v6M118 22v6M82 113v6M94 113v6M106 113v6M118 113v6" />
      </g>
    </svg>
  );
}

function MeasureVisual() {
  return (
    <svg viewBox="0 0 180 140" aria-hidden="true">
      <rect className={styles.screenFrame} x="17" y="20" width="146" height="99" rx="14" />
      <g className={styles.chartGrid}>
        <path d="M33 43h114M33 65h114M33 87h114M33 109h114" />
        <path d="M55 34v75M84 34v75M113 34v75M142 34v75" />
      </g>
      <path className={styles.chartArea} d="M33 99 55 82l19 6 25-37 22 18 26-30v70H33Z" />
      <path className={styles.chartLine} d="M33 99 55 82l19 6 25-37 22 18 26-30" />
      <g className={styles.chartDots}>
        <circle cx="33" cy="99" r="4" />
        <circle cx="55" cy="82" r="4" />
        <circle cx="74" cy="88" r="4" />
        <circle cx="99" cy="51" r="4" />
        <circle cx="121" cy="69" r="4" />
        <circle cx="147" cy="39" r="6" className={styles.activeNode} />
      </g>
      <path className={styles.livePulse} d="M22 27h22" />
    </svg>
  );
}

function LearnVisual() {
  return (
    <svg viewBox="0 0 180 140" aria-hidden="true">
      <g className={styles.networkLinks}>
        <path d="M27 42 71 30M27 42l44 36M27 99l44-21M27 99l44 18M71 30l42 18M71 78l42-30M71 78l42 46M71 117l42-69M113 48l39 22M113 124l39-54" />
      </g>
      <g className={styles.networkNodes}>
        <circle cx="27" cy="42" r="8" />
        <circle cx="27" cy="99" r="8" />
        <circle cx="71" cy="30" r="8" />
        <circle cx="71" cy="78" r="10" className={styles.activeNode} />
        <circle cx="71" cy="117" r="8" />
        <circle cx="113" cy="48" r="8" />
        <circle cx="113" cy="124" r="8" />
        <circle cx="152" cy="70" r="11" />
      </g>
    </svg>
  );
}

function ScaleVisual() {
  return (
    <svg viewBox="0 0 180 140" aria-hidden="true">
      <g className={styles.routeLinks}>
        <path d="M26 70h31M79 70h25M104 70c22 0 19-40 40-40M104 70h40M104 70c22 0 19 40 40 40" />
      </g>
      <circle className={styles.inputPulse} cx="26" cy="70" r="8" />
      <rect className={styles.routerBody} x="57" y="48" width="47" height="44" rx="13" />
      <path className={styles.routerMark} d="M69 70h23M84 61l9 9-9 9" />
      <g className={styles.channelNodes}>
        <rect x="140" y="16" width="28" height="28" rx="8" />
        <rect x="140" y="56" width="28" height="28" rx="8" />
        <rect x="140" y="96" width="28" height="28" rx="8" />
      </g>
      <g className={styles.channelMarks}>
        <path d="M149 30h10M154 25v10M148 67h12v7h-12zM149 108h10M149 113h10" />
      </g>
    </svg>
  );
}

const VISUALS = [PlanVisual, ProduceVisual, MeasureVisual, LearnVisual, ScaleVisual] as const;

export default function GrowthLoopTechnicalVisual({ stage }: { stage: number }) {
  const Visual = VISUALS[stage] ?? PlanVisual;
  const label = STAGE_LABELS[stage] ?? STAGE_LABELS[0];

  return (
    <div className={styles.visual} role="img" aria-label={label}>
      <span className={styles.glow} aria-hidden="true" />
      <Visual />
    </div>
  );
}
