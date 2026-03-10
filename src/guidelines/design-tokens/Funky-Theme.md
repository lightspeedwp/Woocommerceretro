# Funky Theme Design Tokens

**Scope:** Neon & Bright Aesthetic Overlay  
**Parent System:** WordPress FSE / WooCommerce Theme  
**Last Updated:** 2026-02-22

---

## 1. Color Palette (Neon)

These colors are added to `theme-variables.css` under the `--wp--preset--color--*` namespace.

| Token Name | Hex Value | Usage |
| :--- | :--- | :--- |
| `neon-pink` | `#ff00ff` | Primary accents, Orbs, Glows |
| `neon-cyan` | `#00ffff` | Secondary accents, Orbs, Borders |
| `neon-lime` | `#00ff00` | Success states, Highlights |
| `neon-yellow` | `#ffff00` | Warning states, Attention grabbers |
| `deep-purple` | `#2d0059` | Backgrounds (Dark Mode) |

### Semantic Variables (Light & Dark Mode)

| Variable | Light Mode Value | Dark Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| `--funky-glass-bg` | `rgba(255, 255, 255, 0.85)` | `rgba(3, 2, 19, 0.95)` | Glass panel backgrounds |
| `--funky-glass-border` | `rgba(0, 0, 0, 0.1)` | `rgba(255, 255, 255, 0.1)` | Panel borders |
| `--funky-glass-shadow` | `0 4px 20px rgba(0, 0, 0, 0.05)` | `0 4px 20px rgba(0, 255, 255, 0.15)` | Panel shadows |
| `--funky-text-muted` | `var(--wp--preset--color--text-secondary)` | `rgba(255, 255, 255, 0.6)` | Secondary text |
| `--funky-input-bg` | `rgba(0, 0, 0, 0.05)` | `rgba(255, 255, 255, 0.1)` | Form input backgrounds |

### Gradients
- `--wp--preset--gradient--neon-hero`: Linear gradient (Pink to Cyan) for overlays.
- `--wp--preset--gradient--neon-glow`: Linear gradient (45deg, Pink to Cyan) for card borders.

---

## 2. Animation Tokens

### Keyframes
1. **`funky-float`**: Gentle vertical oscillation (-20px). Duration: 6s infinite ease-in-out.
2. **`funky-glow-pulse`**: Scale (1.05x) and Opacity (0.5 to 0.8) breathing. Duration: 3s infinite.
3. **`funky-rotate`**: 360deg rotation. Use Case: Icons on hover.

### Interaction Utilities
- **`.funky-spring-hover`**: `transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)` -- bouncy scale on hover.

---

## 3. Component Utilities

### Glow Cards (`.funky-card-glow`)
Neon border effect using pseudo-element with gradient, `inset: -2px`, `blur(10px)`.

### Neon Typography (`.funky-text-neon`)
Dual-layer text shadow using the neon palette.

---

## 4. Accessibility (Reduced Motion)

All funky animations are disabled for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .funky-animate-float,
  .funky-animate-glow,
  .funky-spring-hover {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
```

---

## Changelog

### v2.0 - 2026-02-22
- Renamed from `funky-theme.md` to `Funky-Theme.md` (naming convention enforcement)
