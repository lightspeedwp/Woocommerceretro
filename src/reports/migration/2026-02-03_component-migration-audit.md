# Component & Architecture Migration Audit
**Date:** February 3, 2026
**Type:** Migration Audit

## Executive Summary
This audit outlines the structural changes required to migrate the project to a strict WordPress Block Theme architecture. The focus is on moving away from Shadcn UI and legacy structures towards a block-based organization for components, styles, and guidelines.

## Migration Scope

### 1. Shadcn UI Removal
The following components in `/src/app/components/ui/` have been identified for migration to `/src/app/components/blocks/`:
- `accordion.tsx` → `blocks/design/Accordion.tsx`
- `button.tsx` → `blocks/design/Buttons.tsx`
- `card.tsx` → `blocks/design/Group.tsx` (or similar container block)
- `input.tsx` → `blocks/forms/Input.tsx`
- ...and remaining UI primitives.

### 2. Guideline Restructuring
Guidelines are being reorganized into a block-first taxonomy:
- `/guidelines/blocks/text/`
- `/guidelines/blocks/media/`
- `/guidelines/blocks/design/`
- `/guidelines/blocks/widgets/`
- `/guidelines/blocks/theme/`
- `/guidelines/blocks/woocommerce/`
- `/guidelines/blocks/embed/`

### 3. CSS Architecture
Styles are being aligned 1:1 with the block structure in `/src/styles/blocks/`.

## Action Plan
1.  **Directory Setup:** Create missing subfolders in guidelines and styles.
2.  **File Migration:** Move existing component, guideline, and CSS files to their new locations.
3.  **Refactoring:** Update import paths and refactor components to use WordPress classes instead of Tailwind/Shadcn utilities.
4.  **Documentation:** Create missing guidelines for all WordPress Core and WooCommerce blocks.
