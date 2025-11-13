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
        {/* Colored gradient overlays */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-webelio-tertiary/8 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-webelio-secondary/8 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-webelio-tertiary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-webelio-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavBar />

        {/* Back Button */}
        <section className="pt-32 pb-8 px-4 sm:px-6 relative">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-b from-webelio-tertiary/3 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-background/40 via-background/30 to-background/40 border border-border/30 text-muted-foreground hover:text-foreground hover:border-webelio-tertiary/50 hover:from-webelio-tertiary/10 hover:via-background/30 hover:to-webelio-secondary/10 transition-all group backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
          </div>
        </section>

        {/* Article */}
        <article className="pb-20 px-4 sm:px-6 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-webelio-tertiary/8 via-webelio-tertiary/3 to-transparent" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-webelio-secondary/8 via-webelio-secondary/3 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-webelio-tertiary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-webelio-secondary/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Header Section */}
            <div className="mb-12 space-y-6 relative">
              {/* Decorative gradient line */}
              <div className="absolute -top-4 left-0 w-24 h-1 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary rounded-full" />
              
              {/* Category */}
              {formattedPost.category && (
                <div>
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary text-webelio-primary text-sm font-semibold rounded-md shadow-lg shadow-webelio-tertiary/20">
                    {formattedPost.category}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-foreground to-webelio-tertiary bg-clip-text text-transparent">
                {formattedPost.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-background/30 border border-border/30 rounded-lg backdrop-blur-sm">
                  <Calendar className="w-4 h-4 text-webelio-tertiary" />
                  <span className="text-muted-foreground">
                    {new Date(formattedPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-background/30 border border-border/30 rounded-lg backdrop-blur-sm">
                  <Clock className="w-4 h-4 text-webelio-secondary" />
                  <span className="text-muted-foreground">{formattedPost.readTime}</span>
                </div>
                {formattedPost.author && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-background/30 border border-border/30 rounded-lg backdrop-blur-sm">
                    <User className="w-4 h-4 text-webelio-tertiary" />
                    <span className="text-muted-foreground">{formattedPost.author}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Image */}
            {formattedPost.image && formattedPost.image !== "/placeholder.svg" && (
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-12 border border-border/30 group">
                <img
                  src={formattedPost.image}
                  alt={formattedPost.title}
                  className="w-full h-full object-cover"
                />
                {/* Colored gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-webelio-tertiary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-br from-webelio-tertiary/10 via-transparent to-webelio-secondary/10" />
                {/* Colored border glow on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-webelio-tertiary/30 rounded-2xl transition-all" />
              </div>
            )}

            {/* Article Content */}
            <div className="relative">
              {/* Content background with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-webelio-tertiary/2 to-transparent rounded-2xl -z-10" />
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-headings:mt-10 prose-headings:mb-4
                  prose-h2:text-3xl prose-h3:text-2xl
                  prose-h2:bg-gradient-to-r prose-h2:from-foreground prose-h2:via-foreground prose-h2:to-webelio-tertiary prose-h2:bg-clip-text prose-h2:text-transparent
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-webelio-tertiary prose-a:no-underline prose-a:font-medium
                  prose-a:hover:underline prose-a:transition-all
                  prose-strong:text-foreground prose-strong:font-bold
                  prose-code:text-webelio-tertiary
                  prose-code:bg-gradient-to-r prose-code:from-webelio-tertiary/20 prose-code:via-background/50 prose-code:to-webelio-secondary/20 prose-code:px-2 prose-code:py-1
                  prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-webelio-tertiary/20
                  prose-pre:bg-gradient-to-br prose-pre:from-background/60 prose-pre:via-background/50 prose-pre:to-background/60 prose-pre:border prose-pre:border-webelio-tertiary/20
                  prose-pre:rounded-xl prose-pre:p-6
                  prose-blockquote:border-l-4 prose-blockquote:border-webelio-tertiary prose-blockquote:bg-webelio-tertiary/5
                  prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:rounded-r-lg
                  prose-blockquote:my-8
                  prose-img:rounded-xl prose-img:border prose-img:border-webelio-tertiary/20 prose-img:shadow-lg prose-img:shadow-webelio-tertiary/10
                  prose-img:my-10
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-ol:my-6 prose-ol:space-y-2
                  prose-li:text-muted-foreground prose-li:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formattedPost.html }}
              />
            </div>

            {/* Tags */}
            {formattedPost.tags && formattedPost.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border/30 relative">
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary" />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                  {formattedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gradient-to-r from-background/40 via-background/30 to-background/40 border border-border/30 text-muted-foreground text-sm rounded-lg hover:border-webelio-tertiary/50 hover:from-webelio-tertiary/10 hover:via-background/30 hover:to-webelio-secondary/10 transition-all backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog Link */}
            <div className="mt-12 pt-8 border-t border-border/30 relative">
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-webelio-tertiary to-webelio-secondary" />
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-background/40 via-background/30 to-background/40 border border-border/30 text-muted-foreground hover:text-foreground hover:border-webelio-tertiary/50 hover:from-webelio-tertiary/10 hover:via-background/30 hover:to-webelio-secondary/10 transition-all group backdrop-blur-sm"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-webelio-tertiary" />
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

