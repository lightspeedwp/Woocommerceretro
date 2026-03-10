# PageOurStory

**Component Type:** Template (Info Page)  
**Location:** `/src/app/components/templates/PageOurStory.tsx`  
**CSS:** `/src/styles/sections/info-pages-funky.css`  
**Route:** `/about/our-story`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign)  
**Color Identity:** Navy `#030213` / Cyan `#00ffff` / Pink `#ff00ff`

---

## Overview

PageOurStory is a comprehensive company narrative template featuring a navy hero with floating orbs, mission statement, value cards with gradient glow, gradient-connected timeline, and commerce-focused CTA section.

**Page Purpose:** Tell the company's origin story and values  
**Target Audience:** New customers, job seekers, partners  
**Dark Mode:** ✅ Complete glassmorphism support  
**Layout:** Linear narrative flow (hero → mission → values → timeline → CTA)

---

## Key Features

### Visual Elements

**1. Navy Hero Section:**
- Background image with gradient overlay
- Centered text with badge ("Our Journey")
- White text on dark background
- Floating orbs (280px + 200px)
- 50vh minimum height

**2. Mission Section:**
- Centered narrow content (max-width: 42rem)
- Gradient heading
- Large body text (--font-size--400)

**3. Value Cards:**
- 2-column responsive grid
- Glassmorphism cards with gradient glow
- Gradient icon circles
- Hover lift effect (4px)
- Cyan glow shadow in dark mode

**4. Timeline:**
- Vertical gradient connector line
- Glow markers (cyan gradient)
- Year badges
- Left-aligned content (max-width: 42rem)

**5. CTA Section:**
- Navy background
- White text
- Primary button (cyan glow)
- Secondary button (bordered)
- Floating orbs

### Funky Treatments

**Hero:** Navy overlay + floating orbs  
**Values Cards:** Gradient glow border + lift on hover  
**Icon Circles:** Cyan → Pink gradient  
**Timeline:** Gradient connector line  
**CTA:** Cyan button glow + floating orbs

---

## Data Structure

### Story Milestones (Timeline)

```typescript
interface StoryMilestone {
  year: string;         // '2015', '2017', etc.
  title: string;        // 'The Beginning'
  description: string;  // Milestone description
}

const storyMilestones: StoryMilestone[] = [
  { year: '2015', title: 'The Beginning', description: '...' },
  { year: '2017', title: 'First 10,000 Customers', description: '...' },
  // 6 total milestones
];
```

### Story Values (Cards)

```typescript
interface StoryValue {
  icon: string;         // 'Heart', 'Globe', 'Users', 'Award'
  title: string;        // 'Craftsmanship'
  description: string;  // Value description
}

const storyValues: StoryValue[] = [
  { icon: 'Heart', title: 'Craftsmanship', description: '...' },
  { icon: 'Globe', title: 'Sustainability', description: '...' },
  { icon: 'Users', title: 'Community', description: '...' },
  { icon: 'Award', title: 'Integrity', description: '...' },
];
```

### Page Content

```typescript
const ourStoryPageContent = {
  title: 'Our story',
  description: 'From humble beginnings...',
  missionHeading: 'Our mission',
  missionText: 'We believe that exceptional products...',
  valuesHeading: 'What we stand for',
  journeyHeading: 'Our journey',
  ctaHeading: 'Join our story',
  ctaText: 'Discover our latest collections...',
  ctaButtonPrimary: 'Shop Now',
  ctaButtonSecondary: 'Meet the Team'
};
```

**Data File:** `/src/app/data/ourStory.ts`

---

## Component Structure

### Icon Mapping

```typescript
const valueIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'Heart': Heart,
  'Globe': Globe,
  'Users': Users,
  'Award': Award,
};
```

Maps string icon names to Lucide React components.

### JSX Hierarchy

```tsx
<Layout>
  
  {/* 1. Hero */}
  <section className="page-story info-hero">
    <img src="..." className="info-hero__bg" />
    <div className="info-hero__overlay" />
    <div className="info-hero__content">
      <span className="info-hero__badge funky-glass-panel">
        <BookOpen size={14} />
        Our Journey
      </span>
      <h1 className="info-hero__title">{title}</h1>
      <p className="info-hero__subtitle">{description}</p>
    </div>
    <div className="info-hero__orb--1 funky-orb funky-animate-float" />
    <div className="info-hero__orb--2 funky-orb funky-animate-float" />
  </section>
  
  <hr className="funky-section__divider" />
  
  {/* 2. Mission */}
  <section className="info-story">
    <Container>
      <div className="info-story__content">
        <h2 className="info-story__title funky-section__heading--gradient">
          {missionHeading}
        </h2>
        <p className="info-story__text info-story__text--lg">
          {missionText}
        </p>
      </div>
    </Container>
  </section>
  
  <hr className="funky-section__divider--subtle" />
  
  {/* 3. Values */}
  <section className="info-cards info-cards--alt">
    <Container>
      <div className="info-cards__content info-cards__content--lg">
        <h2 className="info-cards__heading">{valuesHeading}</h2>
        <div className="info-cards__grid info-cards__grid--2col">
          {storyValues.map((value, i) => {
            const Icon = valueIcons[value.icon] || Heart;
            return (
              <div key={i} className="info-cards__card">
                <div className="info-cards__card-glow" />
                <div className="info-cards__card-inner">
                  <span className="info-cards__icon-circle">
                    <Icon size={22} />
                  </span>
                  <h3 className="info-cards__card-title">{value.title}</h3>
                  <p className="info-cards__card-text">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
  
  <hr className="funky-section__divider" />
  
  {/* 4. Timeline */}
  <section className="info-timeline">
    <Container>
      <div className="info-timeline__content">
        <h2 className="info-timeline__heading funky-section__heading--gradient">
          {journeyHeading}
        </h2>
        <div className="info-timeline__list">
          {storyMilestones.map((milestone, i) => (
            <div key={i} className="info-timeline__item">
              <div className="info-timeline__marker" />
              <div className="info-timeline__item-body">
                <span className="info-timeline__year">{milestone.year}</span>
                <h3 className="info-timeline__title">{milestone.title}</h3>
                <p className="info-timeline__text">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
  
  <hr className="funky-section__divider" />
  
  {/* 5. CTA */}
  <section className="info-cta">
    <Container>
      <div className="info-cta__content">
        <h2 className="info-cta__heading">{ctaHeading}</h2>
        <p className="info-cta__text">{ctaText}</p>
        <div className="info-cta__actions">
          <Link to="/shop" className="info-cta__btn--primary">
            {ctaButtonPrimary}
          </Link>
          <Link to="/about/team" className="info-cta__btn--secondary">
            {ctaButtonSecondary}
          </Link>
        </div>
      </div>
    </Container>
    <div className="info-cta__orb--1 funky-orb funky-animate-float" />
    <div className="info-cta__orb--2 funky-orb funky-animate-float" />
  </section>
  
</Layout>
```

---

## BEM Class Hierarchy

```
page-story (page class, not styled)
├── info-hero (hero section)
│   ├── info-hero__bg (background image)
│   ├── info-hero__overlay (gradient overlay)
│   ├── info-hero__content (centered content)
│   │   ├── info-hero__badge (glass badge)
│   │   ├── info-hero__title (h1)
│   │   └── info-hero__subtitle (description)
│   ├── info-hero__orb--1 (large floating orb)
│   └── info-hero__orb--2 (small floating orb)

info-story (mission section)
└── info-story__content (narrow centered content)
    ├── info-story__title (gradient heading)
    └── info-story__text--lg (large body text)

info-cards--alt (values section)
└── info-cards__content--lg (content wrapper)
    ├── info-cards__heading (section heading)
    └── info-cards__grid--2col (2-column grid)
        └── info-cards__card (value card)
            ├── info-cards__card-glow (gradient border)
            └── info-cards__card-inner (card content)
                ├── info-cards__icon-circle (gradient circle)
                ├── info-cards__card-title (h3)
                └── info-cards__card-text (description)

info-timeline (timeline section)
└── info-timeline__content (content wrapper)
    ├── info-timeline__heading (gradient heading)
    └── info-timeline__list (timeline container)
        └── info-timeline__item (milestone)
            ├── info-timeline__marker (glow dot)
            └── info-timeline__item-body (content)
                ├── info-timeline__year (year badge)
                ├── info-timeline__title (milestone title)
                └── info-timeline__text (description)

info-cta (CTA section)
├── info-cta__content (centered content)
│   ├── info-cta__heading (h2)
│   ├── info-cta__text (description)
│   └── info-cta__actions (button row)
│       ├── info-cta__btn--primary (shop button)
│       └── info-cta__btn--secondary (team button)
├── info-cta__orb--1 (large orb)
└── info-cta__orb--2 (small orb)
```

**Total BEM Classes:** 28

---

## Section Breakdown

### 1. Hero Section

**Container:**
```css
.info-hero {
  position: relative;
  min-height: 50vh;
  min-height: 50dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

@media (max-width: 767px) {
  .info-hero {
    min-height: 40vh;
    min-height: 40dvh;
  }
}
```

**Background Image:**
```css
.info-hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

**Gradient Overlay (Navy Tint):**
```css
.info-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(3, 2, 19, 0.75),    /* Navy #030213 */
    rgba(45, 0, 89, 0.65)    /* Purple #2d0059 */
  );
  z-index: 1;
}

.dark .info-hero__overlay {
  background: linear-gradient(
    135deg,
    rgba(3, 2, 19, 0.85),
    rgba(45, 0, 89, 0.75)
  );
}
```

**Effect:** Creates dark, branded overlay over background image.

---

**Content (Centered):**
```css
.info-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 48rem;  /* 768px */
  padding-inline: var(--wp--preset--spacing--40);
  padding-block: var(--wp--preset--spacing--70);
}

@media (max-width: 767px) {
  .info-hero__content {
    padding: var(--wp--preset--spacing--50) var(--wp--preset--spacing--30);
  }
}
```

**Badge (Glassmorphism):**
```css
.info-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  padding: var(--wp--preset--spacing--10) var(--wp--preset--spacing--30);
  font-size: var(--wp--preset--font-size--100);
  font-weight: var(--wp--preset--font-weight--medium);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--wp--preset--spacing--30);
}

.funky-glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--wp--preset--border-radius--md);
}
```

**JSX:**
```tsx
<span className="info-hero__badge funky-glass-panel">
  <BookOpen size={14} />
  Our Journey
</span>
```

**Effect:** Small glass badge with BookOpen icon and label.

---

**Title:**
```css
.info-hero__title {
  font-size: var(--wp--preset--font-size--800);  /* 2.5rem → 4rem */
  font-weight: var(--wp--preset--font-weight--bold);
  line-height: var(--wp--preset--line-height--tight);
  color: #ffffff;
  margin-bottom: var(--wp--preset--spacing--30);
}
```

**Subtitle:**
```css
.info-hero__subtitle {
  font-size: var(--wp--preset--font-size--400);  /* 1rem → 1.25rem */
  color: rgba(255, 255, 255, 0.85);
  line-height: var(--wp--preset--line-height--relaxed);
  max-width: 36rem;
  margin-inline: auto;
}
```

---

**Floating Orbs:**
```css
.info-hero__orb--1 {
  width: 280px;
  height: 280px;
  top: 10%;
  right: -5%;
  opacity: 0.12;
  z-index: 0;
}

.info-hero__orb--2 {
  width: 200px;
  height: 200px;
  bottom: 10%;
  left: 5%;
  opacity: 0.1;
  z-index: 0;
}

.dark .info-hero__orb--1 { opacity: 0.25; }
.dark .info-hero__orb--2 { opacity: 0.2; }

@media (max-width: 767px) {
  .info-hero__orb--1,
  .info-hero__orb--2 { opacity: 0.06; }
  
  .dark .info-hero__orb--1 { opacity: 0.1; }
  .dark .info-hero__orb--2 { opacity: 0.08; }
}
```

**Orb Classes:**
- `.funky-orb` — Base orb styles (gradient background)
- `.funky-animate-float` — Floating animation

**Effect:** Large gradient orbs float in background, more visible in dark mode.

---

### 2. Mission Section

**Container:**
```css
.info-story {
  padding-block: var(--wp--preset--spacing--80);
  background: var(--wp--preset--color--background);
}
```

**Content (Narrow Centered):**
```css
.info-story__content {
  max-width: 42rem;  /* 672px */
  margin-inline: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}
```

**Gradient Heading:**
```css
.info-story__title {
  font-size: var(--wp--preset--font-size--700);
  font-weight: var(--wp--preset--font-weight--bold);
  margin-bottom: var(--wp--preset--spacing--20);
  color: var(--wp--preset--color--foreground);
}

.funky-section__heading--gradient {
  background: linear-gradient(135deg,
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-pink)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Large Body Text:**
```css
.info-story__text {
  font-size: var(--wp--preset--font-size--300);
  color: var(--wp--preset--color--muted-foreground);
  line-height: var(--wp--preset--line-height--relaxed);
}

.info-story__text--lg {
  font-size: var(--wp--preset--font-size--400);  /* Larger */
}
```

**Effect:** Centered mission statement with gradient heading.

---

### 3. Value Cards Section

**Container:**
```css
.info-cards {
  position: relative;
  overflow: hidden;
  padding-block: var(--wp--preset--spacing--80);
}

.info-cards--alt {
  background: var(--wp--preset--gradient--accent-soft);
}

.dark .info-cards--alt {
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.02),  /* Pink */
    rgba(0, 255, 255, 0.02)   /* Cyan */
  );
}
```

**Content:**
```css
.info-cards__content {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}

.info-cards__content--lg {
  gap: var(--wp--preset--spacing--50);
}
```

**Heading:**
```css
.info-cards__heading {
  text-align: center;
  font-size: var(--wp--preset--font-size--700);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
}
```

**Grid (2 Columns):**
```css
.info-cards__grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--wp--preset--spacing--40);
}

.info-cards__grid--2col {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 767px) {
  .info-cards__grid--2col {
    grid-template-columns: 1fr;  /* Stack on mobile */
  }
}
```

---

**Value Card:**
```css
.info-cards__card {
  position: relative;
  border-radius: var(--wp--preset--border-radius--xl);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.info-cards__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--wp--preset--shadow--lg);
}

.dark .info-cards__card:hover {
  box-shadow: 0 8px 32px rgba(0, 255, 255, 0.1);  /* Cyan glow */
}
```

**Gradient Glow Border:**
```css
.info-cards__card-glow {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.5),  /* Cyan */
    rgba(255, 0, 255, 0.5)   /* Pink */
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.info-cards__card:hover .info-cards__card-glow {
  opacity: 1;
}
```

**Effect:** Gradient border appears on hover.

---

**Card Inner:**
```css
.info-cards__card-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--30);
  padding: var(--wp--preset--spacing--50);
  background: var(--wp--preset--color--background);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--xl);
}

.dark .info-cards__card-inner {
  background: var(--wp--preset--color--surface);
  border-color: rgba(255, 255, 255, 0.06);
}
```

**Icon Circle:**
```css
.info-cards__icon-circle {
  width: 3rem;  /* 48px */
  height: 3rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.1),
    rgba(255, 0, 255, 0.1)
  );
  color: var(--wp--preset--color--neon-cyan);
}

.dark .info-cards__icon-circle {
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.15),
    rgba(255, 0, 255, 0.15)
  );
}
```

**Card Title:**
```css
.info-cards__card-title {
  font-size: var(--wp--preset--font-size--400);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
}
```

**Card Text:**
```css
.info-cards__card-text {
  font-size: var(--wp--preset--font-size--200);
  color: var(--wp--preset--color--muted-foreground);
  line-height: var(--wp--preset--line-height--relaxed);
}
```

---

### 4. Timeline Section

**Container:**
```css
.info-timeline {
  padding-block: var(--wp--preset--spacing--80);
  background: var(--wp--preset--color--background);
}
```

**Content:**
```css
.info-timeline__content {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--50);
}
```

**Heading:**
```css
.info-timeline__heading {
  text-align: center;
  font-size: var(--wp--preset--font-size--700);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
}

/* Has .funky-section__heading--gradient class for gradient text */
```

**Timeline List:**
```css
.info-timeline__list {
  max-width: 42rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--60);
  position: relative;
  padding-left: var(--wp--preset--spacing--60);
}
```

**Gradient Connector Line:**
```css
.info-timeline__list::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.625rem;  /* Aligns with first marker */
  bottom: 0.625rem;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-pink)
  );
  opacity: 0.3;
}

.dark .info-timeline__list::before {
  opacity: 0.5;
}
```

**Effect:** Vertical gradient line connecting all timeline items.

---

**Timeline Item:**
```css
.info-timeline__item {
  position: relative;
}
```

**Glow Marker:**
```css
.info-timeline__marker {
  position: absolute;
  left: calc(-1 * var(--wp--preset--spacing--60) - 0.625rem);
  top: 0;
  width: 1.25rem;  /* 20px */
  height: 1.25rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-pink)
  );
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
}

.info-timeline__marker::after {
  content: '';
  width: 0.5rem;  /* 8px inner dot */
  height: 0.5rem;
  border-radius: 50%;
  background: white;
}
```

**Effect:** Gradient circle with white center dot, cyan glow.

---

**Item Body:**
```css
.info-timeline__item-body {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
}
```

**Year Badge:**
```css
.info-timeline__year {
  font-size: var(--wp--preset--font-size--100);
  font-weight: var(--wp--preset--font-weight--bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-pink)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Title:**
```css
.info-timeline__title {
  font-size: var(--wp--preset--font-size--400);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
}
```

**Description:**
```css
.info-timeline__text {
  font-size: var(--wp--preset--font-size--200);
  color: var(--wp--preset--color--muted-foreground);
  line-height: var(--wp--preset--line-height--relaxed);
}
```

---

### 5. CTA Section

**Container:**
```css
.info-cta {
  position: relative;
  overflow: hidden;
  padding-block: var(--wp--preset--spacing--80);
  background: var(--funky-navy-gradient);  /* Navy gradient background */
}
```

**Content:**
```css
.info-cta__content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 36rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}
```

**Heading:**
```css
.info-cta__heading {
  font-size: var(--wp--preset--font-size--700);
  font-weight: var(--wp--preset--font-weight--bold);
  color: #ffffff;
}
```

**Text:**
```css
.info-cta__text {
  font-size: var(--wp--preset--font-size--300);
  color: rgba(255, 255, 255, 0.7);
  line-height: var(--wp--preset--line-height--relaxed);
  max-width: 28rem;
  margin-inline: auto;
}
```

**Actions:**
```css
.info-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wp--preset--spacing--30);
  justify-content: center;
}
```

---

**Primary Button (Shop Now):**
```css
.info-cta__btn--primary {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--50);
  border-radius: var(--wp--preset--border-radius--lg);
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-pink)
  );
  color: #ffffff;
  font-weight: var(--wp--preset--font-weight--semibold);
  text-decoration: none;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.info-cta__btn--primary:hover {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);  /* Cyan glow */
  transform: translateY(-1px);
}
```

**Secondary Button (Meet the Team):**
```css
.info-cta__btn--secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--50);
  border-radius: var(--wp--preset--border-radius--lg);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.9);
  font-weight: var(--wp--preset--font-weight--semibold);
  text-decoration: none;
  transition: all 0.25s ease;
}

.info-cta__btn--secondary:hover {
  border-color: var(--wp--preset--color--neon-cyan);
  color: #ffffff;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.2);
}
```

---

**CTA Orbs:**
```css
.info-cta__orb--1 {
  width: 200px;
  height: 200px;
  top: -10%;
  right: 5%;
  opacity: 0.08;
  z-index: 1;
}

.info-cta__orb--2 {
  width: 150px;
  height: 150px;
  bottom: -5%;
  left: 10%;
  opacity: 0.06;
  z-index: 1;
}

@media (max-width: 640px) {
  .info-cta__orb--1,
  .info-cta__orb--2 { opacity: 0.04; }
}
```

---

## Responsive Behavior

### Mobile (< 640px)

**Hero:**
- 40vh minimum height (was 50vh)
- Reduced padding
- Orbs very subtle (6% opacity)

**Values Grid:**
- 1 column (stacks vertically)
- Full-width cards

**Timeline:**
- Left padding reduced
- Marker spacing adjusted

**CTA:**
- Buttons stack vertically
- Full-width buttons with padding

### Tablet (640px - 767px)

**Values Grid:**
- 2 columns maintained

**Timeline:**
- Full padding restored
- Side-by-side layout possible

### Desktop (≥ 768px)

**Hero:**
- 50vh minimum height
- Full padding
- Orbs more visible

**Values Grid:**
- 2 columns with generous gap

**Timeline:**
- Optimal reading width (42rem)
- Full marker visibility

**CTA:**
- Buttons side-by-side
- Auto-width with padding

---

## Dark Mode

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Hero overlay | Navy 75% / Purple 65% | Navy 85% / Purple 75% |
| Hero orbs | 12% / 10% opacity | 25% / 20% opacity |
| Mission bg | `--background` | `--background` |
| Values bg | Gradient soft | Pink/Cyan 2% |
| Value cards | White bg | `--surface` bg |
| Card glow | Gradient 50% | Gradient 50% |
| Card hover shadow | Standard shadow | Cyan glow 10% |
| Icon circle | Gradient 10% | Gradient 15% |
| Timeline line | Gradient 30% | Gradient 50% |
| CTA bg | Navy gradient | Navy gradient |
| CTA orbs | 8% / 6% opacity | Same |

---

## Accessibility

### ARIA Attributes

**Hero Background:**
```tsx
<img src="..." alt="" className="info-hero__bg" />
```
Empty alt because image is decorative (text overlay provides content).

**Orbs:**
```tsx
<div className="info-hero__orb--1 funky-orb funky-animate-float" />
```
No ARIA needed — purely decorative.

### Semantic HTML

```tsx
<section className="page-story info-hero">
  <h1 className="info-hero__title">Our story</h1>
  <p className="info-hero__subtitle">...</p>
</section>

<section className="info-story">
  <h2 className="info-story__title">Our mission</h2>
  <p className="info-story__text">...</p>
</section>

<section className="info-cards">
  <h2 className="info-cards__heading">What we stand for</h2>
  <div className="info-cards__card">
    <h3 className="info-cards__card-title">Craftsmanship</h3>
    <p className="info-cards__card-text">...</p>
  </div>
</section>

<section className="info-timeline">
  <h2 className="info-timeline__heading">Our journey</h2>
  <div className="info-timeline__item">
    <span className="info-timeline__year">2015</span>
    <h3 className="info-timeline__title">The Beginning</h3>
    <p className="info-timeline__text">...</p>
  </div>
</section>

<section className="info-cta">
  <h2 className="info-cta__heading">Join our story</h2>
  <p className="info-cta__text">...</p>
  <Link to="/shop">Shop Now</Link>
  <Link to="/about/team">Meet the Team</Link>
</section>
```

**Heading Hierarchy:**
- `<h1>` — Hero title (Our story)
- `<h2>` — Section headings (Mission, Values, Journey, CTA)
- `<h3>` — Card titles, timeline titles

### Keyboard Navigation

**Value Cards:**
- Not interactive (static content)
- No keyboard events needed

**CTA Buttons:**
- ✅ Tab to focus links
- ✅ Enter to activate
- ✅ Visual focus indicator (browser default)

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .info-cards__card { transition: none; }
  .info-cards__card:hover { transform: none; }
  .info-cards__card-glow { transition: none; }
  .info-cta__btn--primary,
  .info-cta__btn--secondary { transition: none; }
  .info-cta__btn--primary:hover { transform: none; }
  .info-hero__orb--1,
  .info-hero__orb--2,
  .info-cta__orb--1,
  .info-cta__orb--2 {
    animation: none !important;
  }
}
```

**Disabled:**
- Card lift effects
- Button lift effects
- Orb float animations
- Transition effects

---

## Production Enhancements

### 1. Animated Number Counters

Add animated stats to mission section:

```tsx
import { useCountUp } from 'react-countup';

const stats = [
  { value: 100000, label: 'Happy Customers', suffix: '+' },
  { value: 30, label: 'Countries', suffix: '' },
  { value: 1000000, label: 'Donated', prefix: '$', suffix: '+' },
];

<div className="info-story__stats">
  {stats.map((stat, i) => (
    <div key={i} className="info-story__stat">
      <span className="info-story__stat-value">
        {stat.prefix}
        <CountUp end={stat.value} duration={2} separator="," />
        {stat.suffix}
      </span>
      <span className="info-story__stat-label">{stat.label}</span>
    </div>
  ))}
</div>
```

### 2. Timeline Animation on Scroll

Animate timeline items as they come into view:

```tsx
import { useInView } from 'react-intersection-observer';

{storyMilestones.map((milestone, i) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  return (
    <div
      key={i}
      ref={ref}
      className={`info-timeline__item ${
        inView ? 'info-timeline__item--visible' : ''
      }`}
    >
      ...
    </div>
  );
})}
```

**CSS:**
```css
.info-timeline__item {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.info-timeline__item--visible {
  opacity: 1;
  transform: translateX(0);
}
```

### 3. Video Background in Hero

Add background video option:

```tsx
<section className="page-story info-hero">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="info-hero__bg"
  >
    <source src="/videos/story-hero.mp4" type="video/mp4" />
    <img src="fallback.jpg" alt="" />  {/* Fallback */}
  </video>
  ...
</section>
```

### 4. Sticky Timeline Progress Indicator

Add progress bar that tracks scroll through timeline:

```tsx
const [progress, setProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const timelineEl = document.querySelector('.info-timeline__list');
    if (!timelineEl) return;
    
    const rect = timelineEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const timelineHeight = rect.height;
    
    const scrolled = Math.max(0, windowHeight - rect.top);
    const percentage = Math.min(100, (scrolled / timelineHeight) * 100);
    
    setProgress(percentage);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// In CSS:
.info-timeline__list::before {
  background: linear-gradient(
    180deg,
    var(--wp--preset--color--neon-cyan) 0%,
    var(--wp--preset--color--neon-cyan) var(--timeline-progress, 0%),
    rgba(0, 255, 255, 0.2) var(--timeline-progress, 0%),
    rgba(255, 0, 255, 0.2) 100%
  );
}
```

### 5. Social Proof in Values

Add testimonials to value cards:

```tsx
const storyValues: StoryValue[] = [
  {
    icon: 'Heart',
    title: 'Craftsmanship',
    description: '...',
    testimonial: {
      quote: 'The attention to detail is incredible!',
      author: 'Sarah M.',
      role: 'Customer since 2019'
    }
  },
  // ...
];

<div className="info-cards__card">
  ...
  {value.testimonial && (
    <blockquote className="info-cards__testimonial">
      <p className="info-cards__testimonial-quote">
        "{value.testimonial.quote}"
      </p>
      <footer className="info-cards__testimonial-author">
        — {value.testimonial.author}, {value.testimonial.role}
      </footer>
    </blockquote>
  )}
</div>
```

---

## Testing Checklist

### Visual Testing
- [ ] Hero image loads and covers section
- [ ] Navy gradient overlay visible
- [ ] Badge glassmorphism effect visible
- [ ] Floating orbs visible (more in dark mode)
- [ ] Mission text centered, readable
- [ ] Value cards in 2-column grid
- [ ] Gradient glow appears on card hover
- [ ] Icon circles have gradient background
- [ ] Timeline gradient line visible
- [ ] Timeline markers glow cyan
- [ ] CTA buttons styled correctly
- [ ] Primary button has gradient background
- [ ] Secondary button has border

### Interaction Testing
- [ ] Value cards lift on hover
- [ ] Card gradient glow appears on hover
- [ ] CTA primary button glows on hover
- [ ] CTA secondary button border changes on hover
- [ ] Shop Now link navigates to /shop
- [ ] Meet the Team link navigates to /about/team

### Responsive Testing
- [ ] Mobile: Hero 40vh height
- [ ] Mobile: Value cards stack (1 column)
- [ ] Mobile: Timeline readable
- [ ] Mobile: CTA buttons stack
- [ ] Mobile: Orbs very subtle (6%)
- [ ] Tablet: 2-column value grid
- [ ] Desktop: Full layout visible
- [ ] Desktop: Orbs more visible

### Dark Mode Testing
- [ ] Hero overlay darker
- [ ] Orbs more visible (25%/20%)
- [ ] Value cards have surface background
- [ ] Card borders visible
- [ ] Card hover shadow cyan glow
- [ ] Icon circles brighter gradient
- [ ] Timeline line more visible (50%)
- [ ] CTA section maintains contrast

### Accessibility Testing
- [ ] H1 → H2 → H3 hierarchy correct
- [ ] Hero image has empty alt (decorative)
- [ ] Orbs not focusable
- [ ] CTA links focusable
- [ ] Focus indicators visible
- [ ] Reduced motion disables animations
- [ ] Reduced motion disables transforms

---

## Common Issues

### Issue: Gradient text not visible in Safari

**Cause:** Missing `-webkit-` prefixes

**Solution:** Already included in CSS:
```css
.funky-section__heading--gradient {
  background: linear-gradient(...);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Issue: Timeline line doesn't align with markers

**Cause:** Padding/positioning mismatch

**Solution:** Adjust `top` value:
```css
.info-timeline__list::before {
  top: 0.625rem;  /* Matches marker position */
}
```

### Issue: Orbs not animating

**Cause:** Missing `.funky-animate-float` class

**Solution:** Ensure both classes on orbs:
```tsx
<div className="info-hero__orb--1 funky-orb funky-animate-float" />
```

### Issue: Value card glow too subtle

**Cause:** Low opacity in gradient

**Solution:** Increase opacity:
```css
.info-cards__card-glow {
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.7),  /* Was 0.5 */
    rgba(255, 0, 255, 0.7)
  );
}
```

### Issue: CTA buttons not side-by-side

**Cause:** Insufficient space

**Solution:** Allow wrapping:
```css
.info-cta__actions {
  flex-wrap: wrap;  /* Already included */
}
```

---

## Related Templates

- **PageTeam** (`/src/app/components/templates/PageTeam.tsx`) — Team member profiles
- **PageCareers** (`/src/app/components/templates/PageCareers.tsx`) — Job listings
- **PageSustainability** (`/src/app/components/templates/PageSustainability.tsx`) — Sustainability initiatives
- **PageAbout** (if exists) — General about page

---

**Status:** ✅ Production-ready (timeline animation recommended)  
**Last Updated:** February 24, 2026  
**Version:** 2.6 (Funky Redesign)  
**Next Review:** After implementing scroll animations
