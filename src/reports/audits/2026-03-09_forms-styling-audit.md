# Forms Styling Audit Report

**Date:** March 9, 2026  
**Auditor:** Make Assistant  
**Status:** Audit Complete  

## Executive Summary

An audit of the `/src/app/` directory was conducted to evaluate the current styling of form-related elements (`<form>`, `<input>`, `<textarea>`, `<select>`, `<button>`). 
The audit confirmed that **all Tailwind utility classes and inline styles (`style={{...}}`) have been successfully removed** from form elements across the codebase. 

However, the audit revealed a significant architectural fragmentation: rather than using a unified WordPress/WooCommerce design system for forms (such as `.wp-block-input` or `.wc-block-components-text-input`), most components are relying on custom, component-specific BEM classes. This creates redundant CSS and inconsistencies across the application.

## Components Audited

The following components were found to contain form elements:
- `/src/app/components/patterns/account/AccountDetails.tsx` (using `.account-details__input`)
- `/src/app/components/parts/MobileMenu.tsx` (using `.woocommerce-mobile-menu__search-form`)
- `/src/app/components/templates/PageContact.tsx` (using `.info-contact__input`)
- `/src/app/components/templates/PageLogin.tsx` (using `.account-login__input`)
- `/src/app/components/templates/PageReturnsPortal.tsx` (using `.legal-form__input`)
- `/src/app/components/templates/PageTrackOrder.tsx` (using `.track-lookup__input`)
- `/src/app/components/templates/SinglePostFullWidth.tsx` (using `.blog-comments__form-input`)
- `/src/app/components/blog/SinglePost.tsx` (using `.blog-single__form-input`)
- `/src/app/components/patterns/ShopFilterSidebar.tsx` (using `.shop-filter__option-left input`)

## Findings

1. **No Tailwind / No Inline Styles:** 
   Excellent progress! There are no instances of Tailwind classes or inline styles being used on any form elements in the audited files.
2. **Fragmented Class Naming:**
   Instead of using a global design system for form inputs, each component has defined its own CSS classes. For example, `.account-details__input`, `.info-contact__input`, and `.blog-comments__form-input` likely share 90% of the same CSS rules for borders, padding, background, and focus states.
3. **Missing Global Form System Usage:**
   While `/src/styles/blocks/forms/` exists and contains `.wp-block-input`, this global class is not being utilized across the general application pages.

## Required CSS Updates

To ensure a cohesive, globally controlled design system for all forms:
1. **Promote Global Form Classes:** Ensure `.wp-block-input`, `.wp-block-button`, `.wp-block-textarea`, and `.wp-block-select` are fully defined in the global stylesheet with robust light/dark mode support and accessibility focus states.
2. **Deprecate Component-Specific Input Styles:** Remove component-specific input classes and replace them with the global `.wp-block-*` or `.wc-block-components-*` classes.
3. **Container-Level Overrides:** Only use component-specific BEM classes for structural layout (e.g., grids, rows) of the forms, not for the atomic form fields themselves.

---
**Next Step:** Proceed to execute the tasks outlined in `/tasks/forms-refactor-tasks.md`.