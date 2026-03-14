/**
 * Careers Page Data
 * 
 * Content for the Careers page, including benefits and open positions.
 * 
 * @module data/careers
 * 
 * @typedef {Object} CareerBenefit
 * @property {string} id
 * @property {string} icon
 * @property {string} title
 * @property {string} description
 * 
 * @typedef {Object} OpenPosition
 * @property {string} id
 * @property {string} title
 * @property {string} department
 * @property {string} location
 * @property {string} type
 */

export const careerBenefits = [
  { 
    id: 'health',
    icon: 'Heart', 
    title: 'Health & Wellness', 
    description: 'Comprehensive medical, dental, and vision coverage plus wellness stipend.' 
  },
  { 
    id: 'flexible',
    icon: 'Coffee', 
    title: 'Flexible Work', 
    description: 'Remote-first culture with optional office days and flexible hours.' 
  },
  { 
    id: 'learning',
    icon: 'GraduationCap', 
    title: 'Learning Budget', 
    description: '$2,000 annual learning budget for courses, conferences, and books.' 
  },
  { 
    id: 'pto',
    icon: 'Globe', 
    title: 'Paid Time Off', 
    description: 'Unlimited PTO policy plus company-wide wellness days.' 
  },
  { 
    id: 'discount',
    icon: 'Users', 
    title: 'Employee Discount', 
    description: '50% employee discount on all products.' 
  },
  { 
    id: 'equity',
    icon: 'Briefcase', 
    title: 'Equity', 
    description: 'Stock options for all full-time employees.' 
  },
];

export const openPositions = [
  { id: 'fe-eng', title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { id: 'prod-des', title: 'Product Designer', department: 'Design', location: 'New York, NY', type: 'Full-time' },
  { id: 'content-mkt', title: 'Content Marketing Manager', department: 'Marketing', location: 'Remote', type: 'Full-time' },
  { id: 'support', title: 'Customer Support Specialist', department: 'Support', location: 'Remote', type: 'Full-time' },
  { id: 'supply-chain', title: 'Supply Chain Analyst', department: 'Operations', location: 'Los Angeles, CA', type: 'Full-time' },
  { id: 'data-sci', title: 'Data Scientist', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { id: 'ux-research', title: 'UX Researcher', department: 'Design', location: 'San Francisco, CA', type: 'Full-time' },
  { id: 'mkt-intern', title: 'Marketing Intern', department: 'Marketing', location: 'New York, NY', type: 'Internship' },
];

export const careersPageContent = {
  title: 'Careers',
  description: 'Join a team that is passionate about creating exceptional shopping experiences. We are always looking for talented, curious people.',
  benefitsHeading: 'Why work with us',
  positionsHeading: 'Open positions',
  positionsText: 'We have ' + openPositions.length + ' open roles across our teams. Find the one that fits you.',
  ctaHeading: 'Do not see the right role?',
  ctaText: 'Send us your resume and we will keep you in mind for future openings.',
  ctaButton: 'Get in Touch'
};