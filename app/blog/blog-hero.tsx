"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative py-20"
    >
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-10 right-10 w-32 h-32 border border-webelio-tertiary/20 rounded-lg"
        />
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -45 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-10 left-10 w-24 h-24 border border-webelio-secondary/20 rounded-full"
        />
      </div>

      {/* Centered content */}
      <div className="relative text-center space-y-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-background/30 backdrop-blur-sm border border-border/30 rounded-full">
            <div className="w-2 h-2 bg-webelio-tertiary rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Latest Articles</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold">
            <span className="block">Blog</span>
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-webelio-tertiary to-transparent mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Discover insights, tutorials, and stories from our team of technology experts
        </motion.p>
      </div>
    </motion.div>
  )
}

