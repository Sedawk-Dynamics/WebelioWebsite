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

