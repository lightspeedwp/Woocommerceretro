# New Patterns — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt (Reusable Scaffold)
**Trigger Word:** `new patterns`
**Duration:** 15-30 minutes per pattern

---

## Objective

Scaffold and build a new reusable section pattern component. Patterns are the composable building blocks of templates — hero banners, product grids, testimonial sections, CTAs, etc. This is the reusable builder prompt that `expand patterns` feeds into.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — critical rules (no Tailwind, BEM, dark mode, sentence case)
2. Read `/guidelines/overview-patterns.md` — pattern architecture
3. Read `/guidelines/overview-sections.md` — section styling and WordPress alignment
4. Read `/guidelines/components/SectionPresets.md` — section preset class patterns
5. Read `/guidelines/design-tokens/Colors.md` — colour tokens
6. Read `/guidelines/design-tokens/Dark-Mode.md` — dark mode
7. Read `/guidelines/design-tokens/Typography.md` — heading components
8. Read `/guidelines/design-tokens/Spacing.md` — spacing scale
9. Read `/guidelines/development/bem-methodology.md` — BEM naming

---

## Parameters

The user provides (or a task list entry specifies):

| Parameter | Required | Example |
|-----------|----------|---------|
| **Pattern name** | ✅ | "Testimonial Carousel" |
| **Section type** | ✅ | Hero / Product / Content / CTA / Social Proof / Commerce / Navigation |
| **Visual description** | Recommended | "3-column card carousel with customer photo, quote, and star rating" |
| **Used by** | Optional | Home, About, Product Detail |
| **Retro style notes** | Optional | "Pixel-art star icons, CRT scanline overlay on cards" |

If parameters are missing, ask the user before proceeding.

---

## Execution Steps

### Phase 1: Design the pattern (3-5 min)

1. Define the pattern's visual structure:
   ```
   ┌─ Section wrapper (.wp-block-[pattern-name]) ─────────────┐
   │                                                           │
   │  ┌─ Section header ────────────────────────────────────┐  │
   │  │ Heading + optional subheading                       │  │
   │  └────────────────────────────────────────────────────┘  │
   │                                                           │
   │  ┌─ Content area ──────────────────────────────────────┐  │
   │  │ [Pattern-specific layout]                           │  │
   │  └────────────────────────────────────────────────────┘  │
   │                                                           │
   │  ┌─ Optional CTA ──────────────────────────────────────┐  │
   │  │ Button / Link                                       │  │
   │  └────────────────────────────────────────────────────┘  │
   │                                                           │
   └───────────────────────────────────────────────────────────┘
   ```

2. Determine WordPress alignment: `alignwide`, `alignfull`, or default
3. Choose section preset from SectionPresets.md (light, dark, accent, etc.)
4. List sub-blocks this pattern needs (existing or new)

### Phase 2: Create the data file (3-5 min)

1. Create `/src/app/data/[pattern-name]-data.ts`
2. Define TypeScript interfaces:
   ```typescript
   export interface [PatternItem] {
     id: string;
     // ... all content fields
   }
   
   export interface [PatternSection] {
     heading: string;
     subheading?: string;
     items: [PatternItem][];
     ctaLabel?: string;
     ctaUrl?: string;
   }
   
   export const [PATTERN_DATA]: [PatternSection] = {
     heading: '[Sentence case heading]',
     // ... realistic mock data
   };
   ```
3. ALL display text in the data file — zero hardcoded strings in the component
4. Use realistic, on-brand mock content that fits the PlayPocket retro gaming theme

### Phase 3: Create the pattern component (10-15 min)

1. Create `/src/app/components/patterns/[PatternName].tsx`
2. Follow ALL project rules:
   - Import data from data file
   - `<Heading level="N">` for all headings — never raw `<h1>`-`<h6>`
   - BEM class names only — zero Tailwind classes
   - Zero inline `style={{}}` (exempt: dynamic values, transforms, CSS variable injection)
   - Full dark mode via CSS variables — no `dark:` prefixes
   - Semantic HTML (`<section>`, `<article>`, `<figure>`, etc.)
   - `aria-label` on icon-only buttons, `aria-expanded` on toggles
   - 44px minimum touch targets on all interactive elements
   - `prefers-reduced-motion` on animations
   - Sentence case headings
   - Phosphor Icons (not Lucide)
3. Props interface for customisation:
   ```typescript
   interface [PatternName]Props {
     className?: string;
     variant?: 'default' | 'dark' | 'accent';
     // pattern-specific props
   }
   ```
4. Keep under 300 lines — extract sub-components if needed
5. Export as named export (not default)

### Phase 4: Create section CSS (5-10 min)

1. Create `/src/styles/sections/[pattern-name].css`
2. Structure:
   ```css
   /* [Pattern Name] Section
    * WordPress block equivalent: wp:group / wp:columns
    * Used in: [template list]
    */
   
   .wp-block-[pattern-name] {
     /* Layout */
     /* Typography */
     /* Spacing — use --wp--preset--spacing--* */
     /* Colors — use --wp--preset--color--* */
   }
   
   .wp-block-[pattern-name]__[element] {
     /* Element styles */
   }
   
   /* Dark mode */
   .dark .wp-block-[pattern-name] {
     /* Dark mode overrides via CSS variables */
   }
   
   /* Responsive */
   @media (max-width: 768px) {
     .wp-block-[pattern-name] {
       /* Mobile adjustments */
     }
   }
   
   /* Reduced motion */
   @media (prefers-reduced-motion: reduce) {
     .wp-block-[pattern-name] {
       /* Remove/reduce animations */
     }
   }
   ```
3. WordPress CSS variables for ALL values — no hardcoded colours, font sizes, or spacing
4. Keep under 200 lines
5. Add `@import` to `/styles/globals.css`

### Phase 5: Register and connect (2-3 min)

1. Add CSS `@import` to `/styles/globals.css` (or active entry point)
2. Import and use the pattern in the target template(s) if specified
3. Update pattern inventory in `/guidelines/overview-patterns.md` if it exists

### Phase 6: Summary (1 min)

```
Pattern created: [Pattern Name]
- Component: /src/app/components/patterns/[PatternName].tsx ([N] lines)
- CSS: /src/styles/sections/[pattern-name].css ([N] lines)
- Data: /src/app/data/[pattern-name]-data.ts
- Section type: [type]
- Dark mode: ✅
- WCAG AA: ✅
- Responsive: ✅

→ Next: Say "new patterns" again to scaffold the next pattern.
→ Or: Say "new pages" or "new templates" to use this pattern in a page.
→ Or: Say "continue" to work on the next task.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-patterns.md`
- `/guidelines/overview-sections.md`
- `/guidelines/components/SectionPresets.md`
- `/guidelines/design-tokens/Colors.md`
- `/guidelines/design-tokens/Typography.md`
- `/guidelines/design-tokens/Spacing.md`
- `/guidelines/design-tokens/Dark-Mode.md`
- `/guidelines/development/modern-react-coding-standards.md`
- `/guidelines/development/bem-methodology.md`

---

**Version:** 1.0
**Trigger Word:** `new patterns`
