"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { SpinningEarth } from "@/components/spinning-earth"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Zap,
  Heart,
  Rocket,
  Globe,
  Award,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement with mentorship programs and skill development",
    },
    {
      icon: DollarSign,
      title: "Competitive Package",
      description: "Industry-leading salary, performance bonuses, and comprehensive benefits",
    },
    {
      icon: Globe,
      title: "Global Projects",
      description: "Work on cutting-edge projects for clients across 20+ countries worldwide",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a diverse team of experts in an inclusive and supportive environment",
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "Work with the newest tools, frameworks, and technologies in the industry",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours, remote options, and generous time-off policies",
    },
  ]

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Gurugram / Remote",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: "Mobile App Developer (React Native)",
      department: "Engineering",
      location: "Gurugram / Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React Native", "iOS", "Android", "Firebase"],
    },
    {
      title: "AI/ML Engineer",
      department: "Data Science",
      location: "Gurugram / Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Gurugram / Remote",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Gurugram / Remote",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    },
    {
      title: "IoT Solutions Architect",
      department: "Engineering",
      location: "Gurugram",
      type: "Full-time",
      experience: "5-7 years",
      skills: ["Arduino", "Raspberry Pi", "MQTT", "Cloud IoT"],
    },
  ]

  const hiringProcess = [
    {
      step: "01",
      title: "Application",
      description: "Submit your resume and portfolio through our careers portal",
    },
    {
      step: "02",
      title: "Screening",
      description: "Initial review of your application and phone screening",
    },
    {
      step: "03",
      title: "Technical Round",
      description: "Technical assessment and coding challenges relevant to the role",
    },
    {
      step: "04",
      title: "Team Interview",
      description: "Meet the team and discuss your experience and approach",
    },
    {
      step: "05",
      title: "Final Round",
      description: "Culture fit discussion and offer negotiation",
    },
  ]

  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        <div className="opacity-10">
          <SpinningEarth />
        </div>
        <div className="opacity-10">
          <CodeRain />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavBar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-webelio-tertiary/10 border border-webelio-tertiary/30 rounded-full text-sm text-webelio-tertiary mb-4">
                <Briefcase className="w-4 h-4" />
                <span>We're Hiring!</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-foreground">Join Our </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-webelio-tertiary to-webelio-secondary">
                  Team
                </span>
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Build the future of technology with us. Work on innovative projects that make a real impact for
                businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  onClick={() => document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium px-8 py-6 text-lg"
                >
                  View Open Positions
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-webelio-tertiary/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">Why Choose </span>
                <span className="text-webelio-tertiary">Webelio</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
              <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
                We believe in empowering our team members to do their best work and grow their careers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-webelio-tertiary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-4 hover:border-webelio-tertiary/50 transition-colors h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-webelio-tertiary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">Open </span>
                <span className="text-webelio-tertiary">Positions</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
              <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
                Explore exciting opportunities across various departments
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-webelio-tertiary/50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                          <span className="inline-flex items-center px-3 py-1 bg-webelio-tertiary/20 border border-webelio-tertiary/30 rounded-full text-xs text-webelio-tertiary w-fit">
                            {position.department}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>{position.experience}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-background/50 border border-border/50 rounded-lg text-xs text-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link href="/consultation">
                        <Button className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium whitespace-nowrap">
                          Apply Now
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">Don't see the right role? We're always looking for talent!</p>
              <Link href="/consultation">
                <Button
                  variant="outline"
                  className="border-webelio-tertiary/50 text-webelio-tertiary hover:bg-webelio-tertiary/10 bg-transparent"
                >
                  Send Us Your Resume
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Hiring Process Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-webelio-tertiary/5 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">Hiring </span>
                <span className="text-webelio-tertiary">Process</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
              <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
                Our streamlined process designed to help us get to know you better
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-webelio-tertiary/50 via-webelio-tertiary to-webelio-tertiary/50 hidden md:block" />

              <div className="space-y-8">
                {hiringProcess.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary rounded-full flex items-center justify-center text-webelio-primary font-bold text-xl group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-webelio-tertiary/50 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Rocket className="w-8 h-8 text-webelio-tertiary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  <span className="text-foreground">Ready to start your journey </span>
                  <span className="text-webelio-tertiary">with us?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Join a team of passionate innovators building the future of technology. Apply today and let's create
                  something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    onClick={() => document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium px-8 py-4 text-lg"
                  >
                    Browse Openings
                  </Button>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-border/50 text-foreground hover:border-webelio-tertiary/50 px-8 py-4 text-lg bg-transparent"
                    >
                      Learn About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
