import { useState } from "react";

const phases = [
  {
    id: "research",
    label: "Research",
    year: "2021",
    icon: "🔬",
    color: "#06b6d4",
    title: "IoT Interoperability Research",
    org: "IIIT Hyderabad — Smart City Research Center",
    description:
      "Began investigating oneM2M protocol standards and IoT interoperability frameworks. Collaborated with IISc Bangalore to understand heterogeneous device communication challenges at urban scale.",
    highlights: [
      "Studied oneM2M architecture and RESTful resource model",
      "Analyzed protocol fragmentation in smart city deployments",
      "Established research collaboration with IISc Bangalore",
      "Began IEEE paper writing and conference submission process",
    ],
  },
  {
    id: "development",
    label: "Development",
    year: "2022",
    icon: "⚙️",
    color: "#a78bfa",
    title: "Platform Architecture & Build",
    org: "IIIT Hyderabad — Smart City Research Center",
    description:
      "Designed and built the core IoT dashboard platform from scratch. Established the microservices architecture, database schema, and real-time data pipeline that would serve as the foundation for all downstream projects.",
    highlights: [
      "Architected FastAPI + PostgreSQL backend with WebSocket support",
      "Built MQTT broker integration and oneM2M middleware layer",
      "Developed React dashboard with real-time charting",
      "Published first IEEE paper on IoT interoperability framework",
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    year: "2022–23",
    icon: "🚀",
    color: "#34d399",
    title: "Production Rollout",
    org: "IIIT Hyderabad + Silicon Labs + BYPL",
    description:
      "Took the platform from lab environment to production deployment. Coordinated with Silicon Labs and BYPL for transformer monitoring integration. Built Jenkins CI/CD pipeline to enable reliable, repeatable deployments.",
    highlights: [
      "Deployed monitoring system to 50+ transformers (BYPL)",
      "Platform adopted by Silicon Labs as reference implementation",
      "Implemented Jenkins pipeline — deploy time dropped 85%",
      "Won oneM2M Global Hackathon with live demo",
    ],
  },
  {
    id: "optimization",
    label: "Optimization",
    year: "2023",
    icon: "📈",
    color: "#fb923c",
    title: "Scale & Performance Engineering",
    org: "IIIT Hyderabad — Smart City Research Center",
    description:
      "With production traffic and real device scale, shifted focus to performance engineering. Migrated from standard Postgres to TimescaleDB, implemented Redis caching, and scaled device monitoring to 300+ units.",
    highlights: [
      "Migrated to TimescaleDB — query time reduced 60%",
      "Implemented Redis caching for sub-millisecond dashboard reads",
      "Scaled to 300+ concurrent device connections",
      "Recognized by Silicon Labs for engineering contributions",
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    year: "2023–24",
    icon: "👥",
    color: "#f472b6",
    title: "Team Lead & Mentorship",
    org: "IIIT Hyderabad — Smart City Research Center",
    description:
      "Took on technical leadership of a 7-member team. Mentored junior developers and interns, established engineering practices, and drove the research agenda for new IoT interoperability publications.",
    highlights: [
      "Led 7-person cross-functional engineering team",
      "Mentored 3 interns through complete project cycles",
      "Coordinated deliverables with GIZ, MeitY, IISc",
      "Received Leadership Excellence recognition",
    ],
  },
];

export function Journey() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <section id="journey" className="py-32 bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#71717a] tracking-widest uppercase mb-4">
            05 / Engineering Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Four years of compounding progress.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-2 mb-12 overflow-x-auto pb-2">
          {phases.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className="group relative flex-1 min-w-[120px] text-left"
            >
              <div
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  active === i
                    ? "border-white/10 bg-[#0f0f14]"
                    : "border-transparent hover:border-white/5"
                }`}
              >
                <div className="text-2xl mb-2">{p.icon}</div>
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-1"
                  style={{ color: active === i ? p.color : "#71717a" }}
                >
                  {p.year}
                </div>
                <div
                  className={`text-sm font-medium transition-colors ${
                    active === i ? "text-white" : "text-[#71717a] group-hover:text-white/70"
                  }`}
                >
                  {p.label}
                </div>
              </div>
              {active === i && (
                <div
                  className="h-0.5 mt-1 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
              )}
            </button>
          ))}
        </div>

        <div
          className="border rounded-xl p-8 transition-all duration-300"
          style={{
            borderColor: `${phase.color}20`,
            background: `linear-gradient(135deg, ${phase.color}08 0%, #0f0f14 60%)`,
          }}
        >
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div
                className="font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color: phase.color }}
              >
                {phase.year}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
              <div className="font-mono text-xs text-[#71717a] mb-4">{phase.org}</div>
              <p className="text-[#a1a1aa] leading-relaxed">{phase.description}</p>
            </div>
            <div className="md:col-span-3">
              <div className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-4">
                Key Milestones
              </div>
              <div className="space-y-3">
                {phase.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-[#09090b]/50"
                  >
                    <span
                      className="font-mono text-xs mt-0.5 shrink-0"
                      style={{ color: phase.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#a1a1aa]">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
