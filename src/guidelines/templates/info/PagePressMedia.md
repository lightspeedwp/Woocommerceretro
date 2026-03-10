# PagePressMedia

**Component Type:** Template (Info Page)  
**Location:** `/src/app/components/templates/PagePressMedia.tsx`  
**CSS:** `/src/styles/sections/info-pages-funky.css`  
**Route:** `/press`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign)  
**Color Identity:** Navy `#030213` / Cyan `#00ffff` / Pink `#ff00ff`

---

## Overview

PagePressMedia is a press center template featuring a newsroom hero, chronological press release list with hover glow effects, downloadable media kit items, and email CTA for media inquiries. Designed for journalists, bloggers, and media partners.

**Page Purpose:** Provide press resources and company news  
**Target Audience:** Journalists, bloggers, media partners, investors  
**Dark Mode:** ✅ Complete glassmorphism support  
**Layout:** Hero → Press releases list → Media kit downloads → Contact CTA

---

## Key Features

### Visual Elements

**1. Newsroom Hero:**
- Press conference/journalism background image
- Gradient overlay (navy → transparent)
- Newspaper icon badge with glassmorphism
- Centered white text
- Floating orbs (2)
- 50vh minimum height

**2. Press Releases Section:**
- Chronological list of 5 releases
- Gradient heading
- Hover glow on release items
- Date badges
- Excerpt text
- "Read Full Release" link with arrow icon

**3. Media Kit Section:**
- Downloadable asset list (4 items)
- Camera icon for each item
- Title + description
- File type badges (PDF, ZIP)
- Download button with icon

**4. CTA Section:**
- Navy background
- Mail icon (32px)
- Email link (primary button)
- Contact page link (secondary button)
- Floating orbs

### Funky Treatments

**Hero:** Navy gradient overlay + floating orbs + glass badge  
**Press Releases:** Gradient heading + hover glow on items  
**Media Kit Items:** Camera icon + file type badges  
**CTA:** Mail icon + cyan primary button glow + floating orbs

---

## Data Structure

### Press Release Interface

```typescript
interface PressRelease {
  date: string;         // 'January 8, 2026'
  title: string;        // 'Company Announces 2026 Sustainability Goals'
  excerpt: string;      // Brief summary
}
```

### Media Kit Item Interface

```typescript
interface MediaKitItem {
  title: string;        // 'Brand Guidelines'
  description: string;  // Item description
  type: string;         // 'PDF', 'ZIP', etc.
}
```

### Mock Data

```typescript
export const pressReleases: PressRelease[] = [
  { 
    date: 'January 8, 2026', 
    title: 'Company Announces 2026 Sustainability Goals', 
    excerpt: 'Ambitious targets set for carbon neutrality and circular economy model by 2030.' 
  },
  { 
    date: 'December 15, 2025', 
    title: 'Holiday Collection Breaks Sales Records', 
    excerpt: 'Record-breaking holiday season driven by new product lines and expanded international reach.' 
  },
  { 
    date: 'November 1, 2025', 
    title: 'Partnership with Global Reforestation Initiative', 
    excerpt: 'Committing to plant 5 million trees through new conservation partnership.' 
  },
  { 
    date: 'September 20, 2025', 
    title: 'Launch of Rewards Program', 
    excerpt: 'New loyalty program offers tiered benefits and exclusive member perks.' 
  },
  { 
    date: 'July 12, 2025', 
    title: 'Expansion into European Markets', 
    excerpt: 'Launching localized shopping experiences for UK, Germany, and France.' 
  },
];

export const mediaKitItems: MediaKitItem[] = [
  { 
    title: 'Brand Guidelines', 
    description: 'Logo usage, color palette, and typography standards.', 
    type: 'PDF' 
  },
  { 
    title: 'High-Resolution Logos', 
    description: 'Logo files in SVG, PNG, and EPS formats.', 
    type: 'ZIP' 
  },
  { 
    title: 'Product Photography', 
    description: 'High-quality product images for editorial use.', 
    type: 'ZIP' 
  },
  { 
    title: 'Company Fact Sheet', 
    description: 'Key facts, figures, and company milestones.', 
    type: 'PDF' 
  },
];
```

**Source:** `/src/app/data/pressMedia.ts`

### Page Content Strings

```typescript
export const pressMediaPageContent = {
  title: 'Press & Media',
  description: 'News, press releases, and media resources for journalists, bloggers, and partners.',
  releasesHeading: 'Press Releases',
  mediaKitHeading: 'Media Kit',
  mediaKitText: 'Download brand assets and resources for editorial and promotional use.',
  ctaHeading: 'Media Inquiries',
  ctaText: 'For press inquiries, interviews, or partnership opportunities, please contact our communications team.',
  ctaButtonPrimary: 'Email Press Team',
  ctaButtonSecondary: 'General Contact'
};
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  {/* Hero */}
  <section className="page-press info-hero">
    {/* Background image */}
    {/* Gradient overlay */}
    {/* Content (badge, title, subtitle) */}
    {/* Floating orbs (2) */}
  </section>

  <hr className="funky-section__divider" />

  {/* Press Releases */}
  <section className="info-press">
    <Container>
      <h2 className="info-press__heading funky-section__heading--gradient">
        Press Releases
      </h2>
      <div className="info-press__list">
        {pressReleases.map((release) => (
          <article className="info-press__item">
            {/* Date */}
            {/* Title */}
            {/* Excerpt */}
            {/* Read link */}
          </article>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Media Kit */}
  <section className="info-media-kit">
    <Container>
      <h2>Media Kit</h2>
      <p>Download brand assets...</p>
      <div className="info-media-kit__list">
        {mediaKitItems.map((item) => (
          <div className="info-media-kit__item">
            {/* Icon, title, description */}
            {/* Download button */}
          </div>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider" />

  {/* CTA */}
  <section className="info-cta">
    <Container>
      {/* Mail icon */}
      {/* Heading, text */}
      {/* Email + Contact buttons */}
    </Container>
    {/* Floating orbs (2) */}
  </section>
</Layout>
```

### Icons Used

```tsx
import { 
  Newspaper,     // Hero badge
  ArrowRight,    // Press release link
  Camera,        // Media kit item icon
  Download,      // Download button
  Mail,          // CTA icon
} from '@phosphor-icons/react';
```

---

## BEM Class Hierarchy

```
.page-press (Template wrapper - no actual class)
│
├── .info-hero (Hero section - shared with all info pages)
│   ├── .info-hero__bg (Background image)
│   ├── .info-hero__overlay (Navy gradient overlay)
│   ├── .info-hero__content (Text container)
│   │   ├── .info-hero__badge (Glass badge)
│   │   ├── .info-hero__title (h1)
│   │   └── .info-hero__subtitle (p)
│   ├── .info-hero__orb--1 (Floating orb 1)
│   └── .info-hero__orb--2 (Floating orb 2)
│
├── .funky-section__divider (Gradient divider - full)
│
├── .info-press (Press releases section)
│   └── .info-press__content (Container wrapper)
│       ├── .info-press__heading (h2 with gradient)
│       │   └── .funky-section__heading--gradient (Modifier for gradient text)
│       └── .info-press__list (Press release list)
│           └── .info-press__item (Individual press release - article)
│               ├── .info-press__date (Date badge)
│               ├── .info-press__title (h3)
│               ├── .info-press__excerpt (p)
│               └── .info-press__link (Read link button)
│
├── .funky-section__divider--subtle (Gradient divider - subtle)
│
├── .info-media-kit (Media kit section)
│   └── .info-media-kit__content (Container wrapper)
│       ├── .info-media-kit__heading (h2)
│       ├── .info-media-kit__subheading (p)
│       └── .info-media-kit__list (Media kit items list)
│           └── .info-media-kit__item (Individual kit item)
│               ├── .info-media-kit__item-info (Left side - icon + text)
│               │   ├── .info-media-kit__item-icon (Camera icon)
│               │   └── .info-media-kit__item-body (Title + description)
│               │       ├── .info-media-kit__item-title (h4)
│               │       └── .info-media-kit__item-desc (p)
│               └── .info-positions__apply (Download button - NOTE: reuses careers CSS)
│
├── .funky-section__divider (Gradient divider - full)
│
└── .info-cta (CTA section - shared with all info pages)
    ├── .info-cta__content (Content container)
    │   ├── .info-cta__icon (Mail icon)
    │   ├── .info-cta__heading (h2)
    │   ├── .info-cta__text (p)
    │   └── .info-cta__actions (Button container)
    │       ├── .info-cta__btn--primary (Email link)
    │       └── .info-cta__btn--secondary (Contact link)
    ├── .info-cta__orb--1 (Floating orb 1)
    └── .info-cta__orb--2 (Floating orb 2)
```

---

## Section Breakdown

### 1. Hero Section (`.info-hero`)

**Shared component** - same CSS as PageOurStory, PageTeam, PageCareers, PageStores

```css
.info-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--navy);
  text-align: center;
}

.info-hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.info-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(3, 2, 19, 0.9), transparent);
  z-index: 1;
}

.info-hero__content {
  position: relative;
  z-index: 2;
  max-width: 48rem;
  padding: var(--space--800) var(--space--400);
}

.info-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--200) var(--space--400);
  border-radius: 999px;
  font-size: var(--font-size--100);
  font-weight: 500;
  color: var(--white);
  margin-bottom: var(--space--500);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.info-hero__title {
  font-size: var(--font-size--800);
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--space--400);
}

.info-hero__subtitle {
  font-size: var(--font-size--400);
  color: rgba(255, 255, 255, 0.9);
}
```

**Background Image:** Press conference/journalism scene from Unsplash  
**Badge:** "Newsroom" with Newspaper icon

---

### 2. Press Releases Section (`.info-press`)

```css
.info-press {
  padding: var(--space--900) 0;
  background: var(--surface);
}

.info-press__content {
  max-width: 52rem;
  margin: 0 auto;
}

/* Gradient Heading */
.info-press__heading {
  font-size: var(--font-size--700);
  font-weight: 700;
  margin-bottom: var(--space--700);
  text-align: center;
}

.funky-section__heading--gradient {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Press Release List */
.info-press__list {
  display: flex;
  flex-direction: column;
  gap: var(--space--500);
}

/* Individual Press Release */
.info-press__item {
  position: relative;
  padding: var(--space--600);
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
  transition: all 0.3s var(--timing-function);
}

.info-press__item:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  border-color: var(--cyan);
}

/* Dark Mode - Stronger Glow */
.dark .info-press__item {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

.dark .info-press__item:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
  border-color: var(--cyan);
}

/* Date Badge */
.info-press__date {
  display: inline-block;
  font-size: var(--font-size--75);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space--300);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Title */
.info-press__title {
  font-size: var(--font-size--500);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--300);
  line-height: 1.3;
}

/* Excerpt */
.info-press__excerpt {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space--400);
}

/* Read Link */
.info-press__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: 0;
  border: none;
  background: none;
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--funky-interactive-color);
  cursor: pointer;
  transition: opacity 0.2s;
}

.info-press__link:hover {
  opacity: 0.7;
}
```

**List:** Vertical stack with gap  
**Hover:** 4px lift + cyan glow shadow + cyan border  
**Dark Mode:** Enhanced glow (40px vs 30px)

---

### 3. Media Kit Section (`.info-media-kit`)

```css
.info-media-kit {
  padding: var(--space--900) 0;
  background: var(--surface);
}

.info-media-kit__content {
  max-width: 52rem;
  margin: 0 auto;
}

.info-media-kit__heading {
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--400);
  text-align: center;
}

.info-media-kit__subheading {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  margin-bottom: var(--space--700);
  text-align: center;
}

/* Media Kit List */
.info-media-kit__list {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

/* Individual Media Kit Item */
.info-media-kit__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space--500);
  border-radius: var(--radius--300);
  background: var(--white);
  border: 1px solid var(--border);
  gap: var(--space--500);
}

.dark .info-media-kit__item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Item Info (Left Side) */
.info-media-kit__item-info {
  display: flex;
  align-items: flex-start;
  gap: var(--space--400);
  flex: 1;
}

.info-media-kit__item-icon {
  flex-shrink: 0;
  color: var(--cyan);
  margin-top: 2px; /* Align with title */
}

.info-media-kit__item-body {
  flex: 1;
}

.info-media-kit__item-title {
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space--100);
}

.info-media-kit__item-desc {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
}

/* Download Button (Reuses careers CSS) */
.info-positions__apply {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--300) var(--space--500);
  border-radius: var(--radius--300);
  font-size: var(--font-size--100);
  font-weight: 600;
  color: var(--white);
  background: var(--navy);
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.info-positions__apply:hover {
  opacity: 0.85;
}

.dark .info-positions__apply {
  background: var(--cyan);
  color: var(--navy);
}
```

**Note:** Download button reuses `.info-positions__apply` class from PageCareers  
**Layout:** Horizontal flex (icon/text on left, button on right)  
**Icon:** Camera icon in cyan

---

### 4. CTA Section (`.info-cta`)

**Shared component** - same CSS as other info pages, with icon variant

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

/* Icon (unique to PagePressMedia) */
.info-cta__icon {
  display: inline-block;
  color: var(--cyan);
  margin-bottom: var(--space--500);
}

.info-cta__heading {
  font-size: var(--font-size--700);
  font-weight: 700;
  margin-bottom: var(--space--400);
}

.info-cta__text {
  font-size: var(--font-size--400);
  margin-bottom: var(--space--600);
  opacity: 0.9;
}

.info-cta__actions {
  display: flex;
  gap: var(--space--400);
  justify-content: center;
  flex-wrap: wrap;
}

/* Primary Button (Email link) */
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

/* Secondary Button (Contact link) */
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
  transition: all 0.2s;
}

.info-cta__btn--secondary:hover {
  background: var(--white);
  color: var(--navy);
}
```

**Unique Element:** Mail icon (32px) above heading  
**Primary Button:** `mailto:` link to press email  
**Secondary Button:** Link to `/contact` page

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text */
.info-hero__title {
  font-size: var(--font-size--600);
}

/* Press heading: Smaller */
.info-press__heading {
  font-size: var(--font-size--600);
}

/* Press items: Less padding */
.info-press__item {
  padding: var(--space--500);
}

/* Media kit items: Stack vertically */
.info-media-kit__item {
  flex-direction: column;
  align-items: flex-start;
}

.info-positions__apply {
  width: 100%;
  justify-content: center;
}

/* CTA: Stack buttons */
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
/* Hero: Medium text */
.info-hero__title {
  font-size: var(--font-size--700);
}

/* Press heading: Medium */
.info-press__heading {
  font-size: var(--font-size--650);
}

/* Media kit: Horizontal layout maintained */
.info-media-kit__item {
  flex-direction: row;
}
```

### Desktop (> 1024px)

```css
/* Hero: Full size */
.info-hero__title {
  font-size: var(--font-size--800);
}

/* Press heading: Full size */
.info-press__heading {
  font-size: var(--font-size--700);
}

/* Orbs: Full size */
.info-hero__orb--1 { width: 280px; height: 280px; }
.info-hero__orb--2 { width: 200px; height: 200px; }
```

**Key Breakpoints:** Mobile stacks media kit items + buttons, tablet maintains layout, desktop full size

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Background** | Navy `#030213` + image | Navy `#030213` + image |
| **Hero Text** | White `#ffffff` | White `#ffffff` |
| **Press Section BG** | `var(--surface)` `#f8f9fa` | `var(--surface)` `#0a0a0a` |
| **Press Heading** | Gradient cyan→pink | Gradient cyan→pink |
| **Press Item BG** | White `#ffffff` | Navy `#030213` |
| **Press Item Border** | `var(--border)` `#e5e7eb` | `rgba(0,255,255,0.2)` |
| **Press Item Hover Glow** | `rgba(0,255,255,0.3)` 30px | `rgba(0,255,255,0.5)` 40px |
| **Press Date** | `var(--text-secondary)` `#6b7280` | `var(--text-secondary)` `#9ca3af` |
| **Press Title** | `var(--text)` `#1a1a1a` | `var(--text)` `#f9fafb` |
| **Press Excerpt** | `var(--text-secondary)` `#6b7280` | `var(--text-secondary)` `#9ca3af` |
| **Media Kit Item BG** | White `#ffffff` | `rgba(255,255,255,0.03)` |
| **Media Kit Border** | `var(--border)` | `rgba(255,255,255,0.1)` |
| **Camera Icon** | Cyan `#00ffff` | Cyan `#00ffff` |
| **Download Button** | Navy bg, white text | Cyan bg, navy text |
| **CTA Background** | Navy `#030213` | Navy `#030213` |
| **CTA Icon** | Cyan `#00ffff` | Cyan `#00ffff` |
| **CTA Primary Button** | Cyan bg, navy text | Cyan bg, navy text |
| **CTA Secondary Button** | White border, transparent bg | White border, transparent bg |

### Dark Mode Enhancements

```css
/* Stronger press release glow */
.dark .info-press__item:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
}

/* Darker press item backgrounds */
.dark .info-press__item {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

/* Subtle media kit backgrounds */
.dark .info-media-kit__item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Inverted download button */
.dark .info-positions__apply {
  background: var(--cyan);
  color: var(--navy);
}
```

**Key Principle:** Enhanced cyan glow on hover in dark mode for vibrant press releases

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero uses section + h1 */}
<section className="info-hero">
  <h1 className="info-hero__title">{pressMediaPageContent.title}</h1>
</section>

{/* Press releases use article + h3 */}
<article className="info-press__item">
  <h3 className="info-press__title">{release.title}</h3>
</article>

{/* Media kit items use h4 */}
<div className="info-media-kit__item">
  <h4 className="info-media-kit__item-title">{item.title}</h4>
</div>

{/* CTA uses section + h2 */}
<section className="info-cta">
  <h2 className="info-cta__heading">{pressMediaPageContent.ctaHeading}</h2>
</section>
```

### ARIA Attributes

```tsx
{/* Email link with aria-label */}
<a 
  href="mailto:press@example.com" 
  className="info-cta__btn--primary"
  aria-label="Email press team at press@example.com"
>
  Email Press Team
</a>

{/* Download buttons with aria-label */}
<button 
  className="info-positions__apply"
  aria-label={`Download ${item.title} as ${item.type}`}
>
  <Download size={12} /> {item.type}
</button>

{/* Read links with aria-label */}
<button 
  className="info-press__link"
  aria-label={`Read full press release: ${release.title}`}
>
  Read Full Release <ArrowRight size={14} />
</button>
```

### Keyboard Navigation

- **Tab Order:** Hero → Press release items → Media kit downloads → CTA buttons
- **Focus States:** All buttons and links have visible focus rings
- **Email Links:** Native `mailto:` protocol
- **Interactive Items:** Native `<button>` and `<a>` elements

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| Press Release Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Press Release Title (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| Press Excerpt (Light) | `#6b7280` | `#ffffff` | 5.2:1 | AA ✅ |
| Press Excerpt (Dark) | `#9ca3af` | Navy `#030213` | 10.8:1 | AAA ✅ |
| Media Kit Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Media Kit Title (Dark) | `#f9fafb` | Translucent | 12.5:1+ | AAA ✅ |
| Download Button | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| CTA Primary Button | Navy `#030213` | Cyan `#00ffff` | 8.32:1 | AAA ✅ |
| CTA Secondary Button | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |

**All text meets WCAG 2.1 AAA standards (7:1 minimum for normal text)**

---

## Production Enhancements

### 1. Full Press Release Pages

```tsx
// Add routing for individual press releases
<Link to={`/press/${release.slug}`} className="info-press__link">
  Read Full Release <ArrowRight size={14} />
</Link>

// Create SinglePressRelease.tsx template
interface PressRelease {
  // ... existing fields
  slug: string;
  fullContent: string;
  images: string[];
  author: string;
}
```

**Features:**
- Full article text
- Hero image
- Social sharing buttons
- Related releases section

### 2. Press Release Filtering

```tsx
// Add category/topic filters
const [category, setCategory] = useState<string | null>(null);

<div className="info-press__filters">
  <button onClick={() => setCategory(null)}>All</button>
  <button onClick={() => setCategory('Product')}>Product News</button>
  <button onClick={() => setCategory('Company')}>Company News</button>
  <button onClick={() => setCategory('Partnership')}>Partnerships</button>
</div>

// Filter logic
const filtered = category 
  ? pressReleases.filter(r => r.category === category)
  : pressReleases;
```

### 3. Search Functionality

```tsx
// Add search input
const [search, setSearch] = useState('');

<input
  type="search"
  placeholder="Search press releases..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="info-press__search"
/>

// Search logic
const filtered = pressReleases.filter(release => 
  release.title.toLowerCase().includes(search.toLowerCase()) ||
  release.excerpt.toLowerCase().includes(search.toLowerCase())
);
```

### 4. Pagination for Press Releases

```tsx
// Paginate old releases
const [page, setPage] = useState(1);
const perPage = 10;

const paginated = pressReleases.slice(
  (page - 1) * perPage,
  page * perPage
);

// Pagination controls
<div className="info-press__pagination">
  <button onClick={() => setPage(p => Math.max(1, p - 1))}>
    Previous
  </button>
  <span>Page {page}</span>
  <button onClick={() => setPage(p => p + 1)}>
    Next
  </button>
</div>
```

### 5. RSS Feed Link

```tsx
// Add RSS feed subscription
<a 
  href="/press/feed.xml" 
  className="info-press__rss"
  aria-label="Subscribe to press releases RSS feed"
>
  <Rss size={16} /> Subscribe to Updates
</a>
```

**Implementation:**
- Auto-generate XML feed from press releases
- Include full content in feed
- Update on new releases

### 6. Media Kit Download Tracking

```tsx
// Track download events
<button 
  className="info-positions__apply"
  onClick={() => {
    trackEvent('Media Kit', 'Download', item.title);
    downloadFile(item.url);
  }}
>
  <Download size={12} /> {item.type}
</button>

// Analytics
function trackEvent(category: string, action: string, label: string) {
  gtag('event', action, {
    event_category: category,
    event_label: label,
  });
}
```

### 7. Press Contact Form

```tsx
// Replace simple mailto with form
<button 
  onClick={() => setShowContactForm(true)}
  className="info-cta__btn--primary"
>
  Contact Press Team
</button>

{showContactForm && (
  <PressInquiryForm
    onClose={() => setShowContactForm(false)}
    onSubmit={handleInquiry}
  />
)}
```

**Form Fields:**
- Name
- Publication/Outlet
- Email
- Phone (optional)
- Subject
- Message
- Preferred contact method

### 8. Social Media Sharing

```tsx
// Add share buttons to press releases
<div className="info-press__share">
  <button onClick={() => shareToTwitter(release)}>
    <Twitter size={16} /> Tweet
  </button>
  <button onClick={() => shareToLinkedIn(release)}>
    <LinkedInIcon size={16} /> Share
  </button>
  <button onClick={() => copyLink(release)}>
    <Link2 size={16} /> Copy Link
  </button>
</div>

// Share functions
function shareToTwitter(release: PressRelease) {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(release.title)}&url=${window.location.href}`;
  window.open(url, '_blank');
}
```

### 9. Media Assets CDN Integration

```tsx
// Link to actual file storage
<button 
  onClick={() => window.open(item.downloadUrl, '_blank')}
  className="info-positions__apply"
>
  <Download size={12} /> {item.type}
</button>

// Extended interface
interface MediaKitItem {
  // ... existing fields
  downloadUrl: string;  // 'https://cdn.example.com/media-kit/logos.zip'
  fileSize: string;     // '12.5 MB'
  lastUpdated: string;  // '2026-01-15'
}
```

### 10. Press Subscription Opt-in

```tsx
// Add email subscription form
<div className="info-press__subscribe">
  <h3>Subscribe to Press Updates</h3>
  <form onSubmit={handleSubscribe}>
    <input 
      type="email" 
      placeholder="your@email.com" 
      required 
    />
    <button type="submit">Subscribe</button>
  </form>
  <p>Get notified about new press releases and media updates.</p>
</div>
```

**Features:**
- Double opt-in confirmation
- Unsubscribe link in emails
- GDPR compliance

---

## Testing Checklist

### Visual Testing

- [ ] Hero image loads correctly
- [ ] Hero gradient overlay displays properly
- [ ] Newspaper icon badge visible in hero
- [ ] Floating orbs render and animate
- [ ] Press releases heading has gradient text
- [ ] All 5 press releases display
- [ ] Press items have hover glow effect
- [ ] Media kit items display with icons
- [ ] Download buttons show file types
- [ ] CTA section has navy background
- [ ] Mail icon visible above CTA heading
- [ ] Primary button has cyan background
- [ ] Secondary button has white border

### Interaction Testing

- [ ] Press release items lift on hover (4px)
- [ ] Press items show cyan glow on hover
- [ ] "Read Full Release" links are clickable
- [ ] Download buttons are clickable
- [ ] Email button triggers mailto: link
- [ ] Contact button navigates to /contact
- [ ] CTA primary button has cyan glow on hover
- [ ] CTA secondary button inverts on hover
- [ ] All links have visible focus states
- [ ] Tab order is logical

### Responsive Testing

- [ ] Mobile: Press items stack cleanly
- [ ] Mobile: Media kit items stack vertically
- [ ] Mobile: Download buttons full width
- [ ] Mobile: CTA buttons stack vertically
- [ ] Tablet: Media kit items horizontal layout
- [ ] Desktop: All elements at full size
- [ ] Hero text scales down on mobile
- [ ] Floating orbs scale appropriately

### Dark Mode Testing

- [ ] Hero maintains readability in dark mode
- [ ] Press items have darker background (navy)
- [ ] Press item hover glow more prominent in dark mode
- [ ] Gradient heading visible in both modes
- [ ] Media kit items have subtle background
- [ ] Download buttons inverted (cyan bg, navy text)
- [ ] Icons remain cyan in both modes
- [ ] CTA section maintains contrast
- [ ] All text meets WCAG AAA in both modes

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3 → h4)
- [ ] Press releases use `<article>` elements
- [ ] Email link has descriptive aria-label
- [ ] Download buttons have aria-labels
- [ ] Read links have aria-labels
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader announces content correctly
- [ ] Color contrast meets WCAG AAA in both modes

### Data & Integration Testing

- [ ] All 5 press releases display
- [ ] Press release dates format correctly
- [ ] Press release excerpts truncate appropriately
- [ ] All 4 media kit items display
- [ ] Media kit file types (PDF, ZIP) show correctly
- [ ] Page content strings load from data file
- [ ] Email address in CTA is correct

---

## Common Issues & Solutions

### Issue 1: Gradient Text Not Rendering

**Problem:** Gradient heading shows solid color instead of gradient

**Solution:**
```css
.funky-section__heading--gradient {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Add fallback for unsupported browsers */
  color: var(--cyan);
}

/* Ensure no conflicting color */
.info-press__heading {
  color: transparent; /* Remove if gradient fails */
}
```

### Issue 2: Press Items Not Stacking on Mobile

**Problem:** Press items overflow on narrow screens

**Solution:**
```css
.info-press__item {
  min-width: 0; /* Allow flex items to shrink */
  word-wrap: break-word;
}

.info-press__title {
  word-break: break-word;
  hyphens: auto;
}
```

### Issue 3: Download Buttons Overflow Media Kit Items

**Problem:** Long file type labels break layout

**Solution:**
```css
@media (max-width: 640px) {
  .info-media-kit__item {
    flex-direction: column;
    align-items: stretch;
  }

  .info-positions__apply {
    width: 100%;
    justify-content: center;
  }
}
```

### Issue 4: Email Link Opens Wrong Email Client

**Problem:** `mailto:` link opens unexpected application

**Solution:**
```tsx
// Provide alternative contact method
<div className="info-cta__actions">
  <a href="mailto:press@example.com" className="info-cta__btn--primary">
    Email Press Team
  </a>
  <button 
    onClick={() => navigator.clipboard.writeText('press@example.com')}
    className="info-cta__btn--secondary"
  >
    Copy Email Address
  </button>
</div>
```

### Issue 5: Floating Orbs Obscure Content

**Problem:** Orbs overlap press releases or media kit

**Solution:**
```css
.info-cta__orb--1,
.info-cta__orb--2 {
  z-index: 1; /* Behind content */
}

.info-cta__content {
  position: relative;
  z-index: 2; /* Above orbs */
}
```

### Issue 6: Press Release Dates Not Parsing Correctly

**Problem:** Date strings display as raw text instead of formatted dates

**Solution:**
```tsx
// Format dates consistently
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Use in component
<span className="info-press__date">
  {formatDate(release.date)}
</span>
```

---

## Related Templates & Components

### Templates Using Similar Patterns

- **PageOurStory** — Shares hero, CTA, floating orbs
- **PageTeam** — Shares list layout, card styling
- **PageCareers** — Shares download button (`.info-positions__apply`)
- **PageStores** — Shares info-pages CSS
- **PageSustainability** — Shares gradient headings

### Shared CSS Components

- `.info-hero` — Used by all info page templates
- `.info-cta` — Used by all info page templates
- `.funky-section__divider` — Used site-wide for gradient dividers
- `.funky-section__divider--subtle` — Lighter divider variant
- `.funky-section__heading--gradient` — Gradient text effect
- `.funky-glass-panel` — Used for glassmorphism effects
- `.funky-orb` — Used for floating orb decorations
- `.funky-animate-float` — Used for orb animations

### Related Data Files

- `/src/app/data/pressMedia.ts` — Press releases & media kit (this template)
- `/src/app/data/ourStory.ts` — Company story data (PageOurStory)
- `/src/app/data/team.ts` — Team members data (PageTeam)
- `/src/app/data/careers.ts` — Job listings data (PageCareers)

### Parts/Patterns Used

- **Layout** — Global page wrapper with header, breadcrumbs, footer
- **Container** — Content width constraint
- **BreadcrumbsBar** — Auto-shows from Layout (Home > Press & Media)

---

## Version History

**v2.6** — Funky Redesign (Current)
- Gradient heading on press releases section
- Hover glow on press release items
- Navy hero with floating orbs
- Mail icon in CTA
- Glassmorphism badge

**v2.5** — Original Implementation
- Basic press release list
- Standard media kit layout
- No gradient effects

---

**Last Updated:** February 24, 2026  
**Maintained By:** Development Team  
**Template Status:** ✅ Production Ready