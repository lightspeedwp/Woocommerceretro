# Refactoring Blog Components for Figma Make Parser Compatibility

**Category:** Refactoring
**Version:** 1.0
**Date:** March 1, 2026
**Target Folder:** `/src/app/components/blog/`

## Context
The Figma Make parser has specific constraints for JavaScript/TypeScript code within React components:
- **No Arrow Functions:** All component and helper functions must use `function` declarations.
- **No Parameter Destructuring:** Function parameters (like `props`) must be passed as a single object and manually assigned.
- **No Spread Operators:** Object and array spreads (`...`) are not allowed. Use `Object.assign` or manual assignment.
- **No Trailing Commas:** Ensure no trailing commas in object or array literals.
- **No Rest Parameters:** `...rest` is not allowed.

## Files to Refactor
- `/src/app/components/blog/PostCard.tsx`
- `/src/app/components/blog/BlogArchive.tsx`
- `/src/app/components/blog/SinglePost.tsx`
- `/src/app/components/blog/CategoryArchive.tsx`
- `/src/app/components/blog/TagArchive.tsx`

## Refactoring Checklist
1. Replace `const Component = ({ prop1, prop2 }) => {` with `function Component(props) {`.
2. Manually assign props: `const prop1 = props.prop1; const prop2 = props.prop2;`.
3. Replace arrow functions in `map`, `filter`, `find`, etc. with `function(item) { return ...; }`.
4. Replace event handler arrow functions with `function(e) { ... }`.
5. Remove all spread operators (`...`).
6. Remove trailing commas from all literals.
7. Replace `React.FC<Props>` with standard function types.
8. Ensure `useParams` destructuring is replaced with manual assignment if used within a function (though `const { slug } = useParams()` is technically a destructuring, I should check if it's allowed or if `const params = useParams(); const slug = params.slug;` is safer). Based on "No parameter destructuring", I should probably use manual assignment for all destructuring.

## Expected Outcome
Files are fully compatible with the Figma Make parser while maintaining the "Funky Redesign" aesthetic and WordPress FSE alignment.
