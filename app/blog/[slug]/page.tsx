import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { SpinningEarth } from "@/components/spinning-earth"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import { getGhostPostBySlug, formatGhostPost } from "@/lib/ghost-api"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getGhostPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const formattedPost = formatGhostPost(post)

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

        {/* Back Button */}
        <section className="pt-32 pb-8 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-webelio-tertiary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            {formattedPost.category && (
              <div className="mb-6">
                <span className="px-4 py-2 bg-webelio-tertiary/20 text-webelio-tertiary text-sm font-medium rounded-full border border-webelio-tertiary/30">
                  {formattedPost.category}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {formattedPost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(formattedPost.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{formattedPost.readTime}</span>
              </div>
              {formattedPost.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{formattedPost.author}</span>
                </div>
              )}
            </div>

            {/* Featured Image */}
            {formattedPost.image && formattedPost.image !== "/placeholder.svg" && (
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-12">
                <img
                  src={formattedPost.image}
                  alt={formattedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-foreground
                prose-p:text-muted-foreground
                prose-a:text-webelio-tertiary
                prose-a:no-underline
                prose-a:hover:underline
                prose-strong:text-foreground
                prose-code:text-webelio-tertiary
                prose-code:bg-background/50
                prose-code:px-1
                prose-code:py-0.5
                prose-code:rounded
                prose-pre:bg-background/50
                prose-pre:border
                prose-pre:border-border/50
                prose-blockquote:border-webelio-tertiary/50
                prose-blockquote:text-muted-foreground
                prose-img:rounded-lg
                prose-img:border
                prose-img:border-border/50"
              dangerouslySetInnerHTML={{ __html: formattedPost.html }}
            />

            {/* Tags */}
            {formattedPost.tags && formattedPost.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border/50">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {formattedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background/50 border border-border/50 text-muted-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog Link */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-webelio-tertiary font-medium hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}

