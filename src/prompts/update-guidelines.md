# Update Guidelines — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-15
**Type:** Single Prompt
**Trigger Word:** `update guidelines`
**Duration:** 15-30 minutes

---

## Objective

Refresh one or more guideline files to reflect current codebase state, update frontmatter (version, date), and ensure content matches actual implementation.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` for current project state
2. Read `/guidelines/Core-Repository-Guidelines.md` for documentation standards
3. Read `/guidelines/_templates.md` for available templates

---

## Execution Steps

### Phase 1: Identify Target (2 min)

- [ ] Ask user which guideline(s) to update (or auto-detect from context)
- [ ] Read the target guideline file(s)
- [ ] Read the corresponding source code to check for drift

### Phase 2: Frontmatter Update (1 min per file)

Every guideline file MUST have frontmatter at the top. Update or add:

```markdown
---
title: "[Document Title]"
version: "[X.Y.Z]" (increment minor for content changes, patch for typos)
updated: "YYYY-MM-DD"
---
```

If the file has an older format (e.g., `**Version:** X.Y`), convert it to YAML frontmatter.

### Phase 3: Content Refresh (10-25 min)

- [ ] Compare guideline rules against actual source code
- [ ] Update any rules that no longer match implementation
- [ ] Add missing patterns or components discovered in code
- [ ] Remove references to deleted files or deprecated patterns
- [ ] Verify all file paths referenced in the guideline still exist
- [ ] Ensure dark mode documentation is present and accurate
- [ ] Ensure accessibility documentation is present and accurate

### Phase 4: Template Alignment (5 min)

For files that are significantly non-standard:

- [ ] Read the appropriate template from `/guidelines/_templates/`
- [ ] Rewrite the file using the template structure as the base
- [ ] Preserve all existing content but reorganize into template sections
- [ ] This produces more consistent files than patching non-standard ones

### Phase 5: File Size Check (2 min)

- [ ] Verify file is under 500 lines
- [ ] If over 500 lines, split into sub-guideline files
- [ ] Update any files that reference the split guideline

---

## Frontmatter Standards

### Required Fields

```yaml
---
title: "Human-readable document title"
version: "X.Y.Z"
updated: "YYYY-MM-DD"
---
```

### Optional Fields

```yaml
---
title: "Document Title"
version: "X.Y.Z"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
scope: "What this guideline covers"
status: "Active | Draft | Deprecated"
---
```

### Version Incrementing

- **Major (X):** Complete restructure or scope change
- **Minor (Y):** New sections, significant content changes
- **Patch (Z):** Typo fixes, date updates, minor clarifications

---

## Success Criteria

- [ ] All targeted files have current frontmatter (version + date)
- [ ] Content matches actual codebase state
- [ ] File paths in the guideline are valid
- [ ] Files are under 500 lines
- [ ] No new files created in root directory

---

## Output

No report needed for routine updates. For large-scale updates, create a report at `/reports/documentation/YYYY-MM-DD_guidelines-update.md`.
