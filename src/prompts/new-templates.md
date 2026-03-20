# New Templates — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt (Reusable Scaffold)
**Trigger Word:** `new templates`
**Duration:** 20-40 minutes per template

---

## Objective

Scaffold and build a new WordPress FSE-equivalent template. Templates define the overall page structure — header, content area arrangement, sidebar placement, and footer. This is the reusable builder prompt that `expand templates` feeds into. Unlike `new pages` which creates a specific page, `new templates` creates a reusable layout structure that multiple pages can share.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — critical rules
2. Read `/guidelines/overview-templates.md` — template architecture and WordPress FSE mapping
3. Read `/guidelines/overview-parts.md` — template parts (header/footer variants)
4. Read `/guidelines/overview-sections.md` — section styling
5. Read `/guidelines/design-tokens/Colors.md` — colour tokens
6. Read `/guidelines/design-tokens/Dark-Mode.md` — dark mode

---

## Parameters

The user provides (or a task list entry specifies):

| Parameter | Required | Example |
|-----------|----------|---------|
| **Template name** | ✅ | "Archive Product" |
| **WordPress equivalent** | Recommended | `archive-product.html` |
| **Layout type** | ✅ | Full-width / Sidebar-left / Sidebar-right / Split |
| **Header variant** | Optional | Main / Minimal / Transparent / Checkout |
| **Footer variant** | Optional | Main / Minimal / Checkout |
| **Content slots** | Recommended | "Product grid with filter sidebar" |

If parameters are missing, ask the user before proceeding.

---

## Execution Steps

### Phase 1: Design the template structure (3-5 min)

Map the template to WordPress FSE structure:

```
┌─────────────────────────────────────────┐
│ Header Part: [variant]                  │
├─────────────────────────────────────────┤
│ [Template content area]                 │
│                                         │
│  ┌──────────┐  ┌──────────────────────┐ │
│  │ Sidebar  │  │ Main content         │ │
│  │ (opt.)   │  │                      │ │
│  │          │  │ [Pattern slots]      │ │
│  └──────────┘  └──────────────────────┘ │
│                                         │
├─────────────────────────────────────────┤
│ Footer Part: [variant]                  │
└─────────────────────────────────────────┘
```

Define:
- Which header/footer part to use
- Whether sidebar is present and which side
- Content width: `content-size` (768px) or `wide-size` (1440px) or full-width
- Which pattern slots the template exposes

### Phase 2: Create the template component (10-20 min)

1. Create `/src/app/templates/[TemplateName].tsx`
2. Structure:
   ```tsx
   // WordPress FSE equivalent: [template-name].html
   const TemplateName = () => {
     return (
       <SiteLayout headerVariant="[variant]" footerVariant="[variant]">
         <main className="wp-block-template-[name]">
           {/* Pattern slots */}
         </main>
       </SiteLayout>
     );
   };
   ```
3. Use existing patterns via imports — templates COMPOSE patterns, they don't contain raw markup
4. Keep under 300 lines
5. All content from data files
6. BEM classes, dark mode, WCAG AA

### Phase 3: Create template-specific CSS (3-5 min)

If the template needs layout CSS beyond what patterns provide:

1. Create `/src/styles/blocks/templates/[template-name].css`
2. BEM: `.wp-block-template-[name]`, `.wp-block-template-[name]__[element]`
3. WordPress layout variables for widths
4. Dark mode via CSS variables
5. Responsive breakpoints (mobile-first)
6. Add `@import` to globals.css

### Phase 4: Create route entry (2-3 min)

1. Add import to `/routes.ts`
2. Define route with correct path pattern
3. For archive templates: include pagination params
4. For single templates: include dynamic `:slug` or `:id` params

### Phase 5: Create template documentation (2-3 min)

Add an entry to `/guidelines/overview-templates.md` or `/guidelines/templates/`:

```markdown
### [TemplateName]
- **WordPress equivalent:** `[template-name].html`
- **Layout:** [Full-width / Sidebar / Split]
- **Header:** [variant]
- **Footer:** [variant]
- **Pattern slots:** [list of patterns used]
- **Route:** `/[path]`
```

### Phase 6: Summary (1 min)

```
Template created: [Template Name]
- Component: /src/app/templates/[TemplateName].tsx
- CSS: /src/styles/blocks/templates/[template-name].css
- WordPress equivalent: [template-name].html
- Layout: [type]
- Patterns composed: [list]
- Route: /[path]

→ Next: Say "new templates" again to scaffold the next template.
→ Or: Say "new pages" to create a page using this template.
→ Or: Say "continue" to work on the next task.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-templates.md`
- `/guidelines/overview-parts.md`
- `/guidelines/overview-sections.md`
- `/guidelines/design-tokens/Colors.md`
- `/guidelines/design-tokens/Dark-Mode.md`
- `/guidelines/development/modern-react-coding-standards.md`

---

**Version:** 1.0
**Trigger Word:** `new templates`
