import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-background">
        {/* Hero Section Skeleton */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Skeleton className="h-6 w-48 mx-auto mb-4" />
            <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-24 w-full max-w-3xl mx-auto mb-8" />
            <div className="flex gap-4 justify-center">
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-12 w-48" />
            </div>
          </div>
        </section>

        {/* Stats Skeleton */}
        <section className="py-12 px-4 border-y bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-12 w-24 mx-auto mb-2" />
                  <Skeleton className="h-4 w-32 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter Skeleton */}
        <section className="py-8 px-4 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {[...Array(7)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-32 rounded-full" />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid Skeleton */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <Skeleton className="h-64 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-24 mb-3" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-4 w-32 mb-4" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[...Array(4)].map((_, j) => (
                        <Skeleton key={j} className="h-16 w-full" />
                      ))}
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
