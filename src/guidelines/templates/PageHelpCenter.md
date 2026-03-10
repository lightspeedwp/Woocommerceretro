# PageHelpCenter

**Component Type:** Template (Help/Support Hub - Clean Funky)  
**Location:** `/src/app/components/templates/PageHelpCenter.tsx`  
**CSS:** `/src/styles/sections/legal-pages-funky.css`  
**Route:** `/help`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Clean Funky)  
**Color Identity:** Navy `#030213` / Cyan `#00ffff`

---

## Overview

PageHelpCenter is a customer support hub template using the "legal-pages" CSS pattern. Features minimal hero, browsable topic categories with gradient heading, popular articles list, and three contact method options. Designed to provide self-service support and multiple contact channels for customers.

**Page Purpose:** Central help hub for customer support  
**Target Audience:** All customers seeking assistance  
**Dark Mode:** ✅ Complete support  
**Layout:** Minimal hero → Category cards (3-col) → Article links → Contact options (3 cards)

**Note:** Combines category cards with link functionality, introduces article link list pattern, and contact option cards

---

## Key Features

### Visual Elements

**1. Minimal Hero:**
- Navy gradient background
- LifeBuoy icon badge (bordered)
- "Help" label
- Centered white text
- Shorter height (35vh)

**2. Browse Topics (Categories):**
- 6 category cards with links
- 3-column responsive grid
- Category-specific icons (Package, Truck, RotateCcw, CreditCard, User, HelpCircle)
- Cyan icon circles
- Gradient heading (cyan → pink)
- Hover states on cards

**3. Popular Articles:**
- 6 article links
- BookOpen icons (cyan)
- Alternate background
- Vertical list layout

**4. Contact Options:**
- 3 contact method cards
- Chat (MessageCircle icon, primary button)
- Email (Mail icon, secondary button, mailto)
- Phone (Phone icon, secondary button, tel)
- Centered layout
- Contact cards with icons + titles + descriptions + actions

### Funky Treatments

**Hero:** Navy gradient, bordered badge  
**Categories Heading:** Gradient text (cyan → pink)  
**Category Icons:** Cyan circles  
**Article Icons:** Cyan BookOpen  
**Contact Icons:** Cyan (larger, 28px)  
**Buttons:** Primary (chat, cyan) + Secondary (email/phone, outlined)

---

## Data Structure

### Help Category Interface

```typescript
interface HelpCategory {
  title: string;       // 'Orders'
  icon: string;        // 'Package' (mapped to Lucide icon)
  description: string; // 'Track orders, modify details...'
  link: string;        // '/faq'
}
```

### Help Article Interface

```typescript
interface HelpArticle {
  title: string;  // 'How do I track my order?'
  link: string;   // '/faq'
}
```

### Mock Data

**6 Help Categories:**
```typescript
export const helpCategories: HelpCategory[] = [
  { 
    icon: 'Package', 
    title: 'Orders', 
    description: 'Track orders, modify details, and check order status.', 
    link: '/faq' 
  },
  { 
    icon: 'Truck', 
    title: 'Shipping', 
    description: 'Delivery options, estimated times, and tracking information.', 
    link: '/shipping-returns' 
  },
  { 
    icon: 'RotateCcw', 
    title: 'Returns & Exchanges', 
    description: 'Return policy, how to start a return, and exchange process.', 
    link: '/returns' 
  },
  { 
    icon: 'CreditCard', 
    title: 'Payment', 
    description: 'Accepted payment methods, billing issues, and refund status.', 
    link: '/faq' 
  },
  { 
    icon: 'User', 
    title: 'Account', 
    description: 'Account settings, password reset, and profile management.', 
    link: '/account' 
  },
  { 
    icon: 'HelpCircle', 
    title: 'Product Info', 
    description: 'Sizing, materials, care instructions, and product details.', 
    link: '/size-guide' 
  },
];
```

**6 Popular Articles:**
```typescript
export const popularArticles: HelpArticle[] = [
  { title: 'How do I track my order?', link: '/faq' },
  { title: 'What is your return policy?', link: '/shipping-returns' },
  { title: 'How do I find the right size?', link: '/size-guide' },
  { title: 'What payment methods are accepted?', link: '/faq' },
  { title: 'How do I reset my password?', link: '/account/login' },
  { title: 'Can I modify my order after placing it?', link: '/faq' },
];
```

**Source:** `/src/app/data/helpCenter.ts`

### Page Content Strings

```typescript
export const helpCenterPageContent = {
  title: 'Help center',
  description: 'How can we help you? Browse topics below or contact our support team.',
  categoriesHeading: 'Browse topics',
  articlesHeading: 'Popular articles',
  contactHeading: 'Contact us',
  contactText: 'Could not find what you are looking for? Reach out to our support team.',
  chat: { 
    title: 'Live chat', 
    desc: 'Available Mon-Fri, 9am-6pm EST', 
    action: 'Start Chat' 
  },
  email: { 
    title: 'Email support', 
    desc: 'We respond within 24 hours', 
    action: 'Send Email' 
  },
  phone: { 
    title: 'Phone', 
    desc: 'Call Now' 
  }
};
```

### Dynamic Content

```typescript
// Phone and email from company data
import { getHeadquarters } from '../../data/company';

const headquarters = getHeadquarters();
const phone = headquarters?.phone || '1-800-555-0199';
const email = headquarters?.email || 'support@wooshop.com';
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  {/* Minimal Hero */}
  <section className="legal-page legal-hero">
    {/* Gradient overlay */}
    <div className="legal-hero__content">
      <span className="legal-hero__badge">
        <LifeBuoy size={12} /> Help
      </span>
      <h1 className="legal-hero__title">{title}</h1>
      <p className="legal-hero__subtitle">{description}</p>
    </div>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Browse Topics (Categories) */}
  <section className="legal-cards">
    <Container>
      <h2 className="funky-section__heading--gradient">Browse topics</h2>
      <div className="legal-cards__grid legal-cards__grid--3col">
        {helpCategories.map((category) => (
          <Link to={category.link} className="legal-cards__link-card">
            {/* Icon + title + description */}
          </Link>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Popular Articles */}
  <section className="legal-cards legal-cards--alt">
    <Container>
      <h2 className="legal-cards__heading">Popular articles</h2>
      <div className="legal-articles">
        {popularArticles.map((article) => (
          <Link to={article.link} className="legal-article-link">
            {/* BookOpen icon + article title */}
          </Link>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Contact Options */}
  <section className="legal-cards">
    <Container>
      <h2 className="legal-cards__heading">Contact us</h2>
      <p className="legal-cards__text--center">{contactText}</p>
      <div className="legal-contact-grid">
        {/* Chat card */}
        <div className="legal-contact-card">
          <MessageCircle size={28} />
          <h3>Live chat</h3>
          <p>Available Mon-Fri, 9am-6pm EST</p>
          <Link to="/chat" className="legal-contact-card__btn--primary">
            Start Chat
          </Link>
        </div>
        
        {/* Email card */}
        <div className="legal-contact-card">
          <Mail size={28} />
          <h3>Email support</h3>
          <p>We respond within 24 hours</p>
          <a href={`mailto:${email}`} className="legal-contact-card__btn--secondary">
            Send Email
          </a>
        </div>
        
        {/* Phone card */}
        <div className="legal-contact-card">
          <Phone size={28} />
          <h3>Phone</h3>
          <p>{phone}</p>
          <a href={`tel:${phone}`} className="legal-contact-card__btn--secondary">
            Call Now
          </a>
        </div>
      </div>
    </Container>
  </section>
</Layout>
```

### Icons Used

```tsx
import { 
  LifeBuoy,      // Hero badge
  Package,       // Orders category
  Truck,         // Shipping category
  RotateCcw,     // Returns category
  CreditCard,    // Payment category
  User,          // Account category
  HelpCircle,    // Product Info category (fallback)
  BookOpen,      // Popular articles (all)
  MessageCircle, // Chat contact
  Mail,          // Email contact
  Phone,         // Phone contact
} from '@phosphor-icons/react';

// Icon mapping for category cards
const categoryIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'Package': Package,
  'Truck': Truck,
  'RotateCcw': RotateCcw,
  'CreditCard': CreditCard,
  'User': User,
  'HelpCircle': HelpCircle,
};
```

---

## BEM Class Hierarchy

```
.page-help-center (Template wrapper - no actual class)
│
├── .legal-page (Root marker class)
│   └── .legal-hero (Minimal hero)
│       ├── .legal-hero__overlay (Navy gradient)
│       ├── .legal-hero__content (Text container)
│       │   ├── .legal-hero__badge (LifeBuoy icon badge)
│       │   ├── .legal-hero__title (h1)
│       │   └── .legal-hero__subtitle (p)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-cards (Browse topics section)
│   └── .legal-cards__content (Content wrapper)
│       ├── .legal-cards__content--centered (Centered heading)
│       ├── .legal-cards__heading (h2)
│       │   └── .funky-section__heading--gradient (Gradient text)
│       └── .legal-cards__grid (Grid container)
│           ├── .legal-cards__grid--3col (3-column modifier - NEW)
│           └── .legal-cards__link-card (Category link card - NEW)
│               ├── .legal-cards__icon (Icon circle)
│               ├── .legal-cards__card-title (h3)
│               └── .legal-cards__card-text (p)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-cards (Popular articles section)
│   ├── .legal-cards--alt (Alternate background)
│   └── .legal-cards__content (Content wrapper)
│       ├── .legal-cards__content--md-gap (Medium gap)
│       ├── .legal-cards__heading (h2)
│       └── .legal-articles (Article list container - NEW)
│           └── .legal-article-link (Article link - NEW)
│               ├── .legal-article-link__icon (BookOpen icon)
│               └── span (Article title)
│
├── .funky-section__divider--subtle (Subtle divider)
│
└── .legal-cards (Contact options section)
    └── .legal-cards__content (Content wrapper)
        ├── .legal-cards__content--centered (Centered heading)
        ├── .legal-cards__heading (h2)
        ├── .legal-cards__text (p)
        │   └── .legal-cards__text--center (Center alignment)
        └── .legal-contact-grid (3-column contact grid - NEW)
            └── .legal-contact-card (Contact method card - NEW)
                ├── .legal-contact-card__icon (Icon)
                ├── .legal-contact-card__title (h3)
                ├── .legal-contact-card__text (p)
                ├── .legal-contact-card__btn--primary (Primary button)
                └── .legal-contact-card__btn--secondary (Secondary button)
```

---

## Section Breakdown

### 1. Minimal Hero (`.legal-hero`)

**Shared with other legal-* templates**

```css
.legal-hero {
  position: relative;
  min-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.legal-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--navy) 0%, #0a0a0a 100%);
  z-index: 0;
}

.legal-hero__content {
  position: relative;
  z-index: 1;
  max-width: 48rem;
  padding: var(--space--700) var(--space--400);
}

.legal-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--200) var(--space--400);
  border-radius: 999px;
  font-size: var(--font-size--75);
  font-weight: 500;
  color: var(--cyan);
  border: 1px solid var(--cyan);
  margin-bottom: var(--space--400);
}

.legal-hero__title {
  font-size: var(--font-size--700);
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--space--400);
}

.legal-hero__subtitle {
  font-size: var(--font-size--300);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}
```

**Badge:** "Help" with LifeBuoy icon

---

### 2. Browse Topics (`.legal-cards__link-card`)

**NEW PATTERN** - Category cards as links with 3-column grid

```css
.legal-cards {
  padding: var(--space--800) 0;
  background: var(--surface);
}

.legal-cards__content {
  max-width: 72rem;
  margin: 0 auto;
}

.legal-cards__content--centered {
  text-align: center;
}

.legal-cards__heading {
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--700);
}

/* Gradient Heading */
.funky-section__heading--gradient {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 3-Column Grid */
.legal-cards__grid--3col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space--600);
}

/* Category Link Card (NEW) */
.legal-cards__link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
  text-align: center;
  text-decoration: none;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.legal-cards__link-card:hover {
  transform: translateY(-4px);
  border-color: var(--cyan);
  box-shadow: 0 8px 20px rgba(0, 255, 255, 0.15);
}

.dark .legal-cards__link-card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

.dark .legal-cards__link-card:hover {
  box-shadow: 0 8px 20px rgba(0, 255, 255, 0.3);
}

/* Icon Circle */
.legal-cards__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--cyan);
  color: var(--navy);
  margin-bottom: var(--space--400);
}

.dark .legal-cards__icon {
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
}

.legal-cards__card-title {
  font-size: var(--font-size--400);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--300);
}

.legal-cards__card-text {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.6;
}
```

**Grid:** 3 columns auto-fit (min 240px)  
**Hover:** Lift + cyan border + shadow  
**Icons:** Package, Truck, RotateCcw, CreditCard, User, HelpCircle

---

### 3. Popular Articles (`.legal-articles`)

**NEW PATTERN** - Article link list

```css
.legal-cards--alt {
  background: var(--surface-alt);
}

.legal-cards__content--md-gap {
  display: flex;
  flex-direction: column;
  gap: var(--space--600);
}

/* Article List Container (NEW) */
.legal-articles {
  display: flex;
  flex-direction: column;
  gap: var(--space--300);
  max-width: 48rem;
  margin: 0 auto;
}

/* Article Link (NEW) */
.legal-article-link {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  padding: var(--space--400);
  border-radius: var(--radius--300);
  background: var(--white);
  border: 1px solid var(--border);
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.2s, background-color 0.2s;
}

.legal-article-link:hover {
  border-color: var(--cyan);
  background: rgba(0, 255, 255, 0.05);
}

.dark .legal-article-link {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .legal-article-link:hover {
  border-color: var(--cyan);
  background: rgba(0, 255, 255, 0.1);
}

/* BookOpen Icon */
.legal-article-link__icon {
  flex-shrink: 0;
  color: var(--cyan);
}

.legal-article-link span {
  flex: 1;
  font-size: var(--font-size--200);
  font-weight: 500;
}
```

**Layout:** Vertical list  
**Icons:** BookOpen (cyan, 16px)  
**Hover:** Cyan border + subtle background

---

### 4. Contact Options (`.legal-contact-grid`)

**NEW PATTERN** - 3-column contact method cards

```css
.legal-cards__text {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  line-height: 1.6;
}

.legal-cards__text--center {
  text-align: center;
  margin-bottom: var(--space--700);
}

/* Contact Grid (NEW) */
.legal-contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space--600);
  max-width: 64rem;
  margin: 0 auto;
}

/* Contact Card (NEW) */
.legal-contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
  text-align: center;
}

.dark .legal-contact-card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

/* Contact Icon (Larger, 28px) */
.legal-contact-card__icon {
  color: var(--cyan);
  margin-bottom: var(--space--400);
}

.dark .legal-contact-card__icon {
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.5));
}

.legal-contact-card__title {
  font-size: var(--font-size--400);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--300);
}

.legal-contact-card__text {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  margin-bottom: var(--space--500);
  line-height: 1.6;
}

/* Primary Button (Chat) */
.legal-contact-card__btn--primary {
  display: inline-block;
  padding: var(--space--300) var(--space--600);
  border-radius: var(--radius--300);
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--navy);
  background: var(--cyan);
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.legal-contact-card__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

/* Secondary Button (Email, Phone) */
.legal-contact-card__btn--secondary {
  display: inline-block;
  padding: var(--space--300) var(--space--600);
  border-radius: var(--radius--300);
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--cyan);
  background: transparent;
  border: 1px solid var(--cyan);
  text-decoration: none;
  transition: background-color 0.2s;
}

.legal-contact-card__btn--secondary:hover {
  background: rgba(0, 255, 255, 0.1);
}
```

**Grid:** 3 columns auto-fit (min 260px)  
**Icons:** MessageCircle, Mail, Phone (cyan, 28px)  
**Buttons:** Primary (chat, cyan solid) + Secondary (email/phone, outlined)

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text */
.legal-hero__title {
  font-size: var(--font-size--600);
}

/* Category cards: 1 column */
.legal-cards__grid--3col {
  grid-template-columns: 1fr;
}

/* Contact cards: 1 column */
.legal-contact-grid {
  grid-template-columns: 1fr;
}
```

### Tablet (640px - 1024px)

```css
/* Category cards: 2 columns */
.legal-cards__grid--3col {
  grid-template-columns: repeat(2, 1fr);
}

/* Contact cards: 2 columns (3rd wraps) */
.legal-contact-grid {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* Category cards: 3 columns */
.legal-cards__grid--3col {
  grid-template-columns: repeat(3, 1fr);
}

/* Contact cards: 3 columns */
.legal-contact-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

**Key Breakpoints:** Categories 1 col → 2 col → 3 col, Contact 1 col → 2 col → 3 col

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Background** | Navy gradient | Navy gradient |
| **Hero Text** | White `#ffffff` | White `#ffffff` |
| **Hero Badge** | Cyan border + text | Cyan border + text |
| **Category Cards** | White `#ffffff` | Navy `#030213` |
| **Category Icons** | Cyan bg | Cyan bg + glow |
| **Gradient Heading** | Cyan → pink | Cyan → pink |
| **Article Links** | White bg | `rgba(255,255,255,0.03)` |
| **Article Icons (BookOpen)** | Cyan | Cyan |
| **Contact Cards** | White bg | Navy bg |
| **Contact Icons** | Cyan | Cyan + glow |
| **Primary Button** | Navy text + cyan bg | Navy text + cyan bg |
| **Secondary Button** | Cyan text + outlined | Cyan text + outlined |

### Dark Mode Enhancements

```css
.dark .legal-cards__link-card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

.dark .legal-cards__link-card:hover {
  box-shadow: 0 8px 20px rgba(0, 255, 255, 0.3);
}

.dark .legal-cards__icon {
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
}

.dark .legal-article-link {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .legal-article-link:hover {
  border-color: var(--cyan);
  background: rgba(0, 255, 255, 0.1);
}

.dark .legal-contact-card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

.dark .legal-contact-card__icon {
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.5));
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero: section + h1 */}
<section className="legal-hero">
  <h1 className="legal-hero__title">{title}</h1>
  <p className="legal-hero__subtitle">{description}</p>
</section>

{/* Categories: section + h2 + links */}
<section className="legal-cards">
  <h2 className="funky-section__heading--gradient">Browse topics</h2>
  {helpCategories.map(category => (
    <Link to={category.link} className="legal-cards__link-card">
      <h3 className="legal-cards__card-title">{category.title}</h3>
      <p className="legal-cards__card-text">{category.description}</p>
    </Link>
  ))}
</section>

{/* Articles: section + h2 + links */}
<section className="legal-cards">
  <h2 className="legal-cards__heading">Popular articles</h2>
  {popularArticles.map(article => (
    <Link to={article.link} className="legal-article-link">
      {article.title}
    </Link>
  ))}
</section>

{/* Contact: section + h2 + h3 */}
<section className="legal-cards">
  <h2 className="legal-cards__heading">Contact us</h2>
  {/* Contact cards */}
</section>
```

### ARIA Attributes

```tsx
{/* Sections with aria-labels */}
<section className="legal-cards" aria-label="Browse help topics">
  {/* Categories */}
</section>

<section className="legal-cards" aria-label="Popular articles">
  {/* Articles */}
</section>

<section className="legal-cards" aria-label="Contact options">
  {/* Contact cards */}
</section>

{/* Icons decorative */}
<LifeBuoy size={12} aria-hidden="true" />
<Package size={22} aria-hidden="true" />
<BookOpen size={16} aria-hidden="true" />

{/* Category links descriptive */}
<Link 
  to="/faq" 
  className="legal-cards__link-card"
  aria-label="Orders - Track orders and check status"
>
  {/* Content */}
</Link>

{/* Contact buttons descriptive */}
<Link 
  to="/chat" 
  className="legal-contact-card__btn--primary"
  aria-label="Start live chat with support team"
>
  Start Chat
</Link>

<a 
  href={`mailto:${email}`}
  className="legal-contact-card__btn--secondary"
  aria-label={`Send email to ${email}`}
>
  Send Email
</a>

<a 
  href={`tel:${phone}`}
  className="legal-contact-card__btn--secondary"
  aria-label={`Call ${phone}`}
>
  Call Now
</a>
```

### Keyboard Navigation

- **Tab Order:** Hero (read-only) → Category cards (all focusable links) → Article links (all focusable) → Contact buttons (all focusable)
- **Focus States:** All links and buttons have visible focus rings
- **Card Navigation:** Entire category card is clickable link (large touch target)
- **Skip Links:** Users can skip to main content

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| Hero Subtitle | `rgba(255,255,255,0.8)` | Navy | 15.4:1 | AAA ✅ |
| Category Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Category Title (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| Category Text (Light) | `#6b7280` | `#ffffff` | 4.6:1 | AA ✅ |
| Category Text (Dark) | `#9ca3af` | Navy | 5.8:1 | AA ✅ |
| Article Link (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Article Link (Dark) | `#f9fafb` | Navy | 19.05:1 | AAA ✅ |
| Contact Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Contact Title (Dark) | `#f9fafb` | Navy | 19.05:1 | AAA ✅ |
| Primary Button | Navy `#030213` | Cyan `#00ffff` | 8.32:1 | AAA ✅ |
| Secondary Button | Cyan `#00ffff` | Transparent | 4.5:1+ | AA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Search Functionality

```tsx
// Add search input for articles
<div className="legal-search">
  <input 
    type="search" 
    placeholder="Search help articles..."
    onChange={(e) => searchArticles(e.target.value)}
  />
  <Search size={20} />
</div>
```

### 2. Recent Activity

```tsx
// Show user's recent support history
<div className="legal-recent">
  <h3>Your Recent Activity</h3>
  <ul>
    <li>Ticket #1234 - Order issue - <span>Resolved</span></li>
    <li>Article viewed: Return policy - <time>2 days ago</time></li>
  </ul>
</div>
```

### 3. AI Assistant

```tsx
// Add AI chatbot trigger
<div className="legal-ai-assistant">
  <button onClick={() => openAIChat()}>
    <Bot size={20} /> Ask AI Assistant
  </button>
  <p>Get instant answers powered by AI</p>
</div>
```

### 4. Category Article Count

```tsx
// Show number of articles per category
{helpCategories.map(category => (
  <Link to={category.link} className="legal-cards__link-card">
    <h3>{category.title}</h3>
    <p>{category.description}</p>
    <span className="legal-cards__count">{category.articleCount} articles</span>
  </Link>
))}
```

### 5. Trending Topics

```tsx
// Show trending help topics
<div className="legal-trending">
  <h3>🔥 Trending Now</h3>
  <ul>
    {trendingTopics.map(topic => (
      <li key={topic.id}>
        <Link to={topic.link}>{topic.title}</Link>
        <span className="legal-trending__badge">{topic.views} views</span>
      </li>
    ))}
  </ul>
</div>
```

### 6. Feedback on Articles

```tsx
// Add "Was this helpful?" to article links
<div className="legal-feedback">
  <p>Was this article helpful?</p>
  <div className="legal-feedback__actions">
    <button onClick={() => vote('yes')}>
      <ThumbsUp size={16} /> Yes
    </button>
    <button onClick={() => vote('no')}>
      <ThumbsDown size={16} /> No
    </button>
  </div>
</div>
```

### 7. Estimated Response Times

```tsx
// Show current support wait times
<div className="legal-wait-times">
  <h3>Current Wait Times</h3>
  <dl>
    <dt>Chat:</dt>
    <dd className="legal-wait-times__time--good">~2 min</dd>
    <dt>Email:</dt>
    <dd className="legal-wait-times__time--moderate">~4 hours</dd>
    <dt>Phone:</dt>
    <dd className="legal-wait-times__time--busy">~15 min</dd>
  </dl>
</div>
```

### 8. Language Selector

```tsx
// Multi-language support selector
<div className="legal-language">
  <label htmlFor="help-language">Language:</label>
  <select id="help-language" onChange={(e) => setLanguage(e.target.value)}>
    <option value="en">English</option>
    <option value="es">Español</option>
    <option value="fr">Français</option>
  </select>
</div>
```

### 9. Video Tutorials

```tsx
// Add video tutorial section
<section className="legal-videos">
  <h2>Video Tutorials</h2>
  <div className="legal-videos__grid">
    {videoTutorials.map(video => (
      <div className="legal-video-card">
        <img src={video.thumbnail} alt={video.title} />
        <h3>{video.title}</h3>
        <span className="legal-video-card__duration">{video.duration}</span>
      </div>
    ))}
  </div>
</section>
```

### 10. Community Forum Link

```tsx
// Link to user community
<div className="legal-community">
  <h3>Community Forum</h3>
  <p>Connect with other customers and share tips</p>
  <Link to="/community" className="legal-community__btn">
    <Users size={16} /> Visit Forum
  </Link>
</div>
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero displays correctly (navy gradient)
- [ ] Hero badge shows LifeBuoy icon
- [ ] All 6 category cards display in 3 columns
- [ ] Category icons are cyan circles
- [ ] Gradient heading visible (cyan → pink)
- [ ] All 6 article links display
- [ ] Article icons are BookOpen (cyan)
- [ ] All 3 contact cards display
- [ ] Contact icons are larger (28px)
- [ ] Chat button is cyan (primary)
- [ ] Email/Phone buttons outlined (secondary)

### Interaction Testing

- [ ] All 6 category cards navigate correctly
- [ ] All 6 article links navigate correctly
- [ ] Chat button navigates to /chat
- [ ] Email button opens mailto link
- [ ] Phone button opens tel link
- [ ] Category cards have hover lift effect
- [ ] Article links have hover border effect
- [ ] All buttons have hover effects
- [ ] Tab order is logical
- [ ] All links/buttons have visible focus states

### Responsive Testing

- [ ] Mobile: Category cards 1 column
- [ ] Mobile: Contact cards 1 column
- [ ] Tablet: Category cards 2 columns
- [ ] Tablet: Contact cards 2 columns
- [ ] Desktop: Category cards 3 columns
- [ ] Desktop: Contact cards 3 columns

### Dark Mode Testing

- [ ] Hero maintains readability
- [ ] Category cards have navy background
- [ ] Category icons have cyan glow
- [ ] Gradient heading visible
- [ ] Article links have subtle background
- [ ] Contact cards have navy background
- [ ] Contact icons have cyan glow
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] All icons decorative (aria-hidden)
- [ ] All category cards keyboard accessible
- [ ] All article links keyboard accessible
- [ ] All contact buttons keyboard accessible
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Mailto/tel links have descriptive labels

### Content Testing

- [ ] All 6 categories display
- [ ] All 6 articles display
- [ ] Phone number from company data
- [ ] Email from company data
- [ ] All icons render dynamically
- [ ] Contact availability hours display

---

## Related Templates

- **PageAccessibilityStatement** — Shares category cards pattern
- **PageReturnsPortal** — Similar help/support layout
- **PageFAQ** — Linked from categories

### Shared CSS

- `.legal-hero` — Minimal hero
- `.legal-cards` — Category cards
- `.funky-section__heading--gradient` — Gradient heading

### New CSS Patterns

- `.legal-cards__link-card` — Clickable category cards (3-col)
- `.legal-articles` — Article link list
- `.legal-article-link` — Individual article link with icon
- `.legal-contact-grid` — 3-column contact options
- `.legal-contact-card` — Contact method cards

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready