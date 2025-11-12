"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BlogNewsletterForm } from "./blog-newsletter-form"

export function NewsletterCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-webelio-tertiary/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-webelio-tertiary/20 to-webelio-secondary/20 rounded-3xl blur-3xl opacity-50" />
          <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-foreground">Stay Updated with </span>
              <span className="text-webelio-tertiary">Tech Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest articles, industry trends, and technology updates delivered
              to your inbox.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 pt-4">
              <div className="w-full max-w-md">
                <BlogNewsletterForm />
              </div>
              <Link
                href="/projects"
                className="px-8 py-4 bg-background/50 border border-border/50 text-foreground rounded-lg font-medium hover:border-webelio-tertiary/50 transition-all"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

