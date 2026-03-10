/**
 * Company Information Mock Data
 *
 * Contains company stats, values, timeline, and general information
 * for the *Woo Shop* brand. All content uses sentence case for headings
 * and reflects the brand's warm, craftsmanship-focused voice.
 *
 * @module data/company
 */

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} CompanyStat
 * @property {string} id
 * @property {string} value
 * @property {string} label
 * @property {string} [suffix]
 * @property {string} [description]
 */

/**
 * @typedef {Object} CompanyValue
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 */

/**
 * @typedef {Object} CompanyMilestone
 * @property {string} id
 * @property {string} year
 * @property {string} title
 * @property {string} description
 * @property {string} [image]
 */

/**
 * @typedef {Object} OfficeLocation
 * @property {string} id
 * @property {string} name
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} postalCode
 * @property {string} phone
 * @property {string} [email]
 * @property {boolean} headquarters
 */

// ---------------------------------------------------------------------------
// Company stats
// ---------------------------------------------------------------------------

/** @type {CompanyStat[]} */
export var companyStats = [
  {
    id: 'customers',
    value: '50,000',
    label: 'Happy customers',
    suffix: '+',
    description: 'Paper lovers served worldwide',
  },
  {
    id: 'products',
    value: '2,400',
    label: 'Curated products',
    suffix: '+',
    description: 'Handpicked stationery and lifestyle essentials',
  },
  {
    id: 'satisfaction',
    value: '99',
    label: 'Customer satisfaction',
    suffix: '%',
    description: 'Based on verified customer reviews',
  },
  {
    id: 'countries',
    value: '45',
    label: 'Countries served',
    suffix: '+',
    description: 'Global shipping from Brooklyn to the world',
  },
];

// ---------------------------------------------------------------------------
// Company values
// ---------------------------------------------------------------------------

/** @type {CompanyValue[]} */
export var companyValues = [
  {
    id: 'craftsmanship',
    title: 'Craftsmanship first',
    description:
      'Every product we stock is chosen for its quality, artistry, and attention to detail. We believe beautiful things deserve to be part of everyday life.',
    icon: 'Sparkles',
  },
  {
    id: 'sustainability',
    title: 'Thoughtful sustainability',
    description:
      'From FSC-certified papers to carbon-neutral shipping, we make choices that respect the planet without compromising on quality.',
    icon: 'Leaf',
  },
  {
    id: 'community',
    title: 'Community driven',
    description:
      'We listen to the makers, the writers, the artists. Our community shapes what we stock and how we grow.',
    icon: 'Users',
  },
  {
    id: 'accessibility',
    title: 'Accessible design',
    description:
      'Great design should be for everyone. We keep our products affordable and our shopping experience barrier-free.',
    icon: 'Heart',
  },
  {
    id: 'transparency',
    title: 'Radical transparency',
    description:
      'We share where our products come from, how they are made, and what they cost us. Honesty builds trust.',
    icon: 'Eye',
  },
  {
    id: 'joy',
    title: 'Small joys matter',
    description:
      'A perfectly weighted pen, a notebook that lays flat, an envelope that seals with a satisfying click — these moments matter to us.',
    icon: 'Sun',
  },
];

// ---------------------------------------------------------------------------
// Company timeline
// ---------------------------------------------------------------------------

/** @type {CompanyMilestone[]} */
export var companyTimeline = [
  {
    id: '1',
    year: '2020',
    title: 'Woo Shop founded',
    description:
      'What started as a pop-up market stall in Brooklyn became a mission: make beautifully crafted stationery accessible to everyone.',
  },
  {
    id: '2',
    year: '2021',
    title: 'First 1,000 orders',
    description:
      'Our curated collection resonated. We hit our first milestone and expanded from notebooks to lifestyle essentials.',
  },
  {
    id: '3',
    year: '2022',
    title: 'International shipping launched',
    description:
      'Paper lovers from 15 countries joined the Woo Shop family with carbon-neutral shipping from day one.',
  },
  {
    id: '4',
    year: '2023',
    title: 'Sustainability pledge',
    description:
      'We committed to 100% FSC-certified packaging and partnered with One Tree Planted to offset every shipment.',
  },
  {
    id: '5',
    year: '2024',
    title: 'Maker collaboration programme',
    description:
      'Launched our artisan collaboration series, spotlighting independent paper makers and designers from around the world.',
  },
  {
    id: '6',
    year: '2025',
    title: '50,000 customers',
    description:
      'Celebrated half a million curated items shipped to paper enthusiasts in over 45 countries.',
  },
];

// ---------------------------------------------------------------------------
// Office locations
// ---------------------------------------------------------------------------

/** @type {OfficeLocation[]} */
export var officeLocations = [
  {
    id: '1',
    name: 'Headquarters & showroom',
    address: '88 Commerce Street',
    city: 'Brooklyn',
    state: 'NY',
    country: 'United States',
    postalCode: '11201',
    phone: '+1 (555) 420-7272',
    email: 'hello@wooshop.com',
    headquarters: true,
  },
  {
    id: '2',
    name: 'European studio',
    address: '12 Rue du Commerce',
    city: 'Paris',
    state: 'Ile-de-France',
    country: 'France',
    postalCode: '75003',
    phone: '+33 1 42 00 00 00',
    email: 'bonjour@wooshop.com',
    headquarters: false,
  },
  {
    id: '3',
    name: 'Asia Pacific hub',
    address: '5 Orchard Road, #08-01',
    city: 'Singapore',
    state: 'Singapore',
    country: 'Singapore',
    postalCode: '238824',
    phone: '+65 6100 0000',
    email: 'apac@wooshop.com',
    headquarters: false,
  },
];

// ---------------------------------------------------------------------------
// Company information
// ---------------------------------------------------------------------------

export var companyInfo = {
  name: 'Woo Shop',
  tagline: 'Curated living, delivered to your door',
  founded: '2020',
  founder: 'Clara Engel',
  employees: '85+',
  mission:
    'To bring the quiet joy of beautifully crafted paper goods and lifestyle essentials into everyday life — accessibly, sustainably, and with care.',
  vision:
    'A world where thoughtful design and sustainable craft are the standard, not the exception.',
  description:
    'Woo Shop started as a Brooklyn market stall with a simple belief: everyday objects deserve to be beautiful. Today we curate stationery, homewares, and lifestyle essentials from independent makers around the world, delivering them to your door with carbon-neutral shipping and plastic-free packaging.',
  storyIntro:
    'We are paper people. We believe in the power of a handwritten note, the satisfaction of a perfectly bound notebook, and the quiet joy of a well-designed home.',
  storyBody:
    'Founded by Clara Engel in 2020, Woo Shop began at a weekend market in DUMBO, Brooklyn. Clara had spent a decade in graphic design before realising that the objects she used every day — notebooks, pens, desk accessories — deserved the same care and attention as any design project. What started with a curated table of Japanese stationery has grown into a global community of 50,000 paper enthusiasts who share our belief that small, beautifully crafted things can make a big difference.',
};

// ---------------------------------------------------------------------------
// Awards and recognition
// ---------------------------------------------------------------------------

export var awards = [
  {
    id: '1',
    year: '2025',
    title: 'Best sustainable e-commerce brand',
    organization: 'Green Retail Awards',
    description: 'Recognised for our commitment to plastic-free packaging and carbon-neutral shipping',
  },
  {
    id: '2',
    year: '2024',
    title: 'Editor\'s choice: stationery retailer',
    organization: 'Design Week',
    description: 'Featured as a leading curator of design-forward stationery and lifestyle goods',
  },
  {
    id: '3',
    year: '2024',
    title: 'Top customer experience',
    organization: 'Shopify Commerce Awards',
    description: 'Voted #1 by customers for service quality and unboxing experience',
  },
  {
    id: '4',
    year: '2023',
    title: 'Best new D2C brand',
    organization: 'Brooklyn Chamber of Commerce',
    description: 'Recognised for rapid growth and community impact in Brooklyn\'s maker economy',
  },
];

// ---------------------------------------------------------------------------
// About page section headings (sentence case)
// ---------------------------------------------------------------------------

export var aboutPageContent = {
  pageTitle: 'Our story',
  pageIntro: companyInfo.mission,
  storyHeading: 'Built on craft and curiosity',
  statsHeading: 'Our impact',
  statsDescription: 'Building a community one beautifully crafted object at a time',
  valuesHeading: 'Why shop with us?',
  valuesDescription:
    'We take pride in offering more than great products. Here is what sets us apart.',
  teamHeading: 'Meet the team',
  teamDescription: 'The people behind the paper',
  testimonialsHeading: 'What our customers say',
  ctaHeading: 'Ready to find something special?',
  ctaButtonLabel: 'Explore the collection',
  ctaButtonHref: '/shop',
};

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/**
 * @param {string} id
 * @returns {CompanyStat|undefined}
 */
export function getStatById(id) {
  return companyStats.find(function(stat) { return stat.id === id; });
}

/**
 * @param {string} id
 * @returns {CompanyValue|undefined}
 */
export function getValueById(id) {
  return companyValues.find(function(value) { return value.id === id; });
}

/**
 * @returns {OfficeLocation|undefined}
 */
export function getHeadquarters() {
  return officeLocations.find(function(location) { return location.headquarters; });
}

/**
 * @param {string} startYear
 * @param {string} endYear
 * @returns {CompanyMilestone[]}
 */
export function getMilestonesByYearRange(startYear, endYear) {
  return companyTimeline.filter(
    function(milestone) { return milestone.year >= startYear && milestone.year <= endYear; },
  );
}

export default {
  companyStats: companyStats,
  companyValues: companyValues,
  companyTimeline: companyTimeline,
  officeLocations: officeLocations,
  companyInfo: companyInfo,
  awards: awards,
  aboutPageContent: aboutPageContent,
  getStatById: getStatById,
  getValueById: getValueById,
  getHeadquarters: getHeadquarters,
  getMilestonesByYearRange: getMilestonesByYearRange,
};