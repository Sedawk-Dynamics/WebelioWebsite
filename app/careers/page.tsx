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
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export default function CareersPage() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
  
  // Company images with varied sizes - carefully arranged to fill gaps
  // Layout pattern: Each row should sum to 4 columns on desktop, 3 on tablet, 2 on mobile
  const companyImages = [
    {
      url: "/images/careers-images/pic1.jpg",
      caption: "Team Celebration",
      mobileSpan: "col-span-2 row-span-2",
      desktopSpan: "lg:col-span-2 lg:row-span-2",
    },
    {
      url: "/images/careers-images/DSC08767.jpg",
      caption: "Team Photo",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/IMG_0190.jpg",
      caption: "Team Moments",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-2",
    },
    {
      url: "/images/careers-images/PXL_20250907_055558675.jpg",
      caption: "Office Gathering",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/PXL_20250802_090301905.jpg",
      caption: "Team Together",
      mobileSpan: "col-span-2 row-span-1",
      desktopSpan: "lg:col-span-2 lg:row-span-1",
    },
    {
      url: "/images/careers-images/PXL_20250802_070751728.jpg",
      caption: "Special Moments",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/PXL_20250712_124629748.jpg",
      caption: "Happy Times",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/20250707_175251.jpg",
      caption: "Team Spirit",
      mobileSpan: "col-span-2 row-span-1",
      desktopSpan: "lg:col-span-2 lg:row-span-1",
    },
    {
      url: "/images/careers-images/PXL_20250627_142325747.jpg",
      caption: "Office Life",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/20250623_183809.jpg",
      caption: "Memories",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/PXL_20250620_085606706.jpg",
      caption: "Team Gathering",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-2",
    },
    {
      url: "/images/careers-images/PXL_20250513_060742970.jpg",
      caption: "Team Together",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/PXL_20250509_122504467.jpg",
      caption: "Office Fun",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/PXL_20250505_141349262.jpg",
      caption: "Team Outing",
      mobileSpan: "col-span-2 row-span-1",
      desktopSpan: "lg:col-span-2 lg:row-span-1",
    },
    {
      url: "/images/careers-images/WhatsApp Image 2025-10-18 at 08.27.37_ef14eb36.jpg",
      caption: "Office Gathering",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/WhatsApp Image 2025-10-18 at 08.27.12_59be8112.jpg",
      caption: "Birthday Party",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/WhatsApp Image 2025-10-18 at 08.54.21_e2e96a9e.jpg",
      caption: "Team Celebration",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/WhatsApp Image 2025-08-02 at 19.52.49_872c91e2.jpg",
      caption: "Team Fun",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/WhatsApp Image 2025-08-02 at 19.52.51_cfb685fa.jpg",
      caption: "Office Life",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/WhatsApp Image 2025-07-08 at 00.55.08_81d613ae.jpg",
      caption: "Happy Times",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-2",
    },
    {
      url: "/images/careers-images/WhatsApp Image 2025-06-20 at 22.08.59_75ce6f0b.jpg",
      caption: "Memories",
      mobileSpan: "col-span-1 row-span-1",
      desktopSpan: "lg:col-span-1 lg:row-span-1",
    },
    {
      url: "/images/careers-images/WhatsApp Image 2025-06-20 at 22.09.02_7b1a01ef.jpg",
      caption: "Life at Webelio",
      mobileSpan: "col-span-2 row-span-1",
      desktopSpan: "lg:col-span-2 lg:row-span-1",
    },
  ]
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
              className="relative"
            >
              {/* Collage Grid Container */}
              <div className="relative overflow-hidden rounded-3xl bg-background/20 backdrop-blur-sm border border-border/50 p-1 sm:p-2">
                {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns - Varied sizes with dense packing to fill gaps */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 auto-rows-[minmax(150px,auto)]" style={{ gridAutoFlow: 'dense' }}>
                  {companyImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.05 * (index % 10) }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredImage(index)}
                      onMouseLeave={() => setHoveredImage(null)}
                      className={`relative group overflow-hidden rounded-lg sm:rounded-xl cursor-pointer ${image.mobileSpan} ${image.desktopSpan} min-h-[150px] sm:min-h-[180px] z-10`}
                    >
                        <div className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl">
                          {imageErrors.has(index) ? (
                            <div className="w-full h-full bg-background/20 flex items-center justify-center">
                              <p className="text-muted-foreground text-xs">Image unavailable</p>
                            </div>
                          ) : (
                            <Image
                              src={image.url || "/placeholder.svg"}
                              alt={image.caption}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              priority={index < 6}
                              loading={index < 6 ? undefined : "lazy"}
                              quality={index < 6 ? 90 : 80}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                              fetchPriority={index < 6 ? "high" : "auto"}
                              onError={() => {
                                setImageErrors(prev => new Set(prev).add(index))
                              }}
                              unoptimized={image.url?.includes('DSC08767')}
                            />
                          )}
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                          
                          {/* Caption */}
                          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 z-10">
                            <p className="text-white font-semibold text-xs sm:text-sm lg:text-base drop-shadow-lg">
                              {image.caption}
                            </p>
                          </div>
                          
                          {/* Hover effect border */}
                          <div className="absolute inset-0 border-2 border-webelio-tertiary/0 group-hover:border-webelio-tertiary/50 rounded-lg sm:rounded-xl transition-all duration-300 pointer-events-none" />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Enlarged Image Overlay on Hover */}
              {hoveredImage !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
                  style={{
                    background: "rgba(0, 0, 0, 0.75)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="relative flex items-center justify-center p-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative w-[600px] h-[450px] sm:w-[700px] sm:h-[500px] lg:w-[800px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 border-webelio-tertiary/40 bg-black/60"
                    >
                      <Image
                        src={companyImages[hoveredImage].url || "/placeholder.svg"}
                        alt={companyImages[hoveredImage].caption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 600px, (max-width: 1024px) 700px, 800px"
                        quality={90}
                        priority
                        fetchPriority="high"
                      />
                      {/* Caption overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                        <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl drop-shadow-lg text-center">
                          {companyImages[hoveredImage].caption}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/10 to-webelio-secondary/10 rounded-3xl blur-3xl -z-10 opacity-50" />
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
