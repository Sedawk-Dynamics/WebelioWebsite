"use client"
import Image from "next/image"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { TrendingUp, Target, BarChart3, Instagram, Facebook, Linkedin, Youtube, ArrowRight } from "lucide-react"
import { useState } from "react"

const categories = [
  "All",
  "Social Media",
  "SEO",
  "Content Marketing",
  "Paid Advertising",
  "Email Marketing",
  "Influencer Marketing",
]

const portfolioItems = [
  {
    id: 1,
    title: "TechGadgets Social Media Campaign",
    client: "TechGadgets India",
    category: "Social Media",
    description:
      "Complete social media overhaul with engaging content strategy across Instagram, Facebook, and LinkedIn",
    image: "/images/portfolio/dm/techgadgets-social.jpg",
    results: {
      followers: "+45K",
      engagement: "+280%",
      reach: "2.5M",
      conversions: "+340%",
    },
    platforms: ["Instagram", "Facebook", "Linkedin"],
    duration: "6 months",
    tags: ["Social Media", "Content Creation", "Community Management"],
  },
  {
    id: 2,
    title: "CloudSync SEO Domination",
    client: "CloudSync Solutions",
    category: "SEO",
    description: "Comprehensive SEO strategy that took the SaaS platform from page 5 to top 3 rankings for key terms",
    image: "/images/portfolio/dm/cloudsync-seo.jpg",
    results: {
      rankings: "Top 3",
      traffic: "+380%",
      leads: "500+",
      keywords: "150+",
    },
    platforms: ["Google", "Bing"],
    duration: "8 months",
    tags: ["SEO", "Technical SEO", "Content Strategy"],
  },
  {
    id: 3,
    title: "Spice Garden Instagram Growth",
    client: "Spice Garden Restaurant",
    category: "Social Media",
    description: "Instagram-first strategy with food photography, reels, and influencer collaborations",
    image: "/images/portfolio/dm/spicegarden-instagram.jpg",
    results: {
      followers: "+32K",
      engagement: "+420%",
      footTraffic: "+180%",
      orders: "+250%",
    },
    platforms: ["Instagram", "Facebook"],
    duration: "5 months",
    tags: ["Instagram Marketing", "Food Photography", "Influencer Outreach"],
  },
  {
    id: 4,
    title: "MediCare Google Ads Campaign",
    client: "MediCare Plus",
    category: "Paid Advertising",
    description: "High-converting Google Ads campaign targeting healthcare services with optimized landing pages",
    image: "/images/portfolio/dm/medicare-ads.jpg",
    results: {
      roas: "5.8x",
      clicks: "25K+",
      conversions: "+200%",
      cpa: "-45%",
    },
    platforms: ["Google"],
    duration: "4 months",
    tags: ["Google Ads", "PPC", "Landing Page Optimization"],
  },
  {
    id: 5,
    title: "SkillBoost Content Marketing",
    client: "SkillBoost Academy",
    category: "Content Marketing",
    description: "Educational content strategy with blog posts, videos, and downloadable resources",
    image: "/images/portfolio/dm/skillboost-content.jpg",
    results: {
      traffic: "+450%",
      leads: "10K+",
      enrollment: "+400%",
      engagement: "8 min avg",
    },
    platforms: ["Youtube", "Blog"],
    duration: "6 months",
    tags: ["Content Marketing", "Video Marketing", "Lead Magnets"],
  },
  {
    id: 6,
    title: "PayEasy Influencer Campaign",
    client: "PayEasy Digital Wallet",
    category: "Influencer Marketing",
    description: "Strategic influencer partnerships with micro and macro influencers for app launch",
    image: "/images/portfolio/dm/payeasy-influencer.jpg",
    results: {
      downloads: "100K+",
      reach: "5M+",
      engagement: "3.2%",
      installs: "25K+",
    },
    platforms: ["Instagram", "Youtube"],
    duration: "3 months",
    tags: ["Influencer Marketing", "App Launch", "Brand Awareness"],
  },
  {
    id: 7,
    title: "FashionHub Email Automation",
    client: "FashionHub Online",
    category: "Email Marketing",
    description: "Automated email sequences for cart abandonment, welcome series, and re-engagement",
    image: "/images/portfolio/dm/fashionhub-email.jpg",
    results: {
      openRate: "42%",
      clickRate: "18%",
      revenue: "+₹12L",
      subscribers: "50K+",
    },
    platforms: ["Email"],
    duration: "5 months",
    tags: ["Email Marketing", "Marketing Automation", "E-commerce"],
  },
  {
    id: 8,
    title: "FitLife Facebook Ads",
    client: "FitLife Gym Chain",
    category: "Paid Advertising",
    description: "Targeted Facebook and Instagram ads for gym membership sign-ups with video creatives",
    image: "/images/portfolio/dm/fitlife-facebook.jpg",
    results: {
      signups: "850+",
      roas: "4.5x",
      reach: "1.2M",
      cpl: "₹280",
    },
    platforms: ["Facebook", "Instagram"],
    duration: "4 months",
    tags: ["Facebook Ads", "Video Ads", "Lead Generation"],
  },
  {
    id: 9,
    title: "HomeDecor Pinterest Strategy",
    client: "HomeDecor Boutique",
    category: "Social Media",
    description: "Pinterest-focused strategy with shoppable pins and seasonal boards",
    image: "/images/portfolio/dm/homedecor-pinterest.jpg",
    results: {
      traffic: "+520%",
      sales: "+380%",
      pins: "5K+",
      impressions: "8M+",
    },
    platforms: ["Pinterest"],
    duration: "6 months",
    tags: ["Pinterest Marketing", "Visual Marketing", "E-commerce"],
  },
]

const platformIcons = {
  Instagram: Instagram,
  Facebook: Facebook,
  Linkedin: Linkedin,
  Youtube: Youtube,
  Google: Target,
  Bing: Target,
  Email: TrendingUp,
  Blog: BarChart3,
  Pinterest: Target,
}

export default function DigitalMarketingPortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioItems)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
              Digital Marketing Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
              Campaigns That Drive
              <span className="text-secondary"> Real Results</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 text-pretty">
              Explore our portfolio of successful digital marketing campaigns across social media, SEO, content
              marketing, and paid advertising. Each project showcases measurable results and strategic excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 border-y bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Campaigns Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">₹5Cr+</div>
                <div className="text-sm text-muted-foreground">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">300%</div>
                <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sticky top-16 bg-background/95 backdrop-blur-sm border-b z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2 mb-2">
                          {project.platforms.map((platform) => {
                            const Icon = platformIcons[platform as keyof typeof platformIcons]
                            return (
                              <div
                                key={platform}
                                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                              >
                                <Icon className="h-4 w-4 text-white" />
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-secondary/20 text-secondary-foreground border-secondary/30">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {Object.entries(project.results)
                        .slice(0, 4)
                        .map(([key, value]) => (
                          <div key={key} className="text-center p-2 rounded-lg bg-muted/50">
                            <div className="text-lg font-bold text-secondary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                    </div>
                    <Button variant="ghost" className="w-full group/btn">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">Ready to Grow Your Brand?</h2>
            <p className="text-lg text-gray-300 mb-8 text-pretty">
              Let's create a digital marketing strategy that delivers measurable results for your business. Our team of
              experts is ready to help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </Button>
              </div>
              <div className="p-8">
                <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
                  {selectedProject.category}
                </Badge>
                <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{selectedProject.client}</p>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Campaign Duration</h3>
                  <p className="text-muted-foreground">{selectedProject.duration}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Platforms Used</h3>
                  <div className="flex gap-3">
                    {selectedProject.platforms.map((platform) => {
                      const Icon = platformIcons[platform as keyof typeof platformIcons]
                      return (
                        <div key={platform} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                          <Icon className="h-5 w-5 text-secondary" />
                          <span>{platform}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Key Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(selectedProject.results).map(([key, value]) => (
                      <div key={key} className="text-center p-4 rounded-lg bg-muted">
                        <div className="text-2xl font-bold text-secondary mb-1">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/contact">Start Similar Campaign</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href="/case-studies">View Case Studies</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
