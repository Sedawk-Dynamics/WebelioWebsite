import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact info. Don't wait and call us · Sales :+91-97735 96863 · Get in touch with Webelio for your IT and software solutions needs. Chat with our AI assistant or reach out directly.",
  openGraph: {
    title: "Contact Us | Webelio",
    description: "Contact info. Don't wait and call us · Sales :+91-97735 96863 · Get in touch with Webelio for your IT and software solutions needs.",
    url: "https://webel.io/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://webel.io/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

