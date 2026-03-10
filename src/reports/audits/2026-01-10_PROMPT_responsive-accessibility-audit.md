# Responsive Design & Accessibility Audit Prompt

**Date:** 2026-01-10  
**Type:** Comprehensive Audit  
**Scope:** WCAG Compliance, Fluid Typography, Fluid Spacing, Responsive Behavior

---

## 🎯 Audit Objectives

Perform a comprehensive evaluation of:

1. **WCAG AA/AAA Compliance** - Color contrast in light and dark modes
2. **Fluid Typography** - Mobile, tablet, desktop scaling
3. **Fluid Spacing** - Responsive padding/margins
4. **Responsive Breakpoints** - Component visibility and layout shifts
5. **Critical Bugs** - Simultaneous mobile/desktop element display

---

## 📋 Audit Checklist

### **Phase 1: WCAG Contrast Compliance**

Evaluate all text and interactive elements for WCAG 2.1 Level AA and AAA compliance.

#### **Light Mode Contrast Ratios**

Test against white background (`#ffffff`):

**Text Elements:**
- [ ] H1 headings (`text-gray-900` = `#1a1a1a`)
- [ ] H2-H6 headings (`text-gray-900`)
- [ ] Body text (`text-gray-600` = `#4b5563`)
- [ ] Secondary text (`text-gray-500`)
- [ ] Muted text (`text-gray-400`)
- [ ] Link text (`text-purple-600` = `#7c3aed`)
- [ ] Button text on primary buttons
- [ ] Form labels
- [ ] Placeholder text

**Interactive Elements:**
- [ ] Primary button background vs. text
- [ ] Secondary button border vs. background
- [ ] Form input borders
- [ ] Focus ring colors
- [ ] Hover state colors
- [ ] Active state colors
- [ ] Disabled state colors

**Component-Specific:**
- [ ] ProductCard price text
- [ ] Badge backgrounds vs. text
- [ ] Alert/Banner backgrounds vs. text
- [ ] Navigation link colors
- [ ] Footer text colors
- [ ] Breadcrumb text colors

#### **Dark Mode Contrast Ratios**

Test against dark background (`#0f0f0f`):

**Text Elements:**
- [ ] H1 headings (`text-gray-50` = `#f9fafb`)
- [ ] H2-H6 headings (`text-gray-50`)
- [ ] Body text (`text-gray-400` = `#9ca3af`)
- [ ] Secondary text (`text-gray-500`)
- [ ] Muted text (`text-gray-600`)
- [ ] Link text (`text-purple-400` = `#a78bfa`)
- [ ] Button text on primary buttons
- [ ] Form labels
- [ ] Placeholder text

**Interactive Elements:**
- [ ] Primary button background vs. text
- [ ] Secondary button border vs. background
- [ ] Form input borders (`border-gray-600`)
- [ ] Focus ring colors
- [ ] Hover state colors
- [ ] Active state colors
- [ ] Disabled state colors

**Component-Specific:**
- [ ] ProductCard on dark surface (`bg-[#1a1a1a]`)
- [ ] Badge backgrounds vs. text
- [ ] Alert/Banner backgrounds vs. text
- [ ] Navigation link colors
- [ ] Footer text colors
- [ ] Breadcrumb text colors

#### **WCAG Standards Reference**

**Level AA Requirements:**
- Normal text (< 18pt): **4.5:1** minimum
- Large text (≥ 18pt): **3:1** minimum
- Bold text (≥ 14pt): **3:1** minimum

**Level AAA Requirements:**
- Normal text (< 18pt): **7:1** minimum
- Large text (≥ 18pt): **4.5:1** minimum
- Bold text (≥ 14pt): **4.5:1** minimum

**Tools to Use:**
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Chrome DevTools: Lighthouse accessibility audit
- Browser extension: axe DevTools

---

### **Phase 2: Fluid Typography Evaluation**

Evaluate all heading and text sizes across viewport widths.

#### **Heading Sizes**

**Current Implementation (from Guidelines.md):**

```tsx
// h1 - Product Names, Page Titles
'text-[clamp(2rem,3vw+1rem,3.5rem)]' // 32px → 56px

// h2 - Section Headings  
'text-[clamp(1.75rem,2vw+1rem,2.75rem)]' // 28px → 44px

// h3 - Sub-sections
'text-[clamp(1.375rem,1.5vw+0.75rem,2rem)]' // 22px → 32px

// h4 - Widget Titles, Footer Headings
'text-[clamp(1.125rem,1vw+0.75rem,1.5rem)]' // 18px → 24px
```

**Test at Breakpoints:**
- [ ] **320px (Mobile)** - Verify minimum sizes (32px, 28px, 22px, 18px)
- [ ] **640px (Tablet)** - Verify intermediate scaling
- [ ] **1024px (Desktop)** - Verify intermediate scaling
- [ ] **1920px (Wide)** - Verify maximum sizes (56px, 44px, 32px, 24px)

**Questions to Answer:**
1. Are mobile sizes readable without zooming?
2. Are desktop sizes appropriately large but not overwhelming?
3. Is the scaling smooth without sudden jumps?
4. Do headings maintain proper hierarchy at all sizes?

#### **Body Text Sizes**

**Expected WordPress Variables:**

```css
--wp--preset--font-size--small: clamp(0.75rem, 0.5vw + 0.625rem, 0.875rem);   /* 12px → 14px */
--wp--preset--font-size--normal: clamp(1rem, 0.75vw + 0.875rem, 1.3125rem);   /* 16px → 21px */
--wp--preset--font-size--medium: clamp(1.125rem, 1vw + 0.875rem, 1.5rem);     /* 18px → 24px */
```

**Test Elements:**
- [ ] Paragraph text (`<p>`)
- [ ] List items (`<li>`)
- [ ] Form labels
- [ ] Helper text
- [ ] Meta information
- [ ] Footer text
- [ ] Navigation links

**Test at Breakpoints:**
- [ ] **320px** - Minimum readable size (16px for body)
- [ ] **640px** - Intermediate scaling
- [ ] **1024px** - Intermediate scaling
- [ ] **1920px** - Maximum size (21px for body)

**Questions to Answer:**
1. Is body text at 16px minimum on mobile?
2. Does text scale proportionally to screen size?
3. Is line-height appropriate at all sizes?
4. Are there any readability issues at extreme sizes?

---

### **Phase 3: Fluid Spacing Evaluation**

Evaluate spacing consistency across viewport widths.

#### **Section Padding**

**Current Standards (from Guidelines.md):**

```tsx
py-16    // Standard sections (64px)
py-20 lg:py-32   // Hero/CTA (80px → 128px)
py-12    // Compact sections (48px)
py-24 lg:py-40   // Full-height sections (96px → 160px)
```

**Test Components:**
- [ ] Hero section vertical padding
- [ ] Standard content sections
- [ ] CTA sections
- [ ] Footer padding
- [ ] Container padding
- [ ] Card padding

**Test at Breakpoints:**
- [ ] **320px** - Minimum padding (py-12 = 48px, py-16 = 64px)
- [ ] **640px** - Tablet padding
- [ ] **1024px** - Desktop padding (lg: breakpoint applies)
- [ ] **1920px** - Wide screen padding

**Questions to Answer:**
1. Is mobile padding sufficient but not wasteful?
2. Do sections have breathing room on desktop?
3. Are padding transitions smooth at breakpoints?
4. Is vertical rhythm maintained across screen sizes?

#### **Component Spacing**

**Expected WordPress Spacing Variables:**

```css
--wp--preset--spacing--10: 2px;
--wp--preset--spacing--20: 4px;
--wp--preset--spacing--30: 8px;
--wp--preset--spacing--40: 16px;
--wp--preset--spacing--50: 24px;
--wp--preset--spacing--60: 32px;
--wp--preset--spacing--70: 48px;
--wp--preset--spacing--80: 64px;
--wp--preset--spacing--90: 96px;
--wp--preset--spacing--100: 128px;
```

**Test Elements:**
- [ ] Button padding
- [ ] Card gaps in grids
- [ ] Form field spacing
- [ ] List item spacing
- [ ] Navigation item spacing
- [ ] Footer column gaps

**Questions to Answer:**
1. Are touch targets at least 44x44px on mobile?
2. Is spacing proportional to content size?
3. Are gaps consistent within component types?
4. Does spacing feel cramped or too loose at any size?

---

### **Phase 4: Responsive Breakpoint Behavior**

Evaluate component visibility and layout transitions.

#### **Critical Bug: Simultaneous Mobile/Desktop Display**

**Reported Issue:**
> "Currently the mobile and desktop headers are displaying at the same time"

**Components to Check:**
- [ ] **Header/Navigation**
  - Mobile menu (hamburger) visibility
  - Desktop navigation visibility
  - Logo display
  - Search bar variations
  - Cart icon placement
  - Account menu

- [ ] **Footer**
  - Mobile accordion footer
  - Desktop column footer
  - Social icons layout
  - Newsletter form

- [ ] **Sidebar/Filters**
  - Mobile filter drawer/modal
  - Desktop sidebar
  - Filter toggle button

- [ ] **Product Grids**
  - Mobile: 1-2 columns
  - Tablet: 2-3 columns
  - Desktop: 3-4 columns

**Breakpoint Visibility Classes:**

```css
/* Mobile-only (< 640px) */
.block.sm:hidden

/* Tablet and up (≥ 640px) */
.hidden.sm:block

/* Desktop-only (≥ 1024px) */
.hidden.lg:block

/* Mobile and tablet only (< 1024px) */
.block.lg:hidden
```

**Test at Breakpoints:**
- [ ] **320px** - Only mobile elements visible
- [ ] **639px** - Still mobile (just before sm: breakpoint)
- [ ] **640px** - Tablet layout appears
- [ ] **1023px** - Still tablet (just before lg: breakpoint)
- [ ] **1024px** - Desktop layout appears
- [ ] **1920px** - Wide desktop

**Questions to Answer:**
1. Are mobile and desktop headers BOTH showing at any breakpoint?
2. Do layout shifts happen exactly at documented breakpoints?
3. Are there any flickering/double displays during transitions?
4. Do hidden elements truly disappear (display: none)?

---

### **Phase 5: Component-Specific Audits**

#### **Header/Navigation (CRITICAL)**

**Files to Review:**
- `/src/app/components/parts/Header.tsx`
- `/src/app/components/blocks/theme/Navigation.tsx`

**Test Scenarios:**
1. **Mobile (< 1024px):**
   - [ ] Hamburger menu visible
   - [ ] Desktop navigation hidden
   - [ ] Logo size appropriate
   - [ ] Cart icon visible
   - [ ] Search icon/bar appropriate size

2. **Desktop (≥ 1024px):**
   - [ ] Hamburger menu hidden
   - [ ] Desktop navigation visible
   - [ ] Full navigation links displayed
   - [ ] Search bar full width
   - [ ] Account dropdown visible

3. **Transition Point (1024px exactly):**
   - [ ] No double display of elements
   - [ ] Smooth transition
   - [ ] No layout shift

**Current Implementation Check:**

```tsx
// Expected pattern for mobile/desktop toggle
<div className="block lg:hidden">
  {/* Mobile hamburger */}
</div>
<div className="hidden lg:block">
  {/* Desktop navigation */}
</div>
```

#### **ProductCard**

**File:** `/components/blocks/ProductCard.tsx`

**Test at Breakpoints:**
- [ ] **Mobile (320px):** Card width, image ratio, text sizes
- [ ] **Tablet (640px):** Grid layout (2 columns)
- [ ] **Desktop (1024px):** Grid layout (3-4 columns)

**Contrast Tests:**
- [ ] Price text in light mode
- [ ] Price text in dark mode
- [ ] Badge text vs. background
- [ ] Button text vs. background
- [ ] "Out of Stock" text contrast

#### **Forms (Contact, Checkout)**

**Files to Review:**
- `/src/app/templates/PageContact.tsx`
- `/src/app/templates/PageCheckout.tsx`

**Mobile Tests:**
- [ ] Input height at least 44px (touch target)
- [ ] Label contrast in light mode
- [ ] Label contrast in dark mode
- [ ] Error message contrast
- [ ] Placeholder text contrast (lower standard)
- [ ] Focus ring visible and high contrast

**Desktop Tests:**
- [ ] Multi-column layout working
- [ ] Input sizes appropriate
- [ ] Spacing between fields

#### **Footer**

**File:** `/src/app/components/parts/Footer.tsx`

**Mobile Tests:**
- [ ] Accordion footer (if implemented)
- [ ] Column stacking
- [ ] Link contrast
- [ ] Social icon contrast
- [ ] Newsletter input contrast

**Desktop Tests:**
- [ ] 4-column layout
- [ ] Column alignment
- [ ] Copyright text contrast
- [ ] Bottom border contrast

---

## 🔍 Testing Methodology

### **Step 1: Visual Inspection**

1. Open application in browser
2. Open DevTools (F12)
3. Toggle Device Toolbar (Ctrl+Shift+M)
4. Test each component at:
   - 320px (iPhone SE)
   - 375px (iPhone 12 Pro)
   - 640px (iPad Mini)
   - 768px (iPad)
   - 1024px (iPad Pro landscape)
   - 1440px (Desktop)
   - 1920px (Wide Desktop)

### **Step 2: Contrast Testing**

**Using WebAIM Contrast Checker:**

1. Right-click element → Inspect
2. Note foreground color (text)
3. Note background color
4. Enter values at: https://webaim.org/resources/contrastchecker/
5. Record ratio and pass/fail status

**Using Chrome DevTools:**

1. Inspect element
2. In Styles panel, click color swatch
3. DevTools shows contrast ratio
4. Green checkmark = AA pass
5. Two checkmarks = AAA pass

### **Step 3: Breakpoint Testing**

**Resize Method:**

1. Set viewport to 1920px
2. Slowly resize down to 320px
3. Note any layout issues:
   - Double elements displaying
   - Sudden jumps in size
   - Overlapping content
   - Hidden content that should be visible
   - Horizontal scrollbars

**Breakpoint Boundary Testing:**

Test these exact widths:
- 639px (just before sm:)
- 640px (sm: breakpoint)
- 1023px (just before lg:)
- 1024px (lg: breakpoint)

### **Step 4: Dark Mode Testing**

For each component:

1. Test in light mode
2. Toggle to dark mode (ThemeSwitcher)
3. Verify all text remains readable
4. Check border visibility
5. Check hover/focus states
6. Record contrast ratios

---

## 📊 Report Format

### **Section 1: WCAG Compliance Results**

**Light Mode:**

| Element | Foreground | Background | Ratio | AA | AAA | Notes |
|---------|-----------|------------|-------|----|----|-------|
| H1 | #1a1a1a | #ffffff | 15.8:1 | ✅ | ✅ | Perfect |
| Body | #4b5563 | #ffffff | 7.2:1 | ✅ | ✅ | Great |
| Link | #7c3aed | #ffffff | ? | ? | ? | **Test** |
| ... | ... | ... | ... | ... | ... | ... |

**Dark Mode:**

| Element | Foreground | Background | Ratio | AA | AAA | Notes |
|---------|-----------|------------|-------|----|----|-------|
| H1 | #f9fafb | #0f0f0f | 16.1:1 | ✅ | ✅ | Perfect |
| Body | #9ca3af | #0f0f0f | ? | ? | ? | **Test** |
| Link | #a78bfa | #0f0f0f | ? | ? | ? | **Test** |
| ... | ... | ... | ... | ... | ... | ... |

**Failed Elements:**

| Element | Issue | Current Ratio | Required | Fix |
|---------|-------|--------------|----------|-----|
| Example | Too low contrast | 3.2:1 | 4.5:1 | Darken text to #... |

---

### **Section 2: Fluid Typography Results**

**Heading Scaling:**

| Element | 320px | 640px | 1024px | 1920px | Smooth? | Issues |
|---------|-------|-------|--------|--------|---------|--------|
| H1 | 32px | 44px | 50px | 56px | ✅ | None |
| H2 | 28px | 36px | 40px | 44px | ✅ | None |
| H3 | 22px | 27px | 29px | 32px | ? | **Test** |
| H4 | 18px | 21px | 22.5px | 24px | ? | **Test** |

**Body Text Scaling:**

| Element | 320px | 640px | 1024px | 1920px | Readable? | Issues |
|---------|-------|-------|--------|--------|-----------|--------|
| Paragraph | 16px | 18px | 19px | 21px | ? | **Test** |
| Small | 12px | 13px | 13.5px | 14px | ? | **Test** |
| Label | 16px | 18px | 19px | 21px | ? | **Test** |

---

### **Section 3: Fluid Spacing Results**

**Section Padding:**

| Section Type | Mobile | Tablet | Desktop | Wide | Appropriate? |
|--------------|--------|--------|---------|------|--------------|
| Hero | 80px | 96px | 128px | 128px | ? |
| Standard | 64px | 64px | 64px | 64px | ? |
| CTA | 80px | 96px | 128px | 128px | ? |
| Compact | 48px | 48px | 48px | 48px | ? |

**Component Spacing:**

| Component | Gap/Padding | Mobile | Desktop | Touch-Safe? |
|-----------|-------------|--------|---------|-------------|
| Button | Padding | ? | ? | 44px min? |
| Card Grid | Gap | ? | ? | N/A |
| Form Fields | Margin | ? | ? | 44px min? |

---

### **Section 4: Responsive Breakpoint Results**

**Critical Bugs:**

| Component | Breakpoint | Issue | Severity | Fix |
|-----------|-----------|-------|----------|-----|
| Header | 1024px | Both mobile/desktop showing | 🔴 Critical | Add `hidden lg:block` |
| ... | ... | ... | ... | ... |

**Visibility Testing:**

| Component | Mobile (< 1024px) | Desktop (≥ 1024px) | Working? |
|-----------|-------------------|-------------------|----------|
| Hamburger Menu | ✅ Visible | ❌ Hidden | ? |
| Desktop Nav | ❌ Hidden | ✅ Visible | ? |
| Mobile Footer | ✅ Visible | ❌ Hidden | ? |
| Desktop Footer | ❌ Hidden | ✅ Visible | ? |

**Layout Transitions:**

| Breakpoint | Expected | Actual | Issues |
|-----------|----------|--------|--------|
| 640px (sm:) | 2-col grid | ? | ? |
| 1024px (lg:) | Desktop nav appears | ? | ? |
| 1280px (xl:) | Max-width container | ? | ? |

---

### **Section 5: Component-Specific Results**

**Header:**
- Mobile behavior: ?
- Desktop behavior: ?
- Transition: ?
- Bugs found: ?

**ProductCard:**
- Light mode contrast: ?
- Dark mode contrast: ?
- Responsive sizing: ?
- Bugs found: ?

**Forms:**
- Touch targets: ?
- Label contrast: ?
- Error contrast: ?
- Bugs found: ?

**Footer:**
- Light mode contrast: ?
- Dark mode contrast: ?
- Responsive layout: ?
- Bugs found: ?

---

## 🎯 Success Criteria

### **WCAG Compliance**
- ✅ All text elements meet AA (4.5:1 normal, 3:1 large)
- ✅ 90%+ of text elements meet AAA (7:1 normal, 4.5:1 large)
- ✅ All interactive elements have visible focus states
- ✅ All form inputs have sufficient contrast

### **Fluid Typography**
- ✅ Mobile text minimum 16px for body, 32px for H1
- ✅ Desktop text scales smoothly without jumps
- ✅ Heading hierarchy maintained at all sizes
- ✅ No text overflow or truncation issues

### **Fluid Spacing**
- ✅ All touch targets minimum 44x44px on mobile
- ✅ Section padding appropriate at all sizes
- ✅ No cramped mobile layouts
- ✅ No excessive whitespace on desktop

### **Responsive Behavior**
- ✅ NO simultaneous mobile/desktop element display
- ✅ Clean transitions at breakpoints (640px, 1024px)
- ✅ Proper component visibility at each size
- ✅ No horizontal scrollbars at any size

---

## 📝 Deliverables

1. **Contrast Audit Report**
   - File: `/reports/audits/2026-01-10_contrast-audit.md`
   - All color combinations tested
   - AA/AAA compliance status
   - Recommended fixes for failures

2. **Fluid Design Audit Report**
   - File: `/reports/audits/2026-01-10_fluid-design-audit.md`
   - Typography scaling results
   - Spacing scaling results
   - Breakpoint behavior results

3. **Bug Fix Report**
   - File: `/reports/fixes/2026-01-10_responsive-bugs.md`
   - Critical bugs (double display)
   - Layout issues
   - Recommended fixes with code examples

4. **Updated Guidelines (if needed)**
   - Update `/guidelines/Guidelines.md` with findings
   - Add new standards if discovered
   - Update color tokens if changes needed

---

## 🚀 Next Steps After Audit

1. **Fix Critical Bugs First**
   - Header double display
   - Any other visibility issues

2. **Fix WCAG Failures**
   - Adjust colors to meet AA minimum
   - Strive for AAA where possible

3. **Optimize Fluid Values**
   - Adjust clamp() values if needed
   - Improve scaling transitions

4. **Update Documentation**
   - Document all changes
   - Update component guidelines
   - Add new standards if discovered

---

**Audit Prompt Status:** ✅ Ready for Execution  
**Estimated Time:** 2-3 hours  
**Priority:** 🔴 High (Critical bugs reported)
