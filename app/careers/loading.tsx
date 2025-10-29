import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-webelio-primary via-webelio-primary/95 to-webelio-primary/90">
      {/* Navigation Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Skeleton className="h-8 w-32 bg-white/10" />
            <div className="hidden lg:flex items-center space-x-8">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-16 bg-white/10" />
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full bg-white/10" />
              <Skeleton className="h-10 w-32 bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="space-y-6">
            <Skeleton className="h-16 w-96 mx-auto bg-white/10" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto bg-white/10" />
            <Skeleton className="h-6 w-2/3 max-w-2xl mx-auto bg-white/10" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Skeleton className="h-12 w-48 bg-white/10" />
              <Skeleton className="h-12 w-48 bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Culture Values Skeleton */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-80 mx-auto mb-4 bg-white/10" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <Skeleton className="h-8 w-8 mx-auto mb-4 bg-white/10" />
                  <Skeleton className="h-6 w-24 mx-auto mb-3 bg-white/10" />
                  <Skeleton className="h-4 w-full mb-2 bg-white/10" />
                  <Skeleton className="h-4 w-3/4 mx-auto bg-white/10" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Webelio Skeleton */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-64 mx-auto mb-4 bg-white/10" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-white/10 border-white/20 overflow-hidden">
                <Skeleton className="h-64 w-full bg-white/10" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Skeleton */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-72 mx-auto mb-4 bg-white/10" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Skeleton className="h-6 w-6 bg-white/10" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-32 mb-2 bg-white/10" />
                      <Skeleton className="h-4 w-full mb-1 bg-white/10" />
                      <Skeleton className="h-4 w-3/4 bg-white/10" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Skeleton */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-64 mx-auto mb-4 bg-white/10" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-white/10" />
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-48 bg-white/10" />
                    <div className="flex gap-2">
                      <Skeleton className="h-4 w-20 bg-white/10" />
                      <Skeleton className="h-4 w-24 bg-white/10" />
                      <Skeleton className="h-4 w-16 bg-white/10" />
                    </div>
                    <Skeleton className="h-4 w-full bg-white/10" />
                    <Skeleton className="h-4 w-3/4 bg-white/10" />
                    <div className="flex gap-2">
                      {[...Array(4)].map((_, j) => (
                        <Skeleton key={j} className="h-6 w-16 bg-white/10" />
                      ))}
                    </div>
                    <Skeleton className="h-10 w-full bg-white/10" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Skeleton */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="space-y-6">
            <Skeleton className="h-12 w-80 mx-auto bg-white/10" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto bg-white/10" />
            <Skeleton className="h-4 w-3/4 max-w-xl mx-auto bg-white/10" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Skeleton className="h-12 w-40 bg-white/10" />
              <Skeleton className="h-12 w-40 bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <Skeleton className="h-8 w-32 mb-4 bg-white/10" />
              <Skeleton className="h-4 w-full mb-2 bg-white/10" />
              <Skeleton className="h-4 w-3/4 mb-4 bg-white/10" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-white/10" />
                <Skeleton className="h-4 w-32 bg-white/10" />
                <Skeleton className="h-4 w-40 bg-white/10" />
              </div>
            </div>
            {[...Array(2)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-6 w-24 mb-4 bg-white/10" />
                <div className="space-y-2">
                  {[...Array(6)].map((_, j) => (
                    <Skeleton key={j} className="h-4 w-32 bg-white/10" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
