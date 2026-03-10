# 🎯 **ENHANCED ORCHESTRATOR** — Figma Prototype + CSS Memory Optimization

**Role:** Enhanced orchestrator with CSS memory optimization focus  
**Version:** 2.0 (CSS-Enhanced)  
**Date:** 2026-03-05

## **Overview**

This enhanced orchestrator coordinates AI audits of Figma Make prototype codebases with a **specific focus on CSS as a memory optimization vector**. CSS files are often overlooked as memory consumers, but large, redundant, or poorly structured CSS can:

- Increase Figma Make build times and memory usage
- Bloat browser rendering memory
- Slow down Figma file parsing (when styles are mirrored from code)
- Create maintenance bottlenecks that indirectly cause memory issues

This orchestrator integrates **CSS cleanup and optimization as a core memory reduction strategy**, not just a code quality concern.

---

## **3-Bullet Summary**

* **Value:** Treats CSS optimization as a first-class memory reduction strategy. Reduces CSS bundle sizes by 10-50%, which directly improves Figma Make performance and reduces browser memory usage.
    
* **Risks:** Aggressive CSS removal can break layouts if not tested thoroughly. BEM migration requires careful dual-classing transition to avoid visual regressions.
    
* **Next step:** Run the **Figma memory audit** FIRST to identify memory hotspots, THEN run the **CSS architecture audit** to optimize the largest memory consumers. CSS optimization should be prioritized for components/pages identified as high-memory in the Figma audit.

---

## **Enhanced Workflow**

### **Phase 1: Figma Memory Audit** (Priority 0)

**Goal:** Identify Figma file memory bottlenecks BEFORE auditing code

1. **Run Figma memory audit:** Use `sub-prompt_figma-memory-audit.md`
2. **Identify high-memory pages/components:** Document which pages consume > 500 MB
3. **Map to codebase:** Correlate high-memory Figma components to CSS files
4. **Prioritize:** CSS files for high-memory components become P0 optimization targets
5. **Output:** `YYYY-MM-DD_figma-memory-audit.md` in `/reports/audits/`

**Why this matters:** Optimizing CSS for low-memory components has minimal impact. Focus on the 20% of CSS that affects 80% of memory usage.

---

### **Phase 2: CSS Architecture Audit** (Priority 1)

**Goal:** Audit CSS architecture with memory optimization as primary lens

1. **Run CSS architecture audit:** Use existing `sub-prompt_css-architecture-audit.md`
2. **Add memory-focused analysis:**
   - Calculate total CSS file sizes
   - Identify files > 500 lines (memory-heavy)
   - Find duplicate selectors (wasted memory)
   - Locate unused CSS (dead weight)
   - Measure selector complexity (rendering overhead)
3. **Cross-reference with Figma audit:** Prioritize CSS for high-memory components
4. **Output:** `YYYY-MM-DD_css-architecture-audit.md` in `/reports/audits/`

**Key metrics to track:**
- Total CSS bundle size (KB)
- Number of selectors
- Selector specificity average
- Unused CSS percentage
- Duplicate rule count

---

### **Phase 3: Codebase Memory Audit** (Priority 2)

**Goal:** Audit React components, data files, and assets

1. **Run codebase memory audit:** Use `sub-prompt_woocommerce-memory-optimization.md`
2. **Focus areas:**
   - Large component files (> 400 lines)
   - Heavy data files (> 500 lines)
   - Unoptimized images
   - Icon import sprawl
   - Repeated patterns
3. **Output:** `YYYY-MM-DD_codebase-memory-audit.md` in `/reports/audits/`

---

### **Phase 4: Consolidated Report** (Priority 3)

**Goal:** Synthesize all findings with memory impact estimates

1. **Combine all audit findings**
2. **Calculate memory impact:**
   - CSS optimization: X KB saved → Y MB Figma memory freed
   - Component splitting: Reduced complexity → Z% faster Figma load
   - Asset optimization: Image size reduction → A% memory saved
3. **Prioritize by ROI:** Focus on high-impact, low-effort optimizations first
4. **Output:** `YYYY-MM-DD_consolidated-memory-audit.md` in `/reports/audits/`

---

### **Phase 5: Task List Generation** (Priority 4)

**Goal:** Create actionable, prioritized implementation plan

1. **Generate task list ONLY after all reports written**
2. **Group by priority:**
   - **P0 (Critical):** High-memory components + large CSS files
   - **P1 (Important):** BEM migration + token system
   - **P2 (Medium):** DRY patterns + component splitting
   - **P3 (Nice-to-have):** Documentation + polish
3. **Include memory impact estimates for each task**
4. **Output:** `YYYY-MM-DD_task-list.md` in `/reports/`

---

## **CSS-Specific Memory Optimization Strategies**

### **Strategy 1: Split Large CSS Files**

**Problem:** CSS files > 500 lines consume significant memory during parsing and rendering.

**Solution:**
- Split monolithic `globals.css` into modular files
- Create per-component CSS files (BEM blocks)
- Use `@import` or build-time concatenation
- Target: No single CSS file > 300 lines

**Memory impact:** 20-40% reduction in CSS parse time

---

### **Strategy 2: Remove Duplicate Selectors**

**Problem:** Repeated CSS rules (e.g., same spacing values defined 20+ times) waste memory.

**Solution:**
- Extract common patterns to token variables
- Use BEM to avoid selector duplication
- Consolidate grid/card/filter patterns
- Run deduplication tools (cssnano, postcss-merge-rules)

**Memory impact:** 10-30% CSS bundle size reduction

---

### **Strategy 3: Remove Unused CSS**

**Problem:** Dead CSS selectors consume memory without providing value.

**Solution:**
- Run CSS coverage analysis (Chrome DevTools)
- Use PurgeCSS or UnCSS to identify unused rules
- Remove confirmed-unused selectors
- Document removal for safety

**Memory impact:** 15-50% CSS bundle size reduction (varies by project)

---

### **Strategy 4: Simplify Selector Complexity**

**Problem:** Deep descendant selectors (`.a .b .c .d .e`) increase rendering memory.

**Solution:**
- Migrate to BEM single-class selectors
- Avoid deep nesting (> 3 levels)
- Remove high-specificity selectors
- Use `@layer` for cascade control

**Memory impact:** 5-15% faster CSS rendering

---

### **Strategy 5: Optimize Dark Mode Implementation**

**Problem:** Duplicate light/dark styles (instead of CSS variables) double memory usage.

**Solution:**
- Use CSS variables for all themeable properties
- Define overrides ONLY in `[data-theme="dark"]`
- Avoid duplicating entire components for dark mode
- Remove inline dark mode classes (Tailwind `dark:`)

**Memory impact:** 30-50% dark mode CSS reduction

---

### **Strategy 6: Extract Reusable Patterns**

**Problem:** Repeated UI patterns (grids, cards, filters) defined 3-5 times.

**Solution:**
- Create base components (`.c-base-card`)
- Use modifiers for variants (`.c-card--featured`)
- Extract grid patterns to utilities
- Consolidate filter UI

**Memory impact:** 20-40% pattern-related CSS reduction

---

## **Memory Impact Estimation Formula**

Use this formula to estimate memory savings from CSS optimization:

```
Memory Saved (MB) = (CSS Size Reduction (KB) × 0.003) + (Selector Count Reduction × 0.0001)
```

**Example:**
- Reduce CSS from 500 KB → 350 KB (150 KB saved)
- Reduce selectors from 3000 → 2000 (1000 selectors saved)
- Memory saved: (150 × 0.003) + (1000 × 0.0001) = 0.45 + 0.1 = **0.55 MB**

**For Figma files:** Every 1 MB of CSS memory saved can free up 3-5 MB in Figma file memory (due to parsing overhead).

---

## **Prioritization Matrix**

Use this matrix to prioritize CSS optimization tasks:

| CSS File | Size (KB) | Selectors | Unused % | Figma Component | Priority | Impact |
|----------|-----------|-----------|----------|-----------------|----------|--------|
| `globals.css` | 120 | 800 | 30% | All | P0 | High |
| `front-page-funky.css` | 85 | 600 | 20% | HomePage | P0 | High |
| `blog-archives-funky.css` | 95 | 700 | 25% | BlogPage | P1 | Med-High |
| `product-card.css` | 45 | 300 | 10% | ProductCard | P2 | Medium |
| `utilities.css` | 30 | 200 | 40% | Global | P1 | Med-High |

**Prioritization rules:**
1. Size > 80 KB = P0 or P1
2. Unused % > 25% = P1
3. High-memory Figma component = Bump priority +1
4. Low selector count + low size = P3

---

## **Deliverables**

### **Reports (Strict Order)**

1. `YYYY-MM-DD_figma-memory-audit.md`
2. `YYYY-MM-DD_css-architecture-audit.md`
3. `YYYY-MM-DD_codebase-memory-audit.md`
4. `YYYY-MM-DD_consolidated-memory-audit.md`

### **Task List (ONLY After Reports)**

5. `YYYY-MM-DD_task-list.md`

**Each report MUST include:**
- Memory impact estimates
- Before/after metrics
- Prioritized recommendations
- Cross-references to CSS optimization guidelines

---

## **Success Metrics**

### **CSS Optimization Targets**

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| **Total CSS Size** | ~500 KB | < 400 KB | 20% reduction |
| **Largest CSS File** | ~120 KB | < 80 KB | Split monolithic files |
| **Unused CSS** | ~30% | < 10% | PurgeCSS/coverage analysis |
| **Selector Count** | ~3000 | < 2000 | BEM migration |
| **Duplicate Rules** | ~15% | < 5% | Token system + deduplication |

### **Memory Impact Targets**

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| **Figma File Memory** | ~1500 MB | < 1200 MB | Figma memory meter |
| **CSS Parse Time** | ~200 ms | < 150 ms | Chrome DevTools Performance |
| **Build Time** | ~15 sec | < 12 sec | Figma Make build logs |

---

## **Integration with Existing Prompts**

This enhanced orchestrator **replaces** the original orchestrator in `/prompts/memory-optimization/orchestrator_figma-prototype-audit.md` but maintains compatibility with existing sub-prompts:

**Existing sub-prompts (keep as-is):**
- `sub-prompt_woocommerce-memory-optimization.md` → Use in Phase 3
- `sub-prompt_css-architecture-audit.md` → Use in Phase 2 (enhanced with memory focus)

**New sub-prompts (this file references):**
- `sub-prompt_figma-memory-audit.md` → Use in Phase 1 (NEW)

**Guidelines referenced:**
- `/guidelines/development/css-optimization-guidelines.md` → Main CSS optimization standards
- `/guidelines/Guidelines.md` → WordPress/WooCommerce alignment
- `/guidelines/design-tokens/` → Token documentation

---

## **Notes**

* Use UK English throughout all reports
* Always cite specific file paths and line numbers in findings
* Provide before/after code examples for clarity
* Include memory impact estimates for all recommendations
* Cross-reference CSS optimization guidelines in every recommendation
* Never output task list until ALL audit reports are written to `/reports/`

---

## **Stop Conditions**

**STOP the orchestrator if:**
- Unable to write to `/reports/` directory
- Figma memory audit shows < 50% memory usage (optimization not urgent)
- No CSS files > 50 KB (minimal CSS optimization opportunity)
- All reports already exist (avoid duplicate work)

**In these cases:** Print report content to console and state why files were not written. Do NOT generate task list.

---

**Orchestrator Version:** 2.0 (CSS-Enhanced)  
**Last Updated:** 2026-03-05  
**Status:** ✅ Ready for production use
