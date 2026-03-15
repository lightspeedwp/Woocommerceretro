/**
 * retroDemo.ts - Data for Retro Demo Pages
 *
 * Generic content and data structures for showcasing
 * all retro patterns, blocks, and design elements.
 */

// ─── Images ───────────────────────────────────────────────────────────────────

export const DEMO_IMAGES = {
  heroMain: 'https://images.unsplash.com/photo-1696360172919-f7fdaaa78a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFyY2FkZSUyMG5lb24lMjBnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NzM1Njg5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  heroSub1: 'https://images.unsplash.com/photo-1628586165208-0ac525a54757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMHJldHJvJTIwY29udHJvbGxlciUyMGdhbWVwYWR8ZW58MXx8fHwxNzczNTY4OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  heroSub2: 'https://images.unsplash.com/photo-1771875797266-19724b7e4c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzZWFyY2h8MXx8bmVvbiUyMGxpZ2h0cyUyMGRhcmslMjBwdXJwbGUlMjBjeWJlcnB1bmt8ZW58MXx8fHwxNzczNTY4OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  featured: 'https://images.unsplash.com/photo-1768056532956-320ee4b14dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMG1lcmNoYW5kaXNlJTIwYXBwYXJlbHxlbnwxfHx8fDE3NzM1Njg5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  testimonial1: 'https://images.unsplash.com/photo-1758874089961-e52549c294c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGN1c3RvbWVyJTIwaGFwcHklMjB1bmJveGluZyUyMHBhY2thZ2V8ZW58MXx8fHwxNzczNTY4OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  testimonial2: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzQ4Mjk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
} as const;

// ─── Hero Data ────────────────────────────────────────────────────────────────

export const DEMO_HERO = {
  titleLines: ['PRESS START', 'TO EXPLORE!'],
  highlight: 'RETRO DEMO',
  description: 'A showcase of every retro pattern, block, and design element in the PlayPocket design system.',
  images: {
    main: DEMO_IMAGES.heroMain,
    sub1: DEMO_IMAGES.heroSub1,
    sub2: DEMO_IMAGES.heroSub2,
  },
};

// ─── Stats Data ───────────────────────────────────────────────────────────────

export const DEMO_STATS = [
  { id: 'stat-1', value: '176', label: 'Components Audited' },
  { id: 'stat-2', value: '23', label: 'Retro Templates' },
  { id: 'stat-3', value: '280', label: 'CSS Imports Active' },
  { id: 'stat-4', value: '100', suffix: '+', value2: '100+', label: 'Products Cataloged' },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const DEMO_TESTIMONIALS = [
  {
    id: 'test-1',
    quote: 'The retro design system is incredibly well-organized. Every component has been thoughtfully crafted with neon glows, glass panels, and pixel-perfect attention to detail.',
    author: 'Alex Rivera',
    role: 'Lead Designer',
    company: 'PixelForge Studio',
    image: DEMO_IMAGES.testimonial2,
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'I love how every single component supports dark mode out of the box. The retro handheld gaming aesthetic is unique and the accessibility compliance is impressive.',
    author: 'Sarah Chen',
    role: 'Frontend Engineer',
    company: 'ArcadeWorks',
    image: DEMO_IMAGES.testimonial1,
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'PlayPocket proves you can have a retro aesthetic AND be WCAG AA 2.2 compliant. The CRT scanline effects, neon typography, and glass panels are chef\'s kiss.',
    author: 'Marcus Thompson',
    role: 'Accessibility Lead',
    company: 'GameGrid Inc.',
    rating: 4,
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

export const DEMO_FAQ = [
  {
    question: 'What is the PlayPocket Retro Design System?',
    answer: 'PlayPocket is a comprehensive WooCommerce prototype built with a retro handheld gaming aesthetic. It features 176+ audited components, full dark mode support, WCAG AA 2.2 compliance, and WordPress FSE architecture parity.',
  },
  {
    question: 'How many retro patterns are available?',
    answer: 'The system includes 48+ patterns covering e-commerce (ProductGrid, FlashSale, PricingTable), content (Hero, PostGrid, FAQ), marketing (Newsletter, Testimonials, Stats), and global parts (Header, Footer, MiniCart, MobileMenu).',
  },
  {
    question: 'Is the design system accessible?',
    answer: 'Yes! Every component is built to WCAG 2.1 AA standards minimum. We support keyboard navigation, screen readers, high contrast modes, and prefers-reduced-motion. Color contrast ratios exceed 4.5:1 for all text.',
  },
  {
    question: 'Does it support dark mode?',
    answer: 'Absolutely. Dark mode is handled through CSS custom properties - all 70+ design tokens automatically adapt. Components use semantic color tokens like --color-surface and --color-text-primary that swap values when .dark class is applied.',
  },
  {
    question: 'What retro effects are available?',
    answer: 'The design system includes CRT scanline overlays, neon glow effects (cyan, magenta, amber, lime), glass/glassmorphism panels, pixelated borders, LED-style indicators, arcade button styling, and CSS 3D transforms for the subscription box experience.',
  },
  {
    question: 'Can I use WebGL graphics?',
    answer: 'Yes! We include a WebGL utilities module with device capability detection, performance monitoring, and easing functions. The SpinningCoin3D and SubscriptionBox3D components demonstrate CSS 3D transforms with Canvas API particle effects.',
  },
];

// ─── Pricing Plans ────────────────────────────────────────────────────────────

export const DEMO_PRICING_PLANS = [
  {
    id: 'plan-starter',
    name: 'STARTER',
    description: 'Perfect for indie devs getting started with retro design.',
    priceMonthly: 9,
    priceYearly: 7,
    popular: false,
    features: [
      { name: '10 Retro Components', included: true },
      { name: 'Dark Mode Support', included: true },
      { name: 'Basic CRT Effects', included: true },
      { name: 'Community Support', included: true },
      { name: 'WebGL Graphics', included: false },
      { name: 'Custom Neon Palettes', included: false },
    ],
    cta: { label: 'START FREE TRIAL' },
  },
  {
    id: 'plan-pro',
    name: 'PRO GAMER',
    description: 'The complete retro toolkit for serious projects.',
    priceMonthly: 29,
    priceYearly: 24,
    popular: true,
    features: [
      { name: 'All 176+ Components', included: true },
      { name: 'Dark Mode Support', included: true },
      { name: 'Full CRT & Neon Effects', included: true },
      { name: 'Priority Support', included: true },
      { name: 'WebGL Graphics', included: true },
      { name: 'Custom Neon Palettes', included: false },
    ],
    cta: { label: 'LEVEL UP NOW' },
  },
  {
    id: 'plan-enterprise',
    name: 'BOSS MODE',
    description: 'Enterprise-grade retro for large-scale deployments.',
    priceMonthly: 79,
    priceYearly: 66,
    popular: false,
    features: [
      { name: 'All 176+ Components', included: true },
      { name: 'Dark Mode Support', included: true },
      { name: 'Full CRT & Neon Effects', included: true },
      { name: 'Dedicated Support', included: true },
      { name: 'WebGL Graphics', included: true },
      { name: 'Custom Neon Palettes', included: true },
    ],
    cta: { label: 'CONTACT SALES' },
  },
];

// ─── How It Works Steps ───────────────────────────────────────────────────────

export const DEMO_HOW_IT_WORKS = [
  {
    step: 1,
    title: 'CHOOSE YOUR THEME',
    description: 'Pick from retro, neon, arcade, or pixel art themes. Each comes with 70+ CSS custom properties.',
  },
  {
    step: 2,
    title: 'DROP IN PATTERNS',
    description: 'Compose pages from 48+ reusable patterns: Hero, ProductGrid, PricingTable, FAQ, and more.',
  },
  {
    step: 3,
    title: 'CUSTOMIZE & SHIP',
    description: 'Tweak design tokens, add your brand, and deploy. Full WordPress FSE compatibility built in.',
  },
];

// ─── Flash Sale Data ──────────────────────────────────────────────────────────

export const DEMO_FLASH_SALE = {
  title: 'MEGA PIXEL SALE!',
  discount: '40% OFF',
  description: 'Limited time only! Score epic retro gear before the timer runs out.',
  ctaText: 'GRAB THE DEAL',
  ctaLink: '/shop',
  endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  variant: 'gradient' as const,
};

// ─── Value Propositions ───────────────────────────────────────────────────────

export const DEMO_VALUE_PROPS = [
  {
    title: 'PIXEL PERFECT',
    description: 'Every component is crafted with retro precision. Neon glows, glass panels, and CRT effects.',
    iconName: 'PixelatedStar',
  },
  {
    title: 'DARK MODE FIRST',
    description: 'Built from day one with 70+ CSS tokens that automatically adapt to light and dark themes.',
    iconName: 'Moon',
  },
  {
    title: 'ACCESSIBLE',
    description: 'WCAG AA 2.2 compliant. Keyboard navigation, screen readers, reduced motion support.',
    iconName: 'Eye',
  },
  {
    title: 'LIGHTNING FAST',
    description: 'Lazy-loaded routes, memoized contexts, optimized CSS. Initial bundle under 70KB.',
    iconName: 'Lightning',
  },
];

// ─── Featured Demo Products ───────────────────────────────────────────────────

export const DEMO_PRODUCTS = [
  {
    id: 'demo-1',
    name: 'Neon Controller Tee',
    price: 29.99,
    image: DEMO_IMAGES.featured,
    badges: ['NEW'],
  },
  {
    id: 'demo-2',
    name: 'Pixel Art Hoodie',
    price: 59.99,
    image: DEMO_IMAGES.heroSub1,
    badges: ['HOT'],
  },
  {
    id: 'demo-3',
    name: 'Arcade Glow Cap',
    price: 24.99,
    image: DEMO_IMAGES.heroSub2,
    badges: [],
  },
  {
    id: 'demo-4',
    name: 'CRT Monitor Poster',
    price: 19.99,
    image: DEMO_IMAGES.heroMain,
    badges: ['SALE'],
  },
];

// ─── Landing Page Sections Config ─────────────────────────────────────────────

export const LANDING_PAGE_SECTIONS = [
  'hero',
  'stats',
  'categories',
  'featured-products',
  'flash-sale',
  'how-it-works',
  'value-props',
  'pricing',
  'testimonials',
  'faq',
  '3d-showcase',
  'newsletter',
  'bottom-grid',
] as const;

export type LandingPageSection = typeof LANDING_PAGE_SECTIONS[number];
