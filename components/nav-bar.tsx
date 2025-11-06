"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Startup Kit", href: "/startup-kit" },
    { name: "Our Projects", href: "/projects" },
    // { name: "Portfolio", href: "/portfolio/digital-marketing" },
    { name: "Our Process", href: "/process" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-gray-800/50" : "bg-black/30 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 py-2" onClick={scrollToTop}>
            <Image src="/images/webelio-logo.png" alt="Webelio" width={120} height={32} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isStartupKit = item.name === "Startup Kit"
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={scrollToTop}
                  className={`relative flex items-center space-x-1.5 text-sm font-medium transition-all duration-300 ${
                    isStartupKit
                      ? "px-3 py-1.5 rounded-full bg-gradient-to-r from-webelio-tertiary/20 via-webelio-secondary/20 to-webelio-tertiary/20 border border-webelio-tertiary/30 text-webelio-tertiary hover:from-webelio-tertiary/30 hover:via-webelio-secondary/30 hover:to-webelio-tertiary/30 hover:border-webelio-tertiary/50 hover:shadow-lg hover:shadow-webelio-tertiary/20"
                      : pathname === item.href
                        ? "text-webelio-tertiary"
                        : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isStartupKit && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-webelio-tertiary/10 via-webelio-secondary/10 to-webelio-tertiary/10"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <Sparkles className="w-3.5 h-3.5 text-webelio-secondary relative z-10" />
                    </>
                  )}
                  <span className={isStartupKit ? "relative z-10 font-semibold" : ""}>{item.name}</span>
                  {isStartupKit && (
                    <motion.span
                      className="relative z-10 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-webelio-secondary/20 text-webelio-secondary border border-webelio-secondary/30"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      NEW
                    </motion.span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right side items - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <LanguageSelector /> */}
            <Link href="/consultation" onClick={scrollToTop}>
              <Button className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button and Free Consultation */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link href="/consultation" onClick={scrollToTop}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium text-xs px-3 py-2"
              >
                <Zap className="w-3 h-3 mr-1" />
                Free
              </Button>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b border-gray-800 ${
                scrolled ? "bg-black/70" : "bg-black/30"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => {
                  const isStartupKit = item.name === "Startup Kit"
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false)
                        scrollToTop()
                      }}
                      className={`relative flex items-center space-x-2 text-base font-medium transition-all duration-300 ${
                        isStartupKit
                          ? "px-4 py-2.5 rounded-lg bg-gradient-to-r from-webelio-tertiary/20 via-webelio-secondary/20 to-webelio-tertiary/20 border border-webelio-tertiary/30 text-webelio-tertiary hover:from-webelio-tertiary/30 hover:via-webelio-secondary/30 hover:to-webelio-tertiary/30 hover:border-webelio-tertiary/50 hover:shadow-lg hover:shadow-webelio-tertiary/20"
                          : pathname === item.href
                            ? "text-webelio-tertiary"
                            : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {isStartupKit && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-lg bg-gradient-to-r from-webelio-tertiary/10 via-webelio-secondary/10 to-webelio-tertiary/10"
                            animate={{
                              opacity: [0.3, 0.6, 0.3],
                              scale: [1, 1.02, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <Sparkles className="w-4 h-4 text-webelio-secondary relative z-10" />
                        </>
                      )}
                      <span className={isStartupKit ? "relative z-10 font-semibold" : ""}>{item.name}</span>
                      {isStartupKit && (
                        <motion.span
                          className="relative z-10 text-xs font-bold px-2 py-0.5 rounded-full bg-webelio-secondary/20 text-webelio-secondary border border-webelio-secondary/30"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          NEW
                        </motion.span>
                      )}
                    </Link>
                  )
                })}
                <div className="pt-4 border-t border-gray-700">
                  <Link
                    href="/consultation"
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                  >
                    <Button className="w-full bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-medium">
                      <Zap className="w-4 h-4 mr-2" />
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
