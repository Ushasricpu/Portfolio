import { useState } from "react";
import { Send, Github, Linkedin, FileText, MapPin, Mail } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent — I'll reply within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="font-mono text-xs text-[#71717a] tracking-widest uppercase mb-4">
              09 / Contact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Let's build something meaningful.
            </h2>
            <p className="text-[#71717a] leading-relaxed mb-10 max-w-md">
              Open to senior full stack engineering roles, IoT platform architecture, and
              research collaborations. Based in Hyderabad — available globally.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-[#71717a]">
                <Mail size={16} className="text-[#06b6d4]" />
                <span>rajesh.kumar@iiit.ac.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#71717a]">
                <MapPin size={16} className="text-[#06b6d4]" />
                <span>Hyderabad, India — Open to Relocation</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-sm text-[#71717a] hover:border-white/20 hover:text-white transition-all"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-sm text-[#71717a] hover:border-white/20 hover:text-white transition-all"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-sm text-[#71717a] hover:border-white/20 hover:text-white transition-all"
              >
                <FileText size={15} />
                Resume
              </a>
            </div>
          </div>

          <div className="border border-white/5 rounded-xl bg-[#0f0f14] p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-[#71717a] uppercase tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#09090b] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#06b6d4]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#71717a] uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="you@company.com"
                    className="w-full bg-[#09090b] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#06b6d4]/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-xs text-[#71717a] uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="What are you building? What role are you hiring for?"
                  className="w-full bg-[#09090b] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#06b6d4]/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-lg text-sm font-medium hover:bg-white/90 disabled:opacity-50 transition-all"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#71717a]">
            © 2024 Rajesh Kumar — Full Stack Engineer
          </div>
          <div className="font-mono text-xs text-[#71717a]">
            IIIT Hyderabad · Smart City Research Center
          </div>
        </div>
      </div>
    </section>
  );
}
