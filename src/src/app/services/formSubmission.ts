/**
 * Form Submission Service
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. No async/await (uses Promises)
 * 4. ASCII only
 */

/**
 * @typedef FormSubmissionData
 * @property {string} name
 * @property {string} email
 * @property {string} message
 * @property {string} [formType]
 * @property {string} [sourceUrl]
 * @property {Object} [utmParams]
 * @property {string} [utmParams.source]
 * @property {string} [utmParams.medium]
 * @property {string} [utmParams.campaign]
 * @property {string} [utmParams.content]
 * @property {Object<string, any>} [metadata]
 */

/**
 * @typedef FormSubmissionResponse
 * @property {boolean} success
 * @property {string} message
 * @property {string} [submissionId]
 * @property {Array<string>} [errors]
 */

var API_CONFIG = {
  baseUrl: 'https://api.example.com',
  enquiryEndpoint: '/api/enquiry',
  newsletterEndpoint: '/api/newsletter',
  timeout: 10000,
  retryAttempts: 2,
  retryDelay: 1000,
};

function extractUtmParams() {
  if (typeof window === 'undefined') return {};
  var params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || undefined,
    medium: params.get('utm_medium') || undefined,
    campaign: params.get('utm_campaign') || undefined,
    content: params.get('utm_content') || undefined,
  };
}

function fetchWithTimeout(url, options, timeout) {
  return Promise.race([
    fetch(url, options),
    new Promise(function(_, reject) {
      setTimeout(function() { reject(new Error('Request timeout')); }, timeout);
    })
  ]);
}

export function submitForm(data) {
  var enrichedData = {};
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) enrichedData[keys[i]] = data[keys[i]];
  
  if (typeof window !== 'undefined') {
    enrichedData.sourceUrl = window.location.href;
    enrichedData.utmParams = extractUtmParams();
  }

  function attempt(retries) {
    return fetchWithTimeout(
      API_CONFIG.baseUrl + API_CONFIG.enquiryEndpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(enrichedData),
      },
      API_CONFIG.timeout
    ).then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP ' + response.status + ': ' + response.statusText);
      }
      return response.json();
    }).then(function(result) {
      return {
        success: true,
        message: result.message || 'Form submitted successfully',
        submissionId: result.id || result.submissionId,
      };
    }).catch(function(error) {
      if (retries > 0 && !(error.message && error.message.indexOf('HTTP 4') !== -1)) {
        return new Promise(function(resolve) {
          setTimeout(function() { resolve(attempt(retries - 1)); }, API_CONFIG.retryDelay);
        });
      }
      console.error('Form submission failed:', error);
      return {
        success: false,
        message: 'Failed to submit form. Please try again later.',
        errors: [error.message || 'Unknown error occurred'],
      };
    });
  }

  return attempt(API_CONFIG.retryAttempts);
}

export function submitNewsletter(email, name) {
  var body = {
    email: email,
    name: name,
  };
  if (typeof window !== 'undefined') {
    body.sourceUrl = window.location.href;
    body.utmParams = extractUtmParams();
  }

  return fetchWithTimeout(
    API_CONFIG.baseUrl + API_CONFIG.newsletterEndpoint,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    },
    API_CONFIG.timeout
  ).then(function(response) {
    if (!response.ok) {
      throw new Error('HTTP ' + response.status + ': ' + response.statusText);
    }
    return response.json();
  }).then(function(result) {
    return {
      success: true,
      message: result.message || 'Successfully subscribed to newsletter',
      submissionId: result.id,
    };
  }).catch(function(error) {
    console.error('Newsletter signup failed:', error);
    return {
      success: false,
      message: 'Failed to subscribe. Please try again later.',
      errors: [error.message],
    };
  });
}

export function submitFormMock(data) {
  console.log('Mock Form Submission:', data);
  
  return new Promise(function(resolve) {
    setTimeout(function() {
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
          submissionId: 'mock-' + Date.now(),
        });
      }
    }, 1500);
  });
}

export function isValidEmail(email) {
  var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}

export function sanitizeInput(input) {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 5000);
}

export default {
  submitForm: submitForm,
  submitNewsletter: submitNewsletter,
  submitFormMock: submitFormMock,
  isValidEmail: isValidEmail,
  sanitizeInput: sanitizeInput,
};