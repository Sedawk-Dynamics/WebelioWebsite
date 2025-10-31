import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function StartupKitPortfolioLoading() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <NavBar />

      {/* Hero Skeleton */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="h-16 bg-gray-800 rounded-lg w-3/4 mx-auto animate-pulse"></div>
          <div className="h-8 bg-gray-800 rounded-lg w-1/2 mx-auto animate-pulse"></div>
          <div className="h-px w-32 bg-gray-700 mx-auto"></div>
          <div className="h-6 bg-gray-800 rounded-lg w-2/3 mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Portfolio Grid Skeleton */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden">
              <div className="p-8 border-b border-gray-700">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gray-800 rounded-2xl animate-pulse"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-8 bg-gray-800 rounded w-1/3 animate-pulse"></div>
                    <div className="h-6 bg-gray-800 rounded w-1/2 animate-pulse"></div>
                  </div>
                  <div className="w-40 h-12 bg-gray-800 rounded-lg animate-pulse"></div>
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="h-6 bg-gray-800 rounded w-1/3 animate-pulse"></div>
                  <div className="aspect-[8.5/11] bg-gray-800 rounded-lg animate-pulse"></div>
                  <div className="aspect-[3.5/2] bg-gray-800 rounded-lg animate-pulse"></div>
                </div>
                <div className="space-y-6">
                  <div className="h-6 bg-gray-800 rounded w-1/3 animate-pulse"></div>
                  <div className="h-24 bg-gray-800 rounded-xl animate-pulse"></div>
                  <div className="h-32 bg-gray-800 rounded-xl animate-pulse"></div>
                  <div className="h-32 bg-gray-800 rounded-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
