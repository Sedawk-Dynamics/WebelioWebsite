"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6"
    >
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
        <span className="text-foreground">Webelio </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-webelio-tertiary to-webelio-secondary">
          Blog
        </span>
      </h1>
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Insights, tutorials, and industry trends from our team of technology experts
      </p>
    </motion.div>
  )
}

