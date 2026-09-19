import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "smart-city",
    tag: "01 / IoT Dashboard",
    title: "Smart City IoT Dashboard",
    subtitle: "Real-time infrastructure monitoring at urban scale",
    problem:
      "IIIT Hyderabad's Smart City Research Center needed a unified monitoring layer for heterogeneous sensor networks spread across different city zones — each using different protocols and data formats, with no central visibility.",
    challenges: [
      "Protocol fragmentation across MQTT, CoAP, and Modbus devices",
      "Sub-second latency requirements for anomaly alerting",
      "Scalability from pilot (20 devices) to city-wide (300+ devices)",
      "Multi-tenant data isolation for GIZ, MeitY, and BYPL",
    ],
    architecture:
      "Event-driven architecture with a Mosquitto broker at the edge, normalizing telemetry into a Postgres/TimescaleDB time-series store via a Python ingestion service. FastAPI WebSocket endpoints push live data to the React dashboard without polling.",
    decisions: [
      { choice: "FastAPI over Flask", reason: "Native async/await, 3x throughput for WebSocket loads" },
      { choice: "TimescaleDB over InfluxDB", reason: "SQL compatibility, better JOIN performance for analytics" },
      { choice: "oneM2M protocol layer", reason: "Device interoperability without vendor lock-in" },
    ],
    impact: [
      "300+ devices monitored in production",
      "99.7% uptime over 18-month operation period",
      "Adopted by Silicon Labs as reference implementation",
      "Sub-200ms end-to-end alert propagation",
    ],
    stack: ["React.js", "FastAPI", "PostgreSQL", "TimescaleDB", "MQTT", "Docker", "WebSockets"],
    color: "#06b6d4",
  },
  {
    id: "transformer",
    tag: "02 / Health Monitoring",
    title: "Transformer Health Monitoring System",
    subtitle: "Predictive maintenance for electrical grid infrastructure",
    problem:
      "BYPL (BSES Yamuna Power Limited) required predictive fault detection for their transformer fleet across Delhi. Manual inspections were infrequent and failures led to unplanned outages affecting thousands of residents.",
    challenges: [
      "Sensor data quality and noise filtering at edge",
      "Real-time anomaly detection without false positives",
      "Offline operation during network partitions",
      "Integration with legacy SCADA systems",
    ],
    architecture:
      "Edge computing nodes with local anomaly detection models push compressed deltas to the central FastAPI service. Threshold-based and ML-assisted health scoring classifies transformer health into operational bands. Alerts route through a Redis pub/sub layer to both dashboard and SMS/email channels.",
    decisions: [
      { choice: "Edge-side filtering", reason: "Reduced bandwidth 70%, enabled offline alerting" },
      { choice: "Health-band classification", reason: "Interpretable to field engineers vs. black-box ML" },
      { choice: "Redis pub/sub", reason: "Decoupled alert routing, no additional message broker" },
    ],
    impact: [
      "Early fault detection averaging 72 hours before failure",
      "Monitoring 50+ transformers across Delhi distribution zones",
      "Reduced emergency callouts by estimated 40%",
      "Research published in IEEE Xplore",
    ],
    stack: ["Python", "FastAPI", "Redis", "PostgreSQL", "Modbus", "Docker", "React.js"],
    color: "#a78bfa",
  },
  {
    id: "cicd",
    tag: "03 / Platform Engineering",
    title: "CI/CD Automation Platform",
    subtitle: "Zero-touch deployments for the research center's microservices",
    problem:
      "The research center was deploying 8+ microservices manually via SSH. Each release required 3-4 hours of engineer time, introduced environment drift, and created deployment anxiety. Rollbacks were risky manual operations.",
    challenges: [
      "Heterogeneous services: Python, Node.js, and containerized legacy apps",
      "No staging environment — direct to production deployments",
      "Inconsistent environments between developer machines and servers",
      "No automated testing gates before deployment",
    ],
    architecture:
      "Jenkins pipeline triggered on main branch pushes. Docker Compose standardizes runtime environments. Automated test suite runs in isolated containers. Health check gates prevent bad deploys. Blue-green deployment strategy enables instant rollbacks.",
    decisions: [
      { choice: "Jenkins over GitHub Actions", reason: "Self-hosted, no data egress for internal research data" },
      { choice: "Docker Compose over K8s", reason: "Right-sized for 8 services; Kubernetes would be over-engineering" },
      { choice: "Blue-green deploys", reason: "Zero-downtime rollback without persistent state complexity" },
    ],
    impact: [
      "Deploy time reduced from 3+ hours to 8 minutes",
      "Zero manual deployment steps",
      "100% of releases go through automated test gates",
      "Rollback time under 2 minutes",
    ],
    stack: ["Jenkins", "Docker", "Python", "Shell", "Nginx", "PostgreSQL"],
    color: "#34d399",
  },
];

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="case-studies" className="py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#71717a] tracking-widest uppercase mb-4">
            04 / Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Engineering case studies.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 rounded-lg border transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${
                  active === i
                    ? "border-white/10 bg-[#0f0f14] text-white"
                    : "border-transparent text-[#71717a] hover:text-white/80"
                }`}
              >
                <div
                  className="font-mono text-xs mb-1"
                  style={{ color: active === i ? p.color : "#71717a" }}
                >
                  {p.tag}
                </div>
                <div className="text-sm font-medium">{p.title}</div>
              </button>
            ))}
          </div>

          <div className="flex-1 border border-white/5 rounded-xl overflow-hidden bg-[#0f0f14]">
            <div
              className="px-8 py-6 border-b border-white/5"
              style={{
                background: `linear-gradient(135deg, ${project.color}10 0%, transparent 100%)`,
              }}
            >
              <div
                className="font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color: project.color }}
              >
                {project.tag}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-[#71717a]">{project.subtitle}</p>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-3">
                    Problem
                  </h4>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-3">
                    Engineering Challenges
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-3">
                    Architecture
                  </h4>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{project.architecture}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-3">
                    Key Decisions
                  </h4>
                  <div className="space-y-3">
                    {project.decisions.map((d, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg border border-white/5 bg-[#09090b]"
                      >
                        <div
                          className="font-mono text-xs mb-1"
                          style={{ color: project.color }}
                        >
                          {d.choice}
                        </div>
                        <div className="text-xs text-[#71717a]">{d.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-3">
                    Impact
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-[#34d399] mt-0.5">✓</span>
                        <span className="text-[#a1a1aa]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-3">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-1 rounded border border-white/5 text-[#71717a]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
