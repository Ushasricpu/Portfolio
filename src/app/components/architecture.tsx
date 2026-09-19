import { useState } from "react";

interface ArchNode {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  techs: string[];
  description: string;
  color: string;
}

const nodes: ArchNode[] = [
  {
    id: "devices",
    label: "IoT Devices",
    sublabel: "Edge Layer",
    x: 5,
    y: 40,
    techs: ["MQTT", "CoAP", "Modbus", "oneM2M", "Zigbee"],
    description:
      "Smart sensors, transformer monitoring units, and smart city infrastructure devices communicating via lightweight IoT protocols. oneM2M-compliant device abstraction handles heterogeneous hardware.",
    color: "#06b6d4",
  },
  {
    id: "middleware",
    label: "Middleware",
    sublabel: "Protocol Layer",
    x: 25,
    y: 40,
    techs: ["Mosquitto", "Eclipse Hono", "Node-RED", "Python"],
    description:
      "MQTT broker and oneM2M middleware normalizing device telemetry into a unified data model. Handles protocol translation, message routing, and edge-side data filtering.",
    color: "#a78bfa",
  },
  {
    id: "api",
    label: "API Layer",
    sublabel: "Backend Services",
    x: 47,
    y: 40,
    techs: ["FastAPI", "Python", "REST", "WebSockets", "JWT"],
    description:
      "FastAPI-powered async REST and WebSocket endpoints serving both real-time telemetry streams and historical data queries. Handles authentication, rate limiting, and data validation.",
    color: "#34d399",
  },
  {
    id: "database",
    label: "Data Layer",
    sublabel: "Persistence",
    x: 68,
    y: 40,
    techs: ["PostgreSQL", "TimescaleDB", "Redis", "InfluxDB"],
    description:
      "PostgreSQL with TimescaleDB extension for time-series optimization. Redis caching layer for sub-millisecond dashboard reads. Hypertable partitioning for multi-year telemetry retention.",
    color: "#fb923c",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    sublabel: "Frontend",
    x: 88,
    y: 40,
    techs: ["React.js", "Recharts", "WebSockets", "TypeScript"],
    description:
      "React-based real-time monitoring dashboard with live chart updates via WebSocket. Custom visualization components for transformer health, device status maps, and anomaly alerts.",
    color: "#f472b6",
  },
];

const edges = [
  { from: "devices", to: "middleware" },
  { from: "middleware", to: "api" },
  { from: "api", to: "database" },
  { from: "database", to: "dashboard" },
];

export function Architecture() {
  const [selected, setSelected] = useState<ArchNode>(nodes[0]);

  return (
    <section id="architecture" className="py-32 bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#71717a] tracking-widest uppercase mb-4">
            03 / System Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How the systems connect.
          </h2>
          <p className="text-[#71717a] mt-4 max-w-xl">
            Click any layer to explore the technologies and engineering decisions
            behind each component.
          </p>
        </div>

        <div className="relative mb-8 overflow-x-auto">
          <div className="relative h-40 min-w-[700px]">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 80"
              preserveAspectRatio="none"
            >
              {edges.map((e, i) => {
                const from = nodes.find((n) => n.id === e.from)!;
                const to = nodes.find((n) => n.id === e.to)!;
                const fromX = from.x + 8;
                const toX = to.x;
                const y = from.y + 5;
                return (
                  <g key={i}>
                    <line
                      x1={`${fromX}%`}
                      y1={`${y}%`}
                      x2={`${toX}%`}
                      y2={`${y}%`}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="0.3"
                    />
                    <line
                      x1={`${fromX}%`}
                      y1={`${y}%`}
                      x2={`${toX}%`}
                      y2={`${y}%`}
                      stroke={nodes.find((n) => n.id === e.from)!.color}
                      strokeWidth="0.3"
                      strokeOpacity="0.4"
                      strokeDasharray="2 2"
                    />
                  </g>
                );
              })}
            </svg>

            {nodes.map((node) => (
              <button
                key={node.id}
                onClick={() => setSelected(node)}
                className="absolute transform -translate-y-1/2 group"
                style={{ left: `${node.x}%`, top: "50%" }}
              >
                <div
                  className={`relative w-16 h-16 rounded-xl border transition-all duration-200 flex items-center justify-center ${
                    selected.id === node.id
                      ? "border-white/20 scale-110"
                      : "border-white/5 hover:border-white/15 hover:scale-105"
                  }`}
                  style={{
                    backgroundColor:
                      selected.id === node.id
                        ? `${node.color}18`
                        : "#0f0f14",
                    boxShadow:
                      selected.id === node.id
                        ? `0 0 24px ${node.color}30`
                        : "none",
                  }}
                >
                  <span className="text-2xl">
                    {node.id === "devices" && "📡"}
                    {node.id === "middleware" && "⚡"}
                    {node.id === "api" && "🔌"}
                    {node.id === "database" && "🗄"}
                    {node.id === "dashboard" && "📊"}
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <div
                    className="text-xs font-medium"
                    style={{
                      color: selected.id === node.id ? node.color : "#fafafa",
                    }}
                  >
                    {node.label}
                  </div>
                  <div className="font-mono text-[10px] text-[#71717a]">
                    {node.sublabel}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          className="border rounded-xl p-8 transition-all duration-300"
          style={{
            borderColor: `${selected.color}25`,
            background: `linear-gradient(135deg, ${selected.color}08 0%, #0f0f14 100%)`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color: selected.color }}
              >
                {selected.sublabel}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {selected.label}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed">{selected.description}</p>
            </div>
            <div>
              <div className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-4">
                Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {selected.techs.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded border"
                    style={{
                      color: selected.color,
                      borderColor: `${selected.color}30`,
                      backgroundColor: `${selected.color}10`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
