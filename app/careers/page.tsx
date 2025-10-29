"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Users,
  Heart,
  Lightbulb,
  Target,
  DollarSign,
  Shield,
  Clock,
  BookOpen,
  Plane,
  Coffee,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react"

export default function CareersPage() {
  const cultureValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve extraordinary results.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We're passionate about technology and creating solutions that make a real difference.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to stay ahead of the curve.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client relationships.",
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours and remote options",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development programs",
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Travel Opportunities",
      description: "International projects and conference attendance opportunities",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Great Perks",
      description: "Free meals, game room, and regular team building activities",
    },
  ]

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description: "Lead development of cutting-edge web applications using modern technologies.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "On-site",
      type: "Full-time",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description: "Create beautiful and intuitive user experiences for our digital products.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      description: "Build and maintain scalable infrastructure for our growing platform.",
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      description: "Drive growth through innovative digital marketing strategies and campaigns.",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "On-site",
      type: "Full-time",
      skills: ["Agile", "Scrum", "Jira", "Stakeholder Management"],
      description: "Lead cross-functional teams to deliver projects on time and within budget.",
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Hybrid",
      type: "Full-time",
      skills: ["Sales", "CRM", "Negotiation", "Client Relations"],
      description: "Identify and develop new business opportunities to drive company growth.",
    },
  ]

  const lifeAtWebelioImages = [
    {
      src: "/images/office-workspace.jpg",
      alt: "Modern office workspace",
      title: "Modern Workspace",
    },
    {
      src: "/images/team-collaboration.jpg",
      alt: "Team collaboration session",
      title: "Team Collaboration",
    },
    {
      src: "/images/office-recreation.jpg",
      alt: "Office recreation area",
      title: "Recreation Area",
    },
    {
      src: "/images/team-outing.jpg",
      alt: "Team outing activity",
      title: "Team Outings",
    },
    {
      src: "/images/office-celebration.jpg",
      alt: "Office celebration event",
      title: "Celebrations",
    },
    {
      src: "/images/learning-session.jpg",
      alt: "Learning and development session",
      title: "Learning Sessions",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-webelio-primary via-webelio-primary/95 to-webelio-primary/90">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-webelio-secondary mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of digital innovation with us. We're looking for passionate individuals who want to make
              a difference in the world of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-webelio-secondary text-webelio-primary hover:bg-webelio-secondary/90 font-semibold"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-webelio-secondary text-webelio-secondary hover:bg-webelio-secondary hover:text-webelio-primary bg-transparent"
              >
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture & Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-webelio-secondary mb-4">Our Culture & Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We foster an environment where creativity thrives, innovation flourishes, and every team member can reach
              their full potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-webelio-secondary mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Webelio */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-webelio-secondary mb-4">Life at Webelio</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Take a glimpse into our vibrant workplace culture, collaborative environment, and the amazing experiences
              we share together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeAtWebelioImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-webelio-secondary mb-4">Benefits & Perks</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and exciting perks that make
              work enjoyable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-webelio-secondary mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-webelio-secondary mb-4">Open Positions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover exciting career opportunities and find the perfect role to grow your skills and advance your
              career with us.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {position.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{position.description}</p>

                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-webelio-secondary/20 text-webelio-secondary border-webelio-secondary/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-webelio-secondary text-webelio-primary hover:bg-webelio-secondary/90 font-medium">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-webelio-secondary mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals. Send us your resume and
              let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-webelio-secondary text-webelio-primary hover:bg-webelio-secondary/90 font-semibold"
                >
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/consultation">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-webelio-secondary text-webelio-secondary hover:bg-webelio-secondary hover:text-webelio-primary bg-transparent"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
