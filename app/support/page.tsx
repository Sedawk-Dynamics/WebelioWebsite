"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Send, Bot, User, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI support assistant for Webelio (a brand of Sedawk Dynamics Pvt Ltd). I can help you with questions about our services, pricing, technologies, timelines, and more. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    // Scroll the messages container, not the entire page
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    // Scroll to bottom when messages or typing state changes
    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(() => {
      scrollToBottom()
    }, 50)
    
    return () => clearTimeout(timeoutId)
  }, [messages, isTyping])

  const faqs = [
    {
      question: "How do I get started with a new project?",
      answer:
        "Getting started is easy! Simply book a free consultation through our website, and we'll discuss your project requirements, timeline, and budget. Our team will then create a custom proposal tailored to your needs.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 8-16 weeks. We'll provide a detailed timeline during your consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive support packages including regular updates, security monitoring, performance optimization, and technical support. Our maintenance plans start at $299/month.",
    },
    {
      question: "Can you work with my existing team?",
      answer:
        "We love collaborating with in-house teams. We can integrate seamlessly with your existing workflows, provide training, and work alongside your developers and designers.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. We also work with mobile technologies like React Native and Flutter.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "We use a combination of Slack, email, and regular video calls to keep you updated. You'll have access to a project dashboard where you can track progress, view deliverables, and communicate with the team.",
    },
    {
      question: "What is your payment structure?",
      answer:
        "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments. We accept all major payment methods and can provide financing options.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "Yes, we can handle all aspects of hosting and domain management. We work with premium hosting providers and can set up everything from basic shared hosting to enterprise-level cloud infrastructure.",
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    const currentInput = inputMessage
    setInputMessage("")
    setIsTyping(true)

    try {
      // Prepare conversation history for context (excluding the current message)
      const conversationHistory = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" as const : "assistant" as const,
        content: msg.text,
      }))
      
      // Add user message to UI immediately
      setMessages((prev) => [...prev, userMessage])

      // Call the API
      const response = await fetch("/api/support/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          conversationHistory: conversationHistory,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message || "I apologize, but I couldn't generate a response. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment, or contact us directly at info@sedawk.in or call +91 97735 96863.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
              <Bot className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">AI-Powered Support</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Get </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Instant Help
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Chat with our AI assistant for immediate support, or browse our comprehensive FAQ section for quick
              answers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-b border-gray-700 p-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-emerald-500/30 ring-offset-2 ring-offset-gray-800">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-gray-800 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Support Assistant</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm text-emerald-400">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={messagesContainerRef}
              className="h-96 overflow-y-auto p-6 space-y-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user" 
                          ? "bg-blue-500 shadow-md" 
                          : "bg-gradient-to-r from-emerald-500 to-green-500 shadow-md"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-100"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-700 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-700 p-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                />
                <Button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-6 py-3 rounded-xl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Quick answers to common questions about our services and process.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
