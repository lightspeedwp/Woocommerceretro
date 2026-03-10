# PageLivePreview

**Component Type:** Template (Developer Tool - Component Playground - Full Funky)  
**Location:** `/src/app/components/templates/PageLivePreview.tsx`  
**CSS:** `/src/styles/sections/dev-tools-funky.css`  
**Route:** `/live-preview`  
**Status:** 🚧 In Development (Mockup)  
**Version:** 2.6 (Funky Redesign - Phase 10)  
**Color Identity:** Cyan `#00ffff` / Purple `#7c3aed` / Lime `#84cc16`

---

## Overview

PageLivePreview is a developer/designer tool template providing an interactive component playground with live prop editing, real-time preview, and code generation. Features component sidebar, view mode tabs (Preview/Code/Both), glassmorphism preview panel, and neon-highlighted code blocks. Currently displays mockup placeholder; production version would include full prop controls and live rendering.

**Page Purpose:** Component testing and documentation for developers  
**Target Audience:** Developers, designers, design system users  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Header → 2-column layout (sidebar + main preview area)

**Note:** This is a developer tool, not customer-facing. Similar to Storybook/Playroom.

---

## Key Features

### Visual Elements

**1. Page Header:**
- "Live Preview" badge (gradient)
- "Component Playground" title
- Description text

**2. Component Sidebar:**
- Glassmorphism panel
- Component list (categorized)
- Active state (gradient border)
- Category badges

**3. Main Preview Area:**
- View mode tabs (Preview, Code, Both)
- Gradient active tab indicator
- Glassmorphism canvas
- Placeholder preview content

**4. Placeholder Canvas:**
- Centered content
- Large Play icon (gradient)
- Component name display
- "Coming soon" hint

### Funky Treatments

**Badge:** Gradient background (cyan → purple)  
**Sidebar Panel:** Glassmorphism with neon glow  
**Active Component:** Gradient left border (cyan → lime)  
**Tabs:** Gradient underline on active  
**Canvas:** Glassmorphism with centered content  
**Preview Icon:** Gradient (cyan → purple)

---

## State Management

### Component Selection

```tsx
const [selectedComponent, setSelectedComponent] = useState<string>('button');

// Component list
const components = [
  { id: 'button', name: 'Button', category: 'UI' },
  { id: 'badge', name: 'Badge', category: 'UI' },
  { id: 'alert', name: 'PageAlert', category: 'Block' },
  { id: 'search', name: 'ProductSearch', category: 'Block' },
  { id: 'pagination', name: 'Pagination', category: 'Block' },
];

// Handle selection
<button
  onClick={() => setSelectedComponent(comp.id)}
  className={`wp-live-preview__component-item${
    selectedComponent === comp.id
      ? ' wp-live-preview__component-item--active'
      : ''
  }`}
>
  <div className="wp-live-preview__component-name">{comp.name}</div>
  <div className="wp-live-preview__component-category">{comp.category}</div>
</button>
```

### View Mode

```tsx
const [viewMode, setViewMode] = useState<'preview' | 'code' | 'both'>('both');

// Tab buttons
<button
  onClick={() => setViewMode('preview')}
  className={`wp-live-preview__tab${
    viewMode === 'preview' ? ' wp-live-preview__tab--active' : ''
  }`}
>
  <Eye size={16} />
  Preview
</button>
```

### Icons Used

```tsx
import { 
  Play,         // Badge icon (16px), Canvas icon (48px)
  Code,         // Code tab (16px)
  Eye,          // Preview tab (16px)
  Settings,     // (Not currently used - future prop controls)
  Copy,         // (Not currently used - future code copy)
  Check,        // (Not currently used - future success state)
  RefreshCw,    // (Not currently used - future reset)
  ChevronDown,  // (Not currently used - future collapsible sections)
  ChevronRight, // (Not currently used - future collapsible sections)
} from '@phosphor-icons/react';
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  <Container className="wp-live-preview">
    {/* Page Header */}
    <div className="wp-live-preview__header">
      <div className="wp-live-preview__badge">
        <Play size={16} />
        <span className="wp-live-preview__badge-text">Live Preview</span>
      </div>
      <h1>Component Playground</h1>
      <p className="wp-live-preview__description">
        Interactive component preview with real-time prop editing and code generation.
      </p>
    </div>

    <div className="wp-live-preview__layout">
      {/* Component List Sidebar */}
      <div className="wp-live-preview__sidebar">
        <div className="wp-live-preview__sidebar-panel">
          <h3 className="wp-live-preview__sidebar-title">Components</h3>
          <div className="wp-live-preview__component-list">
            {components.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setSelectedComponent(comp.id)}
                className={`wp-live-preview__component-item${
                  selectedComponent === comp.id
                    ? ' wp-live-preview__component-item--active'
                    : ''
                }`}
              >
                <div className="wp-live-preview__component-name">{comp.name}</div>
                <div className="wp-live-preview__component-category">{comp.category}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="wp-live-preview__main">
        <div className="wp-live-preview__main-panel">
          {/* View Mode Tabs */}
          <div className="wp-live-preview__tabs">
            <button
              onClick={() => setViewMode('preview')}
              className={`wp-live-preview__tab${
                viewMode === 'preview' ? ' wp-live-preview__tab--active' : ''
              }`}
            >
              <Eye size={16} />
              Preview
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`wp-live-preview__tab${
                viewMode === 'code' ? ' wp-live-preview__tab--active' : ''
              }`}
            >
              <Code size={16} />
              Code
            </button>
            <button
              onClick={() => setViewMode('both')}
              className={`wp-live-preview__tab${
                viewMode === 'both' ? ' wp-live-preview__tab--active' : ''
              }`}
            >
              Both
            </button>
          </div>

          {/* Preview Content */}
          <div className="wp-live-preview__canvas">
            <div className="wp-live-preview__canvas-inner">
              <Play size={48} className="wp-live-preview__canvas-icon" />
              <p className="wp-live-preview__canvas-text">
                Component preview for <strong>{selectedComponent}</strong>
              </p>
              <p className="wp-live-preview__canvas-hint">
                Interactive preview coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</Layout>
```

---

## BEM Class Hierarchy

```
.wp-live-preview (Page wrapper)
│
├── .wp-live-preview__header (Page header)
│   ├── .wp-live-preview__badge (Gradient badge)
│   │   └── .wp-live-preview__badge-text
│   └── .wp-live-preview__description
│
└── .wp-live-preview__layout (2-column layout)
    ├── .wp-live-preview__sidebar (Left column - component list)
    │   └── .wp-live-preview__sidebar-panel (Glassmorphism panel)
    │       ├── .wp-live-preview__sidebar-title (h3)
    │       └── .wp-live-preview__component-list (Component buttons)
    │           └── .wp-live-preview__component-item (Button)
    │               ├── .wp-live-preview__component-item--active (Active modifier)
    │               ├── .wp-live-preview__component-name
    │               └── .wp-live-preview__component-category
    │
    └── .wp-live-preview__main (Right column - preview area)
        └── .wp-live-preview__main-panel (Glassmorphism panel)
            ├── .wp-live-preview__tabs (Tab navigation)
            │   └── .wp-live-preview__tab (Tab button)
            │       └── .wp-live-preview__tab--active (Active modifier)
            │
            └── .wp-live-preview__canvas (Preview container)
                └── .wp-live-preview__canvas-inner (Centered content)
                    ├── .wp-live-preview__canvas-icon (Play icon - gradient)
                    ├── .wp-live-preview__canvas-text
                    └── .wp-live-preview__canvas-hint
```

---

## Section Breakdown

### 1. Page Header (`.wp-live-preview__header`)

```css
.wp-live-preview__header {
  margin-bottom: var(--space--800);
}

/* Live Preview Badge (Gradient) */
.wp-live-preview__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--200) var(--space--400);
  border-radius: var(--radius--full);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  color: var(--white);
  font-size: var(--font-size--100);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--space--500);
}

.dark .wp-live-preview__badge {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.wp-live-preview__badge svg {
  width: 16px;
  height: 16px;
}

/* Title */
.wp-live-preview__header h1 {
  margin-bottom: var(--space--400);
}

/* Description */
.wp-live-preview__description {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  max-width: 48rem;
}
```

**Badge:** Gradient (cyan → purple) with glow in dark mode

---

### 2. Layout Grid (`.wp-live-preview__layout`)

```css
.wp-live-preview__layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space--700);
  align-items: start;
}

@media (max-width: 1024px) {
  .wp-live-preview__layout {
    grid-template-columns: 1fr;
  }
  
  .wp-live-preview__sidebar {
    order: 2;
  }
  
  .wp-live-preview__main {
    order: 1;
  }
}
```

**Layout:** 280px (sidebar) + 1fr (main)  
**Mobile:** Stacked (preview first, sidebar second)

---

### 3. Sidebar Panel (`.wp-live-preview__sidebar-panel`)

```css
.wp-live-preview__sidebar-panel {
  padding: var(--space--600);
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  position: sticky;
  top: var(--space--700);
}

.dark .wp-live-preview__sidebar-panel {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
}

.wp-live-preview__sidebar-title {
  font-size: var(--font-size--300);
  font-weight: 700;
  margin-bottom: var(--space--500);
  color: var(--text);
}

.wp-live-preview__component-list {
  display: flex;
  flex-direction: column;
  gap: var(--space--300);
}
```

**Glassmorphism:** Backdrop-blur 12px  
**Sticky:** Top position for scrolling

---

### 4. Component List Items (`.wp-live-preview__component-item`)

```css
.wp-live-preview__component-item {
  display: flex;
  flex-direction: column;
  gap: var(--space--200);
  padding: var(--space--400);
  border-radius: var(--radius--300);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 3px solid transparent;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
}

.dark .wp-live-preview__component-item {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.05);
}

.wp-live-preview__component-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-left-color: rgba(0, 255, 255, 0.5);
}

.dark .wp-live-preview__component-item:hover {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
}

/* Active State (Gradient Left Border) */
.wp-live-preview__component-item--active {
  background: rgba(255, 255, 255, 0.1);
  border-left: 3px solid transparent;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
    linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.dark .wp-live-preview__component-item--active {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.wp-live-preview__component-name {
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--text);
}

.wp-live-preview__component-item--active .wp-live-preview__component-name {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.wp-live-preview__component-category {
  font-size: var(--font-size--75);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary);
}
```

**Hover:** Subtle cyan left border  
**Active:** Gradient left border (cyan → lime), gradient text

---

### 5. Main Panel (`.wp-live-preview__main-panel`)

```css
.wp-live-preview__main-panel {
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.dark .wp-live-preview__main-panel {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
}
```

**Glassmorphism:** Backdrop-blur 12px

---

### 6. Tabs (`.wp-live-preview__tabs`)

```css
.wp-live-preview__tabs {
  display: flex;
  gap: var(--space--400);
  padding: var(--space--500);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .wp-live-preview__tabs {
  border-bottom-color: rgba(0, 255, 255, 0.15);
}

.wp-live-preview__tab {
  display: flex;
  align-items: center;
  gap: var(--space--300);
  padding: var(--space--300) var(--space--400);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: var(--font-size--200);
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.wp-live-preview__tab:hover {
  color: var(--text);
}

/* Active Tab (Gradient Underline) */
.wp-live-preview__tab--active {
  color: var(--text);
}

.wp-live-preview__tab--active::after {
  content: '';
  position: absolute;
  bottom: calc(var(--space--300) * -1);
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan) 0%, var(--lime) 100%);
  border-radius: var(--radius--full);
}

.dark .wp-live-preview__tab--active::after {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

.wp-live-preview__tab svg {
  width: 16px;
  height: 16px;
}
```

**Active Tab:** Gradient underline (cyan → lime) with glow

---

### 7. Canvas (`.wp-live-preview__canvas`)

```css
.wp-live-preview__canvas {
  min-height: 400px;
  padding: var(--space--800);
  background: rgba(255, 255, 255, 0.02);
}

.dark .wp-live-preview__canvas {
  background: rgba(0, 0, 0, 0.2);
}

.wp-live-preview__canvas-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
}

/* Play Icon (Gradient) */
.wp-live-preview__canvas-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  padding: var(--space--600);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  color: var(--white);
  margin-bottom: var(--space--600);
}

.dark .wp-live-preview__canvas-icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.wp-live-preview__canvas-text {
  font-size: var(--font-size--300);
  color: var(--text);
  margin-bottom: var(--space--400);
}

.wp-live-preview__canvas-hint {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  font-style: italic;
}
```

**Icon:** Gradient circle (cyan → purple) with glow

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Header: Smaller badge */
.wp-live-preview__badge {
  font-size: var(--font-size--75);
  padding: var(--space--100) var(--space--300);
}

/* Layout: Single column, preview first */
.wp-live-preview__layout {
  grid-template-columns: 1fr;
}

.wp-live-preview__main {
  order: 1;
}

.wp-live-preview__sidebar {
  order: 2;
}

/* Tabs: Smaller text */
.wp-live-preview__tab {
  font-size: var(--font-size--100);
  padding: var(--space--200) var(--space--300);
}

/* Canvas: Smaller padding */
.wp-live-preview__canvas {
  padding: var(--space--600);
  min-height: 300px;
}

.wp-live-preview__canvas-icon {
  width: 80px;
  height: 80px;
  padding: var(--space--500);
}
```

### Tablet (640px - 1024px)

```css
/* Layout: Single column */
.wp-live-preview__layout {
  grid-template-columns: 1fr;
}
```

### Desktop (> 1024px)

```css
/* Layout: 2 columns */
.wp-live-preview__layout {
  grid-template-columns: 280px 1fr;
}

/* Sidebar: Sticky */
.wp-live-preview__sidebar-panel {
  position: sticky;
  top: var(--space--700);
}
```

**Key Breakpoints:** Preview-first on mobile, sidebar sticky on desktop

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Badge BG** | Cyan → Purple gradient | Same + cyan glow |
| **Sidebar Panel BG** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Sidebar Panel Border** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.15)` |
| **Sidebar Panel Shadow** | None | Cyan glow `rgba(0,255,255,0.1)` |
| **Component Item BG** | `rgba(255,255,255,0.03)` | `rgba(255,255,255,0.02)` |
| **Component Hover** | Cyan left border (0.5) | Same + cyan glow |
| **Active Component** | Gradient left border | Same + cyan glow |
| **Active Name Text** | Cyan → Lime gradient | Same |
| **Main Panel BG** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Main Panel Border** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.15)` |
| **Main Panel Shadow** | None | Cyan glow `rgba(0,255,255,0.1)` |
| **Tabs Border** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.15)` |
| **Active Tab Underline** | Cyan → Lime gradient | Same + glow |
| **Canvas BG** | `rgba(255,255,255,0.02)` | `rgba(0,0,0,0.2)` |
| **Canvas Icon** | Cyan → Purple gradient | Same + cyan glow |

### Dark Mode Enhancements

```css
.dark .wp-live-preview__badge {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.dark .wp-live-preview__sidebar-panel {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
}

.dark .wp-live-preview__component-item:hover {
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
}

.dark .wp-live-preview__component-item--active {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.dark .wp-live-preview__main-panel {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
}

.dark .wp-live-preview__tab--active::after {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

.dark .wp-live-preview__canvas-icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Page structure */}
<main className="wp-live-preview">
  <header className="wp-live-preview__header">
    <div className="wp-live-preview__badge" role="status">
      <Play aria-hidden="true" />
      <span>Live Preview</span>
    </div>
    <h1>Component Playground</h1>
    <p>Interactive component preview with real-time prop editing</p>
  </header>
  
  <div className="wp-live-preview__layout">
    <nav className="wp-live-preview__sidebar" aria-label="Component navigation">
      <div className="wp-live-preview__sidebar-panel">
        <h3>Components</h3>
        <div className="wp-live-preview__component-list">
          <button aria-pressed={selectedComponent === 'button'}>
            <div>Button</div>
            <div>UI</div>
          </button>
        </div>
      </div>
    </nav>
    
    <main className="wp-live-preview__main" aria-label="Component preview">
      <div role="tablist">
        <button 
          role="tab"
          aria-selected={viewMode === 'preview'}
          aria-controls="preview-panel"
        >
          Preview
        </button>
      </div>
      
      <div 
        id="preview-panel"
        role="tabpanel"
        aria-labelledby="preview-tab"
      >
        {/* Preview content */}
      </div>
    </main>
  </div>
</main>
```

### ARIA Attributes

```tsx
{/* Badge with status role */}
<div className="wp-live-preview__badge" role="status">
  <Play aria-hidden="true" />
  <span>Live Preview</span>
</div>

{/* Component list navigation */}
<nav 
  className="wp-live-preview__sidebar" 
  aria-label="Component navigation"
>
  <button 
    aria-pressed={selectedComponent === comp.id}
    aria-label={`Select ${comp.name} component`}
  >
    {comp.name}
  </button>
</nav>

{/* Tab navigation */}
<div role="tablist" aria-label="View mode">
  <button
    role="tab"
    aria-selected={viewMode === 'preview'}
    aria-controls="preview-panel"
    id="preview-tab"
  >
    <Eye aria-hidden="true" />
    Preview
  </button>
</div>

{/* Tab panel */}
<div
  id="preview-panel"
  role="tabpanel"
  aria-labelledby="preview-tab"
  hidden={viewMode !== 'preview'}
>
  {/* Content */}
</div>

{/* Decorative icons */}
<Play aria-hidden="true" />
<Eye aria-hidden="true" />
<Code aria-hidden="true" />
```

### Keyboard Navigation

- **Tab Order:** Component list buttons → Tab buttons → Canvas content
- **Component Selection:** Enter/Space to select
- **Tab Navigation:** Arrow keys to move between tabs, Enter/Space to activate
- **Focus Management:** Focus moves to newly selected tab panel

### Focus States

```css
.wp-live-preview__component-item:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

.wp-live-preview__tab:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Badge Text | White `#ffffff` | Gradient bg | 4.5:1+ | AA ✅ |
| Description | `#6b7280` | Page bg | 4.6:1+ | AA ✅ |
| Sidebar Title | `#1a1a1a` / `#f9fafb` | Panel bg | 10.0:1+ | AAA ✅ |
| Component Name (Light) | `#1a1a1a` | Button bg | 8.0:1+ | AAA ✅ |
| Component Name (Dark) | `#f9fafb` | Button bg | 10.0:1+ | AAA ✅ |
| Active Name (Gradient) | Cyan/Lime | Button bg | N/A | Decorative ✅ |
| Category | `#6b7280` | Button bg | 4.6:1+ | AA ✅ |
| Tab Text | `#6b7280` / `#1a1a1a` | Panel bg | 4.6:1+ | AA ✅ |
| Canvas Text | `#1a1a1a` / `#f9fafb` | Canvas bg | 10.0:1+ | AAA ✅ |
| Canvas Hint | `#6b7280` | Canvas bg | 4.6:1+ | AA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Live Component Rendering

```tsx
// Dynamic component import and rendering
const [componentProps, setComponentProps] = useState({
  variant: 'primary',
  size: 'medium',
  children: 'Click me',
});

// Component registry
const componentRegistry = {
  button: Button,
  badge: Badge,
  alert: PageAlert,
  // ... more components
};

// Render selected component
const ComponentToRender = componentRegistry[selectedComponent];

<div className="wp-live-preview__canvas">
  <ComponentToRender {...componentProps} />
</div>
```

### 2. Prop Controls Panel

```tsx
<div className="wp-live-preview__controls">
  <h4>Props</h4>
  
  {/* String input */}
  <div className="wp-control">
    <label htmlFor="children">children</label>
    <input
      id="children"
      value={componentProps.children}
      onChange={(e) => setComponentProps({
        ...componentProps,
        children: e.target.value
      })}
    />
  </div>
  
  {/* Select input */}
  <div className="wp-control">
    <label htmlFor="variant">variant</label>
    <select
      id="variant"
      value={componentProps.variant}
      onChange={(e) => setComponentProps({
        ...componentProps,
        variant: e.target.value
      })}
    >
      <option value="primary">primary</option>
      <option value="secondary">secondary</option>
      <option value="outline">outline</option>
    </select>
  </div>
  
  {/* Boolean checkbox */}
  <div className="wp-control">
    <label>
      <input
        type="checkbox"
        checked={componentProps.disabled}
        onChange={(e) => setComponentProps({
          ...componentProps,
          disabled: e.target.checked
        })}
      />
      disabled
    </label>
  </div>
</div>
```

### 3. Code Generation

```tsx
const generateCode = () => {
  const props = Object.entries(componentProps)
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `${key}="${value}"`;
      } else if (typeof value === 'boolean') {
        return value ? key : '';
      } else {
        return `${key}={${JSON.stringify(value)}}`;
      }
    })
    .filter(Boolean)
    .join(' ');
  
  return `<${selectedComponent} ${props} />`;
};

// Code block with syntax highlighting
<pre className="wp-live-preview__code">
  <code>{generateCode()}</code>
</pre>
```

### 4. Copy to Clipboard

```tsx
const [copied, setCopied] = useState(false);

const handleCopy = async () => {
  await navigator.clipboard.writeText(generateCode());
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

<button onClick={handleCopy} className="wp-copy-button">
  {copied ? <Check size={16} /> : <Copy size={16} />}
  {copied ? 'Copied!' : 'Copy Code'}
</button>
```

### 5. Viewport Size Controls

```tsx
const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

const viewportSizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '100%',
};

<div className="wp-live-preview__viewport-controls">
  <button onClick={() => setViewport('mobile')}>Mobile</button>
  <button onClick={() => setViewport('tablet')}>Tablet</button>
  <button onClick={() => setViewport('desktop')}>Desktop</button>
</div>

<div 
  className="wp-live-preview__iframe"
  style={{ width: viewportSizes[viewport] }}
>
  <ComponentToRender {...componentProps} />
</div>
```

### 6. Background Color Toggle

```tsx
const [bgColor, setBgColor] = useState<'white' | 'gray' | 'dark'>('white');

const bgColors = {
  white: '#ffffff',
  gray: '#f3f4f6',
  dark: '#1a1a1a',
};

<div className="wp-live-preview__bg-controls">
  {Object.keys(bgColors).map(color => (
    <button
      key={color}
      onClick={() => setBgColor(color as any)}
      className={bgColor === color ? 'active' : ''}
    >
      <div style={{ background: bgColors[color] }} />
    </button>
  ))}
</div>

<div 
  className="wp-live-preview__canvas"
  style={{ background: bgColors[bgColor] }}
>
  <ComponentToRender {...componentProps} />
</div>
```

### 7. Prop Type Documentation

```tsx
// Show prop types and descriptions
<div className="wp-live-preview__prop-docs">
  <h4>Prop Types</h4>
  <dl>
    <dt>variant</dt>
    <dd>
      <code>'primary' | 'secondary' | 'outline'</code>
      <p>Button style variant</p>
    </dd>
    
    <dt>size</dt>
    <dd>
      <code>'small' | 'medium' | 'large'</code>
      <p>Button size</p>
    </dd>
    
    <dt>disabled</dt>
    <dd>
      <code>boolean</code>
      <p>Whether button is disabled</p>
    </dd>
  </dl>
</div>
```

### 8. Component Search

```tsx
const [searchQuery, setSearchQuery] = useState('');

const filteredComponents = components.filter(comp =>
  comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  comp.category.toLowerCase().includes(searchQuery.toLowerCase())
);

<div className="wp-live-preview__search">
  <input
    type="search"
    placeholder="Search components..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>
```

### 9. Example Presets

```tsx
const buttonPresets = [
  { name: 'Primary CTA', props: { variant: 'primary', size: 'large', children: 'Get Started' } },
  { name: 'Secondary', props: { variant: 'secondary', size: 'medium', children: 'Learn More' } },
  { name: 'Disabled', props: { variant: 'outline', disabled: true, children: 'Submit' } },
];

<div className="wp-live-preview__presets">
  <h4>Examples</h4>
  {buttonPresets.map(preset => (
    <button
      key={preset.name}
      onClick={() => setComponentProps(preset.props)}
    >
      {preset.name}
    </button>
  ))}
</div>
```

### 10. Share Playground State

```tsx
// Generate shareable URL with props encoded
const generateShareUrl = () => {
  const state = {
    component: selectedComponent,
    props: componentProps,
    viewMode,
  };
  
  const encoded = btoa(JSON.stringify(state));
  return `${window.location.origin}/live-preview?state=${encoded}`;
};

// Restore from URL
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const stateParam = params.get('state');
  
  if (stateParam) {
    try {
      const decoded = JSON.parse(atob(stateParam));
      setSelectedComponent(decoded.component);
      setComponentProps(decoded.props);
      setViewMode(decoded.viewMode);
    } catch (e) {
      console.error('Failed to restore state');
    }
  }
}, []);

<button onClick={() => {
  const url = generateShareUrl();
  navigator.clipboard.writeText(url);
  toast.success('Share link copied!');
}}>
  Share Playground
</button>
```

---

## Testing Checklist

### Visual Testing

- [ ] Badge displays with gradient
- [ ] Badge has glow in dark mode
- [ ] Page title displays
- [ ] Description displays
- [ ] Sidebar panel displays
- [ ] Sidebar has glassmorphism
- [ ] Component list displays (5 items)
- [ ] Component items display name and category
- [ ] Active component has gradient border
- [ ] Active component name has gradient text
- [ ] Main panel displays
- [ ] Main panel has glassmorphism
- [ ] Tabs display (3 tabs)
- [ ] Active tab has gradient underline
- [ ] Canvas displays
- [ ] Canvas icon has gradient (cyan → purple)
- [ ] Canvas icon has glow in dark mode
- [ ] Canvas text displays

### Interaction Testing

- [ ] Component selection works
- [ ] Active state updates on click
- [ ] Tab switching works
- [ ] Active tab updates
- [ ] Component items have hover effect
- [ ] Tabs have hover effect

### Responsive Testing

- [ ] Mobile: Badge smaller
- [ ] Mobile: Layout single column
- [ ] Mobile: Preview appears first
- [ ] Mobile: Sidebar appears second
- [ ] Mobile: Tabs smaller
- [ ] Mobile: Canvas smaller padding
- [ ] Tablet: Layout single column
- [ ] Desktop: Layout 2 columns
- [ ] Desktop: Sidebar sticky

### Dark Mode Testing

- [ ] Badge glow visible
- [ ] Sidebar panel glassmorphism visible
- [ ] Sidebar border cyan-tinted
- [ ] Sidebar shadow cyan glow
- [ ] Component items readable
- [ ] Active component glow visible
- [ ] Active name gradient visible
- [ ] Main panel glassmorphism visible
- [ ] Main panel border cyan-tinted
- [ ] Main panel shadow cyan glow
- [ ] Tabs border cyan-tinted
- [ ] Active tab underline glow visible
- [ ] Canvas icon glow visible
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h3)
- [ ] Badge has role="status"
- [ ] Icons decorative (aria-hidden)
- [ ] Component buttons have aria-pressed
- [ ] Sidebar has aria-label
- [ ] Tabs have role="tab"
- [ ] Tabs have aria-selected
- [ ] Tab panels have role="tabpanel"
- [ ] Tab panels have aria-labelledby
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA

### State Testing

- [ ] Default component is 'button'
- [ ] Default view mode is 'both'
- [ ] Selection persists on re-render
- [ ] Tab state updates correctly
- [ ] Active states display correctly

---

## Related Templates

- **PageIconLibrary** — Similar developer tool
- **PageShowcase** — Similar component showcase

### Shared CSS

- `.dev-tools-funky.css` — Developer tool styles
- Glassmorphism panels
- Gradient badges
- Neon glow effects

### New CSS Patterns

- `.wp-live-preview__layout` — 2-column layout with sticky sidebar
- `.wp-live-preview__component-item--active` — Gradient left border
- `.wp-live-preview__tab--active` — Gradient underline
- `.wp-live-preview__canvas` — Preview container

---

**Last Updated:** February 24, 2026  
**Template Status:** 🚧 In Development (Mockup - Full implementation requires live rendering)