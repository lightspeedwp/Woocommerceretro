# 📋 **SUB-PROMPT** — Figma Memory Audit (Design File Focus)

**Role:** Sub-prompt for auditing Figma file memory usage  
**Called by:** Enhanced CSS Memory Orchestrator  
**Phase:** 1 (Run FIRST before code audits)

---

## **Purpose**

Figma prototypes run inside a single browser tab constrained by WebAssembly (WASM) memory limit of approximately **2 GB**[[1]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem). When working with complex files or Figma's AI-based "Make" features, memory saturation causes crashes, sluggish performance, and "almost out of memory" banners.

This prompt guides an AI assistant in auditing a Figma file for memory waste, identifying high-memory components that should be prioritized for CSS/code optimization.

---

## **The 2 GB Limit**

Each Figma tab (web or desktop) gets roughly **2 GB of working memory**[[1]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem). When the file approaches this limit, the app stops rendering reliably. The audit must prioritize actions that reduce memory consumption and avoid hitting this ceiling.

**Memory zones:**
- **< 50% (< 1 GB):** ✅ Healthy - optimization optional
- **50-70% (1-1.4 GB):** ⚠️ Warning - start cleaning
- **70-90% (1.4-1.8 GB):** 🔴 Critical - aggressive optimization needed
- **> 90% (> 1.8 GB):** ❌ Danger - crashes imminent, stop work and clean immediately

---

## **Instructions**

### **1. Monitor Memory Usage**

**Enable the Memory Meter:**
- In Figma file: **Main Menu → View → Memory usage**
- Toggle **Show memory in layers panel** to see per-layer usage
- Document overall file memory: **X MB / 2048 MB (Y%)**

**Identify high-memory pages:**
- Record memory usage for each page
- Flag pages using > 500 MB
- Note top 10 memory-consuming layers/components

**Evidence to collect:**
```
Total file memory: 1,450 MB / 2,048 MB (71%)

Page breakdown:
- HomePage: 680 MB (47%)
- ProductArchive: 420 MB (29%)
- SingleProduct: 220 MB (15%)
- About: 90 MB (6%)
- Contact: 40 MB (3%)

Top 10 memory consumers:
1. HomePage / HeroSection - 245 MB
2. HomePage / ProductGrid - 180 MB
3. ProductArchive / FilterSidebar - 120 MB
4. ProductArchive / ProductGridLarge - 150 MB
5. SingleProduct / ProductGallery - 95 MB
... (continue for top 10)
```

---

### **2. Optimize Assets and Layers**

#### **Compress Raster Images**

**Problem:** Large images are the biggest memory hogs.

**Solution:**
- Use Figma plugins: *Downsize* or *Heavyweights*
- Compress high-resolution images on canvas[[2]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem)
- Replace 4K images with appropriately sized versions
- Convert to WebP format where possible

**Target:** Reduce image memory by 40-60%

---

#### **Remove Hidden or Duplicate Layers**

**Problem:** Hidden layers still consume memory.

**Solution:**
- Delete non-critical hidden layers manually
- Use "clean document" plugins[[2]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem)
- Remove duplicate frames/components
- Archive old iterations to separate file

**Target:** Remove 20-30% of hidden layers

---

#### **Flatten Complex Vectors and SVGs**

**Problem:** High vector node count increases WASM heap usage.

**Solution:**
- Simplify imported SVGs before adding to canvas
- Use Figma's Boolean operations to flatten shapes
- Rasterize complex illustrations (when appropriate)
- Reduce anchor points in paths

**Target:** 30-50% reduction in vector nodes for complex shapes

---

### **3. Optimize Component Hierarchy**

#### **Reduce Variant Count**

**Problem:** Large component sets with many variants force Figma to load every variant even if only one is used[[3]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem).

**Solution:**
- Replace variant sets with Boolean properties[[3]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem)
- Consolidate similar variants (e.g., size variants via auto-layout)
- Remove unused variants
- Use component properties instead of separate components

**Example:**
```
❌ BEFORE: Button component with 24 variants
- Size: Small, Medium, Large (3)
- Style: Primary, Secondary, Outline, Ghost (4)
- State: Default, Hover, Active, Disabled (4)
- Icon: Yes, No (2)
Total variants: 3 × 4 × 4 × 2 = 96 variants (high memory)

✅ AFTER: Button with properties
- Size: Boolean property (Small: false, Large: false = Medium)
- Style: Variant property (4 options)
- State: Instance swap property
- Icon: Boolean property (Show icon: true/false)
Total variants: 4 (style variants only)
Memory reduction: ~85%
```

---

#### **Avoid Deep Nesting**

**Problem:** Over-nested base/slot components exponentially increase memory usage[[4]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem).

**Solution:**
- Keep component hierarchy flat (< 3 levels deep)
- Avoid "wrapper of wrapper of wrapper" patterns
- Use auto-layout instead of nested frames
- Simplify component composition

**Target:** No component nesting > 4 levels deep

---

### **4. Restructure the File**

#### **Split Large Files**

**Problem:** "Franken-files" with everything in one file quickly exceed memory cap[[5]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc).

**Solution:**
- Separate files: Design System, Page Designs, Experiments, Archive
- Copy/paste pages into new file
- Maintain library connections
- Link files via URL or team libraries

**Target structure:**
```
WooCommerce-DesignSystem.fig (Components only) - 400 MB
WooCommerce-ProductionPages.fig (Final pages) - 600 MB
WooCommerce-Explorations.fig (WIP/experiments) - 300 MB
WooCommerce-Archive.fig (Old versions) - 500 MB
```

---

#### **Use Multiple Pages**

**Problem:** Everything on one canvas loads into memory.

**Solution:**
- Distribute content across pages (Figma only loads active page)
- Organize by: Homepage, Shop, Product, Blog, System
- Use pages like: "Ideation", "Production", "Design System"
- Move unused flows to "Archive" page

**Memory impact:** 40-60% reduction in active page memory

---

### **5. Clear Local Cache**

**When:** Single user experiences lag while others don't.

**Solution:**
- Close Figma
- Clear desktop app cache via OS cache folders:
  - **macOS:** `~/Library/Application Support/Figma/`
  - **Windows:** `%AppData%\Figma\`
- Restart Figma
- Reload file

**Note:** This doesn't reduce file size but can eliminate stale memory leaks.

---

### **6. Manage Figma Make Prompts**

**Problem:** Heavy AI feature usage increases memory.

**Solution:**
- Clear prompt history between sessions
- Write concise, structured prompts
- Avoid generating excessive layers
- Restart AI session if errors occur
- Delete failed generation attempts

**Target:** Keep prompt history < 20 items

---

## **Report Template**

After completing the audit, generate this report:

```markdown
# Figma Memory Audit — [Project Name] — YYYY-MM-DD

## Executive Summary

- **Total file memory:** X MB / 2,048 MB (Y%)
- **Status:** [Healthy / Warning / Critical / Danger]
- **Recommended action:** [None / Clean up / Aggressive optimization / Split file immediately]
- **Estimated memory reduction:** Z MB (W% decrease)

## 1. Overall Memory Breakdown

### File-Level Stats
- Total file size: X MB
- Active page memory: Y MB
- Number of pages: N
- Total components: M
- Total frames: P

### Page Memory Distribution

| Page | Memory (MB) | % of Total | Status | Priority |
|------|-------------|------------|--------|----------|
| HomePage | 680 | 47% | 🔴 Critical | P0 |
| ProductArchive | 420 | 29% | ⚠️ Warning | P1 |
| SingleProduct | 220 | 15% | ✅ OK | P2 |
| About | 90 | 6% | ✅ OK | P3 |
| Contact | 40 | 3% | ✅ OK | P3 |

## 2. High-Memory Components

### Top 10 Memory Consumers

| Rank | Component | Page | Memory (MB) | Type | Optimization Opportunity |
|------|-----------|------|-------------|------|--------------------------|
| 1 | HeroSection | HomePage | 245 | Frame | Compress background image, flatten vectors |
| 2 | ProductGrid | HomePage | 180 | Component | Reduce variants, optimize product images |
| 3 | FilterSidebar | ProductArchive | 120 | Component | Simplify nested structure |
| 4 | ProductGridLarge | ProductArchive | 150 | Frame | Consolidate duplicate cards |
| 5 | ProductGallery | SingleProduct | 95 | Component | Compress image thumbnails |
| ... | ... | ... | ... | ... | ... |

## 3. Asset Optimization Opportunities

### Images
- **Total images:** X images
- **Average size:** Y MB per image
- **Largest images:** [list top 5 with sizes]
- **Compression opportunity:** Estimated Z MB reduction (W%)
- **Action:** Compress, resize, convert to WebP

### Vectors/SVGs
- **Complex shapes:** [list shapes with > 500 nodes]
- **Flatten opportunity:** Estimated Z% node reduction
- **Action:** Boolean operations, simplify paths

### Fonts
- **Loaded font weights:** [list all weights]
- **Unused weights:** [list unused]
- **Action:** Remove unused weights

## 4. Component Hierarchy Issues

### High-Variant Components

| Component | Current Variants | Recommended | Memory Impact |
|-----------|------------------|-------------|---------------|
| Button | 96 variants | 4 variants | High |
| Input | 48 variants | 6 variants | Medium |
| Card | 32 variants | 8 variants | Medium |

**Action:** Convert to Boolean/property-based variants

### Deep Nesting

| Component | Nesting Depth | Recommendation |
|-----------|---------------|----------------|
| ProductCard | 6 levels | Flatten to 3 levels |
| FilterWidget | 5 levels | Flatten to 2 levels |

**Action:** Simplify component composition

## 5. File Structure Recommendations

### Current Structure
```
WooCommerce-Demo.fig (1,450 MB)
├── HomePage (680 MB)
├── ProductArchive (420 MB)
├── SingleProduct (220 MB)
├── About (90 MB)
└── Contact (40 MB)
```

### Recommended Structure
```
WooCommerce-DesignSystem.fig (400 MB) ← Components only
WooCommerce-ProductionPages.fig (600 MB) ← HomePage, ProductArchive, SingleProduct
WooCommerce-ContentPages.fig (150 MB) ← About, Contact
WooCommerce-Archive.fig (300 MB) ← Old versions, explorations
```

**Estimated memory reduction:** 1,450 MB → 600 MB active file (58% reduction)

## 6. Code Optimization Priorities

**Based on Figma high-memory components, prioritize CSS/code optimization for:**

| Figma Component | Codebase File | Priority | Reason |
|-----------------|---------------|----------|--------|
| HeroSection (245 MB) | `/src/styles/sections/hero.css` | P0 | Largest memory consumer |
| ProductGrid (180 MB) | `/src/styles/patterns/product-grid.css` | P0 | High memory + repeated pattern |
| FilterSidebar (120 MB) | `/src/styles/blocks/archive/filter-sidebar.css` | P1 | Complex nested structure |
| ProductGallery (95 MB) | `/src/styles/blocks/product/gallery.css` | P2 | Image-heavy |

**This list directly informs CSS architecture audit prioritization.**

## 7. Immediate Actions (Priority 0)

### Must Do (Before Any Code Audit)

- [ ] **Action 1:** Compress HeroSection background image (estimate: -80 MB)
- [ ] **Action 2:** Reduce ProductGrid component variants (estimate: -60 MB)
- [ ] **Action 3:** Flatten FilterSidebar nested structure (estimate: -40 MB)
- [ ] **Action 4:** Remove hidden layers on HomePage (estimate: -50 MB)
- [ ] **Action 5:** Split file into DesignSystem + ProductionPages (estimate: -850 MB active)

**Total estimated reduction:** ~1,080 MB (74% reduction in active file memory)

## 8. Success Metrics

### Targets

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| **Total file memory** | 1,450 MB | < 800 MB | 🔴 Must improve |
| **Largest page** | 680 MB | < 400 MB | 🔴 Must improve |
| **Component variants** | 200+ per file | < 50 total | ⚠️ Needs work |
| **Hidden layers** | 30% | < 5% | ⚠️ Needs work |

## Appendix: Evidence

### Memory Meter Screenshots
- [Screenshot: Overall file memory]
- [Screenshot: HomePage memory breakdown]
- [Screenshot: Top 10 layers panel]

### File Paths Referenced
- Figma file: [URL]
- Related codebase: [GitHub repo URL]
- CSS files to prioritize: [list paths]
```

---

## **Integration with CSS Audit**

**Pass this information to CSS audit:**

1. **High-memory component list** → Prioritize their CSS files
2. **Memory percentages** → Calculate optimization ROI
3. **Variant counts** → Inform BEM migration strategy
4. **Page structure** → Guide CSS file splitting

**Example integration:**
```
Figma Audit found: HomePage HeroSection = 245 MB (17% of total file)
→ CSS Audit priority: /src/styles/sections/hero.css becomes P0
→ Task list: "P0.1: Optimize hero.css (estimated memory impact: High)"
```

---

## **Additional Tips**

* **Splitting files:** Treat Figma workspace like a kitchen—keep frequently used components in one file, archive old flows[[5]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc)
    
* **Clean layers aggressively:** Hidden layers and outdated artboards still load[[6]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc)
    
* **Watch the meter:** Treat memory panel like a fuel gauge—over 50% start cleaning, over 70% you're on borrowed time[[7]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc)
    
* **Boolean properties:** Use properties instead of large variant sets to reduce loaded layers[[3]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem)

---

## **When to Run This Audit**

**Required:**
- Before ANY code optimization work
- When Figma file shows "almost out of memory" warning
- When file load time > 30 seconds
- When experiencing crashes or lag

**Optional but recommended:**
- Monthly for active projects
- After major design changes
- Before design handoff to development

---

## **Stop Conditions**

**STOP and skip this audit if:**
- File memory < 50% (< 1 GB) - optimization not urgent
- No access to Figma file - run codebase audit only
- File already split into modular structure - run maintenance audit only

---

## **References**

[[1]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem) [[2]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem) [[3]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem) [[4]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem) Figma Memory Limit - This file is almost out of browser memory  
https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem

[[5]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc) [[6]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc) [[7]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc) Figma Memory Limits Will Eat You Alive If You Don't Manage Them Like a Pro  
https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc

---

**Prompt Version:** 1.0  
**Last Updated:** 2026-03-05  
**Status:** ✅ Ready for production use
