import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Recent Work",
  description: "Founded in 2009, we have been consistently supporting startups and enterprises. Explore our comprehensive portfolio of successful client projects across web, mobile, IoT, and AI/ML solutions.",
  openGraph: {
    title: "Our Recent Work | Webelio",
    description: "Founded in 2009, we have been consistently supporting startups and enterprises. Explore our comprehensive portfolio of successful client projects.",
    url: "https://webel.io/projects",
    type: "website",
  },
  alternates: {
    canonical: "https://webel.io/projects",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

