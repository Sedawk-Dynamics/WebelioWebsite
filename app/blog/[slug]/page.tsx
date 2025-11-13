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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/30 border border-border/30 text-muted-foreground hover:text-foreground hover:border-webelio-tertiary/50 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
          </div>
        </section>

        {/* Article */}
        <article className="pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 space-y-6">
              {/* Category */}
              {formattedPost.category && (
                <div>
                  <span className="inline-block px-4 py-1.5 bg-webelio-tertiary text-webelio-primary text-sm font-semibold rounded-md">
                    {formattedPost.category}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {formattedPost.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
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
            </div>

            {/* Featured Image */}
            {formattedPost.image && formattedPost.image !== "/placeholder.svg" && (
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-12 border border-border/30">
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
                prose-headings:text-foreground prose-headings:font-bold
                prose-headings:mt-10 prose-headings:mb-4
                prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-webelio-tertiary prose-a:no-underline prose-a:font-medium
                prose-a:hover:underline prose-a:transition-all
                prose-strong:text-foreground prose-strong:font-bold
                prose-code:text-webelio-tertiary
                prose-code:bg-background/50 prose-code:px-2 prose-code:py-1
                prose-code:rounded prose-code:font-mono prose-code:text-sm
                prose-pre:bg-background/50 prose-pre:border prose-pre:border-border/50
                prose-pre:rounded-xl prose-pre:p-6
                prose-blockquote:border-l-4 prose-blockquote:border-webelio-tertiary
                prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground
                prose-blockquote:my-8
                prose-img:rounded-xl prose-img:border prose-img:border-border/50
                prose-img:my-10
                prose-ul:my-6 prose-ul:space-y-2
                prose-ol:my-6 prose-ol:space-y-2
                prose-li:text-muted-foreground prose-li:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formattedPost.html }}
            />

            {/* Tags */}
            {formattedPost.tags && formattedPost.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border/30">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                  {formattedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-background/30 border border-border/30 text-muted-foreground text-sm rounded-lg hover:border-webelio-tertiary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog Link */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/30 border border-border/30 text-muted-foreground hover:text-foreground hover:border-webelio-tertiary/50 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  )
}

