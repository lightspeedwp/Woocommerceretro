# CSS Optimization & Memory Reduction — Quick Reference

**Version:** 1.0  
**Date:** 2026-03-05  
**Purpose:** Quick reference for CSS optimization as memory reduction strategy

---

## 📚 Complete Documentation Structure

### **Guidelines** (Reference Standards)

- **Main CSS Guidelines:** `/guidelines/development/css-optimization-guidelines.md`
  - Token-first architecture
  - BEM naming conventions
  - Light/dark mode implementation
  - Accessibility checklist (WCAG 2.1 AA/AAA)
  - File structure recommendations
  - Best practices and migration strategy

- **Implementation Guide:** `/guidelines/development/css-optimization-implementation-guide.md` ⭐ NEW
  - 5-phase workflow: Discovery → Prioritization → Implementation → Testing → Documentation
  - Standard implementation patterns and scenarios
  - Troubleshooting common issues
  - Progress tracking templates

- **Quick Reference:** `/guidelines/development/css-optimization-quick-reference.md` (This file)
  - Fast lookup for common CSS memory issues
  - Memory impact calculation formula
  - Quick validation checklists

- **Real Example:** `/guidelines/development/implementation-example.md`
  - WooCommerce Demo P0.1 task implementation
  - Before/after code with actual results

- **Project Guidelines:** `/guidelines/Guidelines.md`
  - Section 4: WordPress CSS Architecture
  - Section 9: Accessibility Standards
  - Design token documentation requirements

- **Design Tokens:** `/guidelines/design-tokens/`
  - `colors.md` - Color palette with contrast ratios
  - `typography.md` - Typography scale and fluid sizing
  - `spacing.md` - Spacing scale and usage
  - `dark-mode.md` - Dark mode implementation

---

### **Prompts** (Audit & Optimization)

- **Enhanced Orchestrator:** `/prompts/memory-optimization/orchestrator_enhanced-css-memory.md`
  - Runs: Figma → CSS → Code audits in sequence
  - Focus: CSS as primary memory optimization vector
  - Output: Consolidated reports + prioritized task list

- **Figma Memory Audit:** `/prompts/memory-optimization/sub-prompt_figma-memory-audit.md`
  - Phase 1: Identifies high-memory components
  - Output: Component priority list for CSS optimization

- **CSS Architecture Audit:** `/prompts/memory-optimization/sub-prompt_css-architecture-audit.md`
  - Phase 2: 10 sub-audits (A-J) covering all CSS aspects
  - Output: CSS architecture report with BEM migration plan

- **Codebase Memory Audit:** `/prompts/memory-optimization/sub-prompt_woocommerce-memory-optimization.md`
  - Phase 3: Component, data, and asset optimization
  - Output: Codebase optimization recommendations

---

## 🎯 Quick Start Workflow

### **Step 1: Choose Your Situation**

| Your Situation | Action | Prompt to Run |
|----------------|--------|---------------|
| **Figma file > 1800 MB** | 🔴 Crisis - Full audit | Enhanced orchestrator (all phases) |
| **CSS bundle > 500 KB** | ⚠️ CSS bloat - Focused audit | CSS architecture audit only |
| **Both issues** | 🔴 Critical - Full audit | Enhanced orchestrator (all phases) |
| **Maintenance** | ✅ Routine check | Standard orchestrator (optional) |

---

### **Step 2: Run Audit**

```bash
# For comprehensive memory + CSS optimization:
Run: /prompts/memory-optimization/orchestrator_enhanced-css-memory.md

# For CSS-only optimization:
Run: /prompts/memory-optimization/sub-prompt_css-architecture-audit.md
```

---

### **Step 3: Review Reports**

Reports generated in `/reports/audits/`:

1. `YYYY-MM-DD_figma-memory.md` - Figma component memory analysis
2. `YYYY-MM-DD_css-audit.md` - CSS architecture findings
3. `YYYY-MM-DD_codebase-memory.md` - Code optimization opportunities
4. `YYYY-MM-DD_consolidated.md` - Combined findings with priorities

---

### **Step 4: Execute Task List**

Task list generated in `/reports/`:

- `YYYY-MM-DD_task-list.md` - Prioritized tasks with acceptance criteria
- Tasks grouped by priority: P0 (Critical) → P1 (Important) → P2 (Medium) → P3 (Nice-to-have)
- Each task includes memory impact estimate

---

## 🔧 Common CSS Memory Issues & Fixes

### **Issue 1: Large CSS Files (> 500 lines)**

**Problem:**
```css
/* /src/styles/globals.css - 1,200 lines */
/* Everything in one file */
```

**Solution:**
```
Split into modular structure:
/src/styles/
├── index.css (manifest - 50 lines)
├── tokens/ (variables - 200 lines)
├── base/ (resets, typography - 150 lines)
├── components/ (per-component files - 400 lines total)
└── sections/ (per-section files - 400 lines total)

Memory impact: 20-40% reduction in parse time
```

---

### **Issue 2: Duplicate Selectors**

**Problem:**
```css
/* Repeated 20+ times across files */
.card { padding: 16px; }
.product-card { padding: 16px; }
.blog-card { padding: 16px; }
```

**Solution:**
```css
/* tokens/semantic.css */
:root {
  --space-md: 16px;
}

/* components/c-card.css */
.c-card {
  padding: var(--space-md);
}

.c-product-card {
  padding: var(--space-md);
}

Memory impact: 10-30% CSS bundle reduction
```

---

### **Issue 3: Unused CSS (30-50% of bundle)**

**Problem:**
```css
/* utilities.css - Many unused classes */
.text-center { text-align: center; }
.flex-col { flex-direction: column; }
/* ... 500 more utility classes never used
```

**Solution:**
```bash
# Run PurgeCSS or CSS coverage analysis
# Remove unused selectors

Memory impact: 15-50% bundle reduction
```

---

### **Issue 4: Duplicate Dark Mode Styles**

**Problem:**
```css
/* Light mode - 500 lines */
.button { background: #7c3aed; color: #fff; }
.card { background: #fff; color: #1a1a1a; }
/* ... */

/* Dark mode - ANOTHER 500 lines */
.dark .button { background: #a78bfa; color: #111; }
.dark .card { background: #1a1a1a; color: #f9fafb; }
```

**Solution:**
```css
/* tokens/themes.css - Define once */
:root {
  --color-primary: #7c3aed;
  --color-bg: #fff;
  --color-text: #1a1a1a;
}

[data-theme="dark"] {
  --color-primary: #a78bfa;
  --color-bg: #1a1a1a;
  --color-text: #f9fafb;
}

/* components/c-button.css - Use tokens */
.button {
  background: var(--color-primary);
  color: var(--color-bg);
}

Memory impact: 30-50% dark mode CSS reduction
```

---

### **Issue 5: Complex Selector Nesting**

**Problem:**
```css
/* High specificity, hard to override */
.page .container .sidebar .widget .header .title {
  font-size: 18px;
}
```

**Solution:**
```css
/* BEM single class selector */
.c-widget__title {
  font-size: var(--font-size-lg);
}

Memory impact: 5-15% faster CSS rendering
```

---

## 📊 Memory Impact Calculation

### **Formula**

```
Memory Saved (MB) = (CSS Size Reduction (KB) × 0.003) + (Selector Count Reduction × 0.0001)
```

### **Example Calculation**

**Before optimization:**
- CSS bundle size: 600 KB
- Total selectors: 4,000
- Figma file memory: 1,500 MB

**After optimization:**
- CSS bundle size: 400 KB (200 KB saved)
- Total selectors: 2,500 (1,500 selectors saved)
- Memory saved: (200 × 0.003) + (1500 × 0.0001) = 0.6 + 0.15 = **0.75 MB**
- Figma impact: 0.75 MB × 3-5 multiplier = **2.25-3.75 MB** in Figma

**Estimated result:**
- Figma file memory: 1,500 MB → ~1,497 MB (direct CSS)
- Plus reduced parsing overhead: ~1,497 MB → ~1,470 MB (total)
- **Total reduction: ~30 MB (2%)**

---

## ✅ Quick Validation Checklist

### **Before Starting Optimization**

- [ ] Figma file memory measured (know baseline)
- [ ] CSS bundle size documented (KB)
- [ ] Total selector count recorded
- [ ] High-memory components identified

### **During Optimization**

- [ ] Follow CSS optimization guidelines
- [ ] Use BEM naming conventions
- [ ] Implement token-based theming
- [ ] Test dark mode after changes
- [ ] Verify accessibility (contrast, focus)

### **After Optimization**

- [ ] CSS bundle size reduced (measure %)
- [ ] Selector count reduced (measure count)
- [ ] Figma file memory checked (measure MB)
- [ ] Build time measured (measure seconds)
- [ ] All tests passing
- [ ] Dark mode working
- [ ] Accessibility verified (AA minimum)

---

## 🔗 Related Resources

### **Internal Documentation**

- Main Guidelines: `/guidelines/Guidelines.md`
- CSS Optimization: `/guidelines/development/css-optimization-guidelines.md`
- Design Tokens: `/guidelines/design-tokens/`
- Prompts: `/prompts/memory-optimization/`
- Reports: `/reports/audits/`

### **External References**

- **WordPress theme.json:** https://developer.wordpress.org/themes/features/theme-json/
- **WCAG 2.1 Guidelines:** https://www.w3.org/TR/WCAG21/
- **CSS Cascade Layers:** https://developer.mozilla.org/en-US/docs/Web/CSS/@layer
- **BEM Methodology:** http://getbem.com/
- **Figma Memory Optimization:** https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc

---

## 🆘 Troubleshooting

### **"My CSS audit shows no major issues but Figma is still slow"**

**Answer:** Run Figma memory audit first. The issue may be in Figma file structure (component variants, hidden layers, large images) rather than CSS code.

---

### **"I reduced CSS by 30% but memory didn't improve"**

**Answer:** Check:
1. Was the CSS you optimized for high-memory Figma components?
2. Did you remove unused CSS or just reorganize?
3. Is Figma caching old styles? (Clear cache and restart)

---

### **"BEM migration is breaking my layouts"**

**Answer:** Use dual-classing during transition:
```tsx
<div className="old-class c-new-bem-class">
  {/* Keep both until migration complete */}
</div>
```

Test thoroughly before removing old classes.

---

### **"Dark mode stopped working after optimization"**

**Answer:** Check:
1. Are you using CSS variables for all themeable properties?
2. Did you remove hard-coded color values?
3. Are dark mode overrides in `[data-theme="dark"]` selector?

---

## 📞 Support

For questions or issues:

1. **Check documentation:** Start with `/guidelines/development/css-optimization-guidelines.md`
2. **Run audit:** Use enhanced orchestrator for comprehensive analysis
3. **Review reports:** All audit findings documented in `/reports/audits/`
4. **Follow task list:** Prioritized action items in `/reports/`

---

**Last Updated:** 2026-03-05  
**Version:** 1.0  
**Maintainer:** LightSpeed Development Team
