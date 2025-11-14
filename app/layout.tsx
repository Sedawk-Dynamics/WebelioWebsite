import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { BusinessProfileHeader } from "@/components/business-profile-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://webel.io'),
  title: {
    default: "Webelio - IT & Software Solutions",
    template: "%s | Webelio"
  },
  description:
    "Global IT & Software Solutions & Consulting Firm delivering innovative digital solutions across mobile, web, IoT, AI/ML, and cybersecurity",
  keywords: [
    "IT Solutions",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "IoT Solutions",
    "AI/ML Solutions",
    "Cybersecurity",
    "Digital Transformation",
    "Consulting Services"
  ],
  authors: [{ name: "Webelio" }],
  creator: "Webelio",
  publisher: "Webelio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webel.io",
    siteName: "Webelio",
    title: "Webelio - IT & Software Solutions",
    description: "Global IT & Software Solutions & Consulting Firm delivering innovative digital solutions across mobile, web, IoT, AI/ML, and cybersecurity",
    images: [
      {
        url: "/images/webelio-logo.png",
        width: 1200,
        height: 630,
        alt: "Webelio - IT & Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webelio - IT & Software Solutions",
    description: "Global IT & Software Solutions & Consulting Firm delivering innovative digital solutions",
    images: ["/images/webelio-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://webel.io",
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webelio",
    "alternateName": "Webelio Digital",
    "url": "https://webel.io",
    "logo": "https://webel.io/images/webelio-logo.png",
    "description": "Global IT & Software Solutions & Consulting Firm delivering innovative digital solutions across mobile, web, IoT, AI/ML, and cybersecurity",
    "foundingDate": "2019",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-97735-96863",
      "contactType": "Sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      // Add social media links when available
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://webel.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Webelio",
    "url": "https://webel.io",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://webel.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
          <LanguageProvider>
            <BusinessProfileHeader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
