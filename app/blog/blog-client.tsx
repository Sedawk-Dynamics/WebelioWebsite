"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
}

interface BlogClientProps {
  posts: BlogPost[]
  categories: string[]
}

export function BlogClient({ posts, categories: initialCategories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  // Extract unique categories from posts, excluding "Uncategorized"
  const allCategories = useMemo(() => {
    const postCategories = posts
      .map((post) => post.category)
      .filter((cat) => Boolean(cat) && cat !== "Uncategorized")
    const uniqueCategories = Array.from(new Set(postCategories))
    return uniqueCategories
  }, [posts])

  const filteredPosts = useMemo(
    () => (selectedCategory === "" ? posts : posts.filter((post) => post.category === selectedCategory)),
    [posts, selectedCategory]
  )

  return (
    <>
      {/* Category Filter - Pill Style */}
      {allCategories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === ""
                ? "bg-webelio-tertiary text-webelio-primary"
                : "bg-background/30 border border-border/30 text-muted-foreground hover:border-webelio-tertiary/50 hover:text-foreground"
            }`}
          >
            All Posts
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? "" : category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-webelio-tertiary text-webelio-primary"
                  : "bg-background/30 border border-border/30 text-muted-foreground hover:border-webelio-tertiary/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      )}

      {/* Modern Card Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="relative h-full bg-background/40 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden hover:border-webelio-tertiary/50 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-webelio-tertiary/10">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-background/20">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Category badge */}
                        {post.category && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-webelio-tertiary text-webelio-primary text-xs font-semibold rounded-md">
                              {post.category}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-webelio-tertiary transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center gap-2 text-webelio-tertiary font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>Continue Reading</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">No blog posts found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

