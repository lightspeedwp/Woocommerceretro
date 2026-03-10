# Prompt Generation Guidelines

**Version:** 1.0  
**Date:** January 10, 2026  
**Status:** Active  
**Category:** Process Guidelines

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prompt Directory Structure](#prompt-directory-structure)
3. [Naming Conventions](#naming-conventions)
4. [Prompt Types](#prompt-types)
5. [Prompt Template Structure](#prompt-template-structure)
6. [Writing Standards](#writing-standards)
7. [File Organization](#file-organization)
8. [Examples](#examples)
9. [Quality Checklist](#quality-checklist)

---

## 1. Overview

### 1.1 Purpose

These guidelines establish standards for creating, organizing, and maintaining AI prompts for the WooCommerce prototype project. All prompts must be stored in the `/prompts/` directory with proper naming conventions and structure.

### 1.2 Scope

This document covers:
- Prompt directory structure and organization
- File naming conventions
- Prompt types and categories
- Template structures
- Writing best practices
- Quality standards

### 1.3 When to Create Prompts

Create prompts when:
- ✅ Documenting repeatable AI workflows
- ✅ Establishing component generation patterns
- ✅ Creating testing procedures
- ✅ Defining audit processes
- ✅ Standardizing refactoring tasks
- ✅ Archiving successful interaction patterns

---

## 2. Prompt Directory Structure

### 2.1 Root Directory

**Location:** `/prompts/`

All prompts MUST be stored in this directory. Never store prompts in:
- ❌ Project root (`/`)
- ❌ Guidelines directory (`/guidelines/`)
- ❌ Source code directories (`/src/`)
- ❌ Documentation directories (`/docs/`)

### 2.2 Folder Structure

```
/prompts/
├── components/              # Component generation prompts
│   ├── blocks/             # Block component prompts
│   ├── patterns/           # Pattern component prompts
│   ├── parts/              # Global parts prompts
│   └── common/             # Common component prompts
│
├── templates/              # Template generation prompts
│   ├── pages/              # Page template prompts
│   ├── archives/           # Archive template prompts
│   └── single/             # Single item template prompts
│
├── testing/                # Testing-related prompts
│   ├── unit-tests/         # Unit test generation
│   ├── integration-tests/  # Integration test prompts
│   └── accessibility/      # A11y testing prompts
│
├── audits/                 # Audit procedure prompts
│   ├── accessibility/      # WCAG audit prompts
│   ├── performance/        # Performance audit prompts
│   ├── code-quality/       # Code quality audit prompts
│   └── compliance/         # Standards compliance prompts
│
├── refactoring/            # Refactoring task prompts
│   ├── css-migration/      # CSS refactoring prompts
│   ├── component-updates/  # Component refactoring
│   └── architecture/       # Architecture refactoring
│
├── documentation/          # Documentation generation prompts
│   ├── components/         # Component doc prompts
│   ├── guidelines/         # Guideline creation prompts
│   └── reports/            # Report generation prompts
│
├── workflows/              # Complete workflow prompts
│   ├── feature-complete/   # End-to-end feature prompts
│   ├── bugfix/             # Bug fixing workflows
│   └── optimization/       # Optimization workflows
│
└── archive/                # Archived/deprecated prompts
    └── YYYY-MM/            # Organized by year-month
```

---

## 3. Naming Conventions

### 3.1 File Naming Pattern

**Format:** `<category>_<action>_<target>_<version>.md`

**Rules:**
- ✅ Use lowercase
- ✅ Use underscores (`_`) to separate parts
- ✅ Use hyphens (`-`) within multi-word parts
- ✅ Include version number (v1, v2, etc.)
- ✅ Use `.md` extension (Markdown)
- ❌ No spaces in filenames
- ❌ No special characters except `_` and `-`

### 3.2 Naming Components

#### **Category** (Type of prompt)

| Category | Usage | Example |
|----------|-------|---------|
| `component` | Component generation | `component_create_product-card_v1.md` |
| `template` | Template generation | `template_create_archive_v1.md` |
| `test` | Test generation | `test_write_unit-tests_v1.md` |
| `audit` | Audit procedures | `audit_wcag_contrast_v1.md` |
| `refactor` | Refactoring tasks | `refactor_css_tailwind-to-wordpress_v1.md` |
| `docs` | Documentation | `docs_write_component-guideline_v1.md` |
| `workflow` | Complete workflows | `workflow_feature_subscription-system_v1.md` |

#### **Action** (What the prompt does)

| Action | Usage | Example |
|--------|-------|---------|
| `create` | Generate new code | `component_create_hero_v1.md` |
| `update` | Modify existing code | `component_update_header_v1.md` |
| `audit` | Review/analyze code | `audit_wcag_color-contrast_v1.md` |
| `test` | Generate tests | `test_write_integration_v1.md` |
| `refactor` | Restructure code | `refactor_css_migration_v1.md` |
| `fix` | Bug fixing | `workflow_fix_mobile-nav_v1.md` |
| `optimize` | Performance improvements | `workflow_optimize_images_v1.md` |
| `document` | Write documentation | `docs_write_readme_v1.md` |

#### **Target** (What the prompt acts on)

Use descriptive, hyphenated names:
- `product-card`
- `checkout-form`
- `mobile-navigation`
- `wcag-contrast`
- `touch-targets`

#### **Version** (Iteration number)

- Start with `v1`
- Increment for each revision: `v2`, `v3`, etc.
- Keep previous versions in `/prompts/archive/`

### 3.3 Examples of Correct Naming

✅ **Correct:**
```
component_create_product-card_v1.md
template_create_archive-product_v1.md
test_write_unit-tests_product-card_v1.md
audit_wcag_color-contrast_v2.md
refactor_css_tailwind-to-wordpress_v1.md
workflow_feature_subscription-system_v1.md
docs_write_component-guideline_header_v1.md
```

❌ **Incorrect:**
```
ProductCard.md                          # Missing structure
create product card v1.md               # Spaces instead of underscores
component-create-product-card-v1.md     # Hyphens instead of underscores
Component_Create_ProductCard_V1.md      # Capital letters
product_card_prompt.md                  # Missing category and action
component_create_productcard.md         # Missing version
```

---

## 4. Prompt Types

### 4.1 Component Generation Prompts

**Purpose:** Generate new React components following project architecture

**Location:** `/prompts/components/`

**Must Include:**
- Component type (block/pattern/part/common)
- Props interface definition
- WordPress block alignment
- Dark mode requirements
- Accessibility standards
- Testing requirements

**Example:** `/prompts/components/blocks/component_create_product-card_v1.md`

---

### 4.2 Template Generation Prompts

**Purpose:** Generate full page templates

**Location:** `/prompts/templates/`

**Must Include:**
- Template type (page/archive/single)
- Layout structure
- Required parts and patterns
- SEO requirements
- Responsive behavior
- WordPress mapping

**Example:** `/prompts/templates/pages/template_create_archive-product_v1.md`

---

### 4.3 Testing Prompts

**Purpose:** Generate test files and test cases

**Location:** `/prompts/testing/`

**Must Include:**
- Test type (unit/integration/accessibility)
- Test framework (Jest/React Testing Library)
- Coverage requirements
- Test scenarios
- Mock data requirements

**Example:** `/prompts/testing/unit-tests/test_write_unit-tests_product-card_v1.md`

---

### 4.4 Audit Prompts

**Purpose:** Define audit procedures and checklists

**Location:** `/prompts/audits/`

**Must Include:**
- Audit type (accessibility/performance/quality)
- Audit criteria
- Standards reference (WCAG/Performance metrics)
- Report format
- Pass/fail criteria

**Example:** `/prompts/audits/accessibility/audit_wcag_color-contrast_v1.md`

---

### 4.5 Refactoring Prompts

**Purpose:** Guide code restructuring and improvements

**Location:** `/prompts/refactoring/`

**Must Include:**
- Current state description
- Target state description
- Migration strategy
- Backwards compatibility
- Testing requirements
- Rollback plan

**Example:** `/prompts/refactoring/css-migration/refactor_css_tailwind-to-wordpress_v1.md`

---

### 4.6 Documentation Prompts

**Purpose:** Generate documentation and guidelines

**Location:** `/prompts/documentation/`

**Must Include:**
- Documentation type (guideline/readme/report)
- Template structure
- Required sections
- Examples
- Writing standards reference

**Example:** `/prompts/documentation/components/docs_write_component-guideline_v1.md`

---

### 4.7 Workflow Prompts

**Purpose:** Complete end-to-end workflows combining multiple tasks

**Location:** `/prompts/workflows/`

**Must Include:**
- Workflow steps (sequential)
- Dependencies between steps
- Expected outputs
- Success criteria
- Error handling

**Example:** `/prompts/workflows/feature-complete/workflow_feature_subscription-system_v1.md`

---

## 5. Prompt Template Structure

### 5.1 Standard Template

Every prompt MUST follow this structure:

```markdown
# [Prompt Title]

**Version:** [version number]  
**Date Created:** [YYYY-MM-DD]  
**Last Updated:** [YYYY-MM-DD]  
**Category:** [component/template/test/audit/refactor/docs/workflow]  
**Status:** [Active/Deprecated/Draft]

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | [Component/Template/Test/Audit/Refactor/Documentation/Workflow] |
| **Target** | [What this prompt generates/modifies] |
| **Complexity** | [Simple/Medium/Complex] |
| **Estimated Time** | [Time to complete] |
| **Prerequisites** | [Required files/knowledge] |
| **Output Files** | [List of files created/modified] |

---

## 🎯 Objective

[Clear, concise description of what this prompt accomplishes]

### What This Prompt Does:
- ✅ [Action 1]
- ✅ [Action 2]
- ✅ [Action 3]

### What This Prompt Does NOT Do:
- ❌ [Out of scope 1]
- ❌ [Out of scope 2]

---

## 📚 Context & Background

[Provide necessary background information]

### Project Architecture:
[Relevant architecture details]

### Related Guidelines:
- [Link to relevant guideline 1]
- [Link to relevant guideline 2]

### Related Components:
- [Related component 1]
- [Related component 2]

---

## 📋 Requirements

### Functional Requirements:
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]

### Technical Requirements:
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]

### Accessibility Requirements:
1. [WCAG requirement 1]
2. [WCAG requirement 2]

### Dark Mode Requirements:
1. [Dark mode requirement 1]
2. [Dark mode requirement 2]

---

## 🔧 Implementation Instructions

### Step 1: [Step Name]

**Action:** [What to do]

**Details:**
[Detailed instructions]

**Code Example:**
```tsx
[Code example]
```

**Success Criteria:**
- ✅ [Criterion 1]
- ✅ [Criterion 2]

---

### Step 2: [Step Name]

[Repeat structure]

---

## 📝 Expected Output

### Files Created:
```
/path/to/file1.tsx
/path/to/file2.tsx
```

### Files Modified:
```
/path/to/existing-file.tsx
```

### Output Format:
[Description of expected output]

---

## ✅ Verification Checklist

Before considering the prompt complete, verify:

**Code Quality:**
- [ ] [Check 1]
- [ ] [Check 2]

**Functionality:**
- [ ] [Check 1]
- [ ] [Check 2]

**Accessibility:**
- [ ] [Check 1]
- [ ] [Check 2]

**Dark Mode:**
- [ ] [Check 1]
- [ ] [Check 2]

**Testing:**
- [ ] [Check 1]
- [ ] [Check 2]

---

## 🧪 Testing Instructions

### Manual Testing:
1. [Test step 1]
2. [Test step 2]

### Automated Testing:
```bash
[Test commands]
```

---

## 📖 Related Documentation

- [Related guideline 1]
- [Related component doc 1]
- [Related prompt 1]

---

## 🔄 Version History

### v1.0 (YYYY-MM-DD)
- Initial version
- [Change 1]
- [Change 2]

---

## 📝 Notes & Tips

### Common Issues:
- ⚠️ [Issue 1 and solution]
- ⚠️ [Issue 2 and solution]

### Best Practices:
- 💡 [Tip 1]
- 💡 [Tip 2]

---

**Created By:** [Author]  
**Reviewed By:** [Reviewer]  
**Status:** Active
```

---

## 6. Writing Standards

### 6.1 Language & Style

**Tone:**
- ✅ Clear and direct
- ✅ Technical but accessible
- ✅ Imperative mood for instructions ("Create...", "Add...", "Verify...")
- ❌ Avoid passive voice
- ❌ Avoid ambiguity

**Formatting:**
- ✅ Use Markdown formatting
- ✅ Use headers for structure (##, ###)
- ✅ Use bullet points for lists
- ✅ Use code blocks for examples
- ✅ Use tables for structured data
- ✅ Use emojis for visual markers (✅ ❌ ⚠️ 💡 📋 🎯)

### 6.2 Code Examples

**All code examples must:**
- ✅ Be complete and runnable
- ✅ Follow project conventions
- ✅ Include type annotations (TypeScript)
- ✅ Include comments where necessary
- ✅ Show both light and dark mode
- ✅ Include accessibility attributes

**Example:**
```tsx
/**
 * ProductCard Component
 * 
 * Displays a single product with image, title, price, and add to cart button.
 * 
 * @param {ProductCardProps} props - Component props
 * @returns {JSX.Element}
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title}
        className="product-card__image"
      />
      <h3 className="product-card__title">{product.title}</h3>
      <span className="product-card__price">${product.price}</span>
      <button 
        className="product-card__button"
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};
```

### 6.3 Requirement Specificity

**Be specific about:**
- ✅ Exact file paths
- ✅ Exact component names
- ✅ Exact prop interfaces
- ✅ Exact CSS class names
- ✅ Exact WordPress mappings
- ✅ Exact WCAG criteria

**Avoid vague language:**
- ❌ "Make it accessible" → ✅ "Add aria-label to icon-only buttons"
- ❌ "Style it properly" → ✅ "Use .product-card class with padding: 16px"
- ❌ "Add dark mode" → ✅ "Add dark:bg-gray-900 class for background"

### 6.4 Success Criteria

**Every step must have clear success criteria:**

```markdown
**Success Criteria:**
- ✅ Component renders without errors
- ✅ All props are properly typed
- ✅ Dark mode classes are applied
- ✅ ARIA labels are present
- ✅ Component passes Jest tests
```

---

## 7. File Organization

### 7.1 Grouping Related Prompts

**When to group:**
- Same component/feature
- Sequential workflow steps
- Related refactoring tasks

**Example structure:**
```
/prompts/components/blocks/product-card/
├── component_create_product-card_v1.md
├── test_write_unit-tests_product-card_v1.md
├── docs_write_guideline_product-card_v1.md
└── refactor_update_product-card_dark-mode_v1.md
```

### 7.2 Archive Management

**When to archive:**
- Prompt is superseded by new version
- Prompt is no longer relevant
- Component/feature is deprecated

**Archive structure:**
```
/prompts/archive/
├── 2026-01/                    # Month archived
│   ├── component_create_old-card_v1.md
│   └── README.md               # Archive index
└── 2025-12/
    └── ...
```

**Archive README format:**
```markdown
# Archived Prompts - January 2026

## Reason for Archive
[Why these prompts were archived]

## Prompts Archived

### component_create_old-card_v1.md
- **Archived:** 2026-01-10
- **Reason:** Replaced by component_create_product-card_v2.md
- **Superseded By:** /prompts/components/blocks/component_create_product-card_v2.md
```

### 7.3 Index Files

**Create index files for large directories:**

**Location:** `/prompts/[category]/README.md`

**Format:**
```markdown
# [Category] Prompts Index

**Last Updated:** YYYY-MM-DD

## Available Prompts

### Active Prompts

| Prompt | Version | Target | Complexity | Status |
|--------|---------|--------|------------|--------|
| component_create_product-card | v2 | ProductCard | Medium | Active |
| component_create_hero | v1 | Hero | Complex | Active |

### Deprecated Prompts

| Prompt | Version | Reason | Replacement |
|--------|---------|--------|-------------|
| component_create_old-card | v1 | Outdated | component_create_product-card_v2 |

## Quick Start

[How to use prompts in this category]
```

---

## 8. Examples

### 8.1 Component Creation Prompt Example

**File:** `/prompts/components/blocks/component_create_product-card_v1.md`

```markdown
# Create Product Card Component

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Category:** Component  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Block Component |
| **Target** | ProductCard.tsx |
| **Complexity** | Medium |
| **Estimated Time** | 45 minutes |
| **Prerequisites** | Guidelines.md, ProductCard.md guideline |
| **Output Files** | ProductCard.tsx, ProductCard.test.tsx |

---

## 🎯 Objective

Create a reusable ProductCard component that displays product information in a grid layout with full dark mode and accessibility support.

### What This Prompt Does:
- ✅ Creates ProductCard component with TypeScript
- ✅ Implements WordPress block class naming
- ✅ Adds complete dark mode support
- ✅ Ensures WCAG AA compliance
- ✅ Generates corresponding Jest test file

### What This Prompt Does NOT Do:
- ❌ Create product detail page
- ❌ Implement add to cart functionality
- ❌ Handle product state management

---

## 📚 Context & Background

### Project Architecture:
- Location: `/src/app/components/blocks/ProductCard.tsx`
- Type: WordPress Block (WooCommerce product card)
- Usage: Product grids, archives, related products

### Related Guidelines:
- `/guidelines/Guidelines.md` - Main guidelines
- `/guidelines/blocks/ProductCard.md` - Component-specific guideline

### Related Components:
- PriceDisplay - For price formatting
- AddToCartButton - For cart actions
- Badge - For sale/featured badges

---

## 📋 Requirements

### Functional Requirements:
1. Display product image with lazy loading
2. Display product title as h3
3. Display formatted price
4. Show sale badge when on sale
5. Display product rating
6. Link to product detail page

### Technical Requirements:
1. TypeScript with proper interfaces
2. WordPress class naming: `.wc-block-product-card`
3. Import from `@/components/blocks/`
4. Use React Router Link for navigation
5. Lazy load images with loading="lazy"

### Accessibility Requirements:
1. WCAG AA color contrast (4.5:1 minimum)
2. Alt text for images
3. Semantic heading hierarchy
4. Focus states on all interactive elements
5. Screen reader-friendly price announcements

### Dark Mode Requirements:
1. Dark background: `dark:bg-[#1a1a1a]`
2. Dark text: `dark:text-gray-50`
3. Dark borders: `dark:border-gray-700`
4. All hover states must work in dark mode

---

## 🔧 Implementation Instructions

### Step 1: Create Component File

**Action:** Create `/src/app/components/blocks/ProductCard.tsx`

**Code:**
```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from '@phosphor-icons/react';

/**
 * ProductCard Component
 * 
 * WordPress WooCommerce Product Card Block
 * Displays product preview in grid layouts
 */
interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    title: string;
    image: string;
    price: number;
    salePrice?: number;
    rating: number;
    onSale: boolean;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.slug}`}
      className="wc-block-product-card"
    >
      {/* Image */}
      <div className="wc-block-product-card__image-wrapper">
        <img 
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="wc-block-product-card__image"
        />
        {product.onSale && (
          <span className="wc-block-product-card__badge">
            Sale
          </span>
        )}
      </div>

      {/* Content */}
      <div className="wc-block-product-card__content">
        <h3 className="wc-block-product-card__title">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="wc-block-product-card__rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < product.rating ? 'filled' : 'empty'}
            />
          ))}
        </div>

        {/* Price */}
        <div className="wc-block-product-card__price">
          {product.salePrice ? (
            <>
              <span className="wc-block-product-card__price--sale">
                ${product.salePrice.toFixed(2)}
              </span>
              <span className="wc-block-product-card__price--original">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span>${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};
```

**Success Criteria:**
- ✅ File created at correct path
- ✅ TypeScript interface defined
- ✅ WordPress class names used
- ✅ All required props included

---

### Step 2: Add CSS Styles

**Action:** Add styles to `/src/styles/globals.css`

**Code:**
```css
/* Product Card */
.wc-block-product-card {
  display: block;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  text-decoration: none;
}

.wc-block-product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

/* Image */
.wc-block-product-card__image-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.wc-block-product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Badge */
.wc-block-product-card__badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--color-error);
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

/* Content */
.wc-block-product-card__content {
  padding: 16px;
}

.wc-block-product-card__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

/* Rating */
.wc-block-product-card__rating {
  display: flex;
  gap: 2px;
  margin-bottom: 12px;
}

.wc-block-product-card__rating .filled {
  fill: var(--color-primary);
  color: var(--color-primary);
}

.wc-block-product-card__rating .empty {
  fill: none;
  color: var(--color-border);
}

/* Price */
.wc-block-product-card__price {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
}

.wc-block-product-card__price--sale {
  color: var(--color-error);
  margin-right: 8px;
}

.wc-block-product-card__price--original {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-muted);
  text-decoration: line-through;
}
```

**Success Criteria:**
- ✅ CSS added to globals.css
- ✅ CSS variables used
- ✅ Dark mode handled via variables
- ✅ Hover states defined

---

### Step 3: Create Test File

**Action:** Create `/src/app/components/blocks/ProductCard.test.tsx`

**Code:**
```tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from './ProductCard';

const mockProduct = {
  id: '1',
  slug: 'test-product',
  title: 'Test Product',
  image: '/test.jpg',
  price: 99.99,
  rating: 4,
  onSale: false,
};

describe('ProductCard', () => {
  it('renders product information', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

  it('displays sale badge when on sale', () => {
    const saleProduct = { ...mockProduct, onSale: true, salePrice: 79.99 };
    
    render(
      <BrowserRouter>
        <ProductCard product={saleProduct} />
      </BrowserRouter>
    );

    expect(screen.getByText('Sale')).toBeInTheDocument();
    expect(screen.getByText('$79.99')).toBeInTheDocument();
  });

  it('links to product detail page', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/test-product');
  });
});
```

**Success Criteria:**
- ✅ Test file created
- ✅ All render tests pass
- ✅ Sale badge test passes
- ✅ Link navigation test passes

---

## ✅ Verification Checklist

**Code Quality:**
- [ ] TypeScript interfaces defined
- [ ] No ESLint errors
- [ ] WordPress class naming used
- [ ] Component exported correctly

**Functionality:**
- [ ] Product displays correctly
- [ ] Link navigates to detail page
- [ ] Sale badge shows when on sale
- [ ] Rating displays correctly

**Accessibility:**
- [ ] Image has alt text
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA
- [ ] Semantic HTML used

**Dark Mode:**
- [ ] Background adapts to dark mode
- [ ] Text readable in dark mode
- [ ] Borders visible in dark mode
- [ ] Hover states work in dark mode

**Testing:**
- [ ] All tests pass
- [ ] Test coverage ≥ 80%
- [ ] Edge cases tested

---

## 🧪 Testing Instructions

### Manual Testing:
1. Start dev server: `npm run dev`
2. Navigate to `/shop`
3. Verify product cards display
4. Toggle dark mode
5. Test hover states
6. Test link navigation

### Automated Testing:
```bash
npm test ProductCard.test.tsx
```

---

## 📖 Related Documentation

- `/guidelines/Guidelines.md` - Main guidelines
- `/guidelines/blocks/ProductCard.md` - Component guideline
- `/guidelines/design-tokens/colors.md` - Color standards

---

## 🔄 Version History

### v1.0 (2026-01-10)
- Initial version
- Full TypeScript implementation
- Complete dark mode support
- WCAG AA compliance
- Jest tests included

---

**Created By:** Development Team  
**Status:** Active
```

---

### 8.2 Audit Prompt Example

**File:** `/prompts/audits/accessibility/audit_wcag_color-contrast_v1.md`

```markdown
# WCAG Color Contrast Audit

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Category:** Audit  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Accessibility Audit |
| **Target** | All components with text/background colors |
| **Complexity** | Medium |
| **Estimated Time** | 2-3 hours |
| **Prerequisites** | WCAG 2.1 guidelines knowledge |
| **Output Files** | audit report in `/reports/audits/` |

---

## 🎯 Objective

Perform a comprehensive WCAG 2.1 color contrast audit across all components to ensure AA compliance (minimum 4.5:1 for normal text, 3:1 for large text).

### What This Audit Does:
- ✅ Tests all text/background color combinations
- ✅ Verifies WCAG AA compliance (4.5:1)
- ✅ Identifies AAA opportunities (7:1)
- ✅ Tests both light and dark modes
- ✅ Generates detailed report with fixes

### What This Audit Does NOT Do:
- ❌ Test interactive element contrast (separate audit)
- ❌ Test image contrast
- ❌ Fix issues (only report them)

---

## 📋 Requirements

### WCAG Standards:
1. **AA Normal Text:** 4.5:1 contrast ratio
2. **AA Large Text:** 3:1 contrast ratio (18pt+ or 14pt bold+)
3. **AAA Normal Text:** 7:1 contrast ratio (optional)
4. **AAA Large Text:** 4.5:1 contrast ratio (optional)

### Test Coverage:
1. All body text colors
2. All heading colors
3. All link colors
4. All button text colors
5. All form label colors
6. All alert/notification colors
7. All badge/tag colors
8. All placeholder text colors

### Both Modes:
1. Light mode contrast
2. Dark mode contrast

---

## 🔧 Audit Instructions

### Step 1: Identify Color Combinations

**Action:** List all text/background color combinations

**Process:**
1. Open `/src/styles/theme-variables.css`
2. List all `--color-*` variables
3. Identify pairings (text on background)
4. Document in table format

**Example Table:**
| Element | Light BG | Light Text | Dark BG | Dark Text |
|---------|----------|------------|---------|-----------|
| Body | #ffffff | #1a1a1a | #0f0f0f | #f9fafb |
| Primary Button | #000000 | #ffffff | #f9fafb | #111827 |
| Success Alert | #10b981 | #ffffff | #10b981 | #ffffff |

---

### Step 2: Test Contrast Ratios

**Action:** Use WebAIM Contrast Checker or DevTools

**Tools:**
- WebAIM: https://webaim.org/resources/contrastchecker/
- Chrome DevTools: Lighthouse accessibility audit
- axe DevTools extension

**For each combination:**
1. Input foreground color
2. Input background color
3. Record contrast ratio
4. Record WCAG level (AA/AAA/Fail)

**Example Results:**
```
Body text (light mode): #1a1a1a on #ffffff
- Contrast: 15.8:1
- WCAG AA: ✅ Pass
- WCAG AAA: ✅ Pass

Success button (light mode): #ffffff on #10b981
- Contrast: 3.1:1
- WCAG AA: ❌ Fail
- WCAG AAA: ❌ Fail
```

---

### Step 3: Compile Failures

**Action:** Create comprehensive list of all failures

**Format:**
```markdown
## Failures

### Critical (WCAG AA Failures)

#### 1. Success Button Text
- **Location:** Primary success buttons
- **Current:** #ffffff on #10b981 (3.1:1)
- **Required:** 4.5:1
- **Status:** ❌ FAIL
- **Recommended Fix:** Use #047857 (green-700) = 5.2:1 ✅
```

---

### Step 4: Generate Audit Report

**Action:** Create detailed report at `/reports/audits/YYYY-MM-DD_wcag-contrast-audit.md`

**Report Structure:**
1. Executive Summary
2. Methodology
3. Test Results (all combinations)
4. Failures (critical issues)
5. Recommendations
6. Implementation Guide
7. Re-test Checklist

---

## ✅ Verification Checklist

**Audit Completeness:**
- [ ] All color combinations tested
- [ ] Both light and dark modes tested
- [ ] All WCAG levels documented
- [ ] Failures clearly identified
- [ ] Fixes recommended for each failure

**Report Quality:**
- [ ] Executive summary included
- [ ] All data tables complete
- [ ] Recommendations actionable
- [ ] Examples included
- [ ] Re-test checklist provided

---

## 📝 Expected Output

### Report File:
```
/reports/audits/2026-01-10_wcag-contrast-audit.md
```

### Report Sections:
1. **Executive Summary** - High-level overview
2. **Methodology** - How audit was conducted
3. **Complete Test Results** - All combinations tested
4. **Critical Failures** - WCAG AA failures
5. **AAA Opportunities** - Improvements for AAA
6. **Recommendations** - Prioritized fixes
7. **Implementation Guide** - How to fix
8. **Re-test Checklist** - Verification steps

---

## 🧪 Testing Instructions

### Verification:
1. Review report completeness
2. Spot-check 5 random contrast ratios
3. Verify all failures have recommended fixes
4. Ensure both modes tested

---

## 📖 Related Documentation

- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- `/guidelines/design-tokens/colors.md`

---

**Created By:** Development Team  
**Status:** Active
```

---

## 9. Quality Checklist

### 9.1 Before Publishing a Prompt

**Metadata:**
- [ ] Title is clear and descriptive
- [ ] Version number included
- [ ] Date created/updated
- [ ] Category specified
- [ ] Status indicated (Active/Draft/Deprecated)

**Structure:**
- [ ] Follows standard template
- [ ] All sections included
- [ ] Headers properly nested
- [ ] Table of contents (if >5 sections)

**Content:**
- [ ] Objective is clear
- [ ] Requirements are specific
- [ ] Instructions are step-by-step
- [ ] Code examples are complete
- [ ] Success criteria defined
- [ ] Verification checklist included

**Quality:**
- [ ] No typos or grammar errors
- [ ] Links are valid
- [ ] File paths are correct
- [ ] Code examples are tested
- [ ] Dark mode considered
- [ ] Accessibility included

**Naming:**
- [ ] Filename follows convention
- [ ] Version number in filename
- [ ] Stored in correct directory
- [ ] README updated (if applicable)

---

### 9.2 Prompt Review Checklist

**Clarity:**
- [ ] Instructions are unambiguous
- [ ] Technical terms defined
- [ ] Examples illustrate concepts
- [ ] Prerequisites listed

**Completeness:**
- [ ] All steps documented
- [ ] Edge cases addressed
- [ ] Error handling included
- [ ] Rollback plan provided

**Usability:**
- [ ] AI can follow instructions
- [ ] Human can understand output
- [ ] Success criteria measurable
- [ ] Testing instructions clear

**Maintainability:**
- [ ] Version controlled
- [ ] Related prompts linked
- [ ] Deprecation path defined
- [ ] Archive process documented

---

## 10. Best Practices

### 10.1 Do's ✅

1. **Be Specific:**
   - Provide exact file paths
   - Use exact component names
   - Specify exact requirements

2. **Include Examples:**
   - Show correct implementation
   - Show incorrect implementation
   - Provide complete code samples

3. **Consider Edge Cases:**
   - Empty states
   - Error states
   - Loading states
   - Mobile viewport
   - Dark mode

4. **Link Related Resources:**
   - Link to guidelines
   - Link to related prompts
   - Link to external standards

5. **Version Control:**
   - Increment versions for changes
   - Archive old versions
   - Document version history

### 10.2 Don'ts ❌

1. **Don't Be Vague:**
   - ❌ "Style appropriately"
   - ✅ "Add padding: 16px and border-radius: 8px"

2. **Don't Skip Prerequisites:**
   - ❌ Assume knowledge
   - ✅ List required reading

3. **Don't Ignore Dark Mode:**
   - ❌ Only test light mode
   - ✅ Test both modes always

4. **Don't Forget Accessibility:**
   - ❌ Skip ARIA labels
   - ✅ Include WCAG requirements

5. **Don't Leave Unfinished:**
   - ❌ Partial documentation
   - ✅ Complete all sections

---

## 11. Maintenance

### 11.1 Regular Review

**Schedule:** Quarterly review of all active prompts

**Review Process:**
1. Check for outdated information
2. Test prompt effectiveness
3. Update examples if needed
4. Archive deprecated prompts
5. Update index files

### 11.2 Deprecation Process

**When to deprecate:**
- Component architecture changes
- New version supersedes old
- Feature removed from project

**Deprecation steps:**
1. Mark as "Deprecated" in metadata
2. Add deprecation notice at top of file
3. Link to replacement prompt
4. Move to `/prompts/archive/` after 3 months
5. Update index files

**Deprecation Notice Format:**
```markdown
---
⚠️ **DEPRECATED:** This prompt has been superseded.

**Replacement:** `/prompts/components/blocks/component_create_product-card_v2.md`  
**Reason:** New architecture requires different approach  
**Date Deprecated:** 2026-01-10  
**Removal Date:** 2026-04-10  
---
```

---

## 12. Related Documentation

- [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md) - General writing standards
- [REPORTING_GUIDELINES.md](./REPORTING_GUIDELINES.md) - Report generation standards
- [Guidelines.md](./Guidelines.md) - Main project guidelines

---

## Version History

### v1.0 (2026-01-10)
- Initial prompt generation guidelines
- Comprehensive naming conventions
- Folder structure defined
- Template structures provided
- Quality checklist included
- Examples added

---

**Status:** ✅ **Active**  
**Last Review:** January 10, 2026  
**Next Review:** April 10, 2026

---

**Created By:** Development Team  
**Approved By:** Project Lead  
**Maintained By:** Documentation Team