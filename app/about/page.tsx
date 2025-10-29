"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Eye, Award, Globe, Zap } from "lucide-react"

const founders = [
  {
    name: "Surya Pratap Singh",
    designation: "Founder & CTO",
    image: "/images/team/surya-pratap-singh.jpg",
  },
  {
    name: "Aradhya Singh",
    designation: "Founder & CEO",
    image: "/images/team/aradhya-singh.jpg",
  },
]

const teamMembers = [
  {
    name: "Krishna Pratap Singh",
    designation: "Product Manager",
    image: "/images/team/krishna-pratap-singh.jpg",
  },
  {
    name: "Mrityunjay Jha",
    designation: "Marketing Chief",
    image: "/images/team/mrityunjay-jha.jpg",
  },
  {
    name: "Jatin Aggarwal",
    designation: "Lead Website Designer",
    image: "/images/team/jatin-aggarwal.jpg",
  },
  {
    name: "Vishal Chauhan",
    designation: "Mobile App Developer",
    image: "/images/team/vishal-chauhan.jpg",
  },
  {
    name: "Ankita Pandey",
    designation: "HR Head",
    image: "/images/team/ankita-pandey.jpg",
  },
  {
    name: "Aditi Mishra",
    designation: "Business Development",
    image: "/images/team/aditi-mishra.jpg",
  },
  {
    name: "Abhinav Pandey",
    designation: "Graphic Designer",
    image: "/images/team/abhinav-pandey.jpg",
  },
  {
    name: "Chintan Maheshwari",
    designation: "Data Analyst",
    image: "/images/team/chintan-maheshwari.jpg",
  },
  {
    name: "Deepak Yadav",
    designation: "Business Development",
    image: "/images/team/deepak-yadav.jpg",
  },
  {
    name: "Jatin Saini",
    designation: "Website Developer",
    image: "/images/team/jatin-saini.jpg",
  },
  {
    name: "Kunal Singh Deopa",
    designation: "Project Manager",
    image: "/images/team/kunal-singh-deopa.jpg",
  },
  {
    name: "Nischay Mehra",
    designation: "Head - Project Manager",
    image: "/images/team/nischay-mehra.jpg",
  },
  {
    name: "Nandini Thakral",
    designation: "BD Intern",
    image: "/images/team/nandini-thakral.jpg",
  },
  {
    name: "Naitik Sharma",
    designation: "UI/UX Designer",
    image: "/images/team/naitik-sharma.jpg",
  },
  {
    name: "MD Mustafa",
    designation: "Lead Designer",
    image: "/images/team/md-mustafa.jpg",
  },
  {
    name: "Rakshit Gupta",
    designation: "Full Stack Developer",
    image: "/images/team/rakshit-gupta.jpg",
  },
  {
    name: "Sarthak Srivastava",
    designation: "Website Developer",
    image: "/images/team/sarthak-srivastava.jpg",
  },
  {
    name: "Tanishq Dubey",
    designation: "Social Media Manager",
    image: "/images/team/tanishq-dubey.jpg",
  },
  {
    name: "Taniya Singh",
    designation: "Digital Marketing Intern",
    image: "/images/team/taniya-singh.jpg",
  },
]

const stats = [
  { icon: Users, label: "Team Members", value: "25+" },
  { icon: Globe, label: "Global Clients", value: "100+" },
  { icon: Award, label: "Projects Delivered", value: "200+" },
  { icon: Zap, label: "Years Experience", value: "5+" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-webelio-primary via-webelio-primary/95 to-webelio-primary/90">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-webelio-secondary/20 text-webelio-secondary border-webelio-secondary/30">
              About Webelio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-webelio-secondary mb-6">Crafting Digital Excellence</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are a passionate team of innovators, designers, and developers dedicated to transforming ideas into
              powerful digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-webelio-secondary/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-webelio-secondary" />
                </div>
                <div className="text-3xl font-bold text-webelio-secondary mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card className="bg-white/10 backdrop-blur-sm border-webelio-secondary/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-webelio-secondary mr-3" />
                    <h2 className="text-3xl font-bold text-webelio-secondary">Our Mission</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    At Webelio, our mission is to craft impactful, scalable, and future-ready digital solutions across
                    mobile, web, IoT, AI/ML, and cybersecurity. We aim to bridge the gap between ideas and innovation by
                    delivering world-class products that combine exceptional design, robust engineering, and strategic
                    thinking—helping our clients thrive in an ever-evolving technological landscape.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-webelio-secondary/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="w-8 h-8 text-webelio-secondary mr-3" />
                    <h2 className="text-3xl font-bold text-webelio-secondary">Our Vision</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To be a global leader in innovative technology solutions, empowering businesses and individuals
                    through cutting-edge software, intelligent automation, and seamless digital experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Team Photo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-webelio-secondary mb-4">Meet Our Amazing Team</h2>
            <p className="text-xl text-gray-300">The brilliant minds behind Webelio's success</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image src="/images/team/full-team-photo.jpg" alt="Webelio Team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-webelio-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-webelio-secondary mb-2">Team Webelio 2024</h3>
              <p className="text-gray-300">United by passion, driven by innovation</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-webelio-secondary mb-4">Our Founders</h2>
            <p className="text-xl text-gray-300">Visionary leaders driving innovation</p>
          </motion.div>

          <div className="flex justify-center gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-webelio-secondary to-webelio-tertiary rounded-full p-1">
                    <div className="w-full h-full bg-webelio-primary rounded-full p-2">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-webelio-secondary mb-2">{founder.name}</h3>
                <p className="text-webelio-secondary/80 text-lg font-medium">{founder.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-webelio-secondary mb-4">Our Team</h2>
            <p className="text-xl text-gray-300">Talented professionals making it happen</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-webelio-secondary/50 to-webelio-tertiary/50 rounded-full p-1 group-hover:from-webelio-secondary group-hover:to-webelio-tertiary transition-all duration-300">
                    <div className="w-full h-full bg-webelio-primary rounded-full p-1">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-webelio-secondary mb-1 group-hover:text-webelio-secondary/90 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm">{member.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-webelio-secondary mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate and bring your digital vision to life with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-webelio-secondary text-webelio-primary hover:bg-webelio-secondary/90 font-semibold px-8 py-3"
              >
                Start a Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-webelio-secondary text-webelio-secondary hover:bg-webelio-secondary hover:text-webelio-primary font-semibold px-8 py-3 bg-transparent"
              >
                Join Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
