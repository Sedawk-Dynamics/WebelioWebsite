"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { SpinningEarth } from "@/components/spinning-earth"
import {
  Briefcase,
  DollarSign,
  TrendingUp,
  Users,
  Zap,
  Heart,
  Rocket,
  Globe,
  ChevronRight,
  Mail,
  Send,
  ChevronLeft,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

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

  // State for carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const companyImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1-Fr8xopYEFjDBIkLhaviaaPJGVAx9sB.jpg",
      caption: "Our Amazing Team",
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-18%20at%2008.27.37_ef14eb36-NcGPplifEL8a0HPehmDvVqd7Cl7O7n.jpg",
      caption: "Festival Celebrations",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % companyImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [companyImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % companyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + companyImages.length) % companyImages.length)
  }

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

        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">Life at </span>
                <span className="text-webelio-tertiary">Webelio</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
              <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
                Experience the vibrant culture and team spirit that makes Webelio special
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Carousel Container */}
              <div
                className="relative overflow-hidden rounded-3xl"
                onMouseEnter={() => {
                  const interval = setInterval(() => {
                    setCurrentImageIndex((prev) => (prev + 1) % companyImages.length)
                  }, 5000)
                  return () => clearInterval(interval)
                }}
              >
                {/* Images */}
                <div className="relative aspect-[16/9] w-full">
                  {companyImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: currentImageIndex === index ? 1 : 0,
                        scale: currentImageIndex === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.caption}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: currentImageIndex === index ? 1 : 0,
                            y: currentImageIndex === index ? 0 : 20,
                          }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-2xl font-semibold text-white"
                        >
                          {image.caption}
                        </motion.p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:border-webelio-tertiary/50 transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:border-webelio-tertiary/50 transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {companyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === index ? "bg-webelio-tertiary w-8" : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-3xl blur-3xl -z-10 opacity-50" />
            </motion.div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-20 px-4 sm:px-6">
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
                  <Mail className="w-8 h-8 text-webelio-tertiary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  <span className="text-foreground">Ready to </span>
                  <span className="text-webelio-tertiary">Join Us?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We're always looking for talented individuals to join our team. Send us your resume and let's explore
                  opportunities together.
                </p>
                <div className="bg-webelio-tertiary/10 border border-webelio-tertiary/30 rounded-2xl p-6 max-w-md mx-auto">
                  <p className="text-sm text-muted-foreground mb-3">Send your resume to:</p>
                  <a
                    href="mailto:hr@sedawk.in"
                    className="inline-flex items-center gap-2 text-2xl font-semibold text-webelio-tertiary hover:text-webelio-secondary transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    hr@sedawk.in
                  </a>
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium px-8 py-6 text-lg"
                >
                  <a href="mailto:hr@sedawk.in">
                    <Send className="w-5 h-5 mr-2" />
                    Send Your Resume
                  </a>
                </Button>
              </div>
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
                  Join a team of passionate innovators building the future of technology. Send us your resume today and
                  let's create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium px-8 py-4 text-lg"
                  >
                    <a href="mailto:hr@sedawk.in">
                      <Send className="w-5 h-5 mr-2" />
                      Email Your Resume
                    </a>
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
