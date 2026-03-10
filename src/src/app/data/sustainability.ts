/**
 * Sustainability Mock Data
 *
 * Contains sustainability initiatives, environmental stats, and 2030 goals
 * for the Sustainability page.
 *
 * **Used By:**
 * - PageSustainability.tsx
 * - PageAbout.tsx (sustainability section)
 * - Footer (sustainability badge)
 *
 * @module data/sustainability
 * 
 * @typedef {Object} SustainabilityInitiative
 * @property {string} id
 * @property {string} iconName
 * @property {string} title
 * @property {string} description
 * 
 * @typedef {Object} SustainabilityStat
 * @property {string} id
 * @property {string} value
 * @property {string} label
 * 
 * @typedef {Object} SustainabilityGoal
 * @property {string} id
 * @property {string} text
 */

/**
 * Sustainability Initiatives
 */
export var sustainabilityInitiatives = [
  {
    id: 'packaging',
    iconName: 'Recycle',
    title: '100% Recyclable Packaging',
    description:
      'All our packaging materials are recyclable or compostable. We eliminated single-use plastics from our supply chain in 2024.',
  },
  {
    id: 'organic',
    iconName: 'Leaf',
    title: 'Organic Materials',
    description:
      '60% of our products use certified organic cotton, linen, or other sustainably sourced natural fibers.',
  },
  {
    id: 'water',
    iconName: 'Droplets',
    title: 'Water Conservation',
    description:
      'Our manufacturing partners use closed-loop water systems, reducing water usage by 40% compared to industry standards.',
  },
  {
    id: 'carbon',
    iconName: 'Sun',
    title: 'Carbon Neutral Shipping',
    description:
      'We offset 100% of carbon emissions from shipping through verified carbon offset programs.',
  },
  {
    id: 'trees',
    iconName: 'TreePine',
    title: 'Reforestation',
    description:
      'For every order placed, we plant a tree through our partnership with global reforestation organizations.',
  },
  {
    id: 'fair-trade',
    iconName: 'Award',
    title: 'Fair Trade Certified',
    description:
      'We work only with Fair Trade certified suppliers, ensuring fair wages and safe working conditions.',
  },
];

/**
 * Environmental Impact Stats
 */
export var sustainabilityStats = [
  { id: 'trees', value: '2M+', label: 'Trees Planted' },
  { id: 'water', value: '40%', label: 'Water Saved' },
  { id: 'plastics', value: '0', label: 'Single-Use Plastics' },
  { id: 'carbon', value: '100%', label: 'Carbon Neutral' },
];

/**
 * 2030 Goals
 */
export var sustainabilityGoals = [
  {
    id: 'g1',
    text: 'Achieve 100% organic or recycled materials across all product lines',
  },
  {
    id: 'g2',
    text: 'Reduce total carbon emissions by 75% from 2020 baseline',
  },
  {
    id: 'g3',
    text: 'Implement circular economy model with take-back and recycling program',
  },
  {
    id: 'g4',
    text: 'Plant 10 million trees through reforestation partnerships',
  },
  {
    id: 'g5',
    text: 'Achieve B Corp certification across all business units',
  },
];

/**
 * Page-level content strings
 */
export var sustainabilityPageContent = {
  title: 'Sustainability',
  description:
    'Our commitment to the planet is woven into everything we do - from sourcing to shipping.',
  initiativesHeading: 'Our initiatives',
  initiativesDescription:
    'Concrete actions we are taking to reduce our environmental footprint.',
  goalsHeading: 'Our 2030 Goals',
  ctaHeading: 'Shop sustainably',
  ctaText:
    'Every purchase supports our mission. Look for the eco-friendly badge on product pages.',
};

export default {
  sustainabilityInitiatives: sustainabilityInitiatives,
  sustainabilityStats: sustainabilityStats,
  sustainabilityGoals: sustainabilityGoals,
  sustainabilityPageContent: sustainabilityPageContent,
};
