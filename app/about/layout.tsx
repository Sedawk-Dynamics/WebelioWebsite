import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Webelio Digital, an innovative company is your go to place for cutting-edge IT solutions. Founded in 2009, we have been consistently supporting startups and enterprises with world-class software development services.",
  openGraph: {
    title: "About Us | Webelio",
    description: "Webelio Digital, an innovative company is your go to place for cutting-edge IT solutions. Founded in 2009, we have been consistently supporting startups and enterprises with world-class software development services.",
    url: "https://webel.io/about",
    type: "website",
  },
  alternates: {
    canonical: "https://webel.io/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

