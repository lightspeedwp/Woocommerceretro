# Search Block (SearchAutocomplete & SearchInput)

**Component Type:** Block  
**Location:** `/components/blocks/search/SearchAutocomplete.tsx`  
**WordPress Mapping:** `core/search` / `woocommerce/product-search`  
**Status:** ✅ Production Ready

---

## Overview

The Search block provides a comprehensive search experience, combining intelligent type-ahead suggestions, product previews, recent search history, and popular search terms. It serves as both the `core/search` and `woocommerce/product-search` implementation in the prototype.

---

## Key Features

### Core Functionality
- ✅ **Type-ahead Search** - Debounced search with 300ms delay
- ✅ **Product Previews** - Shows top 5 matching products with images
- ✅ **Recent Searches** - localStorage-persisted search history (max 5)
- ✅ **Popular Searches** - Predefined trending search terms
- ✅ **Keyboard Navigation** - Full arrow key, Enter, Escape support
- ✅ **Click Outside** - Auto-closes dropdown when clicking outside
- ✅ **Clear Button** - X icon to clear current input
- ✅ **Mobile Optimized** - Responsive dropdown layout

### User Experience
- ✅ **Visual Feedback** - Highlighted suggestions on hover/keyboard nav
- ✅ **Empty States** - Helpful messaging when no results found
- ✅ **Auto-focus** - Optional auto-focus on mount
- ✅ **Smooth Transitions** - Polished dropdown animations
- ✅ **Dark Mode** - Complete theming support
- ✅ **Accessibility** - WCAG 2.1 AA compliant

---

## Component API

### Props

```tsx
interface SearchAutocompleteProps {
  placeholder?: string;      // Input placeholder text (default: "Search products...")
  onSearch?: (query: string) => void;  // Callback when search is submitted
  className?: string;         // Additional CSS classes
  autoFocus?: boolean;        // Auto-focus input on mount (default: false)
}
```

### Usage Examples

#### Example 1: Basic Usage (Header)
```tsx
import { SearchAutocomplete } from './components/blocks/search/SearchAutocomplete';

<SearchAutocomplete 
  placeholder="Search products..."
  onSearch={(query) => navigate(`/shop?search=${query}`)}
/>
```

#### Example 2: Search Page (Auto-focus)
```tsx
<SearchAutocomplete 
  placeholder="What are you looking for?"
  autoFocus
  onSearch={(query) => setSearchParams({ search: query })}
/>
```

---

## Visual Structure

### Dropdown Layout

```
┌────────────────────────────────────────┐
│ [🔍] Search input...            [✕]    │
└────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────┐
│ RECENT SEARCHES              [Clear]   │
│ ⏰ wireless headphones                 │
│ ⏰ leather bags                        │
│                                        │
│ POPULAR SEARCHES                       │
│ 📈 Watches                             │
│ 📈 Headphones                          │
│ 📈 Summer Collection                   │
└────────────────────────────────────────┘
```

**When Typing:**
```
┌────────────────────────────────────────┐
│ [🔍] watch                      [✕]    │
└────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────┐
│ PRODUCTS (3)                           │
│ ┌────────────────────────────────────┐ │
│ │ [img] Smart Watch Pro      $299.00 │ │
│ │       Watches                      │ │
│ └────────────────────────────────────┘ │
│                                        │
│ See all results for "watch"      →    │
└────────────────────────────────────────┘
```

---

## Keyboard Navigation

### Supported Keys

| Key | Action |
|-----|--------|
| **Arrow Down** | Move to next suggestion (highlights) |
| **Arrow Up** | Move to previous suggestion |
| **Enter** | Select highlighted suggestion or submit search |
| **Escape** | Close dropdown |
| **Tab** | Close dropdown and move focus to next element |

---

## Accessibility

### ARIA Attributes

```tsx
<input
  role="combobox"
  aria-expanded={isOpen}
  aria-autocomplete="list"
  aria-controls="search-dropdown"
  aria-activedescendant={highlightedIndex >= 0 ? `search-option-${highlightedIndex}` : undefined}
/>

<div
  id="search-dropdown"
  role="listbox"
>
  <Link
    id="search-option-0"
    role="option"
    aria-selected={highlightedIndex === 0}
  />
</div>
```

### Screen Reader
- Announces dropdown state (open/closed)
- Announces active suggestion
- Announces results count
- Announces no results state

---

## Dark Mode Support

### Color Tokens

```css
/* Input */
bg-white dark:bg-[#1a1a1a]
text-gray-900 dark:text-gray-50
border-gray-300 dark:border-gray-600

/* Dropdown */
bg-white dark:bg-[#1a1a1a]
border-gray-200 dark:border-gray-700

/* Hover States */
hover:bg-gray-50 dark:hover:bg-gray-800

/* Icons */
text-gray-400 dark:text-gray-500
```

---

## Related Components

- **Header**: Contains SearchInput in navigation
- **SearchOverlay**: Full-screen search for mobile
- **ProductCard**: Displays in search results

---

**Status:** ✅ Production Ready
