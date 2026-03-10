# FilterSidebar Block

**Version:** 1.0  
**Type:** Block (Functional Unit)  
**WordPress Mapping:** WooCommerce Layered Nav / Product Filters  
**File:** `/components/blocks/archive/FilterSidebar.tsx`

---

## Overview

The FilterSidebar block is a comprehensive product filtering component that provides a desktop sidebar and mobile drawer interface for filtering products by availability, categories, price, color, size, and rating.

**Purpose:**
- Provide product filtering controls
- Display active filters with removal option
- Responsive mobile drawer implementation
- Handle filter state management
- Clear all filters functionality

**WordPress Equivalent:**
- WooCommerce Layered Navigation Widgets
- Product Filter Sidebar
- WooCommerce Product Filters Block

---

## Component Structure

```
FilterSidebar (Block)
├── ActiveFilters (Block)
├── FilterSection (Availability)
├── FilterSection (Categories)
├── FilterSection (Price)
├── FilterSection (Colors)
├── FilterSection (Sizes)
└── FilterSection (Rating)
```

---

## WordPress FSE Mapping

### Widget Equivalent

```php
<?php
/**
 * WooCommerce Layered Nav Widgets
 */

// Price Filter
add_filter( 'woocommerce_price_filter_widget_min_amount', 0 );
add_filter( 'woocommerce_price_filter_widget_max_amount', 500 );

// Layered Nav - Categories
$args = array(
    'taxonomy' => 'product_cat',
    'query_type' => 'and',
);
woocommerce_layered_nav_widget( $args );
?>
```

---

**Last Updated:** December 27, 2024  
**Maintainer:** WooCommerce Prototype Team  
**Status:** ✅ Production Ready
