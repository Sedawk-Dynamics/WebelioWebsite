import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function StartupKitLoading() {
  return (
    <main className="relative min-h-screen bg-black">
      <NavBar />

      {/* Hero Section Skeleton */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="h-8 w-48 bg-gray-800 rounded-full mx-auto animate-pulse"></div>
          <div className="h-16 w-96 bg-gray-800 rounded-lg mx-auto animate-pulse"></div>
          <div className="h-8 w-64 bg-gray-800 rounded-lg mx-auto animate-pulse"></div>
          <div className="h-24 w-80 bg-gray-800 rounded-lg mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Deliverables Skeleton */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="h-12 w-64 bg-gray-800 rounded-lg mx-auto mb-16 animate-pulse"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-800 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Skeleton */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="h-12 w-64 bg-gray-800 rounded-lg mx-auto mb-16 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-800 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
