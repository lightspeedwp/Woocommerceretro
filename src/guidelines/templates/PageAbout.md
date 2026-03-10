# PageAbout Template

**Category**: Templates  
**Route**: `/about`  
**WordPress**: `page-about.html`  
**Version**: 2.6 (Funky Redesign)

---

## Purpose

Company about page showcasing brand story, values, team, testimonials, and a commerce CTA. Uses the shared `info-*` BEM pattern for info pages (same CSS as PageOurStory, PageTeam, PageCareers, etc.).

---

## Structure

```
Layout (Part)
  |-- Hero Section (info-hero)
  |     |-- Background image (Unsplash)
  |     |-- Overlay gradient
  |     |-- Glass badge ("About Us" + Building2 icon)
  |     |-- Title (h1)
  |     |-- Subtitle (p)
  |     |-- 2x floating orbs (funky-orb)
  |-- Gradient Divider (funky-section__divider)
  |-- Story Split Section (info-story)
  |     |-- Image column
  |     |-- Text column (heading, 3 paragraphs)
  |-- Gradient Divider (subtle)
  |-- Values Grid Section (info-cards--alt)
  |     |-- Gradient heading
  |     |-- Subheading
  |     |-- Card grid (icon circle + title + description, glow effect)
  |-- Gradient Divider
  |-- Stats Section (info-stats)
  |     |-- Heading + subheading
  |     |-- Stats grid (number + label, gradient number color)
  |     |-- 2x floating orbs
  |-- Gradient Divider
  |-- Team Section (info-team)
  |     |-- Heading + subheading
  |     |-- Team card grid (avatar + name + role + bio, glow effect)
  |-- Gradient Divider (subtle)
  |-- Testimonials Section (info-cards--alt)
  |     |-- Gradient heading
  |     |-- Card grid (quote + author + role, glow effect)
  |-- Gradient Divider
  |-- CTA Section (info-cta)
        |-- Heading
        |-- Primary CTA button (Link to /shop)
        |-- 2x floating orbs
```

---

## Data Sources

| Data | Import | File |
|------|--------|------|
| Company stats | `companyStats` | `@/data/company` |
| Company info | `companyInfo` | `@/data/company` |
| Company values | `companyValues` | `@/data/company` |
| Page content | `aboutPageContent` | `@/data/company` |
| Team members | `teamMembers` | `@/data/team` |
| Testimonials | `testimonials` | `@/data/testimonials` |

---

## Funky Treatments

| Element | Treatment | CSS Class |
|---------|-----------|-----------|
| Hero | Background image + gradient overlay, glass badge, floating orbs | `.info-hero`, `.funky-glass-panel`, `.funky-orb` |
| Section dividers | Gradient horizontal rules (pink-to-cyan) | `.funky-section__divider`, `--subtle` |
| Values/Testimonials | Glow card effect, gradient section heading | `.info-cards__card-glow`, `.funky-section__heading--gradient` |
| Stats numbers | Gradient text color | `.info-stats__number` |
| Team cards | Glow effect, avatar initials | `.info-team__card-glow` |
| CTA section | Floating orbs, neon primary button | `.info-cta`, `.info-cta__btn--primary` |

**CSS File:** `/src/styles/sections/info-pages-funky.css`

---

## Accessibility

- All images have alt text (hero bg uses empty alt for decorative)
- Proper heading hierarchy: h1 (hero) -> h2 (sections) -> h3 (cards) -> h4 (testimonial authors)
- All interactive elements meet 44x44px minimum touch target
- Links use semantic `<Link>` component from React Router
- Focus-visible states on all interactive elements via funky focus rings
- Decorative orbs use `pointer-events: none` and are hidden from assistive tech

---

## Dark Mode

Handled automatically via CSS variables in `info-pages-funky.css`:
- Hero overlay uses stronger opacity in dark mode
- Card backgrounds shift to `--wp--preset--color--surface`
- Text colors use rgba white values for proper contrast
- Orb glow intensity increases slightly in dark mode
- All text meets WCAG AA contrast requirements

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<640px) | Single column, stacked story layout, smaller orbs |
| Tablet (640-1024px) | 2-column values grid, 2-column team grid |
| Desktop (>1024px) | Side-by-side story layout, 3-column grids |

---

## Related Templates

- `PageOurStory` — Extended brand narrative (shares `info-*` CSS)
- `PageTeam` — Full team directory (shares `info-*` CSS)
- `PageCareers` — Job listings (shares `info-*` CSS)
- `PageStores` — Store locations (shares `info-*` CSS)
