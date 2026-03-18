# File Imports Guidelines

**Type:** Process  
**Status:** Complete  
**Version:** 1.1  
**Last Updated:** March 18, 2026  
**Purpose:** Standardize file import practices, naming conventions, and organization for the WooCommerce Prototype project.

---

## 📋 Overview

All imported assets (images, SVGs, fonts, data) must follow standardized import methods, be organized in the `/src/app/imports/` directory, and use appropriate import syntax based on file type. This ensures consistent, maintainable, and optimized asset management across the project.

---

## 🎯 Purpose

This guideline establishes:
- Location and organization standards for imported assets
- Import syntax for different asset types
- Naming conventions for imported files
- Optimization standards
- Best practices for asset management

---

## 📁 Directory Structure

**🚨 CRITICAL: All imported assets MUST be stored in `/src/app/imports/` directory.**

```
/src/app/imports/
├── README.md                      # Import directory documentation
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

---

## 🏷️ Naming Conventions

### **Standard Format by Asset Type**

#### **1. Raster Images**

**Format:** `descriptive-name-{width}x{height}.{ext}`

**Components:**
1. **Descriptive name** - Clear description in kebab-case
2. **Dimensions** - Width x height in pixels
3. **Extension** - png, jpg, jpeg, webp

**Examples:**
```
✅ hero-banner-holiday-sale-1920x1080.jpg
✅ product-tshirt-blue-front-500x500.png
✅ background-pattern-dots-400x400.webp
✅ thumbnail-category-shoes-300x300.jpg

❌ IMG_1234.jpg (not descriptive)
❌ image.png (too generic)
❌ ProductImage.PNG (not kebab-case)
❌ hero.jpg (missing dimensions)
```

---

#### **2. SVG Vectors**

**Format:** `svg-{type}-{name}-{id}`

**Components:**
1. **Prefix** - Always `svg-`
2. **Type** - icon, logo, illustration, pattern
3. **Name** - Descriptive name in kebab-case
4. **ID** - Unique identifier (usually from Figma)

**Examples:**
```
✅ svg-icon-shopping-cart-abc123.svg
✅ svg-logo-company-primary-def456.svg
✅ svg-illustration-hero-landing-ghi789.svg
✅ svg-pattern-dots-background-jkl012.svg

❌ icon.svg (not descriptive, no ID)
❌ ShoppingCart.svg (not kebab-case, no prefix/ID)
❌ cart-icon.svg (no prefix or ID)
```

---

#### **3. Custom Fonts**

**Format:** `{font-family}-{weight}-{style}.{ext}`

**Components:**
1. **Font family** - Font name in kebab-case
2. **Weight** - 100-900 (or thin/light/regular/medium/semibold/bold/black)
3. **Style** - normal, italic, oblique
4. **Extension** - woff2 (preferred), woff, ttf

**Examples:**
```
✅ inter-400-normal.woff2
✅ inter-700-bold.woff2
✅ roboto-500-italic.woff
✅ open-sans-600-normal.woff2

❌ font.woff2 (not descriptive)
❌ InterBold.woff2 (not kebab-case)
❌ inter.woff2 (missing weight and style)
```

---

#### **4. Data Files**

**Format:** `{type}-{description}.json`

**Components:**
1. **Type** - products, content, config, navigation
2. **Description** - Purpose in kebab-case
3. **Extension** - json, yaml, xml

**Examples:**
```
✅ products-featured.json
✅ content-homepage-hero.json
✅ config-navigation-main.json
✅ data-testimonials-customer.json

❌ data.json (too generic)
❌ ProductsData.json (not kebab-case)
❌ featured.json (missing type)
```

---

## 📝 Import Methods

### **Method 1: Figma Asset Imports** (Raster Images from Figma)

**Use Case:** Images imported from Figma frames

**Import Syntax:**
```tsx
import imgSrc from "figma:asset/filename.ext";
```

**Critical Rules:**
- ✅ `figma:asset` is a **virtual module scheme**
- ❌ **NEVER** prefix with `./`, `../`, or any path
- ✅ Use exactly: `figma:asset/filename.ext`
- ✅ Only for raster images (PNG, JPG, WebP)
- ❌ **NOT** for SVGs (use relative paths)

**Examples:**

```tsx
// ✅ CORRECT - Figma asset imports
import heroImg from "figma:asset/76faf8f617b56e6f079c5a7ead8f927f.png";
import productImg from "figma:asset/f2dddff10fce8c5cc0468d3c13d16d6e.png";
import thumbnailImg from "figma:asset/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.webp";

// Usage in component
<img 
  src={heroImg} 
  alt="Hero banner"
  width={1920}
  height={1080}
/>

// ❌ WRONG - Don't add paths to figma:asset
import img from "./imports/figma:asset/abc123.png";
import img from "../figma:asset/abc123.png";
import img from "/src/app/imports/figma:asset/abc123.png";
import img from "../../figma:asset/abc123.png";
```

---

### **Method 2: SVG Vector Imports** (Relative Paths)

**Use Case:** SVG files from Figma or design systems

**Import Syntax:**
```tsx
import svgPaths from "{relative-path}/imports/vectors/svg-name-id";
```

**Critical Rules:**
- ✅ SVGs use **relative file paths**
- ✅ Calculate path from importing component location
- ✅ No file extension (`.svg` omitted)
- ❌ **NOT** the `figma:asset` scheme

**Path Calculation:**

```tsx
// From /src/app/components/blocks/Component.tsx
import svgIcon from "../../../imports/vectors/svg-icon-cart-abc123";

// From /src/app/components/patterns/Pattern.tsx
import svgLogo from "../../../imports/vectors/svg-logo-company-def456";

// From /src/app/templates/Template.tsx
import svgPattern from "../../imports/vectors/svg-pattern-dots-ghi789";

// From /App.tsx (root)
import svgIllustration from "./src/app/imports/vectors/svg-illustration-hero-jkl012";
```

**Usage in Component:**

```tsx
import iconPaths from "../../../imports/vectors/svg-icon-shopping-cart-abc123";

const ShoppingCartIcon = () => (
  <svg 
    className="w-6 h-6" 
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d={iconPaths.path} />
  </svg>
);
```

---

### **Method 3: Local Image Imports** (Relative Paths)

**Use Case:** Images stored locally in project (not from Figma)

**Import Syntax:**
```tsx
import imgSrc from "{relative-path}/imports/images/filename.ext";
```

**Examples:**

```tsx
// From /src/app/components/blocks/ProductCard.tsx
import productImg from "../../../imports/images/products/tshirt-blue-500x500.png";

// From /src/app/templates/Homepage.tsx
import heroImg from "../../imports/images/heroes/banner-holiday-1920x1080.jpg";

// From /src/app/components/patterns/Hero.tsx
import bgPattern from "../../../imports/images/backgrounds/dots-pattern-400x400.webp";

// Usage
<img 
  src={productImg} 
  alt="Blue T-Shirt"
  width={500}
  height={500}
/>
```

---

### **Method 4: Font Imports** (CSS @font-face)

**Use Case:** Custom web fonts

**Import Syntax:** CSS `@font-face` in stylesheet

**Location:** `/src/styles/globals.css` or `/src/styles/theme-variables.css`

**Example:**

```css
/* In /src/styles/globals.css */

@font-face {
  font-family: 'Inter';
  src: url('/src/app/imports/fonts/woff2/inter-400-normal.woff2') format('woff2'),
       url('/src/app/imports/fonts/woff/inter-400-normal.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/src/app/imports/fonts/woff2/inter-700-bold.woff2') format('woff2'),
       url('/src/app/imports/fonts/woff/inter-700-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

**Usage in CSS:**

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

h1, h2, h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}
```

---

### **Method 5: Data File Imports** (ES6 Imports)

**Use Case:** JSON or other static data files

**Import Syntax:**
```tsx
import data from "{relative-path}/imports/data/filename.json";
```

**Examples:**

```tsx
// From /src/app/components/patterns/FeaturedProducts.tsx
import productsData from "../../../imports/data/products/featured.json";

// From /src/app/templates/Homepage.tsx
import contentData from "../../imports/data/content/homepage-hero.json";

// Usage
const FeaturedProducts = () => {
  const products = productsData.products;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-60">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  );
};
```

**Type Safety with TypeScript:**

```tsx
// Define type for imported data
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductsData {
  products: Product[];
}

// Import with type assertion
import productsData from "../../../imports/data/products/featured.json";

const typedData = productsData as ProductsData;
```

---

## 🎨 Figma Import Workflow

### **Step 1: Import Figma Frame**

When importing a Figma frame, two types of assets are generated:

1. **Raster Images** - Use `figma:asset` scheme
2. **SVG Vectors** - Stored in `/imports/vectors/`

---

### **Step 2: Identify Asset Type**

**Check the import code provided by Figma:**

```tsx
// If it looks like this - it's a RASTER IMAGE
import imgA from "figma:asset/76faf8f617b56e6f.png";

// If it looks like this - it's an SVG VECTOR
import svgPaths from "./imports/svg-wg56ef214f";
```

---

### **Step 3: Import Correctly**

**For Raster Images (PNG, JPG, WebP):**

```tsx
// ✅ CORRECT - Use figma:asset scheme as-is
import heroImg from "figma:asset/76faf8f617b56e6f.png";
import productImg from "figma:asset/f2dddff10fce8c5c.png";

// Usage
<img src={heroImg} alt="Hero banner" />
<img src={productImg} alt="Product" />
```

**For SVG Vectors:**

```tsx
// ✅ CORRECT - Use relative path (calculate from your location)
import svgIconPaths from "../../../imports/vectors/svg-icon-cart-abc123";

// Usage
<svg className="w-6 h-6">
  <path d={svgIconPaths.path} fill="currentColor" />
</svg>
```

---

### **Step 4: Use ImageWithFallback for New Images**

When creating new images (not from Figma imports):

```tsx
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

<ImageWithFallback 
  src={imgSrc}
  alt="Product name"
  width={500}
  height={500}
  className="rounded-lg"
/>
```

**Note:** Do NOT use ImageWithFallback for Figma imports - use regular `<img>` tag.

---

## 📊 Import Method Summary

| Asset Type | Import Method | Example |
|------------|---------------|---------|
| Raster Images | `figma:asset` | `import heroImg from "figma:asset/76faf8f617b56e6f.png";` |
| SVG Vectors | Relative Path | `import svgIconPaths from "../../../imports/vectors/svg-icon-cart-abc123";` |
| Local Images | Relative Path | `import productImg from "../../../imports/images/products/tshirt-blue-500x500.png";` |
| Fonts | CSS @font-face | `@font-face { font-family: 'Inter'; src: url('/src/app/imports/fonts/woff2/inter-400-normal.woff2') format('woff2'); }` |
| Data Files | ES6 Import | `import productsData from "../../../imports/data/products/featured.json";` |

---

## 🎯 Figma Import Exemptions

### **Scope**

Figma-generated code in `/imports/` may contain Tailwind CSS utility classes from auto-generation. These files are **exempt** from BEM requirements while they remain in the imports directory.

### **BEM conversion workflow**

When extracting a Figma import for use as a project component:

1. Copy the component to the appropriate `/src/app/components/` directory
2. Replace all Tailwind utility classes with WordPress BEM class names
3. Create a corresponding CSS file in `/src/styles/` (blocks or sections)
4. Add the `@import` to `/styles/globals.css`
5. Remove all static inline `style={{}}` objects — move to CSS
6. Keep only genuinely dynamic inline styles (computed colors, CSS custom properties, data-driven dimensions)
7. Follow standard BEM naming: `.block__element--modifier`

### **Dynamic inline style exceptions**

These patterns are acceptable as inline styles because they cannot be expressed in static CSS:

```tsx
// ✅ OK — Dynamic color from data
style={{ backgroundColor: item.color }}

// ✅ OK — CSS custom property for color-mix()
style={{ '--card-accent': page.color } as React.CSSProperties}

// ✅ OK — Computed value from props/state
style={{ width: `${progress}%` }}

// ❌ NOT OK — Static value (move to CSS)
style={{ marginBottom: '2rem' }}
style={{ display: 'flex', gap: '1rem' }}
```

---

## ✅ Best Practices

### **DO:**

1. ✅ **Organize by type and purpose**
   ```
   /imports/images/products/
   /imports/images/heroes/
   /imports/vectors/icons/
   /imports/fonts/woff2/
   /imports/data/products/
   ```

2. ✅ **Use descriptive names**
   ```
   hero-banner-holiday-sale-1920x1080.jpg
   product-tshirt-blue-front-500x500.png
   svg-icon-shopping-cart-filled-abc123.svg
   inter-700-bold.woff2
   products-featured.json
   ```

3. ✅ **Include dimensions in image names**
   ```
   product-500x500.png
   hero-1920x1080.jpg
   thumbnail-150x150.webp
   background-400x400.png
   ```

4. ✅ **Optimize images before importing**
   ```
   - Compress JPG/PNG (use TinyPNG, ImageOptim)
   - Use WebP for modern browsers
   - Resize to exact dimensions needed
   - Remove EXIF data
   ```

5. ✅ **Use appropriate formats**
   ```
   Photos → JPG or WebP
   Graphics with transparency → PNG or WebP
   Icons → SVG (preferred) or PNG
   Logos → SVG
   Fonts → WOFF2 (preferred) or WOFF
   ```

6. ✅ **Document import sources**
   ```tsx
   // Imported from Figma: "Homepage Hero Section" frame
   // Last updated: 2026-01-09
   import heroImg from "figma:asset/76faf8f617b56e6f.png";
   ```

7. ✅ **Calculate relative paths correctly**
   ```tsx
   // From /src/app/components/blocks/Component.tsx
   // Need to go up 3 levels to reach /src/app/
   import svg from "../../../imports/vectors/svg-icon-abc123";
   ```

8. ✅ **Use alt text for all images**
   ```tsx
   <img 
     src={productImg} 
     alt="Blue cotton t-shirt with round neck"
     width={500}
     height={500}
   />
   ```

9. ✅ **Specify width and height**
   ```tsx
   <img 
     src={heroImg} 
     alt="Hero banner"
     width={1920}
     height={1080}
   />
   ```

10. ✅ **Use loading="lazy" for below-fold images**
    ```tsx
    <img 
      src={productImg} 
      alt="Product"
      width={500}
      height={500}
      loading="lazy"
    />
    ```

---

## 🚫 Common Mistakes to Avoid

### **❌ DON'T:**

1. **Mix up figma:asset with relative paths**
   ```tsx
   // ❌ WRONG - Adding path to figma:asset
   import img from "./imports/figma:asset/abc123.png";
   import img from "../figma:asset/abc123.png";
   
   // ✅ CORRECT - No path prefix
   import img from "figma:asset/abc123.png";
   ```

2. **Use figma:asset for SVGs**
   ```tsx
   // ❌ WRONG - SVGs don't use figma:asset
   import svg from "figma:asset/icon.svg";
   
   // ✅ CORRECT - SVGs use relative paths
   import svg from "../../../imports/vectors/svg-icon-abc123";
   ```

3. **Forget to calculate relative paths**
   ```tsx
   // ❌ WRONG - Incorrect relative path
   import svg from "./svg-icon-abc123";
   import svg from "../svg-icon-abc123";
   
   // ✅ CORRECT - Proper relative path from component
   import svg from "../../../imports/vectors/svg-icon-abc123";
   ```

4. **Use generic or unclear names**
   ```tsx
   // ❌ WRONG
   import img1 from "figma:asset/image1.png";
   import icon from "../imports/vectors/icon";
   
   // ✅ CORRECT
   import heroImg from "figma:asset/hero-banner-holiday.png";
   import cartIcon from "../imports/vectors/svg-icon-cart-abc123";
   ```

5. **Omit dimensions from image names**
   ```tsx
   // ❌ WRONG
   product.png
   hero.jpg
   
   // ✅ CORRECT
   product-500x500.png
   hero-1920x1080.jpg
   ```

6. **Store assets in wrong location**
   ```tsx
   // ❌ WRONG
   /src/assets/images/
   /public/images/
   /images/
   
   // ✅ CORRECT
   /src/app/imports/images/
   ```

7. **Import SVG with .svg extension**
   ```tsx
   // ❌ WRONG - Don't include .svg extension
   import svg from "../imports/vectors/svg-icon-abc123.svg";
   
   // ✅ CORRECT - Omit extension
   import svg from "../imports/vectors/svg-icon-abc123";
   ```

8. **Use inline styles instead of classes**
   ```tsx
   // ❌ WRONG
   <img 
     src={img} 
     style={{ width: '500px', height: '500px' }}
   />
   
   // ✅ CORRECT
   <img 
     src={img} 
     width={500}
     height={500}
     className="rounded-lg"
   />
   ```

---

## 🔍 Troubleshooting

### **Issue: "Cannot find module 'figma:asset/...'"**

**Cause:** Trying to use figma:asset for non-Figma images

**Solution:** Use relative path import instead

```tsx
// ❌ WRONG
import img from "figma:asset/my-image.png";

// ✅ CORRECT
import img from "../imports/images/my-image-500x500.png";
```

---

### **Issue: "Module not found" for SVG**

**Cause:** Incorrect relative path calculation

**Solution:** Count directory levels correctly

```tsx
// From /src/app/components/blocks/Component.tsx
// Current: /src/app/components/blocks/
// Target:  /src/app/imports/vectors/
// Levels:  blocks/ → components/ → app/ → imports/

// ❌ WRONG
import svg from "../imports/vectors/svg-icon-abc123";

// ✅ CORRECT - Go up 3 levels
import svg from "../../../imports/vectors/svg-icon-abc123";
```

---

### **Issue: Images not loading**

**Possible Causes & Solutions:**

1. **Wrong import method**
   ```tsx
   // Check: Is it from Figma? Use figma:asset
   // Check: Is it local? Use relative path
   ```

2. **Missing file extension for local imports**
   ```tsx
   // ❌ WRONG
   import img from "../imports/images/product";
   
   // ✅ CORRECT
   import img from "../imports/images/product-500x500.png";
   ```

3. **Incorrect path**
   ```tsx
   // Verify: File exists at specified location
   // Verify: Relative path is correctly calculated
   ```

---

### **Issue: SVG not rendering**

**Solution:** Check SVG import structure

```tsx
// ✅ CORRECT - Access path data
import iconPaths from "../imports/vectors/svg-icon-abc123";

<svg viewBox="0 0 24 24">
  <path d={iconPaths.path} />  {/* or iconPaths.path1, iconPaths.path2 */}
</svg>
```

---

## 📚 Related Documentation

### **Primary References**

- [/src/app/imports/README.md](../../src/app/imports/README.md) - Import directory documentation
- [Guidelines.md Section 8](../../Guidelines.md) - Images and SVGs usage
- [ImageWithFallback.tsx](../../src/app/components/figma/ImageWithFallback.tsx) - Image component

### **Related Guidelines**

- [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md) - Documentation standards
- [Guidelines.md](../Guidelines.md) - Main project guidelines

---

## 🔄 Changelog

### v1.1 - 2026-03-18
- Added Figma Import Exemptions section
- Documented BEM conversion workflow for Figma imports

### v1.0 - 2026-01-09
- Initial documentation
- Established import methods (5 methods)
- Created naming conventions
- Defined directory structure
- Documented Figma import workflow
- Added decision tree
- Created troubleshooting guide
- Added 10 best practices
- Documented 8 common mistakes

---

**Status:** ✅ Complete  
**Maintainer:** Project Team  
**Last Review:** March 18, 2026