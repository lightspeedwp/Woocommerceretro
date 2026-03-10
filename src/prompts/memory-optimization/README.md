# Memory Optimization & CSS Architecture Audit Prompts

This folder contains a connected set of prompts for optimizing memory usage and CSS architecture in Figma Make prototypes, with a **specific focus on CSS as a memory optimization vector**.

## Prompt Files

### 🎯 **ORCHESTRATORS** (Choose one based on your needs)

#### **Option 1: Enhanced CSS Memory Orchestrator** (RECOMMENDED)
- **File:** `orchestrator_enhanced-css-memory.md`
- **Purpose:** Coordinates audits with CSS optimization as primary memory reduction strategy
- **When to use:** All projects, especially those with large CSS bundles (> 300 KB)
- **Key features:**
  - CSS optimization prioritized as memory reduction strategy
  - Figma memory audit FIRST to identify high-memory components
  - CSS files for high-memory components become P0 optimization targets
  - Memory impact estimates for all CSS optimizations
- **Runs:** Once per repository

#### **Option 2: Standard Orchestrator**
- **File:** `orchestrator_figma-prototype-audit.md`
- **Purpose:** Coordinates general code and memory audits
- **When to use:** Projects with minimal CSS (< 200 KB) or when CSS is already optimized
- **Runs:** Once per repository

### 📋 **SUB-PROMPTS** (Called by orchestrators)

#### **Phase 1: Figma Memory Audit** (NEW - Priority 0)
- **File:** `sub-prompt_figma-memory-audit.md`
- **Purpose:** Audit Figma file memory usage to identify high-memory components
- **Key outputs:**
  - Memory usage per page/component
  - High-memory component list (for CSS prioritization)
  - Asset optimization opportunities
  - File splitting recommendations
- **Memory impact:** Identifies optimization targets worth 100-1000 MB reduction

#### **Phase 2: CSS Architecture Audit** (Priority 1)
- **File:** `sub-prompt_css-architecture-audit.md`
- **Purpose:** Comprehensive CSS architecture audit (10 sub-audits A-J)
- **Key outputs:**
  - CSS file sizes and selector counts
  - Token system evaluation
  - BEM migration strategy
  - WordPress alignment assessment
  - Unused CSS identification
- **Memory impact:** 10-50% CSS bundle size reduction

#### **Phase 3: Codebase Memory Optimization**
- **File:** `sub-prompt_woocommerce-memory-optimization.md`
- **Purpose:** React component and asset optimization
- **Key outputs:**
  - Component modularization opportunities
  - Data file splitting recommendations
  - Image compression needs
  - Icon import consolidation
- **Memory impact:** Varies by project (5-30% component memory reduction)

### 📖 **GUIDELINES** (Reference documents)

- **File:** `/guidelines/development/css-optimization-guidelines.md`
- **Purpose:** Complete CSS optimization standards and best practices
- **Contents:**
  - Token-first architecture
  - BEM naming conventions
  - Light/dark mode implementation
  - Accessibility checklist (WCAG 2.1 AA/AAA)
  - Memory optimization strategies
  - Migration workflow

## Workflow

### Standard Workflow (Enhanced CSS Memory Orchestrator)

```
1. Run orchestrator_enhanced-css-memory.md
   ↓
2. Orchestrator executes in phases:
   
   PHASE 1: Figma Memory Audit
   → sub-prompt_figma-memory-audit.md
   → Output: Identify high-memory components (e.g., HeroSection: 245 MB)
   → Creates: /reports/audits/YYYY-MM-DD_figma-memory.md
   
   PHASE 2: CSS Architecture Audit
   → sub-prompt_css-architecture-audit.md
   → Priority: CSS files for high-memory Figma components
   → Creates: /reports/audits/YYYY-MM-DD_css-audit.md
   
   PHASE 3: Codebase Memory Audit
   → sub-prompt_woocommerce-memory-optimization.md
   → Creates: /reports/audits/YYYY-MM-DD_codebase-memory.md
   
   PHASE 4: Consolidation
   → Combine all findings
   → Calculate memory impact estimates
   → Creates: /reports/audits/YYYY-MM-DD_consolidated.md
   
   PHASE 5: Task List
   → ONLY after ALL reports written
   → Prioritized by memory impact
   → Creates: /reports/YYYY-MM-DD_task-list.md
```

### Alternative Workflow (Standard Orchestrator)

```
1. Run orchestrator_figma-prototype-audit.md
   ↓
2. Memory optimization → CSS audit → Consolidated report → Task list
```

## Key Principles

- **Audit → Report → Tasks** (strict order, no task list until reports written)
- **Figma audit FIRST** (identifies highest-impact optimization targets)
- **CSS as memory vector** (CSS optimization = memory optimization)
- **Accessibility first** (WCAG 2.1 AA/AAA non-negotiable)
- **WordPress alignment** (BEM, theme.json, semantic tokens)
- **Memory efficiency** (Figma 2GB limit, bundle size reduction)
- **Token-driven theming** (light/dark via CSS variables)

## CSS-Specific Memory Optimization

### Why CSS Matters for Memory

1. **Large CSS bundles** consume browser parsing memory
2. **Redundant selectors** waste memory without value
3. **Complex selectors** increase rendering overhead
4. **Duplicate dark mode styles** double memory usage
5. **Unused CSS** is dead weight

### CSS Optimization Strategies

| Strategy | Memory Impact | Difficulty | Priority |
|----------|---------------|------------|----------|
| Split large files (> 500 lines) | 20-40% reduction | Medium | P0 |
| Remove duplicate selectors | 10-30% reduction | Easy | P1 |
| Remove unused CSS (PurgeCSS) | 15-50% reduction | Easy | P1 |
| Simplify selector complexity | 5-15% faster rendering | Medium | P2 |
| Optimize dark mode (CSS vars) | 30-50% dark mode reduction | Medium | P1 |
| Extract reusable patterns | 20-40% pattern reduction | Hard | P2 |

### Memory Impact Formula

```
Memory Saved (MB) = (CSS Size Reduction (KB) × 0.003) + (Selector Count Reduction × 0.0001)
```

**Example:**
- Reduce CSS from 500 KB → 350 KB (150 KB saved)
- Reduce selectors from 3000 → 2000 (1000 saved)
- **Memory saved:** (150 × 0.003) + (1000 × 0.0001) = **0.55 MB**
- **Figma impact:** 0.55 MB × 3-5 multiplier = **1.65-2.75 MB** in Figma

## Related Guidelines

- `/guidelines/development/css-optimization-guidelines.md` - **Complete CSS optimization standards**
- `/guidelines/IMPORTS_GUIDELINES.md` - Asset import standards
- `/guidelines/Guidelines.md` - Main project guidelines
- `/guidelines/design-tokens/` - Design token documentation
- `/guidelines/REPORTING_GUIDELINES.md` - Report writing standards
- `/guidelines/REDUCED_MOTION_GUIDELINES.md` - Accessibility motion standards

## Report Output Locations

All reports generated by these prompts go to `/reports/`:

```
/reports/
├── audits/
│   ├── YYYY-MM-DD_figma-memory.md          ← NEW (Phase 1)
│   ├── YYYY-MM-DD_css-audit.md             ← Phase 2
│   ├── YYYY-MM-DD_codebase-memory.md       ← Phase 3
│   └── YYYY-MM-DD_consolidated.md          ← Phase 4
└── YYYY-MM-DD_task-list.md                 ← Phase 5 (ONLY after audits)
```

## Usage Examples

### Example 1: New Project Audit

```
1. Situation: WooCommerce Demo project, Figma file at 1,450 MB (71% memory)
2. Goal: Optimize memory, reduce CSS bundle, improve performance
3. Steps:
   a. Run orchestrator_enhanced-css-memory.md
   b. Figma audit identifies: HomePage HeroSection = 245 MB (P0 target)
   c. CSS audit prioritizes: /src/styles/sections/hero.css
   d. Codebase audit finds: Image compression opportunities
   e. Consolidated report: Estimated 800 MB total reduction
   f. Task list: P0 tasks target high-memory components first
```

### Example 2: CSS-Only Optimization

```
1. Situation: Figma file healthy (< 50% memory), but CSS bundle is 600 KB
2. Goal: Optimize CSS without full memory audit
3. Steps:
   a. Run only sub-prompt_css-architecture-audit.md
   b. Identify large CSS files (globals.css: 120 KB)
   c. Find unused CSS (30% unused)
   d. Generate CSS-focused task list
```

### Example 3: Cross-Repository Audit

```
1. Situation: 5 LightSpeed projects need standardization
2. Goal: Apply CSS optimization guidelines across all repos
3. Steps:
   a. Run orchestrator_enhanced-css-memory.md per repo
   b. Identify shared issues (all using Tailwind utilities)
   c. Create global TASKS_ALL.md with cross-repo patterns
   d. Prioritize repos by memory usage
```

## Success Metrics

### CSS Optimization Targets

| Metric | Typical Baseline | Target | Measurement |
|--------|------------------|--------|-------------|
| **Total CSS Size** | 400-600 KB | < 400 KB | Bundle analyzer |
| **Largest CSS File** | 100-150 KB | < 80 KB | File system |
| **Unused CSS** | 20-40% | < 10% | PurgeCSS/coverage |
| **Selector Count** | 2500-4000 | < 2000 | CSS parser |
| **Duplicate Rules** | 10-20% | < 5% | cssnano |

### Memory Impact Targets

| Metric | Typical Baseline | Target | Measurement |
|--------|------------------|--------|-------------|
| **Figma File Memory** | 1200-1800 MB | < 1000 MB | Figma memory meter |
| **CSS Parse Time** | 150-300 ms | < 150 ms | Chrome DevTools |
| **Build Time** | 12-20 sec | < 12 sec | Figma Make logs |
| **Bundle Size** | 500-800 KB CSS | < 400 KB | Build output |

## Prioritization Matrix

Use this to determine which prompts to run:

| Situation | Figma Memory | CSS Size | Recommended Prompt |
|-----------|--------------|----------|-------------------|
| Crisis mode | > 1800 MB (> 90%) | Any | **Enhanced orchestrator** (all phases) |
| High memory | 1400-1800 MB (70-90%) | > 400 KB | **Enhanced orchestrator** (all phases) |
| CSS bloat | < 1000 MB (< 50%) | > 500 KB | **CSS audit only** |
| Maintenance | < 1000 MB | < 400 KB | **Standard orchestrator** (optional) |
| Healthy | < 800 MB | < 300 KB | No audit needed (quarterly review) |

## Version History

- **v2.0 (2026-03-05):** Added CSS-focused memory optimization
  - New: `orchestrator_enhanced-css-memory.md`
  - New: `sub-prompt_figma-memory-audit.md`
  - New: `/guidelines/development/css-optimization-guidelines.md`
  - Enhanced workflow with Figma → CSS → Code prioritization

- **v1.0 (2026-03-05):** Initial prompts
  - `orchestrator_figma-prototype-audit.md`
  - `sub-prompt_woocommerce-memory-optimization.md`
  - `sub-prompt_css-architecture-audit.md`

## Version

- **Created:** 2026-03-05
- **Last Updated:** 2026-03-05 (v2.0 - CSS Enhancement)
- **Maintainer:** LightSpeed Development Team

## Notes

- These prompts enforce strict workflow discipline (no premature task creation)
- **NEW:** Figma memory audit should be run FIRST to identify optimization priorities
- **NEW:** CSS optimization is now treated as primary memory reduction strategy
- Accessibility is non-negotiable (AA minimum, AAA target)
- All changes must preserve WordPress/WooCommerce alignment
- Memory impact estimates required for all recommendations
