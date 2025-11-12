"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function BlogNewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail("")
    }, 500)
  }

  return (
    <div className="w-full">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-webelio-tertiary/50 focus:border-webelio-tertiary/50 transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary text-webelio-primary rounded-lg font-medium hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Subscribe</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="text-center py-3">
          <p className="text-sm text-webelio-tertiary font-medium">Thanks for subscribing!</p>
        </div>
      )}
    </div>
  )
}

