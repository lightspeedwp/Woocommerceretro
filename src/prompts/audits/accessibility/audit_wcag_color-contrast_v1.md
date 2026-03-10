# WCAG Color Contrast Audit

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Audit  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Accessibility Audit |
| **Target** | All text/background color combinations |
| **Complexity** | Medium |
| **Estimated Time** | 2-3 hours |
| **Prerequisites** | WCAG 2.1 guidelines knowledge |
| **Output Files** | Color contrast audit report in `/reports/audits/` |

---

## 🎯 Objective

Perform a comprehensive WCAG 2.1 color contrast audit across all components to ensure AA compliance (minimum 4.5:1 for normal text, 3:1 for large text) and identify AAA opportunities (7:1).

### What This Audit Does:
- ✅ Tests all text/background color combinations
- ✅ Verifies WCAG AA compliance (4.5:1 minimum)
- ✅ Identifies AAA opportunities (7:1)
- ✅ Tests both light and dark modes
- ✅ Generates detailed report with recommendations
- ✅ Provides specific fix instructions

### What This Audit Does NOT Do:
- ❌ Test interactive element contrast (separate audit)
- ❌ Test image contrast
- ❌ Automatically fix issues (only report them)
- ❌ Test non-text elements

---

## 📚 Context & Background

### WCAG 2.1 Standards:

**Level AA (Minimum):**
- Normal text (< 18pt): 4.5:1 contrast ratio
- Large text (≥ 18pt or ≥ 14pt bold): 3:1 contrast ratio

**Level AAA (Enhanced):**
- Normal text: 7:1 contrast ratio
- Large text: 4.5:1 contrast ratio

### Project Requirements:
- **Minimum:** WCAG AA compliance for all text
- **Target:** WCAG AAA where possible
- **Both modes:** Light and dark mode compliance

---

## 📋 Requirements

### Audit Scope:
1. All body text colors
2. All heading colors
3. All link colors (default and hover)
4. All button text colors
5. All form label colors
6. All alert/notification colors
7. All badge/tag colors
8. All placeholder text colors
9. All disabled state colors

### Coverage:
1. Light mode contrast ratios
2. Dark mode contrast ratios
3. Both AA and AAA compliance
4. Recommendations for improvements

---

## 🔧 Audit Instructions

### Step 1: Gather Color Combinations

**Action:** List all text/background color pairings

**Process:**
1. Open `/src/styles/woocommerce-complete.css` or `/src/styles/globals.css`
2. List all `--wp--preset--color--*` variables
3. Identify common text/background pairings
4. Document in table format

**Template Table:**
```markdown
| Element | Light BG | Light Text | Dark BG | Dark Text |
|---------|----------|------------|---------|-----------|
| Body | #ffffff | #1a1a1a | #0f0f0f | #f9fafb |
| Headings | #ffffff | #111827 | #0f0f0f | #f9fafb |
| Links | #ffffff | #7c3aed | #0f0f0f | #c4b5fd |
| Buttons (Primary) | #7c3aed | #ffffff | #c4b5fd | #111827 |
| Buttons (Success) | #16a34a | #ffffff | #4ade80 | #0f0f0f |
```

---

### Step 2: Test Contrast Ratios

**Action:** Test each combination using contrast checker tools

**Tools:**
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Chrome DevTools:** Lighthouse accessibility audit
- **axe DevTools:** Browser extension

**Process for each combination:**
1. Input foreground color (text)
2. Input background color
3. Record contrast ratio
4. Record WCAG level (Pass AA/Pass AAA/Fail)
5. Note if improvement needed

**Example Test:**
```
Body text (light mode): #1a1a1a on #ffffff
- Tool: WebAIM Contrast Checker
- Input FG: #1a1a1a
- Input BG: #ffffff
- Result: 15.8:1
- WCAG AA: ✅ Pass
- WCAG AAA: ✅ Pass
- Action: None needed

Link text (light mode): #7c3aed on #ffffff
- Tool: WebAIM Contrast Checker
- Input FG: #7c3aed
- Input BG: #ffffff
- Result: 7.2:1
- WCAG AA: ✅ Pass
- WCAG AAA: ✅ Pass
- Action: None needed
```

---

### Step 3: Document Failures

**Action:** Create comprehensive list of all failures and warnings

**Format:**
```markdown
## Failures & Warnings

### Critical (WCAG AA Failures) ❌

#### 1. Success Button Text
- **Element:** Success button (green background)
- **Location:** All CTA buttons with success variant
- **Current Colors:** #ffffff on #10b981
- **Current Ratio:** 3.1:1
- **Required Ratio:** 4.5:1 (AA)
- **Status:** ❌ FAIL
- **Impact:** High - affects all success buttons
- **Recommended Fix:** Use darker green (#047857 = 5.2:1 ✅)
- **Alternative Fix:** Use white background with green text

### Warnings (AA Pass, AAA Fail) ⚠️

#### 1. Secondary Text
- **Element:** Secondary/muted text
- **Location:** Product descriptions, metadata
- **Current Colors:** #6b7280 on #ffffff
- **Current Ratio:** 4.8:1
- **Required Ratio (AAA):** 7:1
- **Status:** ⚠️ AA Pass, AAA Fail
- **Impact:** Medium - common throughout site
- **Recommended Fix:** Use #4b5563 (7.5:1 ✅)
```

---

### Step 4: Generate Complete Report

**Action:** Create detailed audit report

**Report Location:** `/reports/audits/YYYY-MM-DD_wcag-contrast-audit.md`

**Report Structure:**
1. **Executive Summary**
   - Total combinations tested
   - AA compliance rate
   - AAA compliance rate
   - Critical issues count
   - Priority recommendations

2. **Methodology**
   - Tools used
   - Testing approach
   - Standards applied

3. **Complete Test Results**
   - All combinations tested
   - Contrast ratios documented
   - Pass/fail status

4. **Critical Failures**
   - AA failures with high priority
   - Specific fix recommendations
   - Code examples

5. **AAA Opportunities**
   - AA pass but AAA fail
   - Improvement recommendations
   - Optional enhancements

6. **Implementation Guide**
   - Step-by-step fix instructions
   - CSS variable changes
   - Testing verification steps

7. **Re-test Checklist**
   - How to verify fixes
   - Tools to use
   - Acceptance criteria

---

### Step 5: Prioritize Fixes

**Action:** Categorize issues by priority

**Priority Levels:**

**P0 - Critical (AA Failures):**
- Blocking compliance
- Fix immediately
- Affects core functionality

**P1 - High (AA Borderline):**
- Close to failing AA
- Fix in current sprint
- Risk of failure with changes

**P2 - Medium (AAA Opportunities):**
- AA compliant but AAA fails
- Fix in next sprint
- Enhancement opportunity

**P3 - Low (Optimizations):**
- AAA compliant
- Further enhancement possible
- Nice-to-have improvements

---

## ✅ Verification Checklist

### Audit Completeness:
- [ ] All color combinations identified
- [ ] All combinations tested in light mode
- [ ] All combinations tested in dark mode
- [ ] AA compliance documented
- [ ] AAA compliance documented
- [ ] Failures clearly identified
- [ ] Warnings documented
- [ ] Recommendations provided

### Report Quality:
- [ ] Executive summary complete
- [ ] Methodology documented
- [ ] All test results included
- [ ] Failures have recommended fixes
- [ ] Fixes include code examples
- [ ] Priority levels assigned
- [ ] Re-test checklist provided

### Tools & Testing:
- [ ] WebAIM Contrast Checker used
- [ ] Results spot-checked manually
- [ ] Both modes tested
- [ ] Screenshots included (optional)

---

## 📝 Expected Output

### Report File:
```
/reports/audits/2026-01-10_wcag-contrast-audit.md
```

### Report Metrics:
- Total combinations tested: ~30-50
- AA compliance rate: 95-100%
- AAA compliance rate: 70-90%
- Critical failures: 0-5
- Warnings: 5-15

### Deliverables:
1. Complete audit report (Markdown)
2. Test results spreadsheet (optional)
3. Fix implementation plan
4. Re-test checklist

---

## 🧪 Testing Tools

### WebAIM Contrast Checker
- URL: https://webaim.org/resources/contrastchecker/
- Input: Foreground and background hex colors
- Output: Contrast ratio, WCAG compliance level

### Chrome DevTools Lighthouse
```bash
# Run Lighthouse audit
1. Open DevTools (F12)
2. Navigate to Lighthouse tab
3. Select "Accessibility" category
4. Run audit
5. Review "Color contrast" section
```

### axe DevTools Extension
- Install: Chrome/Firefox extension
- Usage: Click extension icon on any page
- Output: Accessibility issues including contrast

---

## 📖 Related Documentation

- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Project Guidelines:** `/guidelines/design-tokens/colors.md`
- **Audit Template:** `/guidelines/REPORTING_GUIDELINES.md`

---

## 📝 Notes & Tips

### Best Practices:

💡 **Test in context:** View colors in actual UI, not just checker tools

💡 **Consider font size:** Large text has lower requirements (3:1 vs 4.5:1)

💡 **Check hover states:** Don't forget hover/focus color combinations

💡 **Test both modes:** Dark mode often has different contrast needs

💡 **Use semantic names:** Document which UI elements use each color

### Common Issues:

⚠️ **Success/Error buttons:** Green/red often fail contrast on white

⚠️ **Placeholder text:** Often too light (use #6b7280 minimum)

⚠️ **Disabled states:** Can have lower contrast (not required to meet AA)

⚠️ **Brand colors:** May need adjustment for accessibility

⚠️ **Overlays:** Semi-transparent overlays reduce contrast

---

## 🔄 Version History

### v1.0 (2026-01-10)
- Initial version
- Complete audit procedure
- WCAG AA/AAA standards
- Light and dark mode coverage
- Comprehensive report template

---

**Status:** ✅ Active  
**Created:** 2026-01-10  
**Reviewed:** 2026-01-10
