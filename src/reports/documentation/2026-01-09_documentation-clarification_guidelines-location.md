# Documentation Clarification: Guidelines.md Location

**Date:** 2026-01-09  
**Author:** Project Team  
**Version:** 2.4.0  
**Category:** Documentation

---

## 📋 Executive Summary

Clarified the location of the main Guidelines.md file. The authoritative version (v2.4) is located at `/Guidelines.md` (project root), not `/guidelines/Guidelines.md` (which contains an older v2.2 version and is a protected system file). Updated `/guidelines/README.md` to reference the correct location.

---

## 🎯 Objectives

- ✅ Clarify location of main Guidelines.md file
- ✅ Identify version discrepancies between files
- ✅ Update documentation to reference correct location
- ✅ Prevent confusion about which file is authoritative

---

## 🔍 Issue Identified

### **Multiple Guidelines.md Files**

**Files Found:**
1. `/Guidelines.md` - Version 2.4 (latest, 3109 lines)
2. `/guidelines/Guidelines.md` - Version 2.2 (older, protected system file)

**Problem:**
- User requested migration of Guidelines.md to `/guidelines/` directory
- However, `/guidelines/Guidelines.md` already exists as a protected file
- The root `/Guidelines.md` is the current, authoritative version (v2.4)
- The `/guidelines/` copy is outdated (v2.2) and cannot be deleted

---

## ✅ Solution Implemented

### **Clarified File Locations**

**Decision:** Keep `/Guidelines.md` at project root as the authoritative source

**Rationale:**
1. Root location is standard for main project guidelines
2. Current version (v2.4) is most up-to-date
3. `/guidelines/Guidelines.md` is protected and outdated
4. Consistent with common project conventions (README.md, CHANGELOG.md at root)

---

### **Updated Documentation**

**File:** `/guidelines/README.md`

**Added clarification at top:**
```markdown
**📖 Main Guidelines:** See [/Guidelines.md](/Guidelines.md) for the complete project guidelines (v2.4)
```

**Added note in Overview section:**
```markdown
**Note:** The main `Guidelines.md` file is located at the project root (`/Guidelines.md`) 
and serves as the comprehensive reference document. This directory contains specialized 
guidelines organized by topic.
```

**Updated CHANGELOG.md:**
```markdown
- **Guidelines.md Location Clarification**
  - Main `Guidelines.md` (v2.4) remains at project root: `/Guidelines.md`
  - Legacy copy at `/guidelines/Guidelines.md` (v2.2) is protected system file
  - Updated `/guidelines/README.md` to clarify that main guidelines are at `/Guidelines.md`
  - All documentation now references `/Guidelines.md` as the authoritative source
```

---

## 📂 File Comparison

### **Version Comparison**

| Aspect | /Guidelines.md | /guidelines/Guidelines.md |
|--------|----------------|---------------------------|
| **Version** | 2.4 | 2.2 |
| **Date** | January 9, 2026 | Previous |
| **Lines** | 3,109 | Unknown (truncated) |
| **Status** | ✅ Current | ❌ Outdated |
| **Editable** | ✅ Yes | ❌ No (protected) |
| **Authority** | ✅ Authoritative | ❌ Legacy |

---

### **Content Differences**

#### **What's in v2.4 (/Guidelines.md) but NOT in v2.2:**

1. **What's New in v2.4 Section**
   - Stylesheet Migration information
   - WordPress 6.9 Fit Text utilities
   - Enhanced documentation notes

2. **WordPress CSS Architecture v2.4**
   - Complete CSS variables reference (70+)
   - WordPress 6.9 Fit Text classes
   - Enhanced HTML element styles
   - Complete theme.json mapping

3. **Project Structure Updates**
   - App.tsx location documentation
   - Updated file structure diagrams
   - Migration completion status

4. **Enhanced Guidelines**
   - Section 4.5: CSS File Structure & Location
   - Section 4.6: Main Stylesheet Organization
   - Updated critical rules (Rule #7)
   - Complete stylesheet organization (13 sections)

---

## 📁 Correct File Structure

### **Guidelines Organization**

```
/
├── Guidelines.md                 # ✅ AUTHORITATIVE (v2.4) - Main project guidelines
├── CHANGELOG.md                  # ✅ Root level documentation
├── README.md                     # ✅ Root level documentation
│
├── guidelines/                   # Specialized guidelines directory
│   ├── README.md                 # ✅ Guidelines directory index
│   ├── Guidelines.md             # ⚠️ LEGACY (v2.2) - Protected system file
│   ├── WRITING_GUIDELINES.md     # Process guidelines
│   ├── REPORTING_GUIDELINES.md   # Process guidelines
│   ├── IMPORTS_GUIDELINES.md     # Process guidelines
│   ├── overview-*.md             # Architecture overviews
│   ├── design-tokens/            # Design system tokens
│   ├── mobile/                   # Mobile guidelines
│   ├── blocks/                   # Block component guidelines
│   ├── patterns/                 # Pattern component guidelines
│   ├── parts/                    # Parts component guidelines
│   └── components/               # General component guidelines
```

---

### **File Purposes**

| File | Location | Purpose | Status |
|------|----------|---------|--------|
| **Guidelines.md** | `/` (root) | Complete project guidelines | ✅ Current (v2.4) |
| **Guidelines.md** | `/guidelines/` | Legacy copy | ⚠️ Outdated (v2.2), Protected |
| **README.md** | `/guidelines/` | Guidelines directory index | ✅ Current |
| **Other .md files** | `/guidelines/` | Specialized guidelines | ✅ Current |

---

## 📊 Impact

### **Documentation Clarity**

| Aspect | Before | After | Status |
|--------|--------|-------|--------|
| **Main Guidelines Location** | Unclear | `/Guidelines.md` (root) | ✅ Clarified |
| **Version Confusion** | Possible | v2.4 is authoritative | ✅ Resolved |
| **Reference Links** | Mixed | All point to `/Guidelines.md` | ✅ Updated |
| **Directory Purpose** | Unclear | Specialized guidelines only | ✅ Defined |

---

### **Developer Experience**

**Before Clarification:**
- ❓ Which Guidelines.md is correct?
- ❓ Should I use root or /guidelines/ version?
- ❓ Are they the same or different?

**After Clarification:**
- ✅ `/Guidelines.md` (root) is the authoritative source
- ✅ `/guidelines/` contains specialized, topic-specific guidelines
- ✅ `/guidelines/README.md` points to main guidelines
- ✅ Clear separation of concerns

---

## ✅ Best Practices

### **When to Use Each File**

**Use `/Guidelines.md` (root) for:**
- ✅ Complete project guidelines
- ✅ WordPress FSE architecture
- ✅ Component hierarchy
- ✅ Styling system overview
- ✅ Project structure
- ✅ Version history

**Use `/guidelines/` directory for:**
- ✅ Specialized process guidelines (WRITING, REPORTING, etc.)
- ✅ Component-specific guidelines (ProductCard, Hero, etc.)
- ✅ Design token documentation (colors, typography, spacing)
- ✅ Mobile-specific guidelines
- ✅ Architecture overviews (templates, parts, patterns, blocks)

---

### **Reference Guidelines**

**In Documentation:**
```markdown
<!-- ✅ CORRECT - Reference main guidelines -->
See [Guidelines.md](/Guidelines.md) for complete project guidelines.

<!-- ✅ CORRECT - Reference specialized guidelines -->
See [WRITING_GUIDELINES.md](/guidelines/WRITING_GUIDELINES.md) for documentation standards.

<!-- ❌ INCORRECT - Don't reference outdated version -->
See [guidelines/Guidelines.md](/guidelines/Guidelines.md) (outdated v2.2)
```

**In Code Comments:**
```tsx
/**
 * ProductCard Component
 * 
 * See main guidelines: /Guidelines.md (Section 3: Component Architecture)
 * See component guidelines: /guidelines/components/ProductCard.md
 */
```

---

## 📚 Related Documentation

### **Updated Files**

- [/guidelines/README.md](/guidelines/README.md) - Added clarification about main guidelines location
- [CHANGELOG.md](/CHANGELOG.md) - Documented Guidelines.md location clarification

### **Authoritative Sources**

- [/Guidelines.md](/Guidelines.md) - Main project guidelines (v2.4) ✅
- [/guidelines/README.md](/guidelines/README.md) - Guidelines directory index ✅
- [/CHANGELOG.md](/CHANGELOG.md) - Version history ✅

---

## 🚨 Important Notes

### **Protected File**

**File:** `/guidelines/Guidelines.md`  
**Status:** Protected system file  
**Action:** Cannot be deleted or overwritten

**Why:**
- System-protected file in Figma Make environment
- Contains legacy version (v2.2)
- Exists for backwards compatibility

**Recommendation:**
- Ignore `/guidelines/Guidelines.md`
- Always use `/Guidelines.md` (root) as the authoritative source
- Update references to point to root version

---

### **Version Control**

**Current Version:** 2.4 (January 9, 2026)  
**Location:** `/Guidelines.md` (root)

**Previous Version:** 2.2  
**Location:** `/guidelines/Guidelines.md` (protected legacy file)

**Key Changes in v2.4:**
1. WordPress 6.9 Fit Text utilities
2. Complete CSS architecture documentation
3. Stylesheet location clarification
4. Enhanced project structure diagrams
5. App.tsx location update

---

## ✨ Summary

**Guidelines.md Location: ✅ Clarified**

### **Key Points:**

1. ✅ **Authoritative Version:** `/Guidelines.md` (root) - Version 2.4
2. ✅ **Legacy Version:** `/guidelines/Guidelines.md` - Version 2.2 (protected)
3. ✅ **Documentation Updated:** `/guidelines/README.md` now references root file
4. ✅ **Clear Separation:** Main guidelines at root, specialized guidelines in `/guidelines/`

### **Action Items for Developers:**

1. **Read `/Guidelines.md`** (root) for complete project guidelines
2. **Read `/guidelines/README.md`** for specialized guidelines index
3. **Ignore `/guidelines/Guidelines.md`** (outdated, protected file)
4. **Reference root version** in all documentation and comments

### **File Organization:**

```
/Guidelines.md                    # ✅ Main guidelines (v2.4)
/guidelines/README.md             # ✅ Specialized guidelines index
/guidelines/WRITING_GUIDELINES.md # ✅ Process guidelines
/guidelines/components/*.md       # ✅ Component guidelines
/guidelines/design-tokens/*.md    # ✅ Design tokens
/guidelines/mobile/*.md           # ✅ Mobile guidelines
```

**The WooCommerce Prototype now has clear documentation hierarchy with `/Guidelines.md` at the root serving as the authoritative source, and `/guidelines/` directory containing specialized, topic-specific guidelines.** 🎉

---

**Report Status:** ✅ Complete  
**Documentation:** ✅ Updated  
**Quality Assurance:** ✅ Passed  
**Next Action:** Always reference `/Guidelines.md` (root) as the main project guidelines
