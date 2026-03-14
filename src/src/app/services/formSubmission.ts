/**
 * Form Submission Service
 *
 * Handles form submissions with retry logic, UTM parameter enrichment,
 * and timeout protection.
 */

interface FormSubmissionData {
  name: string;
  email: string;
  message: string;
  formType?: string;
  sourceUrl?: string;
  utmParams?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
  };
  metadata?: Record<string, any>;
  [key: string]: any;
}

interface FormSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  errors?: string[];
}

const API_CONFIG = {
  baseUrl: 'https://api.example.com',
  enquiryEndpoint: '/api/enquiry',
  newsletterEndpoint: '/api/newsletter',
  timeout: 10000,
  retryAttempts: 2,
  retryDelay: 1000,
};

const extractUtmParams = () => {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || undefined,
    medium: params.get('utm_medium') || undefined,
    campaign: params.get('utm_campaign') || undefined,
    content: params.get('utm_content') || undefined,
  };
};

const fetchWithTimeout = (url: string, options: RequestInit, timeout: number): Promise<Response> => {
  return Promise.race([
    fetch(url, options),
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), timeout);
    }),
  ]);
};

export const submitForm = (data: FormSubmissionData): Promise<FormSubmissionResponse> => {
  const enrichedData: Record<string, any> = { ...data };

  if (typeof window !== 'undefined') {
    enrichedData.sourceUrl = window.location.href;
    enrichedData.utmParams = extractUtmParams();
  }

  const attempt = (retries: number): Promise<FormSubmissionResponse> => {
    return fetchWithTimeout(
      `${API_CONFIG.baseUrl}${API_CONFIG.enquiryEndpoint}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(enrichedData),
      },
      API_CONFIG.timeout
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((result) => ({
        success: true,
        message: result.message || 'Form submitted successfully',
        submissionId: result.id || result.submissionId,
      }))
      .catch((error) => {
        if (retries > 0 && !(error.message?.indexOf('HTTP 4') !== -1)) {
          return new Promise<FormSubmissionResponse>((resolve) => {
            setTimeout(() => resolve(attempt(retries - 1)), API_CONFIG.retryDelay);
          });
        }
        console.error('Form submission failed:', error);
        return {
          success: false,
          message: 'Failed to submit form. Please try again later.',
          errors: [error.message || 'Unknown error occurred'],
        };
      });
  };

  return attempt(API_CONFIG.retryAttempts);
};

export const submitNewsletter = (email: string, name?: string): Promise<FormSubmissionResponse> => {
  const body: Record<string, any> = { email, name };

  if (typeof window !== 'undefined') {
    body.sourceUrl = window.location.href;
    body.utmParams = extractUtmParams();
  }

  return fetchWithTimeout(
    `${API_CONFIG.baseUrl}${API_CONFIG.newsletterEndpoint}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    },
    API_CONFIG.timeout
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then((result) => ({
      success: true,
      message: result.message || 'Successfully subscribed to newsletter',
      submissionId: result.id,
    }))
    .catch((error) => {
      console.error('Newsletter signup failed:', error);
      return {
        success: false,
        message: 'Failed to subscribe. Please try again later.',
        errors: [error.message],
      };
    });
};

export const submitFormMock = (data: FormSubmissionData): Promise<FormSubmissionResponse> => {
  console.log('Mock Form Submission:', data);

  return new Promise((resolve) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        resolve({
          success: false,
          message: 'Network error. Please try again.',
          errors: ['Simulated network failure'],
        });
      } else {
        resolve({
          success: true,
          message: 'Form submitted successfully (mock)',
          submissionId: `mock-${Date.now()}`,
        });
      }
    }, 1500);
  });
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 5000);
};

export default {
  submitForm,
  submitNewsletter,
  submitFormMock,
  isValidEmail,
  sanitizeInput,
};
