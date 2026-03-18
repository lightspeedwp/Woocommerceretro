# Account patterns (retro)

**Version:** 1.0
**Type:** Pattern (Account Sub-pages)
**Directory:** `/src/app/components/patterns/account/`
**CSS:** `/src/styles/sections/retro-page-layouts.css`
**BEM:** `.retro-dashboard__*`, `.retro-orders__*`, `.retro-addresses__*`, `.retro-acct-loyalty__*`

---

## Overview

Four account sub-page patterns rendered inside the `AccountLayoutRetro` template's `<Outlet />`. Each uses the PlayPocket retro gaming aesthetic with pixel-font display headings, glass cards, and gamified language.

---

## Components

### DashboardRetro

**File:** `DashboardRetro.tsx`
**BEM:** `.retro-dashboard__*`

```
DashboardRetro
├── Welcome header ("Welcome back, player 1")
├── Stats grid (4 cards)
│   └── Stat card (icon + value + label)
├── Quick actions grid
└── Recent activity feed
```

| Element | Class |
|---------|-------|
| Root | `.retro-dashboard` |
| Welcome | `.retro-dashboard__welcome` |
| Stats grid | `.retro-dashboard__stats-grid` |
| Stat card | `.retro-dashboard__stat-card` |
| Stat icon | `.retro-dashboard__stat-icon` |

---

### OrdersRetro

**File:** `OrdersRetro.tsx`
**BEM:** `.retro-orders__*`

```
OrdersRetro
├── Header ("Inventory (orders)")
├── Order list
│   └── Order row (id, date, total, status badge, items count)
└── View order detail link
```

| Element | Class |
|---------|-------|
| Root | `.retro-orders` |
| Header | `.retro-orders__header` |
| Row | `.retro-orders__row` |
| Status | `.retro-orders__status` |

---

### AddressesRetro

**File:** `AddressesRetro.tsx`
**BEM:** `.retro-addresses__*`

```
AddressesRetro
├── Header + "Add new" button
├── Address cards grid
│   └── Address card
│       ├── Label (e.g. "Home", "Work")
│       ├── Full address text
│       ├── Default badge (if default)
│       └── Edit / Delete actions
└── Add/Edit modal form
```

| Element | Class |
|---------|-------|
| Root | `.retro-addresses` |
| Card | `.retro-addresses__card` |
| Actions | `.retro-addresses__actions` |

**Data source:** `SAVED_ADDRESSES` from `/src/app/data/newPages.ts`

---

### LoyaltyRetro

**File:** `LoyaltyRetro.tsx`
**BEM:** `.retro-acct-loyalty__*`

```
LoyaltyRetro
├── Header ("Achievements & XP")
├── XP progress bar (tier name, points, progress %)
├── Tier benefits list
└── Recent activity feed
```

| Element | Class |
|---------|-------|
| XP bar | `.retro-acct-loyalty__xp-bar` |
| XP header | `.retro-acct-loyalty__xp-header` |
| Tier name | `.retro-acct-loyalty__tier-name` |

**Data source:** `loyaltyUser`, `recentActivity`, `getLoyaltyProgress()` from `/src/app/data/loyalty.ts`

---

## Retro / funky spec (shared)

- All-caps pixel-font display headings (`.retro-font-display`)
- Glass card backgrounds with subtle border
- Neon status badges (delivered = green glow, shipped = cyan glow)
- Phosphor icons with `weight="bold"` or `weight="fill"`
- Spring hover lift on interactive cards
- Gamified language ("Player 1", "Inventory", "Loot drops", "XP", "Achievements")

---

## Accessibility

- Semantic heading hierarchy (`<h2>` for page title, `<h3>` for sections)
- Icon-only buttons have `aria-label`
- Status badges use text (not colour alone)
- Address form: `aria-required`, `aria-describedby` on fields
- Progress bar: `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- 44x44px minimum touch targets on action buttons

---

## Used in

- `AccountLayoutRetro` template (via React Router `<Outlet />`)

---

**Version:** 1.0 (March 2026)
