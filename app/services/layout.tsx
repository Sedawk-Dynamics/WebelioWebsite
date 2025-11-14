import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Global IT & Software Solutions & Consulting Firm delivering innovative digital solutions across mobile, web, IoT, AI/ML, and cybersecurity. Transform your digital future with our comprehensive technology services.",
  openGraph: {
    title: "Services | Webelio",
    description: "Global IT & Software Solutions & Consulting Firm delivering innovative digital solutions across mobile, web, IoT, AI/ML, and cybersecurity.",
    url: "https://webel.io/services",
    type: "website",
  },
  alternates: {
    canonical: "https://webel.io/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

