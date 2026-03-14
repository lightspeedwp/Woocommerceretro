# [COMPONENT_NAME] Component

**Type:** [Block / Pattern / Part / UI]  
**Category:** [Category Name]  
**Location:** `[FILE_PATH]`  
**Status:** [Draft / Complete / Needs Review]

---

## Overview (REQUIRED)

**Purpose:** [1-2 sentence description of what this component does]

**Use Cases:**
- [Primary use case 1]
- [Primary use case 2]
- [Primary use case 3]

**WordPress Alignment:** [How this maps to WordPress/WooCommerce concepts]

---

## Visual Reference (REQUIRED for UI components)

[Include screenshot or describe visual appearance]

**States:**
- Default
- Hover
- Focus
- Active
- Disabled
- Loading (if applicable)
- Error (if applicable)

---

## Implementation (REQUIRED)

### File Location

```
[FILE_PATH]
```

### Dependencies

```tsx
import { [dependency1] } from '[path1]';
import { [dependency2] } from '[path2]';
```

**Required:**
- [List required dependencies]

**Optional:**
- [List optional dependencies]

---

## Props / API (REQUIRED)

### TypeScript Interface

```tsx
interface [COMPONENT_NAME]Props {
  // REQUIRED props
  [prop1]: [type];  // [Description]
  [prop2]: [type];  // [Description]
  
  // OPTIONAL props
  [prop3]?: [type];  // [Description]
  [prop4]?: [type];  // [Description]
  
  // Styling props
  className?: string;  // Additional CSS classes
}
```

### Props Reference Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `[prop1]` | `[type]` | ✅ Yes | — | [Description] |
| `[prop2]` | `[type]` | ✅ Yes | — | [Description] |
| `[prop3]` | `[type]` | ❌ No | `[default]` | [Description] |
| `className` | `string` | ❌ No | `''` | Additional CSS classes |

---

## Usage Examples (REQUIRED)

### Basic Usage

```tsx
import { [COMPONENT_NAME] } from '@/components/[category]/[COMPONENT_NAME]';

function MyPage() {
  return (
    <[COMPONENT_NAME]
      [prop1]="[value]"
      [prop2]="[value]"
    />
  );
}
```

**Output:**
[Describe what this renders]

---

### Advanced Usage (OPTIONAL)

```tsx
// More complex example with optional props
<[COMPONENT_NAME]
  [prop1]="[value]"
  [prop2]="[value]"
  [prop3]="[value]"
  className="custom-class"
/>
```

**Output:**
[Describe what this renders]

---

### With State (OPTIONAL)

```tsx
const [state, setState] = useState([initial_value]);

<[COMPONENT_NAME]
  [prop1]={state}
  [prop2]={(value) => setState(value)}
/>
```

---

## Styling (REQUIRED)

### CSS Classes

**Root element:**
```css
.[base-class-name] {
  /* Base styles */
}
```

**Element classes (BEM):**
```css
.[base-class-name]__[element] {
  /* Element styles */
}
```

**Modifier classes (BEM):**
```css
.[base-class-name]--[modifier] {
  /* Modifier styles */
}
```

### WordPress CSS Variables Used

- `--wp--preset--color--[token]`
- `--wp--preset--spacing--[token]`
- `--wp--preset--font-size--[token]`
- [List all variables used]

### CSS File Location

```
/src/styles/blocks/[category]/[component-name].css
```

---

## Dark Mode Support (REQUIRED)

### Light Mode

```css
.[base-class-name] {
  background: var(--wp--preset--color--background);
  color: var(--wp--preset--color--foreground);
  border: 1px solid var(--wp--preset--color--border);
}
```

### Dark Mode

```css
.dark .[base-class-name] {
  background: var(--wp--preset--color--background-dark);
  color: var(--wp--preset--color--foreground-dark);
  border: 1px solid var(--wp--preset--color--border-dark);
}
```

**Dark Mode Checklist:**
- [ ] All backgrounds have dark variants
- [ ] All text colors have dark variants
- [ ] All borders visible in dark mode
- [ ] All icons visible in dark mode
- [ ] Hover states work in dark mode
- [ ] Focus states work in dark mode

---

## Accessibility (REQUIRED)

### WCAG 2.1 AA Compliance

**Color Contrast:**
- [ ] Text contrast ratio ≥ 4.5:1 (normal text)
- [ ] Text contrast ratio ≥ 3:1 (large text 18pt+)
- [ ] Interactive elements contrast ratio ≥ 3:1

**Keyboard Navigation:**
- [ ] All interactive elements focusable
- [ ] Focus order logical
- [ ] Focus indicators visible (2px outline)
- [ ] No keyboard traps

**ARIA Attributes:**
```tsx
<[COMPONENT_NAME]
  aria-label="[descriptive label]"
  aria-labelledby="[id]"
  aria-describedby="[id]"
  role="[role]"
/>
```

**Screen Reader Support:**
- [ ] Component announces purpose
- [ ] State changes announced
- [ ] Error messages announced
- [ ] Dynamic content changes announced (aria-live)

---

## Responsive Design (REQUIRED)

### Mobile (< 640px)

[Describe mobile behavior]

**Adaptations:**
- [List mobile-specific changes]

### Tablet (640px - 1024px)

[Describe tablet behavior]

### Desktop (1024px+)

[Describe desktop behavior]

### Breakpoint CSS

```css
/* Mobile first (default) */
.[base-class-name] {
  [mobile styles]
}

/* Tablet */
@media (min-width: 640px) {
  .[base-class-name] {
    [tablet adaptations]
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .[base-class-name] {
    [desktop adaptations]
  }
}
```

---

## State Management (OPTIONAL)

### Internal State

[If component has internal state, document it]

```tsx
const [stateVar, setStateVar] = useState([initial]);
```

### Context Usage

[If component uses React Context]

```tsx
const contextValue = useContext(SomeContext);
```

---

## Related Components (OPTIONAL)

**Used By:**
- `[ComponentA]` - [How it uses this component]
- `[ComponentB]` - [How it uses this component]

**Uses:**
- `[ComponentC]` - [What this component uses]
- `[ComponentD]` - [What this component uses]

---

## Common Patterns (OPTIONAL)

### Pattern 1: [Pattern Name]

[Describe common usage pattern]

```tsx
[Example code]
```

---

## Best Practices (REQUIRED)

### Do's ✅

- ✅ [Best practice 1]
- ✅ [Best practice 2]
- ✅ [Best practice 3]

### Don'ts ❌

- ❌ [Anti-pattern 1]
- ❌ [Anti-pattern 2]
- ❌ [Anti-pattern 3]

---

## Performance Considerations (OPTIONAL)

**Optimization:**
- [Performance tip 1]
- [Performance tip 2]

**Memoization:**
```tsx
const MemoizedComponent = React.memo([COMPONENT_NAME]);
```

---

## Testing (OPTIONAL)

### Unit Tests

```tsx
describe('[COMPONENT_NAME]', () => {
  it('renders correctly', () => {
    [test code]
  });
});
```

### Visual Tests

[Describe visual regression test scenarios]

---

## Migration Notes (OPTIONAL)

**From Previous Version:**
- [Migration step 1]
- [Migration step 2]

**Breaking Changes:**
- [Breaking change 1]

---

## Changelog (OPTIONAL)

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | YYYY-MM-DD | Initial creation |

---

## Related Documentation

- **Main Guidelines:** `/guidelines/Guidelines.md`
- **[Related guideline 1]:** `/guidelines/[path]`
- **[Related guideline 2]:** `/guidelines/[path]`

---

**Last Updated:** [YYYY-MM-DD]  
**Author:** [Name]  
**Status:** [Draft / Complete / Needs Review]  
**Next Review:** [YYYY-MM-DD]
