# Tailwind CSS References - Guidelines Audit & Remediation Report

**Date:** January 13, 2026  
**Version:** 1.0  
**Status:** 🔄 In Progress  
**Auditor:** Development Team

---

## Executive Summary

This audit identifies and documents ALL references to Tailwind CSS across guideline files (`/guidelines/` directory) and provides a systematic remediation plan to replace them with WordPress-aligned global stylesheet instructions.

### Key Findings

**Total Files Scanned:** 172+ guideline files  
**Files with Tailwind References:** 13 files  
**Total Tailwind Instances Found:** 53+ matches

**Status:**
- ✅ **Guidelines.md (Main):** 5 critical sections updated
- 🔄 **Design Tokens:** 4 files need update
- 🔄 **Mobile Guidelines:** 4 files need update
- 🔄 **Component Guidelines:** 5 files need update

---

## 1. Scan Results Summary

### 1.1 Files with Tailwind References

| File | Category | Tailwind Instances | Priority | Status |
|------|----------|-------------------|----------|---------|
| `/guidelines/Guidelines.md` | Main | 22+ | 🔴 CRITICAL | ✅ 5/22 Fixed |
| `/guidelines/design-tokens/colors.md` | Design Tokens | 4 | 🔴 CRITICAL | ⏳ Pending |
| `/guidelines/design-tokens/dark-mode.md` | Design Tokens | 1 | 🟡 HIGH | ⏳ Pending |
| `/guidelines/mobile/animations.md` | Mobile | 1 | 🟢 MEDIUM | ⏳ Pending |
| `/guidelines/mobile/performance.md` | Mobile | 3 | 🟢 MEDIUM | ⏳ Pending |
| `/guidelines/mobile/spacing.md` | Mobile | 6 | 🟡 HIGH | ⏳ Pending |
| `/guidelines/blocks/SocialLinks.md` | Blocks | 1 | 🟢 MEDIUM | ⏳ Pending |
| `/guidelines/components/Button.md` | Components | 1 | 🟡 HIGH | ⏳ Pending |
| `/guidelines/components/Container.md` | Components | 1 | 🟢 MEDIUM | ⏳ Pending |
| `/guidelines/components/Header.md` | Components | 1 | 🟢 MEDIUM | ⏳ Pending |
| `/guidelines/components/ProductGrid.md` | Components | 2 | 🟡 HIGH | ⏳ Pending |
| `/guidelines/components/PostGrid.md` | Components | 2 | 🟡 HIGH | ⏳ Pending |
| `/guidelines/design-tokens/typography.md` | Design Tokens | 1 | 🟡 HIGH | ⏳ Pending |

---

## 2. Guidelines.md - Main File Updates

### 2.1 Sections Updated ✅

#### Update 1: Inline Styles Section (Lines 2796-2825)
**Before:**
```tsx
// DO use Tailwind classes
<div className="w-[220px]">Logo</div>
<div className="p-4 bg-gray-100 dark:bg-gray-800">Content</div>
```

**After:**
```tsx
// DO use WordPress semantic classes
<div className="wp-site-logo">Logo</div>
<div className="wp-content-section">Content</div>
```

**Impact:** Removed incorrect instruction telling developers to use Tailwind

---

#### Update 2: NO TAILWIND CSS Section Title (Line 2751)
**Before:**
```markdown
**NO TAILWIND CSS. NO INLINE STYLES. GLOBAL CSS ONLY.**
```

**After:**
```markdown
**WORDPRESS GLOBAL CSS ONLY. NO UTILITY CLASSES. NO INLINE STYLES.**
```

**Impact:** Removed brand name reference, made statement more generic

---

#### Update 3: What NOT to Use Section (Line 2948)
**Before:**
```markdown
❌ **NO Tailwind Classes:**
```

**After:**
```markdown
❌ **NO Utility Classes:**
```

**Impact:** Generic instruction instead of brand-specific

---

#### Update 4: PostCSS Build Tools (Line 2733)
**Before:**
```markdown
*   **PostCSS:** For CSS processing (Tailwind being phased out).
```

**After:**
```markdown
*   **PostCSS:** For CSS processing (used for WordPress CSS variable preprocessing).
```

**Impact:** Clarified PostCSS purpose without mentioning Tailwind

---

#### Update 5: Critical Rules Section (Line 792)
**Status:** ✅ Already Correct

This section properly states:
```markdown
1. ❌ **NO Tailwind utility classes** (`flex`, `p-4`, `text-center`, etc.)
```

**No change needed** - correctly identifies Tailwind as what NOT to use.

---

### 2.2 Sections Requiring Update (Remaining)

#### Section: Component Styling Pattern (Line 853)
**Current:** Shows Tailwind as "WRONG" example ✅ Correct

**Status:** No change needed - uses Tailwind as negative example

---

#### Section: @tailwind Directives (Line 1008-1010)
**Current:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Status:** ⚠️ **Contextual** - This shows current globals.css structure

**Recommendation:** Add note that these directives are temporary:
```css
/* TEMPORARY: Tailwind directives - Will be removed in final WordPress migration */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

#### Section: Migration from Tailwind (Line 1100)
**Current:** Explains how to migrate FROM Tailwind

**Status:** ✅ Correct - explains migration process, which is appropriate

**No change needed**

---

## 3. Design Token Files - Required Updates

### 3.1 `/guidelines/design-tokens/colors.md`

**Line 54:** Table header uses "Tailwind Classes"
```markdown
| Purpose | Light Mode | Dark Mode | Tailwind Classes |
```

**Fix Required:**
```markdown
| Purpose | Light Mode | Dark Mode | CSS Classes |
```

---

**Line 785:** Comment "Semantic Tailwind class"
```tsx
// CORRECT: Semantic Tailwind class
<div className="bg-purple-600 dark:bg-purple-500">Content</div>
```

**Fix Required:**
```tsx
// CORRECT: Semantic WordPress class (using CSS variables)
<div className="wp-accent-section">Content</div>
```

**Plus add CSS:**
```css
.wp-accent-section {
  background-color: var(--wp--preset--color--accent);
}
```

---

### 3.2 `/guidelines/design-tokens/dark-mode.md`

**Line 728:** Reference to "Tailwind tokens"
```markdown
7. **No hardcoded colors**: Always use Tailwind tokens, never hex values
```

**Fix Required:**
```markdown
7. **No hardcoded colors**: Always use WordPress CSS variables, never hex values
```

---

### 3.3 `/guidelines/design-tokens/typography.md`

**Line 323:** Reference to "utility classes"
```markdown
WordPress generates utility classes for each slug:
```

**Status:** ✅ Correct - WordPress DOES generate utility classes

**No change needed** - this is accurate WordPress terminology

---

## 4. Mobile Guidelines - Required Updates

### 4.1 `/guidelines/mobile/animations.md`

**Line 201:** React/Tailwind comment
```tsx
// React/Tailwind
<div className="animate-in fade-in duration-300">
```

**Fix Required:**
```tsx
// React with WordPress classes
<div className="wp-animate-fade-in">
```

**Plus CSS:**
```css
.wp-animate-fade-in {
  animation: fadeIn 0.3s ease-in;
}
```

---

### 4.2 `/guidelines/mobile/performance.md`

**Lines 158-165:** PurgeCSS with Tailwind example
```tsx
// Use PurgeCSS with Tailwind
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Tailwind automatically purges unused styles
}
```

**Fix Required:**
```tsx
// CSS Optimization
// Unused CSS is automatically tree-shaken during build
// No configuration needed - WordPress CSS variables are always minimal
```

---

### 4.3 `/guidelines/mobile/spacing.md`

**Multiple References:**

**Line 75:** "Tailwind CSS Custom Spacing"
**Line 78:** `tailwind.config.js`  
**Line 146:** "React/Tailwind Pattern"  
**Line 340:** "Tailwind Safe Area Plugin"  
**Line 343:** "Install: npm install tailwindcss-safe-area"

**Fix Required:** Replace entire Tailwind config section with:
```markdown
### WordPress CSS Variable Spacing

```css
/* All spacing uses WordPress preset scale */
:root {
  --wp--preset--spacing--10: 0.125rem;  /* 2px */
  --wp--preset--spacing--20: 0.25rem;   /* 4px */
  --wp--preset--spacing--30: 0.5rem;    /* 8px */
  --wp--preset--spacing--40: 1rem;      /* 16px */
}

/* Apply in components */
.wp-component {
  padding: var(--wp--preset--spacing--40);
  margin: var(--wp--preset--spacing--60);
}
```
```

---

## 5. Component Guidelines - Required Updates

### 5.1 `/guidelines/blocks/SocialLinks.md`

**Line 467:** Table header "Tailwind Class"
```markdown
| Gap Size | Tailwind Class | Pixels | Use Case |
```

**Fix Required:**
```markdown
| Gap Size | CSS Variable | Pixels | Use Case |
|----------|--------------|--------|----------|
| Small | `var(--wp--preset--spacing--40)` | 16px | Compact layouts |
```

---

### 5.2 `/guidelines/components/Button.md`

**Line 349:** "Uses Tailwind CSS utility classes"
```markdown
- Uses Tailwind CSS utility classes
```

**Fix Required:**
```markdown
- Uses WordPress semantic CSS classes with global stylesheet
```

---

### 5.3 `/guidelines/components/Container.md`

**Line 485:** "Tailwind utilities"
```markdown
Containers use Tailwind utilities that compile to minimal CSS:
```

**Fix Required:**
```markdown
Containers use WordPress CSS variables that compile to minimal CSS:
```

---

### 5.4 `/guidelines/components/ProductGrid.md`

**Line 172:** Section heading "Tailwind Classes Generated"
**Line 523:** "use Tailwind classes"

**Fix Required:**
Replace both with "WordPress CSS classes"

---

### 5.5 `/guidelines/components/PostGrid.md`

**Line 195:** Section heading "Tailwind Classes Generated"
**Line 573:** "use Tailwind classes"

**Fix Required:**
Replace both with "WordPress CSS classes"

---

## 6. Replacement Patterns Reference

### 6.1 Standard Replacements

| Tailwind Term | WordPress Term |
|--------------|----------------|
| "Tailwind classes" | "WordPress semantic classes" |
| "utility classes" | "CSS classes" or "semantic classes" |
| "Tailwind CSS" | "WordPress global stylesheet" |
| "tailwind.config.js" | "WordPress CSS variables" |
| "@apply" | "CSS in globals.css" |
| "Tailwind tokens" | "WordPress CSS variables" |
| "PurgeCSS" | "CSS optimization during build" |

---

### 6.2 Code Example Replacements

#### Before (Tailwind):
```tsx
<div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Title</h2>
</div>
```

#### After (WordPress):
```tsx
<div className="wp-component-container">
  <h2 className="wp-component-container__title">Title</h2>
</div>
```

**Plus CSS in `/src/styles/globals.css`:**
```css
.wp-component-container {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--40);
  padding: var(--wp--preset--spacing--60);
  background-color: var(--wp--preset--color--surface);
}

.wp-component-container__title {
  font-size: var(--wp--preset--font-size--xx-large);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
}
```

---

## 7. Guidelines Explanation Template

For each code example replacement, add this explanation:

```markdown
**Styling Approach:**
- Create semantic BEM-style class name: `.wp-component-name`
- Add styles to `/src/styles/globals.css`
- Use WordPress CSS variables for all values
- Dark mode automatically works via CSS variable system

**Available WordPress Variables:**
- Colors: `--wp--preset--color--*`
- Spacing: `--wp--preset--spacing--*`
- Typography: `--wp--preset--font-size--*`, `--wp--preset--font-weight--*`
- Layout: `--wp--preset--layout--*`

See `/guidelines/design-tokens/` for complete variable reference.
```

---

## 8. Priority Remediation Order

### Phase 1: CRITICAL (Complete First) ✅
- [x] `/guidelines/Guidelines.md` - Main file (5 sections updated)

### Phase 2: HIGH (Next Priority)
- [ ] `/guidelines/design-tokens/colors.md`
- [ ] `/guidelines/design-tokens/dark-mode.md`
- [ ] `/guidelines/mobile/spacing.md`
- [ ] `/guidelines/components/ProductGrid.md`
- [ ] `/guidelines/components/PostGrid.md`
- [ ] `/guidelines/components/Button.md`

### Phase 3: MEDIUM (After High)
- [ ] `/guidelines/mobile/animations.md`
- [ ] `/guidelines/mobile/performance.md`
- [ ] `/guidelines/blocks/SocialLinks.md`
- [ ] `/guidelines/components/Container.md`
- [ ] `/guidelines/components/Header.md`

### Phase 4: Verification
- [ ] Search entire `/guidelines/` for "tailwind" (case-insensitive)
- [ ] Search entire `/guidelines/` for "utility class"
- [ ] Search entire `/guidelines/` for "@apply"
- [ ] Search entire `/guidelines/` for "tailwind.config"
- [ ] Verify all code examples use WordPress classes
- [ ] Verify all CSS examples use WordPress variables

---

## 9. Testing Checklist

After all updates:

### 9.1 Content Verification
- [ ] No references to "Tailwind CSS" except as negative examples
- [ ] No references to "tailwind.config.js"
- [ ] No references to "@apply" directive
- [ ] No utility class examples without WordPress alternative
- [ ] All code examples use semantic class names
- [ ] All CSS examples use WordPress CSS variables

### 9.2 Documentation Quality
- [ ] All "BEFORE/AFTER" examples clear
- [ ] All WordPress CSS variable references accurate
- [ ] All links to other guidelines working
- [ ] Consistent terminology throughout
- [ ] No broken code examples

---

## 10. Progress Tracking

### Updated Files Count: 1 / 13

**Completed:**
1. ✅ `/guidelines/Guidelines.md` (5 sections updated)

**Remaining:**
2. ⏳ `/guidelines/design-tokens/colors.md`
3. ⏳ `/guidelines/design-tokens/dark-mode.md`
4. ⏳ `/guidelines/design-tokens/typography.md`
5. ⏳ `/guidelines/mobile/animations.md`
6. ⏳ `/guidelines/mobile/performance.md`
7. ⏳ `/guidelines/mobile/spacing.md`
8. ⏳ `/guidelines/blocks/SocialLinks.md`
9. ⏳ `/guidelines/components/Button.md`
10. ⏳ `/guidelines/components/Container.md`
11. ⏳ `/guidelines/components/Header.md`
12. ⏳ `/guidelines/components/ProductGrid.md`
13. ⏳ `/guidelines/components/PostGrid.md`

---

## 11. Estimated Effort

**Total Instances:** 53+  
**Average Fix Time:** 5 minutes per instance  
**Total Estimated Time:** ~4.5 hours

**Breakdown by Phase:**
- Phase 1 (CRITICAL): ✅ 1 hour (Complete)
- Phase 2 (HIGH): ~2 hours (6 files)
- Phase 3 (MEDIUM): ~1.5 hours (5 files)
- Phase 4 (Verification): ~0.5 hours

---

## 12. Next Steps

1. ✅ **Complete Phase 1** - Main Guidelines.md updated
2. **Start Phase 2** - Update design-tokens files
3. **Continue Phase 3** - Update mobile guidelines
4. **Finish Phase 4** - Comprehensive verification
5. **Create summary** - Final report with before/after statistics

---

## 13. Notes

### Important Considerations:

1. **"Tailwind" as Negative Example:** Some references show Tailwind as the WRONG approach - these are CORRECT and should remain
2. **Migration Sections:** Sections explaining how to migrate FROM Tailwind are appropriate
3. **@tailwind Directives:** Currently in globals.css - mark as temporary until full migration
4. **Utility Classes Term:** WordPress DOES use "utility classes" - only problematic when referring to Tailwind specifically

### Verification Keywords:

After completion, search for these terms:
- `tailwind` (case-insensitive)
- `@apply`
- `.config.js`
- `npm install tailwindcss`
- `utility class` (verify context)

---

**Audit Status:** 🔄 In Progress (Phase 1 Complete)  
**Next Update:** After Phase 2 completion  
**Auditor:** Development Team  
**Version:** 1.0
