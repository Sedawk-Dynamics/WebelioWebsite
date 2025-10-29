"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function CaseStudiesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <NavBar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Skeleton */}
          <div className="text-center mb-16">
            <div className="w-32 h-6 bg-gray-700 rounded-full mx-auto mb-6 animate-pulse"></div>
            <div className="w-96 h-12 bg-gray-700 rounded-lg mx-auto mb-8 animate-pulse"></div>
            <div className="w-full max-w-4xl h-6 bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-3/4 h-6 bg-gray-700 rounded mx-auto animate-pulse"></div>
          </div>

          {/* Filter Tabs Skeleton */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="w-32 h-12 bg-gray-700 rounded-full animate-pulse"></div>
            ))}
          </div>

          {/* Case Studies Grid Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden">
                <div className="h-48 bg-gray-700 animate-pulse"></div>
                <div className="p-6 space-y-4">
                  <div className="w-3/4 h-6 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-1/2 h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-full h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-5/6 h-4 bg-gray-700 rounded animate-pulse"></div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="p-3 bg-gray-700/30 rounded-lg">
                        <div className="w-16 h-6 bg-gray-600 rounded mx-auto mb-2 animate-pulse"></div>
                        <div className="w-20 h-3 bg-gray-600 rounded mx-auto animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-12 bg-gray-700 rounded-lg animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section Skeleton */}
          <div className="bg-gray-800/50 rounded-3xl p-12 text-center">
            <div className="w-96 h-8 bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-full max-w-2xl h-6 bg-gray-700 rounded mx-auto mb-8 animate-pulse"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="w-48 h-12 bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="w-48 h-12 bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
