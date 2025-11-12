import { NextRequest, NextResponse } from "next/server"
import { getCompanyContext } from "@/lib/support-knowledge"

export interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

export interface ChatRequest {
  message: string
  conversationHistory?: ChatMessage[]
}

// Function to strip markdown formatting from text
function stripMarkdown(text: string): string {
  if (!text) return text
  
  // Remove bold markdown (**text**)
  text = text.replace(/\*\*([^*]+?)\*\*/g, '$1')
  
  // Remove bold markdown (__text__)
  text = text.replace(/__([^_]+?)__/g, '$1')
  
  // Remove italic markdown (*text*) - simple approach, remove asterisks that wrap text
  // Be careful: only match when there's whitespace or start/end of string around it
  text = text.replace(/(^|\s)\*([^*\n\s]+?[^*\n]*?)\*(\s|$)/g, '$1$2$3')
  
  // Remove italic markdown (_text_)
  text = text.replace(/(^|\s)_([^_\n\s]+?[^_\n]*?)_(\s|$)/g, '$1$2$3')
  
  // Remove headers (# Header) but keep the text
  text = text.replace(/^#{1,6}\s+(.+)$/gm, '$1')
  
  // Remove links [text](url) -> text
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
  
  // Remove code blocks ```code``` -> code (keep the code content)
  text = text.replace(/```[\w]*\n?([\s\S]*?)```/g, '$1')
  
  // Remove inline code `code` -> code
  text = text.replace(/`([^`]+)`/g, '$1')
  
  // Remove horizontal rules
  text = text.replace(/^[-*_]{3,}$/gm, '')
  
  // Remove list markers at start of lines (-, *, +)
  text = text.replace(/^[\s]*[-*+]\s+/gm, '')
  
  // Remove numbered list markers (1., 2., etc.)
  text = text.replace(/^\d+\.\s+/gm, '')
  
  // Clean up multiple spaces (but preserve single spaces)
  text = text.replace(/[ \t]{2,}/g, ' ')
  
  // Clean up multiple newlines (keep max 2 consecutive newlines)
  text = text.replace(/\n{3,}/g, '\n\n')
  
  // Clean up spaces at start/end of lines
  text = text.replace(/^[ \t]+|[ \t]+$/gm, '')
  
  return text.trim()
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()

    if (!body.message || !body.message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const userMessage = body.message.trim()
    const conversationHistory = body.conversationHistory || []

    // Get company context
    const companyContext = getCompanyContext()

    // System prompt for the AI
    const systemPrompt = `You are a helpful AI support assistant for Webelio (a brand of Sedawk Dynamics Pvt Ltd). 

CRITICAL RULES:
1. You MUST ONLY answer questions related to Webelio, its services, pricing, technologies, processes, team, portfolio, or company information
2. You MUST NOT answer general questions unrelated to Webelio (e.g., weather, general knowledge, other companies, personal advice)
3. If asked a question NOT related to Webelio, politely decline and redirect: "I'm a support assistant for Webelio and can only help with questions about our company, services, pricing, technologies, or processes. How can I assist you with Webelio?"
4. NEVER use markdown formatting (no **, *, #, etc.) - only plain text responses
5. Remove all markdown syntax from responses (no bold, italic, headers, lists with markdown symbols)

Your role is to:
1. Answer questions about Webelio's services, pricing, technologies, and processes
2. Provide helpful information based on the company knowledge base
3. Be friendly, professional, and conversational
4. If you don't know something specific about Webelio, offer to connect the user with the team
5. Encourage users to schedule a consultation for detailed discussions
6. Keep responses concise but informative (2-4 sentences when possible, but be detailed when needed)
7. ALWAYS use plain text - NO markdown formatting

Company Knowledge Base:
${companyContext}

Guidelines:
- Always refer to the company knowledge base for accurate information
- Use Indian Rupees (₹) for pricing when mentioned
- Be helpful and encouraging
- If asked about something not in the knowledge base, suggest contacting the team directly
- For complex questions, recommend scheduling a consultation
- When users ask about contact information, provide: email (info@sedawk.in), phone (+91 97735 96863), or consultation page (/consultation)
- NEVER answer questions unrelated to Webelio - always redirect to Webelio-related topics
- NEVER use markdown formatting in responses - only plain text`

    // Try Gemini API first (if available)
    const geminiApiKey = process.env.GEMINI_API_KEY

    if (geminiApiKey) {
      try {
        // Prepare conversation context for Gemini
        // Gemini API works best with a structured prompt that includes system instructions and conversation
        const conversationText = conversationHistory
          .slice(-10)
          .map((msg) => {
            if (msg.role === "user") {
              return `User: ${msg.content}`
            } else {
              return `Assistant: ${msg.content}`
            }
          })
          .join("\n")

        const fullPrompt = `${systemPrompt}\n\n${conversationText ? `Previous conversation:\n${conversationText}\n\n` : ""}User: ${userMessage}\nAssistant:`

        const geminiModel = process.env.GEMINI_MODEL || "gemini-pro"
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${geminiApiKey}`

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: fullPrompt,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 500,
            },
            safetySettings: [
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
              {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE",
              },
            ],
          }),
        })

        if (!response.ok) {
          const errorText = await response.text().catch(() => "")
          let errorData = {}
          try {
            errorData = JSON.parse(errorText)
          } catch {
            errorData = { error: errorText || `HTTP ${response.status}` }
          }
          console.error("Gemini API error:", errorData)
          throw new Error(`Gemini API error: ${response.status}`)
        }

        const data = await response.json()
        
        // Check if response was blocked by safety filters
        if (data.candidates?.[0]?.finishReason === "SAFETY") {
          console.warn("Gemini response blocked by safety filters")
          throw new Error("Response blocked by safety filters")
        }

        // Check if there are no candidates (empty response)
        if (!data.candidates || data.candidates.length === 0) {
          console.warn("Gemini API returned no candidates")
          throw new Error("No response generated")
        }

        let aiResponse =
          data.candidates[0]?.content?.parts?.[0]?.text ||
          "I apologize, but I couldn't generate a response. Please try again."

        // Remove markdown formatting
        aiResponse = stripMarkdown(aiResponse)

        return NextResponse.json({
          message: aiResponse,
          model: geminiModel,
        })
      } catch (error) {
        console.error("Gemini API failed, trying OpenAI:", error)
        // Fall through to OpenAI or fallback
      }
    }

    // Try OpenAI API if Gemini is not available
    const openaiApiKey = process.env.OPENAI_API_KEY

    if (openaiApiKey) {
      try {
        // Prepare messages for OpenAI
        const messages: ChatMessage[] = [
          { role: "system", content: systemPrompt },
          ...conversationHistory.slice(-10), // Keep last 10 messages for context
          { role: "user", content: userMessage },
        ]

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`,
          },
          body: JSON.stringify({
            model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
            messages: messages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            temperature: 0.7,
            max_tokens: 500,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          console.error("OpenAI API error:", errorData)
          throw new Error(`OpenAI API error: ${response.status}`)
        }

        const data = await response.json()
        let aiResponse =
          data.choices?.[0]?.message?.content ||
          "I apologize, but I couldn't generate a response. Please try again."

        // Remove markdown formatting
        aiResponse = stripMarkdown(aiResponse)

        return NextResponse.json({
          message: aiResponse,
          model: data.model || "gpt-3.5-turbo",
        })
      } catch (error) {
        console.error("OpenAI API failed, using fallback:", error)
        // Fall through to fallback response
      }
    }

    // Fallback: Intelligent rule-based responses
    let fallbackResponse = generateIntelligentResponse(userMessage, companyContext)
    
    // Remove markdown formatting from fallback response
    fallbackResponse = stripMarkdown(fallbackResponse)
    
    return NextResponse.json({
      message: fallbackResponse,
      model: "fallback"
    })

  } catch (error) {
    console.error("Error processing chat message:", error)
    return NextResponse.json(
      {
        error: "Failed to process chat message",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}

function generateIntelligentResponse(message: string, companyContext: string): string {
  const lowerMessage = message.toLowerCase()
  
  // Check if question is related to Webelio
  const webelioKeywords = [
    'webelio', 'sedawk', 'company', 'services', 'service', 'pricing', 'price', 'cost', 'budget',
    'technology', 'technologies', 'tech stack', 'framework', 'timeline', 'deadline', 'how long',
    'team', 'process', 'methodology', 'consultation', 'meeting', 'call', 'contact', 'email',
    'phone', 'support', 'maintenance', 'portfolio', 'projects', 'about', 'what do you do',
    'offer', 'provide', 'website', 'mobile app', 'development', 'design', 'marketing', 'iot',
    'ai', 'ml', 'cybersecurity', 'automation', 'embedded', 'graphic', 'social media'
  ]
  
  const isWebelioRelated = webelioKeywords.some(keyword => lowerMessage.includes(keyword))
  
  // If question is not related to Webelio, redirect
  if (!isWebelioRelated && !lowerMessage.includes('hello') && !lowerMessage.includes('hi') && !lowerMessage.includes('hey')) {
    return "I'm a support assistant for Webelio and can only help with questions about our company, services, pricing, technologies, or processes. How can I assist you with Webelio?"
  }

  // Pricing questions
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("budget")) {
    if (lowerMessage.includes("web") || lowerMessage.includes("website")) {
      return "For website development, our pricing starts at ₹1,50,000 for basic websites and can go up to ₹50,000+ for complex enterprise applications. The cost depends on factors like custom functionality, integrations, user authentication, payment processing, and scalability requirements. Would you like me to connect you with our team for a detailed quote based on your specific needs?"
    }
    if (lowerMessage.includes("mobile") || lowerMessage.includes("app")) {
      return "Mobile app development costs vary based on complexity. Simple apps start around ₹2,00,000, while feature-rich applications can reach ₹8,00,000+. Key factors include platform choice (iOS/Android/both), custom UI/UX design, backend complexity, third-party integrations, and ongoing maintenance. I can help you schedule a technical consultation to provide accurate estimates for your project."
    }
    if (lowerMessage.includes("marketing")) {
      return "Our digital marketing services start at ₹50,000 and can be customized based on your campaign requirements. We offer comprehensive packages including SEO, SEM, social media marketing, content strategy, and analytics. Would you like to know more about our marketing packages?"
    }
    return "Our project costs are tailored to your specific requirements. We offer transparent pricing with detailed breakdowns. Basic projects typically range from ₹50,000-₹1,50,000, medium complexity projects from ₹1,50,000-₹3,50,000, and enterprise solutions from ₹3,50,000+. We also offer a free 30-minute consultation to discuss your project and provide a personalized quote. Would you like to schedule one?"
  }

  // Technology questions
  if (lowerMessage.includes("technology") || lowerMessage.includes("tech stack") || lowerMessage.includes("framework") || lowerMessage.includes("technologies")) {
    return "We specialize in modern technologies: Frontend (React, Next.js, Vue.js, TypeScript), Backend (Node.js, Python, Java, .NET), Databases (PostgreSQL, MongoDB, Redis), Cloud (AWS, Azure, GCP, Vercel), Mobile (React Native, Flutter, Swift, Kotlin), and AI/ML (TensorFlow, PyTorch, OpenAI, Scikit-learn). Our team stays current with industry best practices and emerging technologies. What specific technology challenges are you facing?"
  }

  // Timeline questions
  if (lowerMessage.includes("time") || lowerMessage.includes("timeline") || lowerMessage.includes("deadline") || lowerMessage.includes("how long")) {
    return "Project timelines depend on scope and complexity. Typical ranges: Simple websites (2-4 weeks), Custom web applications (6-12 weeks), Mobile apps (8-16 weeks), Enterprise solutions (12-24 weeks). We use agile methodology with weekly sprints, providing regular updates and early previews. For urgent projects, we offer expedited development with dedicated teams. When do you need your project completed?"
  }

  // Services questions
  if (lowerMessage.includes("service") || lowerMessage.includes("what do you do") || lowerMessage.includes("offer")) {
    return "We offer comprehensive digital solutions including: Website Development, Mobile App Development, Digital Marketing, UI/UX Design, IoT & Hardware Solutions, Embedded Solutions, Cybersecurity, Software Automations, and AI/ML Solutions. Each service is tailored to your business needs. Which service are you most interested in?"
  }

  // Support and maintenance
  if (lowerMessage.includes("support") || lowerMessage.includes("maintenance") || lowerMessage.includes("update") || lowerMessage.includes("after launch")) {
    return "We provide comprehensive post-launch support including: bug fixes, security updates, performance optimization, feature enhancements, and technical support. Our support packages range from basic (monthly updates) to premium (24/7 monitoring with guaranteed response times). All projects include 3 months of free maintenance. Support packages start at approximately ₹25,000/month. Would you like details about our ongoing support options?"
  }

  // Consultation questions
  if (lowerMessage.includes("consultation") || lowerMessage.includes("meeting") || lowerMessage.includes("call") || lowerMessage.includes("discuss") || lowerMessage.includes("schedule")) {
    return "I'd be happy to help you schedule a free 30-minute technical consultation! During this call, we'll analyze your requirements, discuss technical approaches, provide timeline estimates, review similar projects, and answer all your questions. You can book directly through our consultation page at /consultation, or I can connect you with our team. What works better for you?"
  }

  // Team and process questions
  if (lowerMessage.includes("team") || lowerMessage.includes("process") || lowerMessage.includes("methodology") || lowerMessage.includes("how do you work")) {
    return "Our team consists of senior developers, UX/UI designers, project managers, and QA specialists with 5+ years of experience each. We follow agile development with continuous integration, automated testing, and regular client communication. Our process includes: discovery & planning, design & prototyping, development & testing, deployment & optimization, and ongoing support. We've successfully delivered 500+ projects with a 98% client satisfaction rate."
  }

  // Contact questions
  if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone") || lowerMessage.includes("reach")) {
    return "You can reach us via email at info@sedawk.in, phone at +91 97735 96863 (Mon-Fri 9am-6pm IST), or schedule a consultation through our website at /consultation. We typically respond within 24 hours. Our office is located at 5th Floor, Tech Garden, Plot No 4, Sector 35, Udyog Vihar-VII, Gurugram, Haryana, 122004, India. We also offer virtual consultations. How would you like to connect?"
  }

  // Greeting
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("greetings")) {
    return "Hello! Welcome to Webelio, a brand of Sedawk Dynamics Pvt Ltd. I'm here to help you explore how we can transform your business through technology. Whether you're looking to build a web application, mobile app, implement AI solutions, or need technical consulting, I can provide detailed information about our services, pricing, technologies, and processes. What would you like to know about Webelio?"
  }

  // Default response - only for Webelio-related questions
  return "That's an excellent question about Webelio! I'd love to provide you with detailed, personalized information. Our team of experts can address your specific needs and provide comprehensive solutions. You can reach our technical team directly at info@sedawk.in, schedule a free consultation at /consultation, or continue chatting with me for immediate assistance. What specific aspect of Webelio's services or processes would you like to explore further?"
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Support chat API is running",
    hasGemini: !!process.env.GEMINI_API_KEY,
    hasOpenAI: !!process.env.OPENAI_API_KEY,
    activeProvider: process.env.GEMINI_API_KEY
      ? "Gemini"
      : process.env.OPENAI_API_KEY
        ? "OpenAI"
        : "Fallback",
  })
}

