# Tailwind → WordPress CSS Quick Reference Guide

> **ARCHIVED:** This file is retained as historical reference only. Tailwind CSS has been fully removed from the codebase as of March 2026. All components use WordPress/WooCommerce BEM classes with `--wp--preset--*` CSS variables.

**Version:** 1.0  
**Date:** January 13, 2026  
**Status:** Archived  
**Purpose:** Fast lookup for converting Tailwind utility classes to WordPress semantic CSS

---

## 🎯 Quick Decision Tree

```
Need to style a component?
  ↓
❌ DON'T use: className="flex items-center gap-4 p-6"
  ↓
✅ DO use: className="wp-component-name"
  ↓
Add CSS to /src/styles/globals.css
```

---

## 📋 Layout Patterns

### Flexbox Layouts

| Tailwind | WordPress Class | CSS in globals.css |
|----------|----------------|-------------------|
| `flex` | `.wp-flex` | `display: flex;` |
| `flex items-center` | `.wp-flex-center-v` | `display: flex; align-items: center;` |
| `flex justify-center` | `.wp-flex-center-h` | `display: flex; justify-content: center;` |
| `flex items-center justify-center` | `.wp-flex-center` | `display: flex; align-items: center; justify-content: center;` |
| `flex items-center justify-between` | `.wp-flex-between` | `display: flex; align-items: center; justify-content: space-between;` |
| `flex flex-col` | `.wp-flex-col` | `display: flex; flex-direction: column;` |
| `flex gap-4` | `.wp-flex-gap-md` | `display: flex; gap: var(--wp--preset--spacing--40);` |

**Example:**

❌ **Tailwind (WRONG):**
```tsx
<div className="flex items-center justify-between gap-4">
```

✅ **WordPress (CORRECT):**
```tsx
<div className="wp-flex-between wp-gap-md">
```

**CSS in `/src/styles/globals.css`:**
```css
.wp-flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wp-gap-md {
  gap: var(--wp--preset--spacing--40);
}
```

---

### Grid Layouts

| Tailwind | WordPress Class | CSS in globals.css |
|----------|----------------|-------------------|
| `grid` | `.wp-grid` | `display: grid;` |
| `grid grid-cols-2` | `.wp-grid-2` | `display: grid; grid-template-columns: repeat(2, 1fr);` |
| `grid grid-cols-3` | `.wp-grid-3` | `display: grid; grid-template-columns: repeat(3, 1fr);` |
| `grid grid-cols-4` | `.wp-grid-4` | `display: grid; grid-template-columns: repeat(4, 1fr);` |
| `grid gap-6` | `.wp-grid-gap-lg` | `display: grid; gap: var(--wp--preset--spacing--60);` |

**Responsive Grid Example:**

❌ **Tailwind (WRONG):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

✅ **WordPress (CORRECT):**
```tsx
<div className="wp-grid-responsive">
```

**CSS in `/src/styles/globals.css`:**
```css
.wp-grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--60);
}

@media (min-width: 768px) {
  .wp-grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .wp-grid-responsive {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 🎨 Spacing Patterns

### Padding

| Tailwind | WordPress CSS Variable | Value |
|----------|----------------------|-------|
| `p-0` | `var(--wp--preset--spacing--0)` | 0 |
| `p-1` | `var(--wp--preset--spacing--10)` | 2px |
| `p-2` | `var(--wp--preset--spacing--20)` | 4px |
| `p-3` | `var(--wp--preset--spacing--30)` | 8px |
| `p-4` | `var(--wp--preset--spacing--40)` | 16px |
| `p-6` | `var(--wp--preset--spacing--60)` | 32px |
| `p-8` | `var(--wp--preset--spacing--80)` | 48px |

**Example:**

❌ **Tailwind (WRONG):**
```tsx
<div className="p-6 px-8">
```

✅ **WordPress (CORRECT):**
```tsx
<div className="wp-card">
```

**CSS:**
```css
.wp-card {
  padding: var(--wp--preset--spacing--60);
  padding-left: var(--wp--preset--spacing--80);
  padding-right: var(--wp--preset--spacing--80);
}
```

---

### Margin

| Tailwind | WordPress CSS Variable | Value |
|----------|----------------------|-------|
| `m-4` | `var(--wp--preset--spacing--40)` | 16px |
| `mb-4` | `margin-bottom: var(--wp--preset--spacing--40)` | 16px |
| `mt-6` | `margin-top: var(--wp--preset--spacing--60)` | 32px |
| `mx-auto` | `margin-left: auto; margin-right: auto;` | auto |

---

### Gap

| Tailwind | WordPress CSS Variable | Value |
|----------|----------------------|-------|
| `gap-2` | `var(--wp--preset--spacing--20)` | 4px |
| `gap-4` | `var(--wp--preset--spacing--40)` | 16px |
| `gap-6` | `var(--wp--preset--spacing--60)` | 32px |
| `gap-8` | `var(--wp--preset--spacing--80)` | 48px |

---

## 📝 Typography Patterns

### Font Sizes

| Tailwind | WordPress CSS Variable | Fluid Value |
|----------|----------------------|-------------|
| `text-xs` | `var(--wp--preset--font-size--small)` | 12px → 14px |
| `text-sm` | `var(--wp--preset--font-size--medium)` | 14px → 16px |
| `text-base` | `var(--wp--preset--font-size--normal)` | 16px → 21px |
| `text-lg` | `var(--wp--preset--font-size--large)` | 18px → 22px |
| `text-xl` | `var(--wp--preset--font-size--x-large)` | 20px → 24px |
| `text-2xl` | `var(--wp--preset--font-size--xx-large)` | 21px → 29px |
| `text-3xl` | `var(--wp--preset--font-size--xxx-large)` | 26px → 35px |
| `text-4xl` | `var(--wp--preset--font-size--huge)` | 32px → 48px |

**Example:**

❌ **Tailwind (WRONG):**
```tsx
<h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
  Title
</h2>
```

✅ **WordPress (CORRECT):**
```tsx
<h2 className="wp-heading-2">Title</h2>
```

**CSS:**
```css
.wp-heading-2 {
  font-size: var(--wp--preset--font-size--xx-large);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
}
```

---

### Font Weights

| Tailwind | WordPress CSS Variable | Value |
|----------|----------------------|-------|
| `font-light` | `var(--wp--preset--font-weight--light)` | 300 |
| `font-normal` | `var(--wp--preset--font-weight--normal)` | 400 |
| `font-medium` | `var(--wp--preset--font-weight--medium)` | 500 |
| `font-semibold` | `var(--wp--preset--font-weight--semibold)` | 600 |
| `font-bold` | `var(--wp--preset--font-weight--bold)` | 700 |

---

### Text Alignment

| Tailwind | WordPress Class | CSS |
|----------|----------------|-----|
| `text-left` | `.wp-text-left` | `text-align: left;` |
| `text-center` | `.wp-text-center` | `text-align: center;` |
| `text-right` | `.wp-text-right` | `text-align: right;` |

---

## 🎨 Color Patterns

### Background Colors

| Tailwind | WordPress CSS Variable |
|----------|----------------------|
| `bg-white dark:bg-gray-900` | `var(--wp--preset--color--surface)` |
| `bg-gray-50 dark:bg-gray-900` | `var(--wp--preset--color--surface)` |
| `bg-gray-100 dark:bg-gray-800` | `var(--wp--preset--color--surface-elevated)` |
| `bg-purple-600 dark:bg-purple-500` | `var(--wp--preset--color--accent)` |
| `bg-black dark:bg-gray-950` | `var(--wp--preset--color--background-dark)` |

**Example:**

❌ **Tailwind (WRONG):**
```tsx
<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
```

✅ **WordPress (CORRECT):**
```tsx
<div className="wp-card">
```

**CSS:**
```css
.wp-card {
  background-color: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
}

/* Dark mode automatic via CSS variables */
```

---

### Text Colors

| Tailwind | WordPress CSS Variable | Use Case |
|----------|----------------------|----------|
| `text-gray-900 dark:text-gray-50` | `var(--wp--preset--color--foreground)` | Primary text |
| `text-gray-600 dark:text-gray-400` | `var(--wp--preset--color--muted-foreground)` | Secondary text |
| `text-gray-500 dark:text-gray-500` | `var(--wp--preset--color--muted)` | Tertiary/meta |
| `text-purple-600 dark:text-purple-400` | `var(--wp--preset--color--accent)` | Accent text |
| `text-red-600 dark:text-red-400` | `var(--wp--preset--color--error)` | Error messages |
| `text-green-600 dark:text-green-400` | `var(--wp--preset--color--success)` | Success messages |

---

### Border Colors

| Tailwind | WordPress CSS Variable |
|----------|----------------------|
| `border-gray-200 dark:border-gray-700` | `var(--wp--preset--color--border)` |
| `border-gray-300 dark:border-gray-600` | `var(--wp--preset--color--border-strong)` |
| `border-purple-600 dark:border-purple-400` | `var(--wp--preset--color--accent)` |

---

## 🔲 Border & Rounded Patterns

### Border Radius

| Tailwind | WordPress CSS Variable | Value |
|----------|----------------------|-------|
| `rounded` | `var(--wp--preset--border-radius--sm)` | 4px |
| `rounded-md` | `var(--wp--preset--border-radius--md)` | 6px |
| `rounded-lg` | `var(--wp--preset--border-radius--lg)` | 8px |
| `rounded-xl` | `var(--wp--preset--border-radius--xl)` | 12px |
| `rounded-full` | `var(--wp--preset--border-radius--full)` | 9999px |

---

### Border Width

| Tailwind | CSS Value |
|----------|-----------|
| `border` | `border: 1px solid;` |
| `border-2` | `border: 2px solid;` |
| `border-t` | `border-top: 1px solid;` |
| `border-b` | `border-bottom: 1px solid;` |

---

## 📐 Sizing Patterns

### Width

| Tailwind | WordPress Class | CSS |
|----------|----------------|-----|
| `w-full` | `.wp-w-full` | `width: 100%;` |
| `w-1/2` | `.wp-w-half` | `width: 50%;` |
| `w-screen` | `.wp-w-screen` | `width: 100vw;` |
| `max-w-7xl` | `.wp-max-w-site` | `max-width: var(--wp--preset--layout--site-size);` (1400px) |
| `max-w-4xl` | `.wp-max-w-wide` | `max-width: var(--wp--preset--layout--wide-size);` (1200px) |
| `max-w-prose` | `.wp-max-w-content` | `max-width: var(--wp--preset--layout--content-size);` (65ch) |

---

### Height

| Tailwind | WordPress Class | CSS |
|----------|----------------|-----|
| `h-full` | `.wp-h-full` | `height: 100%;` |
| `h-screen` | `.wp-h-screen` | `height: 100vh;` |
| `min-h-screen` | `.wp-min-h-screen` | `min-height: 100vh;` |

---

## 🎬 Interactive States

### Hover States

❌ **Tailwind (WRONG):**
```tsx
<button className="bg-purple-600 hover:bg-purple-700">
```

✅ **WordPress (CORRECT):**
```tsx
<button className="wp-button wp-button--primary">
```

**CSS:**
```css
.wp-button--primary {
  background-color: var(--wp--preset--color--accent);
  transition: background-color var(--wp--preset--transition--base) ease;
}

.wp-button--primary:hover {
  background-color: var(--wp--preset--color--accent-hover);
}
```

---

### Focus States

❌ **Tailwind (WRONG):**
```tsx
<input className="focus:ring-2 focus:ring-purple-600 focus:border-purple-600">
```

✅ **WordPress (CORRECT):**
```tsx
<input className="wp-input">
```

**CSS:**
```css
.wp-input {
  border: 1px solid var(--wp--preset--color--border);
  transition: border-color var(--wp--preset--transition--base) ease;
}

.wp-input:focus {
  outline: 2px solid var(--wp--preset--color--accent);
  outline-offset: 2px;
  border-color: var(--wp--preset--color--accent);
}
```

---

## 📦 Component Patterns

### Card Component

❌ **Tailwind (WRONG):**
```tsx
<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
    Card Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400">
    Card description
  </p>
</div>
```

✅ **WordPress (CORRECT):**
```tsx
<div className="wp-card">
  <h3 className="wp-card__title">Card Title</h3>
  <p className="wp-card__description">Card description</p>
</div>
```

**CSS in `/src/styles/globals.css`:**
```css
.wp-card {
  background-color: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--lg);
  padding: var(--wp--preset--spacing--60);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow var(--wp--preset--transition--base) ease;
}

.wp-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.wp-card__title {
  font-size: var(--wp--preset--font-size--x-large);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-card__description {
  color: var(--wp--preset--color--muted-foreground);
}
```

---

### Button Component

❌ **Tailwind (WRONG):**
```tsx
<button className="bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-colors">
  Click Me
</button>
```

✅ **WordPress (CORRECT):**
```tsx
<button className="wp-button wp-button--primary">
  Click Me
</button>
```

**CSS:**
```css
.wp-button {
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--60);
  border-radius: var(--wp--preset--border-radius--lg);
  font-weight: var(--wp--preset--font-weight--medium);
  transition: all var(--wp--preset--transition--base) ease;
  cursor: pointer;
}

.wp-button--primary {
  background-color: var(--wp--preset--color--accent);
  color: var(--wp--preset--color--accent-foreground);
}

.wp-button--primary:hover {
  background-color: var(--wp--preset--color--accent-hover);
}

.wp-button--primary:focus {
  outline: 2px solid var(--wp--preset--color--accent);
  outline-offset: 2px;
}
```

---

### Section/Container Pattern

❌ **Tailwind (WRONG):**
```tsx
<section className="py-16 bg-white dark:bg-[#0f0f0f] border-t border-gray-100 dark:border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
        Section Title
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Section description
      </p>
    </div>
  </div>
</section>
```

✅ **WordPress (CORRECT):**
```tsx
<section className="wp-section wp-section--bordered">
  <div className="wp-container">
    <div className="wp-section__header">
      <h2 className="wp-section__title">Section Title</h2>
      <p className="wp-section__description">Section description</p>
    </div>
  </div>
</section>
```

**CSS:**
```css
.wp-section {
  padding-top: var(--wp--preset--spacing--100);
  padding-bottom: var(--wp--preset--spacing--100);
  background-color: var(--wp--preset--color--surface);
}

.wp-section--bordered {
  border-top: 1px solid var(--wp--preset--color--border);
}

.wp-container {
  max-width: var(--wp--preset--layout--site-size);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--wp--preset--spacing--40);
  padding-right: var(--wp--preset--spacing--40);
}

.wp-section__header {
  text-align: center;
}

.wp-section__title {
  font-size: var(--wp--preset--font-size--xxx-large);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-section__description {
  color: var(--wp--preset--color--muted-foreground);
  max-width: var(--wp--preset--layout--content-size);
  margin-left: auto;
  margin-right: auto;
}
```

---

## 🔄 Responsive Design

### Mobile-First Approach

❌ **Tailwind (WRONG):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
```

✅ **WordPress (CORRECT):**
```tsx
<div className="wp-grid-responsive">
```

**CSS:**
```css
.wp-grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--40);
}

@media (min-width: 768px) {
  .wp-grid-responsive {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--wp--preset--spacing--60);
  }
}

@media (min-width: 1024px) {
  .wp-grid-responsive {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--wp--preset--spacing--80);
  }
}
```

---

### Visibility Utilities

| Tailwind | WordPress Class | CSS |
|----------|----------------|-----|
| `hidden md:block` | `.wp-hidden-mobile` | `display: none;` @media ≥768px `display: block;` |
| `block md:hidden` | `.wp-visible-mobile` | `display: block;` @media ≥768px `display: none;` |

---

## 💡 Common Mistakes & Fixes

### Mistake 1: Inline Styles
❌ **WRONG:**
```tsx
<div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
```

✅ **CORRECT:**
```tsx
<div className="wp-content-box">
```

---

### Mistake 2: Hardcoded Colors
❌ **WRONG:**
```tsx
<div className="wp-box" style={{ backgroundColor: '#7c3aed' }}>
```

✅ **CORRECT:**
```tsx
<div className="wp-box wp-box--accent">
```

**CSS:**
```css
.wp-box--accent {
  background-color: var(--wp--preset--color--accent);
}
```

---

### Mistake 3: Missing Dark Mode
❌ **WRONG:**
```css
.wp-card {
  background: #ffffff;
  color: #1a1a1a;
}
```

✅ **CORRECT:**
```css
.wp-card {
  background-color: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--foreground);
}
/* Dark mode automatic via CSS variables */
```

---

## 📚 WordPress CSS Variables Reference

### Complete Variable List

```css
/* Colors */
--wp--preset--color--surface
--wp--preset--color--foreground
--wp--preset--color--background
--wp--preset--color--border
--wp--preset--color--accent
--wp--preset--color--accent-foreground
--wp--preset--color--muted
--wp--preset--color--muted-foreground
--wp--preset--color--error
--wp--preset--color--success
--wp--preset--color--warning

/* Spacing (2px → 128px) */
--wp--preset--spacing--10  /* 2px */
--wp--preset--spacing--20  /* 4px */
--wp--preset--spacing--30  /* 8px */
--wp--preset--spacing--40  /* 16px */
--wp--preset--spacing--50  /* 24px */
--wp--preset--spacing--60  /* 32px */
--wp--preset--spacing--70  /* 40px */
--wp--preset--spacing--80  /* 48px */
--wp--preset--spacing--90  /* 64px */
--wp--preset--spacing--100 /* 128px */

/* Typography */
--wp--preset--font-size--small        /* 12px → 14px */
--wp--preset--font-size--medium       /* 14px → 16px */
--wp--preset--font-size--normal       /* 16px → 21px */
--wp--preset--font-size--large        /* 18px → 22px */
--wp--preset--font-size--x-large      /* 20px → 24px */
--wp--preset--font-size--xx-large     /* 21px → 29px */
--wp--preset--font-size--xxx-large    /* 26px → 35px */
--wp--preset--font-size--huge         /* 32px → 48px */
--wp--preset--font-size--gigantic     /* 38px → 64px */

/* Font Weights */
--wp--preset--font-weight--light      /* 300 */
--wp--preset--font-weight--normal     /* 400 */
--wp--preset--font-weight--medium     /* 500 */
--wp--preset--font-weight--semibold   /* 600 */
--wp--preset--font-weight--bold       /* 700 */

/* Layout */
--wp--preset--layout--content-size    /* 65ch */
--wp--preset--layout--wide-size       /* 1200px */
--wp--preset--layout--site-size       /* 1400px */

/* Border Radius */
--wp--preset--border-radius--sm       /* 4px */
--wp--preset--border-radius--md       /* 6px */
--wp--preset--border-radius--lg       /* 8px */
--wp--preset--border-radius--xl       /* 12px */
--wp--preset--border-radius--full     /* 9999px */

/* Transitions */
--wp--preset--transition--base        /* 200ms */
--wp--preset--transition--fast        /* 150ms */
--wp--preset--transition--slow        /* 300ms */
```

---

## 🎯 Workflow Checklist

When converting from Tailwind to WordPress CSS:

1. **Identify component**: What is the semantic purpose?
2. **Create BEM class name**: `.wp-[component]__[element]--[modifier]`
3. **Write CSS in globals.css**: Use WordPress variables
4. **Replace className**: Remove all utility classes
5. **Test dark mode**: Verify CSS variables handle both modes
6. **Test responsive**: Verify breakpoints work correctly

---

## 📖 Additional Resources

- **Complete Guidelines:** `/guidelines/Guidelines.md`
- **Design Tokens:** `/guidelines/design-tokens/`
- **Global Stylesheet:** `/src/styles/globals.css`
- **WordPress Variables:** `/src/styles/theme-variables.css`
- **Audit Report:** `/guidelines/audits/TAILWIND_REMOVAL_GUIDELINES_AUDIT.md`

---

## ⚡ Quick Tips

1. **Always use semantic class names** - Describe what it is, not how it looks
2. **Never hardcode colors** - Always use CSS variables
3. **Think in components** - Group related styles together
4. **Dark mode is automatic** - CSS variables handle the switching
5. **Mobile-first** - Write base styles for mobile, add desktop with @media

---

**Version:** 1.0  
**Last Updated:** January 13, 2026  
**Maintained By:** Development Team