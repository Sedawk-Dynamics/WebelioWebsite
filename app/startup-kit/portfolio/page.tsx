"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, FileText, Globe, Share2, Newspaper, X, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const portfolioProjects = [
  {
    id: 1,
    companyName: "GreenBasket Organics",
    tagline: "Fresh Organic Produce Delivered",
    logo: "/images/sdk-portfolio/greenbasket-logo.jpg",
    websitePreview: "/images/sdk-portfolio/greenbasket-logo.jpg",
    letterhead: "/images/sdk-portfolio/greenbasket-letterhead.jpg",
    visitingCard: "/images/sdk-portfolio/greenbasket-card.jpg",
    website: "https://greenbasketorganics.com",
    companyProfile: "/pdfs/greenbasket-profile.pdf",
    socialProfiles: {
      facebook: "https://facebook.com/greenbasketorganics",
      instagram: "https://instagram.com/greenbasketorganics",
      linkedin: "https://linkedin.com/company/greenbasketorganics",
      twitter: "https://twitter.com/greenbasket",
    },
    articles: [
      { title: "GreenBasket Launches in Delhi NCR", url: "https://news.example.com/greenbasket-launch" },
      { title: "Organic Food Startup Raises Seed Funding", url: "https://business.example.com/greenbasket-funding" },
    ],
  },
  {
    id: 2,
    companyName: "FitBrew Café",
    tagline: "Healthy Coffee & Wellness Hub",
    logo: "/images/sdk-portfolio/fitbrew-logo.jpg",
    websitePreview: "/images/sdk-portfolio/fitbrew-logo.jpg",
    letterhead: "/images/sdk-portfolio/fitbrew-letterhead.jpg",
    visitingCard: "/images/sdk-portfolio/fitbrew-card.jpg",
    website: "https://fitbrewcafe.com",
    companyProfile: "/pdfs/fitbrew-profile.pdf",
    socialProfiles: {
      facebook: "https://facebook.com/fitbrewcafe",
      instagram: "https://instagram.com/fitbrewcafe",
      linkedin: "https://linkedin.com/company/fitbrewcafe",
      twitter: "https://twitter.com/fitbrew",
    },
    articles: [
      { title: "FitBrew Café Opens First Outlet", url: "https://news.example.com/fitbrew-opening" },
      { title: "Wellness Café Chain Expands", url: "https://business.example.com/fitbrew-expansion" },
    ],
  },
  {
    id: 3,
    companyName: "WorkWave HR",
    tagline: "Modern HR Solutions for Growing Teams",
    logo: "/images/sdk-portfolio/workwave-logo.jpg",
    websitePreview: "/images/sdk-portfolio/workwave-logo.jpg",
    letterhead: "/images/sdk-portfolio/workwave-letterhead.jpg",
    visitingCard: "/images/sdk-portfolio/workwave-card.jpg",
    website: "https://workwavehr.com",
    companyProfile: "/pdfs/workwave-profile.pdf",
    socialProfiles: {
      facebook: "https://facebook.com/workwavehr",
      instagram: "https://instagram.com/workwavehr",
      linkedin: "https://linkedin.com/company/workwavehr",
      twitter: "https://twitter.com/workwave",
    },
    articles: [
      { title: "WorkWave HR Launches AI-Powered Platform", url: "https://news.example.com/workwave-launch" },
      { title: "HR Tech Startup Secures Investment", url: "https://business.example.com/workwave-investment" },
    ],
  },
  {
    id: 4,
    companyName: "EcoCharge EV",
    tagline: "Electric Vehicle Charging Network",
    logo: "/images/sdk-portfolio/ecocharge-logo.jpg",
    websitePreview: "/images/sdk-portfolio/ecocharge-logo.jpg",
    letterhead: "/images/sdk-portfolio/ecocharge-letterhead.jpg",
    visitingCard: "/images/sdk-portfolio/ecocharge-card.jpg",
    website: "https://ecochargeev.com",
    companyProfile: "/pdfs/ecocharge-profile.pdf",
    socialProfiles: {
      facebook: "https://facebook.com/ecochargeev",
      instagram: "https://instagram.com/ecochargeev",
      linkedin: "https://linkedin.com/company/ecochargeev",
      twitter: "https://twitter.com/ecocharge",
    },
    articles: [
      { title: "EcoCharge Installs 100 Charging Stations", url: "https://news.example.com/ecocharge-milestone" },
      { title: "EV Startup Attracts Investor Attention", url: "https://business.example.com/ecocharge-investors" },
    ],
  },
  {
    id: 5,
    companyName: "BharatEquip Traders",
    tagline: "Industrial Equipment & Machinery",
    logo: "/images/sdk-portfolio/bharatequip-logo.jpg",
    websitePreview: "/images/sdk-portfolio/bharatequip-logo.jpg",
    letterhead: "/images/sdk-portfolio/bharatequip-letterhead.jpg",
    visitingCard: "/images/sdk-portfolio/bharatequip-card.jpg",
    website: "https://bharatequip.com",
    companyProfile: "/pdfs/bharatequip-profile.pdf",
    socialProfiles: {
      facebook: "https://facebook.com/bharatequip",
      instagram: "https://instagram.com/bharatequip",
      linkedin: "https://linkedin.com/company/bharatequip",
      twitter: "https://twitter.com/bharatequip",
    },
    articles: [
      { title: "BharatEquip Expands to 5 States", url: "https://news.example.com/bharatequip-expansion" },
      { title: "Industrial Trader Goes Digital", url: "https://business.example.com/bharatequip-digital" },
    ],
  },
  {
    id: 6,
    companyName: "SkillBoost Academy",
    tagline: "Online Learning Platform",
    logo: "/images/sdk-portfolio/skillboost-logo.jpg",
    websitePreview: "/images/sdk-portfolio/skillboost-logo.jpg",
    letterhead: "/images/sdk-portfolio/skillboost-letterhead.jpg",
    visitingCard: "/images/sdk-portfolio/skillboost-card.jpg",
    website: "https://skillboostacademy.com",
    companyProfile: "/pdfs/skillboost-profile.pdf",
    socialProfiles: {
      facebook: "https://facebook.com/skillboostacademy",
      instagram: "https://instagram.com/skillboostacademy",
      linkedin: "https://linkedin.com/company/skillboostacademy",
      twitter: "https://twitter.com/skillboost",
    },
    articles: [
      { title: "SkillBoost Reaches 10,000 Students", url: "https://news.example.com/skillboost-milestone" },
      { title: "EdTech Startup Launches New Courses", url: "https://business.example.com/skillboost-courses" },
    ],
  },
]

export default function StartupKitPortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioProjects)[0] | null>(null)

  return (
    <main className="relative min-h-screen bg-black text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFCC66]/10 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
              Startup Kit <span className="text-[#FFCC66]">Portfolio</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Real Startups. Real Results. Real Growth.
            </p>

            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#FFCC66] to-transparent mx-auto"></div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore how we've helped startups across India establish their digital presence and scale their businesses
              with our comprehensive Startup Digital Kit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-[#FFCC66]/50 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                {/* Website Preview */}
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <Image
                    src={project.websitePreview || "/placeholder.svg?height=400&width=600"}
                    alt={`${project.companyName} Website`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                  {/* Logo Overlay */}
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={`${project.companyName} Logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFCC66] transition-colors">
                    {project.companyName}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{project.tagline}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#FFCC66] font-medium">View Details</span>
                    <ChevronRight className="w-5 h-5 text-[#FFCC66] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                    <Image
                      src={selectedProject.logo || "/placeholder.svg"}
                      alt={`${selectedProject.companyName} Logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedProject.companyName}</h2>
                    <p className="text-gray-400">{selectedProject.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Website Link */}
                <div>
                  <Link
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFCC66] text-black rounded-lg font-semibold hover:bg-[#FFD700] transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

                {/* Branding Materials */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#FFCC66] rounded-full"></span>
                    Branding Materials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Letterhead */}
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                      <div className="text-sm text-gray-400 mb-3 font-medium">Letterhead Design</div>
                      <div className="aspect-[8.5/11] bg-gray-900 rounded-lg overflow-hidden">
                        <Image
                          src={selectedProject.letterhead || "/placeholder.svg"}
                          alt="Letterhead"
                          width={400}
                          height={517}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Visiting Card */}
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                      <div className="text-sm text-gray-400 mb-3 font-medium">Visiting Card</div>
                      <div className="aspect-[3.5/2] bg-gray-900 rounded-lg overflow-hidden">
                        <Image
                          src={selectedProject.visitingCard || "/placeholder.svg"}
                          alt="Visiting Card"
                          width={350}
                          height={200}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Digital Assets */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#FFCC66] rounded-full"></span>
                    Digital Assets
                  </h3>
                  <div className="space-y-4">
                    {/* Company Profile */}
                    <Link
                      href={selectedProject.companyProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#FFCC66]/50 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#FFCC66]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FFCC66]/20 transition-colors">
                          <FileText className="w-6 h-6 text-[#FFCC66]" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-white mb-1">Company Profile</div>
                          <div className="text-sm text-gray-400">Download PDF</div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#FFCC66] transition-colors" />
                      </div>
                    </Link>

                    {/* Social Profiles */}
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-2 mb-4">
                        <Share2 className="w-5 h-5 text-[#FFCC66]" />
                        <div className="font-semibold text-white">Social Media Profiles</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(selectedProject.socialProfiles).map(([platform, url]) => (
                          <Link
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-gray-900 rounded-lg text-sm text-gray-300 hover:text-[#FFCC66] hover:bg-gray-800 transition-all capitalize flex items-center justify-between group"
                          >
                            <span>{platform}</span>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Press Articles */}
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-2 mb-4">
                        <Newspaper className="w-5 h-5 text-[#FFCC66]" />
                        <div className="font-semibold text-white">Press Coverage</div>
                      </div>
                      <div className="space-y-3">
                        {selectedProject.articles.map((article, idx) => (
                          <Link
                            key={idx}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 bg-gray-900 rounded-lg text-sm text-gray-300 hover:text-[#FFCC66] hover:bg-gray-800 transition-all group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="flex-1">{article.title}</span>
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#012a4a]/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Ready to Join Our <span className="text-[#FFCC66]">Success Stories?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get your complete digital presence with our Startup Digital Kit
            </p>

            <div className="pt-8">
              <Link
                href="/startup-kit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFCC66] to-[#FFD700] text-black rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_rgba(255,204,102,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Startup Kit
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
