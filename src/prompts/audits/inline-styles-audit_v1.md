# Audit Prompt: Hardcoded Inline Styles & WordPress Variable Enforcement

## Objective
Perform a comprehensive audit of all `.tsx` and `.ts` files within the `/src/app/` directory to identify and eliminate hardcoded inline styles—specifically color hex/rgb values and font-related properties. Enforce strict adherence to the project's WordPress FSE (Full Site Editing) architecture by replacing them with WordPress-aligned CSS variables and semantic utility classes.

## Scope
- **Target Directory:** `/src/app/**/*.tsx` and `/src/app/**/*.ts`
- **Key Target Attributes:** `style={{ ... }}`

## 🚨 Highest Priority Directives
1. **ZERO Hardcoded Colors:** There must be absolutely zero instances of hardcoded color values (e.g., `#FFFFFF`, `#000`, `rgb(255,0,0)`, `rgba(...)`, or raw color words like `'red'`) used within the `style={{}}` prop of any component.
2. **ZERO Hardcoded Fonts:** There must be absolutely zero instances of hardcoded font families, font sizes, line heights, or font weights within the `style={{}}` prop.
3. **Mandatory WP Variables:** Every color, typography, or spacing requirement must rely on WordPress-aligned CSS variables (e.g., `var(--wp--preset--color--primary)`, `var(--wp--preset--font-size--large)`) defined in the project's global stylesheet or root theme variables.

## Execution Steps

### Phase 1: Deep Codebase Scan
Search the codebase for the following anti-patterns:
- `style={{ color: '#...`
- `style={{ backgroundColor: '#...`
- `style={{ borderColor: '#...`
- `style={{ fontSize: '...`
- `style={{ fontFamily: '...`
- `style={{ fontWeight: '...`
- Any `style` prop that contains a string matching a hex code regex (`/#[0-9a-fA-F]{3,8}/`).

### Phase 2: Analysis & Classification
For every match found, classify it into one of two categories:
- **Violation:** A static style that should be moved to `/styles/globals.css` (or appropriate block CSS) using a semantic class name, or replaced by an existing utility class.
- **Acceptable Dynamic Value:** A value computed at runtime (e.g., a progress bar `width: ${percentage}%`). *Note: Even dynamic styles should NOT contain hardcoded hex colors.*

### Phase 3: Remediation Strategy
For each identified **Violation**, provide the required fix:
1. **Identify the replacement variable:** Consult `/src/styles/theme-variables.css` to find the corresponding `--wp--preset--color--*` or `--wp--preset--font-size--*` variable.
2. **Define the CSS:** Provide the exact CSS class definition that should be added to `/styles/globals.css` (using BEM naming conventions).
3. **Refactor the Component:** Show the before/after code for the React component, stripping out the `style` prop and injecting the new `className`.

## Output Format Requirements
Please generate a report detailing your findings and actionable tasks. Your response MUST include:

1. **Summary of Findings:** Total files scanned, number of violations found, and number of acceptable dynamic styles found.
2. **Detailed Violation List:**
   - File Path & Line Number
   - The offending code snippet
   - The proposed fix (including the exact WP CSS variable to use)
3. **Generated Task List:** A prioritized checklist of files to be refactored, formatted so it can be copied directly into `/tasks/task-list.md`.

## Context & Boundaries
- All new CSS must be added to `/styles/globals.css` or the appropriate protected file in `/src/styles/`.
- Do not create inline styles even if they use CSS variables (e.g., `style={{ color: 'var(--wp--preset--color--primary)' }}`). Always prefer a CSS class.
- Keep in mind that we are using legacy React syntax (no arrow functions, no `const`/`let`, no destructuring) in the `/src/app/` directory as required by the Figma Make parser.