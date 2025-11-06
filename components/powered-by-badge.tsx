"use client"

import { motion } from "framer-motion"

export function PoweredByBadge() {
  return (
    <div className="relative inline-block">
      <motion.div
        className="inline-flex items-center space-x-2 px-4 py-2 bg-background/10 backdrop-blur-sm border border-webelio-secondary/20 rounded-full text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-muted-foreground">Powered by</span>
        <div className="flex items-center space-x-2">
          <img src="/images/webelio_favicon_icon.png" alt="Webelio" className="h-5 w-5" />
        </div>
      </motion.div>
    </div>
  )
}
