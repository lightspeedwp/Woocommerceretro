/**
 * Affiliate Program Data
 * 
 * Content for the Affiliate Program page, including benefits, commission
 * structure, and application steps.
 * 
 * @module data/affiliateProgram
 */

// @typedef {Object} AffiliateBenefit
// @property {string} id
// @property {string} icon
// @property {string} title
// @property {string} description

// @typedef {Object} CommissionTier
// @property {string} id
// @property {string} tier
// @property {string} sales
// @property {string} rate

var affiliateBenefits = [
  { 
    id: 'commission',
    icon: 'DollarSign', 
    title: 'Competitive Commissions', 
    description: 'Earn up to 15% commission on every sale you refer. Higher rates for top performers.' 
  },
  { 
    id: 'analytics',
    icon: 'BarChart3', 
    title: 'Real-Time Analytics', 
    description: 'Track clicks, conversions, and earnings with our dedicated affiliate dashboard.' 
  },
  { 
    id: 'cookie',
    icon: 'Zap', 
    title: '30-Day Cookie Window', 
    description: 'Earn commission on purchases made up to 30 days after the initial referral click.' 
  },
  { 
    id: 'resources',
    icon: 'Share2', 
    title: 'Marketing Resources', 
    description: 'Access banners, product images, and exclusive promotional content for your channels.' 
  },
  { 
    id: 'support',
    icon: 'Users', 
    title: 'Dedicated Support', 
    description: 'Get personalized support from our affiliate management team.' 
  },
  { 
    id: 'payouts',
    icon: 'CheckCircle', 
    title: 'Monthly Payouts', 
    description: 'Reliable monthly payouts via PayPal, bank transfer, or store credit.' 
  },
];

var commissionTiers = [
  { id: 'standard', tier: 'Standard', sales: '0 - 50 sales/month', rate: '8%' },
  { id: 'pro', tier: 'Pro', sales: '51 - 200 sales/month', rate: '10%' },
  { id: 'elite', tier: 'Elite', sales: '201 - 500 sales/month', rate: '12%' },
  { id: 'partner', tier: 'Partner', sales: '500+ sales/month', rate: '15%' },
];

var affiliateProgramPageContent = {
  title: 'Affiliate Program',
  description: 'Partner with us and earn commissions by sharing products you love with your audience.',
  benefitsHeading: 'Why Partner With Us',
  commissionHeading: 'Commission Structure',
  howToJoinHeading: 'How to Get Started',
  ctaHeading: 'Ready to become a partner?',
  ctaText: 'Join hundreds of affiliates already earning with us.',
  ctaButtonPrimary: 'Apply Now',
  ctaButtonSecondary: 'Learn More'
};

export { affiliateBenefits, commissionTiers, affiliateProgramPageContent };