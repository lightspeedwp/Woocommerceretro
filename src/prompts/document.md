# Document — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-15
**Type:** Single Prompt
**Trigger Word:** `document`
**Duration:** 15-30 minutes

---

## Objective

Create or update guideline documentation for a component, design token, or process.

---

## Prerequisites

1. Read `/guidelines/_templates.md` — select correct template
2. Read `/guidelines/WRITING_GUIDELINES.md` — follow prose standards
3. Read `/guidelines/Core-Repository-Guidelines.md` — follow Markdown hierarchy

---

## Execution Steps

### Phase 1: Identify Target (2 min)

- [ ] Ask user what to document (or auto-detect from context)
- [ ] Determine template type: component, design-token, general, or process
- [ ] Check if guideline already exists — update if so, create if not

### Phase 2: Read Source Code (5 min)

- [ ] Read the component/feature source file
- [ ] Identify props, CSS classes, variants, states
- [ ] Note accessibility features and dark mode support

### Phase 3: Write Guideline (10-20 min)

- [ ] Use the correct template from `/guidelines/_templates/`
- [ ] Fill all REQUIRED sections
- [ ] Include code examples with correct file paths
- [ ] Include dark mode examples
- [ ] Include accessibility requirements
- [ ] Keep file under 500 lines (split if longer)

### Phase 4: Save and Register (2 min)

- [ ] Save to correct `/guidelines/` subdirectory
- [ ] Update `/guidelines/README.md` if new file
- [ ] Mark any related task as complete in `/tasks/task-list.md`

---

## File Location Rules

| Guideline Type | Save To |
|---------------|---------|
| Block component | `/guidelines/blocks/[Name].md` |
| Pattern component | `/guidelines/patterns/[Name].md` |
| Part component | `/guidelines/parts/[Name].md` |
| Design token | `/guidelines/design-tokens/[Name].md` |
| Process/workflow | `/guidelines/[PROCESS_NAME].md` |
| Development standard | `/guidelines/development/[name].md` |

---

## Success Criteria

- [ ] Guideline file created or updated
- [ ] All REQUIRED template sections filled
- [ ] File under 500 lines
- [ ] Dark mode documented
- [ ] Accessibility documented
- [ ] Saved in correct directory
