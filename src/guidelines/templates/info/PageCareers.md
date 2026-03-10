# PageCareers

**Component Type:** Template (Info Page)  
**Location:** `/src/app/components/templates/PageCareers.tsx`  
**CSS:** `/src/styles/sections/info-pages-funky.css` (Sections 6, 9)  
**Route:** `/about/careers`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Cyan `#00ffff`

---

## Overview

PageCareers showcases job opportunities with a full-width hero, glassmorphism benefit cards with icon circles, a list of open positions with cyan hover effects, and a contact CTA. Features hover glow effects, gradient headings, and animated floating orbs.

**Purpose:** Display career opportunities, company benefits, and recruit talent  
**WordPress Mapping:** Custom page template  
**Dark Mode:** ✅ Complete glassmorphism support

---

## Key Features

### Visual Elements

**1. Hero Section:**
- Full-width background image
- Dark gradient overlay
- Glass badge with Rocket icon
- Large title + subtitle
- 2 floating animated orbs

**2. Benefits Grid:**
- Responsive grid (1 → 2 → 3 columns)
- Glassmorphism cards with glow borders
- Icon circles (cyan background)
- Hover lift effect
- Gradient heading (pink → cyan)

**3. Open Positions List:**
- Vertical list layout
- Cards with glassmorphism background
- Cyan border + glow on hover
- Position title + metadata tags
- Apply button with cyan hover

**4. CTA Section:**
- Centered content
- Gradient heading
- Primary button (→ Contact)
- 2 floating orbs

### Funky Treatments

**Benefit Cards:** Glassmorphism + pink/cyan glow border on hover  
**Icon Circles:** Cyan background with white icons  
**Position Cards:** Cyan border + shadow glow on hover  
**Apply Button:** Cyan border + text on hover  
**Section Heading:** Pink → Cyan gradient text  
**CTA Heading:** Pink → Cyan gradient text

---

## Component Structure

### Data Access

```tsx
import { careerBenefits, openPositions, careersPageContent } from '../../data/careers';

const benefitIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'health': Heart,
  'flexible': Coffee,
  'learning': GraduationCap,
  'pto': Globe,
  'discount': Users,
  'equity': Briefcase,
};
```

### Icon Mapping

Maps benefit IDs to Lucide icons dynamically:

```tsx
const Icon = benefitIcons[benefit.id] || Heart;
```

### JSX Hierarchy

```tsx
<Layout>
  
  {/* 1. Hero */}
  <section className="page-careers info-hero">
    <img src="..." alt="" className="info-hero__bg" />
    <div className="info-hero__overlay" />
    <div className="info-hero__content">
      <span className="info-hero__badge funky-glass-panel">
        <Rocket size={14} />
        Join Us
      </span>
      <h1 className="info-hero__title">{careersPageContent.title}</h1>
      <p className="info-hero__subtitle">{careersPageContent.description}</p>
    </div>
    <div className="info-hero__orb--1 funky-orb funky-animate-float" />
    <div className="info-hero__orb--2 funky-orb funky-animate-float" />
  </section>
  
  <hr className="funky-section__divider" />
  
  {/* 2. Benefits Grid */}
  <section className="info-cards">
    <Container>
      <div className="info-cards__content info-cards__content--lg">
        <h2 className="info-cards__heading funky-section__heading--gradient">
          {careersPageContent.benefitsHeading}
        </h2>
        <div className="info-cards__grid">
          {careerBenefits.map(benefit => {
            const Icon = benefitIcons[benefit.id] || Heart;
            return (
              <div key={benefit.id} className="info-cards__card">
                <div className="info-cards__card-glow" />
                <div className="info-cards__card-inner">
                  <span className="info-cards__icon-circle">
                    <Icon size={22} />
                  </span>
                  <h3 className="info-cards__card-title">{benefit.title}</h3>
                  <p className="info-cards__card-text">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
  
  <hr className="funky-section__divider--subtle" />
  
  {/* 3. Open Positions */}
  <section className="info-positions">
    <Container>
      <div className="info-positions__content">
        <h2 className="info-positions__heading">{careersPageContent.positionsHeading}</h2>
        <p className="info-positions__subheading">{careersPageContent.positionsText}</p>
        <div className="info-positions__list">
          {openPositions.map(position => (
            <div key={position.id} className="info-positions__card">
              <div className="info-positions__card-body">
                <h3 className="info-positions__title">{position.title}</h3>
                <div className="info-positions__meta">
                  <span className="info-positions__tag">
                    <Briefcase size={12} /> {position.department}
                  </span>
                  <span className="info-positions__tag">
                    <MapPin size={12} /> {position.location}
                  </span>
                  <span className="info-positions__tag">
                    <Clock size={12} /> {position.type}
                  </span>
                </div>
              </div>
              <button className="info-positions__apply">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
  
  <hr className="funky-section__divider" />
  
  {/* 4. CTA */}
  <section className="info-cta">
    <Container>
      <div className="info-cta__content">
        <h2 className="info-cta__heading">{careersPageContent.ctaHeading}</h2>
        <p className="info-cta__text">{careersPageContent.ctaText}</p>
        <div className="info-cta__actions">
          <Link to="/contact" className="info-cta__btn--primary">
            {careersPageContent.ctaButton}
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
page-careers (class on hero section only)

info-hero (shared hero pattern)
└── [See InfoHero pattern docs]

info-cards (shared cards pattern)
└── info-cards__content (with info-cards__content--lg modifier)
    ├── info-cards__heading (with funky-section__heading--gradient)
    └── info-cards__grid
        └── info-cards__card
            ├── info-cards__card-glow
            └── info-cards__card-inner
                ├── info-cards__icon-circle
                ├── info-cards__card-title
                └── info-cards__card-text

info-positions (positions list section)
└── info-positions__content
    ├── info-positions__heading
    ├── info-positions__subheading
    └── info-positions__list
        └── info-positions__card
            ├── info-positions__card-body
            │   ├── info-positions__title
            │   └── info-positions__meta
            │       └── info-positions__tag (multiple)
            └── info-positions__apply

info-cta (shared CTA pattern)
└── [See InfoCTA pattern docs]
```

**Total BEM Classes (Careers-specific):** 11  
**Shared Utility Classes:** info-hero, info-cards, info-cta, funky-orb, funky-glass-panel

---

## Section Breakdown

### 1. Hero Section (Shared Pattern)

**See:** `/guidelines/patterns/InfoHero.md` for complete documentation

**Usage:**
```tsx
<section className="page-careers info-hero">
  {/* Standard info-hero pattern */}
</section>
```

**Careers-specific hero variables:**
```css
.page-careers {
  --page-hero-from: #0d1b2a;  /* Dark blue */
  --page-hero-via: #030213;   /* Deep purple */
  --page-hero-to: #050515;    /* Almost black */
}
```

---

### 2. Benefits Grid Section (Shared Pattern)

**See:** `/guidelines/patterns/InfoCards.md` for complete documentation

**Usage:**
```tsx
<section className="info-cards">
  <Container>
    <div className="info-cards__content info-cards__content--lg">
      <h2 className="info-cards__heading funky-section__heading--gradient">
        Why Join Us?
      </h2>
      <div className="info-cards__grid">
        {/* Cards with icon circles */}
      </div>
    </div>
  </Container>
</section>
```

**Icon Circle:**
```tsx
<span className="info-cards__icon-circle">
  <Heart size={22} />
</span>
```

**Icon Mapping:**
```tsx
const benefitIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'health': Heart,
  'flexible': Coffee,
  'learning': GraduationCap,
  'pto': Globe,
  'discount': Users,
  'equity': Briefcase,
};

const Icon = benefitIcons[benefit.id] || Heart;  // Fallback to Heart
```

---

### 3. Open Positions Section (Careers-Specific)

**Container:**
```css
.info-positions {
  padding-block: var(--wp--preset--spacing--80);
  background: var(--wp--preset--gradient--accent-soft);
}

.dark .info-positions {
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.02),  /* Pink */
    rgba(0, 255, 255, 0.02)   /* Cyan */
  );
}
```

**Effect:** Subtle gradient background (pink → cyan, 2% opacity).

---

**Content Wrapper:**
```css
.info-positions__content {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--50);
  max-width: 48rem;  /* 768px - narrower than full container */
}
```

---

**Heading:**
```css
.info-positions__heading {
  font-size: var(--wp--preset--font-size--700);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
  font-family: var(--wp--preset--font-family--base);
}
```

**Subheading:**
```css
.info-positions__subheading {
  font-size: var(--wp--preset--font-size--300);
  color: var(--wp--preset--color--muted-foreground);
  line-height: var(--wp--preset--line-height--relaxed);
  font-family: var(--wp--preset--font-family--base);
}
```

---

**Positions List (Vertical):**
```css
.info-positions__list {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--30);
}
```

**Layout:** Vertical stacking with 30px gap between cards.

---

### 4. Position Card

**Card Container:**
```css
.info-positions__card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--wp--preset--spacing--40);
  padding: var(--wp--preset--spacing--40);
  border-radius: var(--wp--preset--border-radius--lg);
  background: var(--wp--preset--color--background);
  border: 1px solid var(--wp--preset--color--border);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
```

**Layout:** Flexbox row with space-between (title/meta on left, button on right).

---

**Hover State (Cyan Glow):**
```css
.info-positions__card:hover {
  border-color: rgba(0, 255, 255, 0.3);  /* Cyan border */
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.06);  /* Cyan shadow */
}

.dark .info-positions__card {
  background: var(--wp--preset--color--surface);
  border-color: rgba(255, 255, 255, 0.06);
}

.dark .info-positions__card:hover {
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);  /* Stronger in dark */
}
```

**Effect:** Cyan border + shadow glow on hover.

---

**Card Body (Left Side):**
```css
.info-positions__card-body {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
}
```

**Position Title:**
```css
.info-positions__title {
  font-size: var(--wp--preset--font-size--400);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
  font-family: var(--wp--preset--font-family--base);
}
```

---

**Metadata Row:**
```css
.info-positions__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wp--preset--spacing--20);
}
```

**Meta Tags:**
```css
.info-positions__tag {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--100);
  color: var(--wp--preset--color--muted-foreground);
  font-family: var(--wp--preset--font-family--base);
}
```

**JSX:**
```tsx
<div className="info-positions__meta">
  <span className="info-positions__tag">
    <Briefcase size={12} /> Engineering
  </span>
  <span className="info-positions__tag">
    <MapPin size={12} /> Remote
  </span>
  <span className="info-positions__tag">
    <Clock size={12} /> Full-time
  </span>
</div>
```

**Effect:** Icon + text tags (department, location, type).

---

### 5. Apply Button

**Button:**
```css
.info-positions__apply {
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--40);
  border-radius: var(--wp--preset--border-radius--md);
  border: 1px solid var(--wp--preset--color--border);
  background: transparent;
  color: var(--wp--preset--color--foreground);
  font-size: var(--wp--preset--font-size--200);
  font-weight: var(--wp--preset--font-weight--medium);
  cursor: pointer;
  font-family: var(--wp--preset--font-family--base);
  transition: border-color 0.2s ease, color 0.2s ease;
}

.info-positions__apply:hover {
  border-color: var(--wp--preset--color--neon-cyan);
  color: var(--wp--preset--color--neon-cyan);
}
```

**Effect:** Transparent button with cyan border + text on hover.

---

### 6. Reduced Motion

**Accessibility:**
```css
@media (prefers-reduced-motion: reduce) {
  .info-positions__card {
    transition: none;
  }
  .info-positions__apply {
    transition: none;
  }
}
```

**Effect:** Disables hover transitions for users who prefer reduced motion.

---

### 7. CTA Section (Shared Pattern)

**See:** `/guidelines/patterns/InfoCTA.md` for complete documentation

**Usage:**
```tsx
<section className="info-cta">
  <Container>
    <div className="info-cta__content">
      <h2 className="info-cta__heading">Don't See Your Role?</h2>
      <p className="info-cta__text">Get in touch with us...</p>
      <div className="info-cta__actions">
        <Link to="/contact" className="info-cta__btn--primary">
          Contact Us
        </Link>
      </div>
    </div>
  </Container>
  {/* Orbs */}
</section>
```

---

## Responsive Behavior

### Mobile (< 640px)

**Hero:** Full-width image, centered content  
**Benefits Grid:** 1 column, stacked cards  
**Positions List:** Stacked vertically  
**Position Cards:** Stack title/meta/button vertically  
**CTA:** Centered, full-width button

### Tablet (640px - 1023px)

**Hero:** Same as mobile  
**Benefits Grid:** 2 columns  
**Positions List:** Same as mobile  
**Position Cards:** Flexbox row maintained  
**CTA:** Same as mobile

### Desktop (≥ 1024px)

**Hero:** Same  
**Benefits Grid:** 3 columns  
**Positions List:** Max-width 768px (narrower)  
**Position Cards:** Flexbox row with space-between  
**CTA:** Same

**Note:** Position cards may need to stack on very narrow screens (<500px).

---

## Dark Mode

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Hero overlay | Dark gradient | Dark gradient (same) |
| Benefits cards bg | `--surface` | `--surface` |
| Benefits cards border | `--border` | `rgba(255,255,255,0.06)` |
| Benefits glow | Pink → Cyan 40% | Pink → Cyan 40% (same) |
| Icon circle bg | Cyan | Cyan (same) |
| Positions section bg | Pink → Cyan gradient 2% | Pink → Cyan gradient 2% (same) |
| Position card bg | `--background` | `--surface` |
| Position card border | `--border` | `rgba(255,255,255,0.06)` |
| Position hover border | Cyan 30% | Cyan 30% (same) |
| Position hover shadow | Cyan 6% | Cyan 10% (stronger) |
| Apply button border | `--border` | `--border` |
| Apply button hover | Cyan | Cyan (same) |

---

## Accessibility

### ARIA Attributes

**Hero Background Image:**
```tsx
<img src="..." alt="" className="info-hero__bg" />
```
Empty `alt` because it's decorative.

**Apply Buttons:**
```tsx
<button
  className="info-positions__apply"
  aria-label={`Apply for ${position.title}`}
>
  Apply
</button>
```

### Semantic HTML

```tsx
<section className="info-positions">
  <h2>Open Positions</h2>
  <div className="info-positions__list">
    <div className="info-positions__card">
      <h3 className="info-positions__title">Senior Engineer</h3>
      <div className="info-positions__meta">...</div>
      <button>Apply</button>
    </div>
  </div>
</section>
```

**Heading Hierarchy:** h1 (hero) → h2 (benefits, positions) → h3 (benefit titles, position titles)

### Keyboard Navigation

**Apply Buttons:**
- ✅ Tab to focus
- ✅ Enter or Space to activate
- ✅ Visual focus indicator
- ✅ Color change on hover (cyan)

**CTA Link:**
- ✅ Tab to focus
- ✅ Enter to navigate

---

## Production Enhancements

### 1. Functional Apply Button

Add click handler to open application form/modal:

```tsx
const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);

<button
  className="info-positions__apply"
  onClick={() => setSelectedPosition(position)}
  aria-label={`Apply for ${position.title}`}
>
  Apply
</button>

{selectedPosition && (
  <ApplicationModal
    position={selectedPosition}
    onClose={() => setSelectedPosition(null)}
  />
)}
```

### 2. Application Form Modal

Create modal component:

```tsx
interface ApplicationModalProps {
  position: Position;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ position, onClose }) => {
  return (
    <div className="application-modal" role="dialog" aria-labelledby="modal-title">
      <div className="application-modal__overlay" onClick={onClose} />
      <div className="application-modal__content">
        <button
          className="application-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <h2 id="modal-title">Apply for {position.title}</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" type="tel" placeholder="Phone" />
          <input name="resume" type="file" accept=".pdf,.doc,.docx" required />
          <textarea name="cover_letter" placeholder="Cover Letter (optional)" rows={5} />
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};
```

### 3. Department Filtering

Add filter to show positions by department:

```tsx
const departments = Array.from(new Set(openPositions.map(p => p.department)));
const [selectedDept, setSelectedDept] = useState<string>('all');

const filteredPositions = selectedDept === 'all'
  ? openPositions
  : openPositions.filter(p => p.department === selectedDept);

<div className="info-positions__filters">
  <button
    className={selectedDept === 'all' ? 'active' : ''}
    onClick={() => setSelectedDept('all')}
  >
    All ({openPositions.length})
  </button>
  {departments.map(dept => (
    <button
      key={dept}
      className={selectedDept === dept ? 'active' : ''}
      onClick={() => setSelectedDept(dept)}
    >
      {dept} ({openPositions.filter(p => p.department === dept).length})
    </button>
  ))}
</div>
```

### 4. Location/Type Filtering

Add additional filters:

```tsx
const [filters, setFilters] = useState({
  department: 'all',
  location: 'all',
  type: 'all',
});

const filteredPositions = openPositions.filter(position => {
  if (filters.department !== 'all' && position.department !== filters.department) return false;
  if (filters.location !== 'all' && position.location !== filters.location) return false;
  if (filters.type !== 'all' && position.type !== filters.type) return false;
  return true;
});
```

### 5. "Notify Me" for No Results

Add email signup for specific role types:

```tsx
{filteredPositions.length === 0 && (
  <div className="info-positions__no-results">
    <p>No positions match your criteria.</p>
    <form onSubmit={handleNotifySubmit}>
      <input
        type="email"
        placeholder="Get notified when roles like this open up"
        required
      />
      <button type="submit">Notify Me</button>
    </form>
  </div>
)}
```

---

## Testing Checklist

### Visual Testing
- [ ] Hero image loads and covers full width
- [ ] Hero overlay gradient visible
- [ ] Glass badge visible with icon
- [ ] Benefits grid responsive (1 → 2 → 3 columns)
- [ ] Benefit cards have glassmorphism background
- [ ] Icon circles cyan with white icons
- [ ] Benefit card glow border on hover
- [ ] Positions section gradient background
- [ ] Position cards list vertically
- [ ] Position cards have metadata tags
- [ ] Apply button visible
- [ ] CTA section centered
- [ ] All floating orbs animate

### Interaction Testing
- [ ] Hover over benefit card shows glow border
- [ ] Benefit card lifts on hover (if implemented)
- [ ] Hover over position card shows cyan glow
- [ ] Apply button turns cyan on hover
- [ ] CTA button navigates to /contact
- [ ] CTA button has hover effect

### Responsive Testing
- [ ] Mobile: 1 column benefits grid
- [ ] Mobile: Position cards stack vertically
- [ ] Tablet: 2 column benefits grid
- [ ] Desktop: 3 column benefits grid
- [ ] Position cards maintain readable width
- [ ] CTA button full width on mobile

### Dark Mode Testing
- [ ] Hero overlay visible
- [ ] Benefit card glassmorphism background
- [ ] Benefit glow border same brightness
- [ ] Icon circles same cyan brightness
- [ ] Positions section gradient visible
- [ ] Position cards glassmorphism
- [ ] Position cyan glow stronger
- [ ] Apply button cyan hover visible
- [ ] CTA gradient heading visible

### Accessibility Testing
- [ ] Hero image has empty alt (decorative)
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Apply buttons have aria-label
- [ ] Apply buttons focusable
- [ ] Tab order logical
- [ ] Reduced motion disables transitions
- [ ] All text readable (contrast)
- [ ] Metadata tags have icons + text

---

## Common Issues

### Issue: Icon mapping fails for unknown benefit IDs

**Cause:** Benefit ID not in `benefitIcons` object

**Solution:** Always provide fallback:
```tsx
const Icon = benefitIcons[benefit.id] || Heart;
```

### Issue: Position cards too wide on large screens

**Cause:** No max-width constraint

**Solution:** Already implemented:
```css
.info-positions__content {
  max-width: 48rem;  /* 768px */
}
```

### Issue: Apply button gets squished on narrow cards

**Cause:** Flexbox with long title text

**Solution:** Add responsive stacking:
```css
@media (max-width: 500px) {
  .info-positions__card {
    flex-direction: column;
    align-items: flex-start;
  }
  .info-positions__apply {
    width: 100%;
  }
}
```

### Issue: Metadata tags wrap awkwardly

**Cause:** Long department/location names

**Solution:** Already uses `flex-wrap: wrap`:
```css
.info-positions__meta {
  flex-wrap: wrap;
}
```

---

## Related Templates

- **PageTeam** (`/src/app/components/templates/PageTeam.tsx`) — Team members (linked from CTA)
- **PageOurStory** (`/src/app/components/templates/PageOurStory.tsx`) — Company story
- **PageContact** (`/src/app/components/templates/PageContact.tsx`) — Contact page (CTA target)

---

## Related Patterns

- **InfoHero** (Shared hero pattern) — Full-width image hero
- **InfoCards** (Shared cards pattern) — Glassmorphism benefit cards
- **InfoCTA** (Shared CTA pattern) — Centered CTA section

---

**Status:** ✅ Production-ready (application modal recommended)  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After application form implementation
