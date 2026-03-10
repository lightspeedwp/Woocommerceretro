# Imports Directory

**Purpose:** Central location for all imported assets from external sources  
**Location:** `/src/app/imports/`  
**Guidelines:** See [/guidelines/IMPORTS_GUIDELINES.md](../../../guidelines/IMPORTS_GUIDELINES.md)

---

## 📋 Overview

This directory contains all assets imported from external sources, particularly from Figma frames and design systems. Assets are organized by type for easy discovery and management.

**🚨 CRITICAL: ALL imported assets should be stored in this directory or its subdirectories.**

---

## 📁 Directory Structure

```
/src/app/imports/
├── README.md                      # This file
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
│   ├── woff2/                     # WOFF2 format
│   └── woff/                      # WOFF format
└── data/                          # JSON or other data files
    ├── products/                  # Product data
    └── content/                   # Content data
```

---

## 📂 Import Categories

### **1. Raster Images** (`/src/app/imports/images/`)

**Purpose:** PNG, JPG, WebP image files

**Naming Convention:** `descriptive-name-{width}x{height}.{ext}`

**Examples:**
```
hero-banner-1920x1080.jpg
product-tshirt-500x500.png
background-pattern-400x400.webp
```

**Import Methods:**
- **Figma Assets:** Use `figma:asset` scheme
- **Local Files:** Use relative path imports

---

### **2. Vector Graphics** (`/src/app/imports/vectors/`)

**Purpose:** SVG vector files

**Naming Convention:** `svg-{descriptive-name}-{id}`

**Examples:**
```
svg-icon-shopping-cart-abc123.svg
svg-logo-company-def456.svg
svg-illustration-hero-ghi789.svg
```

**Import Method:** Relative path imports only

---

### **3. Custom Fonts** (`/src/app/imports/fonts/`)

**Purpose:** Custom web font files

**Naming Convention:** `{font-family}-{weight}-{style}.{ext}`

**Examples:**
```
inter-400-normal.woff2
inter-700-bold.woff2
roboto-500-italic.woff
```

**Import Method:** CSS `@font-face` declarations

---

### **4. Data Files** (`/src/app/imports/data/`)

**Purpose:** JSON or other data files

**Naming Convention:** `{type}-{description}.json`

**Examples:**
```
products-featured.json
content-homepage.json
config-navigation.json
```

**Import Method:** ES6 imports or fetch API

---

## 🏷️ Naming Conventions

### **General Rules**

1. **Use kebab-case:** `product-image-name.png` (not `ProductImageName.png`)
2. **Be descriptive:** `hero-banner-holiday-sale.jpg` (not `image1.jpg`)
3. **Include dimensions for images:** `product-500x500.png`
4. **Use IDs for Figma imports:** `svg-icon-cart-abc123.svg`

### **Examples**

#### ✅ CORRECT:
```
hero-banner-1920x1080.jpg
product-tshirt-blue-500x500.png
svg-icon-search-xyz789.svg
inter-700-bold.woff2
products-featured.json
```

#### ❌ INCORRECT:
```
IMG_1234.jpg                    # Not descriptive
ProductImage.PNG                # Not kebab-case
image.jpg                       # Too generic
icon.svg                        # No description
font.woff2                      # No font info
```

---

## 📝 Import Methods

### **Method 1: Figma Asset Imports (Raster Images)**

**Use Case:** Images imported from Figma frames

**Syntax:**
```tsx
import img from "figma:asset/abc123.png";

// Usage
<img src={img} alt="Description" />
```

**Important:**
- ⚠️ `figma:asset` is a **virtual module scheme**, NOT a file path
- ❌ NEVER prefix with `./`, `../`, or any directory path
- ✅ Use exactly as shown: `figma:asset/filename.ext`

**Examples:**
```tsx
// ✅ CORRECT
import heroImg from "figma:asset/76faf8f617b56e6f.png";
import productImg from "figma:asset/f2dddff10fce8c5c.png";

// ❌ WRONG
import img from "./imports/figma:asset/abc123.png";     // DON'T add path
import img from "../figma:asset/abc123.png";            // DON'T add path
import img from "/src/app/imports/figma:asset/abc.png"; // DON'T add path
```

---

### **Method 2: SVG Vector Imports (Relative Paths)**

**Use Case:** SVG files from Figma or design systems

**Syntax:**
```tsx
import svgPaths from "./imports/vectors/svg-icon-name-id";

// Usage
<svg>
  <path d={svgPaths.path1} />
</svg>
```

**Important:**
- ✅ SVGs use **relative file paths**
- ✅ Calculate path from your component location
- ✅ Path must be correct relative to importing file

**Examples:**
```tsx
// From /src/app/components/Component.tsx
import svgIcon from "../imports/vectors/svg-icon-cart-abc123";

// From /src/app/templates/Template.tsx
import svgLogo from "../imports/vectors/svg-logo-company-def456";

// From /App.tsx (root)
import svgPattern from "./src/app/imports/vectors/svg-pattern-dots-ghi789";
```

---

### **Method 3: Local Image Imports (Relative Paths)**

**Use Case:** Images stored locally in project

**Syntax:**
```tsx
import imgSrc from "./imports/images/product-500x500.png";

// Usage
<img src={imgSrc} alt="Description" />
```

**Examples:**
```tsx
// From /src/app/components/ProductCard.tsx
import productImg from "../imports/images/products/tshirt-blue-500x500.png";

// From /src/app/templates/Homepage.tsx
import heroImg from "../imports/images/heroes/banner-1920x1080.jpg";
```

---

### **Method 4: Font Imports (CSS)**

**Use Case:** Custom web fonts

**Syntax:**
```css
@font-face {
  font-family: 'FontName';
  src: url('/src/app/imports/fonts/woff2/font-weight-style.woff2') format('woff2'),
       url('/src/app/imports/fonts/woff/font-weight-style.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

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

### **Method 5: Data Imports (JSON)**

**Use Case:** Static data files

**Syntax:**
```tsx
import data from "./imports/data/products-featured.json";

// Usage
const products = data.products;
```

**Example:**
```tsx
// From /src/app/components/FeaturedProducts.tsx
import featuredData from "../imports/data/products/featured.json";

const FeaturedProducts = () => {
  const products = featuredData.products;
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

---

## 🎨 Figma Import Workflow

### **Step 1: Import Figma Frame**

When you import a Figma frame, assets are generated automatically.

**Asset Types Generated:**
- **Raster Images:** Use `figma:asset` scheme
- **SVG Vectors:** Stored in `/imports/vectors/`

---

### **Step 2: Identify Asset Type**

**Raster Image (PNG, JPG, WebP):**
```tsx
import img from "figma:asset/abc123.png";
```

**Vector Graphic (SVG):**
```tsx
import svgPaths from "./imports/vectors/svg-icon-xyz789";
```

---

### **Step 3: Import Correctly**

**For Raster Images:**
```tsx
// ✅ CORRECT - Use figma:asset scheme
import heroImg from "figma:asset/76faf8f617b56e6f.png";

<img src={heroImg} alt="Hero banner" />
```

**For SVG Vectors:**
```tsx
// ✅ CORRECT - Use relative path
import iconPaths from "../imports/vectors/svg-icon-cart-abc123";

<svg className="w-6 h-6">
  <path d={iconPaths.path} fill="currentColor" />
</svg>
```

---

## 🚫 Common Mistakes

### **❌ DON'T:**

1. **Mix up import methods**
   ```tsx
   // ❌ WRONG - Using relative path for figma:asset
   import img from "./imports/figma:asset/abc123.png";
   
   // ✅ CORRECT
   import img from "figma:asset/abc123.png";
   ```

2. **Add paths to figma:asset imports**
   ```tsx
   // ❌ WRONG
   import img from "../figma:asset/abc123.png";
   import img from "/imports/figma:asset/abc123.png";
   
   // ✅ CORRECT
   import img from "figma:asset/abc123.png";
   ```

3. **Use figma:asset for SVGs**
   ```tsx
   // ❌ WRONG - SVGs don't use figma:asset
   import svg from "figma:asset/icon.svg";
   
   // ✅ CORRECT - SVGs use relative paths
   import svgPaths from "./imports/vectors/svg-icon-abc123";
   ```

4. **Forget relative path calculation**
   ```tsx
   // ❌ WRONG - Path doesn't account for file location
   import svg from "./svg-icon-abc123";
   
   // ✅ CORRECT - Proper relative path
   import svg from "../imports/vectors/svg-icon-abc123";
   ```

5. **Use generic names**
   ```tsx
   // ❌ WRONG
   import img from "figma:asset/image1.png";
   
   // ✅ CORRECT
   import heroImg from "figma:asset/hero-banner-holiday.png";
   ```

---

## ✅ Best Practices

### **DO:**

1. ✅ **Organize by type and purpose**
   ```
   /imports/images/products/
   /imports/images/heroes/
   /imports/vectors/icons/
   ```

2. ✅ **Use descriptive names**
   ```
   hero-banner-holiday-sale-1920x1080.jpg
   product-tshirt-blue-front-500x500.png
   svg-icon-shopping-cart-filled-abc123.svg
   ```

3. ✅ **Include dimensions in image names**
   ```
   product-500x500.png
   hero-1920x1080.jpg
   thumbnail-150x150.webp
   ```

4. ✅ **Use ImageWithFallback for new images**
   ```tsx
   import { ImageWithFallback } from './components/figma/ImageWithFallback';
   
   <ImageWithFallback 
     src={imgSrc}
     alt="Product name"
     width={500}
     height={500}
   />
   ```

5. ✅ **Document import sources**
   ```tsx
   // Imported from Figma: "Homepage Hero Section" frame
   import heroImg from "figma:asset/76faf8f617b56e6f.png";
   ```

---

## 📊 Current Imports

### **Images**

| File | Source | Type | Size |
|------|--------|------|------|
| - | No imports yet | - | - |

---

### **Vectors**

| File | Source | Type | Usage |
|------|--------|------|-------|
| - | No imports yet | - | - |

---

### **Fonts**

| Font | Weights | Formats | Status |
|------|---------|---------|--------|
| - | No custom fonts | - | - |

---

### **Data**

| File | Purpose | Status |
|------|---------|--------|
| - | No data files yet | - |

---

## 🔍 Finding Imports

### **By Type**
```bash
# All images
ls /src/app/imports/images/

# All SVGs
ls /src/app/imports/vectors/

# All fonts
ls /src/app/imports/fonts/
```

### **By Category**
```bash
# Product images
ls /src/app/imports/images/products/

# Icon SVGs
ls /src/app/imports/vectors/icons/
```

### **Search for usage**
```bash
# Find where an import is used
grep -r "figma:asset/abc123.png" /src/

# Find all figma:asset imports
grep -r "figma:asset" /src/app/
```

---

## 📚 Related Documentation

- **[IMPORTS_GUIDELINES.md](../../../guidelines/IMPORTS_GUIDELINES.md)** - Complete import standards
- **[Guidelines.md](../../../Guidelines.md)** - Main project guidelines
- **[ImageWithFallback.tsx](../components/figma/ImageWithFallback.tsx)** - Image component

---

## 📞 Questions?

### **Which import method to use:**
- Figma raster images? → `figma:asset` scheme
- SVG vectors? → Relative path imports
- Local images? → Relative path imports
- Custom fonts? → CSS `@font-face`
- JSON data? → ES6 imports

### **How to name imports:**
- Images: `descriptive-name-{width}x{height}.{ext}`
- SVGs: `svg-{type}-{name}-{id}.svg`
- Fonts: `{family}-{weight}-{style}.{ext}`
- Data: `{type}-{description}.json`

### **Where to store imports:**
- Images: `/src/app/imports/images/`
- SVGs: `/src/app/imports/vectors/`
- Fonts: `/src/app/imports/fonts/`
- Data: `/src/app/imports/data/`

---

## 🔄 Changelog

### 2026-01-09
- Created imports directory structure
- Established import standards
- Added README documentation
- Defined import categories

---

**Last Updated:** January 9, 2026  
**Maintained By:** Project Team
