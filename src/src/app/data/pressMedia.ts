/**
 * Press & Media Page Data
 * 
 * Content for the Press & Media page, including press releases and media kit items.
 * 
 * @module data/pressMedia
 */

// @typedef {Object} PressRelease
// @property {string} date
// @property {string} title
// @property {string} excerpt

// @typedef {Object} MediaKitItem
// @property {string} title
// @property {string} description
// @property {string} type

const pressReleases = [
  { date: 'January 8, 2026', title: 'Company Announces 2026 Sustainability Goals', excerpt: 'Ambitious targets set for carbon neutrality and circular economy model by 2030.' },
  { date: 'December 15, 2025', title: 'Holiday Collection Breaks Sales Records', excerpt: 'Record-breaking holiday season driven by new product lines and expanded international reach.' },
  { date: 'November 1, 2025', title: 'Partnership with Global Reforestation Initiative', excerpt: 'Committing to plant 5 million trees through new conservation partnership.' },
  { date: 'September 20, 2025', title: 'Launch of Rewards Program', excerpt: 'New loyalty program offers tiered benefits and exclusive member perks.' },
  { date: 'July 12, 2025', title: 'Expansion into European Markets', excerpt: 'Launching localized shopping experiences for UK, Germany, and France.' },
];

const mediaKitItems = [
  { title: 'Brand Guidelines', description: 'Logo usage, color palette, and typography standards.', type: 'PDF' },
  { title: 'High-Resolution Logos', description: 'Logo files in SVG, PNG, and EPS formats.', type: 'ZIP' },
  { title: 'Product Photography', description: 'High-quality product images for editorial use.', type: 'ZIP' },
  { title: 'Company Fact Sheet', description: 'Key facts, figures, and company milestones.', type: 'PDF' },
];

const pressMediaPageContent = {
  title: 'Press & Media',
  description: 'News, press releases, and media resources for journalists, bloggers, and partners.',
  releasesHeading: 'Press Releases',
  mediaKitHeading: 'Media Kit',
  mediaKitText: 'Download brand assets and resources for editorial and promotional use.',
  ctaHeading: 'Media Inquiries',
  ctaText: 'For press inquiries, interviews, or partnership opportunities, please contact our communications team.',
  ctaButtonPrimary: 'Email Press Team',
  ctaButtonSecondary: 'General Contact'
};

export { pressReleases, mediaKitItems, pressMediaPageContent };