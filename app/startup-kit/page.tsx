"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  Check,
  Sparkles,
  Rocket,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Zap,
  Globe,
  Mail,
  Smartphone,
  FileText,
  Database,
  Cloud,
  Search,
  Award,
  Newspaper,
  Settings,
  Share2,
  AtSign,
  ChartNoAxesCombined,
  MessageSquare,
  Shield,
} from "lucide-react"
import Link from "next/link"

const deliverables = [
  { icon: Sparkles, title: "Logo Design", description: "Professional brand identity" },
  { icon: Globe, title: "Company Website", description: "Domain + Hosting + Design" },
  { icon: FileText, title: "Letterhead & Visiting Card", description: "Custom business stationery" },
  { icon: FileText, title: "Company Profile", description: "Professional presentation" },
  { icon: Mail, title: "10 Business Emails", description: "Professional email accounts" },
  { icon: Database, title: "CRM & ERP Software", description: "Customer & resource management" },
  { icon: Users, title: "HRM Software", description: "Human resource management" },
  { icon: DollarSign, title: "Billing & Inventory", description: "Complete business software" },
  { icon: Share2, title: "Social Media Manager", description: "Unified social panel" },
  { icon: MessageSquare, title: "WhatsApp Bulk Sender", description: "Mass messaging tool" },
  { icon: Cloud, title: "Cloud Server", description: "Secure hosting infrastructure" },
  { icon: Search, title: "Website SEO", description: "Search engine optimization" },
  { icon: Award, title: "Brand Trademark", description: "Legal brand protection" },
  { icon: Newspaper, title: "News Publications", description: "4 major news sites" },
  { icon: Settings, title: "1 Year AMC & Hosting", description: "Complete maintenance" },
  { icon: Globe, title: "Google Business Profile", description: "Local SEO setup" },
  { icon: AtSign, title: "Social Media Setup", description: "4 platforms + 12 posts" },
  { icon: ChartNoAxesCombined, title: "Social Media Followers", description: "3k+ Assured Followers" },
  { icon: FileText, title: "HR Documents", description: "3000+ templates" },
  { icon: Smartphone, title: "Mobile Application", description: "Webview app ready" },
]

const advantages = [
  {
    icon: Rocket,
    title: "All-in-One Ecosystem",
    description: "Website, branding, software, SEO, and marketing — all handled by one team.",
  },
  {
    icon: DollarSign,
    title: "Save Up to 80% Cost",
    description: "Get everything at ₹60,000 instead of ₹2,00,000+ from multiple vendors.",
  },
  {
    icon: Clock,
    title: "Fast Setup",
    description: "Launch your business online in just 10–15 days.",
  },
  {
    icon: Database,
    title: "Fully Integrated Tools",
    description: "CRM, HRM, billing, and website — all connected seamlessly.",
  },
  {
    icon: TrendingUp,
    title: "Focus on Growth",
    description: "We handle the tech, so you can build your business.",
  },
  {
    icon: Shield,
    title: "Simple Renewal",
    description: "₹10,000/year renewal covers hosting, support & software.",
  },
]

const testimonials = [
  {
    quote: "Webelio gave our startup a professional identity overnight.",
    description:
      "We were struggling to even get a logo and website done on time. With Webelio SDK, we had our entire online presence — website, emails, CRM, HR tools — ready in just 12 days. Our clients started taking us seriously the moment they saw our branding.",
    author: "Satish Doke",
    role: "Founder, Germsol Pest Services Pvt Ltd",
    rating: 5,
  },
  {
    quote: "From idea to brand launch in under 2 weeks — unbelievable!",
    description:
      "As a first-time founder, I didn't even know what tools I needed. Webelio handled everything — from logo to Google Business to mobile app. They literally became our digital partner.",
    author: "Sai Kiran Reddy",
    role: "Director, Aivirtrix",
    rating: 5,
  },
  {
    quote: "Saved over ₹1.5 lakh in setup cost — and got 10x value.",
    description:
      "Earlier we had quotes from multiple vendors crossing ₹2 lakh. Webelio gave us everything for ₹50k — CRM, HRM, Billing, PR, everything integrated. Our digital presence went from zero to professional in no time.",
    author: "Mohammed Irfan",
    role: "Director, MagnaAura Consultancy Pvt Ltd",
    rating: 5,
  },
  {
    quote: "We got investor attention after our press releases.",
    description:
      "The PR articles Webelio arranged for us gave our brand visibility we never imagined. Investors started reaching out within weeks. It gave our startup credibility at an early stage.",
    author: "Varun Jindal",
    role: "Founder, Alvineient Consultant",
    rating: 5,
  },
  {
    quote: "One vendor, one renewal — total peace of mind.",
    description:
      "Earlier we had 6 different subscriptions. Webelio SDK replaced them all. Now everything — hosting, emails, HR, billing, support — renews together at a fraction of cost.",
    author: "Abhiram Sripathy",
    role: "Founder, Thurro by Adqvest Capital Pvt Ltd",
    rating: 5,
  },
]

const comparisonData = [
  { service: "Logo Design", market: "₹3,000 – ₹10,000", sdk: "✓" },
  { service: "Website (Domain + Hosting)", market: "₹15,000 – ₹40,000", sdk: "✓" },
  { service: "Business Stationery", market: "₹1,500 – ₹5,000", sdk: "✓" },
  { service: "Company Profile", market: "₹3,000 – ₹8,000", sdk: "✓" },
  { service: "10 Business Emails", market: "₹18,000 – ₹20,000", sdk: "✓" },
  { service: "CRM & ERP Software", market: "₹25,000 – ₹40,000", sdk: "✓" },
  { service: "HRM Software", market: "₹12,000 – ₹24,000", sdk: "✓" },
  { service: "Billing & Inventory", market: "₹3,000 – ₹6,000", sdk: "✓" },
  { service: "Social Media Tool", market: "₹12,000 – ₹24,000", sdk: "✓" },
  { service: "WhatsApp Bulk Sender", market: "₹5,000 – ₹12,000", sdk: "✓" },
  { service: "Cloud Server", market: "₹8,000 – ₹20,000", sdk: "✓" },
  { service: "Website SEO", market: "₹10,000 – ₹30,000", sdk: "✓" },
  { service: "Trademark Filing", market: "₹5,000 – ₹10,000", sdk: "✓" },
  { service: "PR Publications (4 Sites)", market: "₹12,000 – ₹25,000", sdk: "✓" },
  { service: "1-Year AMC & Hosting", market: "₹10,000 – ₹15,000", sdk: "✓" },
  { service: "Google Business Setup", market: "₹2,000 – ₹4,000", sdk: "✓" },
  { service: "Social Media + 12 Posts", market: "₹6,000 – ₹10,000", sdk: "✓" },
  { service: "HR Templates (3000+)", market: "₹3,000 – ₹8,000", sdk: "✓" },
  { service: "Mobile App (Webview)", market: "₹10,000 – ₹20,000", sdk: "✓" },
]

const impactMetrics = [
  { label: "Time to Market", value: "3x Faster", icon: Clock },
  { label: "Setup Cost", value: "70-80% Savings", icon: DollarSign },
  { label: "Digital Visibility", value: "+250% Increase", icon: TrendingUp },
  { label: "Client Trust & Leads", value: "2x More Inquiries", icon: Users },
]

export default function StartupKitPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC66]/10 border border-[#FFCC66]/20 rounded-full">
              <Sparkles className="w-4 h-4 text-[#FFCC66]" />
              <span className="text-sm text-[#FFCC66] font-medium">Limited Time Offer</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">Startup Digital Kit</h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              The Ultimate Launchpad for Ambitious Startups
            </p>

            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#FFCC66] to-transparent mx-auto"></div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Go from idea to fully launched brand in just <span className="text-[#FFCC66] font-semibold">30 days</span>
              . Everything your startup needs to establish a powerful digital presence.
            </p>

            <div className="pt-8">
              <div className="inline-flex flex-col items-center gap-4">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl font-bold text-[#FFCC66]">₹60,000</div>
                  <div className="text-gray-400 mt-2">All-inclusive for 1 year</div>
                  <div className="text-sm text-gray-500 mt-1">Renewal: ₹10,000/year</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/consultation"
                    className="group px-8 py-4 bg-gradient-to-r from-[#FFCC66] to-[#FFD700] text-black rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_rgba(255,204,102,0.5)] transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <Rocket className="w-5 h-5" />
                      Get Your Startup Kit Today
                    </span>
                  </Link>

                  <Link
                    href="/projects"
                    className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      View Success Stories
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grow 10X Faster Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-[#012a4a]/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Grow <span className="text-[#FFCC66]">10X Faster</span> with Webelio
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every startup deserves a powerful digital start. With Webelio's Startup Digital Kit (SDK), we help new
              businesses grow 10x faster by giving them the online presence, branding, and credibility they need to
              stand out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              What We <span className="text-[#FFCC66]">Deliver</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              20+ essential services to launch and scale your startup
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl hover:border-[#FFCC66]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFCC66]/10 rounded-lg group-hover:bg-[#FFCC66]/20 transition-colors">
                    <item.icon className="w-6 h-6 text-[#FFCC66]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SDK Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#012a4a]/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Why Startups Choose <span className="text-[#FFCC66]">Webelio SDK</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl hover:border-[#FFCC66]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#FFCC66]/10 rounded-xl flex items-center justify-center mb-6">
                  <advantage.icon className="w-7 h-7 text-[#FFCC66]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              SDK vs <span className="text-[#FFCC66]">Market Alternatives</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              See how much you save with our all-in-one solution
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-6 text-white font-semibold">Service / Item</th>
                    <th className="text-left p-6 text-white font-semibold">Market Cost (₹/Year)</th>
                    <th className="text-center p-6 text-[#FFCC66] font-semibold">Included in SDK</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <td className="p-6 text-gray-300">{row.service}</td>
                      <td className="p-6 text-gray-400">{row.market}</td>
                      <td className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-[#FFCC66]/10 rounded-full">
                          <Check className="w-5 h-5 text-[#FFCC66]" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gradient-to-r from-[#FFCC66]/10 to-transparent">
                    <td className="p-6 text-white font-bold text-lg">Total Value</td>
                    <td className="p-6 text-gray-300 font-semibold">₹1,75,000 – ₹2,80,000</td>
                    <td className="p-6 text-center">
                      <div className="text-[#FFCC66] font-bold text-2xl">₹60,000</div>
                      <div className="text-sm text-gray-400 mt-1">Save 70-80%</div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#012a4a]/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Impact in <span className="text-[#FFCC66]">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl"
              >
                <div className="w-16 h-16 bg-[#FFCC66]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-[#FFCC66]" />
                </div>
                <div className="text-3xl font-bold text-[#FFCC66] mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              What Our <span className="text-[#FFCC66]">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We've empowered 100+ startups across India to scale faster and build stronger brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl hover:border-[#FFCC66]/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-[#FFCC66] fill-[#FFCC66]" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{testimonial.quote}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{testimonial.description}</p>
                <div className="pt-4 border-t border-gray-700">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Ready to Launch Your <span className="text-[#FFCC66]">Startup?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">One Partner. One Platform. One Affordable Price.</p>
            <div className="text-lg text-gray-400">Webelio – Empowering Startups to Grow 10x Faster</div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-[#FFCC66] to-[#FFD700] text-black rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_rgba(255,204,102,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Get Your Startup Kit Today
                </span>
              </Link>

              <Link
                href="/consultation"
                className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Talk to an Expert
                </span>
              </Link>
            </div>

            <div className="pt-8 text-sm text-gray-500">
              Limited-Time Offer: ₹60,000 (All-Inclusive for 1 Year) • Renewal: ₹10,000/year
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
