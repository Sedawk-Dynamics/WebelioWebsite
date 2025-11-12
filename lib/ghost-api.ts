/**
 * Ghost CMS API integration
 */

const GHOST_API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL
const GHOST_CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY 

export interface GhostPost {
  id: string
  uuid: string
  title: string
  slug: string
  html: string
  excerpt?: string
  feature_image?: string
  featured: boolean
  visibility: string
  created_at: string
  updated_at: string
  published_at: string
  custom_excerpt?: string
  codeinjection_head?: string
  codeinjection_foot?: string
  custom_template?: string
  canonical_url?: string
  authors?: Array<{
    id: string
    name: string
    slug: string
    profile_image?: string
    cover_image?: string
    bio?: string
    website?: string
    location?: string
    facebook?: string
    twitter?: string
  }>
  tags?: Array<{
    id: string
    name: string
    slug: string
    description?: string
  }>
  primary_author?: {
    id: string
    name: string
    slug: string
    profile_image?: string
  }
  primary_tag?: {
    id: string
    name: string
    slug: string
  }
  reading_time?: number
}

export interface GhostPostsResponse {
  posts: GhostPost[]
  meta: {
    pagination: {
      page: number
      limit: number
      pages: number
      total: number
      next: number | null
      prev: number | null
    }
  }
}

export interface GhostPostResponse {
  posts: GhostPost[]
}

/**
 * Fetch all posts from Ghost CMS
 */
export async function getGhostPosts(params?: {
  limit?: number
  page?: number
  filter?: string
  include?: string
  fields?: string
}): Promise<GhostPostsResponse> {
  const queryParams = new URLSearchParams()
  
  if (params?.limit) queryParams.append("limit", params.limit.toString())
  if (params?.page) queryParams.append("page", params.page.toString())
  if (params?.filter) queryParams.append("filter", params.filter)
  if (params?.include) queryParams.append("include", params.include)
  if (params?.fields) queryParams.append("fields", params.fields)

  const url = `${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}${queryParams.toString() ? `&${queryParams.toString()}` : ""}`

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (!response.ok) {
      throw new Error(`Ghost API error: ${response.status} ${response.statusText}`)
    }

    const data: GhostPostsResponse = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Ghost posts:", error)
    throw error
  }
}

/**
 * Fetch a single post by slug
 */
export async function getGhostPostBySlug(slug: string): Promise<GhostPost | null> {
  try {
    const url = `${GHOST_API_URL}/ghost/api/content/posts/slug/${slug}/?key=${GHOST_CONTENT_API_KEY}&include=authors,tags`

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`Ghost API error: ${response.status} ${response.statusText}`)
    }

    const data: GhostPostResponse = await response.json()
    return data.posts[0] || null
  } catch (error) {
    console.error("Error fetching Ghost post:", error)
    throw error
  }
}

/**
 * Fetch tags from Ghost CMS
 */
export async function getGhostTags(): Promise<Array<{ id: string; name: string; slug: string }>> {
  try {
    const url = `${GHOST_API_URL}/ghost/api/content/tags/?key=${GHOST_CONTENT_API_KEY}&limit=all`

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    })

    if (!response.ok) {
      throw new Error(`Ghost API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data.tags || []
  } catch (error) {
    console.error("Error fetching Ghost tags:", error)
    return []
  }
}

/**
 * Calculate reading time from HTML content
 */
export function calculateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "").trim()
  const words = text.split(/\s+/).length
  const readingTime = Math.ceil(words / 200) // Average reading speed: 200 words per minute
  return readingTime
}

/**
 * Convert Ghost post to blog post format
 */
export function formatGhostPost(post: GhostPost) {
  const excerpt = post.custom_excerpt || post.excerpt || ""
  const readingTime = post.reading_time || calculateReadingTime(post.html || "")
  const category = post.primary_tag?.name || post.tags?.[0]?.name || ""
  
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: excerpt,
    html: post.html,
    category: category,
    date: post.published_at || post.created_at,
    readTime: `${readingTime} min read`,
    image: post.feature_image || "/placeholder.svg",
    author: post.primary_author?.name || "Webelio Team",
    authorImage: post.primary_author?.profile_image,
    tags: post.tags?.map((tag) => tag.name) || [],
    publishedAt: post.published_at,
    createdAt: post.created_at,
    updatedAt: post.updated_at,
  }
}

