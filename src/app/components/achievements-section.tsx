import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Trophy, Award, Star, Zap } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "International oneM2M Hackathon Winner",
      organization: "oneM2M Partnership Project",
      year: "2023",
      description: "First place winner in the international oneM2M IoT standards hackathon, developing innovative solutions for smart city applications using the oneM2M standard framework.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
      textColor: "text-yellow-600 dark:text-yellow-400",
      highlights: [
        "Competed against 50+ international teams",
        "Developed oneM2M-compliant IoT solution",
        "Recognized for innovation and technical excellence",
      ],
    },
    {
      icon: Award,
      title: "Silicon Labs Recognition Award",
      organization: "Silicon Labs",
      year: "2023",
      description: "Recognized by Silicon Labs for outstanding contribution to IoT platform development and successful collaboration on smart city projects.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
      highlights: [
        "Excellence in IoT platform development",
        "Successful industry-academia collaboration",
        "Contribution to smart city solutions",
      ],
    },
    {
      icon: Star,
      title: "Leadership Excellence Certification",
      organization: "IIIT Hyderabad",
      year: "2024",
      description: "Awarded for demonstrating exceptional leadership skills in managing cross-functional teams and mentoring junior developers and interns.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
      highlights: [
        "Led team of 7+ engineers successfully",
        "Mentored multiple interns and junior developers",
        "Demonstrated effective project management",
      ],
    },
    {
      icon: Zap,
      title: "Research Excellence Award",
      organization: "Smart City Research Center",
      year: "2022",
      description: "Recognized for significant contributions to smart city research through innovative IoT solutions and impactful publications.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
      highlights: [
        "4 IEEE conference publications",
        "Innovative IoT platform development",
        "Real-world impact on smart city projects",
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">Achievements & Recognition</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognized for excellence in IoT development, research, and leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${achievement.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className={`h-8 w-8 ${achievement.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">
                        {achievement.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span>{achievement.organization}</span>
                        <span>•</span>
                        <span className={`font-semibold ${achievement.textColor}`}>
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {achievement.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className={`font-semibold text-sm mb-3 ${achievement.textColor}`}>
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className={`min-w-1.5 h-1.5 rounded-full ${achievement.bgColor} ${achievement.textColor} mt-1.5`} />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 border-2">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  4
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Major Awards
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Industry Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  7+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Team Members Led
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  4
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  IEEE Publications
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
