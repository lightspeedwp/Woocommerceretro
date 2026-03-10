# Accordion

**WooCommerce Blocks:**
- `woocommerce/accordion-group` (container)
- `woocommerce/accordion-item` (single accordion)
- `woocommerce/accordion-header` (trigger)
- `woocommerce/accordion-panel` (content)

**Category:** `woocommerce`
**React Component:** `FAQSection` pattern, `ProductTabs` (accordion mode)
**File Location:** `/src/app/components/patterns/FAQSection.tsx`

---

## Block Hierarchy

```
woocommerce/accordion-group
|-- woocommerce/accordion-item
    |-- woocommerce/accordion-header    # Clickable trigger
    |-- woocommerce/accordion-panel     # Expandable content
```

---

## Block Definitions

### Accordion Group
- **Name:** `woocommerce/accordion-group`
- **Description:** A group of headers and associated expandable content.
- **Supports:** `align` (full, wide), `background`, `color`, `interactivity`, `layout`, `shadow`, `spacing` (blockGap, margin, padding)
- **Attributes:**
  - `allowedBlocks` - Blocks allowed inside
  - `autoclose` - Close others when one opens
  - `iconPosition` - Icon position (`left`, `right`)

### Accordion Item
- **Name:** `woocommerce/accordion-item`
- **Parent:** `woocommerce/accordion-group`
- **Supports:** `align` (full, wide), `color`, `interactivity`, `layout`, `shadow`, `spacing`
- **Attributes:** `openByDefault` - Whether open by default

### Accordion Header
- **Name:** `woocommerce/accordion-header`
- **Parent:** `woocommerce/accordion-item`
- **Supports:** `anchor`, `border`, `color`, `interactivity`, `layout`, `shadow`, `spacing`, `typography`
- **Attributes:**
  - `icon` - Toggle icon
  - `iconPosition` - Icon position
  - `level` - Heading level (2-6)
  - `openByDefault`
  - `title` - Header text

### Accordion Panel
- **Name:** `woocommerce/accordion-panel`
- **Parent:** `woocommerce/accordion-item`
- **Supports:** `border`, `color`, `interactivity`, `layout`, `shadow`, `spacing`, `typography`
- **Attributes:** `allowedBlocks`, `isSelected`, `openByDefault`, `templateLock`

---

## WordPress CSS Classes

```css
.wc-block-accordion-group { }
.wc-block-accordion-item { }
.wc-block-accordion-item--open { }
.wc-block-accordion-header { }
.wc-block-accordion-header__title { }
.wc-block-accordion-header__icon { }
.wc-block-accordion-header__icon--open { }
.wc-block-accordion-panel { }
.wc-block-accordion-panel--open { }
```

---

## React Component Mapping

Used in FAQ sections and product detail tabs:

```tsx
function AccordionGroup(props) {
  var items = props.items;
  var autoclose = props.autoclose;

  return React.createElement('div', { className: 'wc-block-accordion-group' },
    items.map(function(item) {
      return React.createElement(AccordionItem, {
        key: item.id,
        title: item.title,
        content: item.content,
        openByDefault: item.openByDefault
      });
    })
  );
}
```

---

## Accessibility

- Header uses `button` element with `aria-expanded`
- Panel uses `role="region"` with `aria-labelledby`
- Keyboard: Enter/Space toggles, arrow keys navigate between items
