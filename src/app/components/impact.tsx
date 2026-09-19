import { useState } from "react";
import { Activity, Cpu, GitBranch, BookOpen, ArrowUpRight } from "lucide-react";

const impacts = [
  {
    icon: Activity,
    category: "Production Platform",
    headline: "Real-time monitoring platform actively deployed by Silicon Labs",
    description:
      "Engineered a WebSocket-driven IoT dashboard processing telemetry from 300+ transformer monitoring units. The platform is in active production use by Silicon Labs and BYPL for predictive maintenance.",
    metrics: [
      { label: "Devices Monitored", value: "300+" },
      { label: "Uptime", value: "99.7%" },
      { label: "Latency", value: "<200ms" },
    ],
    color: "from-[#06b6d4]/10 to-transparent",
    accent: "#06b6d4",
    tag: "IoT Infrastructure",
  },
  {
    icon: Cpu,
    category: "Smart City Scale",
    headline: "Smart city dashboards supporting large-scale device monitoring across urban infrastructure",
    description:
      "Led development of the Smart City Research Center's core monitoring platform with GIZ and MeitY, enabling real-time device health visualization and anomaly detection across distributed sensor networks.",
    metrics: [
      { label: "Sensor Networks", value: "12+" },
      { label: "Cities Deployed", value: "3" },
      { label: "Stakeholders", value: "4 Gov." },
    ],
    color: "from-[#a78bfa]/10 to-transparent",
    accent: "#a78bfa",
    tag: "Urban Systems",
  },
  {
    icon: GitBranch,
    category: "DevOps Automation",
    headline: "Automated CI/CD pipelines eliminating manual deployment bottlenecks",
    description:
      "Designed and implemented a Jenkins-based pipeline with Docker containerization and automated testing gates, reducing release cycle from days to minutes while enforcing quality invariants.",
    metrics: [
      { label: "Deploy Time", value: "−85%" },
      { label: "Manual Steps", value: "0" },
      { label: "Rollback Time", value: "<2min" },
    ],
    color: "from-[#34d399]/10 to-transparent",
    accent: "#34d399",
    tag: "Platform Engineering",
  },
  {
    icon: BookOpen,
    category: "Research & Standards",
    headline: "Research-backed interoperability solutions adopted in oneM2M standards discussions",
    description:
      "Published 4 IEEE papers on IoT interoperability frameworks. Won the oneM2M Global Hackathon, with research directly influencing protocol design discussions with IISc Bangalore and international standards bodies.",
    metrics: [
      { label: "IEEE Papers", value: "4" },
      { label: "Hackathon", value: "1st Place" },
      { label: "Citations", value: "Growing" },
    ],
    color: "from-[#fb923c]/10 to-transparent",
    accent: "#fb923c",
    tag: "Research",
  },
];

export function Impact() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="impact" className=" bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#71717a] tracking-widest uppercase mb-4">
            02 / Engineering Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Work that ships to production and stays there.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {impacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative group p-8 border rounded-lg transition-all duration-300 cursor-default overflow-hidden ${
                  hovered === i
                    ? "border-white/15 bg-[#0f0f14]"
                    : "border-white/5 bg-[#0f0f14]/50"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded border border-white/5"
                        style={{ backgroundColor: `${item.accent}15` }}
                      >
                        <Icon size={18} style={{ color: item.accent }} />
                      </div>
                      <span
                        className="font-mono text-xs tracking-widest uppercase"
                        style={{ color: item.accent }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <p className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-3">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-4 leading-snug">
                    {item.headline}
                  </h3>
                  <p className="text-sm text-[#71717a] leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="text-xl font-bold mb-1"
                          style={{ color: item.accent }}
                        >
                          {m.value}
                        </div>
                        <div className="font-mono text-xs text-[#71717a] leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
