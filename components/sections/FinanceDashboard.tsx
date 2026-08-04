import TrendGraphIcon from "@/components/ui/TrendGraphIcon";
import styles from "./FinanceDashboard.module.css";

const MONTHS = [
  { label: "Jan", actual: 52, plan: 56 },
  { label: "Feb", actual: 60, plan: 58 },
  { label: "Mar", actual: 57, plan: 61 },
  { label: "Apr", actual: 70, plan: 66 },
  { label: "May", actual: 78, plan: 72 },
  { label: "Jun", actual: 92, plan: 81 },
] as const;

const KPI_CARDS = [
  { label: "Gross profit", value: "฿16.2M", delta: "+12.0%", context: "฿0.8M above plan" },
  { label: "Net margin", value: "31.4%", delta: "+4.2 pts", context: "2.4 pts above target" },
  { label: "Cash flow", value: "฿8.9M", delta: "+22.0%", context: "1.8× operating coverage" },
] as const;

const REGIONS = [
  { name: "Bangkok", value: "฿10.4M", share: 42 },
  { name: "Chiang Mai", value: "฿5.7M", share: 23 },
  { name: "Phuket", value: "฿5.0M", share: 20 },
  { name: "Khon Kaen", value: "฿3.7M", share: 15 },
] as const;

function TrendDelta({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.trendDelta}>
      <TrendGraphIcon />
      {children}
    </span>
  );
}

export default function FinanceDashboard() {
  return (
    <article className={styles.dashboard} aria-label="Q2 2026 executive financial dashboard">
      <header className={styles.dashboardHeader}>
        <div className={styles.dashboardIdentity}>
          <span className={styles.dashboardMark} aria-hidden="true">
            <TrendGraphIcon />
          </span>
          <div>
            <h2>Q2 performance overview</h2>
          </div>
        </div>
        <div className={styles.dashboardMeta}>
          <span className={styles.syncStatus}><i aria-hidden="true" /> Data reconciled</span>
          <span className={styles.period}>Q2 2026</span>
        </div>
      </header>

      <div className={styles.kpiGrid}>
        <section className={styles.revenueCard}>
          <div className={styles.cardTopline}>
            <span>Revenue</span>
            <span className={styles.qualityBadge}>92% of target</span>
          </div>
          <div className={styles.revenueBody}>
            <div>
              <strong>฿24.8M</strong>
              <TrendDelta>+18.2% YoY</TrendDelta>
            </div>
            <div className={styles.targetMeter} aria-label="Revenue target attainment: 92 percent">
              <span style={{ width: "92%" }} />
            </div>
          </div>
          <p className={styles.revenueFootnote}><b>฿2.1M</b> required in the final 9 days to close plan</p>
        </section>

        {KPI_CARDS.map((kpi) => (
          <section className={styles.kpiCard} key={kpi.label}>
            <span className={styles.kpiLabel}>{kpi.label}</span>
            <div className={styles.kpiValueRow}>
              <strong>{kpi.value}</strong>
              <TrendDelta>{kpi.delta}</TrendDelta>
            </div>
            <span className={styles.kpiContext}>{kpi.context}</span>
          </section>
        ))}
      </div>

      <div className={styles.dashboardBody}>
        <section className={styles.performanceCard}>
          <header className={styles.cardHeader}>
            <div><p>REVENUE PERFORMANCE</p><h3>Actual vs plan</h3></div>
            <div className={styles.legend} aria-label="Chart legend">
              <span><i className={styles.actualKey} />Actual</span>
              <span><i className={styles.planKey} />Plan</span>
            </div>
          </header>

          <div className={styles.chartArea}>
            <div className={styles.axisLabels} aria-hidden="true"><span>฿30M</span><span>20</span><span>10</span><span>0</span></div>
            <div className={styles.plot}>
              <div className={styles.gridLines} aria-hidden="true"><i /><i /><i /><i /></div>
              <div className={styles.columns}>
                {MONTHS.map((month) => (
                  <div className={styles.monthColumn} key={month.label}>
                    <div className={styles.barPair}>
                      <span className={styles.planBar} style={{ height: `${month.plan}%` }} aria-label={`${month.label} plan`} />
                      <span className={styles.actualBar} style={{ height: `${month.actual}%` }} aria-label={`${month.label} actual`}>
                        {month.label === "Jun" && <b>24.8</b>}
                      </span>
                    </div>
                    <span>{month.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <footer className={styles.chartFooter}>
            <span>Q2 run rate</span><strong>฿8.3M / month</strong><span>▲ 9.6% ahead of Q1</span>
          </footer>
        </section>

        <aside className={styles.insightRail}>
          <section className={styles.aiBrief}>
            <header>
              <div><span className={styles.aiMark} aria-hidden="true">✦</span><div><p>AI EXECUTIVE BRIEF</p><h3>What needs attention</h3></div></div>
            </header>
            <ol>
              <li><span>01</span><p><b>Bangkok</b> contributed 42% of Q2 revenue growth.</p></li>
              <li><span>02</span><p>Gross margin is <b>120 bps above plan</b> on service mix.</p></li>
              <li><span>03</span><p>June collections are <b>6 days slower</b> than target.</p></li>
            </ol>
          </section>

          <section className={styles.regionCard}>
            <header className={styles.cardHeader}>
              <div><p>REGIONAL MIX</p><h3>Revenue contribution</h3></div>
            </header>
            <div className={styles.regionRows}>
              {REGIONS.map((region) => (
                <div className={styles.regionRow} key={region.name}>
                  <span>{region.name}</span>
                  <div className={styles.regionTrack}><i style={{ width: `${region.share}%` }} /></div>
                  <b><em>{region.share}%</em>{region.value}</b>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>

    </article>
  );
}
