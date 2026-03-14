/**
 * Care Instructions Data
 * 
 * Content for the Care Instructions page, including material-specific
 * guides and general maintenance tips.
 * 
 * @module data/careInstructions
 */

// @typedef {Object} CareGuide
// @property {string} id
// @property {string} material
// @property {string} icon
// @property {string[]} instructions

const careGuides = [
  {
    id: 'cotton',
    material: 'Cotton',
    icon: 'Shirt',
    instructions: [
      'Machine wash cold with like colors.',
      'Tumble dry low or hang to dry for best results.',
      'Iron on medium heat if needed.',
      'Avoid bleach to preserve color.',
    ],
  },
  {
    id: 'linen',
    material: 'Linen',
    icon: 'Wind',
    instructions: [
      'Machine wash in cold water on gentle cycle.',
      'Air dry flat to minimize wrinkles.',
      'Iron while slightly damp for a crisp finish.',
      'Linen softens beautifully with each wash.',
    ],
  },
  {
    id: 'wool',
    material: 'Wool & Cashmere',
    icon: 'Thermometer',
    instructions: [
      'Hand wash in cold water with mild detergent.',
      'Gently press out water — never wring.',
      'Lay flat on a towel to dry.',
      'Store folded with cedar blocks to prevent moths.',
    ],
  },
  {
    id: 'synthetic',
    material: 'Synthetic Fabrics',
    icon: 'ShieldCheck',
    instructions: [
      'Machine wash cold on gentle cycle.',
      'Avoid high heat — tumble dry low.',
      'Remove promptly to reduce wrinkles.',
      'Iron on low heat if necessary.',
    ],
  },
  {
    id: 'leather',
    material: 'Leather & Suede',
    icon: 'Droplets',
    instructions: [
      'Wipe with a damp cloth for surface cleaning.',
      'Apply leather conditioner every 3-6 months.',
      'Store in a dust bag away from direct sunlight.',
      'Avoid water exposure — treat with waterproof spray.',
    ],
  },
];

const generalCareTips = [
  'Always check the care label before washing.',
  'Turn garments inside out to preserve prints and colors.',
  'Use a mesh laundry bag for delicate items.',
  'Avoid over-drying — remove items while slightly damp.',
  'Store in a cool, dry place away from direct sunlight.',
  'Treat stains immediately for best results.',
];

const careInstructionsPageContent = {
  title: 'Care Instructions',
  description: 'Keep your products looking their best with our material-specific care guides.',
  tipsHeading: 'General Care Tips',
  guidesHeading: 'Care by Material',
  ctaHeading: 'Questions about product care?',
  ctaText: 'Our team can provide specific care advice for any product.',
  ctaButton: 'Contact Us'
};

export { careGuides, generalCareTips, careInstructionsPageContent };