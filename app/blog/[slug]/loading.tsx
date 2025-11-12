import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { SpinningEarth } from "@/components/spinning-earth"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPostLoading() {
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

        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button Skeleton */}
            <Skeleton className="h-6 w-32 mb-8" />

            {/* Category Badge Skeleton */}
            <Skeleton className="h-8 w-24 mb-6" />

            {/* Title Skeleton */}
            <Skeleton className="h-16 w-full mb-6" />

            {/* Meta Info Skeleton */}
            <div className="flex gap-6 mb-8 pb-8 border-b border-border/50">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-28" />
            </div>

            {/* Featured Image Skeleton */}
            <Skeleton className="aspect-video w-full rounded-2xl mb-12" />

            {/* Content Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

