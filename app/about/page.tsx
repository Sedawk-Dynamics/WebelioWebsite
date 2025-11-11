"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { SpinningEarth } from "@/components/spinning-earth"
import { Users, Target, Award, Globe, Rocket, Shield, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "5+", icon: Award },
    { label: "Projects Delivered", value: "500+", icon: Rocket },
    { label: "Global Clients", value: "300+", icon: Globe },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver solutions that are ahead of the curve.",
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description:
        "Your data security and privacy are paramount. We build with security-first principles at every step.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We partner with you to understand your needs and exceed expectations.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our diverse team of specialists brings decades of combined experience across all technology domains.",
    },
  ]

  const timeline = [
    { year: "2019", title: "Founded", description: "Webelio started as a vision to transform digital experiences" },
    { year: "2020", title: "Global Expansion", description: "Expanded services to serve clients across 20+ countries" },
    { year: "2021", title: "AI/ML Innovation", description: "Launched specialized AI and machine learning practice" },
    { year: "2022", title: "IoT Solutions", description: "Pioneered IoT and hardware integration services" },
    { year: "2023", title: "500+ Projects", description: "Reached milestone of 500+ successful project deliveries" },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as leading IT solutions provider in APAC region",
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-foreground">About </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-webelio-tertiary to-webelio-secondary">
                  Webelio
                </span>
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We are a global IT and software solutions firm delivering innovative digital experiences since 2019. A
                brand of Sedawk Dynamics Pvt Ltd.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center space-y-2 hover:border-webelio-tertiary/50 transition-colors">
                    <stat.icon className="w-8 h-8 mx-auto text-webelio-tertiary" />
                    <div className="text-4xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="text-foreground">Our </span>
                  <span className="text-webelio-tertiary">Mission</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    At Webelio, we're on a mission to empower businesses worldwide with cutting-edge technology
                    solutions that drive growth and innovation.
                  </p>
                  <p>
                    We believe in building scalable, future-ready digital solutions that not only meet today's needs but
                    anticipate tomorrow's challenges. From mobile apps to AI/ML solutions, from web development to IoT
                    hardware integration, we bring expertise across the entire technology spectrum.
                  </p>
                  <p>
                    Our commitment is to deliver excellence, foster innovation, and build lasting partnerships with our
                    clients as they navigate their digital transformation journey.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative bg-background/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
                  <img
                    src="/modern-tech-office-teamwork-collaboration.jpg"
                    alt="Webelio Team"
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                <span className="text-foreground">Our </span>
                <span className="text-webelio-tertiary">Values</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
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
                      <value.icon className="w-6 h-6 text-webelio-tertiary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="text-webelio-tertiary">Journey</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
            </motion.div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-webelio-tertiary/50 via-webelio-tertiary to-webelio-tertiary/50 hidden md:block" />
                  <div className="md:ml-12 bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-webelio-tertiary/50 transition-colors">
                    <div className="absolute -left-3 top-6 w-6 h-6 bg-webelio-tertiary rounded-full border-4 border-black hidden md:block group-hover:scale-125 transition-transform" />
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="text-3xl font-bold text-webelio-tertiary min-w-[100px]">{item.year}</div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Gallery Carousel Section */}
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
                <span className="text-foreground">Our </span>
                <span className="text-webelio-tertiary">Team & Culture</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                A glimpse into our vibrant workspace and the amazing people who make Webelio a great place to work
              </p>
            </motion.div>

            <CompanyCarousel />
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
              <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-3xl blur-3xl opacity-50" />
              <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  <span className="text-foreground">Ready to build something </span>
                  <span className="text-webelio-tertiary">amazing?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Let's discuss how we can help transform your vision into reality with innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link
                    href="/consultation"
                    className="px-8 py-4 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary text-webelio-primary rounded-lg font-medium hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 transition-all transform hover:scale-105"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-4 bg-background/50 border border-border/50 text-foreground rounded-lg font-medium hover:border-webelio-tertiary/50 transition-all"
                  >
                    View Our Work
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

// CompanyCarousel component
function CompanyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic1-ULZVffzxxf4BRiMgZTNPU4eZQkBml4.jpg",
      alt: "Webelio team celebrating together in the office",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-18%20at%2008.27.37_ef14eb36-vyrSMHQ1HiJeWff3K6tcmfseXxp8ZM.jpg",
      alt: "Festival celebrations at Webelio office",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-18%20at%2008.27.14_489802c0-pL08osjj8nahWgwMUwjt9VaEztm78c.jpg",
      alt: "Team members bonding during festival celebrations",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-18%20at%2008.54.21_e2e96a9e-l9d3AjeI6tvRG27QXBglDwDuzU0BrJ.jpg",
      alt: "Celebrating achievements and milestones",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-03%20at%2021.18.01_3be246e5-OH5Re90ggF8lVCUYqJNEkvNezMn6uC.jpg",
      alt: "Team appreciation and recognition moments",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-18%20at%2008.27.12_59be8112-CYe5z6k3W5I8Ah7PmOuWQaSYHe48KA.jpg",
      alt: "Celebrating festivals with sky lanterns",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-3xl blur-3xl opacity-50" />

      <div className="relative bg-background/30 backdrop-blur-sm border border-border/50 rounded-3xl p-4 sm:p-8">
        {/* Main carousel container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          {/* Images */}
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 border border-webelio-tertiary/30"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 border border-webelio-tertiary/30"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                index === currentIndex
                  ? "w-8 h-2 bg-webelio-tertiary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              } rounded-full`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
