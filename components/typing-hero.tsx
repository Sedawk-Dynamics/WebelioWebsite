"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TypingHero() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Your Company's Digital Presence",
    "Mobile Applications",
    "Website Development",
    "Branding & Creatives",
    "Enterprise Grade Softwares",
    "Custom ERP Solutions",
    "AI/ML Solutions",
    "Embedded and IOT Solutions"
  ]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <div className="space-y-4">
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-foreground">We Build </span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-webelio-tertiary via-webelio-secondary to-webelio-accent">
          {currentText}
          <motion.span
            className="inline-block w-1 h-12 sm:h-16 lg:h-20 bg-webelio-secondary ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </span>
      </motion.h1>
    </div>
  )
}
