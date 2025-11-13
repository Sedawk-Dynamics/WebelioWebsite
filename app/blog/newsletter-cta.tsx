"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BlogNewsletterForm } from "./blog-newsletter-form"
import { ArrowRight, Mail } from "lucide-react"

export function NewsletterCTA() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Centered Card Design */}
          <div className="relative bg-background/40 backdrop-blur-sm border border-border/40 rounded-2xl p-8 sm:p-12 text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-webelio-tertiary/20 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-webelio-tertiary" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Stay in the Loop
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Subscribe to get the latest articles, insights, and updates delivered to your inbox.
              </p>
            </div>

            {/* Form */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <BlogNewsletterForm />
              </div>
            </div>

            {/* Bottom Link */}
            <div className="pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span>Explore our projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

