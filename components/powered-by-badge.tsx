"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Clock, DollarSign, Users, Award, X, CheckCircle, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PoweredByBadge() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (showSidebar && isMobile) {
      const timer = setTimeout(() => {
        setShowSidebar(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showSidebar, isMobile])

  const handleClick = () => {
    setShowSidebar(true)
  }

  const handleClose = () => {
    setShowSidebar(false)
  }

  return (
    <>
      <div className="relative inline-block">
        <motion.div
          className="inline-flex items-center space-x-2 px-4 py-2 bg-background/10 backdrop-blur-sm border border-webelio-secondary/20 rounded-full text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={handleClick}
        >
          <span className="text-muted-foreground">Powered by</span>
          <div className="flex items-center space-x-2">
            <img src="/images/webelio-icon.png" alt="Webelio" className="h-5 w-5" />
            <span className="font-semibold text-webelio-secondary">webelio</span>
          </div>
        </motion.div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={handleClose}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-full max-w-md bg-black/95 backdrop-blur-xl border-r border-gray-800 z-50 overflow-y-auto"
              onMouseEnter={() => !isMobile && setShowSidebar(true)}
            >
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="p-6 space-y-8">
                {/* Header with large logo */}
                <div className="text-center space-y-4 pt-8">
                  <div className="flex justify-center">
                    <img src="/images/webelio-logo.png" alt="Webelio" className="w-40 h-12 object-contain" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Partnership Program</h2>
                  <p className="text-gray-400">Exclusive benefits for our valued partners</p>
                </div>

                {/* Large powered by badge preview */}
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <div className="text-sm text-gray-400 mb-4 text-center">How it appears on your site:</div>
                  <div className="flex justify-center">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-background/10 backdrop-blur-sm border border-webelio-secondary/20 rounded-full text-sm">
                      <span className="text-muted-foreground">Powered by</span>
                      <div className="flex items-center space-x-2">
                        <img src="/images/webelio-icon.png" alt="Webelio" className="h-5 w-5" />
                        <span className="font-semibold text-webelio-secondary">webelio</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits grid */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Star className="w-5 h-5 mr-2 text-webelio-tertiary" />
                    Partnership Benefits
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-webelio-tertiary/10 to-webelio-secondary/10 rounded-xl p-4 border border-webelio-tertiary/20">
                      <div className="flex items-start space-x-3">
                        <DollarSign className="w-6 h-6 text-webelio-tertiary mt-1" />
                        <div>
                          <h4 className="font-bold text-webelio-tertiary text-lg">15% Development Discount</h4>
                          <p className="text-gray-300 text-sm">
                            Save thousands on your project cost with our partnership pricing
                          </p>
                          <Badge variant="outline" className="mt-2 text-webelio-tertiary border-webelio-tertiary/30">
                            Up to ₹25,00,000 savings
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-webelio-secondary/10 to-webelio-tertiary/10 rounded-xl p-4 border border-webelio-secondary/20">
                      <div className="flex items-start space-x-3">
                        <Clock className="w-6 h-6 text-webelio-secondary mt-1" />
                        <div>
                          <h4 className="font-bold text-webelio-secondary text-lg">3 Months Free Maintenance</h4>
                          <p className="text-gray-300 text-sm">
                            Includes updates, bug fixes, performance optimization, and technical support
                          </p>
                          <Badge variant="outline" className="mt-2 text-webelio-secondary border-webelio-secondary/30">
                            ₹4,00,000 value
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-webelio-accent/10 to-webelio-tertiary/10 rounded-xl p-4 border border-webelio-accent/20">
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-webelio-accent mt-1" />
                        <div>
                          <h4 className="font-bold text-webelio-accent text-lg">Priority Support Queue</h4>
                          <p className="text-gray-300 text-sm">
                            24/7 dedicated support channel with guaranteed response times
                          </p>
                          <Badge variant="outline" className="mt-2 text-webelio-accent border-webelio-accent/30">
                            VIP Access
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-webelio-tertiary/10 to-webelio-accent/10 rounded-xl p-4 border border-webelio-tertiary/20">
                      <div className="flex items-start space-x-3">
                        <Award className="w-6 h-6 text-webelio-tertiary mt-1" />
                        <div>
                          <h4 className="font-bold text-webelio-tertiary text-lg">Flexible Badge Removal</h4>
                          <p className="text-gray-300 text-sm">
                            Remove the badge anytime after project completion at no additional cost
                          </p>
                          <Badge variant="outline" className="mt-2 text-webelio-tertiary border-webelio-tertiary/30">
                            No strings attached
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-webelio-secondary/10 to-webelio-accent/10 rounded-xl p-4 border border-webelio-secondary/20">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-6 h-6 text-webelio-secondary mt-1" />
                        <div>
                          <h4 className="font-bold text-webelio-secondary text-lg">Performance Optimization</h4>
                          <p className="text-gray-300 text-sm">
                            Advanced performance monitoring and optimization included
                          </p>
                          <Badge
                            variant="outline"
                            className="mt-2 text-webebelio-secondary border-webelio-secondary/30"
                          >
                            99.9% uptime guarantee
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-webelio-accent/10 to-webelio-secondary/10 rounded-xl p-4 border border-webelio-accent/20">
                      <div className="flex items-start space-x-3">
                        <Globe className="w-6 h-6 text-webelio-accent mt-1" />
                        <div>
                          <h4 className="font-bold text-webelio-accent text-lg">Global CDN & Hosting</h4>
                          <p className="text-gray-300 text-sm">
                            Free global content delivery network and premium hosting for 6 months
                          </p>
                          <Badge variant="outline" className="mt-2 text-webelio-accent border-webelio-accent/30">
                            ₹1,60,000 value
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total value */}
                <div className="bg-gradient-to-r from-webelio-tertiary to-webelio-secondary rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-webelio-primary mb-2">💰 Total Partnership Value</div>
                  <div className="text-3xl font-bold text-webelio-primary">Up to ₹40,00,000</div>
                  <div className="text-webelio-primary/80 text-sm mt-1">Average savings per partnership</div>
                </div>

                {/* Requirements */}
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <h4 className="font-bold text-white mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-webelio-tertiary" />
                    Partnership Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-webelio-tertiary rounded-full mr-3"></div>
                      Minimum project value of ₹4,00,000
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-webelio-tertiary rounded-full mr-3"></div>
                      Badge displayed for minimum 6 months
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-webelio-tertiary rounded-full mr-3"></div>
                      Professional website or application
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-webelio-tertiary rounded-full mr-3"></div>
                      Compliance with our brand guidelines
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-webelio-tertiary to-webelio-secondary hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 text-webelio-primary font-bold py-3"
                    onClick={() => (window.location.href = "/partnership")}
                  >
                    Apply for Partnership
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
