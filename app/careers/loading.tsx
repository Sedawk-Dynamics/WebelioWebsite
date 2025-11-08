import { Skeleton } from "@/components/ui/skeleton"

export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Hero skeleton */}
          <div className="text-center space-y-6">
            <Skeleton className="h-16 w-48 mx-auto" />
            <Skeleton className="h-20 w-96 mx-auto" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>

          {/* Benefits skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full" />
            ))}
          </div>

          {/* Positions skeleton */}
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-40 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
