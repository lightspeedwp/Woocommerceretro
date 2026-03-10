# PageTeam

**Component Type:** Template (Info Page)  
**Location:** `/src/app/components/templates/PageTeam.tsx`  
**CSS:** `/src/styles/sections/info-pages-funky.css` (Section 5)  
**Route:** `/about/team`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Cyan `#00ffff`

---

## Overview

PageTeam showcases company team members with a full-width hero image, glassmorphism team cards with gradient avatars, department statistics with gradient numbers, and a careers CTA. Features hover lift effects, animated floating orbs, and complete dark mode support.

**Purpose:** Display team structure, leadership profiles, and department breakdown  
**WordPress Mapping:** Custom page template  
**Dark Mode:** ✅ Complete glassmorphism support

---

## Key Features

### Visual Elements

**1. Hero Section:**
- Full-width background image
- Dark gradient overlay (80% opacity)
- Glass badge with Users icon
- Large title + subtitle
- 2 floating animated orbs

**2. Leadership Grid:**
- Responsive grid (1 → 2 → 3 columns)
- Glassmorphism cards with glow borders
- Gradient avatar circles (initials)
- Hover lift effect (-6px)
- Pink shadow on hover (dark mode)

**3. Department Stats:**
- Centered stats grid
- Large gradient numbers
- Department labels
- 2 floating orbs

**4. CTA Section:**
- Centered content
- Gradient heading
- Primary button (→ Careers)
- 2 floating orbs

### Funky Treatments

**Team Cards:** Glassmorphism + pink/cyan glow border on hover  
**Avatars:** Pink → Cyan gradient background with white initials  
**Department Numbers:** Pink → Cyan gradient text  
**CTA Heading:** Pink → Cyan gradient text  
**Orbs:** Animated floating decoration throughout

---

## Component Structure

### Data Access

```tsx
import { teamMembers, departments, teamPageContent } from '../../data/team';

// Leadership filtering
const leadership = teamMembers.filter(m => m.department === 'Leadership');

// Department stats (exclude 'all')
const stats = departments.filter(d => d.id !== 'all');
```

### JSX Hierarchy

```tsx
<Layout>
  
  {/* 1. Hero */}
  <section className="page-team info-hero">
    <img src="..." alt="" className="info-hero__bg" />
    <div className="info-hero__overlay" />
    <div className="info-hero__content">
      <span className="info-hero__badge funky-glass-panel">
        <Users size={14} />
        Our People
      </span>
      <h1 className="info-hero__title">{teamPageContent.title}</h1>
      <p className="info-hero__subtitle">{teamPageContent.description}</p>
    </div>
    <div className="info-hero__orb--1 funky-orb funky-animate-float" />
    <div className="info-hero__orb--2 funky-orb funky-animate-float" />
  </section>
  
  <hr className="funky-section__divider" />
  
  {/* 2. Leadership Grid */}
  <section className="info-team">
    <Container>
      <div className="info-team__content">
        <h2 className="info-team__heading funky-section__heading--gradient">
          {teamPageContent.leadershipHeading}
        </h2>
        <div className="info-team__grid">
          {leadership.map(member => (
            <div key={member.id} className="info-team__card">
              <div className="info-team__card-glow" />
              <div className="info-team__card-inner">
                <div className="info-team__avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="info-team__name">{member.name}</h3>
                <span className="info-team__role">{member.role}</span>
                <p className="info-team__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
  
  <hr className="funky-section__divider--subtle" />
  
  {/* 3. Department Stats */}
  <section className="info-stats">
    <Container>
      <div className="info-stats__content">
        <h2 className="info-stats__heading">{teamPageContent.departmentsHeading}</h2>
        <p className="info-stats__subheading">{teamPageContent.departmentsText}</p>
        <div className="info-stats__grid">
          {stats.map(dept => (
            <div key={dept.id} className="info-stats__item">
              <span className="info-stats__number">{dept.count}</span>
              <span className="info-stats__label">{dept.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
    <div className="info-stats__orb--1 funky-orb funky-animate-float" />
    <div className="info-stats__orb--2 funky-orb funky-animate-float" />
  </section>
  
  <hr className="funky-section__divider" />
  
  {/* 4. CTA */}
  <section className="info-cta">
    <Container>
      <div className="info-cta__content">
        <h2 className="info-cta__heading">{teamPageContent.ctaHeading}</h2>
        <p className="info-cta__text">{teamPageContent.ctaText}</p>
        <div className="info-cta__actions">
          <Link to="/about/careers" className="info-cta__btn--primary">
            {teamPageContent.ctaButton}
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
page-team (class on hero section only)

info-hero (shared hero pattern)
├── info-hero__bg
├── info-hero__overlay
├── info-hero__content
│   ├── info-hero__badge (with funky-glass-panel)
│   ├── info-hero__title
│   └── info-hero__subtitle
├── info-hero__orb--1 (funky-orb funky-animate-float)
└── info-hero__orb--2

info-team (leadership section)
└── info-team__content
    ├── info-team__heading (with funky-section__heading--gradient)
    └── info-team__grid
        └── info-team__card
            ├── info-team__card-glow
            └── info-team__card-inner
                ├── info-team__avatar
                ├── info-team__name
                ├── info-team__role
                └── info-team__bio

info-stats (shared stats pattern)
└── info-stats__content
    ├── info-stats__heading
    ├── info-stats__subheading
    └── info-stats__grid
        └── info-stats__item
            ├── info-stats__number
            └── info-stats__label

info-cta (shared CTA pattern)
└── info-cta__content
    ├── info-cta__heading
    ├── info-cta__text
    └── info-cta__actions
        └── info-cta__btn--primary
```

**Total BEM Classes (Team-specific):** 10  
**Shared Utility Classes:** info-hero, info-stats, info-cta, funky-orb, funky-glass-panel

---

## Section Breakdown

### 1. Hero Section (Shared Pattern)

**See:** `/guidelines/patterns/InfoHero.md` for complete documentation

**Usage:**
```tsx
<section className="page-team info-hero">
  {/* Standard info-hero pattern */}
</section>
```

**Team-specific hero variables:**
```css
.page-team {
  --page-hero-from: #0d1b2a;  /* Dark blue */
  --page-hero-via: #030213;   /* Deep purple */
  --page-hero-to: #050515;    /* Almost black */
}
```

---

### 2. Leadership Grid Section

**Container:**
```css
.info-team {
  padding-block: var(--wp--preset--spacing--80);
  background: var(--wp--preset--color--background);
}
```

**Content Wrapper:**
```css
.info-team__content {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--50);
}
```

---

**Heading (Gradient):**
```css
.info-team__heading {
  text-align: center;
  font-size: var(--wp--preset--font-size--700);
  font-weight: var(--wp--preset--font-weight--bold);
  line-height: var(--wp--preset--line-height--tight);
  font-family: var(--wp--preset--font-family--base);
}

/* Gradient applied via utility class */
.funky-section__heading--gradient {
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-pink),
    var(--wp--preset--color--neon-cyan)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**JSX:**
```tsx
<h2 className="info-team__heading funky-section__heading--gradient">
  Meet Our Leadership
</h2>
```

---

**Responsive Grid:**
```css
.info-team__grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--wp--preset--spacing--50);
}

@media (min-width: 640px) {
  .info-team__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .info-team__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Breakpoints:**
- Mobile: 1 column
- ≥640px: 2 columns
- ≥1024px: 3 columns

---

### 3. Team Card (Glassmorphism with Glow)

**Card Container:**
```css
.info-team__card {
  position: relative;
  border-radius: var(--wp--preset--border-radius--xl);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.35s ease;
}
```

**Glow Border (Hidden → Visible on Hover):**
```css
.info-team__card-glow {
  position: absolute;
  inset: -1px;  /* Extend 1px outside card */
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.4),  /* Pink */
    rgba(0, 255, 255, 0.4)   /* Cyan */
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}

.info-team__card:hover .info-team__card-glow {
  opacity: 1;  /* Show on hover */
}
```

**Effect:** Pink → Cyan gradient border appears on hover.

---

**Card Inner (Glassmorphism):**
```css
.info-team__card-inner {
  position: relative;
  z-index: 1;  /* Above glow */
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--xl);
  padding: var(--wp--preset--spacing--50);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--wp--preset--spacing--30);
  height: 100%;
}

.dark .info-team__card-inner {
  background: var(--wp--preset--color--surface);
  border-color: rgba(255, 255, 255, 0.06);
}
```

---

**Hover Lift Effect:**
```css
.info-team__card:hover {
  transform: translateY(-6px);
  box-shadow: var(--wp--preset--shadow--lg);
}

.dark .info-team__card:hover {
  box-shadow: 0 10px 40px rgba(255, 0, 255, 0.12);  /* Pink glow */
}
```

**Effect:** Card lifts 6px up + shadow on hover.

---

### 4. Avatar (Gradient Circle with Initials)

**Avatar Circle:**
```css
.info-team__avatar {
  width: 5rem;  /* 80px */
  height: 5rem;
  border-radius: var(--wp--preset--border-radius--full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--wp--preset--font-size--500);
  font-weight: var(--wp--preset--font-weight--bold);
  color: white;
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-pink),
    var(--wp--preset--color--neon-cyan)
  );
}
```

**JSX (Initials Extraction):**
```tsx
<div className="info-team__avatar">
  {member.name.split(' ').map(n => n[0]).join('')}
</div>
```

**Example:** "John Doe" → "JD"

**Effect:** 80px circle with pink → cyan gradient, white initials.

---

### 5. Member Info

**Name:**
```css
.info-team__name {
  font-size: var(--wp--preset--font-size--400);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
  line-height: var(--wp--preset--line-height--tight);
  font-family: var(--wp--preset--font-family--base);
}
```

**Role (Cyan):**
```css
.info-team__role {
  font-size: var(--wp--preset--font-size--100);
  color: var(--wp--preset--color--neon-cyan);
  text-transform: uppercase;
  letter-spacing: var(--wp--preset--letter-spacing--wide);
  font-weight: var(--wp--preset--font-weight--semibold);
  font-family: var(--wp--preset--font-family--base);
}

.dark .info-team__role {
  color: var(--wp--preset--color--neon-cyan);  /* Same in dark mode */
}
```

**Bio:**
```css
.info-team__bio {
  font-size: var(--wp--preset--font-size--200);
  color: var(--wp--preset--color--muted-foreground);
  line-height: var(--wp--preset--line-height--relaxed);
  font-family: var(--wp--preset--font-family--base);
}
```

**JSX:**
```tsx
<h3 className="info-team__name">John Doe</h3>
<span className="info-team__role">Chief Executive Officer</span>
<p className="info-team__bio">Leading our vision with 20+ years of experience...</p>
```

---

### 6. Department Stats Section

**See:** `/guidelines/patterns/InfoStats.md` for complete documentation

**Usage:**
```tsx
<section className="info-stats">
  <Container>
    <div className="info-stats__content">
      <h2 className="info-stats__heading">Our Departments</h2>
      <p className="info-stats__subheading">Description text</p>
      <div className="info-stats__grid">
        {departments.map(dept => (
          <div key={dept.id} className="info-stats__item">
            <span className="info-stats__number">{dept.count}</span>
            <span className="info-stats__label">{dept.name}</span>
          </div>
        ))}
      </div>
    </div>
  </Container>
  <div className="info-stats__orb--1 funky-orb funky-animate-float" />
  <div className="info-stats__orb--2 funky-orb funky-animate-float" />
</section>
```

**Numbers:** Gradient pink → cyan  
**Effect:** Large gradient numbers with department labels.

---

### 7. CTA Section

**See:** `/guidelines/patterns/InfoCTA.md` for complete documentation

**Usage:**
```tsx
<section className="info-cta">
  <Container>
    <div className="info-cta__content">
      <h2 className="info-cta__heading">Join Our Team</h2>
      <p className="info-cta__text">We're hiring!</p>
      <div className="info-cta__actions">
        <Link to="/about/careers" className="info-cta__btn--primary">
          View Openings
        </Link>
      </div>
    </div>
  </Container>
  {/* Orbs */}
</section>
```

**CTA Button:** Primary button → Careers page

---

### 8. Reduced Motion

**Accessibility:**
```css
@media (prefers-reduced-motion: reduce) {
  .info-team__card {
    transition: none;
  }
  .info-team__card:hover {
    transform: none;
  }
  .info-team__card-glow {
    transition: none;
  }
}
```

**Effect:** Disables hover lift + glow animations for users who prefer reduced motion.

---

## Responsive Behavior

### Mobile (< 640px)

**Hero:** Full-width image, centered content  
**Leadership Grid:** 1 column, stacked cards  
**Stats Grid:** Stacked vertically  
**CTA:** Centered, full-width button

### Tablet (640px - 1023px)

**Hero:** Same as mobile  
**Leadership Grid:** 2 columns  
**Stats Grid:** 2-3 column grid  
**CTA:** Same as mobile

### Desktop (≥ 1024px)

**Hero:** Same  
**Leadership Grid:** 3 columns  
**Stats Grid:** 4-5 column grid  
**CTA:** Same

---

## Dark Mode

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Hero overlay | 80% dark gradient | 80% dark gradient |
| Card inner bg | `--surface` | `--surface` |
| Card border | `--border` | `rgba(255,255,255,0.06)` |
| Card glow | Pink → Cyan 40% | Pink → Cyan 40% |
| Card hover shadow | `--shadow-lg` | `rgba(255,0,255,0.12)` ← Pink glow |
| Avatar gradient | Pink → Cyan | Pink → Cyan (same) |
| Avatar text | White | White |
| Role color | Cyan | Cyan (same) |
| Stats numbers | Gradient | Gradient (same) |

---

## Accessibility

### ARIA Attributes

**Hero Background Image:**
```tsx
<img src="..." alt="" className="info-hero__bg" />
```
Empty `alt` because it's decorative (covered by overlay).

**Navigation:**
```tsx
<Link to="/about/careers" className="info-cta__btn--primary">
  View Openings
</Link>
```

### Semantic HTML

```tsx
<section className="info-team">
  <h2>Meet Our Leadership</h2>
  <div className="info-team__grid">
    <div className="info-team__card">
      <h3 className="info-team__name">John Doe</h3>
      <span className="info-team__role">CEO</span>
      <p className="info-team__bio">Bio text</p>
    </div>
  </div>
</section>
```

**Heading Hierarchy:** h1 (hero) → h2 (section) → h3 (member name)

### Keyboard Navigation

**CTA Button:**
- ✅ Tab to focus
- ✅ Enter to navigate
- ✅ Visual focus indicator

**Team Cards:**
- Not interactive (no click required)
- Hover effects are visual enhancements only

---

## Production Enhancements

### 1. Team Member Details Modal

Add click handler to open detailed bio:

```tsx
const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

<div
  className="info-team__card"
  onClick={() => setSelectedMember(member)}
  role="button"
  tabIndex={0}
  aria-label={`View details for ${member.name}`}
>
  {/* Card content */}
</div>

{selectedMember && (
  <TeamMemberModal
    member={selectedMember}
    onClose={() => setSelectedMember(null)}
  />
)}
```

### 2. Social Links on Team Cards

Add LinkedIn/Twitter links:

```tsx
{member.social && (
  <div className="info-team__social">
    {member.social.linkedin && (
      <a
        href={member.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
      >
        <Linkedin size={16} />
      </a>
    )}
    {member.social.twitter && (
      <a
        href={member.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on Twitter`}
      >
        <Twitter size={16} />
      </a>
    )}
  </div>
)}
```

**CSS:**
```css
.info-team__social {
  display: flex;
  gap: var(--wp--preset--spacing--20);
  margin-top: var(--wp--preset--spacing--30);
}

.info-team__social a {
  color: var(--wp--preset--color--muted-foreground);
  transition: color 0.2s ease;
}

.info-team__social a:hover {
  color: var(--wp--preset--color--neon-cyan);
}
```

### 3. Department Filtering

Add filter to show all team members by department:

```tsx
const [selectedDept, setSelectedDept] = useState<string>('all');

const filteredMembers = selectedDept === 'all'
  ? teamMembers
  : teamMembers.filter(m => m.department === selectedDept);

<div className="info-team__filters">
  {departments.map(dept => (
    <button
      key={dept.id}
      className={`info-team__filter ${selectedDept === dept.id ? 'active' : ''}`}
      onClick={() => setSelectedDept(dept.id)}
    >
      {dept.name}
    </button>
  ))}
</div>

<div className="info-team__grid">
  {filteredMembers.map(member => (
    {/* Card */}
  ))}
</div>
```

### 4. Team Photos (Real Images)

Replace gradient avatars with actual photos:

```tsx
<div className="info-team__avatar">
  {member.photo ? (
    <img src={member.photo} alt={member.name} />
  ) : (
    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
  )}
</div>
```

**CSS:**
```css
.info-team__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
```

### 5. Animated Counter on Stats

Add count-up animation for department numbers:

```tsx
import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let current = 0;
        const increment = end / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 20);
      }
    });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  
  return <span ref={ref}>{count}</span>;
};

// Usage:
<span className="info-stats__number">
  <AnimatedCounter end={dept.count} />
</span>
```

---

## Testing Checklist

### Visual Testing
- [ ] Hero image loads and covers full width
- [ ] Hero overlay gradient visible
- [ ] Glass badge visible with icon
- [ ] Leadership grid responsive (1 → 2 → 3 columns)
- [ ] Team cards have glassmorphism background
- [ ] Avatar circles show correct initials
- [ ] Avatar gradient (pink → cyan) visible
- [ ] Role text cyan colored
- [ ] Department stats grid responsive
- [ ] Stats numbers have gradient
- [ ] CTA section centered
- [ ] All floating orbs animate

### Interaction Testing
- [ ] Hover over team card shows glow border
- [ ] Card lifts 6px on hover
- [ ] Pink shadow visible on hover (dark mode)
- [ ] CTA button navigates to /about/careers
- [ ] CTA button has hover effect

### Responsive Testing
- [ ] Mobile: 1 column grid
- [ ] Tablet: 2 column grid
- [ ] Desktop: 3 column grid
- [ ] Hero scales properly
- [ ] Stats grid adapts
- [ ] CTA button full width on mobile

### Dark Mode Testing
- [ ] Hero overlay visible
- [ ] Card glassmorphism background subtle
- [ ] Card border subtle (6% white)
- [ ] Pink glow shadow on card hover
- [ ] Avatar gradient same brightness
- [ ] Role text cyan visible
- [ ] Stats gradient visible
- [ ] CTA gradient heading visible

### Accessibility Testing
- [ ] Hero image has empty alt (decorative)
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] CTA button focusable
- [ ] Tab order logical
- [ ] Reduced motion disables animations
- [ ] All text readable (contrast)
- [ ] (Production) Team cards have aria-label if clickable

---

## Common Issues

### Issue: Avatar initials wrong for single-name members

**Cause:** `split(' ')` assumes first and last name

**Solution:** Defensive logic:
```tsx
const getInitials = (name: string) => {
  const parts = name.split(' ');
  if (parts.length === 1) return name.substring(0, 2).toUpperCase();
  return parts.map(n => n[0]).join('').toUpperCase();
};

<div className="info-team__avatar">
  {getInitials(member.name)}
</div>
```

### Issue: Glow border not visible on some cards

**Cause:** Card inner background covers glow

**Solution:** Ensure `inset: -1px` on glow:
```css
.info-team__card-glow {
  inset: -1px;  /* Must extend outside inner */
}
```

### Issue: Grid doesn't align on last row

**Cause:** Uneven number of cards

**Solution:** Add grid alignment:
```css
.info-team__grid {
  grid-auto-flow: dense;
  justify-items: center;
}
```

### Issue: Hover lift jarring on touch devices

**Cause:** Hover not appropriate for touch

**Solution:** Use `@media (hover: hover)`:
```css
@media (hover: hover) {
  .info-team__card:hover {
    transform: translateY(-6px);
  }
}
```

---

## Related Templates

- **PageOurStory** (`/src/app/components/templates/PageOurStory.tsx`) — Company story
- **PageCareers** (`/src/app/components/templates/PageCareers.tsx`) — Job openings (CTA target)
- **PageAbout** (`/src/app/components/templates/PageAbout.tsx`) — About page
- **PageSustainability** (`/src/app/components/templates/PageSustainability.tsx`) — Sustainability page

---

## Related Patterns

- **InfoHero** (Shared hero pattern) — Full-width image hero
- **InfoStats** (Shared stats pattern) — Gradient number stats
- **InfoCTA** (Shared CTA pattern) — Centered CTA section

---

**Status:** ✅ Production-ready (team member modals recommended)  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After team member details implementation
