# Retro Theme Routing Consolidation Audit

## Objective
Audit the routing and template structure to consolidate the "Retro" theme as the primary, default experience. Ensure all `/retro` prefixed or suffixed routes are merged into their base standard routes, removing duplicate parallel pages. 

## Context
During development, the Retro theme was built iteratively alongside the existing standard theme by creating parallel files (e.g., `PageShippingReturnsRetro.tsx` alongside `PageShippingReturns.tsx`) and parallel routes (e.g., `/shipping/retro` alongside `/shipping`). The user has requested that we update the existing paths directly instead of adding parallel paths. For instance, `PageShippingReturnsRetro.tsx` should be mapped to the standard `/shipping` route, and the legacy `PageShippingReturns.tsx` file should be deleted.

## Instructions for Audit

1. **Find Target Routes**:
   Search `routes.ts` for any route containing `/retro`. List all matching routes and their corresponding base routes.
   
2. **Find Duplicate Templates**:
   Identify pairs of standard and retro templates in `/src/app/components/templates/` (e.g., `PageCart.tsx` and `PageCartRetro.tsx`).
   
3. **Identify Internal Links**:
   Scan all `*Retro.tsx` templates and `*RetroPattern.tsx` files for `to=".../retro"` paths used in `<Link>` components that need to be updated to point to the base URL.
   
4. **Draft Consolidation Plan**:
   List the files to be deleted and the specific updates required in `routes.ts` to map the `Retro` templates to the primary paths.

## Expected Output
Generate an audit report at `/reports/audits/YYYY-MM-DD_retro-theme-routing-audit.md` and a corresponding task list at `/tasks/retro-routing-consolidation.md`.