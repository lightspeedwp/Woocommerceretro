# Expand Hooks — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand hooks`
**Duration:** 15-25 minutes

---

## Objective

Analyse the codebase for repeated logic patterns that should be extracted into reusable custom hooks. Custom hooks encapsulate stateful logic — media queries, localStorage, intersection observers, debounce, keyboard navigation — so components stay lean and logic is shared.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — project structure
2. Scan `/src/app/hooks/` — existing custom hooks
3. Scan `/src/app/components/` — find duplicated logic

---

## Execution Steps

### Phase 1: Inventory existing hooks (3 min)

| Hook | File | Purpose | Used By |
|------|------|---------|---------|
| ... | ... | ... | ... |

### Phase 2: Scan for duplicated logic (5-10 min)

Search components for patterns that indicate a missing hook:

| Pattern | Hook Candidate | Evidence |
|---------|---------------|----------|
| `useState` + `useEffect` + `matchMedia` | `useMediaQuery` | Responsive logic in 3+ components |
| `useState` + `localStorage.getItem/setItem` | `useLocalStorage` | Persistence logic duplicated |
| `setTimeout` in `useEffect` for input delay | `useDebounce` | Search, filter inputs |
| `IntersectionObserver` in `useEffect` | `useIntersectionObserver` | Lazy loading, infinite scroll, scroll animations |
| `addEventListener('keydown')` patterns | `useKeyboardNavigation` | Menu, modal, dropdown keyboard handling |
| `addEventListener('scroll')` patterns | `useScrollPosition` | Sticky header, back-to-top, parallax |
| `document.addEventListener('click')` outside | `useClickOutside` | Dropdown, modal, popover close |
| `navigator.clipboard` | `useClipboard` | Copy-to-clipboard buttons |
| `window.innerWidth/Height` | `useWindowSize` | Responsive calculations |
| `prefers-reduced-motion` check | `useReducedMotion` | Animation gating |
| `document.title = ...` | `useDocumentTitle` | Page title per route |
| Timer/countdown logic | `useCountdown` | Flash sales, limited offers |
| Pagination state (page, perPage, total) | `usePagination` | Archive, search results |
| Toggle boolean state | `useToggle` | Show/hide, open/close |

### Phase 3: Recommend hooks (5-10 min)

For each recommendation:

```markdown
### Hook [N]: [useHookName]

**File:** `/src/app/hooks/[use-hook-name].ts`
**Signature:** `[useHookName](params): ReturnType`
**Priority:** P0 (eliminates bugs) / P1 (reduces duplication) / P2 (convenience)
**Currently duplicated in:** [Component list]
**Lines saved per component:** ~[N]
```

### Phase 4: Summary (2 min)

```
Hook expansion analysis complete.
- Existing hooks: [X]
- Duplicated logic patterns found: [Y]
- Recommended hooks: [Z]
  - P0: [N] | P1: [N] | P2: [N]

→ Next: Say "continue" to build the highest-priority hook.
→ Or: Say "expand contexts" to identify companion contexts.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/development/modern-react-coding-standards.md`

---

**Version:** 1.0
**Trigger Word:** `expand hooks`
