import { useEffect, useRef } from "react";
import { Github, Linkedin, Phone, Mail, ArrowRight } from "lucide-react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
  type: "device" | "hub" | "gateway";
}

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: Node[] = Array.from({ length: 55 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: i < 5 ? 4 : i < 15 ? 2.5 : 1.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      type: i < 5 ? "hub" : i < 15 ? "gateway" : "device",
    }));

    const CONNECTION_DIST = 120;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.25;
            const isImportant = a.type === "hub" || b.type === "hub";
            ctx.beginPath();
            ctx.strokeStyle = isImportant
              ? `rgba(6, 182, 212, ${alpha * 1.5})`
              : `rgba(167, 139, 250, ${alpha})`;
            ctx.lineWidth = isImportant ? 0.8 : 0.4;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const pulseFactor = 1 + Math.sin(n.pulse) * 0.3;
        const color =
          n.type === "hub"
            ? "rgba(6, 182, 212,"
            : n.type === "gateway"
            ? "rgba(167, 139, 250,"
            : "rgba(148, 163, 184,";

        if (n.type === "hub") {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * pulseFactor * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(6, 182, 212, 0.05)`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = `${color} 0.8)`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
    />
  );
}

const metrics = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "6", label: "Research Papers" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#09090b]" id="hero">
      <NetworkCanvas />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-transparent to-[#09090b]/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
            <span className="font-mono text-xs text-[#71717a] tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8">

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#a78bfa]">
             Ushasri Mogadali
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#71717a] max-w-2xl mb-10 leading-relaxed">
            Software Engineer with 4 years of experience in full-stack development, IoT platforms, and DevOps practices.
Skilled in Python, React.js, PostgreSQL, Docker with experience building production-grade applications, and real
time monitoring solutions. Co-authored multiple research publications and committed to continuous learning,
professional development, and staying updated with latest technologies to drive organizational success.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20">
            <a
              href="#case-studies"
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-white/90 transition-all duration-200"
            >
              View Case Studies
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-white/10 text-white/70 px-6 py-3 rounded text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
<div className="flex items-center gap-3 sm:ml-4">
<div className="relative group">
  <a
    href="tel:+919182708717"
    className="text-[#71717a] hover:text-white transition-colors"
  >
    <Phone size={18} />
  </a>

  <span className="absolute left-1/2 -translate-x-1/2 top-7
                   hidden group-hover:block whitespace-nowrap
                   bg-[#18181b] border border-white/10
                   text-white text-xs px-3 py-2 rounded shadow-lg z-50">
    +91 9182708717
  </span>
</div>

<div className="relative group">
  <a
    href="mailto:ushasrimogadali@gmail.com"
    className="text-[#71717a] hover:text-white transition-colors"
  >
    <Mail size={18} />
  </a>

  <span className="absolute left-1/2 -translate-x-1/2 top-7
                   hidden group-hover:block whitespace-nowrap
                   bg-[#18181b] border border-white/10
                   text-white text-xs px-3 py-2 rounded shadow-lg z-50">
    ushasrimogadali@gmail.com
  </span>
</div>

  <a
    href="https://github.com/ushasricpu"
    target="_blank"
    rel="noreferrer"
    className="text-[#71717a] hover:text-white transition-colors"
  >
    <Github size={18} />
  </a>

  <a
    href="https://linkedin.com/in/ushasri-mogadali"
    target="_blank"
    rel="noreferrer"
    className="text-[#71717a] hover:text-white transition-colors"
  >
    <Linkedin size={18} />
  </a>
</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                  {m.value}
                </div>
                <div className="font-mono text-xs text-[#71717a] tracking-wide uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
