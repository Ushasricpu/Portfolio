const collaborators = [
  {
    name: "Silicon Labs",
    type: "Industry Partner",
    detail: "Platform adoption + recognition for engineering contributions",
    color: "#06b6d4",
  },
  {
    name: "BYPL",
    type: "Deployment Partner",
    detail: "BSES Yamuna Power Limited — transformer monitoring rollout",
    color: "#a78bfa",
  },
  {
    name: "GIZ",
    type: "International Partner",
    detail: "German Development Agency — smart city infrastructure",
    color: "#34d399",
  },
  {
    name: "MeitY",
    type: "Government",
    detail: "Ministry of Electronics & IT — national IoT initiatives",
    color: "#fb923c",
  },
  {
    name: "IISc Bangalore",
    type: "Research Collaboration",
    detail: "Joint research on IoT interoperability protocols",
    color: "#f472b6",
  },
  {
    name: "oneM2M",
    type: "Standards Body",
    detail: "Global Hackathon winner — protocol design contribution",
    color: "#fbbf24",
  },
];

const achievements = [
  {
    title: "oneM2M Global Hackathon",
    subtitle: "1st Place Winner",
    desc: "International competition on IoT interoperability solutions. Live prototype demonstrated seamless multi-vendor device integration using the designed framework.",
    icon: "🏆",
    color: "#fbbf24",
  },
  {
    title: "Silicon Labs Recognition",
    subtitle: "Engineering Excellence Award",
    desc: "Recognized by Silicon Labs for outstanding contribution to the real-time monitoring platform that was adopted as their reference IoT implementation.",
    icon: "⭐",
    color: "#06b6d4",
  },
  {
    title: "Leadership Excellence",
    subtitle: "Team Lead — 7 Members",
    desc: "Led cross-functional team of 7 engineers and researchers. Mentored 3 interns through full project cycles from design to production deployment.",
    icon: "👥",
    color: "#a78bfa",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-32 bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#71717a] tracking-widest uppercase mb-4">
            07 / Achievements & Collaboration
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Built with, recognized by.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-6">
              Organizational Collaborations
            </div>
            <div className="space-y-3">
              {collaborators.map((c) => (
                <div
                  key={c.name}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-[#0f0f14] hover:border-white/10 transition-all"
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: c.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-white">{c.name}</span>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded hidden sm:inline"
                        style={{ color: c.color, backgroundColor: `${c.color}12` }}
                      >
                        {c.type}
                      </span>
                    </div>
                    <div className="text-xs text-[#71717a] mt-0.5">{c.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs text-[#71717a] uppercase tracking-widest mb-6">
              Awards & Recognition
            </div>
            <div className="space-y-4">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="p-6 rounded-xl border border-white/5 bg-[#0f0f14] overflow-hidden relative group hover:border-white/10 transition-all"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                    style={{ backgroundColor: a.color }}
                  />
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{a.icon}</div>
                    <div>
                      <div className="font-semibold text-white mb-0.5">{a.title}</div>
                      <div
                        className="font-mono text-xs mb-2"
                        style={{ color: a.color }}
                      >
                        {a.subtitle}
                      </div>
                      <p className="text-sm text-[#71717a] leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
