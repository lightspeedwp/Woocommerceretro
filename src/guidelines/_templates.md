# Guidelines Templates — Usage Guide

**Purpose:** Standard templates for creating consistent, comprehensive guideline documentation across the WooCommerce prototype project.

**Version:** 1.0  
**Created:** 2026-03-13  
**Location:** `/guidelines/_templates/`

---

## Overview

This directory contains templates for all types of guideline documentation. Using these templates ensures:

- ✅ **Consistency** - All guidelines follow the same structure
- ✅ **Completeness** - No critical sections are missed
- ✅ **Maintainability** - Easy to update and audit
- ✅ **Discoverability** - Predictable structure for finding information

---

## Available Templates

| Template File | Use For | Example Files |
|---------------|---------|---------------|
| `component-guideline.md` | Block, Pattern, Part component docs | `ProductCard.md`, `Hero.md`, `Header.md` |
| `design-token-guideline.md` | Design system token docs | `colors.md`, `typography.md`, `spacing.md` |
| `process-guideline.md` | Development process docs | `WRITING_GUIDELINES.md`, `REPORTING_GUIDELINES.md` |
| `overview-guideline.md` | High-level architecture docs | `overview-components.md`, `overview-templates.md` |
| `report-template.md` | Project reports | `/reports/fixes/`, `/reports/audits/` |
| `prompt-template.md` | AI prompts | `/prompts/audits/`, `/prompts/workflows/` |
| `task-list-template.md` | Task tracking files | `/tasks/blocks-guidelines-gaps.md` |

---

## Template Selection Guide

### When creating component documentation:

**Use:** `component-guideline.md`

**Decision tree:**
```
Is it a functional unit (Button, ProductCard)? → Blocks (use component-guideline.md)
Is it a reusable section (Hero, FAQ)? → Patterns (use component-guideline.md)
Is it a global region (Header, Footer)? → Parts (use component-guideline.md)
Is it a UI primitive (Input, Badge)? → Blocks/UI (use component-guideline.md)
```

**Target locations:**
- `/guidelines/blocks/[ComponentName].md`
- `/guidelines/patterns/[ComponentName].md`
- `/guidelines/parts/[ComponentName].md`

---

### When creating design token documentation:

**Use:** `design-token-guideline.md`

**Decision tree:**
```
Is it about visual properties (colors, spacing, typography)? → Design Tokens
Is it about interaction patterns (buttons, forms, navigation)? → Could be either
Is it about layout structure (grid, containers)? → Design Tokens or Responsive
```

**Target locations:**
- `/guidelines/design-tokens/[token-name].md`

**Required token files (minimum 14):**
1. `colors.md`
2. `typography.md`
3. `spacing.md`
4. `dark-light-mode.md`
5. `buttons.md`
6. `forms.md`
7. `shadows.md`
8. `borders.md`
9. `radii.md`
10. `iconography.md`
11. `animations.md`
12. `responsive.md`
13. `touch-targets.md`
14. `navigation.md`

---

### When creating process documentation:

**Use:** `process-guideline.md`

**Decision tree:**
```
Is it about HOW to do something (write docs, create reports)? → Process
Is it about WHAT to build (component specs)? → Component
Is it about project workflow? → Process
```

**Examples:**
- `WRITING_GUIDELINES.md` - How to write guideline docs
- `REPORTING_GUIDELINES.md` - How to create reports
- `SHELL_SCRIPT_GUIDELINES.md` - How to write shell scripts
- `PROMPT_GENERATION_GUIDELINES.md` - How to create AI prompts

**Target locations:**
- `/guidelines/[PROCESS_NAME]_GUIDELINES.md`

---

### When creating overview/architecture documentation:

**Use:** `overview-guideline.md`

**Decision tree:**
```
Is it explaining a system/pattern? → Overview
Is it explaining multiple components together? → Overview
Is it a reference index? → Overview
```

**Examples:**
- `overview-components.md` - Component architecture system
- `overview-templates.md` - Template layer architecture
- `overview-icons.md` - Icon system reference

**Target locations:**
- `/guidelines/overview-[topic].md`

---

## How to Use a Template

### Step 1: Choose the Right Template

Refer to the selection guide above.

### Step 2: Copy Template to Target Location

```bash
# Example: Creating a new block component guideline
cp /guidelines/_templates/component-guideline.md /guidelines/blocks/MyComponent.md
```

### Step 3: Fill in the Placeholders

Templates use `[PLACEHOLDER]` syntax. Replace all:

```markdown
# [COMPONENT_NAME] Component

Replace with:

# ProductCard Component
```

**Common placeholders:**
- `[COMPONENT_NAME]` - Component name (PascalCase)
- `[FILE_PATH]` - Path to component file
- `[TOKEN_NAME]` - Design token name (kebab-case)
- `[PROCESS_NAME]` - Process name (SCREAMING_SNAKE_CASE)

### Step 4: Complete Required Sections

Every template has **REQUIRED** and **OPTIONAL** sections marked clearly:

```markdown
## Overview (REQUIRED)

[REQUIRED section - always fill this out]

## Advanced Usage (OPTIONAL)

[OPTIONAL section - only if relevant]
```

**Rules:**
- ✅ **ALWAYS** complete REQUIRED sections
- ✅ **DELETE** optional sections if not applicable
- ❌ **NEVER** leave placeholder text in final file
- ❌ **NEVER** leave empty REQUIRED sections

### Step 5: Verify Completeness

Run this checklist before committing:

- [ ] All `[PLACEHOLDERS]` replaced with actual content
- [ ] All REQUIRED sections completed
- [ ] Empty OPTIONAL sections deleted
- [ ] Code examples included (where applicable)
- [ ] Dark mode examples included (for visual components)
- [ ] Accessibility section completed (for UI components)
- [ ] File saved to correct location
- [ ] File added to appropriate index/README

---

## Template Maintenance

### When to Update Templates

Templates should be updated when:

1. **New required section** discovered across multiple guidelines
2. **Best practice** emerges from writing multiple guidelines
3. **Accessibility standards** change
4. **Project architecture** changes significantly

### How to Update Templates

1. **Update template file** in `/guidelines/_templates/`
2. **Document change** in this file under "Template Changelog"
3. **Update existing guidelines** using updated template (if critical)
4. **Notify team** of template changes

---

## Template Changelog

| Date | Template | Change | Reason |
|------|----------|--------|--------|
| 2026-03-13 | All | Initial creation | Standardize guideline structure |

---

## Special Cases

### Hybrid Component + Token Documentation

**Example:** Buttons are both a component AND a design token.

**Solution:** Create TWO files:
1. `/guidelines/design-tokens/buttons.md` - Token values (sizes, colors, variants)
2. `/guidelines/blocks/Button.md` - Component implementation (props, usage, examples)

**Cross-reference** each file to the other.

---

### Migration of Existing Guidelines

When migrating existing guideline to template:

1. **Read existing guideline** completely
2. **Choose appropriate template**
3. **Copy content** into template structure
4. **Fill gaps** where template has sections existing doc lacks
5. **Remove redundancy** where existing doc duplicates template
6. **Verify** completeness checklist
7. **Replace** old file with new

---

## Quick Reference

### File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| **Component** | `PascalCase.md` | `ProductCard.md` |
| **Design Token** | `kebab-case.md` | `dark-light-mode.md` |
| **Process** | `SCREAMING_SNAKE_CASE.md` | `WRITING_GUIDELINES.md` |
| **Overview** | `overview-topic.md` | `overview-components.md` |

### Required Sections by Template

**Component Guideline:**
- Overview
- Implementation
- Props/API
- Examples
- Accessibility
- Dark Mode Support

**Design Token Guideline:**
- Token Definitions
- Usage Examples
- Dark Mode Variants
- Implementation Guide

**Process Guideline:**
- Purpose
- Standards
- Step-by-Step Instructions
- Examples
- Checklist

**Overview Guideline:**
- Architecture Diagram
- Component Inventory
- Usage Patterns
- Best Practices

---

## Related Documentation

- **WRITING_GUIDELINES.md** - General writing standards
- **REPORTING_GUIDELINES.md** - Report structure standards
- **Guidelines.md** - Main project guidelines (references these templates)

---

**Last Updated:** 2026-03-13  
**Maintainer:** Development Team  
**Review Frequency:** Quarterly
