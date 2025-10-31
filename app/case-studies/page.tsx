"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  MousePointer,
  Share2,
  Target,
  BarChart3,
  Calendar,
  ArrowRight,
  X,
  ExternalLink,
} from "lucide-react"

export default function CaseStudiesPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null)
  const [filter, setFilter] = useState("all")

  const caseStudies = [
    {
      id: "ecommerce-growth",
      title: "E-commerce Revenue Growth Campaign",
      client: "TechGadgets India",
      category: "ecommerce",
      duration: "6 months",
      budget: "₹5,00,000",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive digital marketing strategy that increased online sales by 340% for a tech gadgets retailer",
      challenge:
        "TechGadgets India was struggling with low online visibility and poor conversion rates. Their website traffic was minimal, and they were losing market share to competitors.",
      solution:
        "We implemented a multi-channel digital marketing approach including SEO optimization, Google Ads campaigns, social media marketing, and email automation.",
      results: {
        revenue: "+340%",
        traffic: "+280%",
        conversions: "+220%",
        roas: "4.2x",
      },
      metrics: [
        { label: "Revenue Increase", value: "340%", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Website Traffic", value: "280%", icon: <Eye className="w-5 h-5" /> },
        { label: "Conversion Rate", value: "220%", icon: <MousePointer className="w-5 h-5" /> },
        { label: "Return on Ad Spend", value: "4.2x", icon: <TrendingUp className="w-5 h-5" /> },
      ],
      strategies: [
        "SEO optimization for 50+ high-intent keywords",
        "Google Ads campaigns with smart bidding",
        "Facebook and Instagram advertising",
        "Email marketing automation sequences",
        "Conversion rate optimization",
        "Retargeting campaigns",
      ],
      testimonial: {
        quote:
          "Webelio transformed our online presence completely. The results exceeded our expectations and our revenue has grown by over 300%. Their strategic approach and execution were flawless.",
        author: "Rajesh Kumar",
        role: "Founder, TechGadgets India",
      },
    },
    {
      id: "saas-lead-generation",
      title: "SaaS Lead Generation Campaign",
      client: "CloudSync Solutions",
      category: "saas",
      duration: "4 months",
      budget: "₹3,50,000",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "B2B lead generation campaign that generated 500+ qualified leads and 50+ new customers for a SaaS platform",
      challenge:
        "CloudSync Solutions needed to scale their customer acquisition and generate high-quality leads for their project management SaaS platform in a competitive market.",
      solution:
        "We developed a comprehensive B2B marketing strategy focusing on content marketing, LinkedIn advertising, webinars, and marketing automation.",
      results: {
        leads: "500+",
        customers: "50+",
        cost_per_lead: "₹700",
        conversion_rate: "12%",
      },
      metrics: [
        { label: "Qualified Leads", value: "500+", icon: <Users className="w-5 h-5" /> },
        { label: "New Customers", value: "50+", icon: <Target className="w-5 h-5" /> },
        { label: "Cost Per Lead", value: "₹700", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Conversion Rate", value: "12%", icon: <BarChart3 className="w-5 h-5" /> },
      ],
      strategies: [
        "LinkedIn advertising campaigns",
        "Content marketing and SEO",
        "Webinar marketing series",
        "Email nurturing sequences",
        "Marketing automation setup",
        "Lead scoring implementation",
      ],
      testimonial: {
        quote:
          "The lead generation campaign by Webelio was exceptional. We saw a 12% conversion rate from leads to customers, which is outstanding in our industry. Their B2B expertise really showed.",
        author: "Priya Sharma",
        role: "Marketing Director, CloudSync Solutions",
      },
    },
    {
      id: "restaurant-local-marketing",
      title: "Local Restaurant Chain Growth",
      client: "Spice Garden Restaurants",
      category: "local",
      duration: "8 months",
      budget: "₹2,50,000",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Local SEO and social media campaign that increased foot traffic by 180% across 5 restaurant locations",
      challenge:
        "Spice Garden Restaurants had 5 locations but poor online visibility. They were losing customers to competitors and needed to increase foot traffic and online orders.",
      solution:
        "We implemented a comprehensive local marketing strategy including Google My Business optimization, local SEO, social media marketing, and online reputation management.",
      results: {
        foot_traffic: "+180%",
        online_orders: "+250%",
        reviews: "4.8/5",
        local_ranking: "#1",
      },
      metrics: [
        { label: "Foot Traffic", value: "180%", icon: <Users className="w-5 h-5" /> },
        { label: "Online Orders", value: "250%", icon: <MousePointer className="w-5 h-5" /> },
        { label: "Average Rating", value: "4.8/5", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Local Search Ranking", value: "#1", icon: <Target className="w-5 h-5" /> },
      ],
      strategies: [
        "Google My Business optimization",
        "Local SEO for all locations",
        "Social media content creation",
        "Online reputation management",
        "Food photography and videography",
        "Influencer partnerships",
      ],
      testimonial: {
        quote:
          "Our restaurants have never been busier! The local marketing strategy by Webelio brought us to the top of local searches and our customer base has grown tremendously.",
        author: "Amit Patel",
        role: "Owner, Spice Garden Restaurants",
      },
    },
    {
      id: "healthcare-awareness",
      title: "Healthcare Awareness Campaign",
      client: "MediCare Plus Clinics",
      category: "healthcare",
      duration: "5 months",
      budget: "₹4,00,000",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Digital health awareness campaign that increased patient appointments by 200% and built trust in the community",
      challenge:
        "MediCare Plus needed to build awareness about their specialized healthcare services and establish trust with potential patients in their community.",
      solution:
        "We created an educational content marketing strategy combined with targeted social media campaigns and Google Ads to reach patients actively searching for healthcare services.",
      results: {
        appointments: "+200%",
        website_traffic: "+320%",
        engagement: "+450%",
        brand_awareness: "+180%",
      },
      metrics: [
        { label: "Patient Appointments", value: "200%", icon: <Calendar className="w-5 h-5" /> },
        { label: "Website Traffic", value: "320%", icon: <Eye className="w-5 h-5" /> },
        { label: "Social Engagement", value: "450%", icon: <Share2 className="w-5 h-5" /> },
        { label: "Brand Awareness", value: "180%", icon: <TrendingUp className="w-5 h-5" /> },
      ],
      strategies: [
        "Educational content marketing",
        "Google Ads for healthcare services",
        "Social media awareness campaigns",
        "Patient testimonial videos",
        "Health blog and SEO",
        "Community outreach programs",
      ],
      testimonial: {
        quote:
          "Webelio helped us connect with our community in a meaningful way. The awareness campaign not only increased our appointments but also established us as a trusted healthcare provider.",
        author: "Dr. Sunita Verma",
        role: "Director, MediCare Plus Clinics",
      },
    },
    {
      id: "education-enrollment",
      title: "Online Education Platform Growth",
      client: "SkillBoost Academy",
      category: "education",
      duration: "6 months",
      budget: "₹6,00,000",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Student enrollment campaign that increased course sign-ups by 400% and built a community of 10,000+ learners",
      challenge:
        "SkillBoost Academy was a new online education platform struggling to attract students and compete with established players in the market.",
      solution:
        "We developed a comprehensive digital marketing strategy focusing on content marketing, social proof, influencer partnerships, and performance marketing.",
      results: {
        enrollments: "+400%",
        students: "10,000+",
        completion_rate: "85%",
        revenue: "+500%",
      },
      metrics: [
        { label: "Course Enrollments", value: "400%", icon: <Users className="w-5 h-5" /> },
        { label: "Active Students", value: "10,000+", icon: <Target className="w-5 h-5" /> },
        { label: "Course Completion", value: "85%", icon: <BarChart3 className="w-5 h-5" /> },
        { label: "Revenue Growth", value: "500%", icon: <DollarSign className="w-5 h-5" /> },
      ],
      strategies: [
        "Content marketing and SEO",
        "YouTube educational content",
        "Social media community building",
        "Influencer partnerships",
        "Email marketing automation",
        "Referral program implementation",
      ],
      testimonial: {
        quote:
          "The growth we achieved with Webelio's marketing strategy was incredible. From a few hundred students to over 10,000 in just 6 months. Their understanding of the education market was exceptional.",
        author: "Vikash Singh",
        role: "Founder, SkillBoost Academy",
      },
    },
    {
      id: "fintech-app-launch",
      title: "FinTech App Launch Campaign",
      client: "PayEasy Digital Wallet",
      category: "fintech",
      duration: "3 months",
      budget: "₹8,00,000",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Mobile app launch campaign that achieved 100,000+ downloads and 25,000+ active users within 3 months",
      challenge:
        "PayEasy needed to launch their digital wallet app in a highly competitive market dominated by established players like Paytm and PhonePe.",
      solution:
        "We created a multi-phase launch strategy with pre-launch buzz, influencer marketing, app store optimization, and performance marketing campaigns.",
      results: {
        downloads: "100,000+",
        active_users: "25,000+",
        retention: "65%",
        app_rating: "4.6/5",
      },
      metrics: [
        { label: "App Downloads", value: "100,000+", icon: <MousePointer className="w-5 h-5" /> },
        { label: "Active Users", value: "25,000+", icon: <Users className="w-5 h-5" /> },
        { label: "User Retention", value: "65%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "App Store Rating", value: "4.6/5", icon: <Target className="w-5 h-5" /> },
      ],
      strategies: [
        "App Store Optimization (ASO)",
        "Influencer marketing campaigns",
        "Social media advertising",
        "Referral and cashback programs",
        "PR and media outreach",
        "Performance marketing",
      ],
      testimonial: {
        quote:
          "Launching in the competitive FinTech space seemed impossible, but Webelio's strategic approach helped us achieve 100,000 downloads in just 3 months. Outstanding results!",
        author: "Rohit Agarwal",
        role: "CEO, PayEasy Digital Wallet",
      },
    },
  ]

  const categories = [
    { id: "all", name: "All Case Studies", count: caseStudies.length },
    { id: "ecommerce", name: "E-commerce", count: caseStudies.filter((c) => c.category === "ecommerce").length },
    { id: "saas", name: "SaaS", count: caseStudies.filter((c) => c.category === "saas").length },
    { id: "local", name: "Local Business", count: caseStudies.filter((c) => c.category === "local").length },
    { id: "healthcare", name: "Healthcare", count: caseStudies.filter((c) => c.category === "healthcare").length },
    { id: "education", name: "Education", count: caseStudies.filter((c) => c.category === "education").length },
    { id: "fintech", name: "FinTech", count: caseStudies.filter((c) => c.category === "fintech").length },
  ]

  const filteredCaseStudies = filter === "all" ? caseStudies : caseStudies.filter((cs) => cs.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-emerald-500 text-white mb-6">Case Studies</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Digital Marketing </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Discover how we've helped businesses across various industries achieve remarkable growth through strategic
              digital marketing campaigns. Real results, real impact.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-medium ${
                  filter === category.id
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                {category.name}
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">{category.count}</span>
              </button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <AnimatePresence>
              {filteredCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative"
                  onClick={() => setSelectedCaseStudy(caseStudy)}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer">
                    {/* Case Study Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-emerald-500 text-white capitalize">{caseStudy.category}</Badge>
                      </div>

                      {/* Duration & Budget */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm opacity-90">
                          {caseStudy.duration} • {caseStudy.budget}
                        </div>
                      </div>
                    </div>

                    {/* Case Study Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-emerald-400 text-sm mb-3">{caseStudy.client}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed line-clamp-2">{caseStudy.description}</p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {caseStudy.metrics.slice(0, 4).map((metric, i) => (
                          <div key={i} className="text-center p-3 bg-gray-700/30 rounded-lg">
                            <div className="flex items-center justify-center space-x-1 mb-1">
                              <div className="text-emerald-400">{metric.icon}</div>
                              <span className="text-lg font-bold text-emerald-400">{metric.value}</span>
                            </div>
                            <div className="text-xs text-gray-300">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white group-hover:scale-105 transition-transform">
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-black mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-black/80 text-xl mb-8">
              Let's discuss how we can help you achieve similar results with a customized digital marketing strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Your Campaign
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <Dialog open={!!selectedCaseStudy} onOpenChange={() => setSelectedCaseStudy(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-md border border-gray-700 text-white">
          {selectedCaseStudy && (
            <>
              <DialogHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-emerald-500 text-white capitalize">{selectedCaseStudy.category}</Badge>
                  <DialogTitle className="text-2xl font-bold text-white">{selectedCaseStudy.title}</DialogTitle>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="rounded-full p-2 hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </DialogHeader>

              <div className="mt-6 space-y-8">
                {/* Project Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedCaseStudy.image || "/placeholder.svg"}
                      alt={selectedCaseStudy.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Client</h3>
                      <p className="text-gray-300">{selectedCaseStudy.client}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Duration</h3>
                      <p className="text-gray-300">{selectedCaseStudy.duration}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Budget</h3>
                      <p className="text-gray-300">{selectedCaseStudy.budget}</p>
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-400">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedCaseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-400">Our Solution</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{selectedCaseStudy.solution}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCaseStudy.strategies.map((strategy, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-emerald-400">Results Achieved</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {selectedCaseStudy.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="text-emerald-400 mb-2 flex justify-center">{metric.icon}</div>
                        <div className="text-2xl font-bold text-emerald-400 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedCaseStudy.testimonial && (
                  <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-4 text-emerald-400">Client Testimonial</h3>
                    <blockquote className="text-gray-300 italic mb-4 text-lg">
                      "{selectedCaseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-emerald-400 font-semibold">
                          {selectedCaseStudy.testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-white">{selectedCaseStudy.testimonial.author}</div>
                        <div className="text-sm text-gray-400">{selectedCaseStudy.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Start Similar Campaign
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                    onClick={() => setSelectedCaseStudy(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
