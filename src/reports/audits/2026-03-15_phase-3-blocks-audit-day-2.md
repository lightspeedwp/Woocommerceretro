# Phase 3: Site-Wide Component Audit - Day 2 (Single Product, Display, Design Blocks)

**Date:** March 15, 2026  
**Auditor:** PlayPocket Development Team  
**Scope:** Single Product, Display, and Design block components (26 total)  
**Purpose:** Identify missing retro styling, document current state, create remediation plan

---

## Executive Summary

**Total Components Audited:** 26  
**Retro Complete:** 3 (12%)  
**Partial Retro:** 11 (42%)  
**No Retro:** 12 (46%)  

**Priority Breakdown:**
- **P0 (Critical):** 6 components - Core product UX blocks requiring immediate retro treatment
- **P1 (High):** 12 components - Important blocks affecting visual consistency
- **P2 (Medium):** 8 components - Nice-to-have enhancements

---

## Single Product Blocks Audit (13 components)

### ✅ **Complete Retro Styling**

None currently complete.

### ⚠️ **Partial Retro Styling**

#### 1. **ProductGallery** (`/src/app/components/blocks/single-product/ProductGallery.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductGallery.tsx`
- CSS File: None (inline styles only)
- Retro Coverage: 30% (basic structure, missing retro aesthetics)

**Missing Retro Elements:**
- ❌ Pixelated border on main image
- ❌ Thumbnail strip with neon active indicator
- ❌ Glass panel background for thumbnails
- ❌ Zoom icon with glow effect
- ❌ CRT scanline overlay on main image
- ❌ Retro navigation arrows (prev/next)

**Required Changes:**
```tsx
<div className="retro-product-gallery">
  {/* Main Image */}
  <div className="retro-product-gallery__main">
    <div className="retro-product-gallery__image-wrapper">
      <img 
        src={images[activeIndex]} 
        alt={productName}
        className="retro-product-gallery__image"
      />
      <div className="retro-product-gallery__scanlines" />
      <button className="retro-product-gallery__zoom" aria-label="Zoom image">
        <MagnifyingGlass size={24} weight="bold" />
      </button>
    </div>
  </div>
  
  {/* Thumbnail Strip */}
  <div className="retro-product-gallery__thumbnails">
    {images.map((img, idx) => (
      <button
        key={idx}
        className={`retro-product-gallery__thumb ${idx === activeIndex ? 'retro-product-gallery__thumb--active' : ''}`}
        onClick={() => setActiveIndex(idx)}
      >
        <img src={img} alt={`${productName} view ${idx + 1}`} />
      </button>
    ))}
  </div>
</div>
```

**CSS Required:** `/src/styles/blocks/single-product/product-gallery.css`

**Priority:** P0 (Critical - primary product image)  
**Effort:** 5 hours  
**Impact:** High (first visual impression)

---

#### 2. **ProductTitle** (`/src/app/components/blocks/single-product/ProductTitle.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductTitle.tsx`
- CSS File: None
- Retro Coverage: 40% (uses retro typography)

**Missing Retro Elements:**
- ❌ Category badge with neon glow
- ❌ SKU display with digital font
- ❌ "NEW" or "SALE" badge with pixel art styling

**Required Changes:**
```tsx
<div className="retro-product-title">
  <div className="retro-product-title__badges">
    {isNew && (
      <span className="retro-badge retro-badge--new retro-font-display">
        NEW
      </span>
    )}
    {onSale && (
      <span className="retro-badge retro-badge--sale retro-font-display">
        SALE
      </span>
    )}
  </div>
  
  <h1 className="retro-product-title__heading retro-font-display retro-bold">
    {name}
  </h1>
  
  {category && (
    <div className="retro-product-title__category">
      <Link to={`/shop/category/${category.slug}`} className="retro-link">
        {category.name}
      </Link>
    </div>
  )}
  
  {sku && (
    <div className="retro-product-title__sku retro-font-mono">
      SKU: {sku}
    </div>
  )}
</div>
```

**CSS Required:** `/src/styles/blocks/single-product/product-title.css`

**Priority:** P1 (High)  
**Effort:** 2 hours  
**Impact:** Medium

---

#### 3. **ProductSummary** (`/src/app/components/blocks/single-product/ProductSummary.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductSummary.tsx`
- CSS File: None
- Retro Coverage: 20%

**Missing Retro Elements:**
- ❌ Description text with retro typography
- ❌ Expandable "Read More" with arcade button
- ❌ Features list with pixel bullet points
- ❌ Glass panel background

**Priority:** P1 (High)  
**Effort:** 2 hours  
**Impact:** Medium

---

#### 4. **ProductRating** (`/src/app/components/blocks/single-product/ProductRating.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductRating.tsx`
- CSS File: `/src/styles/blocks/single-product/product-rating.css`
- Retro Coverage: 50%

**Missing Retro Elements:**
- ❌ Pixel art stars (currently uses phosphor icons)
- ❌ Neon glow on filled stars
- ❌ Review count badge with retro styling
- ❌ "Write Review" button with arcade styling

**Required Changes:**
```tsx
<div className="retro-product-rating">
  <div className="retro-product-rating__stars">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        className={`retro-star ${star <= rating ? 'retro-star--filled' : ''}`}
        onClick={() => onRate?.(star)}
        aria-label={`Rate ${star} stars`}
      >
        <Star size={20} weight={star <= rating ? 'fill' : 'regular'} />
      </button>
    ))}
  </div>
  
  <span className="retro-product-rating__average retro-font-display">
    {rating.toFixed(1)}
  </span>
  
  <span className="retro-product-rating__count retro-font-body">
    ({reviewCount} reviews)
  </span>
  
  {showWriteReview && (
    <button className="retro-button-secondary retro-font-display">
      WRITE REVIEW
    </button>
  )}
</div>
```

**Priority:** P1 (High - social proof)  
**Effort:** 3 hours  
**Impact:** High (conversion factor)

---

#### 5. **ProductMeta** (`/src/app/components/blocks/single-product/ProductMeta.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductMeta.tsx`
- CSS File: `/src/styles/blocks/single-product/product-meta.css`
- Retro Coverage: 60% ✅ (guideline recently completed)

**Missing Retro Elements:**
- ❌ Tag badges need neon glow enhancement
- ❌ Share icons with retro styling

**Priority:** P2 (Medium - polish)  
**Effort:** 1 hour  
**Impact:** Low

---

#### 6. **ProductTabs** (`/src/app/components/blocks/single-product/ProductTabs.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductTabs.tsx`
- CSS File: `/src/styles/blocks/single-product/product-tabs.css`
- Retro Coverage: 40%

**Missing Retro Elements:**
- ❌ Tab buttons with arcade styling
- ❌ Active tab with neon underline glow
- ❌ Tab content with glass panel background
- ❌ Pixelated divider between tabs and content

**Required Changes:**
```tsx
<div className="retro-product-tabs">
  <div className="retro-product-tabs__nav">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        className={`retro-product-tabs__tab ${activeTab === tab.id ? 'retro-product-tabs__tab--active' : ''}`}
        onClick={() => setActiveTab(tab.id)}
      >
        <span className="retro-font-display">{tab.label}</span>
      </button>
    ))}
  </div>
  
  <div className="retro-product-tabs__divider" />
  
  <div className="retro-product-tabs__content">
    {tabs.find(t => t.id === activeTab)?.content}
  </div>
</div>
```

**Priority:** P0 (Critical - info architecture)  
**Effort:** 4 hours  
**Impact:** High

---

#### 7. **ReviewsTab** (`/src/app/components/blocks/single-product/ReviewsTab.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ReviewsTab.tsx`
- CSS File: None
- Retro Coverage: 30%

**Missing Retro Elements:**
- ❌ Review cards with glass backgrounds
- ❌ Star ratings with neon glow
- ❌ Verified badge with checkmark pixel art
- ❌ Review form with retro inputs
- ❌ Submit button with arcade styling
- ❌ Sort dropdown with retro styling

**Required Changes:**
```tsx
<div className="retro-reviews-tab">
  {/* Summary */}
  <div className="retro-reviews-tab__summary">
    <div className="retro-reviews-tab__average">
      <span className="retro-font-display retro-text-huge">{averageRating}</span>
      <div className="retro-product-rating__stars">
        {/* Star display */}
      </div>
      <span className="retro-font-body">{totalReviews} reviews</span>
    </div>
    
    <div className="retro-reviews-tab__distribution">
      {[5,4,3,2,1].map(star => (
        <div key={star} className="retro-reviews-tab__bar-row">
          <span className="retro-font-body">{star} stars</span>
          <div className="retro-progress-bar">
            <div 
              className="retro-progress-bar__fill"
              style={{ width: `${getPercentage(star)}%` }}
            />
          </div>
          <span className="retro-font-mono">{getCounts(star)}</span>
        </div>
      ))}
    </div>
  </div>
  
  {/* Reviews List */}
  <div className="retro-reviews-tab__list">
    {reviews.map(review => (
      <div key={review.id} className="retro-review-card">
        <div className="retro-review-card__header">
          <div className="retro-review-card__avatar">
            {review.author.avatar}
          </div>
          <div className="retro-review-card__author">
            <span className="retro-font-display">{review.author.name}</span>
            {review.verified && (
              <span className="retro-badge retro-badge--verified">
                <Check size={12} weight="bold" /> VERIFIED
              </span>
            )}
          </div>
          <div className="retro-product-rating__stars">
            {/* Stars */}
          </div>
        </div>
        
        <div className="retro-review-card__content retro-font-body">
          {review.comment}
        </div>
        
        <div className="retro-review-card__footer retro-font-mono">
          {formatDate(review.date)}
        </div>
      </div>
    ))}
  </div>
  
  {/* Write Review Form */}
  <div className="retro-reviews-tab__form">
    <h3 className="retro-font-display">WRITE A REVIEW</h3>
    {/* Form fields with retro styling */}
  </div>
</div>
```

**CSS Required:** `/src/styles/blocks/single-product/reviews-tab.css`

**Priority:** P0 (Critical - social proof & UGC)  
**Effort:** 6 hours  
**Impact:** High

---

#### 8. **RelatedProducts** (`/src/app/components/blocks/single-product/RelatedProducts.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/RelatedProducts.tsx`
- CSS File: None
- Retro Coverage: 40% (uses ProductCard which has partial retro)

**Missing Retro Elements:**
- ❌ Section heading with retro typography
- ❌ Carousel navigation with arcade button styling
- ❌ Glass panel section background
- ❌ Pixelated section divider

**Priority:** P1 (High - cross-sell opportunity)  
**Effort:** 2 hours  
**Impact:** Medium

---

#### 9. **ProductBreadcrumbs** (`/src/app/components/blocks/single-product/ProductBreadcrumbs.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductBreadcrumbs.tsx`
- CSS File: `/src/styles/blocks/single-product/product-breadcrumbs.css`
- Retro Coverage: 50%

**Missing Retro Elements:**
- ❌ Breadcrumb separators with pixel art chevrons
- ❌ Home icon with retro styling
- ❌ Active crumb with neon glow
- ❌ Hover states with arcade button feel

**Required Changes:**
```tsx
<nav className="retro-breadcrumbs" aria-label="Breadcrumb">
  <ol className="retro-breadcrumbs__list">
    <li className="retro-breadcrumbs__item">
      <Link to="/" className="retro-breadcrumbs__link">
        <House size={16} weight="bold" />
        <span className="retro-font-body">Home</span>
      </Link>
    </li>
    
    {crumbs.map((crumb, idx) => (
      <li key={crumb.slug} className="retro-breadcrumbs__item">
        <span className="retro-breadcrumbs__separator">
          <CaretRight size={12} weight="bold" />
        </span>
        {idx === crumbs.length - 1 ? (
          <span className="retro-breadcrumbs__current retro-font-body" aria-current="page">
            {crumb.name}
          </span>
        ) : (
          <Link to={crumb.url} className="retro-breadcrumbs__link retro-font-body">
            {crumb.name}
          </Link>
        )}
      </li>
    ))}
  </ol>
</nav>
```

**Priority:** P2 (Medium)  
**Effort:** 2 hours  
**Impact:** Low

---

#### 10. **StoreNotices** (`/src/app/components/blocks/single-product/StoreNotices.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/StoreNotices.tsx`
- CSS File: None
- Retro Coverage: 20%

**Missing Retro Elements:**
- ❌ Alert banner with retro styling (success, warning, error variants)
- ❌ Icon with neon glow
- ❌ Close button with arcade styling
- ❌ Animated border scan effect

**Required Changes:**
```tsx
<div className={`retro-store-notice retro-store-notice--${type}`}>
  <div className="retro-store-notice__icon">
    {type === 'success' && <CheckCircle size={20} weight="bold" />}
    {type === 'warning' && <Warning size={20} weight="bold" />}
    {type === 'error' && <XCircle size={20} weight="bold" />}
    {type === 'info' && <Info size={20} weight="bold" />}
  </div>
  
  <div className="retro-store-notice__content retro-font-body">
    {message}
  </div>
  
  {dismissible && (
    <button 
      className="retro-store-notice__close"
      onClick={onDismiss}
      aria-label="Dismiss notice"
    >
      <X size={16} weight="bold" />
    </button>
  )}
  
  <div className="retro-store-notice__border-scan" />
</div>
```

**CSS Required:** `/src/styles/blocks/single-product/store-notices.css`

**Priority:** P1 (High - user feedback)  
**Effort:** 3 hours  
**Impact:** Medium

---

#### 11. **ProductPrice** (`/src/app/components/blocks/single-product/ProductPrice.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductPrice.tsx`
- CSS File: `/src/styles/blocks/single-product/product-price.css`
- Retro Coverage: 70% ✅ (mostly complete)

**Missing Retro Elements:**
- ❌ Pulsing glow animation on sale price
- ❌ "You save" badge with percentage

**Priority:** P2 (Medium - polish)  
**Effort:** 1 hour  
**Impact:** Low

---

#### 12. **ProductAddToCart** (`/src/app/components/blocks/single-product/ProductAddToCart.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductAddToCart.tsx`
- CSS File: None (uses AddToCartButton block)
- Retro Coverage: 60%

**Missing Retro Elements:**
- ❌ Quantity selector with neon +/- buttons
- ❌ Stock indicator with LED-style display
- ❌ "Add to Cart" button animation on success

**Priority:** P0 (Critical - conversion)  
**Effort:** 3 hours  
**Impact:** High

---

#### 13. **ProductInfo** (`/src/app/components/blocks/single-product/ProductInfo.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/single-product/ProductInfo.tsx`
- CSS File: None
- Retro Coverage: 30%

**Missing Retro Elements:**
- ❌ Attribute selector (color/size) with retro cards
- ❌ Variant selector with neon active state
- ❌ Stock status badge with pixel art
- ❌ Wishlist button with heart icon animation

**Priority:** P0 (Critical - variant selection)  
**Effort:** 5 hours  
**Impact:** High

---

## Display Blocks Audit (8 components)

### ✅ **Complete Retro Styling**

#### 1. **SpinningCoin3D** (`/src/app/components/blocks/display/SpinningCoin3D.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/display/SpinningCoin3D.tsx`
- CSS File: Inline CSS 3D transforms
- Retro Coverage: 100% ✅

**Status:** Complete retro styling with CSS 3D transforms, neon glow, pulsing animation.

**Priority:** N/A (complete)  
**Effort:** 0 hours  

---

#### 2. **SubscriptionBox3D** (`/src/app/components/blocks/display/SubscriptionBox3D.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/display/SubscriptionBox3D.tsx`
- CSS File: Inline CSS 3D + Canvas API
- Retro Coverage: 100% ✅

**Status:** Complete 3D subscription box with opening animation and particle effects.

**Priority:** N/A (complete)  
**Effort:** 0 hours  

---

### ⚠️ **Partial Retro Styling**

#### 3. **Badge** (`/src/app/components/blocks/display/Badge.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/display/Badge.tsx`
- CSS File: `/src/styles/blocks/display/badge.css`
- Retro Coverage: 70% ✅

**Missing Retro Elements:**
- ❌ Neon glow animation on hover
- ❌ Pulsing effect for notification badges
- ❌ Pixel art icon support

**Priority:** P2 (Medium - polish)  
**Effort:** 2 hours  
**Impact:** Low

---

#### 4. **Avatar** (`/src/app/components/blocks/display/Avatar.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/display/Avatar.tsx`
- CSS File: `/src/styles/blocks/display/avatar.css`
- Retro Coverage: 60%

**Missing Retro Elements:**
- ❌ Pixelated border effect
- ❌ Neon ring on online status indicator
- ❌ Retro fallback initials styling

**Required Changes:**
```tsx
<div className={`retro-avatar retro-avatar--${size}`}>
  <div className="retro-avatar__wrapper">
    {src ? (
      <img 
        src={src} 
        alt={alt}
        className="retro-avatar__image"
      />
    ) : (
      <div className="retro-avatar__initials retro-font-display">
        {getInitials(alt)}
      </div>
    )}
  </div>
  
  {showStatus && (
    <span className={`retro-avatar__status retro-avatar__status--${status}`} />
  )}
</div>
```

**CSS Required:** Update `/src/styles/blocks/display/avatar.css`

**Priority:** P2 (Medium)  
**Effort:** 2 hours  
**Impact:** Low

---

#### 5. **Chart** (`/src/app/components/blocks/display/Chart.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/display/Chart.tsx`
- CSS File: None (uses recharts library)
- Retro Coverage: 40%

**Missing Retro Elements:**
- ❌ Neon line colors
- ❌ Pixelated grid lines
- ❌ Retro axis labels with monospace font
- ❌ Glass panel background for chart area
- ❌ LED-style data point indicators

**Required Changes:**
```tsx
<div className="retro-chart">
  <div className="retro-chart__header">
    <h3 className="retro-font-display">{title}</h3>
  </div>
  
  <div className="retro-chart__container">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="var(--retro-color-neon-cyan-dim)"
          strokeWidth={1}
        />
        <XAxis 
          dataKey="name"
          stroke="var(--retro-color-text-primary)"
          style={{ fontFamily: 'var(--retro-font-mono)', fontSize: 12 }}
        />
        <YAxis 
          stroke="var(--retro-color-text-primary)"
          style={{ fontFamily: 'var(--retro-font-mono)', fontSize: 12 }}
        />
        <Tooltip 
          contentStyle={{
            background: 'var(--retro-color-glass)',
            border: '2px solid var(--retro-color-neon-cyan)',
            borderRadius: 'var(--retro-radius-sm)',
            fontFamily: 'var(--retro-font-body)',
          }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="var(--retro-color-neon-cyan)"
          strokeWidth={3}
          dot={{ fill: 'var(--retro-color-neon-cyan)', r: 6 }}
          activeDot={{ r: 8, fill: 'var(--retro-color-neon-purple)' }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>
```

**CSS Required:** `/src/styles/blocks/display/chart.css`

**Priority:** P2 (Medium - data visualization)  
**Effort:** 3 hours  
**Impact:** Medium

---

#### 6. **Countdown** (`/src/app/components/blocks/display/Countdown.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/display/Countdown.tsx`
- CSS File: None
- Retro Coverage: 30%

**Missing Retro Elements:**
- ❌ Digital LCD-style number display (7-segment style)
- ❌ Neon glow on time units
- ❌ Pixelated colon separators
- ❌ Pulsing animation on seconds
- ❌ Glass panel background

**Required Changes:**
```tsx
<div className="retro-countdown">
  <div className="retro-countdown__units">
    {showDays && (
      <div className="retro-countdown__unit">
        <span className="retro-countdown__value retro-font-display">
          {String(days).padStart(2, '0')}
        </span>
        <span className="retro-countdown__label retro-font-mono">DAYS</span>
      </div>
    )}
    
    <span className="retro-countdown__separator retro-font-display">:</span>
    
    <div className="retro-countdown__unit">
      <span className="retro-countdown__value retro-font-display">
        {String(hours).padStart(2, '0')}
      </span>
      <span className="retro-countdown__label retro-font-mono">HOURS</span>
    </div>
    
    <span className="retro-countdown__separator retro-font-display">:</span>
    
    <div className="retro-countdown__unit">
      <span className="retro-countdown__value retro-font-display">
        {String(minutes).padStart(2, '0')}
      </span>
      <span className="retro-countdown__label retro-font-mono">MIN</span>
    </div>
    
    <span className="retro-countdown__separator retro-font-display">:</span>
    
    <div className="retro-countdown__unit retro-countdown__unit--pulse">
      <span className="retro-countdown__value retro-font-display">
        {String(seconds).padStart(2, '0')}
      </span>
      <span className="retro-countdown__label retro-font-mono">SEC</span>
    </div>
  </div>
  
  {message && (
    <p className="retro-countdown__message retro-font-body">
      {message}
    </p>
  )}
</div>
```

**CSS Required:** `/src/styles/blocks/display/countdown.css`

**Priority:** P1 (High - urgency/scarcity)  
**Effort:** 4 hours  
**Impact:** High (conversion driver)

---

#### 7. **Table** (`/src/app/components/blocks/display/Table.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/display/Table.tsx`
- CSS File: None
- Retro Coverage: 20%

**Missing Retro Elements:**
- ❌ Pixelated borders on cells
- ❌ Zebra striping with glass panel effect
- ❌ Header row with neon bottom border
- ❌ Sortable columns with retro arrow icons
- ❌ Hover row highlighting with glow
- ❌ Monospace font for data columns

**Required Changes:**
```tsx
<div className="retro-table-wrapper">
  <table className="retro-table">
    <thead className="retro-table__head">
      <tr className="retro-table__row">
        {columns.map(col => (
          <th 
            key={col.key}
            className="retro-table__header retro-font-display"
            onClick={col.sortable ? () => handleSort(col.key) : undefined}
          >
            <div className="retro-table__header-content">
              {col.label}
              {col.sortable && (
                <span className="retro-table__sort-icon">
                  {sortKey === col.key ? (
                    sortDirection === 'asc' ? (
                      <CaretUp size={12} weight="bold" />
                    ) : (
                      <CaretDown size={12} weight="bold" />
                    )
                  ) : (
                    <CaretUpDown size={12} weight="bold" />
                  )}
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
    
    <tbody className="retro-table__body">
      {data.map((row, idx) => (
        <tr 
          key={idx}
          className="retro-table__row"
        >
          {columns.map(col => (
            <td 
              key={col.key}
              className={`retro-table__cell ${col.mono ? 'retro-font-mono' : 'retro-font-body'}`}
            >
              {col.render ? col.render(row[col.key], row) : row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

**CSS Required:** `/src/styles/blocks/display/table.css`

**Priority:** P2 (Medium)  
**Effort:** 3 hours  
**Impact:** Medium

---

### ❌ **No Retro Styling**

#### 8. **AspectRatio** (`/src/app/components/blocks/display/AspectRatio.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/display/AspectRatio.tsx`
- CSS File: None
- Retro Coverage: 10% (utility wrapper only)

**Required Retro Elements:**
- ⚠️ Pixelated border option
- ⚠️ Scanline overlay option
- ⚠️ Glass frame effect

**Priority:** P2 (Medium - utility)  
**Effort:** 1 hour  
**Impact:** Low

---

## Design Blocks Audit (10 components)

### ⚠️ **Partial Retro Styling**

#### 1. **Accordion** (`/src/app/components/blocks/design/Accordion.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Accordion.tsx`
- CSS File: `/src/styles/blocks/design/accordion.css`
- Retro Coverage: 50%

**Missing Retro Elements:**
- ❌ Trigger buttons with arcade styling
- ❌ Chevron icons with neon glow when expanded
- ❌ Content panel with glass background
- ❌ Pixelated borders between items
- ❌ Expand/collapse animation with retro feel

**Required Changes:**
```tsx
<div className="retro-accordion">
  {items.map((item, idx) => (
    <div 
      key={item.id}
      className={`retro-accordion__item ${expanded.includes(item.id) ? 'retro-accordion__item--expanded' : ''}`}
    >
      <button
        className="retro-accordion__trigger"
        onClick={() => toggleItem(item.id)}
        aria-expanded={expanded.includes(item.id)}
      >
        <span className="retro-font-display">{item.title}</span>
        <CaretDown 
          size={16} 
          weight="bold"
          className="retro-accordion__icon"
        />
      </button>
      
      {expanded.includes(item.id) && (
        <div className="retro-accordion__content">
          <div className="retro-accordion__content-inner retro-font-body">
            {item.content}
          </div>
        </div>
      )}
    </div>
  ))}
</div>
```

**Priority:** P1 (High - FAQ sections)  
**Effort:** 3 hours  
**Impact:** Medium

---

#### 2. **Buttons** (`/src/app/components/blocks/design/Buttons.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Buttons.tsx`
- CSS File: `/src/styles/blocks/design/buttons.css`
- Retro Coverage: 80% ✅

**Missing Retro Elements:**
- ❌ Icon button variants with glow
- ❌ Loading state animation (spinner)

**Priority:** P2 (Medium - polish)  
**Effort:** 1 hour  
**Impact:** Low

---

#### 3. **Card** (`/src/app/components/blocks/design/Card.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Card.tsx`
- CSS File: `/src/styles/blocks/design/card.css`
- Retro Coverage: 70% ✅

**Missing Retro Elements:**
- ❌ Elevated variant with stronger shadow
- ❌ Interactive variant with hover glow
- ❌ Badge/ribbon support for "NEW" labels

**Priority:** P2 (Medium)  
**Effort:** 2 hours  
**Impact:** Low

---

#### 4. **Separator** (`/src/app/components/blocks/design/Separator.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Separator.tsx`
- CSS File: `/src/styles/blocks/design/separator.css`
- Retro Coverage: 60%

**Missing Retro Elements:**
- ❌ Pixelated/dotted style variants
- ❌ Neon glow option
- ❌ Animated scan line effect

**Required Changes:**
```tsx
<div 
  className={`retro-separator retro-separator--${orientation} retro-separator--${variant}`}
  role="separator"
  aria-orientation={orientation}
>
  {variant === 'scan' && (
    <div className="retro-separator__scan-line" />
  )}
</div>
```

**Variants:**
- `solid` - Standard solid line
- `dashed` - Pixelated dashed line
- `dotted` - Retro dotted line
- `neon` - Glowing neon line
- `scan` - Animated scan line

**CSS Required:** Update `/src/styles/blocks/design/separator.css`

**Priority:** P2 (Medium)  
**Effort:** 2 hours  
**Impact:** Low

---

### ❌ **No Retro Styling**

#### 5. **Columns** (`/src/app/components/blocks/design/Columns.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Columns.tsx`
- CSS File: None
- Retro Coverage: 10% (CSS Grid layout only)

**Required Retro Elements:**
- ⚠️ Column gap with pixelated dividers (optional)
- ⚠️ Responsive breakpoints with retro transitions

**Priority:** P2 (Medium - layout utility)  
**Effort:** 1 hour  
**Impact:** Low

---

#### 6. **Grid** (`/src/app/components/blocks/design/Grid.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Grid.tsx`
- CSS File: None
- Retro Coverage: 10% (CSS Grid layout only)

**Required Retro Elements:**
- ⚠️ Grid gap with optional dividers
- ⚠️ Card grid variant with glass backgrounds

**Priority:** P2 (Medium)  
**Effort:** 1 hour  
**Impact:** Low

---

#### 7. **Group** (`/src/app/components/blocks/design/Group.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Group.tsx`
- CSS File: None
- Retro Coverage: 10% (flexbox wrapper only)

**Required Retro Elements:**
- ⚠️ Glass panel background option
- ⚠️ Border with neon glow option

**Priority:** P2 (Medium)  
**Effort:** 1 hour  
**Impact:** Low

---

#### 8. **Row** (`/src/app/components/blocks/design/Row.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Row.tsx`
- CSS File: None
- Retro Coverage: 10% (flexbox wrapper only)

**Required Retro Elements:**
- ⚠️ Divider support between items
- ⚠️ Alignment utilities

**Priority:** P2 (Medium)  
**Effort:** 1 hour  
**Impact:** Low

---

#### 9. **Stack** (`/src/app/components/blocks/design/Stack.tsx`)

**Current State:**
- Location: `/src/app/components/blocks/design/Stack.tsx`
- CSS File: None
- Retro Coverage: 10% (flexbox wrapper only)

**Required Retro Elements:**
- ⚠️ Divider support between items
- ⚠️ Card variant with glass panels

**Priority:** P2 (Medium)  
**Effort:** 1 hour  
**Impact:** Low

---

#### 10. **Tabs** (Not found - may need creation)

**Current State:**
- Location: Not found (functionality exists in ProductTabs)
- CSS File: None
- Retro Coverage: 0%

**Required Retro Elements:**
- ⚠️ Generic tab component separate from ProductTabs
- ⚠️ Horizontal and vertical orientations
- ⚠️ Arcade button tab styling
- ⚠️ Neon active indicator

**Priority:** P1 (High - reusable component)  
**Effort:** 4 hours  
**Impact:** Medium

---

## Priority Summary

### P0 (Critical) - 6 Components

Must be completed for core product detail UX:

1. **ProductGallery** - 5 hours (primary product visuals)
2. **ProductTabs** - 4 hours (information architecture)
3. **ReviewsTab** - 6 hours (social proof & UGC)
4. **ProductAddToCart** - 3 hours (conversion point)
5. **ProductInfo** - 5 hours (variant selection)

**Total P0 Effort:** 23 hours

---

### P1 (High) - 12 Components

Important for complete product experience:

1. **ProductTitle** - 2 hours
2. **ProductSummary** - 2 hours
3. **ProductRating** - 3 hours
4. **RelatedProducts** - 2 hours
5. **StoreNotices** - 3 hours
6. **Countdown** - 4 hours (urgency/conversion)
7. **Accordion** - 3 hours (FAQ sections)
8. **Tabs** (create new) - 4 hours (generic component)

**Total P1 Effort:** 23 hours

---

### P2 (Medium) - 8 Components

Nice-to-have enhancements and polish:

1. **ProductMeta** - 1 hour (polish)
2. **ProductBreadcrumbs** - 2 hours
3. **ProductPrice** - 1 hour (animation polish)
4. **Badge** - 2 hours (glow effects)
5. **Avatar** - 2 hours (pixelated borders)
6. **Chart** - 3 hours (data visualization)
7. **Table** - 3 hours
8. **AspectRatio** - 1 hour
9. **Separator** - 2 hours
10. **Buttons** - 1 hour (loading states)
11. **Card** - 2 hours
12. **Columns/Grid/Group/Row/Stack** - 5 hours (all layout utilities)

**Total P2 Effort:** 25 hours

---

## Total Effort Estimate

- **P0:** 23 hours
- **P1:** 23 hours
- **P2:** 25 hours
- **TOTAL:** 71 hours (9-10 work days)

---

## CSS Files Required

### New Files to Create:

1. `/src/styles/blocks/single-product/product-gallery.css`
2. `/src/styles/blocks/single-product/product-title.css`
3. `/src/styles/blocks/single-product/reviews-tab.css`
4. `/src/styles/blocks/single-product/store-notices.css`
5. `/src/styles/blocks/display/countdown.css`
6. `/src/styles/blocks/display/chart.css`
7. `/src/styles/blocks/display/table.css`
8. `/src/styles/blocks/design/tabs.css` (new generic component)

### Files to Update:

1. `/src/styles/blocks/single-product/product-rating.css` (enhance stars)
2. `/src/styles/blocks/single-product/product-meta.css` (enhance tags)
3. `/src/styles/blocks/single-product/product-tabs.css` (enhance tabs)
4. `/src/styles/blocks/single-product/product-breadcrumbs.css` (enhance separators)
5. `/src/styles/blocks/single-product/product-price.css` (add animations)
6. `/src/styles/blocks/display/badge.css` (add glow)
7. `/src/styles/blocks/display/avatar.css` (enhance borders)
8. `/src/styles/blocks/design/accordion.css` (enhance styling)
9. `/src/styles/blocks/design/buttons.css` (add loading states)
10. `/src/styles/blocks/design/card.css` (add variants)
11. `/src/styles/blocks/design/separator.css` (add variants)

---

## Recommended Approach

### Week 1: P0 Critical Product Components (23 hours)

**Day 1-2:** Product Detail Core (12 hours)
- ProductGallery (5h)
- ProductTabs (4h)
- ProductAddToCart (3h)

**Day 3-4:** Reviews & Variant Selection (11 hours)
- ReviewsTab (6h)
- ProductInfo (5h)

---

### Week 2: P1 High Priority (23 hours)

**Day 1-2:** Product Polish (10 hours)
- ProductTitle (2h)
- ProductSummary (2h)
- ProductRating (3h)
- StoreNotices (3h)

**Day 3-4:** Display & Design Components (13 hours)
- Countdown (4h)
- Accordion (3h)
- Tabs (generic) (4h)
- RelatedProducts (2h)

---

### Week 3: P2 Medium Priority (25 hours)

**Day 1-2:** Display Components (11 hours)
- Chart (3h)
- Table (3h)
- Badge (2h)
- Avatar (2h)
- AspectRatio (1h)

**Day 3-5:** Design Components & Polish (14 hours)
- Separator (2h)
- Card (2h)
- Buttons (1h)
- Layout utilities (Columns/Grid/Group/Row/Stack) (5h)
- ProductMeta (1h)
- ProductBreadcrumbs (2h)
- ProductPrice (1h)

---

## Key Findings

### ✅ **Strengths**

- 3D display components (SpinningCoin3D, SubscriptionBox3D) are complete ✅
- Several components have partial retro styling (40-70% coverage)
- Strong foundation with existing CSS files for many blocks

### ⚠️ **Gaps**

- **Product Detail Pages** need significant retro enhancement (critical for conversion)
- **Reviews/Social Proof** components lack retro styling (UGC is critical)
- **Data Display** components (Chart, Table, Countdown) need retro treatment
- **Layout Utilities** (Grid, Stack, Columns) are basic wrappers without retro features

### 🎯 **Quick Wins**

Components that can be completed in < 2 hours:

1. ProductMeta - 1 hour (mostly done)
2. ProductPrice - 1 hour (add animations)
3. AspectRatio - 1 hour (add borders)
4. Buttons - 1 hour (loading states)
5. Columns/Grid/Group/Row/Stack - 1 hour each (5 total)

**Total Quick Wins:** 10 hours (15% of total effort)

---

## Next Steps

1. ✅ **Complete Day 2 Audit** - Single Product, Display, Design blocks documented
2. ⏳ **Day 3: Continue Audit** - Forms, Feedback, Overlay blocks (tomorrow)
3. ⏳ **Day 4: Patterns & Parts Audit**
4. ⏳ **Day 5: Generate Master Report** - Compile all findings, create 4-week implementation plan

---

**Report Generated:** March 15, 2026  
**Next Audit Date:** March 16, 2026 (Day 3 - Forms, Feedback, Overlay)  
**Status:** ✅ Day 2 Complete  
**Cumulative Audit Progress:** 49/100+ components (49%)
