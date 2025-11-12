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

// Word limit for responses (configurable via environment variable)
const MAX_WORDS = parseInt(process.env.CHATBOT_MAX_WORDS || "250", 10)

// Function to count words in text
function countWords(text: string): number {
  if (!text) return 0
  return text.trim().split(/\s+/).filter(word => word.length > 0).length
}

// Function to truncate text to word limit
function truncateToWordLimit(text: string, maxWords: number = MAX_WORDS): string {
  if (!text) return text
  
  const words = text.trim().split(/\s+/).filter(word => word.length > 0)
  
  if (words.length <= maxWords) {
    return text.trim()
  }
  
  // Truncate to maxWords and add ellipsis if needed
  const truncated = words.slice(0, maxWords).join(" ")
  
  // Try to end at a sentence boundary if possible
  const lastPeriod = truncated.lastIndexOf(".")
  const lastQuestion = truncated.lastIndexOf("?")
  const lastExclamation = truncated.lastIndexOf("!")
  const lastSentenceEnd = Math.max(lastPeriod, lastQuestion, lastExclamation)
  
  if (lastSentenceEnd > maxWords * 0.7) {
    // If we can end at a sentence boundary and it's not too short, use that
    return truncated.substring(0, lastSentenceEnd + 1).trim()
  }
  
  // Otherwise, just truncate and add ellipsis
  return truncated.trim() + "..."
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
1. You MUST answer questions related to:
   - Webelio company information, services, pricing, technologies, processes, team, portfolio
   - Technology questions that help users understand tech concepts, including comparisons (e.g., "what is difference between mobile app and web app"), explanations of technologies, how technologies work, and how they relate to Webelio's services
   - Technical explanations and comparisons that help users understand different technologies, their differences, advantages, and how Webelio uses or implements them
   - Educational tech questions that help users make informed decisions about their technology needs
2. You MUST NOT answer general questions completely unrelated to Webelio or technology (e.g., weather, general knowledge unrelated to tech/company, other companies' services, personal advice unrelated to business/tech)
3. For tech-related questions (including comparisons and "what is" questions), always:
   - Provide clear, helpful explanations
   - Connect them to Webelio's expertise, services, or how Webelio can help implement those technologies
   - Explain how Webelio uses these technologies in their projects
   - Offer to help users choose the right solution for their needs
4. If asked a question NOT related to Webelio or technology, politely redirect: "I'm a support assistant for Webelio and can help with questions about our company, services, technologies we use, or tech concepts related to our expertise. How can I assist you?"
5. NEVER use markdown formatting (no **, *, #, etc.) - only plain text responses
6. Remove all markdown syntax from responses (no bold, italic, headers, lists with markdown symbols)

Your role is to:
1. Answer questions about Webelio's services, pricing, technologies, and processes
2. Explain technology concepts, comparisons, and differences in the context of Webelio's expertise and services
3. Help users understand how specific technologies work, their differences, advantages, and how Webelio uses them
4. Answer comparison questions (e.g., mobile app vs web app, React vs Vue, etc.) by explaining differences and connecting to Webelio's services
5. Provide helpful information based on the company knowledge base
6. Be friendly, professional, and conversational
7. If you don't know something specific about Webelio, offer to connect the user with the team
8. Encourage users to schedule a consultation for detailed discussions
9. Keep responses concise and within ${MAX_WORDS} words maximum - be informative but brief
10. ALWAYS use plain text - NO markdown formatting

Company Knowledge Base:
${companyContext}

Guidelines:
- Always refer to the company knowledge base for accurate information
- Use Indian Rupees (₹) for pricing when mentioned
- Be helpful and encouraging
- CRITICAL: Keep all responses within ${MAX_WORDS} words maximum - be concise and to the point
- When explaining tech concepts or comparisons, provide clear but concise explanations and relate them to Webelio's services
- Answer comparison questions by explaining key differences briefly and how Webelio can help with each
- If asked about a technology, explain it concisely in the context of how Webelio uses it
- For complex topics, provide a brief overview and suggest scheduling a consultation for detailed discussion
- If asked about something not in the knowledge base, suggest contacting the team directly
- When users ask about contact information, provide: email (sales@webel.io), phone (+91 97735 96863), or consultation page (/consultation)
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
              maxOutputTokens: Math.max(200, MAX_WORDS * 3), // Roughly 3 tokens per word
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
        
        // Apply word limit
        aiResponse = truncateToWordLimit(aiResponse, MAX_WORDS)

        console.log("✅ Gemini API: Successfully generated response using", geminiModel, `(${countWords(aiResponse)} words)`)

        return NextResponse.json({
          message: aiResponse,
          model: geminiModel,
          provider: "gemini",
        })
      } catch (error) {
        console.error("❌ Gemini API failed, trying OpenAI:", error)
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
            max_tokens: Math.max(200, MAX_WORDS * 3), // Roughly 3 tokens per word
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
        
        // Apply word limit
        aiResponse = truncateToWordLimit(aiResponse, MAX_WORDS)

        console.log("✅ OpenAI API: Successfully generated response using", data.model || "gpt-3.5-turbo", `(${countWords(aiResponse)} words)`)

        return NextResponse.json({
          message: aiResponse,
          model: data.model || "gpt-3.5-turbo",
          provider: "openai",
        })
      } catch (error) {
        console.error("❌ OpenAI API failed, using fallback:", error)
        // Fall through to fallback response
      }
    }

    // Fallback: Intelligent rule-based responses
    let fallbackResponse = generateIntelligentResponse(userMessage, companyContext)
    
    // Remove markdown formatting from fallback response
    fallbackResponse = stripMarkdown(fallbackResponse)
    
    // Apply word limit
    fallbackResponse = truncateToWordLimit(fallbackResponse, MAX_WORDS)
    
    console.log("⚠️ Fallback System: Using rule-based responses (no API configured)", `(${countWords(fallbackResponse)} words)`)

    return NextResponse.json({
      message: fallbackResponse,
      model: "fallback",
      provider: "fallback",
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
  
  // Check if question is related to Webelio or technology
  const webelioKeywords = [
    'webelio', 'sedawk', 'company', 'services', 'service', 'pricing', 'price', 'cost', 'budget',
    'technology', 'technologies', 'tech stack', 'framework', 'timeline', 'deadline', 'how long',
    'team', 'process', 'methodology', 'consultation', 'meeting', 'call', 'contact', 'email',
    'phone', 'support', 'maintenance', 'portfolio', 'projects', 'about', 'what do you do',
    'offer', 'provide', 'website', 'mobile app', 'development', 'design', 'marketing', 'iot',
    'ai', 'ml', 'cybersecurity', 'automation', 'embedded', 'graphic', 'social media'
  ]
  
  const techKeywords = [
    'react', 'next.js', 'node.js', 'python', 'javascript', 'typescript', 'vue', 'angular',
    'database', 'postgresql', 'mongodb', 'redis', 'aws', 'azure', 'gcp', 'cloud',
    'api', 'rest', 'graphql', 'microservices', 'docker', 'kubernetes', 'devops',
    'machine learning', 'artificial intelligence', 'tensorflow', 'pytorch', 'neural network',
    'mobile development', 'ios', 'android', 'react native', 'flutter', 'swift', 'kotlin',
    'frontend', 'backend', 'full stack', 'ui', 'ux', 'design system', 'responsive',
    'security', 'encryption', 'authentication', 'authorization', 'ssl', 'https',
    'performance', 'optimization', 'scalability', 'load balancing', 'caching',
    'agile', 'scrum', 'ci/cd', 'testing', 'qa', 'deployment', 'hosting'
  ]
  
  const isWebelioRelated = webelioKeywords.some(keyword => lowerMessage.includes(keyword))
  const isTechRelated = techKeywords.some(keyword => lowerMessage.includes(keyword))
  
  // If question is not related to Webelio or technology, redirect
  if (!isWebelioRelated && !isTechRelated && !lowerMessage.includes('hello') && !lowerMessage.includes('hi') && !lowerMessage.includes('hey')) {
    return "I'm a support assistant for Webelio and can help with questions about our company, services, technologies we use, or tech concepts related to our expertise. How can I assist you?"
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

  // Technology questions - general tech stack
  if (lowerMessage.includes("technology") || lowerMessage.includes("tech stack") || lowerMessage.includes("framework") || lowerMessage.includes("technologies")) {
    return "We specialize in modern technologies: Frontend (React, Next.js, Vue.js, TypeScript), Backend (Node.js, Python, Java, .NET), Databases (PostgreSQL, MongoDB, Redis), Cloud (AWS, Azure, GCP, Vercel), Mobile (React Native, Flutter, Swift, Kotlin), and AI/ML (TensorFlow, PyTorch, OpenAI, Scikit-learn). Our team stays current with industry best practices and emerging technologies. What specific technology challenges are you facing?"
  }

  // Specific technology questions - React
  if (lowerMessage.includes("react") && !lowerMessage.includes("native")) {
    return "React is a powerful JavaScript library for building user interfaces. At Webelio, we use React extensively for creating dynamic, interactive web applications. React allows us to build reusable components, manage state efficiently, and create fast, responsive user experiences. We often combine React with Next.js for server-side rendering and optimal performance. Would you like to know how React can benefit your project?"
  }

  // Next.js questions
  if (lowerMessage.includes("next.js") || lowerMessage.includes("nextjs")) {
    return "Next.js is a React framework that we use at Webelio for building production-ready web applications. It provides server-side rendering, automatic code splitting, optimized performance, and seamless deployment. Next.js helps us deliver websites that load 340% faster and improve conversion rates by 127%. We use it for most of our web development projects because of its excellent SEO capabilities and developer experience. Are you considering Next.js for your project?"
  }

  // Node.js questions
  if (lowerMessage.includes("node.js") || lowerMessage.includes("nodejs")) {
    return "Node.js is a JavaScript runtime that we use at Webelio for building scalable backend services and APIs. It allows us to use JavaScript on both frontend and backend, making development more efficient. We use Node.js for real-time applications, REST APIs, microservices, and serverless functions. It's particularly great for handling concurrent connections and building fast, data-intensive applications. How can we help you leverage Node.js?"
  }

  // Python questions
  if (lowerMessage.includes("python")) {
    return "Python is a versatile programming language that Webelio uses for backend development, data science, AI/ML solutions, and automation. We leverage Python with frameworks like Django and Flask for web applications, and libraries like TensorFlow and PyTorch for machine learning projects. Python's simplicity and powerful libraries make it ideal for rapid development and complex data processing. Are you looking to build something with Python?"
  }

  // AI/ML questions
  if (lowerMessage.includes("ai") || lowerMessage.includes("artificial intelligence") || lowerMessage.includes("machine learning") || lowerMessage.includes("ml")) {
    return "At Webelio, we specialize in AI and machine learning solutions. We use technologies like TensorFlow, PyTorch, OpenAI APIs, and Scikit-learn to build intelligent systems. Our AI/ML services include predictive analytics, natural language processing, computer vision, and process automation. We've helped businesses achieve 94% accuracy rates, 75% process efficiency improvements, and 60% cost reductions through AI implementation. What AI solution are you interested in?"
  }

  // Mobile development questions
  if (lowerMessage.includes("mobile") || lowerMessage.includes("app development") || lowerMessage.includes("react native") || lowerMessage.includes("flutter")) {
    return "Webelio offers comprehensive mobile app development using React Native for cross-platform apps, or native development with Swift (iOS) and Kotlin (Android). React Native allows us to build apps for both iOS and Android with a single codebase, reducing development time and cost. Flutter is another excellent option for cross-platform development. Our mobile apps feature real-time synchronization, advanced security, and built-in analytics. Would you like to discuss your mobile app idea?"
  }

  // Database questions
  if (lowerMessage.includes("database") || lowerMessage.includes("postgresql") || lowerMessage.includes("mongodb") || lowerMessage.includes("sql")) {
    return "At Webelio, we work with various databases depending on project needs. PostgreSQL for relational data with ACID compliance, MongoDB for flexible document storage, and Redis for caching and real-time data. We help choose the right database based on your data structure, scalability needs, and performance requirements. Each database has its strengths, and we can help you make the best choice for your project. What type of data are you working with?"
  }

  // Cloud questions
  if (lowerMessage.includes("cloud") || lowerMessage.includes("aws") || lowerMessage.includes("azure") || lowerMessage.includes("gcp") || lowerMessage.includes("vercel")) {
    return "Webelio works with major cloud platforms including AWS, Azure, GCP, and Vercel. We help businesses migrate to the cloud, set up scalable infrastructure, implement CI/CD pipelines, and optimize cloud costs. Our cloud solutions ensure 99.9% uptime, automatic scaling, and enterprise-grade security. We can help you choose the right cloud platform based on your specific needs and budget. Are you looking to move to the cloud or optimize your existing setup?"
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
    return "You can reach us via email at sales@webel.io, phone at +91 97735 96863 (Mon-Fri 9am-6pm IST), or schedule a consultation through our website at /consultation. We typically respond within 24 hours. Our office is located at 5th Floor, Tech Garden, Plot No 4, Sector 35, Udyog Vihar-VII, Gurugram, Haryana, 122004, India. We also offer virtual consultations. How would you like to connect?"
  }

  // Comparison questions - Mobile App vs Web App
  if ((lowerMessage.includes("difference") || lowerMessage.includes("vs") || lowerMessage.includes("versus") || lowerMessage.includes("compare")) && 
      ((lowerMessage.includes("mobile") && lowerMessage.includes("app")) && (lowerMessage.includes("web") || lowerMessage.includes("website")))) {
    return "Great question! Here are the key differences between mobile apps and web apps: Mobile apps are native applications installed on devices (iOS/Android), offering better performance, offline access, and device features like camera and GPS. Web apps run in browsers, are easier to maintain, work across platforms, and don't require app store approval. At Webelio, we develop both. Mobile apps start at ₹2,00,000 and are ideal for frequent users needing offline access. Web apps start at ₹1,50,000 and are perfect for broader reach and easier updates. Many clients choose Progressive Web Apps (PWAs) which combine benefits of both. Which approach fits your needs better?"
  }

  // Comparison questions - React vs Vue vs Angular
  if ((lowerMessage.includes("difference") || lowerMessage.includes("vs") || lowerMessage.includes("versus") || lowerMessage.includes("compare")) && 
      (lowerMessage.includes("react") && (lowerMessage.includes("vue") || lowerMessage.includes("angular")))) {
    return "React, Vue, and Angular are all excellent frontend frameworks. React (our primary choice at Webelio) offers flexibility, large ecosystem, and is great for complex UIs. Vue is easier to learn and has great documentation. Angular provides a complete framework with built-in features but has a steeper learning curve. At Webelio, we primarily use React with Next.js because it offers the best balance of performance, developer experience, and SEO capabilities. We've built 500+ projects using React, achieving 340% faster load times. The choice depends on your project needs, team expertise, and scalability requirements. Would you like to discuss which framework is best for your project?"
  }

  // Comparison questions - Native vs Cross-platform mobile
  if ((lowerMessage.includes("difference") || lowerMessage.includes("vs") || lowerMessage.includes("versus") || lowerMessage.includes("compare")) && 
      ((lowerMessage.includes("native") || lowerMessage.includes("swift") || lowerMessage.includes("kotlin")) && 
       (lowerMessage.includes("cross-platform") || lowerMessage.includes("react native") || lowerMessage.includes("flutter")))) {
    return "Native apps (Swift for iOS, Kotlin for Android) offer the best performance and full access to device features, but require separate development for each platform. Cross-platform apps (React Native, Flutter) use one codebase for both platforms, reducing development time and cost by up to 40%. At Webelio, we use React Native for most projects because it delivers near-native performance while saving time and money. Native development is ideal when you need maximum performance or platform-specific features. Cross-platform is perfect for most businesses wanting faster delivery and lower costs. We can help you choose based on your requirements. What's your priority - performance or cost efficiency?"
  }

  // Comparison questions - SQL vs NoSQL databases
  if ((lowerMessage.includes("difference") || lowerMessage.includes("vs") || lowerMessage.includes("versus") || lowerMessage.includes("compare")) && 
      ((lowerMessage.includes("sql") || lowerMessage.includes("postgresql") || lowerMessage.includes("mysql")) && 
       (lowerMessage.includes("nosql") || lowerMessage.includes("mongodb")))) {
    return "SQL databases (PostgreSQL, MySQL) store data in structured tables with relationships, ensuring data integrity and ACID compliance. They're ideal for complex queries and transactions. NoSQL databases (MongoDB) store flexible document data, scale horizontally easily, and are great for rapid development. At Webelio, we use PostgreSQL for relational data requiring consistency, and MongoDB for flexible schemas and rapid iteration. The choice depends on your data structure: structured relational data needs SQL, while flexible or rapidly changing data benefits from NoSQL. Many projects use both. What type of data are you working with?"
  }

  // Comparison questions - AWS vs Azure vs GCP
  if ((lowerMessage.includes("difference") || lowerMessage.includes("vs") || lowerMessage.includes("versus") || lowerMessage.includes("compare")) && 
      (lowerMessage.includes("aws") && (lowerMessage.includes("azure") || lowerMessage.includes("gcp") || lowerMessage.includes("google cloud")))) {
    return "AWS, Azure, and GCP are the three major cloud platforms. AWS has the largest market share and most services. Azure integrates well with Microsoft products. GCP excels in data analytics and machine learning. At Webelio, we work with all three and help clients choose based on their needs. AWS for broad service selection, Azure for Microsoft ecosystem integration, GCP for data-heavy workloads. We also use Vercel for Next.js deployments due to its seamless integration. The best choice depends on your existing infrastructure, budget, and specific requirements. Which cloud platform are you considering?"
  }

  // General comparison questions handler
  if (lowerMessage.includes("difference") || lowerMessage.includes("vs") || lowerMessage.includes("versus") || lowerMessage.includes("compare")) {
    return "I'd be happy to explain the differences! At Webelio, we work with various technologies and can help you understand their pros and cons. Could you clarify what specific technologies or solutions you'd like to compare? For example, mobile app vs web app, React vs Vue, native vs cross-platform, or any other tech comparison. Once I know what you're comparing, I can provide detailed insights and explain how Webelio uses each technology in our projects."
  }

  // "What is" questions handler
  if (lowerMessage.includes("what is") || lowerMessage.includes("what are") || lowerMessage.includes("explain")) {
    // Check if it's a tech-related "what is" question
    if (isTechRelated || isWebelioRelated) {
      return "I'd be happy to explain! At Webelio, we work with many technologies and can help you understand how they work and how we use them in our projects. Could you be more specific about what technology or concept you'd like me to explain? For example, what is React, what is Next.js, what is a mobile app, what is cloud computing, etc. I'll provide a clear explanation and connect it to how Webelio implements these technologies."
    }
  }

  // Greeting
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("greetings")) {
    return "Hello! Welcome to Webelio, a brand of Sedawk Dynamics Pvt Ltd. I'm here to help you explore how we can transform your business through technology. Whether you're looking to build a web application, mobile app, implement AI solutions, or need technical consulting, I can provide detailed information about our services, pricing, technologies, and processes. What would you like to know about Webelio?"
  }

  // Default response - only for Webelio-related questions
  return "That's an excellent question about Webelio! I'd love to provide you with detailed, personalized information. Our team of experts can address your specific needs and provide comprehensive solutions. You can reach our technical team directly at sales@webel.io, schedule a free consultation at /consultation, or continue chatting with me for immediate assistance. What specific aspect of Webelio's services or processes would you like to explore further?"
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
