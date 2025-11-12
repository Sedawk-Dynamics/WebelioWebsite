/**
 * Company knowledge base for AI support chatbot
 * This data is used to provide context to the AI for generating accurate responses
 * Company: Webelio (A brand of Sedawk Dynamics Pvt Ltd)
 */

export const companyKnowledge = {
  companyName: "Webelio",
  parentCompany: "Sedawk Dynamics Pvt Ltd",
  tagline: "Crafting impactful, scalable, and future-ready digital solutions",
  founded: "2019",
  description: "Global IT & Software Solutions & Consulting Firm delivering innovative digital experiences since 2019. A brand of Sedawk Dynamics Pvt Ltd.",
  
  services: [
    {
      name: "Website Development",
      description: "Modern, fast & scalable websites built with Next.js, React, TypeScript, Tailwind CSS, and Vercel",
      startingPrice: "₹1,50,000",
      features: ["Lightning-fast loading speeds", "Enterprise-grade security", "Conversion-optimized design", "99.9% uptime guarantee"],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      stats: { speedIncrease: "340%", conversionBoost: "127%", satisfaction: "98%" }
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      startingPrice: "₹2,00,000",
      features: ["Cross-platform compatibility", "Real-time synchronization", "Advanced security features", "Built-in analytics"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      stats: { appStoreRating: "4.8★", userRetention: "85%", developmentSpeed: "2x Faster" }
    },
    {
      name: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost online presence and drive growth",
      startingPrice: "₹50,000",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO Tools", "CRM"],
      stats: { averageROI: "450%", leadGeneration: "300%", brandAwareness: "85%" }
    },
    {
      name: "Graphic Designing",
      description: "Beautiful visual identities and branding that capture brand essence",
      startingPrice: "₹75,000",
      features: ["Creative brand concepts", "Multi-format designs", "Print & digital ready", "Brand consistency"],
      technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva Pro", "Illustrator"],
      stats: { brandRecognition: "89%", designSatisfaction: "96%", projectDelivery: "48hrs" }
    },
    {
      name: "Social Media Marketing",
      description: "Build thriving online communities and drive engagement with strategic social media campaigns",
      startingPrice: "₹50,000",
      features: ["Content strategy & planning", "Community management", "Social media analytics", "Influencer partnerships"],
      technologies: ["Meta Business", "LinkedIn Ads", "Twitter API", "TikTok Ads", "Hootsuite"],
      stats: { engagementRate: "12.5%", followerGrowth: "280%", contentReach: "2M+" }
    },
    {
      name: "AI/ML Solutions",
      description: "Leverage artificial intelligence and machine learning to transform business operations",
      startingPrice: "₹3,50,000",
      features: ["Machine learning models", "Natural language processing", "Predictive analytics", "Process automation"],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Python"],
      stats: { accuracyRate: "94%", processEfficiency: "75%", costReduction: "60%" }
    },
    {
      name: "IoT & Hardware Solutions",
      description: "Complete IoT ecosystem development with hardware integration and cloud connectivity",
      startingPrice: "₹3,00,000",
      features: ["Hardware Design", "Sensor Integration", "Cloud Connectivity", "Real-time Monitoring"],
      technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "MQTT", "Node.js"]
    },
    {
      name: "Embedded Solutions",
      description: "Custom embedded systems development for specialized hardware and industrial applications",
      startingPrice: "₹2,00,000",
      features: ["Microcontroller Programming", "RTOS Development", "Hardware Integration", "Performance Optimization"],
      technologies: ["C/C++", "ARM", "FreeRTOS", "Embedded Linux"]
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect digital assets and infrastructure",
      startingPrice: "₹1,00,000",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring"],
      technologies: ["OWASP", "NIST", "ISO 27001", "Security Tools"]
    },
    {
      name: "Software Automations",
      description: "Streamline business processes with intelligent automation solutions",
      startingPrice: "₹50,000",
      features: ["Process Automation", "Workflow Optimization", "Integration Services", "Custom Scripts"],
      technologies: ["Python", "Automation Tools", "APIs", "Scripting"]
    },
    {
      name: "Cross Platform Application Development",
      description: "Build once, deploy everywhere with cross-platform development expertise",
      startingPrice: "₹2,50,000",
      features: ["React Native", "Flutter", "Xamarin", "Progressive Web Apps"],
      technologies: ["React Native", "Flutter", "Xamarin", "PWA"]
    }
  ],

  technologies: {
    frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Java", ".NET"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    cloud: ["AWS", "Azure", "GCP", "Vercel"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    ai_ml: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Python"],
    iot: ["Arduino", "Raspberry Pi", "AWS IoT", "MQTT"]
  },

  process: [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We dive deep into understanding your business, goals, and technical requirements",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating user-centered designs and interactive prototypes to validate concepts",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Building your solution with clean, scalable code and modern technologies",
      duration: "4-12 weeks"
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing to ensure reliability, security, and performance",
      duration: "2-4 weeks"
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Go live with ongoing maintenance and support",
      duration: "Ongoing"
    }
  ],

  pricing: {
    paymentStructure: "50% upfront payment and 50% upon completion for smaller projects. For larger projects, we arrange milestone-based payments.",
    supportPackages: "Comprehensive support packages including regular updates, security monitoring, performance optimization, and technical support starting at ₹25,000/month",
    freeMaintenance: "All projects include 3 months of free maintenance",
    consultation: "Free 30-minute technical consultation available"
  },

  timelines: {
    simpleWebsite: "2-4 weeks",
    customWebApp: "6-12 weeks",
    mobileApp: "8-16 weeks",
    enterpriseSolution: "12-24 weeks"
  },

  contact: {
    email: "sales@webel.io",
    phone: "+91 97735 96863",
    address: "5th Floor, Tech Garden, Plot No 4, Sector 35, Udyog Vihar-VII, Gurugram, Haryana, 122004",
    location: "Gurugram, Haryana, India",
    responseTime: "< 24 hours",
    officeHours: "Mon-Fri from 9am to 6pm IST"
  },

  socialMedia: {
    facebook: "https://www.facebook.com/webeliodigital",
    twitter: "https://x.com/webelio_",
    instagram: "https://www.instagram.com/webelio_/",
    linkedin: "https://www.linkedin.com/company/webelio-digital/",
    youtube: "https://www.youtube.com/@WebelioDigital"
  },

  stats: {
    yearsOfExcellence: "5+",
    projectsDelivered: "500+",
    globalClients: "300+",
    successRate: "98%"
  },

  timeline: [
    { year: "2019", title: "Founded", description: "Webelio started as a vision to transform digital experiences" },
    { year: "2020", title: "Global Expansion", description: "Expanded services to serve clients across 20+ countries" },
    { year: "2021", title: "AI/ML Innovation", description: "Launched specialized AI and machine learning practice" },
    { year: "2022", title: "IoT Solutions", description: "Pioneered IoT and hardware integration services" },
    { year: "2023", title: "500+ Projects", description: "Reached milestone of 500+ successful project deliveries" },
    { year: "2024", title: "Industry Leader", description: "Recognized as leading IT solutions provider in APAC region" }
  ],

  values: [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that are ahead of the curve."
    },
    {
      title: "Security & Trust",
      description: "Your data security and privacy are paramount. We build with security-first principles at every step."
    },
    {
      title: "Client-Centric",
      description: "Your success is our success. We partner with you to understand your needs and exceed expectations."
    },
    {
      title: "Expert Team",
      description: "Our diverse team of specialists brings decades of combined experience across all technology domains."
    }
  ],

  mission: "At Webelio, we're on a mission to empower businesses worldwide with cutting-edge technology solutions that drive growth and innovation. We believe in building scalable, future-ready digital solutions that not only meet today's needs but anticipate tomorrow's challenges. From mobile apps to AI/ML solutions, from web development to IoT hardware integration, we bring expertise across the entire technology spectrum.",

  expertise: [
    "Web Development",
    "Mobile Application Development",
    "Digital Marketing",
    "UI/UX Design",
    "IoT & Hardware Solutions",
    "Embedded Solutions",
    "Cybersecurity",
    "Software Automations",
    "AI/ML Solutions",
    "Cross Platform Application Development"
  ],

  team: {
    experience: "5+ years of experience each",
    roles: ["Senior developers", "UX/UI designers", "Project managers", "QA specialists"],
    methodology: "Agile development with continuous integration, automated testing, and regular client communication",
    satisfaction: "98% client satisfaction rate",
    projectsDelivered: "500+ projects successfully delivered"
  },

  support: {
    packages: [
      "Bug fixes",
      "Security updates",
      "Performance optimization",
      "Feature enhancements",
      "Technical support"
    ],
    options: {
      basic: "Monthly updates",
      premium: "24/7 monitoring with guaranteed response times"
    },
    freePeriod: "3 months of free maintenance included with all projects"
  },

  portfolio: {
    featuredProjects: [
      "Nicfound - Smart tracking case for nicotine products with IoT integration",
      "Pufftrak - Advanced taper device for smoking cessation with precision control",
      "ChatChill - AI-powered chat platform with advanced conversation management",
      "Dreambox - Comprehensive project management platform",
      "Glasspatch - Innovative glass repair and maintenance solution",
      "Motion Records - Music production and recording platform",
      "Bevel Razors - Premium razor e-commerce platform",
      "ChargePe - Payment gateway and financial services platform"
    ]
  }
}

export function getCompanyContext(): string {
  return `Company Information:
- Company Name: ${companyKnowledge.companyName}
- Parent Company: ${companyKnowledge.parentCompany}
- Tagline: ${companyKnowledge.tagline}
- Founded: ${companyKnowledge.founded}
- Description: ${companyKnowledge.description}

Mission: ${companyKnowledge.mission}

Company Stats:
- Years of Excellence: ${companyKnowledge.stats.yearsOfExcellence}
- Projects Delivered: ${companyKnowledge.stats.projectsDelivered}
- Global Clients: ${companyKnowledge.stats.globalClients}
- Success Rate: ${companyKnowledge.stats.successRate}

Services Offered:
${companyKnowledge.services.map(service => `
- ${service.name}: ${service.description}
  Starting Price: ${service.startingPrice}
  Key Features: ${service.features.join(", ")}
  Technologies: ${service.technologies.join(", ")}
`).join("")}

Technologies:
- Frontend: ${companyKnowledge.technologies.frontend.join(", ")}
- Backend: ${companyKnowledge.technologies.backend.join(", ")}
- Databases: ${companyKnowledge.technologies.databases.join(", ")}
- Cloud: ${companyKnowledge.technologies.cloud.join(", ")}
- Mobile: ${companyKnowledge.technologies.mobile.join(", ")}
- AI/ML: ${companyKnowledge.technologies.ai_ml.join(", ")}
- IoT: ${companyKnowledge.technologies.iot.join(", ")}

Development Process:
${companyKnowledge.process.map(p => `${p.step}. ${p.title}: ${p.description} (Duration: ${p.duration})`).join("\n")}

Company Values:
${companyKnowledge.values.map(v => `- ${v.title}: ${v.description}`).join("\n")}

Company Timeline:
${companyKnowledge.timeline.map(t => `${t.year}: ${t.title} - ${t.description}`).join("\n")}

Pricing:
- Payment Structure: ${companyKnowledge.pricing.paymentStructure}
- Support Packages: ${companyKnowledge.pricing.supportPackages}
- Free Maintenance: ${companyKnowledge.pricing.freeMaintenance}
- Consultation: ${companyKnowledge.pricing.consultation}

Timelines:
- Simple Websites: ${companyKnowledge.timelines.simpleWebsite}
- Custom Web Applications: ${companyKnowledge.timelines.customWebApp}
- Mobile Apps: ${companyKnowledge.timelines.mobileApp}
- Enterprise Solutions: ${companyKnowledge.timelines.enterpriseSolution}

Contact Information:
- Email: ${companyKnowledge.contact.email}
- Phone: ${companyKnowledge.contact.phone}
- Address: ${companyKnowledge.contact.address}
- Location: ${companyKnowledge.contact.location}
- Response Time: ${companyKnowledge.contact.responseTime}
- Office Hours: ${companyKnowledge.contact.officeHours}

Social Media:
- Facebook: ${companyKnowledge.socialMedia.facebook}
- Twitter: ${companyKnowledge.socialMedia.twitter}
- Instagram: ${companyKnowledge.socialMedia.instagram}
- LinkedIn: ${companyKnowledge.socialMedia.linkedin}
- YouTube: ${companyKnowledge.socialMedia.youtube}

Team:
- Experience: ${companyKnowledge.team.experience}
- Roles: ${companyKnowledge.team.roles.join(", ")}
- Methodology: ${companyKnowledge.team.methodology}
- Client Satisfaction: ${companyKnowledge.team.satisfaction}
- Projects Delivered: ${companyKnowledge.team.projectsDelivered}

Support:
- Packages Include: ${companyKnowledge.support.packages.join(", ")}
- Options: Basic (${companyKnowledge.support.options.basic}), Premium (${companyKnowledge.support.options.premium})
- Free Period: ${companyKnowledge.support.freePeriod}

Featured Portfolio Projects:
${companyKnowledge.portfolio.featuredProjects.map(p => `- ${p}`).join("\n")}
`
}
