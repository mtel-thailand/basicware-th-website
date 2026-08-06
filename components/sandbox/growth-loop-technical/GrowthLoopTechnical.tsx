import Link from "next/link";
import AccentText from "@/components/ui/AccentText";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/content";
import styles from "./GrowthLoopTechnical.module.css";

const t = content.growthLoop;

const VISUALS = [PlanVisual, ProduceVisual, MeasureVisual, LearnVisual, ScaleVisual] as const;

const OPTIONS = [
  {
    id: "signal-path",
    number: "01",
    title: "Signal path",
    verdict: "Recommended",
    note: "A bright, approachable system that turns each stage into a legible data operation while preserving the warmth of the current section.",
    sequence: "Topology → generation → telemetry → learning → distribution",
    treatment: styles.signalPathTheme,
    tone: "light" as const,
    visualFamily: "diagram" as const,
    labels: ["INPUT MAP", "GEN ENGINE", "LIVE SIGNAL", "MODEL UPDATE", "MULTI-CHANNEL"],
  },
  {
    id: "control-plane",
    number: "02",
    title: "Control plane",
    verdict: "Most technical",
    note: "A dark enterprise operations layer with system codes, live status points, and high-contrast telemetry. It feels closer to infrastructure software.",
    sequence: "Configure → compile → observe → retrain → deploy",
    treatment: styles.controlPlane,
    tone: "dark" as const,
    visualFamily: "diagram" as const,
    labels: ["STRATEGY.API", "CONTENT.COMPILER", "TELEMETRY.STREAM", "MODEL.SYNC", "ROUTER.DEPLOY"],
  },
  {
    id: "system-orbit",
    number: "03",
    title: "System orbit",
    verdict: "Most conceptual",
    note: "A lighter AI-native direction that frames every operation as a coordinated module orbiting one continuous optimization system.",
    sequence: "Source → core → radar → feedback → network",
    treatment: styles.orbitTheme,
    tone: "light" as const,
    visualFamily: "diagram" as const,
    labels: ["BRIEF.SOURCE", "CREATIVE.CORE", "PERFORMANCE.RADAR", "LEARNING.ORBIT", "CHANNEL.MESH"],
  },
  {
    id: "token-relay",
    number: "04",
    title: "Token relay",
    verdict: "Best transformation story",
    note: "One luminous data capsule changes state from brief to creative asset, performance score, learned model, and distributed output.",
    sequence: "Converge → transform → score → encode → multiply",
    treatment: styles.tokenRelay,
    tone: "light" as const,
    visualFamily: "token" as const,
    labels: ["BRIEF.TOKEN", "ASSET.TOKEN", "SCORE.TOKEN", "MODEL.TOKEN", "OUTPUT.TOKENS"],
  },
  {
    id: "automation-ledger",
    number: "05",
    title: "Automation ledger",
    verdict: "Most operational",
    note: "The illustration disappears entirely. Each card becomes a compact live system surface with commands, statuses, metrics, and deployment evidence.",
    sequence: "Configure → execute → inspect → promote → release",
    treatment: styles.ledgerTheme,
    tone: "light" as const,
    visualFamily: "ledger" as const,
    labels: ["CONFIG.READY", "RUN.COMPLETE", "METRICS.LIVE", "PATTERN.PROMOTED", "DEPLOY.HEALTHY"],
  },
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

function TokenRelayVisual({ stage }: { stage: number }) {
  return (
    <svg className={styles.tokenSvg} viewBox="0 0 180 140" aria-hidden="true">
      {stage === 0 && (
        <>
          <g className={styles.tokenInputs}>
            <rect x="16" y="25" width="38" height="18" rx="9" />
            <rect x="16" y="61" width="38" height="18" rx="9" />
            <rect x="16" y="97" width="38" height="18" rx="9" />
          </g>
          <g className={styles.tokenPaths}>
            <path d="M54 34c32 0 22 36 48 36M54 70h48M54 106c32 0 22-36 48-36" />
          </g>
          <polygon className={styles.tokenCore} points="124,43 148,56 148,84 124,97 100,84 100,56" />
          <circle className={styles.tokenSpark} cx="124" cy="70" r="7" />
        </>
      )}

      {stage === 1 && (
        <>
          <polygon className={styles.tokenCore} points="43,43 67,56 67,84 43,97 19,84 19,56" />
          <path className={styles.tokenArrow} d="M72 70h27m-8-8 8 8-8 8" />
          <g className={styles.tokenOutputs}>
            <rect x="108" y="21" width="53" height="27" rx="8" />
            <rect x="108" y="57" width="53" height="27" rx="8" />
            <rect x="108" y="93" width="53" height="27" rx="8" />
            <path d="m120 38 8-8 8 7 7-5 7 8M120 70h29M120 106h18" />
          </g>
        </>
      )}

      {stage === 2 && (
        <>
          <circle className={styles.scoreOuter} cx="72" cy="70" r="48" />
          <circle className={styles.scoreProgress} cx="72" cy="70" r="38" />
          <polygon className={styles.tokenCore} points="72,47 92,58 92,82 72,93 52,82 52,58" />
          <text className={styles.tokenScore} x="72" y="75" textAnchor="middle">94</text>
          <g className={styles.scoreBars}>
            <rect x="128" y="38" width="34" height="7" rx="3.5" />
            <rect x="128" y="55" width="23" height="7" rx="3.5" />
            <rect x="128" y="72" width="30" height="7" rx="3.5" />
            <rect x="128" y="89" width="18" height="7" rx="3.5" />
          </g>
        </>
      )}

      {stage === 3 && (
        <>
          <g className={styles.modelLayers}>
            <rect x="25" y="26" width="130" height="28" rx="12" />
            <rect x="32" y="57" width="116" height="28" rx="12" />
            <rect x="40" y="88" width="100" height="28" rx="12" />
          </g>
          <path className={styles.layerSignal} d="M52 40h58m-58 31h42m-42 31h65" />
          <polygon className={styles.tokenCore} points="130,52 149,63 149,85 130,96 111,85 111,63" />
          <path className={styles.tokenCheck} d="m121 74 6 6 12-14" />
        </>
      )}

      {stage === 4 && (
        <>
          <polygon className={styles.tokenCore} points="52,43 76,56 76,84 52,97 28,84 28,56" />
          <g className={styles.tokenPaths}>
            <path d="M76 70h28M104 70c18 0 12-38 32-38M104 70h32M104 70c18 0 12 38 32 38" />
          </g>
          <g className={styles.outputTokens}>
            <polygon points="145,19 158,26 158,40 145,47 132,40 132,26" />
            <polygon points="145,57 158,64 158,78 145,85 132,78 132,64" />
            <polygon points="145,95 158,102 158,116 145,123 132,116 132,102" />
          </g>
        </>
      )}
    </svg>
  );
}

const LEDGER_DATA = [
  {
    command: "configure campaign.plan",
    rows: [["Goals", "03", 68], ["Channels", "06", 84], ["Markets", "04", 54]],
  },
  {
    command: "run content.generate --batch",
    rows: [["Assets", "24", 92], ["Formats", "08", 72], ["Ready", "100%", 100]],
  },
  {
    command: "observe performance.stream",
    rows: [["CTR", "+21%", 76], ["CVR", "4.7%", 58], ["ROAS", "3.4x", 88]],
  },
  {
    command: "promote pattern_07 --model",
    rows: [["Confidence", "94%", 94], ["Lift", "+18%", 72], ["Version", "v2.4", 64]],
  },
  {
    command: "deploy optimized.bundle",
    rows: [["TH / VN", "LIVE", 100], ["MY / ID", "LIVE", 100], ["Capacity", "4.2x", 82]],
  },
] as const;

function LedgerVisual({ stage }: { stage: number }) {
  const data = LEDGER_DATA[stage];

  return (
    <div className={styles.ledgerWindow} aria-hidden="true">
      <div className={styles.ledgerTop}>
        <span><i /><i /><i /></span>
        <b>AUTO / 0{stage + 1}</b>
        <em>LIVE</em>
      </div>
      <code><span>$</span> {data.command}</code>
      <div className={styles.ledgerRows}>
        {data.rows.map(([name, value, level]) => (
          <div className={styles.ledgerRow} key={name}>
            <div>
              <span>{name}</span>
              <strong>{value}</strong>
            </div>
            <span className={styles.ledgerBar}><i style={{ width: `${level}%` }} /></span>
          </div>
        ))}
      </div>
      <div className={styles.ledgerStatus}>
        <span>STATUS</span>
        <strong><i /> HEALTHY</strong>
      </div>
    </div>
  );
}

function LoopArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 8a9 9 0 0 0-15.5-3.4L3 7m0 0V3m0 4h4m-4 9a9 9 0 0 0 15.5 3.4L21 17m0 0v4m0-4h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OptionPreview({ option }: { option: (typeof OPTIONS)[number] }) {
  return (
    <section className={`${styles.option} ${option.treatment}`} id={option.id}>
      <header className={styles.optionHeading}>
        <span className={styles.optionNumber}>{option.number}</span>
        <div>
          <div className={styles.optionTitleRow}>
            <h2>{option.title}</h2>
            <span className={styles.verdict}>{option.verdict}</span>
          </div>
          <p>{option.note}</p>
          <span className={styles.sequence}>{option.sequence}</span>
        </div>
      </header>

      <div className={styles.sectionPreview}>
        <SectionTitle
          eyebrow={t.eyebrow}
          title={<><AccentText segments={t.title} /> {t.titleTail}</>}
          tone={option.tone}
        />

        <div className={styles.stage}>
          <svg
            className={styles.loopTrack}
            viewBox="0 0 1200 560"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className={styles.loopBase} d="M60 327 A540 220 0 0 1 1140 327 A540 132 0 0 1 60 327" />
            <path className={styles.loopSignal} d="M60 327 A540 220 0 0 1 1140 327 A540 132 0 0 1 60 327" />
          </svg>

          <div className={styles.cards}>
            {t.steps.map((step, index) => {
              const Visual = VISUALS[index];
              const label = option.labels[index];
              const isLedger = option.visualFamily === "ledger";
              const isToken = option.visualFamily === "token";

              return (
                <article className={styles.cardSlot} key={step.number}>
                  <div className={styles.card}>
                    <div className={styles.cardText}>
                      <div className={styles.cardMeta}>
                        <span>{step.number}</span>
                        <i aria-hidden="true" />
                      </div>
                      <h3>{step.title}</h3>
                      <p>{step.caption}</p>
                    </div>

                    <div
                      className={`${styles.technicalVisual} ${isLedger ? styles.ledgerShell : ""}`}
                      role="img"
                      aria-label={`${step.title}: ${label.toLowerCase()} technical visualization`}
                    >
                      {isLedger ? (
                        <LedgerVisual stage={index} />
                      ) : isToken ? (
                        <TokenRelayVisual stage={index} />
                      ) : (
                        <>
                          <div className={styles.visualGlow} />
                          <div className={styles.orbitLayer} aria-hidden="true">
                            <i />
                            <i />
                            <i />
                          </div>
                          <Visual />
                        </>
                      )}
                    </div>

                    <div className={styles.portLabel}>
                      <span className={styles.portDot} aria-hidden="true" />
                      {label}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.footer}>
            <p>{t.lede}</p>
            <div className={styles.indicator}>
              <span>{t.indicator}</span>
              <LoopArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GrowthLoopTechnical() {
  return (
    <main className={styles.page}>
      <header className={styles.reviewHeader}>
        <div className={styles.reviewBrand}>
          <span className={styles.brandMark} aria-hidden="true">BW</span>
          <div>
            <span>DESIGN SANDBOX</span>
            <strong>Technical growth loop · 5 directions</strong>
          </div>
        </div>
        <div className={styles.reviewActions}>
          <nav aria-label="Jump to visualization option">
            {OPTIONS.map((option) => (
              <a key={option.id} href={`#${option.id}`} aria-label={`Option ${option.number}: ${option.title}`}>
                {option.number}
              </a>
            ))}
          </nav>
          <Link href="/">Back to site</Link>
        </div>
      </header>

      <section className={styles.intro}>
        <div>
          <span>EXPLORATION / 05 TECHNICAL SYSTEMS</span>
          <h1>Five ways to make growth feel intelligent.</h1>
        </div>
        <p>
          Every direction keeps the original five-card fan, copy, and closed-loop
          story. Only the technical visualization language changes.
        </p>
      </section>

      {OPTIONS.map((option) => (
        <OptionPreview key={option.id} option={option} />
      ))}

      <footer className={styles.reviewFooter}>
        <span>Basicware Thailand</span>
        <p>AI Marketing Growth Services visualization study · Sandbox only</p>
      </footer>
    </main>
  );
}
