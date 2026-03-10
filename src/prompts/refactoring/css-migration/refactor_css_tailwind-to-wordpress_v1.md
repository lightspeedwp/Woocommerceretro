# CSS Migration: Tailwind to WordPress Classes

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Refactoring  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | CSS Refactoring |
| **Target** | Component files with Tailwind classes |
| **Complexity** | Medium |
| **Estimated Time** | 60-90 minutes per component |
| **Prerequisites** | Guidelines.md, CSS migration guide |
| **Output Files** | Refactored component + updated globals.css |

---

## 🎯 Objective

Systematically migrate components from Tailwind utility classes to WordPress/WooCommerce semantic class names with global CSS styling.

### What This Prompt Does:
- ✅ Identifies Tailwind classes in component
- ✅ Creates semantic WordPress class names
- ✅ Writes global CSS with WordPress variables
- ✅ Refactors component to use new classes
- ✅ Preserves dark mode functionality
- ✅ Maintains accessibility features

### What This Prompt Does NOT Do:
- ❌ Remove Tailwind from project (gradual migration)
- ❌ Migrate all components at once
- ❌ Change component functionality
- ❌ Alter component structure

---

## 📚 Context & Background

### Why Migrate?

**Current (Tailwind):**
```tsx
<div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg">
```

**Target (WordPress):**
```tsx
<div className="woocommerce-product-card">
```

**Benefits:**
1. **WordPress Alignment** - Direct mapping to WP blocks
2. **Maintainability** - Centralized styling
3. **Performance** - No Tailwind build step
4. **Portability** - Easy to port to actual WordPress
5. **Semantic** - Class names describe purpose

---

## 📋 Requirements

### Migration Scope:
1. Replace all Tailwind utility classes
2. Create semantic WordPress class names
3. Write CSS in `/src/styles/globals.css`
4. Preserve all functionality
5. Maintain dark mode
6. Keep accessibility features

### CSS Standards:
1. Use WordPress `--wp--preset--*` variables
2. Follow BEM naming convention
3. Include light and dark mode
4. Add hover/focus states
5. Ensure responsive design

---

## 🔧 Implementation Instructions

### Step 1: Analyze Current Component

**Action:** Identify all Tailwind classes

**Process:**
1. Open component file
2. List all `className` attributes
3. Categorize classes by purpose
4. Note responsive variants
5. Document dark mode classes

**Example Analysis:**
```tsx
// Current component
<div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
    Description
  </p>
</div>
```

**Class Inventory:**
```
Container:
- bg-white dark:bg-gray-900 (background)
- p-6 (padding)
- rounded-lg (border-radius)
- shadow-md hover:shadow-xl (box-shadow)
- border border-gray-200 dark:border-gray-700 (border)
- transition-shadow (transition)

Title:
- text-2xl (font-size)
- font-bold (font-weight)
- text-gray-900 dark:text-white (color)
- mb-4 (margin-bottom)

Description:
- text-gray-600 dark:text-gray-400 (color)
- text-base (font-size)
- leading-relaxed (line-height)
```

---

### Step 2: Create Semantic Class Names

**Action:** Design WordPress-aligned class names

**Naming Convention:**
```
[prefix]-[block]__[element]--[modifier]
```

**Prefixes:**
- `woocommerce-` - WooCommerce components
- `wp-block-` - WordPress blocks
- `prototype-` - Custom blocks

**Example:**
```
Old: Generic div with Tailwind
New: .woocommerce-product-card

Old: h3 with text classes
New: .woocommerce-product-card__title

Old: p with text classes
New: .woocommerce-product-card__description
```

---

### Step 3: Write Global CSS

**Action:** Add CSS to `/src/styles/globals.css`

**Template:**
```css
/* ============================================
   COMPONENT NAME
   ============================================ */

/* Main Component */
.woocommerce-product-card {
  background: var(--wp--preset--color--surface);
  padding: var(--wp--preset--spacing--lg);
  border-radius: var(--wp--preset--border-radius--lg);
  box-shadow: var(--wp--preset--shadow--md);
  border: 1px solid var(--wp--preset--color--border);
  transition: box-shadow var(--wp--preset--transition--base) ease;
}

.woocommerce-product-card:hover {
  box-shadow: var(--wp--preset--shadow--xl);
}

/* Elements */
.woocommerce-product-card__title {
  font-size: var(--wp--preset--font-size--xl);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
  margin-bottom: var(--wp--preset--spacing--md);
}

.woocommerce-product-card__description {
  font-size: var(--wp--preset--font-size--base);
  line-height: var(--wp--preset--line-height--relaxed);
  color: var(--wp--preset--color--foreground-secondary);
}

/* Dark Mode */
[data-theme="dark"] .woocommerce-product-card {
  background: var(--wp--preset--color--surface);
  border-color: var(--wp--preset--color--border);
}

[data-theme="dark"] .woocommerce-product-card__title {
  color: var(--wp--preset--color--foreground);
}

[data-theme="dark"] .woocommerce-product-card__description {
  color: var(--wp--preset--color--foreground-secondary);
}
```

---

### Step 4: Refactor Component

**Action:** Replace Tailwind classes with semantic classes

**Before:**
```tsx
<div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    {title}
  </h3>
  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
    {description}
  </p>
</div>
```

**After:**
```tsx
<div className="woocommerce-product-card">
  <h3 className="woocommerce-product-card__title">
    {title}
  </h3>
  <p className="woocommerce-product-card__description">
    {description}
  </p>
</div>
```

**Success Criteria:**
- ✅ All Tailwind classes removed
- ✅ Semantic classes applied
- ✅ Visual appearance unchanged
- ✅ Dark mode still works

---

### Step 5: Test Migration

**Action:** Verify everything works

**Testing Checklist:**
- [ ] Component renders correctly
- [ ] Layout is identical to before
- [ ] Colors match (light mode)
- [ ] Colors match (dark mode)
- [ ] Hover states work
- [ ] Focus states work
- [ ] Responsive design works
- [ ] No console errors

**Visual Comparison:**
1. Take screenshot before migration
2. Perform migration
3. Take screenshot after migration
4. Compare screenshots (should be identical)

---

## 🗺️ Tailwind to WordPress Mapping

### **Layout Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `flex` | `display: flex` |
| `flex-col` | `flex-direction: column` |
| `items-center` | `align-items: center` |
| `justify-between` | `justify-content: space-between` |
| `gap-4` | `gap: var(--wp--preset--spacing--md)` |
| `grid grid-cols-3` | `display: grid; grid-template-columns: repeat(3, 1fr)` |

### **Spacing Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `p-4` | `padding: var(--wp--preset--spacing--md)` |
| `px-6` | `padding-left: var(--wp--preset--spacing--lg); padding-right: var(--wp--preset--spacing--lg)` |
| `py-8` | `padding-top: var(--wp--preset--spacing--xl); padding-bottom: var(--wp--preset--spacing--xl)` |
| `m-4` | `margin: var(--wp--preset--spacing--md)` |
| `mt-6` | `margin-top: var(--wp--preset--spacing--lg)` |
| `mb-2` | `margin-bottom: var(--wp--preset--spacing--sm)` |

**Spacing Scale:**
- `*-1` → `--wp--preset--spacing--xs` (4px)
- `*-2` → `--wp--preset--spacing--sm` (8px)
- `*-4` → `--wp--preset--spacing--md` (16px)
- `*-6` → `--wp--preset--spacing--lg` (24px)
- `*-8` → `--wp--preset--spacing--xl` (32px)
- `*-12` → `--wp--preset--spacing--2xl` (48px)

### **Typography Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `text-sm` | `font-size: var(--wp--preset--font-size--sm)` |
| `text-base` | `font-size: var(--wp--preset--font-size--base)` |
| `text-lg` | `font-size: var(--wp--preset--font-size--lg)` |
| `text-xl` | `font-size: var(--wp--preset--font-size--xl)` |
| `text-2xl` | `font-size: var(--wp--preset--font-size--2xl)` |
| `font-normal` | `font-weight: var(--wp--preset--font-weight--normal)` |
| `font-medium` | `font-weight: var(--wp--preset--font-weight--medium)` |
| `font-semibold` | `font-weight: var(--wp--preset--font-weight--semibold)` |
| `font-bold` | `font-weight: var(--wp--preset--font-weight--bold)` |
| `leading-tight` | `line-height: var(--wp--preset--line-height--tight)` |
| `leading-normal` | `line-height: var(--wp--preset--line-height--normal)` |
| `leading-relaxed` | `line-height: var(--wp--preset--line-height--relaxed)` |

### **Color Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `bg-white` | `background: var(--wp--preset--color--background)` |
| `bg-gray-50` | `background: var(--wp--preset--color--muted)` |
| `bg-gray-100` | `background: var(--wp--preset--color--muted)` |
| `text-gray-900` | `color: var(--wp--preset--color--foreground)` |
| `text-gray-600` | `color: var(--wp--preset--color--foreground-secondary)` |
| `text-gray-400` | `color: var(--wp--preset--color--foreground-tertiary)` |
| `border-gray-200` | `border-color: var(--wp--preset--color--border)` |
| `text-purple-600` | `color: var(--wp--preset--color--primary)` |
| `bg-purple-600` | `background: var(--wp--preset--color--primary)` |

**Dark Mode (Automatic via CSS Variables):**
```css
/* Tailwind: bg-white dark:bg-gray-900 */
/* WordPress: Just use the variable, it adapts automatically */
background: var(--wp--preset--color--background);
```

### **Border & Radius Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `rounded` | `border-radius: var(--wp--preset--border-radius--sm)` |
| `rounded-md` | `border-radius: var(--wp--preset--border-radius--md)` |
| `rounded-lg` | `border-radius: var(--wp--preset--border-radius--lg)` |
| `rounded-full` | `border-radius: var(--wp--preset--border-radius--full)` |
| `border` | `border: 1px solid var(--wp--preset--color--border)` |
| `border-2` | `border: 2px solid var(--wp--preset--color--border)` |

### **Shadow Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `shadow-sm` | `box-shadow: var(--wp--preset--shadow--sm)` |
| `shadow` | `box-shadow: var(--wp--preset--shadow--md)` |
| `shadow-md` | `box-shadow: var(--wp--preset--shadow--md)` |
| `shadow-lg` | `box-shadow: var(--wp--preset--shadow--lg)` |
| `shadow-xl` | `box-shadow: var(--wp--preset--shadow--xl)` |

### **Transition Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `transition` | `transition: all var(--wp--preset--transition--base) ease` |
| `transition-colors` | `transition: color var(--wp--preset--transition--base) ease, background-color var(--wp--preset--transition--base) ease` |
| `duration-200` | `transition-duration: var(--wp--preset--transition--base)` |
| `duration-300` | `transition-duration: var(--wp--preset--transition--slow)` |

---

## ✅ Verification Checklist

### Before Migration:
- [ ] Component works correctly
- [ ] Take screenshots (light + dark)
- [ ] Document current behavior
- [ ] Note all Tailwind classes

### During Migration:
- [ ] Create semantic class names
- [ ] Write complete CSS
- [ ] Include dark mode styles
- [ ] Add hover/focus states
- [ ] Update component file

### After Migration:
- [ ] Component renders identically
- [ ] Light mode matches
- [ ] Dark mode matches
- [ ] Hover states work
- [ ] Focus states work
- [ ] Responsive design intact
- [ ] No Tailwind classes remain
- [ ] Tests still pass

---

## 📝 Migration Workflow Example

### **Example Component: ProductCard**

**Step 1: Current Code**
```tsx
export const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <img 
        src={product.image}
        className="w-full h-64 object-cover"
        alt={product.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {product.category}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};
```

**Step 2: Design Class Names**
```
Main: woocommerce-product-card
Image: woocommerce-product-card__image
Content: woocommerce-product-card__content
Title: woocommerce-product-card__title
Category: woocommerce-product-card__category
Footer: woocommerce-product-card__footer
Price: woocommerce-product-card__price
```

**Step 3: Write CSS**
```css
.woocommerce-product-card {
  display: block;
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--lg);
  overflow: hidden;
  transition: box-shadow var(--wp--preset--transition--base) ease;
  text-decoration: none;
}

.woocommerce-product-card:hover {
  box-shadow: var(--wp--preset--shadow--lg);
}

.woocommerce-product-card__image {
  width: 100%;
  height: 256px;
  object-fit: cover;
}

.woocommerce-product-card__content {
  padding: var(--wp--preset--spacing--md);
}

.woocommerce-product-card__title {
  font-size: var(--wp--preset--font-size--lg);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
  margin-bottom: var(--wp--preset--spacing--sm);
}

.woocommerce-product-card__category {
  font-size: var(--wp--preset--font-size--sm);
  color: var(--wp--preset--color--foreground-secondary);
  margin-bottom: var(--wp--preset--spacing--md);
}

.woocommerce-product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.woocommerce-product-card__price {
  font-size: var(--wp--preset--font-size--xl);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
}
```

**Step 4: Refactor Component**
```tsx
export const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="woocommerce-product-card"
    >
      <img 
        src={product.image}
        className="woocommerce-product-card__image"
        alt={product.title}
      />
      <div className="woocommerce-product-card__content">
        <h3 className="woocommerce-product-card__title">
          {product.title}
        </h3>
        <p className="woocommerce-product-card__category">
          {product.category}
        </p>
        <div className="woocommerce-product-card__footer">
          <span className="woocommerce-product-card__price">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};
```

**Step 5: Test**
- ✅ Renders identically
- ✅ Dark mode works
- ✅ Hover effect works
- ✅ Tests pass

---

## 📖 Related Documentation

- `/guidelines/Guidelines.md` (Section 12.2: CSS Standards)
- `/src/styles/globals.css` - Global stylesheet
- `/src/styles/theme-variables.css` - WordPress CSS variables

---

## 📝 Notes & Tips

### Best Practices:

💡 **Migrate one component at a time** - Easier to test and verify

💡 **Keep screenshots** - Visual comparison ensures accuracy

💡 **Test dark mode** - Always verify both modes

💡 **Use semantic names** - Class names should describe purpose

### Common Mistakes:

⚠️ **Forgetting dark mode** - Must include `[data-theme="dark"]` styles

⚠️ **Hardcoding values** - Use CSS variables, not fixed values

⚠️ **Over-nesting** - Keep class names flat (BEM style)

⚠️ **Not testing hover** - Interactive states often forgotten

---

**Status:** ✅ Active  
**Created:** 2026-01-10
