import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, LineChart, Activity, GitBranch } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart City IoT Dashboard",
      description: "Comprehensive full-stack IoT platform for monitoring and managing smart city infrastructure. Features real-time data visualization, device management, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBpb3QlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzgxNTU0Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React.js", "FastAPI", "PostgreSQL", "Grafana", "Docker"],
      icon: LineChart,
      metrics: [
        { label: "Devices Monitored", value: "300+" },
        { label: "Data Points/Day", value: "1M+" },
        { label: "Uptime", value: "99.8%" },
      ],
      features: [
        "Real-time device monitoring and control",
        "Interactive data visualization with Grafana",
        "Automated alerts and notifications",
        "Historical data analysis and reporting",
      ],
    },
    {
      title: "Transformer Health Monitoring System",
      description: "Real-time monitoring solution for electrical transformers with predictive maintenance capabilities. Tracks temperature, load, and health metrics to prevent failures.",
      image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2Zvcm1lciUyMGVsZWN0cmljYWwlMjBtb25pdG9yaW5nfGVufDF8fHx8MTc4MTU1NDI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "React.js", "PostgreSQL", "MQTT", "Tableau"],
      icon: Activity,
      metrics: [
        { label: "Transformers", value: "50+" },
        { label: "Alert Accuracy", value: "95%" },
        { label: "Response Time", value: "<2s" },
      ],
      features: [
        "Live transformer health metrics",
        "Predictive maintenance algorithms",
        "Anomaly detection and alerts",
        "Comprehensive analytics dashboard",
      ],
    },
    {
      title: "CI/CD Pipeline for Full Stack Application",
      description: "Automated deployment pipeline using Jenkins and Docker for seamless integration and continuous delivery. Includes automated testing, security scanning, and rollback capabilities.",
      image: "https://images.unsplash.com/photo-1528820624198-03cf9845bec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBjaWNkJTIwcGlwZWxpbmV8ZW58MXx8fHwxNzgxNTU0Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Jenkins", "Docker", "Git", "Locust", "Shell Scripting"],
      icon: GitBranch,
      metrics: [
        { label: "Deploy Time", value: "5 min" },
        { label: "Test Coverage", value: "85%" },
        { label: "Deployments/Week", value: "20+" },
      ],
      features: [
        "Automated build and deployment process",
        "Integrated testing and quality checks",
        "Performance testing with Locust",
        "Containerized microservices deployment",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Production-ready solutions demonstrating expertise in full-stack development, IoT, and DevOps
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <project.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 bg-muted/50 p-4 rounded-lg">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm">
                            <div className="min-w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button variant="default" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </Button>
                      <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
