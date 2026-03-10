# Form Styling Audit & Showcase Generation Workflow

**Description:** This workflow audits the codebase for any lingering Tailwind CSS or inline styles in forms, ensures strict adherence to WordPress-aligned semantic classes, generates an audit report, creates a task list, and builds a comprehensive Form Showcase page.

## Phase 1: Audit Codebase for Form Styling

1. Search the `/src/app/` directory for form-related elements (`<form>`, `<input>`, `<textarea>`, `<select>`, `<button>`).
2. Identify components that are incorrectly using inline styles (`style={{...}}`) or Tailwind utility classes (`flex`, `p-4`, `m-2`, `bg-white`, `rounded`, `text-`, etc.) on these form elements.
3. Verify if the design system (`/styles/globals.css` and `/src/styles/blocks/forms/`) has complete and clear WordPress-aligned classes for forms (e.g., `wc-block-components-text-input`, `wp-block-button`, `wc-block-checkout__input`, etc.).

## Phase 2: Create the Audit Report

Generate a report and save it to `/reports/audits/2026-03-XX_forms-styling-audit.md` (use today's date).
The report must include:
- Executive Summary
- List of components with inline styles or Tailwind classes on forms.
- Missing or incomplete WordPress/WooCommerce form CSS classes in the global stylesheets.
- Required CSS updates to ensure a cohesive design system for all forms.

## Phase 3: Create the Refactoring Task List

Generate a prioritized task list and save it to `/tasks/forms-refactor-tasks.md`.
The task list must include:
- [ ] CSS fixes: Adding/updating necessary form tokens and semantic classes in `/styles/globals.css`.
- [ ] Component fixes: A checklist of every component that needs Tailwind/inline styles removed and replaced with WordPress classes.
- [ ] Showcase Page Implementation: Tasks to hook up the Dev Tools Form Showcase.
- *Add a summary of this list to the Master Task List at `/tasks/task-list.md`.*

## Phase 4: Build the Form Showcase Page (Dev Tools)

Create a new page at `/src/app/components/templates/PageFormShowcase.tsx`.
*CRITICAL: You MUST use legacy JavaScript syntax (no `const`, `let`, arrow functions, or object destructuring) for this file to prevent Figma Make parser errors.*

This page should render examples of ALL the following forms using the correct WordPress-aligned CSS:
1. Product Review Form
2. Blog Post Comments Form
3. Contact Form
4. Login Form
5. Registration Form
6. WooCommerce Checkout Form (Billing/Shipping)
7. WooCommerce My Account - Password Reset / Lost Password
8. WooCommerce My Account - Update Profile
9. WooCommerce My Account - Change Address
10. Search Form with Autocomplete
11. Newsletter Subscription Form
12. Order Tracking Form
13. Gift Card Purchase Form
14. Coupon / Promo Code Form
15. Product Enquiry Form

*Make sure to also add the route to `/routes.ts` under the Developer Tools section.*

## Phase 5: Request Permission

Once the Report, Task List, and Showcase Page structure are created, **STOP**. 
Present the findings to the user and ask for permission to begin executing the refactoring tasks outlined in `/tasks/forms-refactor-tasks.md`.

---
**CRITICAL CONSTRAINTS:**
- NO Tailwind classes are allowed in the refactor.
- ALL styling must map to WordPress/WooCommerce BEM CSS classes.
- Do NOT use modern JavaScript syntax (`const`, `let`, `=>`) in any `.ts` or `.tsx` files inside `/src/app/` during your modifications.