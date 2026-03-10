# Audit Prompt A1: Guidelines Freshness Audit

**Version:** 1.0  
**Created:** February 21, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-21-guidelines-freshness-audit.md`  
**Task Output:** `/tasks/guidelines-remediation.md`

---

## Objective

Scan ALL guideline files in `/guidelines/` recursively. Identify files that are outdated (older than February 20, 2026), contain conflicting information with the most recent guidelines, or reference deprecated patterns.

## Pre-Read (Required)

```
/guidelines/Guidelines.md         — Current master guidelines (source of truth)
/guidelines/WRITING_GUIDELINES.md — Standards for guideline files
```

## Procedure

### Step 1: Inventory

List every file in `/guidelines/` recursively. Record:
- Filename and path
- File size (approximate from content)
- Any date mentioned in the file header

### Step 2: Conflict Detection

For EACH file, scan for:

1. **Tailwind References** — Any mention of Tailwind CSS, `tailwind.config`, utility classes like `flex`, `p-4`, `text-center`, etc. These should have been removed per Guidelines v2.5.
2. **Deleted File Paths** — References to:
   - `/styles/globals.css` (the old flat file location)
   - `/styles/woocommerce-complete.css` (mentioned 28+ times in Guidelines.md but file doesn't exist at that name)
   - `/components/` at root level (partially migrated to `/src/app/components/`)
3. **Token Naming Conflicts** — References to:
   - `--color-*` tokens instead of `--wp--preset--color--*`
   - `--font-size-*` instead of `--wp--preset--font-size--*`
   - `--space-*` instead of `--wp--preset--spacing--*`
4. **Outdated Component Paths** — References to components in wrong directories
5. **Version/Date Conflicts** — Files claiming versions or dates that conflict with current state
6. **Contradictory Advice** — Instructions that directly contradict Guidelines.md v2.6

### Step 3: Classification

Score each file:
- **CURRENT** — No issues found, content is accurate
- **STALE** — Minor issues (e.g., one outdated path reference), needs small updates
- **OUTDATED** — Multiple issues, needs significant rewrite to align with current standards
- **CONFLICTING** — Contains advice that actively contradicts current guidelines, potentially harmful

### Step 4: Generate Report

Save to `/reports/audits/2026-02-21-guidelines-freshness-audit.md` using the format specified in the orchestrator.

### Step 5: Generate Task List

Save prioritised remediation tasks to `/tasks/guidelines-remediation.md`:
- CONFLICTING files first (highest priority)
- OUTDATED files second
- STALE files last
- For each: describe specific changes needed

## Success Criteria

- Every file in `/guidelines/` has been scanned
- Zero false positives (each issue is verified against current Guidelines.md)
- Task list is actionable (specific changes described, not vague)
