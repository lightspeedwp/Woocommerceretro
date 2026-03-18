# Color design tokens v6.0

**Version:** 6.0  
**Status:** WordPress CSS variables only (no Tailwind)  
**Dark mode:** Mandatory via CSS variables  
**Sources of truth:**
- `/src/styles/theme-variables.css` — WordPress `--wp--preset--*` tokens (canonical)
- `/src/styles/retro-theme.css` — Retro `--color-*` tokens with automatic dark mode

---

## 1. Architecture overview

PlayPocket uses a **dual-layer token system**:

1. **Retro layer** (`--color-*`) — defined in `retro-theme.css`. The visual identity of the PlayPocket handheld gaming aesthetic. Light/dark mode values switch automatically via `.dark` class on `<html>`.
2. **WordPress layer** (`--wp--preset--color--*`) — defined in `theme-variables.css`. Maps to WordPress `theme.json` conventions. References retro tokens where applicable, with independent dark mode overrides.

Components may use either layer depending on context:
- **Retro layer** — used by retro-specific components (cards, buttons, badges, hero sections)
- **WordPress layer** — used by generic WordPress blocks and shared patterns

Both layers are valid. The retro layer provides the visual identity; the WordPress layer ensures compatibility with the block editor.

---

## 2. Retro ↔ WordPress token mapping

This table documents how retro theme tokens map to WordPress preset tokens. Both light and dark values are shown.

### 2.1 Surface tokens

| Role | Retro token | WordPress token | Light | Dark |
|:-----|:------------|:----------------|:------|:-----|
| Page background | `--color-paper` | `--wp--preset--color--background` | `#F2EEE6` | `#151A1E` |
| Primary text | `--color-ink` | `--wp--preset--color--foreground` | `#1E2630` | `#E8E2D8` |
| Card/panel bg | `--color-panel` | `--wp--preset--color--surface` | `#DDD6C8` | `#232A32` |
| Secondary bg | `--color-paper-deep` | `--wp--preset--color--secondary` | `#E6E0D3` | `#1C2228` |
| Muted bg | `--color-panel-alt` | `--wp--preset--color--muted` | `#D4CCBC` | `#2A333C` |
| Inset/recessed | `--color-inset` | *(no WP equivalent)* | `#CBC3B3` | `#11161A` |

### 2.2 Text tokens

| Role | Retro token | WordPress token | Light | Dark |
|:-----|:------------|:----------------|:------|:-----|
| Primary text | `--color-text` | `--wp--preset--color--foreground` | `#1E2630` | `#E8E2D8` |
| Secondary text | `--color-text-soft` | `--wp--preset--color--text-secondary` | `#3D4A56` | `#C4CBC3` |
| Muted text | `--color-text-muted` | `--wp--preset--color--muted-foreground` | `#5A6878` | `#9FAAAF` |

### 2.3 Border tokens

| Role | Retro token | WordPress token | Light | Dark |
|:-----|:------------|:----------------|:------|:-----|
| Default border | `--color-border` | `--wp--preset--color--border` | `#C4BAA8` | `#3E4A52` |
| Subtle border | `--color-border-soft` | `--wp--preset--color--border-light` | `#D4CCBC` | `#2E3840` |
| Strong border | `--color-border-strong` | *(no WP equivalent)* | `#1E2630` | `#C4CBC3` |

### 2.4 Accent tokens

| Role | Retro token | WordPress token | Light | Dark |
|:-----|:------------|:----------------|:------|:-----|
| Screen green | `--color-screen` | `--wp--preset--color--accent` | `#6B8E7B` | `#8DA89D` |
| Screen strong | `--color-screen-strong` | `--wp--preset--color--brand` | `#4A7A5E` | `#A7C0B6` |
| Signal blue | `--color-signal` | *(separate from WP CTA)* | `#0055AA` | `#5DA0E0` |
| Coral | `--color-coral` | *(no WP equivalent)* | `#C0533A` | `#D08A72` |
| Sky | `--color-sky` | *(no WP equivalent)* | `#1565C0` | `#8AAFC0` |
| Berry | `--color-berry` | *(no WP equivalent)* | `#7B1FA2` | `#A083A6` |
| Olive | `--color-olive` | *(no WP equivalent)* | `#558B2F` | `#A0AE73` |

### 2.5 Interactive tokens

| Role | Retro token | WordPress token | Light | Dark |
|:-----|:------------|:----------------|:------|:-----|
| Focus ring | `--color-focus` | `--wp--preset--color--ring` | `#0055AA` | `#5DA0E0` |
| Link | `--color-link` | `--wp--preset--color--link` | `#0055AA` | `#5DA0E0` |
| Link hover | `--color-link-hover` | `--wp--preset--color--link-hover` | `#003D7A` | `#7DB8F0` |

### 2.6 State tokens

| Role | Retro token | WordPress token | Light | Dark | Contrast |
|:-----|:------------|:----------------|:------|:-----|:---------|
| Success | `--color-success` | `--wp--preset--color--success` | `#065f46` | `#4ade80` | AAA (7.1:1) |
| Warning | `--color-warning` | `--wp--preset--color--warning` | `#92400e` | `#fbbf24` | AAA (7.3:1) |
| Error/alert | `--color-alert` | `--wp--preset--color--error` | `#991b1b` | `#f87171` | AAA (7.1:1) |
| Info | *(no retro equivalent)* | `--wp--preset--color--info` | `#1e40af` | `var(--color-sky)` | AA (7.0:1) |

---

## 3. Retro namespace aliases

The retro theme also provides `--retro-*` namespaced aliases used by page-specific CSS (memberships, subscriptions, careers, press, deals, rewards, reviews). These map directly to `--color-*` tokens:

| Alias | Maps to | Light | Dark |
|:------|:--------|:------|:-----|
| `--retro-bg-primary` | `--color-paper` | `#F2EEE6` | `#151A1E` |
| `--retro-bg-secondary` | `--color-paper-deep` | `#E6E0D3` | `#1C2228` |
| `--retro-bg-elevated` | *(elevated surface)* | `#FFFFFF` | `#232A32` |
| `--retro-bg-surface` | `--color-paper` | `#F2EEE6` | `#1C2228` |
| `--retro-text-primary` | `--color-ink` | `#1E2630` | `#E8E2D8` |
| `--retro-text-secondary` | `--color-text-soft` | `#3D4A56` | `#C4CBC3` |
| `--retro-text-muted` | `--color-text-muted` | `#5A6878` | `#9FAAAF` |
| `--retro-neon-cyan` | `--color-screen-strong` | `#4A7A5E` | `#8DA89D` |
| `--retro-neon-yellow` | *(signal derivative)* | `#B8940E` | `#E8C054` |
| `--retro-neon-magenta` | `--color-coral` | `#C0533A` | `#D08A72` |
| `--retro-accent` | `--color-screen-strong` | `#4A7A5E` | `#8DA89D` |
| `--retro-border-primary` | `--color-border` | `#C4BAA8` | `#3E4A52` |
| `--retro-border-secondary` | `--color-border-soft` | `#D4CCBC` | `#2E3840` |

---

## 4. WordPress-only tokens (no retro equivalent)

These tokens exist only in the WordPress preset layer (`theme-variables.css`):

| Token | Light | Dark | Usage |
|:------|:------|:-----|:------|
| `--wp--preset--color--primary` | `#111111` | `#f9fafb` | High contrast primary |
| `--wp--preset--color--primary-foreground` | `#ffffff` | `#111111` | Text on primary |
| `--wp--preset--color--popover` | `#ffffff` | `var(--color-panel)` | Popover backgrounds |
| `--wp--preset--color--popover-foreground` | `#111111` | `var(--color-text)` | Popover text |
| `--wp--preset--color--error-muted` | `rgba(153,27,27,0.08)` | *(same)* | Error background tint |
| `--wp--preset--color--black` | `#000000` | *(same)* | Absolute black |
| `--wp--preset--color--white` | `#ffffff` | *(same)* | Absolute white |

### Funky tokens (legacy — pending deprecation per TK20)

| Token | Value | Usage |
|:------|:------|:------|
| `--wp--preset--color--neon-cyan` | `#00ffff` | Funky mega menu, glass overlays |
| `--wp--preset--color--neon-pink` | `#ff00ff` | Funky mega menu |
| `--wp--preset--color--neon-lime` | `#ccff00` | Funky accents |
| `--wp--preset--color--neon-yellow` | `#fbbf24` | Funky highlights |
| `--wp--preset--color--navy` | `#030213` | Funky dark background |
| `--wp--preset--color--deep-purple` | `#2d0059` | Funky gradient endpoint |

---

## 5. Neutral ramp

| Token | Light | Dark |
|:------|:------|:-----|
| `--wp--preset--color--neutral-100` | `#1a1a1a` | `#1a1a1a` |
| `--wp--preset--color--neutral-200` | *(not defined in light)* | `#1f2937` |
| `--wp--preset--color--neutral-300` | *(not defined in light)* | `#374151` |
| `--wp--preset--color--neutral-400` | *(not defined in light)* | `#4B5563` |
| `--wp--preset--color--neutral-500` | *(not defined in light)* | `#6B7280` |
| `--wp--preset--color--neutral-600` | *(not defined in light)* | `#9CA3AF` |
| `--wp--preset--color--neutral-700` | *(not defined in light)* | `#D1D5DB` |
| `--wp--preset--color--neutral-800` | *(not defined in light)* | `#E5E7EB` |
| `--wp--preset--color--neutral-900` | *(not defined in light)* | `#F9FAFB` |

---

## 6. Usage rules

### Which layer to use

| Context | Use |
|:--------|:----|
| Retro-themed components (cards, hero, badges) | `--color-*` tokens |
| Generic WordPress blocks and patterns | `--wp--preset--color--*` tokens |
| Page-specific retro sections | `--retro-*` aliases |
| State feedback (success, error, warning) | `--wp--preset--color--*` state tokens |

### CSS example

```css
/* Retro card — uses retro layer */
.retro-card {
  background-color: var(--color-paper);
  border: 3px solid var(--color-ink);
  color: var(--color-text);
}

/* WordPress block — uses WP layer */
.wp-block-card {
  background-color: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  color: var(--wp--preset--color--foreground);
}
```

### Never do

- Hardcode hex values in components — always use CSS variables
- Use Tailwind utility classes for colors
- Mix `--color-*` and `--wp--preset--color--*` in the same component without reason

---

## 7. Accessibility

All color combinations must meet WCAG 2.1 AA standards:
- **Text on backgrounds:** 4.5:1 minimum contrast ratio
- **Large text (18px+ or 14px+ bold):** 3:1 minimum
- **UI components and borders:** 3:1 minimum
- **Target:** AAA (7:1) where achievable — all state tokens already meet AAA

---

## Changelog

### v6.0 — 2026-03-17
- Complete rewrite with current retro↔WordPress token mapping (TK3)
- Updated source of truth references to actual files
- Added dual-layer architecture documentation
- Added retro namespace alias table
- Added funky token deprecation note (TK20)
- Merged TK9 scope (current retro color palette)

### v5.0 — 2026-02-22
- Renamed from `colors.md` to `Colors.md`
