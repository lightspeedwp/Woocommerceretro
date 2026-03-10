# LongFormSalesPage

**Component Type:** Template (Long-Form Sales Landing - Funky Redesign - Phase 9)  
**Location:** `/src/app/components/templates/LongFormSalesPage.tsx`  
**CSS:** `/src/styles/sections/commerce-special-funky.css`  
**Route:** `/sales/*` (dynamic campaign pages)  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 9)  
**Color Identity:** Cyan `#00ffff` / Lime `#00ff00` (conversion/energy)

---

## Overview

LongFormSalesPage is a comprehensive single-column storytelling sales template designed for product launches, campaigns, and high-ticket conversions. Features full-height hero with gradient overlay, social proof stats bar, problem/solution narrative, features grid with glow icons, testimonials with star ratings, pricing card with glassmorphism, FAQ accordion, and multiple CTAs throughout. Built for maximum conversion with funky neon treatments and psychological triggers.

**Page Purpose:** Convert visitors through storytelling and social proof  
**Target Audience:** Prospects considering product purchase or campaign signup  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Hero → Stats → Problem/Solution → Features → Testimonials → Pricing → FAQ → Final CTA

**Note:** Uses mock product launch content data. All sections designed for maximum conversion.

---

## Key Features

### Visual Elements

**1. Hero Section:**
- Full-height gradient background (purple → navy)
- Floating orbs (animated, optional)
- Badge with icon (gradient)
- Gradient headline (cyan → lime)
- Subheadline text
- Dual CTAs (primary gradient + outline)
- Trust indicators row

**2. Social Proof Bar:**
- Stats grid (3-4 stats)
- Large value numbers
- Small label text

**3. Problem/Solution:**
- Problem block (dark bg, empathy)
- Solution block (light bg, hope)
- Icon with glow
- Typography contrast

**4. Features Grid:**
- 6 feature cards (2x3 grid)
- Glow icon circles
- Title + description
- Hover spring animation

**5. Testimonials:**
- 3 testimonial cards
- Star ratings (gradient)
- Quote icon
- Avatar + name + role

**6. Pricing Section:**
- Glassmorphism card
- Large price display
- Original price strikethrough
- Savings highlight
- Feature checklist
- Gradient CTA button
- Guarantee text

**7. FAQ Accordion:**
- Question/answer pairs
- Chevron rotation
- Glow on active item
- Smooth expand/collapse

**8. Final CTA:**
- Gradient background
- Large headline
- Description text
- Large gradient button
- Trust badges row

### Funky Treatments

**Hero:** Gradient background + orbs + gradient text  
**Hero Badge:** Gradient (cyan → lime) with icon  
**Hero Title:** Gradient text (cyan → lime)  
**Hero CTAs:** Primary gradient + outline with glow  
**Stats:** Large gradient numbers  
**Feature Icons:** Gradient circles with hover glow + spring  
**Testimonial Stars:** Gradient fill  
**Pricing Card:** Glassmorphism with neon border  
**Pricing CTA:** Gradient button with glow  
**FAQ Active:** Glow border  
**Final CTA:** Gradient background + large button + trust badges

---

## Data Structure

### Product Launch Content

```tsx
import { productLaunchContent } from '../../data/productLaunch';

interface ProductLaunchContent {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string[];
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  problem: {
    heading: string;
    text: string;
  };
  solution: {
    heading: string;
    text: string;
  };
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    rating: number;
    content: string;
    image: string;
    name: string;
    role: string;
  }>;
  pricing: {
    badge: string;
    heading: string;
    subheading: string;
    price: string;
    originalPrice: string;
    period: string;
    savings: string;
    features: string[];
    cta: string;
    guarantee: string;
  };
  faq: {
    heading: string;
    subheading: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  finalCta: {
    heading: string;
    text: string;
    button: string;
    trust: Array<{
      icon: string;
      text: string;
    }>;
  };
}
```

### Icon Map

```tsx
const iconMap: Record<string, any> = {
  Zap,
  Shield,
  Users,
  TrendingUp,
  Truck,
  RefreshCcw,
};

// Usage in features
const Icon = iconMap[feature.icon] || Zap;
<Icon size={28} />
```

### FAQ State

```tsx
const [openFaq, setOpenFaq] = useState<number | null>(0);

const handleFaqClick = (index: number) => {
  setOpenFaq(openFaq === index ? null : index);
};
```

---

## Component Structure

### Complete Template Pattern

```tsx
<Layout>
  {/* 1. Hero Section */}
  <div className="wp-sales-hero">
    <div className="wp-sales-hero__bg" />

    <Container className="wp-sales-hero__content">
      <div className="wp-sales-hero__wrapper">
        {/* Badge */}
        <div className="wp-sales-badge">
          <Zap size={16} className="wp-sales-badge__icon" />
          <span className="wp-sales-badge__text">
            <small>{hero.badge}</small>
          </span>
        </div>

        {/* Headline */}
        <h1 className="wp-sales-hero__title">
          {hero.heading}
        </h1>

        {/* Subheadline */}
        <p className="wp-sales-hero__subtitle">
          {hero.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="wp-sales-hero__actions">
          <button className="wp-sales-btn wp-sales-btn--primary">
            {hero.primaryCta}
            <ArrowRight size={20} />
          </button>
          <button className="wp-sales-btn wp-sales-btn--outline">
            <Play size={20} />
            {hero.secondaryCta}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="wp-sales-trust">
          {hero.trust.map((item, i) => (
            <div key={i} className="wp-sales-trust__item">
              <Check size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </div>

  {/* 2. Social Proof Bar */}
  <div className="wp-sales-proof">
    <Container>
      <div className="wp-sales-proof__grid">
        {stats.map((stat, i) => (
          <div key={i} className="wp-sales-stat">
            <div className="wp-sales-stat__value">{stat.value}</div>
            <p className="wp-sales-stat__label">
              <small>{stat.label}</small>
            </p>
          </div>
        ))}
      </div>
    </Container>
  </div>

  {/* 3. Problem/Solution Section */}
  <Container className="wp-sales-section">
    <div className="wp-sales-narrative">
      <div className="wp-sales-problem">
        <Typography variant="h2" className="wp-sales-problem__title">
          {problem.heading}
        </Typography>
        <p className="wp-sales-problem__text">
          {problem.text}
        </p>
      </div>

      <div className="wp-sales-solution">
        <div className="wp-sales-solution__wrapper">
          <div className="wp-sales-solution__icon">
            <Zap size={24} className="wp-sales-solution__icon-svg" />
          </div>
          <div>
            <Typography variant="h3" className="wp-sales-solution__title">
              {solution.heading}
            </Typography>
            <p className="wp-sales-solution__text">
              {solution.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>

  {/* 4. Features Section */}
  <div className="wp-sales-features-section">
    <Container>
      <div className="wp-sales-features__header">
        <Typography variant="h2" className="wp-sales-features__title">
          Everything You Need to Succeed
        </Typography>
        <p className="wp-sales-features__subtitle">
          Powerful features designed to help you plan smarter, not harder.
        </p>
      </div>

      <div className="wp-sales-features__grid">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Zap;
          return (
            <div key={index} className="wp-sales-feature-card">
              <div className="wp-sales-feature-card__icon">
                <Icon size={28} />
              </div>
              <h3 className="wp-sales-feature-card__title">
                {feature.title}
              </h3>
              <p className="wp-sales-feature-card__text">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </div>

  {/* 5. Testimonials */}
  <Container className="wp-sales-section">
    <div className="wp-sales-testimonials__header">
      <Typography variant="h2" className="wp-sales-testimonials__title">
        Loved by Planners Worldwide
      </Typography>
      <p className="wp-sales-testimonials__subtitle">
        See what our community is saying
      </p>
    </div>

    <div className="wp-sales-testimonials__grid">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="wp-sales-testimonial-card">
          <div className="wp-sales-testimonial-card__rating">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={18} className="wp-icon-star" />
            ))}
          </div>
          <Quote size={32} className="wp-sales-testimonial-card__quote-icon" />
          <p className="wp-sales-testimonial-card__text">
            "{testimonial.content}"
          </p>
          <div className="wp-sales-testimonial-card__author">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="wp-sales-testimonial-card__avatar"
            />
            <div>
              <p className="wp-sales-testimonial-card__name">
                {testimonial.name}
              </p>
              <p className="wp-sales-testimonial-card__role">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>

  {/* 6. Pricing Section */}
  <div className="wp-sales-pricing-section">
    <Container>
      <div className="wp-sales-pricing__header">
        <div className="wp-sales-badge wp-sales-badge--light">
          <Award size={16} />
          <span className="wp-sales-badge__text">
            <small>{pricing.badge}</small>
          </span>
        </div>

        <Typography variant="h2" className="wp-sales-pricing__title">
          {pricing.heading}
        </Typography>
        <p className="wp-sales-pricing__subtitle">
          {pricing.subheading}
        </p>

        <div className="wp-sales-pricing-card">
          <div className="wp-sales-pricing-card__price">
            <div className="wp-sales-pricing-card__amount">
              <span className="wp-price-large">{pricing.price}</span>
              <span className="wp-price-original">{pricing.originalPrice}</span>
              <span className="wp-price-period">{pricing.period}</span>
            </div>
            <p className="wp-sales-pricing-card__savings">
              {pricing.savings}
            </p>
          </div>

          <ul className="wp-sales-pricing-card__features">
            {pricing.features.map((feature, i) => (
              <li key={i} className="wp-sales-feature-item">
                <Check size={20} className="wp-sales-feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="wp-sales-pricing-btn">
            {pricing.cta}
          </button>
          
          <p className="wp-sales-pricing-guarantee">
            {pricing.guarantee}
          </p>
        </div>
      </div>
    </Container>
  </div>

  {/* 7. FAQ Section */}
  <Container className="wp-sales-section">
    <div className="wp-sales-faq__wrapper">
      <div className="wp-sales-faq__header">
        <Typography variant="h2" className="wp-sales-faq__title">
          {faq.heading}
        </Typography>
        <p className="wp-sales-faq__subtitle">
          {faq.subheading}
        </p>
      </div>

      <div className="wp-sales-faq__list">
        {faq.items.map((item, index) => (
          <div key={index} className="wp-sales-faq-item">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="wp-sales-faq-trigger"
            >
              <span className="wp-sales-faq-question">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`wp-sales-faq-chevron ${openFaq === index ? 'wp-rotate-180' : ''}`}
              />
            </button>
            {openFaq === index && (
              <div className="wp-sales-faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </Container>

  {/* 8. Final CTA */}
  <div className="wp-sales-final-cta">
    <Container>
      <div className="wp-sales-final-cta__content">
        <Typography variant="h2" className="wp-sales-final-cta__title">
          {finalCta.heading}
        </Typography>
        <p className="wp-sales-final-cta__text">
          {finalCta.text}
        </p>
        <button className="wp-sales-btn wp-sales-btn--primary wp-sales-btn--large">
          {finalCta.button}
        </button>
        
        {/* Trust Badges */}
        <div className="wp-sales-trust wp-sales-trust--dark">
          {finalCta.trust.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <div key={i} className="wp-sales-trust__item">
                <Icon size={20} />
                <span><small>{item.text}</small></span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  </div>
</Layout>
```

---

## BEM Class Hierarchy

```
.wp-sales-hero (Hero section)
├── .wp-sales-hero__bg (Gradient background)
├── .wp-sales-hero__content (Container)
└── .wp-sales-hero__wrapper (Content wrapper)
    ├── .wp-sales-badge (Badge - gradient)
    │   ├── .wp-sales-badge__icon (Icon)
    │   └── .wp-sales-badge__text (Text)
    ├── .wp-sales-hero__title (h1 - gradient text)
    ├── .wp-sales-hero__subtitle (Subheadline)
    ├── .wp-sales-hero__actions (CTA buttons)
    │   ├── .wp-sales-btn--primary (Primary button - gradient)
    │   └── .wp-sales-btn--outline (Outline button)
    └── .wp-sales-trust (Trust indicators)
        └── .wp-sales-trust__item (Individual indicator)

.wp-sales-proof (Social proof bar)
└── .wp-sales-proof__grid (Stats grid)
    └── .wp-sales-stat (Stat item)
        ├── .wp-sales-stat__value (Value - gradient text)
        └── .wp-sales-stat__label (Label)

.wp-sales-section (Section wrapper)

.wp-sales-narrative (Problem/Solution wrapper)
├── .wp-sales-problem (Problem block - dark bg)
│   ├── .wp-sales-problem__title (h2)
│   └── .wp-sales-problem__text (Text)
└── .wp-sales-solution (Solution block - light bg)
    └── .wp-sales-solution__wrapper
        ├── .wp-sales-solution__icon (Icon circle - gradient)
        │   └── .wp-sales-solution__icon-svg (SVG)
        ├── .wp-sales-solution__title (h3)
        └── .wp-sales-solution__text (Text)

.wp-sales-features-section (Features section)
├── .wp-sales-features__header
│   ├── .wp-sales-features__title (h2)
│   └── .wp-sales-features__subtitle (Subtitle)
└── .wp-sales-features__grid (Features grid)
    └── .wp-sales-feature-card (Feature card)
        ├── .wp-sales-feature-card__icon (Icon circle - gradient + glow)
        ├── .wp-sales-feature-card__title (h3)
        └── .wp-sales-feature-card__text (Description)

.wp-sales-testimonials__header
├── .wp-sales-testimonials__title (h2)
└── .wp-sales-testimonials__subtitle (Subtitle)

.wp-sales-testimonials__grid (Testimonials grid)
└── .wp-sales-testimonial-card (Testimonial card - glassmorphism)
    ├── .wp-sales-testimonial-card__rating (Star rating)
    │   └── .wp-icon-star (Star icon - gradient fill)
    ├── .wp-sales-testimonial-card__quote-icon (Quote icon)
    ├── .wp-sales-testimonial-card__text (Quote text)
    └── .wp-sales-testimonial-card__author (Author info)
        ├── .wp-sales-testimonial-card__avatar (Avatar image)
        ├── .wp-sales-testimonial-card__name (Name)
        └── .wp-sales-testimonial-card__role (Role)

.wp-sales-pricing-section (Pricing section)
└── .wp-sales-pricing__header
    ├── .wp-sales-badge--light (Badge variant)
    ├── .wp-sales-pricing__title (h2)
    ├── .wp-sales-pricing__subtitle (Subtitle)
    └── .wp-sales-pricing-card (Pricing card - glassmorphism)
        ├── .wp-sales-pricing-card__price (Price section)
        │   ├── .wp-sales-pricing-card__amount (Amount row)
        │   │   ├── .wp-price-large (Price - gradient)
        │   │   ├── .wp-price-original (Original price - strikethrough)
        │   │   └── .wp-price-period (Period)
        │   └── .wp-sales-pricing-card__savings (Savings text - gradient)
        ├── .wp-sales-pricing-card__features (Features list)
        │   └── .wp-sales-feature-item (Feature item)
        │       ├── .wp-sales-feature-icon (Check icon - cyan)
        │       └── span (Feature text)
        ├── .wp-sales-pricing-btn (CTA button - gradient)
        └── .wp-sales-pricing-guarantee (Guarantee text)

.wp-sales-faq__wrapper (FAQ section)
├── .wp-sales-faq__header
│   ├── .wp-sales-faq__title (h2)
│   └── .wp-sales-faq__subtitle (Subtitle)
└── .wp-sales-faq__list (FAQ list)
    └── .wp-sales-faq-item (FAQ item)
        ├── .wp-sales-faq-trigger (Trigger button)
        │   ├── .wp-sales-faq-question (Question text)
        │   └── .wp-sales-faq-chevron (Chevron icon)
        │       └── .wp-rotate-180 (Rotation modifier)
        └── .wp-sales-faq-answer (Answer - expanded)
            └── p (Answer text)

.wp-sales-final-cta (Final CTA section - gradient bg)
└── .wp-sales-final-cta__content
    ├── .wp-sales-final-cta__title (h2 - gradient text)
    ├── .wp-sales-final-cta__text (Description)
    ├── .wp-sales-btn--large (Large CTA button - gradient)
    └── .wp-sales-trust--dark (Trust badges - dark variant)
        └── .wp-sales-trust__item (Badge item)
```

---

## Section Breakdown

### 1. Hero Section (`.wp-sales-hero`)

```css
.wp-sales-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.wp-sales-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--purple) 0%, var(--navy) 100%);
  z-index: -1;
}

.wp-sales-hero__content {
  position: relative;
  z-index: 1;
  padding: var(--space--1000) 0;
}

.wp-sales-hero__wrapper {
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
}

/* Badge */
.wp-sales-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space--300);
  padding: var(--space--300) var(--space--600);
  border-radius: var(--radius--full);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--navy);
  margin-bottom: var(--space--700);
}

.dark .wp-sales-badge {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.wp-sales-badge__icon {
  flex-shrink: 0;
}

.wp-sales-badge__text {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Headline */
.wp-sales-hero__title {
  margin-bottom: var(--space--600);
  font-size: var(--font-size--900);
  font-weight: 700;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtitle */
.wp-sales-hero__subtitle {
  margin-bottom: var(--space--800);
  font-size: var(--font-size--400);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.dark .wp-sales-hero__subtitle {
  color: rgba(255, 255, 255, 0.75);
}

/* Actions */
.wp-sales-hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--500);
  margin-bottom: var(--space--900);
}

/* Trust Indicators */
.wp-sales-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--700);
  flex-wrap: wrap;
}

.wp-sales-trust__item {
  display: flex;
  align-items: center;
  gap: var(--space--300);
  font-size: var(--font-size--200);
  color: rgba(255, 255, 255, 0.75);
}

.wp-sales-trust__item svg {
  color: var(--cyan);
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .wp-sales-hero {
    min-height: 80vh;
  }
  
  .wp-sales-hero__title {
    font-size: var(--font-size--700);
  }
  
  .wp-sales-hero__subtitle {
    font-size: var(--font-size--300);
  }
  
  .wp-sales-hero__actions {
    flex-direction: column;
    width: 100%;
  }
  
  .wp-sales-hero__actions button {
    width: 100%;
  }
}
```

**Height:** Full viewport (100vh, 80vh mobile)  
**Title:** Gradient text (cyan → lime)  
**Badge:** Gradient background with glow  
**Trust:** Checkmarks with cyan color

---

### 2. Social Proof Bar (`.wp-sales-proof`)

```css
.wp-sales-proof {
  padding: var(--space--800) 0;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.dark .wp-sales-proof {
  background: var(--surface-dark);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-sales-proof__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space--700);
  text-align: center;
}

.wp-sales-stat {
  display: flex;
  flex-direction: column;
  gap: var(--space--300);
}

.wp-sales-stat__value {
  font-size: var(--font-size--800);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.wp-sales-stat__label {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 640px) {
  .wp-sales-proof__grid {
    grid-template-columns: 1fr;
    gap: var(--space--600);
  }
}
```

**Grid:** Auto-fit (min 200px)  
**Values:** Gradient text (cyan → lime)

---

### 3. Problem/Solution (`.wp-sales-narrative`)

```css
.wp-sales-section {
  padding: var(--space--1000) 0;
}

.wp-sales-narrative {
  display: flex;
  flex-direction: column;
  gap: var(--space--900);
  max-width: 56rem;
  margin: 0 auto;
}

/* Problem */
.wp-sales-problem {
  padding: var(--space--800);
  border-radius: var(--radius--500);
  background: var(--surface);
  border: 1px solid var(--border);
}

.dark .wp-sales-problem {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.05);
}

.wp-sales-problem__title {
  margin-bottom: var(--space--500);
  color: var(--text);
}

.wp-sales-problem__text {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Solution */
.wp-sales-solution {
  padding: var(--space--800);
  border-radius: var(--radius--500);
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 0, 0.05) 100%);
  border: 2px solid rgba(0, 255, 255, 0.2);
}

.dark .wp-sales-solution {
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
}

.wp-sales-solution__wrapper {
  display: flex;
  gap: var(--space--600);
  align-items: flex-start;
}

.wp-sales-solution__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--white);
}

.dark .wp-sales-solution__icon {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.wp-sales-solution__title {
  margin-bottom: var(--space--400);
  color: var(--text);
}

.wp-sales-solution__text {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .wp-sales-solution__wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
```

**Problem:** Dark background, empathy  
**Solution:** Gradient tint, hope + icon with glow

---

### 4. Features Grid (`.wp-sales-features-section`)

```css
.wp-sales-features-section {
  padding: var(--space--1000) 0;
  background: var(--surface);
}

.dark .wp-sales-features-section {
  background: var(--surface-dark);
}

.wp-sales-features__header {
  text-align: center;
  margin-bottom: var(--space--900);
}

.wp-sales-features__title {
  margin-bottom: var(--space--500);
  color: var(--text);
}

.wp-sales-features__subtitle {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  max-width: 42rem;
  margin: 0 auto;
}

.wp-sales-features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space--700);
}

.wp-sales-feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space--500);
  padding: var(--space--800);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.dark .wp-sales-feature-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-sales-feature-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: var(--cyan);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.dark .wp-sales-feature-card:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
}

.wp-sales-feature-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--white);
}

.dark .wp-sales-feature-card__icon {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.wp-sales-feature-card:hover .wp-sales-feature-card__icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.wp-sales-feature-card__title {
  margin: 0;
  font-size: var(--font-size--400);
  font-weight: 600;
  color: var(--text);
}

.wp-sales-feature-card__text {
  margin: 0;
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .wp-sales-features__grid {
    grid-template-columns: 1fr;
  }
}
```

**Grid:** Auto-fit (min 300px)  
**Hover:** Lift + scale (spring effect) + glow  
**Icons:** Gradient circles with stronger glow on hover

---

### 5. Testimonials (`.wp-sales-testimonials__grid`)

```css
.wp-sales-testimonials__header {
  text-align: center;
  margin-bottom: var(--space--900);
}

.wp-sales-testimonials__title {
  margin-bottom: var(--space--500);
  color: var(--text);
}

.wp-sales-testimonials__subtitle {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
}

.wp-sales-testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space--700);
}

.wp-sales-testimonial-card {
  display: flex;
  flex-direction: column;
  gap: var(--space--500);
  padding: var(--space--800);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

.dark .wp-sales-testimonial-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-sales-testimonial-card__rating {
  display: flex;
  gap: var(--space--200);
}

.wp-icon-star {
  fill: currentColor;
  color: var(--gold);
}

.dark .wp-icon-star {
  filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.6));
}

.wp-sales-testimonial-card__quote-icon {
  color: var(--cyan);
  opacity: 0.3;
}

.wp-sales-testimonial-card__text {
  font-size: var(--font-size--300);
  color: var(--text);
  line-height: 1.6;
  font-style: italic;
}

.wp-sales-testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  margin-top: var(--space--400);
  padding-top: var(--space--500);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.wp-sales-testimonial-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.wp-sales-testimonial-card__name {
  margin: 0;
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--text);
}

.wp-sales-testimonial-card__role {
  margin: 0;
  font-size: var(--font-size--100);
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .wp-sales-testimonials__grid {
    grid-template-columns: 1fr;
  }
}
```

**Grid:** Auto-fit (min 320px)  
**Stars:** Gold with glow (dark mode)  
**Cards:** Glassmorphism

---

### 6. Pricing Section (`.wp-sales-pricing-section`)

```css
.wp-sales-pricing-section {
  padding: var(--space--1000) 0;
}

.wp-sales-pricing__header {
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
}

.wp-sales-badge--light {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.wp-sales-pricing__title {
  margin: var(--space--700) 0 var(--space--500);
  color: var(--text);
}

.wp-sales-pricing__subtitle {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  margin-bottom: var(--space--900);
}

.wp-sales-pricing-card {
  max-width: 28rem;
  margin: 0 auto;
  padding: var(--space--900);
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(0, 255, 255, 0.3);
  backdrop-filter: blur(12px);
}

.dark .wp-sales-pricing-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
}

.wp-sales-pricing-card__price {
  text-align: center;
  padding-bottom: var(--space--700);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: var(--space--700);
}

.wp-sales-pricing-card__amount {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--space--400);
  margin-bottom: var(--space--400);
}

.wp-price-large {
  font-size: var(--font-size--900);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.wp-price-original {
  font-size: var(--font-size--400);
  color: var(--text-muted);
  text-decoration: line-through;
}

.wp-price-period {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
}

.wp-sales-pricing-card__savings {
  font-size: var(--font-size--200);
  font-weight: 600;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.wp-sales-pricing-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space--800);
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.wp-sales-feature-item {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  font-size: var(--font-size--200);
  color: var(--text);
}

.wp-sales-feature-icon {
  flex-shrink: 0;
  color: var(--cyan);
}

.wp-sales-pricing-btn {
  width: 100%;
  padding: var(--space--600) var(--space--700);
  border: none;
  border-radius: var(--radius--400);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--navy);
  font-size: var(--font-size--300);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-bottom: var(--space--500);
}

.wp-sales-pricing-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.dark .wp-sales-pricing-btn:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

.wp-sales-pricing-guarantee {
  font-size: var(--font-size--100);
  color: var(--text-secondary);
  text-align: center;
}

@media (max-width: 640px) {
  .wp-sales-pricing-card {
    padding: var(--space--800);
  }
  
  .wp-price-large {
    font-size: var(--font-size--700);
  }
}
```

**Card:** Glassmorphism with neon cyan border + glow  
**Price:** Gradient text (cyan → lime)  
**Savings:** Gradient text  
**Button:** Gradient with lift + glow

---

### 7. FAQ Accordion (`.wp-sales-faq__wrapper`)

```css
.wp-sales-faq__wrapper {
  max-width: 56rem;
  margin: 0 auto;
}

.wp-sales-faq__header {
  text-align: center;
  margin-bottom: var(--space--900);
}

.wp-sales-faq__title {
  margin-bottom: var(--space--500);
  color: var(--text);
}

.wp-sales-faq__subtitle {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
}

.wp-sales-faq__list {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.wp-sales-faq-item {
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.dark .wp-sales-faq-item {
  border-color: rgba(0, 255, 255, 0.05);
}

.wp-sales-faq-item:has(.wp-sales-faq-answer) {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

.dark .wp-sales-faq-item:has(.wp-sales-faq-answer) {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.wp-sales-faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space--500);
  padding: var(--space--600);
  border: none;
  background: transparent;
  color: var(--text);
  font-size: var(--font-size--300);
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s;
}

.wp-sales-faq-trigger:hover {
  color: var(--cyan);
}

.wp-sales-faq-question {
  flex: 1;
}

.wp-sales-faq-chevron {
  flex-shrink: 0;
  color: var(--cyan);
  transition: transform 0.3s;
}

.wp-rotate-180 {
  transform: rotate(180deg);
}

.wp-sales-faq-answer {
  padding: 0 var(--space--600) var(--space--600);
  animation: faq-expand 0.3s ease-out;
}

@keyframes faq-expand {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.wp-sales-faq-answer p {
  margin: 0;
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .wp-sales-faq-trigger {
    padding: var(--space--500);
    font-size: var(--font-size--200);
  }
  
  .wp-sales-faq-answer {
    padding: 0 var(--space--500) var(--space--500);
  }
}
```

**Active Item:** Neon cyan border + glow  
**Chevron:** Rotates 180° when open  
**Animation:** Expand with fade + slide

---

### 8. Final CTA (`.wp-sales-final-cta`)

```css
.wp-sales-final-cta {
  padding: var(--space--1200) 0;
  background: linear-gradient(135deg, var(--purple) 0%, var(--navy) 100%);
  text-align: center;
}

.wp-sales-final-cta__content {
  max-width: 42rem;
  margin: 0 auto;
}

.wp-sales-final-cta__title {
  margin-bottom: var(--space--600);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.wp-sales-final-cta__text {
  margin-bottom: var(--space--800);
  font-size: var(--font-size--300);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
}

.dark .wp-sales-final-cta__text {
  color: rgba(255, 255, 255, 0.75);
}

.wp-sales-btn--large {
  padding: var(--space--600) var(--space--900);
  font-size: var(--font-size--400);
  margin-bottom: var(--space--800);
}

.wp-sales-trust--dark {
  justify-content: center;
}

.wp-sales-trust--dark .wp-sales-trust__item {
  color: rgba(255, 255, 255, 0.75);
}

@media (max-width: 640px) {
  .wp-sales-final-cta {
    padding: var(--space--1000) 0;
  }
  
  .wp-sales-btn--large {
    width: 100%;
  }
}
```

**Background:** Gradient (purple → navy)  
**Title:** Gradient text (cyan → lime)  
**Button:** Large variant with full-width on mobile

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller height, vertical CTAs */
.wp-sales-hero {
  min-height: 80vh;
}

.wp-sales-hero__title {
  font-size: var(--font-size--700);
}

.wp-sales-hero__actions {
  flex-direction: column;
  width: 100%;
}

/* Stats: Single column */
.wp-sales-proof__grid {
  grid-template-columns: 1fr;
}

/* Solution: Vertical stack */
.wp-sales-solution__wrapper {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Features: Single column */
.wp-sales-features__grid {
  grid-template-columns: 1fr;
}

/* Testimonials: Single column */
.wp-sales-testimonials__grid {
  grid-template-columns: 1fr;
}

/* Pricing: Less padding */
.wp-sales-pricing-card {
  padding: var(--space--800);
}

.wp-price-large {
  font-size: var(--font-size--700);
}

/* FAQ: Less padding */
.wp-sales-faq-trigger {
  padding: var(--space--500);
}

/* Final CTA: Less padding, full-width button */
.wp-sales-final-cta {
  padding: var(--space--1000) 0;
}

.wp-sales-btn--large {
  width: 100%;
}
```

### Desktop (> 640px)

```css
/* Hero: Full height */
.wp-sales-hero {
  min-height: 100vh;
}

/* Stats: Auto-fit grid */
.wp-sales-proof__grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* Features: 3 columns */
.wp-sales-features__grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Testimonials: 3 columns */
.wp-sales-testimonials__grid {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
```

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Badge** | Cyan → Lime gradient | Same + glow (0.4) |
| **Hero Title** | Cyan → Lime gradient | Same |
| **Stats BG** | Light surface | Dark surface |
| **Stats Values** | Cyan → Lime gradient | Same |
| **Problem BG** | Light surface | Dark `rgba(0,0,0,0.3)` |
| **Solution Border** | Cyan (0.2) | Cyan (0.3) + glow (0.1) |
| **Solution Icon** | Gradient circle | Same + glow (0.5) |
| **Features BG** | Light surface | Dark surface |
| **Feature Icons** | Gradient circles | Same + glow (0.4) |
| **Feature Hover** | Cyan border (0.3 glow) | Cyan border (0.5 glow) |
| **Testimonial Stars** | Gold | Gold + glow (0.6) |
| **Pricing Card** | Glass + cyan border (0.3) | Glass + cyan border (0.4) + glow (0.2) |
| **Pricing CTA Hover** | Cyan glow (0.6) | Cyan glow (0.8) |
| **FAQ Active** | Cyan border (0.2 glow) | Cyan border (0.3 glow) |
| **Final CTA Title** | Cyan → Lime gradient | Same |

### Dark Mode Enhancements

```css
.dark .wp-sales-badge {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.dark .wp-sales-hero__subtitle {
  color: rgba(255, 255, 255, 0.75);
}

.dark .wp-sales-proof {
  background: var(--surface-dark);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-sales-problem {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.05);
}

.dark .wp-sales-solution {
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
}

.dark .wp-sales-solution__icon {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.dark .wp-sales-features-section {
  background: var(--surface-dark);
}

.dark .wp-sales-feature-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-sales-feature-card:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
}

.dark .wp-sales-feature-card__icon {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.dark .wp-sales-testimonial-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-icon-star {
  filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.6));
}

.dark .wp-sales-pricing-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
}

.dark .wp-sales-pricing-btn:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

.dark .wp-sales-faq-item {
  border-color: rgba(0, 255, 255, 0.05);
}

.dark .wp-sales-faq-item:has(.wp-sales-faq-answer) {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.dark .wp-sales-final-cta__text {
  color: rgba(255, 255, 255, 0.75);
}
```

---

## Accessibility

### Semantic HTML

```tsx
<main>
  <section className="wp-sales-hero" aria-label="Product introduction">
    <h1>Transform your planning workflow</h1>
    <p>Subheading text</p>
    <div>
      <button>Get started</button>
      <button>Watch demo</button>
    </div>
  </section>
  
  <section className="wp-sales-proof" aria-label="Social proof statistics">
    <div>
      <div>
        <div>12,000+</div>
        <p>Active users</p>
      </div>
    </div>
  </section>
  
  <section aria-label="Problem and solution">
    <div>
      <h2>The problem</h2>
      <p>Description</p>
    </div>
    <div>
      <h3>The solution</h3>
      <p>Description</p>
    </div>
  </section>
  
  <section className="wp-sales-features-section" aria-label="Key features">
    <h2>Everything you need</h2>
    <div>
      <article>
        <div aria-hidden="true"><Zap /></div>
        <h3>Feature title</h3>
        <p>Description</p>
      </article>
    </div>
  </section>
  
  <section aria-label="Customer testimonials">
    <h2>Loved by planners worldwide</h2>
    <div>
      <article>
        <div>
          <Star aria-hidden="true" />
        </div>
        <Quote aria-hidden="true" />
        <p>"Testimonial content"</p>
        <div>
          <img alt="Customer name" />
          <div>
            <p>Name</p>
            <p>Role</p>
          </div>
        </div>
      </article>
    </div>
  </section>
  
  <section className="wp-sales-pricing-section" aria-label="Pricing">
    <h2>Get started today</h2>
    <div>
      <div>
        <span>$49</span>
        <span>$99</span>
      </div>
      <ul>
        <li>
          <Check aria-hidden="true" />
          Feature
        </li>
      </ul>
      <button>Subscribe now</button>
    </div>
  </section>
  
  <section aria-label="Frequently asked questions">
    <h2>Common questions</h2>
    <div>
      <div>
        <button aria-expanded="true">
          <span>Question?</span>
          <ChevronDown aria-hidden="true" />
        </button>
        <div>
          <p>Answer</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="wp-sales-final-cta" aria-label="Final call to action">
    <h2>Ready to get started?</h2>
    <p>Description</p>
    <button>Start free trial</button>
  </section>
</main>
```

### ARIA Attributes

```tsx
{/* Sections */}
<section aria-label="Product introduction">
<section aria-label="Social proof statistics">
<section aria-label="Key features">
<section aria-label="Customer testimonials">
<section aria-label="Pricing">
<section aria-label="Frequently asked questions">
<section aria-label="Final call to action">

{/* FAQ accordion */}
<button
  aria-expanded={openFaq === index}
  aria-controls={`faq-answer-${index}`}
>
  <span>{item.question}</span>
  <ChevronDown aria-hidden="true" />
</button>
<div id={`faq-answer-${index}`}>
  <p>{item.answer}</p>
</div>

{/* Decorative icons */}
<Zap aria-hidden="true" />
<Star aria-hidden="true" />
<Quote aria-hidden="true" />
<Check aria-hidden="true" />
<ChevronDown aria-hidden="true" />
```

### Keyboard Navigation

- **Tab Order:** Hero CTAs → Stats → Problem/Solution links → Feature cards → Testimonials → Pricing CTA → FAQ triggers → Final CTA
- **FAQ Accordion:** Enter/Space to toggle
- **Buttons:** Enter/Space to activate

### Focus States

```css
.wp-sales-btn:focus-visible,
.wp-sales-faq-trigger:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title (Gradient) | Cyan/Lime | Navy bg | N/A | Decorative ✅ |
| Hero Subtitle | White (0.85) | Navy bg | 6.5:1+ | AA ✅ |
| Stats Values (Gradient) | Cyan/Lime | Surface bg | N/A | Decorative ✅ |
| Problem Text | `#6b7280` | Light bg | 4.5:1+ | AA ✅ |
| Solution Text | `#6b7280` | Tinted bg | 4.5:1+ | AA ✅ |
| Feature Title | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| Feature Text | `#6b7280` | Card bg | 4.5:1+ | AA ✅ |
| Testimonial Text | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| Price (Gradient) | Cyan/Lime | Card bg | N/A | Decorative ✅ |
| Pricing CTA | Navy `#030213` | Gradient bg | 8.32:1 | AAA ✅ |
| FAQ Question | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| FAQ Answer | `#6b7280` | Card bg | 4.5:1+ | AA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Sticky CTA Bar

```tsx
const [showStickyCta, setShowStickyCta] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const heroHeight = document.querySelector('.wp-sales-hero')?.clientHeight || 0;
    setShowStickyCta(window.scrollY > heroHeight);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

{showStickyCta && (
  <div className="wp-sales-sticky-cta">
    <Container>
      <div className="wp-sales-sticky-cta__content">
        <span className="wp-sales-sticky-cta__text">
          Limited offer: 50% off
        </span>
        <button className="wp-sales-btn wp-sales-btn--primary wp-sales-btn--small">
          Get started
        </button>
      </div>
    </Container>
  </div>
)}
```

### 2. Countdown Timer

```tsx
const [timeLeft, setTimeLeft] = useState({
  hours: 23,
  minutes: 59,
  seconds: 59,
});

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(prev => {
      if (prev.seconds > 0) {
        return { ...prev, seconds: prev.seconds - 1 };
      } else if (prev.minutes > 0) {
        return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
      } else if (prev.hours > 0) {
        return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
      }
      return prev;
    });
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

<div className="wp-sales-countdown">
  <div className="wp-sales-countdown__label">Offer ends in:</div>
  <div className="wp-sales-countdown__time">
    <span>{timeLeft.hours}h</span>
    <span>{timeLeft.minutes}m</span>
    <span>{timeLeft.seconds}s</span>
  </div>
</div>
```

### 3. Video Modal

```tsx
const [videoOpen, setVideoOpen] = useState(false);

<button onClick={() => setVideoOpen(true)}>
  <Play size={20} />
  Watch demo
</button>

{videoOpen && (
  <div className="wp-sales-video-modal">
    <div className="wp-sales-video-modal__overlay" onClick={() => setVideoOpen(false)} />
    <div className="wp-sales-video-modal__content">
      <button className="wp-sales-video-modal__close" onClick={() => setVideoOpen(false)}>
        <X size={24} />
      </button>
      <iframe
        src="https://www.youtube.com/embed/VIDEO_ID"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
)}
```

### 4. Exit Intent Popup

```tsx
const [exitIntentShown, setExitIntentShown] = useState(false);

useEffect(() => {
  const handleMouseLeave = (e: MouseEvent) => {
    if (e.clientY <= 0 && !exitIntentShown) {
      setShowExitPopup(true);
      setExitIntentShown(true);
    }
  };
  
  document.addEventListener('mouseleave', handleMouseLeave);
  return () => document.removeEventListener('mouseleave', handleMouseLeave);
}, [exitIntentShown]);
```

### 5. Scroll Progress Bar

```tsx
const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

<div className="wp-sales-progress-bar">
  <div
    className="wp-sales-progress-bar__fill"
    style={{ width: `${scrollProgress}%` }}
  />
</div>
```

### 6. Analytics Tracking

```tsx
useEffect(() => {
  analytics.track('Sales Page Viewed', {
    product: productLaunchContent.hero.heading,
    url: window.location.href,
  });
}, []);

const trackCTA = (location: string) => {
  analytics.track('CTA Clicked', {
    location: location, // 'hero', 'pricing', 'final'
    product: productLaunchContent.hero.heading,
  });
};

const trackFAQ = (question: string) => {
  analytics.track('FAQ Clicked', {
    question: question,
  });
};
```

### 7. A/B Testing Headlines

```tsx
const headlines = [
  'Transform your planning workflow',
  'Plan smarter, not harder',
  'Your ultimate planning companion',
];

const [headlineVariant] = useState(() =>
  Math.floor(Math.random() * headlines.length)
);

<h1>{headlines[headlineVariant]}</h1>
```

### 8. Social Share

```tsx
const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: productLaunchContent.hero.heading,
      text: productLaunchContent.hero.subheading,
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied!');
  }
};
```

### 9. Conversion Tracking

```tsx
const handlePurchase = () => {
  // Track conversion
  analytics.track('Purchase Started', {
    product: productLaunchContent.hero.heading,
    price: productLaunchContent.pricing.price,
    source: 'sales_page',
  });
  
  // Facebook Pixel
  fbq('track', 'InitiateCheckout', {
    value: 49.00,
    currency: 'USD',
  });
  
  // Google Analytics
  gtag('event', 'begin_checkout', {
    value: 49.00,
    currency: 'USD',
  });
  
  // Navigate to checkout
  navigate('/checkout');
};
```

### 10. Live Chat Integration

```tsx
useEffect(() => {
  // Intercom example
  (window as any).Intercom('boot', {
    app_id: 'YOUR_APP_ID',
    hide_default_launcher: false,
  });
  
  return () => {
    (window as any).Intercom('shutdown');
  };
}, []);
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero gradient visible
- [ ] Hero badge gradient visible
- [ ] Hero title gradient (cyan → lime)
- [ ] Hero CTAs display (2 buttons)
- [ ] Trust indicators row displays
- [ ] Stats bar displays
- [ ] Stats values gradient visible
- [ ] Problem block dark background
- [ ] Solution block gradient tint
- [ ] Solution icon gradient + glow
- [ ] Features grid displays (6 cards)
- [ ] Feature icons gradient circles
- [ ] Testimonials grid displays (3 cards)
- [ ] Star ratings gradient visible
- [ ] Pricing card glassmorphism visible
- [ ] Price gradient visible
- [ ] FAQ accordion displays
- [ ] Active FAQ has glow border
- [ ] Final CTA gradient background
- [ ] Final CTA title gradient

### Interaction Testing

- [ ] Hero primary CTA clicks
- [ ] Hero secondary CTA clicks
- [ ] Feature cards hover (lift + glow)
- [ ] Pricing CTA clicks
- [ ] FAQ items expand/collapse
- [ ] FAQ chevron rotates
- [ ] Final CTA clicks

### State Testing

- [ ] FAQ state toggles correctly
- [ ] Only one FAQ open at a time (optional)
- [ ] Chevron rotation matches state

### Responsive Testing

- [ ] Mobile: Hero smaller height
- [ ] Mobile: Hero CTAs vertical
- [ ] Mobile: Stats single column
- [ ] Mobile: Solution vertical stack
- [ ] Mobile: Features single column
- [ ] Mobile: Testimonials single column
- [ ] Mobile: Pricing less padding
- [ ] Mobile: FAQ less padding
- [ ] Mobile: Final CTA full-width button
- [ ] Desktop: All grids auto-fit
- [ ] All breakpoints smooth transitions

### Dark Mode Testing

- [ ] Hero badge glow visible
- [ ] Stats background dark
- [ ] Problem background darker
- [ ] Solution border + glow stronger
- [ ] Solution icon glow visible
- [ ] Features background dark
- [ ] Feature cards glassmorphism visible
- [ ] Feature hover glow stronger
- [ ] Feature icons glow visible
- [ ] Testimonial stars glow visible
- [ ] Pricing card border + glow stronger
- [ ] Pricing CTA hover glow stronger
- [ ] FAQ active glow stronger
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] All sections have aria-label
- [ ] FAQ triggers have aria-expanded
- [ ] Decorative icons have aria-hidden
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] FAQ keyboard accessible
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA
- [ ] Images have alt text

---

## Related Templates

- **MembershipLanding** — Similar hero structure
- **SubscriptionLanding** — Similar pricing section
- **PageRewardProgram** — Similar features grid

### Shared CSS

- `.commerce-special-funky.css` — Long-form sales page styles
- Shared with membership, subscription, and special commerce pages

### Shared Data

- `/data/productLaunch.ts` — Product launch content

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready  
**Conversion Focus:** ⭐ Maximum conversion optimization
