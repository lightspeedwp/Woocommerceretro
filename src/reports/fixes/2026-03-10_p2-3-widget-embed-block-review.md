# P2.3 - Widget & Embed Block Review

**Date:** March 10, 2026  
**Task:** T5.5 P2.3 - Review widget and embed blocks for removal  
**Status:** 🔄 IN PROGRESS  
**Effort:** 2 hours estimated

---

## Executive Summary

Auditing all widget and embed block CSS files to determine which can be safely removed without breaking WordPress/WooCommerce compatibility.

**Target Files:** 12 files (8 widgets + 4 embeds)  
**Expected Removable:** 4-6 files  
**Expected Savings:** ~230 lines, ~2.5 KB

---

## Methodology

### Step 1: List All Widget/Embed Files

```bash
ls /src/styles/blocks/widgets/
ls /src/styles/blocks/embed/
```

### Step 2: Check Template Usage

For each block, search all templates:

```bash
grep -r "wp-block-widget-calendar" /src/app/templates/
grep -r "wp-block-embed-flickr" /src/app/templates/
```

If 0 results → block is not used → safe to delete

### Step 3: Check Component Usage

Search all components for CSS class references:

```bash
grep -r "wp-block-widget-calendar" /src/app/components/
```

### Step 4: WordPress Compatibility Check

Before deleting, verify:
- Is this a WordPress Core block? (Keep if yes)
- Is this commonly used in real WordPress sites? (Keep if yes)
- Could users add this via WordPress editor? (Keep if yes)

---

## Phase 1: Widget Block Audit

### Widget 1: Calendar (`wp-block-widget-calendar`)

**File:** `/src/styles/blocks/widgets/calendar.css`

**Usage Check:**
```bash
grep -r "wp-block-widget-calendar" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Widget 2: Archives (`wp-block-widget-archives`)

**File:** `/src/styles/blocks/widgets/archives.css`

**Usage Check:**
```bash
grep -r "wp-block-widget-archives" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Widget 3: RSS (`wp-block-widget-rss`)

**File:** `/src/styles/blocks/widgets/rss.css`

**Usage Check:**
```bash
grep -r "wp-block-widget-rss" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Widget 4: Tag Cloud (`wp-block-widget-tag-cloud`)

**File:** `/src/styles/blocks/widgets/tag-cloud.css`

**Usage Check:**
```bash
grep -r "wp-block-widget-tag-cloud" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Widget 5: Categories (`wp-block-widget-categories`)

**File:** `/src/styles/blocks/widgets/categories.css`

**Usage Check:**
```bash
grep -r "wp-block-widget-categories" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Widget 6: Recent Posts (`wp-block-widget-recent-posts`)

**File:** `/src/styles/blocks/widgets/recent-posts.css`

**Usage Check:**
```bash
grep -r "wp-block-widget-recent-posts" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Widget 7: Recent Comments (`wp-block-widget-recent-comments`)

**File:** `/src/styles/blocks/widgets/recent-comments.css`

**Usage Check:**
```bash
grep -r "wp-block-widget-recent-comments" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Widget 8: Search (`wp-block-widget-search`)

**File:** `/src/styles/blocks/widgets/search.css`

**Usage Check:**
```bash
grep -r "wp-block-widget-search" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

## Phase 2: Embed Block Audit

### Embed 1: Flickr (`wp-block-embed-flickr`)

**File:** `/src/styles/blocks/embed/flickr.css`

**Usage Check:**
```bash
grep -r "wp-block-embed-flickr" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Embed 2: SoundCloud (`wp-block-embed-soundcloud`)

**File:** `/src/styles/blocks/embed/soundcloud.css`

**Usage Check:**
```bash
grep -r "wp-block-embed-soundcloud" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Embed 3: Vimeo (`wp-block-embed-vimeo`)

**File:** `/src/styles/blocks/embed/vimeo.css`

**Usage Check:**
```bash
grep -r "wp-block-embed-vimeo" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

### Embed 4: YouTube (`wp-block-embed-youtube`)

**File:** `/src/styles/blocks/embed/youtube.css`

**Usage Check:**
```bash
grep -r "wp-block-embed-youtube" /src/app/
```

**Result:** PENDING

**Decision:** PENDING

---

## Audit Results (To Be Completed)

| Block | File | Usage Count | Decision | Lines | KB |
|-------|------|-------------|----------|-------|-----|
| Calendar | `widgets/calendar.css` | TBD | PENDING | ~40 | ~0.5 |
| Archives | `widgets/archives.css` | TBD | PENDING | ~35 | ~0.4 |
| RSS | `widgets/rss.css` | TBD | PENDING | ~45 | ~0.6 |
| Tag Cloud | `widgets/tag-cloud.css` | TBD | PENDING | ~40 | ~0.5 |
| Categories | `widgets/categories.css` | TBD | PENDING | ~35 | ~0.4 |
| Recent Posts | `widgets/recent-posts.css` | TBD | PENDING | ~50 | ~0.6 |
| Recent Comments | `widgets/recent-comments.css` | TBD | PENDING | ~45 | ~0.6 |
| Search | `widgets/search.css` | TBD | PENDING | ~40 | ~0.5 |
| Flickr | `embed/flickr.css` | TBD | PENDING | ~30 | ~0.3 |
| SoundCloud | `embed/soundcloud.css` | TBD | PENDING | ~35 | ~0.4 |
| Vimeo | `embed/vimeo.css` | TBD | PENDING | ~35 | ~0.4 |
| YouTube | `embed/youtube.css` | TBD | PENDING | ~40 | ~0.5 |

---

## Next Steps

1. Execute usage audit for all 12 blocks
2. Determine which blocks are unused
3. Check WordPress compatibility concerns
4. Delete unused blocks
5. Remove `@import` statements from `/styles/globals.css`
6. Verify build + visual QA
7. Update completion report

---

**Status:** 🔄 EXECUTING AUDIT
