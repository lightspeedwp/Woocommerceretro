/**
 * Hero Data - Centralised hero configurations for all pages
 *
 * Each entry drives the shared RetroHero component.
 * Omit any field to hide that element in the hero.
 *
 * Optimized for Figma Make parser:
 * 1. No optional chaining, nullish coalescing, or spread at module level
 * 2. ASCII characters only
 */

/**
 * @typedef {Object} HeroStat
 * @property {string} value
 * @property {string} label
 */

/**
 * @typedef {Object} HeroButton
 * @property {string} label
 * @property {string} href
 * @property {string} [variant] - 'cta' | 'primary' | 'outline' | 'secondary' | 'ghost'
 */

/**
 * @typedef {Object} HeroBadge
 * @property {string} icon - Phosphor icon name (e.g. 'Sparkle', 'Storefront', 'Envelope')
 * @property {string} text
 */

/**
 * @typedef {Object} HeroConfig
 * @property {string} id
 * @property {string} [backgroundImage]
 * @property {string} [backgroundColor]
 * @property {string} [backgroundGradient]
 * @property {number} [overlayOpacity]
 * @property {HeroBadge} [badge]
 * @property {string} title
 * @property {string} [subtitle]
 * @property {HeroButton} [button1]
 * @property {HeroButton} [button2]
 * @property {HeroStat[]} [stats]
 * @property {boolean} [showScrollArrow]
 * @property {string} [heroGraphic] - 'orbs' | 'mesh' | 'none'
 * @property {string} [pattern] - 'centered' | 'split' | 'minimal' | 'immersive'
 * @property {string} [height] - 'full' | 'large' | 'medium' | 'small'
 * @property {string} [textAlign] - 'center' | 'left'
 * @property {string} [ariaLabel]
 */

/* ========================================
   HOMEPAGE HERO
   ======================================== */

/** @type {HeroConfig} */
export const homepageHero = {
  id: 'homepage',
  backgroundImage: 'https://images.unsplash.com/photo-1518117823675-9a4bb23df61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGF0aW9uZXJ5JTIwZGVzayUyMGFlc3RoZXRpYyUyMGZsYXQlMjBsYXl8ZW58MXx8fHwxNzczMDU5NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(255, 0, 255, 0.25) 0%, rgba(3, 2, 19, 0.78) 50%, rgba(0, 255, 255, 0.15) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Sparkle',
    text: 'New collection'
  },
  title: 'Curated living, delivered to your door',
  subtitle: 'Discover our curated collection of stationery, homewares, and lifestyle essentials - crafted with care, shipped sustainably.',
  button1: {
    label: 'Explore the collection',
    href: '/shop',
    variant: 'cta'
  },
  button2: {
    label: 'New arrivals',
    href: '/new-arrivals',
    variant: 'outline'
  },
  stats: [
    { value: '10K+', label: 'Products' },
    { value: '50K+', label: 'Customers' },
    { value: '4.9', label: 'Rating' },
    { value: '24h', label: 'Dispatch' }
  ],
  showScrollArrow: true,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'full',
  textAlign: 'center',
  ariaLabel: 'Homepage hero'
};

/* ========================================
   SHOP / ARCHIVE PRODUCT HERO
   ======================================== */

/** @type {HeroConfig} */
export const shopHero = {
  id: 'shop',
  backgroundImage: 'https://images.unsplash.com/photo-1755514838747-adfd34197d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGUlMjBwcm9kdWN0cyUyMGN1cmF0ZWQlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MzA1OTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.4) 0%, rgba(3, 2, 19, 0.8) 50%, rgba(0, 255, 255, 0.12) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Storefront',
    text: 'Shop'
  },
  title: 'Browse all products',
  subtitle: 'Thoughtfully curated essentials for your home, desk, and everyday life.',
  button1: {
    label: 'View best sellers',
    href: '/best-sellers',
    variant: 'cta'
  },
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Shop header'
};

/* ========================================
   ABOUT PAGE HERO
   ======================================== */

/** @type {HeroConfig} */
export const aboutHero = {
  id: 'about',
  backgroundImage: 'https://images.unsplash.com/photo-1760611656007-f767a8082758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE3NDg3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#0d1b2a',
  backgroundGradient: 'linear-gradient(135deg, rgba(13, 27, 42, 0.6) 0%, rgba(3, 2, 19, 0.8) 50%, rgba(0, 255, 255, 0.15) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Heart',
    text: 'Our story'
  },
  title: 'About us',
  subtitle: 'We believe in quality products that stand the test of time, crafted with care and delivered with purpose.',
  button1: {
    label: 'Meet the team',
    href: '/team',
    variant: 'cta'
  },
  button2: {
    label: 'Our values',
    href: '/sustainability',
    variant: 'outline'
  },
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'About us hero'
};

/* ========================================
   CONTACT PAGE HERO
   ======================================== */

/** @type {HeroConfig} */
export const contactHero = {
  id: 'contact',
  backgroundImage: 'https://images.unsplash.com/photo-1766066014237-00645c74e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBoZWFkc2V0JTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NzE3NDg3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#2d0059',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.5) 0%, rgba(3, 2, 19, 0.8) 50%, rgba(255, 0, 255, 0.12) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Envelope',
    text: 'Support'
  },
  title: 'Contact us',
  subtitle: 'We would love to hear from you. Send us a message and we will respond as soon as possible.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Contact hero'
};

/* ========================================
   FAQ PAGE HERO
   ======================================== */

/** @type {HeroConfig} */
export const faqHero = {
  id: 'faq',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Question',
    text: 'Help centre'
  },
  title: 'Frequently asked questions',
  subtitle: 'Find answers to common questions about orders, shipping, returns, and more.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'FAQ hero'
};

/* ========================================
   BLOG INDEX HERO
   ======================================== */

/** @type {HeroConfig} */
export const blogHero = {
  id: 'blog',
  backgroundColor: '#0d1b2a',
  backgroundGradient: 'linear-gradient(135deg, rgba(13, 27, 42, 0.7) 0%, rgba(3, 2, 19, 0.85) 50%, rgba(0, 255, 255, 0.1) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'PencilSimple',
    text: 'Journal'
  },
  title: 'The Woo Blog',
  subtitle: 'Stories, guides, and inspiration from the world of curated living.',
  button1: {
    label: 'Latest posts',
    href: '/blog',
    variant: 'cta'
  },
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Blog hero'
};

/* ========================================
   OUR STORY HERO
   ======================================== */

/** @type {HeroConfig} */
export const ourStoryHero = {
  id: 'our-story',
  backgroundImage: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1600&auto=format&fit=crop',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(3, 2, 19, 0.6) 0%, rgba(45, 0, 89, 0.4) 50%, rgba(0, 0, 0, 0.5) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'BookOpen',
    text: 'Our journey'
  },
  title: 'Our story',
  subtitle: 'From a small studio to a global community of design lovers.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Our story hero'
};

/* ========================================
   SUSTAINABILITY HERO
   ======================================== */

/** @type {HeroConfig} */
export const sustainabilityHero = {
  id: 'sustainability',
  backgroundColor: '#0d1b2a',
  backgroundGradient: 'linear-gradient(135deg, rgba(0, 60, 30, 0.4) 0%, rgba(3, 2, 19, 0.85) 50%, rgba(0, 255, 0, 0.08) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Leaf',
    text: 'Planet first'
  },
  title: 'Sustainability',
  subtitle: 'Our commitment to ethical sourcing, sustainable packaging, and carbon-neutral shipping.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Sustainability hero'
};

/* ========================================
   CAREERS HERO
   ======================================== */

/** @type {HeroConfig} */
export const careersHero = {
  id: 'careers',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(255, 0, 255, 0.15) 0%, rgba(3, 2, 19, 0.88) 50%, rgba(0, 255, 255, 0.1) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Briefcase',
    text: 'Join us'
  },
  title: 'Careers',
  subtitle: 'Build the future of commerce with a team that cares about craft.',
  button1: {
    label: 'View open roles',
    href: '/careers#roles',
    variant: 'cta'
  },
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Careers hero'
};

/* ========================================
   TEAM HERO
   ======================================== */

/** @type {HeroConfig} */
export const teamHero = {
  id: 'team',
  backgroundImage: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbSUyMHBvcnRyYWl0JTIwY29ycG9yYXRlfGVufDF8fHx8MTc3MTc0ODc2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.35) 0%, rgba(3, 2, 19, 0.85) 50%, rgba(0, 255, 255, 0.1) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Users',
    text: 'Our People'
  },
  title: 'Meet the team',
  subtitle: 'The people behind the products - passionate, creative, and committed to quality.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Team hero'
};

/* ========================================
   STORES HERO
   ======================================== */

/** @type {HeroConfig} */
export const storesHero = {
  id: 'stores',
  backgroundImage: 'https://images.unsplash.com/photo-1635930376155-4ee50db13cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yJTIwZmxhZ3NoaXB8ZW58MXx8fHwxNzcxNzQ4NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.85) 50%, rgba(0, 200, 200, 0.1) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Storefront',
    text: 'Retail'
  },
  title: 'Our stores',
  subtitle: 'Visit us in person - explore our curated spaces and discover products hands-on.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Stores hero'
};

/* ========================================
   PRESS & MEDIA HERO
   ======================================== */

/** @type {HeroConfig} */
export const pressHero = {
  id: 'press',
  backgroundImage: 'https://images.unsplash.com/photo-1554941829-1a16e65a02b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzcyUyMGNvbmZlcmVuY2UlMjBtZWRpYSUyMGpvdXJuYWxpc20lMjBtaWNyb3Bob25lfGVufDF8fHx8MTc3MTc0ODc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#0d1b2a',
  backgroundGradient: 'linear-gradient(135deg, rgba(13, 27, 42, 0.5) 0%, rgba(3, 2, 19, 0.85) 50%, rgba(255, 0, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Megaphone',
    text: 'Newsroom'
  },
  title: 'Press and media',
  subtitle: 'News, press releases, and media resources from our team.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Press and media hero'
};

/* ========================================
   LEGAL PAGE HEROES (compact, no bg image)
   ======================================== */

/** @type {HeroConfig} */
export const privacyPolicyHero = {
  id: 'privacy-policy',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 255, 255, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'ShieldCheck', text: 'Legal' },
  title: 'Privacy policy',
  subtitle: 'How we collect, use, and protect your personal information.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Privacy policy hero'
};

/** @type {HeroConfig} */
export const termsConditionsHero = {
  id: 'terms-conditions',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 255, 255, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'FileText', text: 'Legal' },
  title: 'Terms and conditions',
  subtitle: 'The terms that govern your use of our services and products.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Terms and conditions hero'
};

/** @type {HeroConfig} */
export const shippingReturnsHero = {
  id: 'shipping-returns',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.25) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 200, 200, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Truck', text: 'Shipping & Returns' },
  title: 'Shipping and returns',
  subtitle: 'Everything you need to know about delivery and our hassle-free return policy.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Shipping and returns hero'
};

/** @type {HeroConfig} */
export const sizeGuideHero = {
  id: 'size-guide',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.25) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 255, 255, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Ruler', text: 'Fit Guide' },
  title: 'Size guide',
  subtitle: 'Find your perfect fit with our comprehensive sizing charts.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Size guide hero'
};

/** @type {HeroConfig} */
export const helpCenterHero = {
  id: 'help-center',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.88) 55%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Lifebuoy', text: 'Help' },
  title: 'Help centre',
  subtitle: 'Browse articles, guides, and resources to get the most from your purchases.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Help centre hero'
};

/** @type {HeroConfig} */
export const returnsPortalHero = {
  id: 'returns-portal',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.25) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 200, 200, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'ArrowCounterClockwise', text: 'Returns' },
  title: 'Returns portal',
  subtitle: 'Start a return, track your refund, and manage exchanges effortlessly.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Returns portal hero'
};

/** @type {HeroConfig} */
export const refundsHero = {
  id: 'refunds',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(0, 180, 0, 0.15) 0%, rgba(3, 2, 19, 0.9) 55%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'CurrencyDollar', text: 'Refunds' },
  title: 'Refunds',
  subtitle: 'Understand our refund process, timelines, eligibility, and how to track your money back.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Refunds page hero'
};

/** @type {HeroConfig} */
export const buyingGuideHero = {
  id: 'buying-guide',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.25) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 255, 255, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Lightbulb', text: 'Guide' },
  title: 'Buying guide',
  subtitle: 'Expert tips and advice to help you choose the right products.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Buying guide hero'
};

/** @type {HeroConfig} */
export const careInstructionsHero = {
  id: 'care-instructions',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.25) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 200, 200, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Sparkle', text: 'Product Care' },
  title: 'Care instructions',
  subtitle: 'Keep your products looking their best with our care and maintenance guides.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Care instructions hero'
};

/** @type {HeroConfig} */
export const accessibilityHero = {
  id: 'accessibility',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 255, 255, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Wheelchair', text: 'Commitment' },
  title: 'Accessibility statement',
  subtitle: 'Our commitment to making our website and products accessible to everyone.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Accessibility statement hero'
};

/** @type {HeroConfig} */
export const warrantyHero = {
  id: 'warranty',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.25) 0%, rgba(3, 2, 19, 0.9) 60%, rgba(0, 200, 200, 0.06) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'ShieldCheck', text: 'Warranty' },
  title: 'Warranty information',
  subtitle: 'Learn about our product warranties and how to make a claim.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Warranty hero'
};

/* ========================================
   COMMERCE PAGE HEROES
   ======================================== */

/** @type {HeroConfig} */
export const dealsHero = {
  id: 'deals',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(255, 0, 255, 0.15) 0%, rgba(3, 2, 19, 0.88) 50%, rgba(204, 255, 0, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Lightning', text: 'Limited-time savings' },
  title: 'Exclusive deals',
  subtitle: 'Shop our best offers and limited-time discounts on premium stationery, homewares, and lifestyle essentials.',
  button1: { label: 'Browse deals', href: '#deals-grid', variant: 'cta' },
  button2: { label: 'Full catalogue', href: '/shop', variant: 'secondary' },
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Deals hero'
};

/** @type {HeroConfig} */
export const rewardProgramHero = {
  id: 'reward-program',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(255, 0, 255, 0.12) 0%, rgba(3, 2, 19, 0.88) 55%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Gift', text: 'Loyalty Rewards' },
  title: 'Rewards program',
  subtitle: 'Earn points with every purchase and redeem them for discounts, exclusive products, and more.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Reward program hero'
};

/** @type {HeroConfig} */
export const giftCardsHero = {
  id: 'gift-cards',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(255, 0, 255, 0.12) 0%, rgba(3, 2, 19, 0.88) 50%, rgba(0, 255, 255, 0.1) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Gift', text: 'The perfect gift' },
  title: 'Gift cards',
  subtitle: 'Give the gift of choice. Our digital gift cards can be sent instantly and redeemed on anything in the store.',
  button1: { label: 'Choose an amount', href: '#gc-builder', variant: 'cta' },
  button2: { label: 'Browse products', href: '/shop', variant: 'secondary' },
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Gift cards hero'
};

/** @type {HeroConfig} */
export const trackOrderHero = {
  id: 'track-order',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.88) 55%, rgba(0, 200, 200, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Truck', text: 'Order tracking' },
  title: 'Track your order',
  subtitle: 'Enter your order number and email address to see real-time shipping updates.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Track order hero'
};

/** @type {HeroConfig} */
export const reviewsHero = {
  id: 'reviews',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1) 0%, rgba(3, 2, 19, 0.88) 55%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Star', text: 'Customer stories' },
  title: 'Reviews & testimonials',
  subtitle: 'Real feedback from real customers. See why thousands of people trust Woo Shop for quality products and exceptional service.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Reviews hero'
};

/** @type {HeroConfig} */
export const affiliateProgramHero = {
  id: 'affiliate-program',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.88) 55%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Handshake', text: 'Partner Program' },
  title: 'Affiliate program',
  subtitle: 'Earn commissions by referring customers to our store. Join our partner network today.',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Affiliate program hero'
};

/** @type {HeroConfig} */
export const membershipHero = {
  id: 'membership',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(255, 0, 255, 0.15) 0%, rgba(3, 2, 19, 0.88) 50%, rgba(0, 255, 255, 0.1) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Crown', text: 'Join 25,000+ exclusive members' },
  title: 'Unlock exclusive perks & savings',
  subtitle: 'Become a member and enjoy up to 30% off every purchase, exclusive products, VIP events, and a community of like-minded shoppers.',
  button1: { label: 'Become a member', href: '#membership-tiers', variant: 'cta' },
  button2: { label: 'See benefits', href: '#benefits', variant: 'secondary' },
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Membership hero'
};

/** @type {HeroConfig} */
export const subscriptionHero = {
  id: 'subscription',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(255, 0, 255, 0.12) 0%, rgba(3, 2, 19, 0.88) 50%, rgba(0, 255, 255, 0.1) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Gift', text: 'Subscribe & save' },
  title: 'Subscription boxes',
  subtitle: 'Curated products delivered to your door every month. Save up to 25% with a subscription.',
  button1: { label: 'Choose your plan', href: '#pricing', variant: 'cta' },
  button2: { label: 'See benefits', href: '#benefits', variant: 'secondary' },
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Subscription hero'
};

/* ========================================
   BLOG ARCHIVE HEROES (base configs for dynamic overrides)
   ======================================== */

/** @type {HeroConfig} */
export const blogCategoryBaseHero = {
  id: 'blog-category',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.88) 55%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'BookOpen', text: 'Category' },
  title: 'Category',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Blog category hero'
};

/** @type {HeroConfig} */
export const blogAuthorBaseHero = {
  id: 'blog-author',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.88) 55%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: { icon: 'Users', text: 'Author Archive' },
  title: 'Author',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center',
  ariaLabel: 'Blog author hero'
};

/* ========================================
   GENERIC / FALLBACK HERO
   ======================================== */

/** @type {HeroConfig} */
export const genericHero = {
  id: 'generic',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.85) 60%, rgba(0, 255, 255, 0.08) 100%)',
  overlayOpacity: 1,
  title: 'Page title',
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'small',
  textAlign: 'center'
};

/* ========================================
   ALL HEROES INDEX
   ======================================== */

export const allHeroes = {
  homepage: homepageHero,
  shop: shopHero,
  about: aboutHero,
  contact: contactHero,
  faq: faqHero,
  blog: blogHero,
  ourStory: ourStoryHero,
  sustainability: sustainabilityHero,
  careers: careersHero,
  team: teamHero,
  stores: storesHero,
  press: pressHero,
  privacyPolicy: privacyPolicyHero,
  termsConditions: termsConditionsHero,
  shippingReturns: shippingReturnsHero,
  sizeGuide: sizeGuideHero,
  helpCenter: helpCenterHero,
  returnsPortal: returnsPortalHero,
  refunds: refundsHero,
  buyingGuide: buyingGuideHero,
  careInstructions: careInstructionsHero,
  accessibility: accessibilityHero,
  warranty: warrantyHero,
  deals: dealsHero,
  rewardProgram: rewardProgramHero,
  giftCards: giftCardsHero,
  trackOrder: trackOrderHero,
  reviews: reviewsHero,
  affiliateProgram: affiliateProgramHero,
  membership: membershipHero,
  subscription: subscriptionHero,
  blogCategory: blogCategoryBaseHero,
  blogAuthor: blogAuthorBaseHero,
  generic: genericHero
};

export default allHeroes;