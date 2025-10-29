import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-webelio-primary via-webelio-primary/95 to-webelio-primary/90">
      <NavBar />

      {/* Hero Section Skeleton */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Skeleton className="h-8 w-32 mx-auto mb-6 bg-white/10" />
          <Skeleton className="h-16 w-3/4 mx-auto mb-6 bg-white/10" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-4 bg-white/10" />
          <Skeleton className="h-6 w-1/2 mx-auto bg-white/10" />
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4 bg-white/10" />
                <Skeleton className="h-8 w-16 mx-auto mb-2 bg-white/10" />
                <Skeleton className="h-4 w-24 mx-auto bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <Skeleton className="w-8 h-8 mr-3 bg-white/20" />
                  <Skeleton className="h-8 w-40 bg-white/20" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full bg-white/20" />
                  <Skeleton className="h-4 w-full bg-white/20" />
                  <Skeleton className="h-4 w-3/4 bg-white/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team Photo Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-80 mx-auto mb-4 bg-white/10" />
            <Skeleton className="h-6 w-60 mx-auto bg-white/10" />
          </div>
          <Skeleton className="w-full h-96 md:h-[500px] rounded-2xl bg-white/10" />
        </div>
      </section>

      {/* Founders Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-60 mx-auto mb-4 bg-white/10" />
            <Skeleton className="h-6 w-80 mx-auto bg-white/10" />
          </div>
          <div className="flex justify-center gap-12">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="w-48 h-48 rounded-full mx-auto mb-6 bg-white/10" />
                <Skeleton className="h-6 w-40 mx-auto mb-2 bg-white/10" />
                <Skeleton className="h-4 w-32 mx-auto bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-48 mx-auto mb-4 bg-white/10" />
            <Skeleton className="h-6 w-72 mx-auto bg-white/10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {[...Array(19)].map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4 bg-white/10" />
                <Skeleton className="h-4 w-28 mx-auto mb-1 bg-white/10" />
                <Skeleton className="h-3 w-24 mx-auto bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-10 w-80 mx-auto mb-6 bg-white/10" />
          <Skeleton className="h-6 w-96 mx-auto mb-8 bg-white/10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-40 bg-white/10" />
            <Skeleton className="h-12 w-40 bg-white/10" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
