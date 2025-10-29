"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Shield,
  Brain,
  Cog,
  Cpu,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  WebDevGraphic,
  MechanicalGraphic,
  SEOGraphic,
  PatentGraphic,
  IoTGraphic,
  DigitalTransformationGraphic,
} from "@/components/animated-service-graphics"

export default function ServicesPage() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile applications for iOS and Android with cutting-edge features",
      features: ["React Native", "Flutter", "iOS & Android Native", "App Store Deployment"],
      price: "Starting at ₹2,00,000",
      graphic: <IoTGraphic />,
      color: "blue",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and frameworks",
      features: ["React & Next.js", "Full-Stack Development", "API Integration", "Database Design"],
      price: "Starting at ₹1,50,000",
      graphic: <WebDevGraphic />,
      color: "emerald",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      price: "Starting at ₹50,000",
      graphic: <SEOGraphic />,
      color: "green",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross Platform Application Development",
      description: "Build once, deploy everywhere with our cross-platform development expertise",
      features: ["React Native", "Flutter", "Xamarin", "Progressive Web Apps"],
      price: "Starting at ₹2,50,000",
      graphic: <DigitalTransformationGraphic />,
      color: "purple",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "IoT & Hardware Solutions",
      description: "Complete IoT ecosystem development with hardware integration and cloud connectivity",
      features: ["Hardware Design", "Sensor Integration", "Cloud Connectivity", "Real-time Monitoring"],
      price: "Starting at ₹3,00,000",
      graphic: <MechanicalGraphic />,
      color: "orange",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers and enhance user experience",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at ₹75,000",
      graphic: <PatentGraphic />,
      color: "pink",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Embedded Solutions",
      description: "Custom embedded systems development for specialized hardware and industrial applications",
      features: ["Microcontroller Programming", "RTOS Development", "Hardware Integration", "Performance Optimization"],
      price: "Starting at ₹2,00,000",
      graphic: <MechanicalGraphic />,
      color: "cyan",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring"],
      price: "Starting at ₹1,00,000",
      graphic: <SEOGraphic />,
      color: "red",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Software Automations",
      description: "Streamline your business processes with intelligent automation solutions",
      features: ["Process Automation", "Workflow Optimization", "Integration Services", "Custom Scripts"],
      price: "Starting at ₹50,000",
      graphic: <DigitalTransformationGraphic />,
      color: "yellow",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Solutions",
      description: "Leverage artificial intelligence and machine learning to transform your business operations",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      price: "Starting at ₹3,50,000",
      graphic: <PatentGraphic />,
      color: "indigo",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We discuss your project requirements and goals",
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "Detailed project scope and timeline delivered",
    },
    {
      step: "03",
      title: "Development",
      description: "Regular updates and milestone deliveries",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Go live with ongoing maintenance and support",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-emerald-500 text-white mb-6">Our Services</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Transform Your </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Digital Future
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              From mobile apps to AI solutions, we deliver cutting-edge technology services that drive growth and
              innovation for businesses across India and globally
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 h-full relative overflow-hidden">
                  {/* Animated Background Graphic */}
                  {service.graphic}

                  <div className="relative z-10">
                    <div className={`text-${service.color}-400 mb-6`}>{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className={`text-${service.color}-400 font-bold text-lg`}>{service.price}</div>
                      <Link href="/consultation">
                        <Button
                          size="sm"
                          className="bg-emerald-500 hover:bg-emerald-600 text-white group-hover:scale-105 transition-transform"
                        >
                          Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <Badge className="bg-blue-500 text-white mb-6">Our Process</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">How We Work</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A proven process that ensures quality delivery and client satisfaction across all our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-black mb-4">Ready to Get Started?</h3>
            <p className="text-black/80 text-xl mb-8">
              Let's discuss your project and bring your vision to life with our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  View Portfolio
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
