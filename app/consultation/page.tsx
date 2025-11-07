"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { BusinessProfileHeader } from "@/components/business-profile-header"
import {
  ChevronRight,
  ChevronLeft,
  Building,
  Users,
  DollarSign,
  Target,
  Calendar,
  Rocket,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Cog,
  Package,
  Building2,
  Laptop,
  TrendingUp,
  BarChart,
  Shield,
  Clock,
  Sparkles,
  Cpu,
  Cloud,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { InlineWidget } from "react-calendly"
import { submitEnquiry } from "@/lib/api"

type ConsultationData = {
  businessType: string
  companySize: string
  budget: string
  projectType: string[]
  timeline: string
  goals: string[]
  name: string
  email: string
  company: string
  phone: string
  isGuest: boolean
}

export default function ConsultationPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isGuest, setIsGuest] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [consultationData, setConsultationData] = useState<ConsultationData>({
    businessType: "",
    companySize: "",
    budget: "",
    projectType: [],
    timeline: "",
    goals: [],
    name: "",
    email: "",
    company: "",
    phone: "",
    isGuest: false,
  })

  // Calendly URL - Replace with your actual Calendly URL
  // Set this in your .env.local file as: NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/consultation
  const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username/consultation"
 

  // Update header dropdown when data changes
  useEffect(() => {
    const updateData = {
      service: consultationData.projectType.join(", "),
      businessName: consultationData.company,
      businessType: consultationData.businessType,
      companySize: consultationData.companySize,
      budget: consultationData.budget,
      timeline: consultationData.timeline,
      goals: consultationData.goals.join(", "),
      contactName: consultationData.name,
      email: consultationData.email,
      phone: consultationData.phone,
    }

    // Show dropdown when user starts filling data
    if (Object.values(updateData).some((val) => val && val.trim() !== "")) {
      window.dispatchEvent(new CustomEvent("showProfileDropdown", { detail: updateData }))
      window.dispatchEvent(new CustomEvent("updateProfileDropdown", { detail: updateData }))
    }
  }, [consultationData])

  // Hide Calendly branding when widget loads
  useEffect(() => {
    if (!showCalendly) return

    const hideBranding = () => {
      // Try multiple selectors to find and hide the branding
      const selectors = [
        'div[data-id="branding"]',
        'a[href*="calendly.com"][href*="utm_medium=badge"]',
        'a.VJL48qbQzWENTFAh1Knk',
        '.jWSwi_R_Xl7kPjUhuQoo',
        '._igrKj_5lj_5nWQu8DPw',
      ]

      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.display = 'none'
            el.style.visibility = 'hidden'
            el.style.opacity = '0'
            el.style.height = '0'
            el.style.width = '0'
            el.style.overflow = 'hidden'
            el.style.pointerEvents = 'none'
          }
        })
      })
    }

    // Hide immediately and then check periodically as widget loads
    hideBranding()
    const interval = setInterval(hideBranding, 100)

    // Also listen for DOM changes
    const observer = new MutationObserver(hideBranding)
    const wrapper = document.querySelector('.calendly-widget-wrapper')
    if (wrapper) {
      observer.observe(wrapper, {
        childList: true,
        subtree: true,
      })
    }

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [showCalendly])

  const steps = [
    { id: "business", title: "Business", icon: Building, color: "emerald" },
    { id: "size", title: "Size", icon: Users, color: "blue" },
    { id: "project", title: "Project", icon: Target, color: "purple" },
    { id: "budget", title: "Budget", icon: DollarSign, color: "green" },
    { id: "timeline", title: "Timeline", icon: Clock, color: "orange" },
    { id: "goals", title: "Goals", icon: Rocket, color: "cyan" },
    { id: "contact", title: "Contact", icon: Calendar, color: "pink" },
  ]

  const businessTypes = [
    {
      id: "startup",
      label: "Startup",
      description: "Early-stage innovation",
      icon: "🚀",
      gradient: "from-emerald-500/20 to-green-500/20",
      border: "border-emerald-500/30",
    },
    {
      id: "smb",
      label: "Small Business",
      description: "Established enterprise",
      icon: "🏢",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
    },
    {
      id: "enterprise",
      label: "Enterprise",
      description: "Large corporation",
      icon: "🏛️",
      gradient: "from-purple-500/20 to-indigo-500/20",
      border: "border-purple-500/30",
    },
    {
      id: "agency",
      label: "Agency",
      description: "Creative & marketing",
      icon: "🎨",
      gradient: "from-pink-500/20 to-rose-500/20",
      border: "border-pink-500/30",
    },
  ]

  const companySizes = [
    { id: "1-10", label: "1-10 employees", description: "Small team", icon: "👥" },
    { id: "11-50", label: "11-50 employees", description: "Growing company", icon: "🏢" },
    { id: "51-200", label: "51-200 employees", description: "Mid-size", icon: "🏬" },
    { id: "200+", label: "200+ employees", description: "Large corp", icon: "🏭" },
  ]

  const projectTypes = [
    {
      id: "website",
      label: "Website Development",
      icon: <Globe className="w-6 h-6" />,
      color: "emerald",
      description: "Next.js, React.js, Node.js, Express.js, Laravel, WordPress, MySQL, MongoDB",
    },
    {
      id: "mobile",
      label: "Mobile App Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "blue",
      description: "Flutter, React Native, Kotlin, Jetpack Compose, Swift, SwiftUI",
    },
    {
      id: "digital",
      label: "Digital Marketing",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "purple",
      description: "Google Ads, Meta Ads, Google Analytics, Tag Manager, SEO Tools, HubSpot, Semrush",
    },
    {
      id: "branding",
      label: "Branding & Creative Design",
      icon: <Package className="w-6 h-6" />,
      color: "orange",
      description: "Figma, Adobe XD, Photoshop, Illustrator, After Effects, Canva",
    },
    {
      id: "ai",
      label: "AI & Machine Learning",
      icon: <Sparkles className="w-6 h-6" />,
      color: "cyan",
      description: "Python, TensorFlow, PyTorch, Scikit-learn, OpenAI API, LangChain",
    },
    {
      id: "erp",
      label: "Custom ERP Development",
      icon: <Cog className="w-6 h-6" />,
      color: "indigo",
      description: "Node.js, Laravel, PostgreSQL, Redis, React.js, Docker, Microservices",
    },
    {
      id: "enterprise",
      label: "Enterprise Software Development",
      icon: <Building2 className="w-6 h-6" />,
      color: "pink",
      description: "Java, Spring Boot, .NET Core, Angular, Kubernetes, AWS, Azure",
    },
    {
      id: "embedded",
      label: "Embedded & IoT Solutions",
      icon: <Cpu className="w-6 h-6" />,
      color: "teal",
      description: "C, C++, Python, Raspberry Pi, Arduino, MQTT, AWS IoT, BLE",
    },
    {
      id: "saas",
      label: "SAAS Development",
      icon: <Cloud className="w-6 h-6" />,
      color: "violet",
      description: "React.js, Next.js, Node.js, PostgreSQL, Docker, Kubernetes, AWS",
    },
  ]

  const budgetRanges = [
    { id: "1-10lakhs", label: "1 - 10 Lakhs", description: "Small Projects", icon: "💡" },
    { id: "10-50lakhs", label: "10 - 50 Lakhs", description: "Medium Projects", icon: "🚀" },
    { id: "50lakhs-1cr", label: "50 Lakhs - 1 Cr.", description: "Enterprise Projects", icon: "🏢" },
    { id: "1cr+", label: "1 crore +", description: "Transformation", icon: "⭐" },
  ]

  const timelines = [
    { id: "asap", label: "ASAP", description: "Immediate start", icon: "⚡" },
    { id: "1-3months", label: "1-3 months", description: "Planning phase", icon: "📅" },
    { id: "3-6months", label: "3-6 months", description: "Flexible dev", icon: "🎯" },
    { id: "6months+", label: "6+ months", description: "Long-term", icon: "🗺️" },
  ]

  const businessGoals = [
    { id: "increase-sales", label: "Increase Sales", icon: <TrendingUp className="w-5 h-5" />, color: "emerald" },
    { id: "improve-efficiency", label: "Improve Efficiency", icon: <Rocket className="w-5 h-5" />, color: "blue" },
    { id: "expand-market", label: "Expand Market", icon: <Target className="w-5 h-5" />, color: "purple" },
    { id: "reduce-costs", label: "Reduce Costs", icon: <BarChart className="w-5 h-5" />, color: "green" },
    { id: "modernize", label: "Modernize Ops", icon: <Sparkles className="w-5 h-5" />, color: "orange" },
    { id: "competitive-advantage", label: "Competitive Edge", icon: <Shield className="w-5 h-5" />, color: "cyan" },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // Validate required fields
    if (!consultationData.name || !consultationData.email) {
      setSubmitError("Please fill in all required fields (Name and Email)")
      return
    }

    if (!consultationData.company) {
      setSubmitError("Please provide your business/company name")
      return
    }

    if (consultationData.projectType.length === 0) {
      setSubmitError("Please select at least one project type")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Map consultation data to API format
      const enquiryPayload = {
        service: consultationData.projectType.join(", "),
        businessName: consultationData.company,
        businessType: consultationData.businessType || "",
        companySize: consultationData.companySize || "",
        primaryGoal: consultationData.goals.join(", ") || "",
        budget: consultationData.budget || "",
        timeline: consultationData.timeline || "",
        location: "", // Not collected in consultation form
        contactName: consultationData.name,
        email: consultationData.email,
      }

      // Submit to API
      await submitEnquiry(enquiryPayload)

      // Save consultation data to localStorage
      localStorage.setItem("consultationCompleted", "true")
      localStorage.setItem("consultationData", JSON.stringify(consultationData))

      // Show Calendly widget
      setShowCalendly(true)
    } catch (error) {
      console.error("Error submitting consultation:", error)
      setSubmitError(error instanceof Error ? error.message : "Failed to submit consultation. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleProjectType = (typeId: string) => {
    setConsultationData((prev) => ({
      ...prev,
      projectType: prev.projectType.includes(typeId)
        ? prev.projectType.filter((id) => id !== typeId)
        : [...prev.projectType, typeId],
    }))
  }

  const toggleGoal = (goalId: string) => {
    setConsultationData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId) ? prev.goals.filter((id) => id !== goalId) : [...prev.goals, goalId],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <NavBar />
      <BusinessProfileHeader />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center py-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Strategic Consultation
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                  Step {currentStep + 1} of {steps.length}
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      index <= currentStep ? "bg-emerald-500 text-white" : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {index < currentStep ? <CheckCircle className="w-4 h-4" /> : <step.icon className="w-4 h-4" />}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-2 bg-gray-700 rounded">
                      <div
                        className={`h-full bg-emerald-500 rounded transition-all duration-500 ${
                          index < currentStep ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="min-h-[400px] flex flex-col justify-center"
              >
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold flex items-center justify-center">
                        <Building className="w-6 h-6 mr-3 text-emerald-400" />
                        What type of business are you?
                      </h2>
                      <p className="text-gray-400">Help us understand your business context</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {businessTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          onClick={() => setConsultationData({ ...consultationData, businessType: type.id })}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                            consultationData.businessType === type.id
                              ? `${type.border} bg-gradient-to-br ${type.gradient} shadow-xl`
                              : "border-gray-700/50 hover:border-gray-600 bg-gray-800/20"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-2xl mb-2">{type.icon}</div>
                          <h3 className="text-sm font-bold mb-1 text-white">{type.label}</h3>
                          <p className="text-gray-400 text-xs">{type.description}</p>
                          {consultationData.businessType === type.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold flex items-center justify-center">
                        <Users className="w-6 h-6 mr-3 text-blue-400" />
                        Company size?
                      </h2>
                      <p className="text-gray-400">This helps us scale our recommendations</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {companySizes.map((size) => (
                        <motion.button
                          key={size.id}
                          onClick={() => setConsultationData({ ...consultationData, companySize: size.id })}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                            consultationData.companySize === size.id
                              ? "border-blue-500 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 shadow-xl"
                              : "border-gray-700/50 hover:border-gray-600 bg-gray-800/20"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-2xl mb-2">{size.icon}</div>
                          <h3 className="text-sm font-bold mb-1 text-white">{size.label}</h3>
                          <p className="text-gray-400 text-xs">{size.description}</p>
                          {consultationData.companySize === size.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold flex items-center justify-center">
                        <Target className="w-6 h-6 mr-3 text-purple-400" />
                        What services do you need?
                      </h2>
                      <p className="text-gray-400">Select all that apply</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                      {projectTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          onClick={() => toggleProjectType(type.id)}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            consultationData.projectType.includes(type.id)
                              ? `border-${type.color}-500 bg-gradient-to-br from-${type.color}-500/20 to-${type.color}-600/20 shadow-xl`
                              : "border-gray-700/50 hover:border-gray-600 bg-gray-800/20"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`text-${type.color}-400 mb-2`}>{type.icon}</div>
                          <h3 className="text-sm font-bold mb-1 text-white">{type.label}</h3>
                          <p className="text-gray-400 text-xs">{type.description}</p>
                          {consultationData.projectType.includes(type.id) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className={`absolute top-2 right-2 w-5 h-5 bg-${type.color}-500 rounded-full flex items-center justify-center`}
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold flex items-center justify-center">
                        <DollarSign className="w-6 h-6 mr-3 text-green-400" />
                        What's your budget range?
                      </h2>
                      <p className="text-gray-400">This helps us recommend the right solution</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {budgetRanges.map((budget) => (
                        <motion.button
                          key={budget.id}
                          onClick={() => setConsultationData({ ...consultationData, budget: budget.id })}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                            consultationData.budget === budget.id
                              ? "border-green-500 bg-gradient-to-br from-green-500/20 to-emerald-500/20 shadow-xl"
                              : "border-gray-700/50 hover:border-gray-600 bg-gray-800/20"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-2xl mb-2">{budget.icon}</div>
                          <h3 className="text-sm font-bold mb-1 text-white">{budget.label}</h3>
                          <p className="text-gray-400 text-xs">{budget.description}</p>
                          {consultationData.budget === budget.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold flex items-center justify-center">
                        <Clock className="w-6 h-6 mr-3 text-orange-400" />
                        When do you want to start?
                      </h2>
                      <p className="text-gray-400">Timeline helps us plan your project</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                      {timelines.map((timeline) => (
                        <motion.button
                          key={timeline.id}
                          onClick={() => setConsultationData({ ...consultationData, timeline: timeline.id })}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                            consultationData.timeline === timeline.id
                              ? "border-orange-500 bg-gradient-to-br from-orange-500/20 to-red-500/20 shadow-xl"
                              : "border-gray-700/50 hover:border-gray-600 bg-gray-800/20"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-2xl mb-2">{timeline.icon}</div>
                          <h3 className="text-sm font-bold mb-1 text-white">{timeline.label}</h3>
                          <p className="text-gray-400 text-xs">{timeline.description}</p>
                          {consultationData.timeline === timeline.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold flex items-center justify-center">
                        <Rocket className="w-6 h-6 mr-3 text-cyan-400" />
                        What are your main goals?
                      </h2>
                      <p className="text-gray-400">Select all that apply</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                      {businessGoals.map((goal) => (
                        <motion.button
                          key={goal.id}
                          onClick={() => toggleGoal(goal.id)}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            consultationData.goals.includes(goal.id)
                              ? `border-${goal.color}-500 bg-gradient-to-br from-${goal.color}-500/20 to-${goal.color}-600/20 shadow-xl`
                              : "border-gray-700/50 hover:border-gray-600 bg-gray-800/20"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`text-${goal.color}-400 mb-2`}>{goal.icon}</div>
                          <h3 className="text-sm font-bold text-white">{goal.label}</h3>
                          {consultationData.goals.includes(goal.id) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className={`absolute top-2 right-2 w-5 h-5 bg-${goal.color}-500 rounded-full flex items-center justify-center`}
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 6 && !showCalendly && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold flex items-center justify-center">
                        <Calendar className="w-6 h-6 mr-3 text-emerald-400" />
                        Let's get your consultation scheduled
                      </h2>
                      <p className="text-gray-400">Final step to unlock your strategy</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">Full Name *</label>
                          <input
                            type="text"
                            value={consultationData.name}
                            onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-all"
                            placeholder="Your full name"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">Email Address *</label>
                          <input
                            type="email"
                            value={consultationData.email}
                            onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">Company Name</label>
                          <input
                            type="text"
                            value={consultationData.company}
                            onChange={(e) => setConsultationData({ ...consultationData, company: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-all"
                            placeholder="Your company"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                          <input
                            type="tel"
                            value={consultationData.phone}
                            onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-all"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 6 && showCalendly && (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold flex items-center justify-center">
                        <Calendar className="w-6 h-6 mr-3 text-emerald-400" />
                        Book Your Consultation
                      </h2>
                      <p className="text-gray-400">Select a time that works best for you</p>
                    </div>

                    <div className="w-full calendly-widget-wrapper" style={{ minHeight: "700px" }}>
                      <InlineWidget
                        url={CALENDLY_URL}
                        styles={{
                          height: "700px",
                          width: "100%",
                        }}
                        pageSettings={{
                          backgroundColor: "000000",
                          hideEventTypeDetails: false,
                          hideLandingPageDetails: false,
                          primaryColor: "10b981",
                          textColor: "ffffff",
                        }}
                        prefill={{
                          // Basic contact info (automatically pre-filled by Calendly)
                          name: consultationData.name || undefined,
                          email: consultationData.email || undefined,
                          firstName: consultationData.name?.split(" ")[0] || undefined,
                          lastName: consultationData.name?.split(" ").slice(1).join(" ") || undefined,
                          // Custom questions - These MUST match the question keys configured in your Calendly event type
                          // IMPORTANT: Configure these 8 custom questions in your Calendly event type settings
                          // Question keys must be: a1, a2, a3, a4, a5, a6, a7, a8
                          customAnswers: {
                            a1: consultationData.company || undefined, // Question: "Company Name"
                            a2: consultationData.phone || undefined, // Question: "Phone Number"
                            a3: consultationData.businessType || undefined, // Question: "Business Type"
                            a4: consultationData.companySize || undefined, // Question: "Company Size"
                            a5: consultationData.projectType.join(", ") || undefined, // Question: "Services Needed"
                            a6: consultationData.budget || undefined, // Question: "Budget Range"
                            a7: consultationData.timeline || undefined, // Question: "Timeline"
                            a8: consultationData.goals.join(", ") || undefined, // Question: "Business Goals"
                          },
                        }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {submitError && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{submitError}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0 || isSubmitting}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button
                onClick={nextStep}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white"
              >
                Next Step
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : !showCalendly ? (
              <Button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!consultationData.name || !consultationData.email || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Consultation"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
