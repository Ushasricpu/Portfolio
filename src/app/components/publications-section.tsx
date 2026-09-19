import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Calendar, Users, ExternalLink } from "lucide-react";

export function PublicationsSection() {
  const publications = [
    {
      title: "IoT-based Smart City Infrastructure Monitoring and Management System",
      authors: "Research Team, IIIT Hyderabad",
      conference: "IEEE International Conference on Smart Cities and IoT",
      year: 2024,
      type: "Conference Paper",
      abstract: "A comprehensive framework for monitoring and managing smart city infrastructure using IoT devices, real-time analytics, and predictive maintenance algorithms.",
      keywords: ["IoT", "Smart Cities", "Real-time Monitoring", "Predictive Analytics"],
    },
    {
      title: "Real-time Transformer Health Monitoring using Machine Learning",
      authors: "Research Team, IIIT Hyderabad",
      conference: "IEEE Conference on Industrial IoT and Applications",
      year: 2023,
      type: "Conference Paper",
      abstract: "Novel approach to transformer health monitoring using machine learning algorithms for anomaly detection and predictive maintenance in power distribution systems.",
      keywords: ["Machine Learning", "IoT", "Power Systems", "Predictive Maintenance"],
    },
    {
      title: "Scalable CI/CD Framework for IoT Application Deployment",
      authors: "Research Team, IIIT Hyderabad",
      conference: "IEEE International Conference on DevOps and Cloud Computing",
      year: 2023,
      type: "Conference Paper",
      abstract: "A scalable framework for continuous integration and deployment of IoT applications using containerization and automated testing pipelines.",
      keywords: ["CI/CD", "DevOps", "Docker", "IoT", "Automation"],
    },
    {
      title: "Performance Analysis of FastAPI-based Microservices for IoT Platforms",
      authors: "Research Team, IIIT Hyderabad",
      conference: "IEEE Conference on Web Services and APIs",
      year: 2022,
      type: "Conference Paper",
      abstract: "Comprehensive performance analysis of FastAPI framework for building high-throughput microservices in IoT platforms with load testing and optimization strategies.",
      keywords: ["FastAPI", "Microservices", "Performance Testing", "IoT"],
    },
  ];

  return (
    <section id="publications" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">Publications & Research</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contributing to the research community through IEEE conference publications and smart city innovations
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-20" />

            <div className="space-y-8">
              {publications.map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index % 2 === 0 ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-background z-10" />

                  {/* Content */}
                  <Card
                    className={`p-6 border-2 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "" : "lg:col-start-2"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {publication.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{publication.authors}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{publication.year}</span>
                          </div>
                        </div>
                        <Badge className="mb-3 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-300 dark:border-blue-800">
                          {publication.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2 text-blue-600 dark:text-blue-400">
                        Conference:
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {publication.conference}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2 text-blue-600 dark:text-blue-400">
                        Abstract:
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {publication.abstract}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2 text-blue-600 dark:text-blue-400">
                        Keywords:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {publication.keywords.map((keyword, keywordIndex) => (
                          <Badge key={keywordIndex} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      <ExternalLink className="h-4 w-4" />
                      View Publication
                    </button>
                  </Card>

                  {/* Empty space for timeline layout */}
                  {index % 2 === 0 ? (
                    <div className="hidden lg:block" />
                  ) : (
                    <div className="hidden lg:block lg:col-start-1" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-4 gap-6"
          >
            {[
              { label: "Publications", value: "4", icon: BookOpen },
              { label: "IEEE Conferences", value: "4", icon: Calendar },
              { label: "Research Areas", value: "3", icon: Users },
              { label: "Citations", value: "15+", icon: ExternalLink },
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
