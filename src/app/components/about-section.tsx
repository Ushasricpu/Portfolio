import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Code, Cpu, Users, Award } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Expertise",
      description: "Proficient in Python, FastAPI, React.js, and PostgreSQL",
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Built production-grade IoT dashboards and real-time monitoring systems",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led and mentored teams of 7 members and multiple interns",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Collaborated with Silicon Labs, BYPL, GIZ, IISc, and MeitY",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist dedicated to building innovative solutions that bridge software engineering and IoT
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-2">
              <h3 className="text-2xl mb-6 text-blue-600 dark:text-blue-400">
                Professional Summary
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a <span className="font-semibold text-foreground">Research Translation Engineer</span> at IIIT Hyderabad's Smart City Research Center with a proven track record of delivering high-impact IoT solutions for smart city applications.
                </p>
                <p>
                  My expertise spans the entire technology stack—from designing robust backend APIs with <span className="font-semibold text-foreground">FastAPI and PostgreSQL</span>, to creating responsive frontends with <span className="font-semibold text-foreground">React.js</span>, and deploying production systems using <span className="font-semibold text-foreground">Docker and Jenkins CI/CD pipelines</span>.
                </p>
                <p>
                  I've successfully developed and deployed systems that monitor <span className="font-semibold text-foreground">300+ connected devices</span>, implemented real-time data visualization dashboards, and conducted comprehensive performance testing using Locust. My work has contributed to research published in <span className="font-semibold text-foreground">4 IEEE conferences</span> and collaborations with leading industry partners.
                </p>
                <p>
                  Beyond technical execution, I bring strong leadership skills—having mentored teams of engineers and interns, fostering collaborative environments that drive innovation and deliver results.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
