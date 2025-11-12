"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { SpinningEarth } from "@/components/spinning-earth"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Technology", "Mobile Development", "Web Development", "AI/ML", "IoT", "Cybersecurity"]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Mobile App Development in 2025",
      excerpt:
        "Explore the emerging trends in mobile development, from AI-powered apps to cross-platform solutions that are shaping the future.",
      category: "Mobile Development",
      date: "2024-12-15",
      readTime: "5 min read",
      image: "/modern-mobile-app-development.jpg",
      slug: "future-mobile-app-development-2025",
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Next.js",
      excerpt:
        "Learn how Next.js 16 and React 19 are revolutionizing web development with improved performance and developer experience.",
      category: "Web Development",
      date: "2024-12-10",
      readTime: "7 min read",
      image: "/nextjs-web-development.jpg",
      slug: "building-scalable-web-applications-nextjs",
    },
    {
      id: 3,
      title: "AI and Machine Learning in Business: A Practical Guide",
      excerpt:
        "Discover how businesses are leveraging AI and ML to automate processes, enhance decision-making, and drive innovation.",
      category: "AI/ML",
      date: "2024-12-05",
      readTime: "8 min read",
      image: "/ai-business-concept.png",
      slug: "ai-machine-learning-business-guide",
    },
    {
      id: 4,
      title: "IoT Revolution: Connecting the Physical and Digital Worlds",
      excerpt:
        "An in-depth look at how IoT devices are transforming industries from healthcare to manufacturing and smart cities.",
      category: "IoT",
      date: "2024-11-28",
      readTime: "6 min read",
      image: "/iot-smart-devices-technology.jpg",
      slug: "iot-revolution-connecting-worlds",
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices for Modern Applications",
      excerpt:
        "Essential security practices every development team should implement to protect applications and user data.",
      category: "Cybersecurity",
      date: "2024-11-20",
      readTime: "6 min read",
      image: "/cybersecurity-digital-protection.png",
      slug: "cybersecurity-best-practices-modern-applications",
    },
    {
      id: 6,
      title: "The Rise of Progressive Web Apps (PWAs)",
      excerpt:
        "Why PWAs are becoming the go-to solution for businesses looking to provide app-like experiences on the web.",
      category: "Web Development",
      date: "2024-11-15",
      readTime: "5 min read",
      image: "/progressive-web-apps-pwa.jpg",
      slug: "rise-of-progressive-web-apps",
    },
  ]

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        <div className="opacity-10">
          <SpinningEarth />
        </div>
        <div className="opacity-10">
          <CodeRain />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavBar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
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

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-webelio-tertiary to-webelio-secondary text-webelio-primary"
                      : "bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:border-webelio-tertiary/50 hover:text-webelio-tertiary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-webelio-tertiary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-webelio-tertiary/50 transition-colors h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-webelio-tertiary/90 text-webelio-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-webelio-tertiary transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>

                      {/* Read More Link */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-webelio-tertiary font-medium text-sm group-hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
                <p className="text-muted-foreground text-lg">No blog posts found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link
                    href="/consultation"
                    className="px-8 py-4 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary text-webelio-primary rounded-lg font-medium hover:from-webelio-tertiary/80 hover:to-webelio-secondary/80 transition-all transform hover:scale-105"
                  >
                    Subscribe Now
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-4 bg-background/50 border border-border/50 text-foreground rounded-lg font-medium hover:border-webelio-tertiary/50 transition-all"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
