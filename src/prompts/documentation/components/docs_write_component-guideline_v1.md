# Write Component Guideline

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Documentation  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Documentation Generation |
| **Target** | [ComponentName].md in `/guidelines/` |
| **Complexity** | Medium |
| **Estimated Time** | 45-60 minutes |
| **Prerequisites** | Component exists, WRITING_GUIDELINES.md |
| **Output Files** | [ComponentName].md guideline document |

---

## 🎯 Objective

Create comprehensive component guideline documentation following project standards, including usage examples, props reference, accessibility requirements, and code examples.

### What This Prompt Does:
- ✅ Creates complete component guideline
- ✅ Follows standard template structure
- ✅ Includes all required sections
- ✅ Provides code examples
- ✅ Documents accessibility requirements
- ✅ References related components

### What This Prompt Does NOT Do:
- ❌ Create the component itself
- ❌ Write component tests
- ❌ Generate implementation code
- ❌ Create multiple guidelines at once

---

## 📚 Context & Background

### Guideline Purpose:
- **Reference:** Complete component documentation
- **Standards:** Implementation requirements
- **Examples:** Usage patterns
- **Accessibility:** WCAG compliance details
- **Integration:** Related components

### Guideline Location:
- **Blocks:** `/guidelines/blocks/`
- **Patterns:** `/guidelines/patterns/`
- **Parts:** `/guidelines/parts/`
- **Common:** `/guidelines/components/`

---

## 📋 Requirements

### Documentation Requirements:
1. Follow WRITING_GUIDELINES.md standards
2. Use standard template structure
3. Include complete code examples
4. Document all props/interfaces
5. Specify accessibility requirements
6. Reference related components
7. Provide usage patterns

### Content Requirements:
1. Clear component overview
2. When/when not to use
3. Complete props reference
4. Visual examples (optional)
5. Accessibility checklist
6. Dark mode requirements
7. Testing guidelines

---

## 🔧 Implementation Instructions

### Step 1: Choose Template

**Action:** Select appropriate template based on component type

**Templates:**

**Block Component Template:**
```markdown
# [ComponentName] Block

**Component Type:** Block  
**Location:** `/src/app/components/blocks/[ComponentName].tsx`  
**WordPress Block:** `core/[block-name]` or `woocommerce/[block-name]`  
**Status:** Active

---

## 📋 Overview

[Brief description of what the component does]

### Purpose

[Detailed explanation of the component's role]

### When to Use

✅ Use this component when:
- [Use case 1]
- [Use case 2]
- [Use case 3]

❌ Don't use this component when:
- [Anti-pattern 1]
- [Anti-pattern 2]

---

## 🎨 Visual Examples

[Optional: Screenshots or mockups]

---

## 💻 Implementation

### Basic Usage

\`\`\`tsx
import { [ComponentName] } from '@/components/blocks/[ComponentName]';

function Example() {
  return (
    <[ComponentName]
      [requiredProp]="value"
    />
  );
}
\`\`\`

### Props Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `[prop1]` | `string` | ✅ Yes | - | [Description] |
| `[prop2]` | `number` | ❌ No | `0` | [Description] |

### TypeScript Interface

\`\`\`tsx
interface [ComponentName]Props {
  [prop1]: string;
  [prop2]?: number;
  className?: string;
}
\`\`\`

---

## 🎯 Usage Patterns

### Pattern 1: [Common Pattern Name]

\`\`\`tsx
// [Description of this pattern]
<[ComponentName]
  [props]
/>
\`\`\`

### Pattern 2: [Another Pattern]

\`\`\`tsx
// [Description]
<[ComponentName]
  [props]
/>
\`\`\`

---

## ♿ Accessibility

### WCAG Compliance

- **Level AA Required:** ✅
- **Level AAA Target:** ⏳

### Requirements

- [ ] Color contrast ≥ 4.5:1 (AA)
- [ ] Keyboard accessible
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Screen reader friendly
- [ ] Touch targets ≥ 44px

### Implementation

\`\`\`tsx
<[ComponentName]
  aria-label="[Descriptive label]"
  role="[appropriate role]"
/>
\`\`\`

---

## 🌓 Dark Mode

### Requirements

- [ ] Background color adapts
- [ ] Text color readable
- [ ] Borders visible
- [ ] Hover states work
- [ ] Focus states visible

### Implementation

[Dark mode styling approach]

---

## 🧪 Testing

### Unit Tests

\`\`\`tsx
describe('[ComponentName]', () => {
  it('renders correctly', () => {
    // Test code
  });
});
\`\`\`

### Accessibility Tests

[Accessibility testing approach]

---

## 🔗 Related Components

- **[RelatedComponent1]** - [Relationship]
- **[RelatedComponent2]** - [Relationship]

---

## 📚 References

- [WordPress Block Documentation]
- [WooCommerce Block Documentation]
- [WCAG Guidelines]

---

**Last Updated:** YYYY-MM-DD  
**Maintainer:** [Team/Person]  
**Status:** ✅ Active
```

---

### Step 2: Analyze Component

**Action:** Review component implementation

**Checklist:**
- [ ] Read component source code
- [ ] List all props and their types
- [ ] Note default values
- [ ] Identify usage patterns
- [ ] Check accessibility features
- [ ] Review dark mode implementation
- [ ] Find related components

**Example Analysis:**
```typescript
// Component: ProductCard
// Location: /src/app/components/blocks/ProductCard.tsx

interface ProductCardProps {
  product: Product;      // Required
  className?: string;    // Optional
  featured?: boolean;    // Optional, default: false
}

// Key Features:
- Displays product image, title, price, rating
- Links to product detail page
- Shows sale badge when on sale
- Hover animation (lift + shadow)
- Lazy loads images
- Keyboard accessible

// Accessibility:
- Alt text on images
- ARIA label on link
- Semantic HTML (h3 for title)
- Focus visible (purple ring)

// Dark Mode:
- Background: dark:bg-[#1a1a1a]
- Text: dark:text-gray-50
- Borders: dark:border-gray-700
```

---

### Step 3: Write Overview Section

**Action:** Create clear component overview

**Template:**
```markdown
## 📋 Overview

The [ComponentName] component [brief description in one sentence].

### Purpose

This component serves as [detailed purpose explanation]. It is designed to [primary function] and provides [key features].

### When to Use

✅ Use this component when:
- You need to [use case 1]
- You want to [use case 2]
- You have [use case 3]

❌ Don't use this component when:
- [Anti-pattern 1 with explanation]
- [Anti-pattern 2 with explanation]
- [Alternative component to use instead]
```

**Example:**
```markdown
## 📋 Overview

The ProductCard component displays a product preview in grid layouts with image, title, price, and rating.

### Purpose

This component serves as the primary product display unit in archive pages, search results, and related product sections. It is designed to provide essential product information at a glance and provides a clickable link to the full product details.

### When to Use

✅ Use this component when:
- Displaying products in grid/list layouts
- Showing product collections or categories
- Featuring related or recommended products
- Building product archive pages

❌ Don't use this component when:
- Displaying full product details (use SingleProduct template)
- Showing products in cart (use CartItem component)
- Building product comparison tables (use specialized component)
```

---

### Step 4: Document Props

**Action:** Create complete props reference

**Template:**
```markdown
## 💻 Implementation

### Props Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `[prop]` | `[type]` | ✅/❌ | `[default]` | [Description with details] |

### TypeScript Interface

\`\`\`tsx
interface [ComponentName]Props {
  // Required props
  [requiredProp]: [type];
  
  // Optional props
  [optionalProp]?: [type];
  
  // Common optional props
  className?: string;
  children?: React.ReactNode;
}
\`\`\`

### Prop Details

#### `[propName]`
- **Type:** `[type]`
- **Required:** Yes/No
- **Description:** [Detailed explanation]
- **Example:** `[prop]={[value]}`
- **Validation:** [Any validation rules]
```

---

### Step 5: Add Usage Examples

**Action:** Provide comprehensive code examples

**Template:**
```markdown
## 🎯 Usage Patterns

### Basic Usage

\`\`\`tsx
import { [ComponentName] } from '@/components/[type]/[ComponentName]';

function Example() {
  return (
    <[ComponentName]
      [requiredProp]="value"
    />
  );
}
\`\`\`

### Advanced Usage

\`\`\`tsx
// [Description of advanced pattern]
<[ComponentName]
  [allProps]
  className="custom-class"
>
  {/* Optional children */}
</[ComponentName]>
\`\`\`

### With State Management

\`\`\`tsx
// [Description]
function Example() {
  const [state, setState] = useState();

  return (
    <[ComponentName]
      [props]
      onChange={setState}
    />
  );
}
\`\`\`
```

---

### Step 6: Document Accessibility

**Action:** Specify accessibility requirements

**Template:**
```markdown
## ♿ Accessibility

### WCAG Compliance

- **Level AA Required:** ✅ Complete
- **Level AAA Target:** ⏳ In Progress / ✅ Complete

### Requirements Checklist

**Visual:**
- [ ] Color contrast ≥ 4.5:1 for normal text (AA)
- [ ] Color contrast ≥ 3:1 for large text (AA)
- [ ] Color is not the only visual indicator

**Keyboard:**
- [ ] All interactive elements keyboard accessible
- [ ] Logical tab order
- [ ] No keyboard traps
- [ ] Visible focus indicators

**Screen Reader:**
- [ ] All images have alt text
- [ ] ARIA labels on icon-only buttons
- [ ] Proper heading hierarchy
- [ ] Form labels associated with inputs

**Touch:**
- [ ] Touch targets ≥ 44x44px (mobile)
- [ ] Adequate spacing between interactive elements

### Implementation Examples

\`\`\`tsx
// Image with alt text
<img src={image} alt={`${title} product image`} />

// Button with ARIA label
<button aria-label="Add to cart" onClick={handleClick}>
  <ShoppingCart />
</button>

// Link with descriptive text
<Link to={`/product/${slug}`} aria-label={`View ${title} details`}>
  {title}
</Link>
\`\`\`

### Testing

\`\`\`bash
# Run accessibility tests
npm test -- --testPathPattern=accessibility

# Manual testing
1. Tab through all interactive elements
2. Verify focus indicators visible
3. Test with screen reader (NVDA/JAWS/VoiceOver)
4. Check color contrast (WebAIM tool)
\`\`\`
```

---

### Step 7: Add Dark Mode Section

**Action:** Document dark mode implementation

**Template:**
```markdown
## 🌓 Dark Mode

### Requirements

All components MUST support dark mode through CSS variables.

**Checklist:**
- [ ] Background colors adapt
- [ ] Text colors readable (≥ 4.5:1 contrast)
- [ ] Borders visible in both modes
- [ ] Hover states work in both modes
- [ ] Focus indicators visible in both modes
- [ ] Images have appropriate backgrounds

### Implementation

The component uses CSS variables that automatically adapt:

\`\`\`css
.component-name {
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--foreground);
  border-color: var(--wp--preset--color--border);
}

/* Dark mode handled automatically via CSS variables */
[data-theme="dark"] .component-name {
  /* Variables automatically switch to dark values */
}
\`\`\`

### Testing Dark Mode

1. Toggle dark mode switch
2. Verify all colors adapt
3. Check hover states
4. Test focus indicators
5. Validate contrast ratios
```

---

## ✅ Verification Checklist

### Documentation Quality:
- [ ] Follows WRITING_GUIDELINES.md
- [ ] Uses standard template
- [ ] All sections complete
- [ ] Code examples work
- [ ] Props documented
- [ ] Accessibility covered
- [ ] Dark mode documented

### Content Completeness:
- [ ] Overview clear
- [ ] Purpose explained
- [ ] When/when not to use
- [ ] Props reference complete
- [ ] Usage examples provided
- [ ] Accessibility checklist
- [ ] Dark mode requirements
- [ ] Related components listed

### Technical Accuracy:
- [ ] Props match implementation
- [ ] Types are correct
- [ ] Examples are valid
- [ ] Imports are correct
- [ ] Paths are accurate

---

## 📖 Related Documentation

- [WRITING_GUIDELINES.md](/guidelines/WRITING_GUIDELINES.md) - Writing standards
- [Guidelines.md](/guidelines/Guidelines.md) - Main guidelines
- [COMPONENT_INDEX.md](/guidelines/COMPONENT_INDEX.md) - Component index

---

## 📝 Notes & Tips

### Best Practices:

💡 **Be specific** - Include exact prop types and values

💡 **Show examples** - Real code is better than descriptions

💡 **Test examples** - Make sure code examples actually work

💡 **Link related docs** - Reference other guidelines

💡 **Keep updated** - Update when component changes

### Common Mistakes:

⚠️ **Vague descriptions** - Be precise and specific

⚠️ **Missing props** - Document ALL props

⚠️ **Wrong types** - Verify TypeScript types match

⚠️ **Broken examples** - Test all code examples

⚠️ **No accessibility** - Always include accessibility section

---

**Status:** ✅ Active  
**Created:** 2026-01-10
