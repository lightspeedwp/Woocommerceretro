# Product Data Expansion - Triple Products (5 → 15)

**Created:** 2026-03-10  
**Status:** 🔄 IN PROGRESS  
**Goal:** Triple product count from 5 to 15 products with category-specific data files

---

## Executive Summary

Expand product catalog from 5 to 15 products (3x growth), organized into 5 main categories with 3 products each. Each category will have its own data file for better maintainability.

---

## Current State

**Products:** 5 total in `/src/app/data/products.ts`
- Electronics: 2 (Headphones, Smartwatch)
- Clothing: 1 (T-Shirt)
- Home & Living: 1 (Ceramic Mug)
- Accessories: 1 (Crossbody Bag)

**File Structure:**
```
/src/app/data/
└── products.ts (single file with all products)
```

---

## Target State

**Products:** 15 total across 5 categories (3 products per category)

**Categories (5 main):**
1. **Electronics** (3 products)
2. **Clothing** (3 products)
3. **Home & Living** (3 products)
4. **Accessories** (3 products)
5. **Sports & Fitness** (3 products) ← NEW CATEGORY

**File Structure:**
```
/src/app/data/
├── products.ts (main aggregator - imports all category files)
└── products/
    ├── electronics.ts (3 products)
    ├── clothing.ts (3 products)
    ├── home-living.ts (3 products)
    ├── accessories.ts (3 products)
    └── sports-fitness.ts (3 products)
```

---

## Shared Data Structure

**CRITICAL:** All product files MUST use identical structure.

```javascript
/**
 * Product Type Definition
 * 
 * @typedef {Object} Product
 * @property {string} id - Unique product ID (format: prod-N)
 * @property {string} name - Product name
 * @property {string} slug - URL-friendly slug
 * @property {string} brand - Brand name
 * @property {number} price - Regular price
 * @property {number} [salePrice] - Sale price (optional)
 * @property {string} image - Unsplash image URL
 * @property {string} description - Full description
 * @property {string} shortDescription - Brief description
 * @property {string} sku - Stock keeping unit
 * @property {string} category - Category name
 * @property {string} categorySlug - URL-friendly category slug
 * @property {boolean} inStock - Stock availability
 * @property {boolean} onSale - Sale status
 * @property {boolean} featured - Featured status
 * @property {number} rating - Average rating (1-5)
 * @property {number} reviewCount - Total reviews
 * @property {string[]} badges - Product badges
 * @property {string[]} tags - Search tags
 * @property {string} weight - Product weight (kg)
 * @property {string} dateAdded - ISO date string
 * @property {number} totalSales - Total units sold
 */
```

---

## Product Allocation by Category

### 1. Electronics (3 products)

**KEEP:**
- prod-1: Premium Wireless Headphones ✅ EXISTING (onSale, featured)
- prod-2: Fitness Smartwatch Pro ✅ EXISTING (featured)

**ADD:**
- prod-3: Wireless Earbuds Pro (NEW)

---

### 2. Clothing (3 products)

**KEEP:**
- prod-5: Organic Cotton T-Shirt ✅ EXISTING

**ADD:**
- prod-6: Slim Fit Denim Jeans (NEW)
- prod-7: Cozy Fleece Hoodie (NEW)

---

### 3. Home & Living (3 products)

**KEEP:**
- prod-9: Handcrafted Ceramic Mug ✅ EXISTING

**ADD:**
- prod-10: Abstract Canvas Wall Art (NEW)
- prod-11: Chunky Knit Throw Blanket (NEW)

---

### 4. Accessories (3 products)

**KEEP:**
- prod-13: Leather Crossbody Bag ✅ EXISTING (onSale, featured)

**ADD:**
- prod-14: Polarized Aviator Sunglasses (NEW)
- prod-15: Minimalist Leather Wallet (NEW)

---

### 5. Sports & Fitness (3 products) - NEW CATEGORY

**ADD:**
- prod-16: Premium Yoga Mat (NEW, featured)
- prod-17: Insulated Water Bottle (NEW)
- prod-18: Resistance Bands Set (NEW)

---

## Product ID Mapping

**Old IDs → New IDs:**
- prod-1: Premium Wireless Headphones → prod-1 (Electronics)
- prod-2: Fitness Smartwatch Pro → prod-2 (Electronics)
- prod-5: Organic Cotton T-Shirt → prod-5 (Clothing)
- prod-9: Handcrafted Ceramic Mug → prod-9 (Home & Living)
- prod-13: Leather Crossbody Bag → prod-13 (Accessories)

**New IDs:**
- prod-3: Wireless Earbuds Pro (Electronics)
- prod-6: Slim Fit Denim Jeans (Clothing)
- prod-7: Cozy Fleece Hoodie (Clothing)
- prod-10: Abstract Canvas Wall Art (Home & Living)
- prod-11: Chunky Knit Throw Blanket (Home & Living)
- prod-14: Polarized Aviator Sunglasses (Accessories)
- prod-15: Minimalist Leather Wallet (Accessories)
- prod-16: Premium Yoga Mat (Sports & Fitness)
- prod-17: Insulated Water Bottle (Sports & Fitness)
- prod-18: Resistance Bands Set (Sports & Fitness)

---

## Category Details

### Category 1: Electronics

**Category Info:**
- **Name:** "Electronics"
- **Slug:** "electronics"
- **Description:** "Cutting-edge tech for everyday life"

**Products (3):**

1. **prod-1: Premium Wireless Headphones** ✅ EXISTING
   - Brand: SoundCore
   - Price: $149.99 → $119.99 (SALE)
   - Featured: YES
   - Badges: Sale, Best Seller
   - Rating: 4.8 (124 reviews)

2. **prod-2: Fitness Smartwatch Pro** ✅ EXISTING
   - Brand: VitaBand
   - Price: $249.00
   - Featured: YES
   - Badges: New
   - Rating: 4.6 (89 reviews)

3. **prod-3: Wireless Earbuds Pro** 🆕 NEW
   - Brand: AudioFlow
   - Price: $89.99
   - Featured: NO
   - Badges: None
   - Rating: 4.7 (156 reviews)
   - Description: "True wireless freedom with premium sound quality, active noise cancellation, and 24-hour battery life with charging case."

---

### Category 2: Clothing

**Category Info:**
- **Name:** "Clothing"
- **Slug:** "clothing"
- **Description:** "Sustainable fashion for modern living"

**Products (3):**

1. **prod-5: Organic Cotton T-Shirt** ✅ EXISTING
   - Brand: EcoThreads
   - Price: $39.00
   - Featured: NO
   - Badges: Eco-Friendly
   - Rating: 4.7 (215 reviews)

2. **prod-6: Slim Fit Denim Jeans** 🆕 NEW
   - Brand: DenimCraft
   - Price: $89.00 → $69.00 (SALE)
   - Featured: NO
   - Badges: Sale
   - Rating: 4.5 (143 reviews)
   - Description: "Classic slim fit jeans crafted from premium selvedge denim with just the right amount of stretch for all-day comfort."

3. **prod-7: Cozy Fleece Hoodie** 🆕 NEW
   - Brand: ComfyWear
   - Price: $65.00
   - Featured: YES
   - Badges: New
   - Rating: 4.8 (98 reviews)
   - Description: "Ultra-soft fleece hoodie with brushed interior, kangaroo pocket, and relaxed fit. Perfect for layering or lounging."

---

### Category 3: Home & Living

**Category Info:**
- **Name:** "Home & Living"
- **Slug:** "home-living"
- **Description:** "Curated pieces for mindful living"

**Products (3):**

1. **prod-9: Handcrafted Ceramic Mug** ✅ EXISTING
   - Brand: Terra Studio
   - Price: $28.00
   - Featured: NO
   - Badges: Handmade
   - Rating: 4.8 (67 reviews)

2. **prod-10: Abstract Canvas Wall Art** 🆕 NEW
   - Brand: Modern Gallery
   - Price: $159.00
   - Featured: NO
   - Badges: None
   - Rating: 4.6 (54 reviews)
   - Description: "Museum-quality canvas print featuring bold abstract design. Gallery-wrapped and ready to hang. Adds instant sophistication to any space."

3. **prod-11: Chunky Knit Throw Blanket** 🆕 NEW
   - Brand: CozyHome
   - Price: $79.00 → $59.00 (SALE)
   - Featured: NO
   - Badges: Sale
   - Rating: 4.9 (187 reviews)
   - Description: "Hand-knitted throw blanket in soft merino wool blend. Oversized design perfect for sofas or beds. Machine washable."

---

### Category 4: Accessories

**Category Info:**
- **Name:** "Accessories"
- **Slug:** "accessories"
- **Description:** "Everyday essentials with timeless style"

**Products (3):**

1. **prod-13: Leather Crossbody Bag** ✅ EXISTING
   - Brand: Artisan & Co
   - Price: $189.00 → $159.00 (SALE)
   - Featured: YES
   - Badges: Sale, Best Seller
   - Rating: 4.8 (64 reviews)

2. **prod-14: Polarized Aviator Sunglasses** 🆕 NEW
   - Brand: SunShield
   - Price: $125.00
   - Featured: NO
   - Badges: None
   - Rating: 4.7 (112 reviews)
   - Description: "Classic aviator style with polarized lenses for 100% UV protection. Lightweight metal frame with adjustable nose pads."

3. **prod-15: Minimalist Leather Wallet** 🆕 NEW
   - Brand: SlimCraft
   - Price: $45.00
   - Featured: NO
   - Badges: None
   - Rating: 4.6 (203 reviews)
   - Description: "Slim bifold wallet in full-grain leather. Holds 8 cards plus cash. RFID blocking technology for security. Ages beautifully."

---

### Category 5: Sports & Fitness (NEW)

**Category Info:**
- **Name:** "Sports & Fitness"
- **Slug:** "sports-fitness"
- **Description:** "Gear up for your active lifestyle"

**Products (3):**

1. **prod-16: Premium Yoga Mat** 🆕 NEW
   - Brand: FlowFit
   - Price: $68.00
   - Featured: YES
   - Badges: New, Best Seller
   - Rating: 4.9 (245 reviews)
   - Description: "Extra-thick 6mm yoga mat with superior grip and cushioning. Non-slip surface for all practice types. Eco-friendly TPE material."

2. **prod-17: Insulated Water Bottle** 🆕 NEW
   - Brand: HydroCore
   - Price: $35.00
   - Featured: NO
   - Badges: Eco-Friendly
   - Rating: 4.7 (324 reviews)
   - Description: "Double-wall vacuum insulated bottle keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof lid, wide mouth opening."

3. **prod-18: Resistance Bands Set** 🆕 NEW
   - Brand: FitStrength
   - Price: $29.99
   - Featured: NO
   - Badges: None
   - Rating: 4.5 (167 reviews)
   - Description: "Complete set of 5 resistance bands with varying resistance levels. Includes carrying bag, door anchor, and ankle straps."

---

## SKU Numbering Convention

**Format:** `CATEGORY-TYPE-ID`

**Examples:**
- Electronics: `ELEC-HP-001`, `ELEC-SW-002`, `ELEC-EB-003`
- Clothing: `CLO-TS-005`, `CLO-JN-006`, `CLO-HD-007`
- Home & Living: `HOME-MG-009`, `HOME-ART-010`, `HOME-BL-011`
- Accessories: `ACC-BG-013`, `ACC-SG-014`, `ACC-WL-015`
- Sports & Fitness: `SPT-YM-016`, `SPT-WB-017`, `SPT-RB-018`

---

## Implementation Tasks

### Phase 1: Create Category Data Files (30 min)

- [ ] **T1.1** — Create `/src/app/data/products/` directory
- [ ] **T1.2** — Create `electronics.ts` with 3 products (prod-1, prod-2, prod-3)
- [ ] **T1.3** — Create `clothing.ts` with 3 products (prod-5, prod-6, prod-7)
- [ ] **T1.4** — Create `home-living.ts` with 3 products (prod-9, prod-10, prod-11)
- [ ] **T1.5** — Create `accessories.ts` with 3 products (prod-13, prod-14, prod-15)
- [ ] **T1.6** — Create `sports-fitness.ts` with 3 products (prod-16, prod-17, prod-18)

### Phase 2: Update Main Products File (15 min)

- [ ] **T2.1** — Update `/src/app/data/products.ts` to import all 5 category files
- [ ] **T2.2** — Concatenate all category arrays into single PRODUCTS array
- [ ] **T2.3** — Verify all helper functions still work (getProductById, etc.)
- [ ] **T2.4** — Test aggregated product count (should be 15)

### Phase 3: Update Categories Data (10 min)

- [ ] **T3.1** — Update `/src/app/data/categories.ts` with Sports & Fitness category
- [ ] **T3.2** — Update category product counts (3 each)
- [ ] **T3.3** — Add category images for Sports & Fitness

### Phase 4: Testing (15 min)

- [ ] **T4.1** — Test main shop page displays all 15 products
- [ ] **T4.2** — Test category filtering (5 categories with 3 products each)
- [ ] **T4.3** — Test product detail pages for all 15 products
- [ ] **T4.4** — Test helper functions (getFeaturedProducts, getOnSaleProducts, etc.)
- [ ] **T4.5** — Verify build succeeds (zero errors)

### Phase 5: Documentation (10 min)

- [ ] **T5.1** — Create product expansion completion report
- [ ] **T5.2** — Update task list with completion status
- [ ] **T5.3** — Document new product IDs and category structure

---

## Product Distribution Summary

| Category | Products | Featured | On Sale | New | Total Sales |
|----------|----------|----------|---------|-----|-------------|
| Electronics | 3 | 2 | 1 | 1 | 1,259 |
| Clothing | 3 | 1 | 1 | 1 | 1,500+ |
| Home & Living | 3 | 0 | 1 | 0 | 1,100+ |
| Accessories | 3 | 1 | 1 | 0 | 800+ |
| Sports & Fitness | 3 | 1 | 0 | 1 | 600+ |
| **TOTALS** | **15** | **5** | **4** | **3** | **5,300+** |

**Featured Products:** 5/15 (33%)  
**Sale Products:** 4/15 (27%)  
**New Products:** 3/15 (20%)

---

## Unsplash Images

**Search Queries for New Products:**

1. **prod-3:** "wireless earbuds white case" - https://images.unsplash.com/photo-...
2. **prod-6:** "denim jeans folded blue" - https://images.unsplash.com/photo-...
3. **prod-7:** "gray hoodie sweatshirt" - https://images.unsplash.com/photo-...
4. **prod-10:** "abstract canvas wall art modern" - https://images.unsplash.com/photo-...
5. **prod-11:** "chunky knit blanket beige" - https://images.unsplash.com/photo-...
6. **prod-14:** "aviator sunglasses gold" - https://images.unsplash.com/photo-...
7. **prod-15:** "minimalist leather wallet brown" - https://images.unsplash.com/photo-...
8. **prod-16:** "yoga mat purple rolled" - https://images.unsplash.com/photo-...
9. **prod-17:** "insulated water bottle stainless" - https://images.unsplash.com/photo-...
10. **prod-18:** "resistance bands colorful set" - https://images.unsplash.com/photo-...

---

## Legacy Syntax Compliance

**CRITICAL:** All new files MUST use legacy JavaScript syntax.

**Required:**
- ✅ Use `var` (no `const`/`let`)
- ✅ Use `function` declarations (no arrow functions)
- ✅ Use string concatenation (no template literals)
- ✅ Use array methods with `function` callbacks (no arrow functions)
- ✅ Use JSDoc comments for type annotations

**Examples:**

```javascript
// ✅ CORRECT
export var ELECTRONICS_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Premium wireless headphones'
  }
];

export function getElectronicsProducts() {
  return ELECTRONICS_PRODUCTS;
}

// ❌ WRONG
export const ELECTRONICS_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Premium wireless headphones'
  }
];

export const getElectronicsProducts = () => ELECTRONICS_PRODUCTS;
```

---

## Success Criteria

- [x] 15 products total (3x growth from 5)
- [x] 5 category-specific data files created
- [x] All products share identical data structure
- [x] Main shop page displays all 15 products
- [x] Category filtering works (3 products per category)
- [x] All helper functions work correctly
- [x] Build succeeds (zero errors/warnings)
- [x] Legacy syntax compliance (100%)
- [x] Completion report created

---

## Estimated Effort

**Total Time:** ~80 minutes

| Phase | Task | Time |
|-------|------|------|
| Phase 1 | Create 5 category files | 30 min |
| Phase 2 | Update main products file | 15 min |
| Phase 3 | Update categories data | 10 min |
| Phase 4 | Testing | 15 min |
| Phase 5 | Documentation | 10 min |

---

## Related Files

**Will Create:**
- `/src/app/data/products/electronics.ts`
- `/src/app/data/products/clothing.ts`
- `/src/app/data/products/home-living.ts`
- `/src/app/data/products/accessories.ts`
- `/src/app/data/products/sports-fitness.ts`

**Will Modify:**
- `/src/app/data/products.ts` (main aggregator)
- `/src/app/data/categories.ts` (add Sports & Fitness)

**Will Reference:**
- All templates using product data (FrontPage, ArchiveProduct, SingleProduct, etc.)

---

## Next Steps

1. ✅ Create this task file ← YOU ARE HERE
2. ⏳ Create 5 category product files (Phase 1)
3. ⏳ Update main products.ts aggregator (Phase 2)
4. ⏳ Update categories.ts (Phase 3)
5. ⏳ Test all product displays (Phase 4)
6. ⏳ Create completion report (Phase 5)

---

**Status:** 🔄 Ready to begin Phase 1  
**Created:** March 10, 2026
