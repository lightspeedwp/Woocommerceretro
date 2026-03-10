/**
 * Size Guide Page Data
 * 
 * Sizing charts, measurement instructions, and category labels.
 * 
 * @module data/sizeGuide
 * 
 * @typedef {Object} SizeChart
 * @property {string[]} headers
 * @property {string[][]} rows
 */

export var sizeData = {
  tops: {
    headers: ['Size', 'US', 'Chest (in)', 'Waist (in)', 'Length (in)'],
    rows: [
      ['XS', '0-2', '32-34', '24-26', '25'],
      ['S', '4-6', '34-36', '26-28', '26'],
      ['M', '8-10', '36-38', '28-30', '27'],
      ['L', '12-14', '38-40', '30-32', '28'],
      ['XL', '16-18', '40-42', '32-34', '29'],
      ['XXL', '20-22', '42-44', '34-36', '30'],
    ],
  },
  bottoms: {
    headers: ['Size', 'US', 'Waist (in)', 'Hips (in)', 'Inseam (in)'],
    rows: [
      ['XS', '0-2', '24-26', '34-36', '30'],
      ['S', '4-6', '26-28', '36-38', '30'],
      ['M', '8-10', '28-30', '38-40', '31'],
      ['L', '12-14', '30-32', '40-42', '31'],
      ['XL', '16-18', '32-34', '42-44', '32'],
      ['XXL', '20-22', '34-36', '44-46', '32'],
    ],
  },
  shoes: {
    headers: ['US', 'EU', 'UK', 'Foot Length (in)', 'Foot Length (cm)'],
    rows: [
      ['6', '36', '3.5', '9.25', '23.5'],
      ['7', '37', '4.5', '9.63', '24.4'],
      ['8', '38', '5.5', '9.94', '25.2'],
      ['9', '39', '6.5', '10.25', '26.0'],
      ['10', '40', '7.5', '10.56', '26.8'],
      ['11', '41', '8.5', '10.94', '27.8'],
    ],
  },
};

export var categoryLabels = {
  tops: 'Tops & Outerwear',
  bottoms: 'Bottoms',
  shoes: 'Shoes',
};

export var measurementInstructions = [
  { 
    title: 'Chest', 
    description: 'Measure around the fullest part of your chest, keeping the tape horizontal.',
    icon: 'Ruler'
  },
  { 
    title: 'Waist', 
    description: 'Measure around your natural waistline, the narrowest part of your torso.',
    icon: 'Ruler'
  },
  { 
    title: 'Hips', 
    description: 'Measure around the widest part of your hips with feet together.',
    icon: 'Ruler'
  },
  { 
    title: 'Inseam', 
    description: 'Measure from the crotch seam to the bottom hem of a well-fitting pair of pants.',
    icon: 'Ruler'
  },
];

export var sizeGuidePageContent = {
  title: 'Size guide',
  description: 'Find your perfect fit with our comprehensive sizing charts and measurement tips.',
  measureHeading: 'How to Measure',
  chartsHeading: 'Size charts',
  fitTip: 'If you are between sizes, we recommend sizing up for a more comfortable fit. Our customer service team can help with specific product fit questions.',
  ctaHeading: 'Need more help with sizing?',
  ctaText: 'Our team can provide personalized sizing advice.',
  ctaButton: 'Contact Us'
};
