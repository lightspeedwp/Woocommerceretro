# [TOKEN_NAME] Design Tokens

**Category:** Design Tokens  
**Type:** [Visual / Interactive / Layout / Typography]  
**Status:** [Draft / Complete / Needs Review]

---

## Overview (REQUIRED)

**Purpose:** [1-2 sentence description of what these tokens define]

**Scope:** [What aspects of the design system these tokens control]

**WordPress Alignment:** [How these map to theme.json or WordPress standards]

---

## Token Definitions (REQUIRED)

### CSS Custom Properties

**Root variables (light mode):**

```css
:root {
  /* [Token category 1] */
  --[prefix]--[token-1]: [value];  /* [Description] */
  --[prefix]--[token-2]: [value];  /* [Description] */
  --[prefix]--[token-3]: [value];  /* [Description] */
  
  /* [Token category 2] */
  --[prefix]--[token-4]: [value];  /* [Description] */
  --[prefix]--[token-5]: [value];  /* [Description] */
}
```

**Dark mode overrides:**

```css
.dark {
  /* Override tokens for dark mode */
  --[prefix]--[token-1]: [dark-value];
  --[prefix]--[token-2]: [dark-value];
}
```

---

## Token Reference Table (REQUIRED)

| Token Name | Light Mode Value | Dark Mode Value | Usage | WCAG Compliance |
|------------|------------------|-----------------|-------|-----------------|
| `--[token-1]` | `[value]` | `[dark-value]` | [Usage description] | AA / AAA |
| `--[token-2]` | `[value]` | `[dark-value]` | [Usage description] | AA / AAA |
| `--[token-3]` | `[value]` | `[dark-value]` | [Usage description] | AA / AAA |

---

## Semantic Tokens (REQUIRED)

### Naming Convention

**Pattern:** `--[prefix]--[purpose]--[variant]--[state]`

**Examples:**
```css
--wp--preset--color--primary            /* Base primary color */
--wp--preset--color--primary-hover      /* Primary hover state */
--wp--preset--color--primary-dark       /* Dark mode primary */
```

### Token Hierarchy

```
Level 1 (Base Values)
└── --[base-token]: [raw-value]

Level 2 (Semantic Values)
└── --[semantic-token]: var(--[base-token])

Level 3 (Component Values)
└── --[component]--[property]: var(--[semantic-token])
```

---

## Usage Examples (REQUIRED)

### Basic Usage

```css
.my-component {
  [property]: var(--[token-name]);
}
```

**Example:**
```css
.button {
  background: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-foreground);
  padding: var(--wp--preset--spacing--40);
}
```

---

### With Fallbacks

```css
.my-component {
  [property]: var(--[token-name], [fallback-value]);
}
```

**Example:**
```css
.card {
  background: var(--wp--preset--color--surface, #f9f9f9);
}
```

---

### Responsive Tokens (OPTIONAL)

```css
/* Mobile */
--[token-name]: [mobile-value];

/* Tablet */
@media (min-width: 640px) {
  --[token-name]: [tablet-value];
}

/* Desktop */
@media (min-width: 1024px) {
  --[token-name]: [desktop-value];
}
```

---

## Dark Mode Implementation (REQUIRED)

### Standard Pattern

```css
/* Light mode (default) */
:root {
  --token-name: [light-value];
}

/* Dark mode */
.dark {
  --token-name: [dark-value];
}

/* Component usage (automatically adapts) */
.component {
  property: var(--token-name);
}
```

### Contrast Requirements

| Element Type | Light Mode Contrast | Dark Mode Contrast | Standard |
|--------------|---------------------|-------------------|----------|
| Body text | ≥ 4.5:1 | ≥ 4.5:1 | WCAG AA |
| Large text (18pt+) | ≥ 3:1 | ≥ 3:1 | WCAG AA |
| UI components | ≥ 3:1 | ≥ 3:1 | WCAG AA |

**Verification:**

```css
/* Test contrast ratios */
--wp--preset--color--text: #1a1a1a;      /* 15.8:1 on white ✅ AAA */
--wp--preset--color--text-dark: #f9fafb;  /* 16.1:1 on #0f0f0f ✅ AAA */
```

---

## Value Scales (OPTIONAL)

### Linear Scale

```css
--[token]-10: [value1];  /* Smallest */
--[token]-20: [value2];
--[token]-30: [value3];
--[token]-40: [value4];
--[token]-50: [value5];  /* Base */
--[token]-60: [value6];
--[token]-70: [value7];
--[token]-80: [value8];  /* Largest */
```

**Example (Spacing):**
```css
--wp--preset--spacing--10: 2px;    /* 0.125rem */
--wp--preset--spacing--20: 4px;    /* 0.25rem */
--wp--preset--spacing--30: 8px;    /* 0.5rem */
--wp--preset--spacing--40: 16px;   /* 1rem - Base */
--wp--preset--spacing--50: 24px;   /* 1.5rem */
--wp--preset--spacing--60: 32px;   /* 2rem */
--wp--preset--spacing--70: 48px;   /* 3rem */
--wp--preset--spacing--80: 64px;   /* 4rem */
```

---

### Modular Scale (OPTIONAL)

```css
--[token]-xs: [value1];   /* Extra small */
--[token]-sm: [value2];   /* Small */
--[token]-md: [value3];   /* Medium (base) */
--[token]-lg: [value4];   /* Large */
--[token]-xl: [value5];   /* Extra large */
--[token]-2xl: [value6];  /* 2x large */
```

---

## Component Application (REQUIRED)

### Which Components Use These Tokens

**Primary:**
- `[Component1]` - [How it uses tokens]
- `[Component2]` - [How it uses tokens]

**Secondary:**
- `[Component3]` - [How it uses tokens]

### Application Pattern

```tsx
// Component file
import './component-name.css';

export function ComponentName() {
  return (
    <div className="component-class">
      {/* Styles automatically use tokens */}
    </div>
  );
}
```

```css
/* component-name.css */
.component-class {
  /* Uses tokens, not hardcoded values */
  background: var(--wp--preset--color--surface);
  padding: var(--wp--preset--spacing--40);
  font-size: var(--wp--preset--font-size--normal);
}
```

---

## Theme Integration (REQUIRED)

### WordPress theme.json Mapping

```json
{
  "settings": {
    "[category]": {
      "[key]": [
        {
          "slug": "[slug-name]",
          "name": "[Display Name]",
          "[property]": "[value]"
        }
      ]
    }
  }
}
```

**Example (Colors):**
```json
{
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "primary",
          "name": "Primary",
          "color": "#000000"
        }
      ]
    }
  }
}
```

---

## Accessibility Guidelines (REQUIRED)

### WCAG 2.1 AA Requirements

- [ ] **Contrast ratios** meet minimums (4.5:1 normal text, 3:1 large text)
- [ ] **Focus indicators** visible (≥ 2px, 3:1 contrast)
- [ ] **Interactive elements** have 44x44px touch targets
- [ ] **Color not sole indicator** (use icons, text labels)

### Testing Tokens

```bash
# Use browser dev tools to verify contrast
# 1. Inspect element
# 2. Check computed styles for token values
# 3. Use contrast checker on final rendered colors
```

---

## Responsive Behavior (OPTIONAL)

### Fluid Scaling

```css
--[token-name]: clamp([min], [preferred], [max]);
```

**Example (Fluid Typography):**
```css
--wp--preset--font-size--heading: clamp(2rem, 3vw + 1rem, 3.5rem);
/* Scales from 32px → 56px based on viewport */
```

---

## Migration Guide (OPTIONAL)

### From Hardcoded Values

**Before (hardcoded):**
```css
.button {
  background: #000000;
  color: #ffffff;
  padding: 16px 24px;
}
```

**After (using tokens):**
```css
.button {
  background: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-foreground);
  padding: var(--wp--preset--spacing--40) var(--wp--preset--spacing--50);
}
```

---

## Best Practices (REQUIRED)

### Do's ✅

- ✅ **Always use tokens** instead of hardcoded values
- ✅ **Define semantic tokens** before component tokens
- ✅ **Test in both light and dark mode**
- ✅ **Use fallback values** for critical properties
- ✅ **Document token purpose** in comments

### Don'ts ❌

- ❌ **Don't hardcode values** in component CSS
- ❌ **Don't create tokens** for every single value (too granular)
- ❌ **Don't use tokens** for one-off unique values
- ❌ **Don't override tokens** in component CSS (use modifiers instead)

---

## Common Patterns (OPTIONAL)

### Pattern 1: [Pattern Name]

[Describe common token usage pattern]

```css
[Example code]
```

---

## Validation & Testing (OPTIONAL)

### Token Audit Script

```bash
# Find hardcoded values that should be tokens
grep -r "#[0-9a-fA-F]\{6\}" src/styles/blocks/
# Should return 0 results (all using tokens)
```

### Contrast Verification

```bash
# Use automated contrast checker
npm run check-contrast
```

---

## Changelog (OPTIONAL)

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | YYYY-MM-DD | Initial token definitions |

---

## Related Documentation

- **Main Guidelines:** `/guidelines/Guidelines.md`
- **[Related token category]:** `/guidelines/design-tokens/[category].md`
- **Component Guidelines:** `/guidelines/blocks/` or `/guidelines/patterns/`

---

**Last Updated:** [YYYY-MM-DD]  
**Author:** [Name]  
**Status:** [Draft / Complete / Needs Review]  
**Next Review:** [YYYY-MM-DD]
