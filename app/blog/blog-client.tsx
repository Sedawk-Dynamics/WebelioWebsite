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
      {/* Category Filter */}
      {allCategories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? "" : category)}
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
      )}

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
                    {post.category && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-webelio-tertiary/90 text-webelio-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    )}
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
    </>
  )
}

