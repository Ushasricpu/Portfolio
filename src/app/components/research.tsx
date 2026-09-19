import { ExternalLink } from "lucide-react";

const publications = [
  {
    id: "P1",
    title: "oneM2M-Based IoT Interoperability Framework for Smart City Applications",
    venue: "IEEE International Conference on IoT",
    year: "2022",
    tags: ["oneM2M", "Smart Cities", "Interoperability"],
    abstract:
      "Presents a comprehensive framework enabling heterogeneous IoT device communication in smart city deployments using oneM2M protocol standards. Demonstrates 40% reduction in integration complexity across multi-vendor device ecosystems.",
    color: "#06b6d4",
    contribution: "Primary framework design and experimental evaluation",
  },
  {
    id: "P2",
    title: "Real-Time Transformer Health Monitoring Using Edge-Computed Anomaly Detection",
    venue: "IEEE Transactions on Industrial IoT",
    year: "2022",
    tags: ["Predictive Maintenance", "Edge Computing", "Power Systems"],
    abstract:
      "Proposes an edge-first approach to transformer fault prediction, offloading anomaly scoring to on-device computation for network-independent alerting. Evaluated against BYPL transformer fleet with 72-hour average fault lead time.",
    color: "#a78bfa",
    contribution: "System architecture, edge ML model, production evaluation",
  },
  {
    id: "P3",
    title: "Scalable MQTT-to-REST Gateway Design for Heterogeneous IoT Deployments",
    venue: "IEEE Consumer Electronics",
    year: "2023",
    tags: ["MQTT", "Protocol Translation", "Gateway"],
    abstract:
      "Designs and benchmarks a lightweight protocol gateway translating MQTT telemetry to REST APIs with sub-100ms latency. Demonstrates horizontal scaling to 500+ concurrent device connections on commodity hardware.",
    color: "#34d399",
    contribution: "Gateway architecture, benchmarking methodology, performance analysis",
  },
  {
    id: "P4",
    title: "CI/CD Pipeline Design for Microservices-Based IoT Platforms",
    venue: "IEEE Software Engineering Conference",
    year: "2023",
    tags: ["DevOps", "CI/CD", "Microservices"],
    abstract:
      "Documents lessons learned from building production CI/CD infrastructure for an 8-service IoT platform. Presents a Jenkins-based pipeline design with automated test gates and blue-green deployment patterns for zero-downtime releases.",
    color: "#fb923c",
    contribution: "Pipeline design, implementation, operational metrics",
  },
];

export function Research() {
  return (
    <section id="publications" className="py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#71717a] tracking-widest uppercase mb-4">
            06 / Publications & Innovation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Research that advances the field.
          </h2>
          <p className="text-[#71717a] mt-4 max-w-xl">
            4 peer-reviewed publications in IEEE venues — connecting production engineering
            experience to academic standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="group relative border border-white/5 rounded-xl p-6 bg-[#0f0f14] hover:border-white/10 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: `${pub.color}15` }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="font-mono text-3xl font-bold opacity-15"
                    style={{ color: pub.color }}
                  >
                    {pub.id}
                  </div>
                  <a
                    href="https://ieeexplore.ieee.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#71717a] hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                  {pub.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="font-mono text-xs"
                    style={{ color: pub.color }}
                  >
                    {pub.venue}
                  </span>
                  <span className="text-[#71717a]">·</span>
                  <span className="font-mono text-xs text-[#71717a]">{pub.year}</span>
                </div>

                <p className="text-sm text-[#71717a] leading-relaxed mb-4">{pub.abstract}</p>

                <div className="pt-4 border-t border-white/5">
                  <div className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-2">
                    Contribution
                  </div>
                  <div className="text-xs text-[#a1a1aa]">{pub.contribution}</div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {pub.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded"
                      style={{
                        color: pub.color,
                        backgroundColor: `${pub.color}12`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
