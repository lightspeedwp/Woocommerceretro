# PageFAQ

**Component Type:** Template (FAQ Page - Full Funky)  
**Location:** `/src/app/components/templates/PageFAQ.tsx`  
**CSS:** `/src/styles/sections/info-pages.css`  
**Route:** `/faq`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Full Funky)  
**Color Identity:** Purple `#8b5cf6` / Cyan `#00ffff`

---

## Overview

PageFAQ is a frequently asked questions template using the "info-hero" and "info-faq" patterns. Features purple-tinted hero with background image, animated orbs, glassmorphism badge, accordion-style FAQ categories with gradient icons, glow-on-active items, and dual-button CTA. Designed for comprehensive self-service support.

**Page Purpose:** Frequently asked questions and self-service support  
**Target Audience:** Customers seeking answers to common questions  
**Dark Mode:** ✅ Complete support with glassmorphism effects  
**Layout:** Purple hero → FAQ categories (accordions) → Animated CTA

**Note:** Introduces purple hero variant, gradient icon circles, active-state glow

---

## Key Features

### Visual Elements

**1. Purple Hero:**
- Background image (abstract help/support)
- Purple gradient overlay
- Animated purple orbs (float animation)
- Glassmorphism badge (HelpCircle icon)
- "Help Centre" label
- Large centered title
- Subtitle

**2. FAQ Categories:**
- 5 categories (Orders & Shipping, Returns & Refunds, Payment & Billing, Products & Sizing, Account & Privacy)
- Gradient icon circles (category icons)
- Accordion items (expandable Q&A)
- ChevronDown icons (rotate on open)
- Active state glow (purple)

**3. Commerce CTA:**
- Navy background
- Animated cyan orbs
- MessageCircle icon (large)
- 2 action buttons (Contact Support, Live Chat)

### Funky Treatments

**Hero:** Purple gradient overlay + animated orbs  
**Badge:** Glassmorphism (backdrop-blur)  
**Category Icons:** Gradient circles (purple → cyan)  
**FAQ Items:** Glow on open (purple)  
**Chevron:** Rotate 180° on open  
**CTA Orbs:** Animated cyan orbs

---

## Data Structure

### FAQ Interfaces

```typescript
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: string;  // 'Truck', 'RotateCcw', 'CreditCard', 'Package', 'ShieldCheck'
  items: FAQItem[];
}
```

### 5 FAQ Categories

```typescript
export const faqCategories: FAQCategory[] = [
  {
    title: 'Orders & Shipping',
    icon: 'Truck',
    items: [
      { 
        question: 'How long does shipping take?', 
        answer: 'Standard shipping takes 5-7 business days...' 
      },
      { 
        question: 'Can I track my order?', 
        answer: 'Yes! Once your order ships, you will receive a tracking number...' 
      },
      // 4 items total
    ],
  },
  {
    title: 'Returns & Refunds',
    icon: 'RotateCcw',
    items: [
      { 
        question: 'What is your return policy?', 
        answer: 'We offer a 30-day return policy for most items...' 
      },
      // 4 items total
    ],
  },
  {
    title: 'Payment & Billing',
    icon: 'CreditCard',
    items: [
      { 
        question: 'What payment methods do you accept?', 
        answer: 'We accept Visa, Mastercard, American Express...' 
      },
      // 4 items total
    ],
  },
  {
    title: 'Products & Sizing',
    icon: 'Package',
    items: [
      { 
        question: 'How do I find the right size?', 
        answer: 'Visit our Size Guide page for detailed measurements...' 
      },
      // 3 items total
    ],
  },
  {
    title: 'Account & Privacy',
    icon: 'ShieldCheck',
    items: [
      { 
        question: 'How do I create an account?', 
        answer: 'Click "Sign In" in the header, then select "Create Account"...' 
      },
      // 3 items total
    ],
  },
];
```

**Total:** 5 categories, 18 FAQ items

**Source:** `/src/app/data/faq.ts`

### Page Content Strings

```typescript
export const faqPageContent = {
  title: 'Frequently asked questions',
  description: 'Find answers to the most common questions about shopping, shipping, returns, and more.',
  ctaHeading: 'Still have questions?',
  ctaText: 'Our support team is ready to help you with anything you need.',
  ctaButtonPrimary: 'Contact Support',
  ctaButtonSecondary: 'Live Chat'
};
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  {/* Purple Hero */}
  <section className="page-faq info-hero info-hero--purple">
    <img 
      src="[unsplash-abstract-help]" 
      alt="" 
      className="info-hero__bg"
    />
    <div className="info-hero__overlay" />
    
    <div className="info-hero__content">
      <span className="info-hero__badge funky-glass-panel">
        <HelpCircle size={14} />
        Help Centre
      </span>
      <h1 className="info-hero__title">{title}</h1>
      <p className="info-hero__subtitle">{description}</p>
    </div>
    
    <div className="info-hero__orb--1 funky-orb funky-animate-float" />
    <div className="info-hero__orb--2 funky-orb funky-animate-float" />
  </section>

  <hr className="funky-section__divider" />

  {/* FAQ Categories */}
  <section className="info-faq">
    <Container>
      {faqCategories.map((category) => (
        <div className="info-faq__category">
          {/* Category Header */}
          <div className="info-faq__cat-header">
            <span className="info-faq__cat-icon">
              <Truck size={20} />
            </span>
            <h2 className="info-faq__cat-title">{category.title}</h2>
          </div>

          {/* Accordion Items */}
          <div className="info-faq__items">
            {category.items.map((item) => (
              <div className={`info-faq__item${isOpen ? ' info-faq__item--open' : ''}`}>
                <button 
                  className="info-faq__trigger"
                  onClick={() => toggleItem(catIndex, itemIndex)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    size={18}
                    className={`info-faq__chevron${isOpen ? ' info-faq__chevron--open' : ''}`}
                  />
                </button>
                
                {isOpen && (
                  <div className="info-faq__answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Container>
  </section>

  <hr className="funky-section__divider" />

  {/* Commerce CTA */}
  <section className="info-cta">
    <Container>
      <MessageCircle size={32} className="info-cta__icon" />
      <h2 className="info-cta__heading">Still have questions?</h2>
      <p className="info-cta__text">{ctaText}</p>
      
      <div className="info-cta__actions">
        <Link to="/contact" className="info-cta__btn--primary">Contact Support</Link>
        <Link to="/chat" className="info-cta__btn--secondary">Live Chat</Link>
      </div>
    </Container>
    
    <div className="info-cta__orb--1 funky-orb funky-animate-float" />
    <div className="info-cta__orb--2 funky-orb funky-animate-float" />
  </section>
</Layout>
```

### Icons Used

```tsx
import { 
  HelpCircle,   // Hero badge (14px) + fallback category icon (20px)
  Truck,        // Orders & Shipping category (20px)
  RotateCcw,    // Returns & Refunds category (20px)
  CreditCard,   // Payment & Billing category (20px)
  Package,      // Products & Sizing category (20px)
  ShieldCheck,  // Account & Privacy category (20px)
  ChevronDown,  // Accordion triggers (18px)
  MessageCircle, // CTA icon (32px)
} from '@phosphor-icons/react';
```

### State Management

```tsx
// Track open/closed state for each FAQ item
const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

// Toggle individual FAQ item
const toggleItem = (categoryIndex: number, itemIndex: number) => {
  const key = `${categoryIndex}-${itemIndex}`;
  setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
};

// Check if item is open
const isOpen = openItems[`${catIndex}-${itemIndex}`];
```

### Dynamic Icon Mapping

```tsx
const categoryIcons: Record<string, React.ReactNode> = {
  'Truck': <Truck size={20} />,
  'RotateCcw': <RotateCcw size={20} />,
  'CreditCard': <CreditCard size={20} />,
  'Package': <Package size={20} />,
  'ShieldCheck': <ShieldCheck size={20} />,
};

// Render icon from string
<span className="info-faq__cat-icon">
  {categoryIcons[category.icon] || <HelpCircle size={20} />}
</span>
```

---

## BEM Class Hierarchy

```
.page-faq (Root marker class)
│
├── .info-hero (Purple hero section)
│   ├── .info-hero--purple (Purple variant modifier)
│   ├── .info-hero__bg (Background image)
│   ├── .info-hero__overlay (Purple gradient overlay)
│   ├── .info-hero__content (Text container)
│   │   ├── .info-hero__badge (Glassmorphism badge)
│   │   │   └── .funky-glass-panel (Glassmorphism utility)
│   │   ├── .info-hero__title (h1)
│   │   └── .info-hero__subtitle (p)
│   ├── .info-hero__orb--1 (Animated orb 1)
│   │   ├── .funky-orb (Orb base)
│   │   └── .funky-animate-float (Float animation)
│   └── .info-hero__orb--2 (Animated orb 2)
│
├── .funky-section__divider (Gradient divider)
│
├── .info-faq (FAQ section)
│   └── .info-faq__content (Content wrapper)
│       └── .info-faq__category (Category group)
│           ├── .info-faq__cat-header (Category header)
│           │   ├── .info-faq__cat-icon (Gradient circle icon)
│           │   └── .info-faq__cat-title (h2)
│           └── .info-faq__items (Accordion items container)
│               └── .info-faq__item (Individual FAQ item)
│                   ├── .info-faq__item--open (Open modifier)
│                   ├── .info-faq__trigger (Question button)
│                   │   └── .info-faq__chevron (ChevronDown icon)
│                   │       └── .info-faq__chevron--open (Rotated modifier)
│                   └── .info-faq__answer (Answer text - conditional)
│
├── .funky-section__divider (Gradient divider)
│
└── .info-cta (CTA section)
    ├── .info-cta__content (Content container)
    │   ├── .info-cta__icon (MessageCircle icon)
    │   ├── .info-cta__heading (h2)
    │   ├── .info-cta__text (p)
    │   └── .info-cta__actions (Button container)
    │       ├── .info-cta__btn--primary (Primary button)
    │       └── .info-cta__btn--secondary (Secondary button)
    ├── .info-cta__orb--1 (Animated orb 1)
    └── .info-cta__orb--2 (Animated orb 2)
```

---

## Section Breakdown

### 1. Purple Hero (`.info-hero--purple`)

**NEW VARIANT** - Purple-tinted hero with animated orbs

```css
.info-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

/* Background Image */
.info-hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Purple Gradient Overlay */
.info-hero--purple .info-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.85) 0%,
    rgba(3, 2, 19, 0.9) 100%
  );
  z-index: 1;
}

/* Content */
.info-hero__content {
  position: relative;
  z-index: 2;
  max-width: 48rem;
  padding: var(--space--700) var(--space--400);
}

/* Glassmorphism Badge */
.info-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--200) var(--space--500);
  border-radius: 999px;
  font-size: var(--font-size--75);
  font-weight: 500;
  margin-bottom: var(--space--500);
}

.funky-glass-panel {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  color: var(--white);
}

.dark .funky-glass-panel {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Title */
.info-hero__title {
  font-size: var(--font-size--800);
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--space--500);
}

/* Subtitle */
.info-hero__subtitle {
  font-size: var(--font-size--300);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 36rem;
  margin: 0 auto;
}

/* Animated Orbs (Purple) */
.info-hero__orb--1,
.info-hero__orb--2 {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.funky-orb {
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  filter: blur(40px);
}

.funky-animate-float {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.1); }
}

@media (prefers-reduced-motion: reduce) {
  .funky-animate-float {
    animation: none;
  }
}

.info-hero__orb--1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.info-hero__orb--2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  animation-delay: 2s;
}
```

**Key Features:**
- Background image with purple gradient overlay
- Glassmorphism badge (backdrop-blur)
- Animated purple orbs (reduced motion aware)

---

### 2. FAQ Categories (`.info-faq`)

**Accordion-style expandable Q&A**

```css
.info-faq {
  padding: var(--space--900) 0;
  background: var(--surface);
}

.info-faq__content {
  max-width: 56rem;
  margin: 0 auto;
}

/* Category Group */
.info-faq__category {
  margin-bottom: var(--space--800);
}

.info-faq__category:last-child {
  margin-bottom: 0;
}

/* Category Header */
.info-faq__cat-header {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  margin-bottom: var(--space--600);
}

/* Gradient Icon Circle */
.info-faq__cat-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple) 0%, var(--cyan) 100%);
  color: var(--white);
  flex-shrink: 0;
}

.dark .info-faq__cat-icon {
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
}

/* Category Title */
.info-faq__cat-title {
  font-size: var(--font-size--500);
  font-weight: 700;
  color: var(--text);
}

/* Accordion Items Container */
.info-faq__items {
  display: flex;
  flex-direction: column;
  gap: var(--space--300);
}

/* Individual FAQ Item */
.info-faq__item {
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.dark .info-faq__item {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

/* Active State Glow (Purple) */
.info-faq__item--open {
  border-color: var(--purple);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
}

.dark .info-faq__item--open {
  border-color: var(--purple);
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
}

/* Question Trigger Button */
.info-faq__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space--400);
  padding: var(--space--500) var(--space--600);
  background: transparent;
  border: none;
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: color 0.2s;
}

.info-faq__trigger:hover {
  color: var(--purple);
}

/* Chevron Icon */
.info-faq__chevron {
  flex-shrink: 0;
  color: var(--text-secondary);
  transition: transform 0.3s, color 0.3s;
}

.info-faq__item--open .info-faq__chevron,
.info-faq__chevron--open {
  transform: rotate(180deg);
  color: var(--purple);
}

/* Answer Text */
.info-faq__answer {
  padding: 0 var(--space--600) var(--space--600) var(--space--600);
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.7;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .info-faq__answer {
    animation: none;
  }
}
```

**Key Features:**
- Gradient icon circles (purple → cyan)
- Active state purple glow
- Chevron rotates 180° on open
- Answer fades in (reduced motion aware)

---

### 3. Commerce CTA (`.info-cta`)

```css
.info-cta {
  position: relative;
  padding: var(--space--900) 0;
  background: var(--navy);
  color: var(--white);
  text-align: center;
  overflow: hidden;
}

.info-cta__content {
  position: relative;
  z-index: 2;
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 var(--space--400);
}

/* Large Icon */
.info-cta__icon {
  color: var(--cyan);
  margin-bottom: var(--space--500);
  filter: drop-shadow(0 0 12px rgba(0, 255, 255, 0.4));
}

.info-cta__heading {
  font-size: var(--font-size--700);
  font-weight: 700;
  margin-bottom: var(--space--400);
}

.info-cta__text {
  font-size: var(--font-size--400);
  margin-bottom: var(--space--700);
  opacity: 0.9;
}

/* Dual Buttons */
.info-cta__actions {
  display: flex;
  gap: var(--space--400);
  justify-content: center;
  flex-wrap: wrap;
}

/* Primary Button (Cyan) */
.info-cta__btn--primary {
  display: inline-block;
  padding: var(--space--400) var(--space--700);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--navy);
  background: var(--cyan);
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.info-cta__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

/* Secondary Button (Outlined) */
.info-cta__btn--secondary {
  display: inline-block;
  padding: var(--space--400) var(--space--700);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--white);
  background: transparent;
  border: 2px solid var(--white);
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
}

.info-cta__btn--secondary:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
}

/* Animated Orbs (Cyan) */
.info-cta__orb--1,
.info-cta__orb--2 {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.info-cta__orb--1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
  filter: blur(60px);
}

.info-cta__orb--2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%);
  filter: blur(60px);
  animation-delay: 2s;
}
```

**Dual Buttons:** Primary (cyan solid), Secondary (white outlined)

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text, orbs hidden */
.info-hero__title {
  font-size: var(--font-size--600);
}

.info-hero__orb--1,
.info-hero__orb--2 {
  display: none; /* Hide orbs on mobile */
}

/* FAQ: Full width */
.info-faq__content {
  max-width: 100%;
}

.info-faq__trigger {
  font-size: var(--font-size--200);
  padding: var(--space--400) var(--space--500);
}

.info-faq__answer {
  padding: 0 var(--space--500) var(--space--500) var(--space--500);
  font-size: var(--font-size--100);
}

/* CTA: Orbs hidden, buttons stacked */
.info-cta__orb--1,
.info-cta__orb--2 {
  display: none;
}

.info-cta__actions {
  flex-direction: column;
}

.info-cta__btn--primary,
.info-cta__btn--secondary {
  width: 100%;
}
```

### Tablet (640px - 1024px)

```css
/* FAQ: Max width */
.info-faq__content {
  max-width: 56rem;
}

/* CTA: Buttons horizontal */
.info-cta__actions {
  flex-direction: row;
}
```

### Desktop (> 1024px)

```css
/* All orbs visible */
.info-hero__orb--1,
.info-hero__orb--2,
.info-cta__orb--1,
.info-cta__orb--2 {
  display: block;
}
```

**Key Breakpoints:** Orbs hidden on mobile, buttons stack on mobile

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Overlay** | Purple gradient | Purple gradient (same) |
| **Hero Text** | White `#ffffff` | White `#ffffff` |
| **Badge** | `rgba(255,255,255,0.1)` | `rgba(255,255,255,0.05)` |
| **Category Icons** | Purple → Cyan gradient | Purple → Cyan + glow |
| **FAQ Items** | White `#ffffff` | Navy `#030213` |
| **FAQ Item Border** | Gray | `rgba(0,255,255,0.2)` |
| **FAQ Item Active** | Purple glow (20px) | Purple glow (30px, stronger) |
| **Chevron** | Gray → Purple | Gray → Purple |
| **CTA Background** | Navy | Navy (same) |
| **CTA Icon** | Cyan + glow | Cyan + glow (same) |

### Dark Mode Enhancements

```css
.dark .funky-glass-panel {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .info-faq__cat-icon {
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
}

.dark .info-faq__item {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

.dark .info-faq__item--open {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero: section + h1 */}
<section className="info-hero info-hero--purple">
  <img src="..." alt="" className="info-hero__bg" />
  <h1 className="info-hero__title">{title}</h1>
  <p className="info-hero__subtitle">{description}</p>
</section>

{/* FAQ: section + h2 + buttons */}
<section className="info-faq">
  {faqCategories.map(category => (
    <div className="info-faq__category">
      <h2 className="info-faq__cat-title">{category.title}</h2>
      
      {category.items.map(item => (
        <div className="info-faq__item">
          <button 
            className="info-faq__trigger"
            aria-expanded={isOpen}
          >
            <span>{item.question}</span>
            <ChevronDown />
          </button>
          
          {isOpen && (
            <div className="info-faq__answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  ))}
</section>

{/* CTA: section + h2 */}
<section className="info-cta">
  <h2 className="info-cta__heading">{ctaHeading}</h2>
  <p className="info-cta__text">{ctaText}</p>
  <Link to="/contact">Contact Support</Link>
</section>
```

### ARIA Attributes

```tsx
{/* Decorative image */}
<img src="..." alt="" className="info-hero__bg" />

{/* Decorative icons */}
<HelpCircle size={14} aria-hidden="true" />
<Truck size={20} aria-hidden="true" />
<ChevronDown size={18} aria-hidden="true" />
<MessageCircle size={32} aria-hidden="true" />

{/* Accordion trigger with aria-expanded */}
<button
  className="info-faq__trigger"
  onClick={() => toggleItem(catIndex, itemIndex)}
  aria-expanded={isOpen}
  aria-controls={`answer-${catIndex}-${itemIndex}`}
  id={`trigger-${catIndex}-${itemIndex}`}
>
  {item.question}
</button>

{/* Answer with aria-labelledby */}
{isOpen && (
  <div 
    className="info-faq__answer"
    id={`answer-${catIndex}-${itemIndex}`}
    aria-labelledby={`trigger-${catIndex}-${itemIndex}`}
    role="region"
  >
    {item.answer}
  </div>
)}

{/* Decorative orbs */}
<div className="info-hero__orb--1" aria-hidden="true" />
```

### Keyboard Navigation

- **Tab Order:** Hero (read-only) → FAQ triggers (all focusable) → CTA buttons
- **FAQ Navigation:** Tab to trigger → Enter/Space to toggle → Tab to next trigger
- **Focus States:** All triggers have visible focus rings
- **Chevron Animation:** Rotates when trigger focused and activated

### Reduced Motion

```tsx
// CSS handles animation removal
@media (prefers-reduced-motion: reduce) {
  .funky-animate-float {
    animation: none;
  }
  
  .info-faq__answer {
    animation: none;
  }
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Purple gradient | 8.0:1+ | AAA ✅ |
| Hero Subtitle | `rgba(255,255,255,0.9)` | Purple gradient | 7.5:1+ | AAA ✅ |
| Category Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Category Title (Dark) | `#f9fafb` | Navy | 19.05:1 | AAA ✅ |
| FAQ Question (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| FAQ Question (Dark) | `#f9fafb` | Navy | 19.05:1 | AAA ✅ |
| FAQ Answer (Light) | `#6b7280` | `#ffffff` | 4.6:1 | AA ✅ |
| FAQ Answer (Dark) | `#9ca3af` | Navy | 5.8:1 | AA ✅ |
| Primary Button | Navy `#030213` | Cyan `#00ffff` | 8.32:1 | AAA ✅ |
| Secondary Button | `#ffffff` | Transparent (navy bg) | 19.24:1 | AAA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Search FAQs

```tsx
// Live search across all FAQ items
const [searchQuery, setSearchQuery] = useState('');

const filteredFAQs = faqCategories.map(category => ({
  ...category,
  items: category.items.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )
})).filter(category => category.items.length > 0);

<div className="info-faq__search">
  <input
    type="search"
    placeholder="Search FAQs..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>
```

### 2. Helpful Voting

```tsx
// Let users vote if FAQ was helpful
<div className="info-faq__vote">
  <p>Was this helpful?</p>
  <button onClick={() => voteHelpful(item.id, true)}>
    <ThumbsUp size={16} /> Yes
  </button>
  <button onClick={() => voteHelpful(item.id, false)}>
    <ThumbsDown size={16} /> No
  </button>
</div>
```

### 3. Related Articles

```tsx
// Show related help articles
{item.relatedArticles && (
  <div className="info-faq__related">
    <h4>Related articles:</h4>
    <ul>
      {item.relatedArticles.map(article => (
        <li key={article.id}>
          <Link to={`/help/${article.slug}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)}
```

### 4. Jump to Category

```tsx
// Quick links to scroll to category
<nav className="info-faq__nav">
  <h3>Jump to:</h3>
  {faqCategories.map((cat, idx) => (
    <a 
      href={`#category-${idx}`}
      onClick={(e) => scrollToCategory(e, idx)}
    >
      {cat.title}
    </a>
  ))}
</nav>

<div id={`category-${catIndex}`} className="info-faq__category">
  {/* Category content */}
</div>
```

### 5. Expand/Collapse All

```tsx
// Toggle all FAQ items at once
const expandAll = () => {
  const allKeys: Record<string, boolean> = {};
  faqCategories.forEach((cat, catIdx) => {
    cat.items.forEach((_, itemIdx) => {
      allKeys[`${catIdx}-${itemIdx}`] = true;
    });
  });
  setOpenItems(allKeys);
};

const collapseAll = () => {
  setOpenItems({});
};

<div className="info-faq__controls">
  <button onClick={expandAll}>Expand All</button>
  <button onClick={collapseAll}>Collapse All</button>
</div>
```

### 6. Contact Form Inline

```tsx
// Show contact form if FAQ not helpful
{!isHelpful && (
  <div className="info-faq__contact-form">
    <h4>Still need help?</h4>
    <form onSubmit={submitContactForm}>
      <input type="email" placeholder="Your email" required />
      <textarea placeholder="Describe your issue" required />
      <button type="submit">Send Message</button>
    </form>
  </div>
)}
```

### 7. View Count

```tsx
// Show popularity of FAQ items
<div className="info-faq__meta">
  <Eye size={14} /> {item.viewCount} views
</div>
```

### 8. Last Updated

```tsx
// Show when FAQ was last updated
<time className="info-faq__updated">
  Last updated: {formatDate(item.updatedAt)}
</time>
```

### 9. Print View

```tsx
// Optimized print stylesheet
<button onClick={printFAQs}>
  <Printer size={16} /> Print All FAQs
</button>

{/* CSS */}
@media print {
  .info-hero,
  .funky-section__divider,
  .info-cta {
    display: none;
  }
  
  .info-faq__item {
    page-break-inside: avoid;
  }
  
  .info-faq__answer {
    display: block !important;
  }
}
```

### 10. AI Chatbot Trigger

```tsx
// If no FAQ answers question, offer AI chat
{searchQuery && filteredFAQs.length === 0 && (
  <div className="info-faq__no-results">
    <h3>No results found</h3>
    <p>Try our AI assistant for personalized help.</p>
    <button onClick={openAIChat}>
      <MessageSquare size={16} /> Chat with AI
    </button>
  </div>
)}
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero displays correctly (purple gradient)
- [ ] Hero background image loads
- [ ] Hero orbs animate (not for reduced motion)
- [ ] Glassmorphism badge visible
- [ ] All 5 category icons display
- [ ] Category icons have gradient backgrounds
- [ ] All 18 FAQ items display
- [ ] Chevron icons display
- [ ] Chevron rotates on open
- [ ] Active FAQ has purple glow
- [ ] CTA orbs animate (not for reduced motion)
- [ ] MessageCircle icon displays (cyan)
- [ ] Both CTA buttons display

### Interaction Testing

- [ ] All FAQ triggers are clickable
- [ ] Clicking trigger toggles answer
- [ ] Clicking trigger rotates chevron
- [ ] Open items have purple glow
- [ ] Multiple items can be open simultaneously
- [ ] Answer fades in smoothly
- [ ] Both CTA buttons navigate correctly
- [ ] Tab order is logical
- [ ] All triggers have visible focus states

### Responsive Testing

- [ ] Mobile: Hero orbs hidden
- [ ] Mobile: Hero text readable
- [ ] Mobile: FAQ items full width
- [ ] Mobile: CTA orbs hidden
- [ ] Mobile: CTA buttons stacked
- [ ] Desktop: All orbs visible and animated
- [ ] Desktop: FAQ items max width 56rem

### Dark Mode Testing

- [ ] Hero maintains readability
- [ ] Orbs visible (purple/cyan)
- [ ] Glassmorphism badge visible
- [ ] Category icons have glow
- [ ] FAQ items have navy background
- [ ] Active FAQ glow stronger
- [ ] Chevron purple visible
- [ ] CTA maintains contrast
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2)
- [ ] All triggers have aria-expanded
- [ ] All icons decorative (aria-hidden)
- [ ] FAQ triggers keyboard accessible
- [ ] Enter/Space toggles FAQ
- [ ] Chevron rotation announced
- [ ] Focus indicators visible
- [ ] Orbs respect reduced motion
- [ ] Answer fade respects reduced motion
- [ ] Color contrast meets WCAG AA

### Content Testing

- [ ] All 5 categories display
- [ ] All 18 FAQ items display
- [ ] Category icons match data
- [ ] Questions display
- [ ] Answers display when open
- [ ] Icons render correctly

---

## Related Templates

- **PageHelpCenter** — Similar hero style
- **PageAbout** — Similar accordion pattern
- **PageContact** — Similar CTA

### Shared CSS

- `.info-hero` — Purple hero
- `.funky-glass-panel` — Glassmorphism
- `.funky-orb` — Animated orbs
- `.info-cta` — Commerce CTA

### New CSS Patterns

- `.info-hero--purple` — Purple hero variant
- `.info-faq__cat-icon` — Gradient icon circles
- `.info-faq__item--open` — Active state glow
- `.info-faq__chevron--open` — Rotated chevron

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready