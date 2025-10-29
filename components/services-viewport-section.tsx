"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  Globe,
  Smartphone,
  ArrowRight,
  Star,
  TrendingUpIcon,
  UsersIcon,
  Award,
  Zap,
  Shield,
  Rocket,
  Target,
  BarChart,
  Lightbulb,
  Layers,
  Code,
  Lock,
  Gauge,
  ActivityIcon,
  BrainIcon,
  PaletteIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "website",
    title: "Website Development",
    subtitle: "Modern, Fast & Scalable",
    description:
      "Transform your digital presence with cutting-edge websites that convert visitors into customers. Built with the latest technologies for maximum performance and user experience.",
    icon: <Globe className="w-8 h-8" />,
    features: [
      { icon: <Rocket className="w-5 h-5" />, text: "Lightning-fast loading speeds" },
      { icon: <Shield className="w-5 h-5" />, text: "Enterprise-grade security" },
      { icon: <Target className="w-5 h-5" />, text: "Conversion-optimized design" },
      { icon: <Gauge className="w-5 h-5" />, text: "99.9% uptime guarantee" },
    ],
    stats: [
      { label: "Average Speed Increase", value: "340%" },
      { label: "Conversion Rate Boost", value: "127%" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
    accentColor: "text-blue-400",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform",
    description:
      "Create powerful mobile experiences that engage users and drive business growth. From concept to app store, we deliver apps that users love and businesses depend on.",
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      { icon: <UsersIcon className="w-5 h-5" />, text: "Cross-platform compatibility" },
      { icon: <Zap className="w-5 h-5" />, text: "Real-time synchronization" },
      { icon: <Lock className="w-5 h-5" />, text: "Advanced security features" },
      { icon: <BarChart className="w-5 h-5" />, text: "Built-in analytics" },
    ],
    stats: [
      { label: "App Store Rating", value: "4.8★" },
      { label: "User Retention", value: "85%" },
      { label: "Development Speed", value: "2x Faster" },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-purple-500 via-pink-400 to-purple-600",
    bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
    accentColor: "text-purple-400",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Growth & Engagement",
    description:
      "Amplify your brand's reach with data-driven digital marketing strategies that drive traffic, generate leads, and maximize ROI across all digital channels.",
    icon: <TrendingUpIcon className="w-8 h-8" />,
    features: [
      { icon: <Target className="w-5 h-5" />, text: "Targeted advertising campaigns" },
      { icon: <BarChart className="w-5 h-5" />, text: "Performance analytics" },
      { icon: <UsersIcon className="w-5 h-5" />, text: "Audience segmentation" },
      { icon: <Zap className="w-5 h-5" />, text: "Conversion optimization" },
    ],
    stats: [
      { label: "Average ROI", value: "450%" },
      { label: "Lead Generation", value: "300%" },
      { label: "Brand Awareness", value: "85%" },
    ],
    technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO Tools", "CRM"],
    gradient: "from-emerald-500 via-teal-400 to-emerald-600",
    bgGradient: "from-emerald-500/20 via-teal-400/10 to-emerald-600/20",
    accentColor: "text-emerald-400",
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    subtitle: "Visual Identity & Branding",
    description:
      "Create stunning visual identities that capture your brand essence and communicate your message effectively across all touchpoints and marketing materials.",
    icon: <PaletteIcon className="w-8 h-8" />,
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "Creative brand concepts" },
      { icon: <Layers className="w-5 h-5" />, text: "Multi-format designs" },
      { icon: <Award className="w-5 h-5" />, text: "Print & digital ready" },
      { icon: <Target className="w-5 h-5" />, text: "Brand consistency" },
    ],
    stats: [
      { label: "Brand Recognition", value: "89%" },
      { label: "Design Satisfaction", value: "96%" },
      { label: "Project Delivery", value: "48hrs" },
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva Pro", "Illustrator"],
    gradient: "from-orange-500 via-red-400 to-orange-600",
    bgGradient: "from-orange-500/20 via-red-400/10 to-orange-600/20",
    accentColor: "text-orange-400",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    subtitle: "Community & Engagement",
    description:
      "Build thriving online communities and drive engagement with strategic social media campaigns that turn followers into loyal customers and brand advocates.",
    icon: <UsersIcon className="w-8 h-8" />,
    features: [
      { icon: <ActivityIcon className="w-5 h-5" />, text: "Content strategy & planning" },
      { icon: <UsersIcon className="w-5 h-5" />, text: "Community management" },
      { icon: <BarChart className="w-5 h-5" />, text: "Social media analytics" },
      { icon: <Zap className="w-5 h-5" />, text: "Influencer partnerships" },
    ],
    stats: [
      { label: "Engagement Rate", value: "12.5%" },
      { label: "Follower Growth", value: "280%" },
      { label: "Content Reach", value: "2M+" },
    ],
    technologies: ["Meta Business", "LinkedIn Ads", "Twitter API", "TikTok Ads", "Hootsuite"],
    gradient: "from-indigo-500 via-purple-400 to-indigo-600",
    bgGradient: "from-indigo-500/20 via-purple-400/10 to-indigo-600/20",
    accentColor: "text-indigo-400",
  },
  {
    id: "ai-ml",
    title: "AI/ML Solutions",
    subtitle: "Intelligence & Automation",
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create intelligent solutions that drive innovation.",
    icon: <BrainIcon className="w-8 h-8" />,
    features: [
      { icon: <BrainIcon className="w-5 h-5" />, text: "Machine learning models" },
      { icon: <Code className="w-5 h-5" />, text: "Natural language processing" },
      { icon: <ActivityIcon className="w-5 h-5" />, text: "Predictive analytics" },
      { icon: <Zap className="w-5 h-5" />, text: "Process automation" },
    ],
    stats: [
      { label: "Accuracy Rate", value: "94%" },
      { label: "Process Efficiency", value: "75%" },
      { label: "Cost Reduction", value: "60%" },
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Python"],
    gradient: "from-pink-500 via-rose-400 to-pink-600",
    bgGradient: "from-pink-500/20 via-rose-400/10 to-pink-600/20",
    accentColor: "text-pink-400",
  },
]

export function ServicesViewportSection() {
  const [activeService, setActiveService] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])
  const router = useRouter()

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = serviceRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveService(index)
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" },
    )

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigateToProjects = () => {
    router.push("/projects")
  }

  const scrollToService = (index: number) => {
    serviceRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* Dot Navigation - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => scrollToService(index)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeService === index
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/30 hover:bg-white/60 hover:scale-110"
              }`}
            >
              {/* Tooltip */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-white/20">
                  {service.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700 mb-6 backdrop-blur-sm"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Premium Services</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">Services That </span>
            <span className="text-white font-light italic">Transform</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to accelerate your business growth and digital transformation
          </p>
        </motion.div>

        <div className="relative">
          {/* Services Content */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="min-h-[80vh] flex items-center"
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <motion.div
                    className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div>
                      <motion.div
                        className={`inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full border border-white/10 mb-6`}
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      >
                        <div className={service.accentColor}>{service.icon}</div>
                        <span className={`text-sm font-medium ${service.accentColor}`}>{service.subtitle}</span>
                      </motion.div>

                      <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">{service.title}</h3>

                      <p className="text-lg text-gray-300 leading-relaxed mb-8">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: false }}
                          className="flex items-center space-x-3"
                        >
                          <div className={service.accentColor}>{feature.icon}</div>
                          <span className="text-gray-300">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {service.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: statIndex * 0.1 }}
                          viewport={{ once: false }}
                          className={`text-center p-4 bg-gradient-to-br ${service.bgGradient} rounded-xl border border-white/10`}
                        >
                          <div className={`text-2xl font-bold ${service.accentColor} mb-1`}>{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          viewport={{ once: false }}
                        >
                          <Badge
                            className={`bg-gradient-to-r ${service.bgGradient} ${service.accentColor} border-white/20 hover:border-white/30`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Arrow Navigation */}
                    {index === services.length - 1 && (
                      <motion.div
                        className="flex items-center space-x-4 pt-8"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={handleNavigateToProjects}
                          className="group flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full transition-all duration-300"
                        >
                          <span className="text-white font-medium">View Our Projects</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                        </button>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Enhanced UI Graphics */}
                  <motion.div
                    className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <ServiceUIGraphic service={service} index={index} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced UI Graphics Components
function ServiceUIGraphic({ service, index }: { service: any; index: number }) {
  const getServiceGraphic = () => {
    switch (service.id) {
      case "website":
        return <WebsiteUIGraphic service={service} />
      case "mobile":
        return <MobileUIGraphic service={service} />
      case "digital-marketing":
        return <DigitalMarketingUIGraphic service={service} />
      case "graphic-design":
        return <GraphicDesigningUIGraphic service={service} />
      case "social-media":
        return <SocialMediaUIGraphic service={service} />
      case "ai-ml":
        return <AIMLUIGraphic service={service} />
      default:
        return <WebsiteUIGraphic service={service} />
    }
  }

  return (
    <div className="relative">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Main UI Container */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 overflow-hidden shadow-2xl">
        {getServiceGraphic()}
      </div>
    </div>
  )
}

function WebsiteUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Browser Window */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl">
        <div className="flex items-center space-x-2 px-4 py-3 bg-gray-200">
          <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-gray-700 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          <div className="flex-1 bg-white rounded px-3 py-1 ml-4 shadow-inner">
            <span className="text-xs text-gray-600">https://yourwebsite.com</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-300 rounded hover:bg-gray-400 transition-colors"></div>
            <div className="w-4 h-4 bg-gray-300 rounded hover:bg-gray-400 transition-colors"></div>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-white to-gray-50 min-h-[200px]">
          <div className="space-y-4">
            <motion.div
              className="h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-3/4 shadow-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
            <div className="h-3 bg-gray-300 rounded w-full shadow-sm"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3 shadow-sm"></div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-16 bg-gradient-to-br from-gray-200 to-gray-100 rounded shadow-md hover:shadow-lg transition-shadow"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Speed Score</span>
            <Gauge className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">98/100</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "98%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Uptime</span>
            <ActivityIcon className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">99.9%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "99.9%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MobileUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Phone Mockup */}
      <div className="relative">
        <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 text-xs">
              <span className="font-medium">9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4">
              <motion.div
                className="h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-3/4 shadow-sm"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-300 rounded w-full shadow-sm"></div>
                <div className="h-2 bg-gray-300 rounded w-2/3 shadow-sm"></div>
              </div>

              {/* Interactive Cards */}
              <div className="space-y-3 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-sm"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
              <div className="flex justify-around">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`w-6 h-6 rounded ${i === 1 ? "bg-gray-700" : "bg-gray-300"} shadow-sm`}
                    animate={i === 1 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced App Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DigitalMarketingUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Ad Campaign Dashboard */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Ad Campaign Performance</h4>
        <div className="grid grid-cols-2 gap-4">
          {/* Impressions */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600 font-medium">Impressions</span>
              <ActivityIcon className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-xl font-bold text-gray-800">1.2M</div>
            <div className="text-xs text-gray-500 mt-1">+15% vs Last Week</div>
          </div>

          {/* Clicks */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600 font-medium">Clicks</span>
              <Target className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-xl font-bold text-gray-800">45K</div>
            <div className="text-xs text-gray-500 mt-1">+8% vs Last Week</div>
          </div>

          {/* Conversions */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600 font-medium">Conversions</span>
              <Star className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-xl font-bold text-gray-800">3.5K</div>
            <div className="text-xs text-gray-500 mt-1">+12% vs Last Week</div>
          </div>

          {/* CTR */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600 font-medium">CTR</span>
              <BarChart className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-xl font-bold text-gray-800">3.8%</div>
            <div className="text-xs text-gray-500 mt-1">Stable Performance</div>
          </div>
        </div>
      </div>

      {/* Enhanced Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">ROI</span>
            <TrendingUpIcon className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">450%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Lead Gen</span>
            <UsersIcon className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">300%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function GraphicDesigningUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Design Canvas */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">Design Canvas</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Logo Design */}
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-xl flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <PaletteIcon className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.2'%3E%3Cpath d='M0 0h20v1H0zM0 0v20h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* Color Palette */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          {["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"].map((color, index) => (
            <motion.div
              key={index}
              className={`w-6 h-6 ${color} rounded-full shadow-md cursor-pointer`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Design Stats */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Brand Recognition</span>
            <Award className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">89%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "89%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Delivery</span>
            <Rocket className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">48hrs</div>
          <div className="text-xs text-gray-500 mt-1">Average Turnaround</div>
        </motion.div>
      </div>
    </div>
  )
}

function SocialMediaUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Social Dashboard */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Social Media Dashboard</h4>
        <div className="space-y-4">
          {/* Post Preview */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
            <div className="flex items-center space-x-3 mb-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-md"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <div>
                <div className="text-sm font-medium text-gray-700">Your Brand</div>
                <div className="text-xs text-gray-500">2 hours ago</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Check out our latest product launch! 🚀 #Innovation #TechLife
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <UsersIcon className="w-3 h-3" />
                <span>1.2K likes</span>
              </div>
              <div className="flex items-center space-x-1">
                <ActivityIcon className="w-3 h-3" />
                <span>89 comments</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUpIcon className="w-3 h-3" />
                <span>156 shares</span>
              </div>
            </div>
          </div>

          {/* Platform Icons */}
          <div className="flex justify-center space-x-4">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-md"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Engagement Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Engagement</span>
            <ActivityIcon className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">12.5%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Reach</span>
            <TrendingUpIcon className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">2M+</div>
          <div className="text-xs text-gray-500 mt-1">Monthly Reach</div>
        </motion.div>
      </div>
    </div>
  )
}

function AIMLUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Neural Network Visualization */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">Neural Network</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* Network Visualization */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-40 flex items-center justify-between relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between w-full px-8">
            {/* Input Layer */}
            <div className="flex flex-col space-y-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                />
              ))}
            </div>

            {/* Hidden Layer */}
            <div className="flex flex-col space-y-2">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 + 0.5 }}
                />
              ))}
            </div>

            {/* Output Layer */}
            <div className="flex flex-col space-y-2">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.4 + 1 }}
                />
              ))}
            </div>
          </div>

          {/* Brain Icon */}
          <motion.div
            className="absolute top-2 right-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <BrainIcon className="w-6 h-6 text-gray-600" />
          </motion.div>
        </div>

        {/* Training Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Training Progress</span>
            <span className="text-xs text-gray-500">Epoch 85/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 3, ease: "easeOut" }}
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced AI Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Accuracy</span>
            <Target className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">94%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "94%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Efficiency</span>
            <Zap className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">75%</div>
          <div className="text-xs text-gray-500 mt-1">Process Improvement</div>
        </motion.div>
      </div>
    </div>
  )
}
