# Documentation Complete: File Imports Guidelines

**Date:** 2026-01-09  
**Author:** Project Team  
**Version:** 2.4.0  
**Category:** Documentation

---

## 📋 Executive Summary

Successfully established comprehensive file import standards for all asset types (images, SVGs, fonts, data). Created `/src/app/imports/` directory structure for organized asset management and documented 5 import methods with complete examples, troubleshooting, and best practices.

---

## 🎯 Objectives

- ✅ Create comprehensive file import guidelines
- ✅ Establish `/src/app/imports/` as the location for all imported assets
- ✅ Document 5 different import methods
- ✅ Create Figma import workflow
- ✅ Provide troubleshooting guide
- ✅ Update all documentation and cross-references

---

## 📊 Changes Implemented

### **1. Created IMPORTS_GUIDELINES.md**

**Location:** `/guidelines/IMPORTS_GUIDELINES.md`  
**Size:** 600+ lines  
**Purpose:** Comprehensive standards for file imports

**Contents:**
- 📁 Directory structure (`/src/app/imports/` with 4 subdirectories)
- 🏷️ Naming conventions for 4 asset types
- 📝 5 import methods with complete examples
- 🎨 Figma import workflow with decision tree
- 🔍 Troubleshooting guide for common issues
- ✅ Best practices (10 DO's documented)
- 🚫 Common mistakes (8 DON'Ts documented)
- 📊 Import decision tree diagram

**Import Methods Documented:**
1. **Figma Asset Imports** - `figma:asset` scheme for raster images
2. **SVG Vector Imports** - Relative paths for SVG files
3. **Local Image Imports** - Relative paths for local images
4. **Font Imports** - CSS `@font-face` declarations
5. **Data File Imports** - ES6 imports for JSON/YAML

---

### **2. Created Imports Directory Structure**

**Location:** `/src/app/imports/`

**Subdirectories Created:**
```
/src/app/imports/
├── README.md                      # ✅ Complete directory documentation
├── images/                        # Raster images (PNG, JPG, WebP)
│   ├── products/                  # Product images
│   ├── heroes/                    # Hero section images
│   ├── backgrounds/               # Background images
│   └── icons/                     # Icon images (if not SVG)
├── vectors/                       # SVG vector graphics
│   ├── icons/                     # Icon SVGs
│   ├── logos/                     # Logo SVGs
│   └── illustrations/             # Illustration SVGs
├── fonts/                         # Custom font files
│   ├── woff2/                     # WOFF2 format (preferred)
│   └── woff/                      # WOFF format (fallback)
└── data/                          # JSON or other data files
    ├── products/                  # Product data
    └── content/                   # Content data
```

**Status:** ✅ Directory structure ready for imported assets

---

### **3. Created Imports README.md**

**Location:** `/src/app/imports/README.md`  
**Size:** 500+ lines

**Contents:**
- 📋 Overview of imports directory
- 📁 Directory structure explanation
- 📂 4 import categories with examples
- 🏷️ Naming convention guidelines
- 📝 5 import methods with syntax
- 🎨 Figma import workflow
- 🚫 Common mistakes to avoid
- ✅ Best practices summary

---

### **4. Updated Guidelines.md**

**Sections Added:** Reference to imports guidelines

**Changes:**
- Added file imports standards reference (Section 12.5)
- Noted requirement: All imported assets in `/src/app/imports/`
- Added link to IMPORTS_GUIDELINES.md

**Location:** Guidelines.md Section 12.5

---

### **5. Updated CHANGELOG.md**

**Added to v2.1.0 Section:**
- Imports directory structure
- IMPORTS_GUIDELINES.md creation
- Documented all 4 import subdirectories
- Listed all 5 import methods
- Added naming conventions documentation

---

## 📁 Import Categories

### **1. Raster Images** (`/src/app/imports/images/`)

**Purpose:** PNG, JPG, WebP image files

**Naming Convention:** `descriptive-name-{width}x{height}.{ext}`

**Import Methods:**
- Figma images: `figma:asset` scheme
- Local images: Relative path imports

**Examples:**
```tsx
// Figma import
import heroImg from "figma:asset/76faf8f617b56e6f.png";

// Local import
import productImg from "../imports/images/products/tshirt-500x500.png";
```

---

### **2. SVG Vectors** (`/src/app/imports/vectors/`)

**Purpose:** SVG vector graphics

**Naming Convention:** `svg-{type}-{name}-{id}.svg`

**Import Method:** Relative path imports only

**Example:**
```tsx
import iconPaths from "../imports/vectors/svg-icon-cart-abc123";

<svg className="w-6 h-6">
  <path d={iconPaths.path} fill="currentColor" />
</svg>
```

---

### **3. Custom Fonts** (`/src/app/imports/fonts/`)

**Purpose:** Custom web font files

**Naming Convention:** `{family}-{weight}-{style}.{ext}`

**Import Method:** CSS `@font-face` declarations

**Example:**
```css
@font-face {
  font-family: 'Inter';
  src: url('/src/app/imports/fonts/woff2/inter-400-normal.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

### **4. Data Files** (`/src/app/imports/data/`)

**Purpose:** JSON or other data files

**Naming Convention:** `{type}-{description}.json`

**Import Method:** ES6 imports

**Example:**
```tsx
import productsData from "../imports/data/products/featured.json";

const products = productsData.products;
```

---

## 🏷️ Naming Conventions

### **Standard Format by Asset Type**

| Asset Type | Format | Example |
|------------|--------|---------|
| **Raster Images** | `name-{width}x{height}.{ext}` | `hero-banner-1920x1080.jpg` |
| **SVG Vectors** | `svg-{type}-{name}-{id}` | `svg-icon-cart-abc123.svg` |
| **Fonts** | `{family}-{weight}-{style}.{ext}` | `inter-700-bold.woff2` |
| **Data** | `{type}-{description}.json` | `products-featured.json` |

---

### **Examples**

**✅ CORRECT:**
```
hero-banner-holiday-sale-1920x1080.jpg
product-tshirt-blue-front-500x500.png
svg-icon-shopping-cart-filled-abc123.svg
inter-700-bold.woff2
products-featured.json
```

**❌ INCORRECT:**
```
IMG_1234.jpg (not descriptive)
icon.svg (no prefix or ID)
font.woff2 (no family/weight/style)
data.json (too generic)
```

---

## 📝 Import Methods

### **Method 1: Figma Asset Imports**

**Use Case:** Raster images from Figma frames

**Critical Rules:**
- ✅ `figma:asset` is a virtual module scheme
- ❌ NEVER prefix with `./`, `../`, or any path
- ✅ Only for raster images (PNG, JPG, WebP)
- ❌ NOT for SVGs

**Syntax:**
```tsx
import imgSrc from "figma:asset/filename.ext";
```

**Examples:**
```tsx
// ✅ CORRECT
import heroImg from "figma:asset/76faf8f617b56e6f.png";
import productImg from "figma:asset/f2dddff10fce8c5c.png";

// Usage
<img src={heroImg} alt="Hero banner" width={1920} height={1080} />

// ❌ WRONG - Don't add paths
import img from "./imports/figma:asset/abc123.png";
import img from "../figma:asset/abc123.png";
```

---

### **Method 2: SVG Vector Imports**

**Use Case:** SVG files from Figma or design systems

**Critical Rules:**
- ✅ Use relative file paths
- ✅ Calculate path from importing component location
- ✅ No file extension (`.svg` omitted)
- ❌ NOT the `figma:asset` scheme

**Syntax:**
```tsx
import svgPaths from "{relative-path}/imports/vectors/svg-name-id";
```

**Path Calculation:**
```tsx
// From /src/app/components/blocks/Component.tsx
// Go up 3 levels: blocks/ → components/ → app/
import svgIcon from "../../../imports/vectors/svg-icon-cart-abc123";

// From /src/app/templates/Template.tsx
// Go up 2 levels: templates/ → app/
import svgLogo from "../../imports/vectors/svg-logo-company-def456";
```

---

### **Method 3: Local Image Imports**

**Use Case:** Images stored locally (not from Figma)

**Syntax:**
```tsx
import imgSrc from "{relative-path}/imports/images/filename.ext";
```

**Examples:**
```tsx
// From /src/app/components/blocks/ProductCard.tsx
import productImg from "../../../imports/images/products/tshirt-500x500.png";

// Usage
<img src={productImg} alt="Product" width={500} height={500} />
```

---

### **Method 4: Font Imports**

**Use Case:** Custom web fonts

**Syntax:** CSS `@font-face` in stylesheet

**Example:**
```css
@font-face {
  font-family: 'Inter';
  src: url('/src/app/imports/fonts/woff2/inter-400-normal.woff2') format('woff2'),
       url('/src/app/imports/fonts/woff/inter-400-normal.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

### **Method 5: Data File Imports**

**Use Case:** JSON or other static data files

**Syntax:**
```tsx
import data from "{relative-path}/imports/data/filename.json";
```

**Example:**
```tsx
import productsData from "../../../imports/data/products/featured.json";

const products = productsData.products;
```

---

## 🎨 Figma Import Workflow

### **Decision Tree**

```
Import from Figma?
        |
        v
What type of asset?
    /        \
   /          \
Raster       SVG
Image       Vector
  |            |
  v            v
Use          Use
figma:       relative
asset        path
```

---

### **Step-by-Step Process**

**Step 1: Import Figma Frame**

Two types of assets are generated:
1. Raster Images → Use `figma:asset` scheme
2. SVG Vectors → Stored in `/imports/vectors/`

**Step 2: Identify Asset Type**

Check the import code:
```tsx
// Raster image
import img from "figma:asset/abc123.png";

// SVG vector
import svg from "./imports/svg-xyz789";
```

**Step 3: Import Correctly**

```tsx
// Raster images - Use as-is
import heroImg from "figma:asset/76faf8f617b56e6f.png";

// SVG vectors - Calculate relative path
import svgIcon from "../../../imports/vectors/svg-icon-cart-abc123";
```

---

## 📊 Impact Metrics

### **Documentation Created**

| Document | Lines | Status |
|----------|-------|--------|
| IMPORTS_GUIDELINES.md | 600+ | ✅ |
| /src/app/imports/README.md | 500+ | ✅ |
| Total new documentation | 1,100+ | ✅ |

---

### **Import Methods Documented**

| Method | Asset Type | Syntax | Status |
|--------|-----------|--------|--------|
| Figma Assets | Raster images | `figma:asset/file.ext` | ✅ |
| SVG Vectors | SVG files | Relative path | ✅ |
| Local Images | Local images | Relative path | ✅ |
| Fonts | Font files | CSS @font-face | ✅ |
| Data Files | JSON/YAML | ES6 import | ✅ |

**Total Methods:** 5 ✅

---

### **Directories Created**

| Directory | Purpose | Status |
|-----------|---------|--------|
| /src/app/imports/ | All imported assets | ✅ |
| /src/app/imports/images/ | Raster images | ✅ |
| /src/app/imports/vectors/ | SVG vectors | ✅ |
| /src/app/imports/fonts/ | Custom fonts | ✅ |
| /src/app/imports/data/ | Data files | ✅ |

**Total Directories:** 5 (1 main + 4 subdirectories) ✅

---

### **Naming Conventions**

| Asset Type | Conventions Defined | Status |
|------------|---------------------|--------|
| Raster Images | Format + examples | ✅ |
| SVG Vectors | Format + examples | ✅ |
| Fonts | Format + examples | ✅ |
| Data Files | Format + examples | ✅ |

**Total Conventions:** 4 asset types ✅

---

## ✅ Quality Checklist

### **IMPORTS_GUIDELINES.md**

- [x] 5 import methods documented
- [x] Naming conventions for all asset types
- [x] Directory structure explained
- [x] Figma import workflow
- [x] Decision tree diagram
- [x] Troubleshooting guide
- [x] Best practices (10 DO's)
- [x] Common mistakes (8 DON'Ts)
- [x] Path calculation examples

### **Imports Directory**

- [x] /src/app/imports/ directory created
- [x] All 4 subdirectories created
- [x] README.md complete (500+ lines)
- [x] Naming convention clear
- [x] Import methods documented
- [x] Examples provided

### **Documentation Updates**

- [x] Guidelines.md updated
- [x] CHANGELOG.md updated
- [x] Cross-references accurate
- [x] All links functional

---

## 📚 Related Documentation

### **Primary Guidelines**

- [IMPORTS_GUIDELINES.md](../../guidelines/IMPORTS_GUIDELINES.md) - File import standards
- [/src/app/imports/README.md](../../src/app/imports/README.md) - Imports directory documentation

### **Related Guidelines**

- [WRITING_GUIDELINES.md](../../guidelines/WRITING_GUIDELINES.md) - Documentation standards
- [Guidelines.md](../../Guidelines.md) - Main project guidelines
- [ImageWithFallback.tsx](../../src/app/components/figma/ImageWithFallback.tsx) - Image component

---

## 📞 Questions?

### **Which import method to use:**
- Figma raster images? → `figma:asset` scheme
- SVG vectors? → Relative path imports
- Local images? → Relative path imports
- Custom fonts? → CSS `@font-face`
- JSON data? → ES6 imports

### **How to name assets:**
- Images: `descriptive-name-{width}x{height}.{ext}`
- SVGs: `svg-{type}-{name}-{id}.svg`
- Fonts: `{family}-{weight}-{style}.{ext}`
- Data: `{type}-{description}.json`

### **Where to store assets:**
- Images: `/src/app/imports/images/`
- SVGs: `/src/app/imports/vectors/`
- Fonts: `/src/app/imports/fonts/`
- Data: `/src/app/imports/data/`

---

## ✨ Summary

**File Imports Guidelines: ✅ 100% Complete**

### **Key Achievements:**

1. ✅ **IMPORTS_GUIDELINES.md Created**
   - 600+ lines of comprehensive standards
   - 5 import methods documented
   - Naming conventions for 4 asset types
   - Figma import workflow
   - Decision tree diagram
   - Troubleshooting guide

2. ✅ **Imports Directory Established**
   - `/src/app/imports/` created as central location
   - 4 asset type subdirectories
   - Complete README.md (500+ lines)
   - Ready for imported assets

3. ✅ **Import Methods Documented**
   - Figma Asset Imports (`figma:asset`)
   - SVG Vector Imports (relative paths)
   - Local Image Imports (relative paths)
   - Font Imports (CSS @font-face)
   - Data File Imports (ES6 imports)

4. ✅ **Documentation Updated**
   - Guidelines.md references new standards
   - CHANGELOG.md documented all changes
   - Cross-references accurate

### **Critical Reminders:**

**For Figma Imports:**
- ✅ Raster images: Use `figma:asset/file.ext`
- ✅ SVG vectors: Use relative path to `/imports/vectors/`
- ❌ DON'T add paths to `figma:asset`
- ❌ DON'T use `figma:asset` for SVGs

**For Local Assets:**
- ✅ Store in: `/src/app/imports/`
- ✅ Organize by: Type and purpose
- ✅ Name with: Descriptive conventions
- ✅ Include: Dimensions for images
- ✅ Calculate: Relative paths correctly

**For All Imports:**
- ✅ Use descriptive names
- ✅ Include dimensions in image names
- ✅ Optimize before importing
- ✅ Use appropriate formats
- ✅ Document import sources

**The WooCommerce Prototype now has complete file import standards with comprehensive guidelines, organized directory structure, and production-ready documentation for all asset types.**

---

**Report Status:** ✅ Complete  
**Documentation:** ✅ 100% Coverage  
**Quality Assurance:** ✅ Passed  
**Next Action:** Import assets following established standards
