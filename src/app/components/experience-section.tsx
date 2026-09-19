import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";

export function ExperienceSection() {
  const achievements = [
    {
      icon: TrendingUp,
      title: "IoT Dashboard Development",
      description: "Developed and deployed production-grade IoT dashboards for smart city applications",
    },
    {
      icon: Zap,
      title: "Device Monitoring",
      description: "Supported real-time monitoring of 300+ connected IoT devices",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led and mentored a team of 7 members and multiple interns",
    },
  ];

  const responsibilities = [
    "Designed and implemented full-stack IoT solutions using React.js, FastAPI, and PostgreSQL",
    "Built and maintained Jenkins CI/CD pipelines for automated deployment and testing",
    "Deployed containerized applications using Docker for scalable production environments",
    "Conducted comprehensive performance testing using Locust to ensure system reliability",
    "Developed real-time data visualization dashboards using Grafana and custom React components",
    "Collaborated with industry partners: Silicon Labs, BYPL, GIZ, IISc Bangalore, and MeitY",
    "Implemented RESTful APIs with JWT authentication for secure data access",
    "Mentored junior developers and interns on best practices and modern development workflows",
  ];

  const technologies = [
    "React.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Jenkins",
    "Grafana", "Locust", "REST APIs", "JWT", "Git", "CI/CD"
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-2 border-blue-200 dark:border-blue-900">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Research Translation Engineer
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span>IIIT Hyderabad – Smart City Research Center</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2022 – Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Hyderabad, India</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-300 dark:border-green-800 px-4 py-1 w-fit">
                  Current Role
                </Badge>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Key Achievements</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
                        <achievement.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                        <h5 className="font-semibold text-sm mb-2">{achievement.title}</h5>
                        <p className="text-xs text-muted-foreground">
                          {achievement.description}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Key Responsibilities</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="min-w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5" />
                      <span className="text-muted-foreground">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge variant="outline" className="px-3 py-1">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Industry Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-6"
          >
            <h4 className="font-semibold mb-4 text-center">Industry Collaborations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Silicon Labs", "BYPL", "GIZ", "IISc Bangalore", "MeitY"].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-sm font-medium"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
