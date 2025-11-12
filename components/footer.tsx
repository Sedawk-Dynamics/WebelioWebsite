"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  MessageSquare,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import { NewsletterForm } from "./newsletter-form"
import { FooterPopup } from "./footer-popup"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const footerSections = [
    {
      id: "services",
      title: "Services",
      items: [
        { label: "Mobile App Development", href: "/services" },
        { label: "Web Development", href: "/services" },
        { label: "Cross Platform Apps", href: "/services" },
        { label: "IoT & Hardware", href: "/services" },
        { label: "UI/UX Design", href: "/services" },
        { label: "Cybersecurity", href: "/services" },
        { label: "AI/ML Solutions", href: "/services" },
        { label: "Software Automation", href: "/services" },
      ],
    },
    {
      id: "company",
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Projects", href: "/projects" },
        { label: "Process", href: "/process" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/webeliodigital", icon: Facebook },
    { name: "X (Twitter)", href: "https://x.com/webelio_", icon: Twitter },
    { name: "Instagram", href: "https://www.instagram.com/webelio_/", icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/webelio-digital/", icon: Linkedin },
    { name: "YouTube", href: "https://www.youtube.com/@WebelioDigital", icon: Youtube },
  ]

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border/50 relative overflow-hidden">
      {/* Code background */}
      <div className="absolute inset-0 opacity-5">
        <pre className="text-xs text-primary/30 font-mono leading-relaxed transform rotate-6 scale-150 absolute -top-20 -left-20">
          {`function innovate() {
  const solutions = [];
  
  // Mobile Development
  solutions.push({
    framework: 'React Native',
    platform: 'iOS & Android',
    backend: 'Node.js',
    database: 'MongoDB'
  });
  
  // IoT Solutions
  solutions.push({
    hardware: 'Arduino/Raspberry Pi',
    connectivity: '5G/WiFi',
    cloud: 'AWS IoT',
    analytics: 'Real-time'
  });
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/images/webelio-logo.png" alt="Webelio" className="h-8" />
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Global IT & Software Solutions & Consulting Firm delivering innovative digital solutions since 2019.
              </p>
              <p className="text-muted-foreground text-xs mb-4">A brand of Sedawk Dynamics Pvt Ltd</p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>5th Floor, Tech Garden, Plot No 4, Sector 35, Udyog Vihar-VII, Gurugram, Haryana, 122004</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 97735 96863</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@sedawk.in</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.id}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-webelio-tertiary transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-8 border-t border-border/30">
            <div className="flex items-center space-x-4">
              <FooterPopup />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="text-muted-foreground text-xs">
                &copy; {new Date().getFullYear()} Sedawk Dynamics Pvt Ltd. All rights reserved.
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Webelio on ${name}`}
                      className="text-muted-foreground hover:text-webelio-tertiary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <Button
                  onClick={() => (window.location.href = "/support")}
                  className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium px-4 py-2 text-sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Subscribe to our newsletter</span>
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer - Stacked with collapsible sections */}
        <div className="md:hidden space-y-6">
          {/* Logo and main info */}
          <div className="text-center space-y-4">
            <img src="/images/webelio-logo.png" alt="Webelio" className="h-8 mx-auto" />
            <p className="text-muted-foreground text-sm">Global IT & Software Solutions & Consulting Firm</p>
            <p className="text-muted-foreground text-xs">A brand of Sedawk Dynamics Pvt Ltd</p>
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Sedawk Dynamics Pvt Ltd. All rights reserved.
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 97735 96863</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@sedawk.in</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-2">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Webelio on ${name}`}
                className="text-muted-foreground hover:text-webelio-tertiary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Collapsible sections */}
          <div className="space-y-2">
            {footerSections.map((section) => (
              <div key={section.id} className="border border-border/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-background/50 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-sm">{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2 border-t border-border/30">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="block text-sm text-muted-foreground hover:text-webelio-tertiary transition-colors py-1"
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Newsletter signup and chat button */}
          <div className="text-center space-y-4 pt-4 border-t border-border/30">
            <span className="text-sm text-muted-foreground">Stay updated</span>
            <div className="px-4">
              <NewsletterForm />
            </div>
            <Button
              onClick={() => (window.location.href = "/support")}
              className="w-full bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium px-4 py-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
