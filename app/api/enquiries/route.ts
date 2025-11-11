import { type NextRequest, NextResponse } from "next/server"

export interface EnquiryData {
  service: string
  businessName: string
  businessType?: string
  companySize?: string
  primaryGoal?: string
  budget?: string
  timeline?: string
  location?: string
  contactName: string
  email: string
}

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryData = await request.json()

    // Validate required fields
    if (!body.contactName || !body.email || !body.businessName) {
      return NextResponse.json(
        { error: "Missing required fields: contactName, email, and businessName are required" },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const externalApiUrl = process.env.NEXT_PUBLIC_API_URL

    if (externalApiUrl) {
      try {
        const response = await fetch(`${externalApiUrl}/api/enquiries`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })

        // Check if response is JSON before parsing
        const contentType = response.headers.get("content-type")

        if (!response.ok) {
          console.error(`External API returned status ${response.status}`)
          throw new Error(`External API error: ${response.status}`)
        }

        if (contentType && contentType.includes("application/json")) {
          const result = await response.json()
          return NextResponse.json(result, { status: 200 })
        } else {
          // Response is not JSON (likely HTML error page)
          console.error("External API returned non-JSON response")
          throw new Error("External API returned invalid response format")
        }
      } catch (error) {
        console.error("External API failed, using local handling:", error instanceof Error ? error.message : error)
        // Fall through to local handling if external API fails
      }
    }

    // Local handling: log enquiry data (in production, save to database)
    console.log("Processing enquiry locally:", {
      service: body.service,
      businessName: body.businessName,
      email: body.email,
    })

    // Create a mock response (replace with actual database save in production)
    const enquiry = {
      id: `enq_${Date.now()}`,
      service: body.service,
      businessName: body.businessName,
      businessType: body.businessType || "",
      companySize: body.companySize || "",
      primaryGoal: body.primaryGoal || "",
      budget: body.budget || "",
      timeline: body.timeline || "",
      location: body.location || "",
      contactName: body.contactName,
      email: body.email,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // TODO: In production, save to database
    // await db.enquiry.create({ data: enquiry });

    return NextResponse.json(
      {
        message: "Enquiry submitted successfully",
        enquiry,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error processing enquiry:", error)
    return NextResponse.json(
      {
        error: "Failed to process enquiry",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ status: "ok", message: "Enquiries API is running" })
}
