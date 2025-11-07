/**
 * API utility functions for Webelio Backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface EnquiryData {
  service: string;
  businessName: string;
  businessType?: string;
  companySize?: string;
  primaryGoal?: string;
  budget?: string;
  timeline?: string;
  location?: string;
  contactName: string;
  email: string;
}

export interface EnquiryResponse {
  message: string;
  enquiry: {
    id: string;
    service: string;
    businessName: string;
    businessType: string;
    companySize: string;
    primaryGoal: string;
    budget: string;
    timeline: string;
    location: string;
    contactName: string;
    email: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ApiError {
  error: string;
  details?: string;
}

/**
 * Submit an enquiry to the backend API
 */
export async function submitEnquiry(data: EnquiryData): Promise<EnquiryResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const result: EnquiryResponse = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to submit enquiry. Please try again later.');
  }
}

/**
 * Check if the API is available
 */
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
    });
    return response.ok;
  } catch {
    return false;
  }
}

// ==================== PROJECTS API ====================

export interface Project {
  id: string;
  projectName: string;
  companyName: string;
  categoryId?: string;
  category?: {
    id: string;
    name: string;
  } | null;
  projectStatus: string;
  isFeatured: boolean;
  projectCompletionTime: string;
  projectOverview: string;
  companyWebsite?: string;
  keyFeatures: string[];
  technologiesUsed: string[];
  teamMembers?: string[];
  projectMilestones?: string[];
  socialMediaAccounts?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  projectMetrics?: {
    revenue?: string;
    users?: string;
    satisfaction?: string;
  };
  companyLogo?: string;
  visitingCard?: string;
  letterhead?: string;
  companyProfile?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectsResponse {
  projects: Project[];
}

/**
 * Get all projects
 */
export async function getProjects(params?: {
  status?: string;
  featured?: boolean;
  category?: string;
  limit?: number;
}): Promise<ProjectsResponse> {
  const queryParams = new URLSearchParams();
  if (params?.status) queryParams.append('status', params.status);
  if (params?.featured !== undefined) queryParams.append('featured', params.featured.toString());
  if (params?.category) queryParams.append('category', params.category);
  if (params?.limit) queryParams.append('limit', params.limit.toString());

  const url = `${API_BASE_URL}/api/projects${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to fetch projects');
  }

  return response.json();
}

/**
 * Get single project by ID
 */
export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`${API_BASE_URL}/api/projects/${id}`, {
    method: 'GET',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to fetch project');
  }

  return response.json();
}

// ==================== CATEGORIES API ====================

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoriesResponse {
  categories: Category[];
}

/**
 * Get all categories
 */
export async function getCategories(): Promise<CategoriesResponse> {
  const response = await fetch(`${API_BASE_URL}/api/categories`, {
    method: 'GET',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to fetch categories');
  }

  return response.json();
}

