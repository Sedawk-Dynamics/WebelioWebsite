import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { SpinningEarth } from "@/components/spinning-earth"
import { getGhostPosts, formatGhostPost } from "@/lib/ghost-api"
import { BlogClient } from "./blog-client"
import { BlogHero } from "./blog-hero"
import { NewsletterCTA } from "./newsletter-cta"

export default async function BlogPage() {
  let blogPosts: Array<{
    id: string
    title: string
    slug: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
  }> = []

  try {
    const response = await getGhostPosts({
      limit: 9,
      include: "authors,tags",
    })
    blogPosts = response.posts.map(formatGhostPost)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    // If Ghost API fails, blogPosts will remain empty array
  }

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
            <BlogHero />
            <BlogClient posts={blogPosts} categories={[]} />
          </div>
        </section>

        {/* Newsletter CTA */}
        <NewsletterCTA />

        <Footer />
      </div>
    </main>
  )
}
