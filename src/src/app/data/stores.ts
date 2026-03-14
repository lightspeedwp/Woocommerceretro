/**
 * Store Locations
 */
const storeLocations = [
  {
    id: 'soho',
    name: 'SoHo Flagship',
    address: '123 Broadway, New York, NY 10012',
    phone: '(212) 555-0100',
    hours: 'Mon-Sat 10am-8pm, Sun 11am-6pm',
    features: ['Personal Shopping', 'Alterations', 'Gift Wrapping'],
  },
  {
    id: 'dtla',
    name: 'Downtown LA',
    address: '456 S Spring St, Los Angeles, CA 90013',
    phone: '(213) 555-0200',
    hours: 'Mon-Sat 10am-9pm, Sun 11am-7pm',
    features: ['Personal Shopping', 'Click & Collect'],
  },
  {
    id: 'lincoln-park',
    name: 'Lincoln Park',
    address: '789 N Halsted St, Chicago, IL 60614',
    phone: '(312) 555-0300',
    hours: 'Mon-Sat 10am-8pm, Sun 12pm-6pm',
    features: ['Click & Collect', 'Gift Wrapping'],
  },
  {
    id: 'georgetown',
    name: 'Georgetown',
    address: '321 M St NW, Washington, DC 20007',
    phone: '(202) 555-0400',
    hours: 'Mon-Sat 10am-8pm, Sun 12pm-5pm',
    features: ['Personal Shopping', 'Alterations'],
  },
  {
    id: 'buckhead',
    name: 'Buckhead',
    address: '654 Peachtree Rd NE, Atlanta, GA 30305',
    phone: '(404) 555-0500',
    hours: 'Mon-Sat 10am-9pm, Sun 12pm-6pm',
    features: ['Click & Collect'],
  },
  {
    id: 'union-square',
    name: 'Union Square',
    address: '987 Post St, San Francisco, CA 94109',
    phone: '(415) 555-0600',
    hours: 'Mon-Sat 10am-8pm, Sun 11am-6pm',
    features: ['Personal Shopping', 'Click & Collect', 'Gift Wrapping'],
  },
];

/**
 * Page-level content strings
 */
const storesPageContent = {
  title: 'Our stores',
  description:
    'Visit us in person. Experience our products, get personalized recommendations, and enjoy in-store services.',
  ctaHeading: 'Prefer to shop online?',
  ctaText:
    'Browse our full collection online with free shipping on orders over $50.',
};

/**
 * Helper function to get store by ID
 */
const getStoreById = (id) => {
  return storeLocations.find((store) => store.id === id);
}

/**
 * Helper function to get stores with a specific feature
 */
const getStoresByFeature = (feature) => {
  return storeLocations.filter((store) => store.features.includes(feature));
}

export { storeLocations, storesPageContent, getStoreById, getStoresByFeature };

export default {
}