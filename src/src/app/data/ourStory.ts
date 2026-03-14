/**
 * Our Story Page Data
 * 
 * Specific content for the Our Story page timeline and values.
 * Note: This data differs slightly from the global company.ts as it represents
 * a specific narrative flow for this template.
 * 
 * @module data/ourStory
 */

// @typedef {Object} StoryMilestone
// @property {string} year
// @property {string} title
// @property {string} description

// @typedef {Object} StoryValue
// @property {string} icon
// @property {string} title
// @property {string} description

const storyMilestones = [
  { year: '2015', title: 'The Beginning', description: 'Founded in a small garage with a vision to make quality products accessible to everyone.' },
  { year: '2017', title: 'First 10,000 Customers', description: 'Reached our first major milestone and expanded our product line beyond the original collection.' },
  { year: '2019', title: 'Sustainability Commitment', description: 'Pledged to use 100% sustainable packaging and began sourcing eco-friendly materials.' },
  { year: '2021', title: 'Global Expansion', description: 'Expanded shipping to over 30 countries and launched localized shopping experiences.' },
  { year: '2023', title: 'Community Impact', description: 'Donated over $1M to community programs and launched our artisan partnership initiative.' },
  { year: '2025', title: 'Innovation Forward', description: 'Introduced AI-powered personalization and virtual try-on technology for an enhanced shopping experience.' },
];

const storyValues = [
  { icon: 'Heart', title: 'Craftsmanship', description: 'Every product is designed with care and attention to detail, ensuring lasting quality.' },
  { icon: 'Globe', title: 'Sustainability', description: 'We are committed to reducing our environmental impact through responsible sourcing and packaging.' },
  { icon: 'Users', title: 'Community', description: 'We support artisan partnerships and give back to communities that inspire our work.' },
  { icon: 'Award', title: 'Integrity', description: 'Transparent pricing, honest communication, and ethical practices in everything we do.' },
];

const ourStoryPageContent = {
  title: 'Our story',
  description: 'From humble beginnings to a global community - the journey of building something meaningful.',
  missionHeading: 'Our mission',
  missionText: 'We believe that exceptional products should be accessible to everyone. Our mission is to create thoughtfully designed, sustainably produced goods that bring joy to everyday life. Every product we offer reflects our commitment to quality, fairness, and environmental responsibility.',
  valuesHeading: 'What we stand for',
  journeyHeading: 'Our journey',
  ctaHeading: 'Join our story',
  ctaText: 'Discover our latest collections and become part of the community.',
  ctaButtonPrimary: 'Shop Now',
  ctaButtonSecondary: 'Meet the Team'
};

export { storyMilestones, storyValues, ourStoryPageContent };