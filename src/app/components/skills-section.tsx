import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Code, Server, Database, Container, BarChart, Wrench } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "blue",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 85 },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "purple",
      skills: [
        { name: "Python", level: 92 },
        { name: "FastAPI", level: 90 },
        { name: "REST APIs", level: 88 },
        { name: "JWT Authentication", level: 85 },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "green",
      skills: [
        { name: "PostgreSQL", level: 87 },
        { name: "SQL", level: 85 },
        { name: "Database Design", level: 82 },
      ],
    },
    {
      icon: Container,
      title: "DevOps & CI/CD",
      color: "orange",
      skills: [
        { name: "Docker", level: 88 },
        { name: "Jenkins", level: 85 },
        { name: "Git", level: 90 },
        { name: "CI/CD Pipelines", level: 86 },
      ],
    },
    {
      icon: BarChart,
      title: "Monitoring & Visualization",
      color: "pink",
      skills: [
        { name: "Grafana", level: 84 },
        { name: "Tableau", level: 80 },
        { name: "Data Visualization", level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "indigo",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 88 },
        { name: "Locust", level: 82 },
      ],
    },
  ];

  const technologies = [
    "React.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Jenkins",
    "JavaScript", "HTML5", "CSS3", "Git", "REST APIs", "JWT",
    "Grafana", "Tableau", "GitHub", "Postman", "Locust", "CI/CD",
    "IoT", "Real-time Systems", "Performance Testing"
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400", border: "border-l-blue-600" },
      purple: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400", border: "border-l-purple-600" },
      green: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400", border: "border-l-green-600" },
      orange: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400", border: "border-l-orange-600" },
      pink: { bg: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-600 dark:text-pink-400", border: "border-l-pink-600" },
      indigo: { bg: "bg-indigo-100 dark:bg-indigo-900/30", text: "text-indigo-600 dark:text-indigo-400", border: "border-l-indigo-600" },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and production-ready applications
          </p>
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 h-full border-l-4 ${colorClasses.border} hover:shadow-lg transition-shadow duration-300`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${colorClasses.bg} p-3 rounded-lg`}>
                      <category.icon className={`h-6 w-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2 text-sm">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Expertise</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
