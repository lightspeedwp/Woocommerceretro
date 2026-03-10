# LivePreview Pattern

**Version:** 1.0  
**Type:** Pattern (Developer Tool)  
**WordPress Mapping:** N/A (Development Tool)  
**File:** `/components/patterns/LivePreview.tsx`

---

## Overview

The LivePreview pattern provides a live, interactive preview environment for testing components with different props, themes, and viewport sizes during development.

**Purpose:**
- Preview components in isolation
- Test different prop combinations
- Verify responsive behavior
- Check dark mode compatibility
- Aid component development

**WordPress Equivalent:**
- Block Preview (Editor)
- Pattern Preview
- Storybook (external tool)

---

## Component Structure

```
LivePreview (Pattern)
└── Preview Container
    ├── Controls Panel
    │   ├── Props Controls
    │   ├── Theme Toggle
    │   ├── Viewport Selector
    │   └── Code Export
    └── Preview Frame
        └── Component Instance
```

---

## Props Interface

```typescript
interface LivePreviewProps {
  /**
   * Component to preview
   */
  component: React.ComponentType<any>;

  /**
   * Default props for component
   */
  defaultProps?: Record<string, any>;

  /**
   * Prop controls configuration
   */
  propControls?: PropControl[];

  /**
   * Available viewports
   * @default ['mobile', 'tablet', 'desktop']
   */
  viewports?: Viewport[];

  /**
   * Show theme toggle
   * @default true
   */
  showThemeToggle?: boolean;

  /**
   * Show code export
   * @default true
   */
  showCodeExport?: boolean;
}

interface PropControl {
  name: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'color';
  defaultValue?: any;
  options?: string[];
  label?: string;
}

interface Viewport {
  name: string;
  width: number;
  height?: number;
  icon?: React.ReactNode;
}
```

---

## Usage Examples

### Example 1: Basic Component Preview

```tsx
import { LivePreview } from '@/components/patterns/LivePreview';
import { Button } from '@/components/ui/button';

export function ButtonPreview() {
  return (
    <LivePreview
      component={Button}
      defaultProps={{
        children: 'Click Me',
        variant: 'primary',
      }}
      propControls={[
        { name: 'children', type: 'text', label: 'Button Text' },
        { 
          name: 'variant', 
          type: 'select', 
          options: ['primary', 'secondary', 'outline', 'ghost'],
          label: 'Variant'
        },
        { name: 'disabled', type: 'boolean', label: 'Disabled' },
      ]}
    />
  );
}
```

### Example 2: Pattern Preview

```tsx
import { ProductCard } from '@/components/blocks/ProductCard';

<LivePreview
  component={ProductCard}
  defaultProps={{
    product: mockProduct,
  }}
  propControls={[
    { name: 'showRating', type: 'boolean', label: 'Show Rating' },
    { name: 'showBadge', type: 'boolean', label: 'Show Badge' },
    { 
      name: 'imageAspectRatio', 
      type: 'select', 
      options: ['1/1', '4/3', '16/9'],
      label: 'Image Aspect Ratio'
    },
  ]}
  viewports={[
    { name: 'Mobile', width: 375 },
    { name: 'Tablet', width: 768 },
    { name: 'Desktop', width: 1440 },
  ]}
/>
```

### Example 3: Layout Preview

```tsx
import { Hero } from '@/components/patterns/Hero';

<LivePreview
  component={Hero}
  defaultProps={{
    title: 'Welcome to Our Store',
    subtitle: 'Discover amazing products',
    ctaText: 'Shop Now',
    ctaLink: '/shop',
  }}
  propControls={[
    { name: 'title', type: 'text' },
    { name: 'subtitle', type: 'text' },
    { name: 'ctaText', type: 'text' },
    { 
      name: 'variant', 
      type: 'select', 
      options: ['default', 'minimal', 'split'],
    },
  ]}
  showCodeExport={true}
/>
```

---

## Features & Capabilities

### Interactive Controls
- Prop editing (text, number, boolean, select)
- Theme switching (light/dark)
- Viewport selection (mobile/tablet/desktop)
- Prop reset to defaults

### Code Export
- Generate JSX code with current props
- Copy to clipboard
- Syntax highlighting

### Preview Frame
- Isolated rendering environment
- Responsive viewport simulation
- Theme context injection
- Real-time updates

---

## Used In

### Pages
- **/component-api:** Component documentation
- **/live-preview:** Interactive component preview
- **/showcase:** Component showcase

---

## Styling & Design Tokens

```css
.live-preview {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-lg);
  min-height: 500px;
}

.live-preview-controls {
  background: var(--color-bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.live-preview-frame {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  overflow: auto;
  resize: both;
}

.live-preview-control {
  margin-bottom: var(--spacing-md);
}

.live-preview-control label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
}

.live-preview-control input,
.live-preview-control select {
  width: 100%;
  padding: var(--spacing-xs);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}
```

---

## Responsive Behavior

### Mobile (< 640px)
- Stack controls above preview
- Full-width preview frame

### Desktop (> 640px)
- Side-by-side layout
- Resizable preview frame
- Collapsible controls panel

---

## Accessibility

```tsx
<div className="live-preview" role="region" aria-label="Component preview">
  <aside className="live-preview-controls" aria-label="Preview controls">
    <h3>Controls</h3>
    {propControls.map(control => (
      <div key={control.name} className="live-preview-control">
        <label htmlFor={`control-${control.name}`}>
          {control.label || control.name}
        </label>
        <input
          id={`control-${control.name}`}
          type={control.type}
          value={props[control.name]}
          onChange={handleChange}
        />
      </div>
    ))}
  </aside>
  
  <div className="live-preview-frame" aria-live="polite">
    <Component {...props} />
  </div>
</div>
```

---

## Testing

```typescript
describe('LivePreview', () => {
  it('renders component with default props', () => {
    render(
      <LivePreview 
        component={MockComponent}
        defaultProps={{ text: 'Hello' }}
      />
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('updates component when prop control changes', async () => {
    render(
      <LivePreview 
        component={MockComponent}
        defaultProps={{ text: 'Hello' }}
        propControls={[
          { name: 'text', type: 'text' }
        ]}
      />
    );
    
    const input = screen.getByLabelText('text');
    await userEvent.clear(input);
    await userEvent.type(input, 'World');
    
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  it('toggles theme when theme control clicked', async () => {
    render(
      <LivePreview 
        component={MockComponent}
        defaultProps={{}}
        showThemeToggle={true}
      />
    );
    
    const themeToggle = screen.getByRole('button', { name: /theme/i });
    await userEvent.click(themeToggle);
    
    // Assert dark mode applied
  });

  it('exports code with current props', async () => {
    render(
      <LivePreview 
        component={MockComponent}
        defaultProps={{ text: 'Hello' }}
        showCodeExport={true}
      />
    );
    
    const exportButton = screen.getByRole('button', { name: /code/i });
    await userEvent.click(exportButton);
    
    expect(screen.getByText(/<MockComponent text="Hello" \/>/)).toBeInTheDocument();
  });
});
```

---

## Performance Considerations

### Optimization
- Debounce prop updates (100ms)
- Memo component instance
- Code export on demand (not continuous generation)

---

## Common Patterns

### Component Library Documentation
```tsx
export function ComponentDocs() {
  return (
    <Layout>
      <Container>
        <Heading>Button Component</Heading>
        <LivePreview
          component={Button}
          defaultProps={buttonDefaults}
          propControls={buttonControls}
        />
        <Markdown source={buttonDocs} />
      </Container>
    </Layout>
  );
}
```

### Pattern Showcase
```tsx
<LivePreview
  component={ProductGrid}
  defaultProps={{
    products: mockProducts,
    columns: { mobile: 2, desktop: 4 }
  }}
  propControls={gridControls}
  viewports={standardViewports}
/>
```

---

## Related Components

- **ComponentAPI:** Component documentation page
- **Showcase:** Component gallery
- **StyleGuide:** Design system documentation

---

## Best Practices

### Do's ✅
- ✅ Provide meaningful default props
- ✅ Group related controls
- ✅ Show prop types/constraints
- ✅ Include code export
- ✅ Support keyboard navigation

### Don'ts ❌
- ❌ Don't overwhelm with too many controls
- ❌ Don't forget prop validation
- ❌ Don't render without error boundaries
- ❌ Don't expose internal/debug props

---

## FAQ

### Q: Is this like Storybook?
**A:** Yes, it provides similar functionality for component isolation and testing.

### Q: Should this be in production?
**A:** No, it's a development tool. Use code splitting to exclude from production.

### Q: How do I add custom viewports?
**A:** Pass custom viewport array with width/height/name properties.

---

## Version History

### Version 1.0 (December 2024)
- Initial implementation
- Interactive prop controls
- Theme toggle
- Viewport selector
- Code export

---

## See Also

- [ComponentAPI Page](/pages/PageComponentAPI.tsx)
- [Showcase Page](/templates/PageShowcase.tsx)
- [StyleGuide Template](/templates/PageStyleGuide.tsx)
