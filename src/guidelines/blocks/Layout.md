# Block System: Layout & Design

**Type:** Block Category  
**Last Updated:** 2026-02-22

## Overview
Structural components for building page layouts and containers.

## Components

### Card
Container for grouped content.
```tsx
import { Card, CardHeader, CardContent } from "@/components/blocks/design/Card";
```

### Separator
Visual divider.
```tsx
import { Separator } from "@/components/blocks/design/Separator";
```

### Modal (Dialog)
Overlay dialogs.
```tsx
import { Modal, ModalContent, ModalTrigger } from "@/components/blocks/layout/Modal";
```

### Drawer (Sheet)
Side panels.
```tsx
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/blocks/layout/Drawer";
```

## Styling
Defined in `src/styles/blocks/design/` and `src/styles/blocks/layout/`.
- `.wp-block-card`
- `.wp-block-separator`
- `.wp-modal-*`
- `.wp-sheet-*` (Drawer)

## Changelog

### v1.1 - 2026-02-22
- Renamed from `layout.md` to `Layout.md` (naming convention enforcement)
