import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "developer@iiit.ac.in",
      link: "mailto:developer@iiit.ac.in",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/fullstack-developer",
      link: "https://linkedin.com",
      color: "text-blue-700 dark:text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/fullstack-dev",
      link: "https://github.com",
      color: "text-gray-700 dark:text-gray-400",
      bg: "bg-gray-100 dark:bg-gray-900/30",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      link: null,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss opportunities, collaborations, or just connect!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-4 hover:shadow-md transition-shadow">
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group"
                          >
                            <div className={`${info.bg} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                              <info.icon className={`h-5 w-5 ${info.color}`} />
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">
                                {info.label}
                              </div>
                              <div className="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {info.value}
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-3">
                            <div className={`${info.bg} p-3 rounded-lg`}>
                              <info.icon className={`h-5 w-5 ${info.color}`} />
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">
                                {info.label}
                              </div>
                              <div className="text-sm font-medium">
                                {info.value}
                              </div>
                            </div>
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2">
                <h4 className="font-semibold mb-3">Open to Opportunities</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently open to new opportunities in:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5" />
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5" />
                    <span>IoT Solutions Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-pink-600 mt-1.5" />
                    <span>DevOps & CI/CD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5" />
                    <span>Technical Leadership</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 border-2">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
