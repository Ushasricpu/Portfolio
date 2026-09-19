import { useState } from "react";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#06b6d4",
    icon: "◈",
    techs: [
      { name: "React.js", desc: "Primary UI framework for all dashboard applications" },
      { name: "TypeScript", desc: "Type-safe development across all frontend codebases" },
      { name: "Recharts", desc: "Real-time chart rendering for monitoring dashboards" },
      { name: "WebSockets", desc: "Live telemetry streaming without polling overhead" },
      { name: "Tailwind CSS", desc: "Utility-first styling for rapid UI development" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#a78bfa",
    icon: "⬡",
    techs: [
      { name: "FastAPI", desc: "Async Python API framework — 3x throughput vs Flask" },
      { name: "Python", desc: "Primary language for backend services and data pipelines" },
      { name: "Node.js", desc: "Event-driven middleware and protocol translation layers" },
      { name: "REST APIs", desc: "RESTful service design with OpenAPI documentation" },
      { name: "JWT Auth", desc: "Stateless authentication for multi-tenant dashboards" },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    color: "#34d399",
    icon: "⬟",
    techs: [
      { name: "Docker", desc: "Container-first deployment for all microservices" },
      { name: "Jenkins", desc: "Self-hosted CI/CD pipeline — 85% deploy time reduction" },
      { name: "Nginx", desc: "Reverse proxy, SSL termination, load balancing" },
      { name: "Linux", desc: "Ubuntu-based production servers and edge nodes" },
      { name: "Shell", desc: "Automation scripts for deployment and operations" },
    ],
  },
  {
    id: "iot",
    label: "IoT & Protocols",
    color: "#fb923c",
    icon: "◎",
    techs: [
      { name: "MQTT", desc: "Lightweight pub/sub for constrained IoT devices" },
      { name: "oneM2M", desc: "International standard for IoT interoperability" },
      { name: "Mosquitto", desc: "Production MQTT broker handling 300+ device connections" },
      { name: "Modbus", desc: "Industrial protocol integration for legacy SCADA systems" },
      { name: "CoAP", desc: "Constrained device protocol for low-bandwidth sensors" },
    ],
  },
  {
    id: "data",
    label: "Data",
    color: "#f472b6",
    icon: "◉",
    techs: [
      { name: "PostgreSQL", desc: "Primary relational database for all structured data" },
      { name: "TimescaleDB", desc: "Time-series extension — 60% query performance gain" },
      { name: "Redis", desc: "Sub-millisecond caching for live dashboard reads" },
      { name: "InfluxDB", desc: "High-frequency sensor telemetry storage" },
      { name: "SQL", desc: "Complex analytical queries for health scoring and reporting" },
    ],
  },
  {
    id: "monitoring",
    label: "Testing & QA",
    color: "#fbbf24",
    icon: "◇",
    techs: [
      { name: "pytest", desc: "Comprehensive Python test suites with fixtures" },
      { name: "Jest", desc: "Frontend unit and component testing" },
      { name: "Postman", desc: "API testing and documentation" },
      { name: "Load Testing", desc: "Device simulation for performance validation" },
      { name: "Health Checks", desc: "Automated deployment gates in CI pipeline" },
    ],
  },
];

export function Ecosystem() {
  const [active, setActive] = useState("frontend");
  const cat = categories.find((c) => c.id === active)!;

  return (
    <section id="ecosystem" className="py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#71717a] tracking-widest uppercase mb-4">
            08 / Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            A full-stack technology lens.
          </h2>
          <p className="text-[#71717a] mt-4">
            Select a category to explore the stack.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all duration-200 ${
                active === c.id
                  ? "border-white/15 bg-[#0f0f14] text-white"
                  : "border-white/5 text-[#71717a] hover:border-white/10 hover:text-white/70"
              }`}
            >
              <span style={{ color: active === c.id ? c.color : "#71717a" }}>
                {c.icon}
              </span>
              {c.label}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3"
        >
          {cat.techs.map((tech, i) => (
            <div
              key={tech.name}
              className="group p-4 rounded-lg border border-white/5 bg-[#0f0f14] hover:border-white/10 transition-all duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div
                className="font-mono text-xs mb-1 font-semibold"
                style={{ color: cat.color }}
              >
                {tech.name}
              </div>
              <p className="text-xs text-[#71717a] leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg border border-white/5 bg-[#0f0f14]">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-lg"
              style={{ color: cat.color }}
            >
              {cat.icon}
            </span>
            <div>
              <div
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: cat.color }}
              >
                {cat.label}
              </div>
              <div className="text-xs text-[#71717a] mt-0.5">
                {cat.techs.length} technologies actively used in production
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
