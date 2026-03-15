# Cleanup Guidelines — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-15
**Type:** Single Prompt
**Trigger Word:** `cleanup guidelines`
**Duration:** 20-40 minutes

---

## Objective

Find and merge duplicate guidelines, delete outdated ones, and ensure all guideline files follow the standard template structure with current frontmatter.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` for the sub-guidelines directory
2. Read `/guidelines/_templates.md` for template standards
3. Read `/guidelines/Core-Repository-Guidelines.md` for documentation rules

---

## Execution Steps

### Phase 1: Inventory (5 min)

- [ ] List all files in `/guidelines/` and subdirectories
- [ ] Record file name, line count, last-updated date (from frontmatter or file)
- [ ] Flag files missing frontmatter
- [ ] Flag files over 500 lines

### Phase 2: Duplicate Detection (5 min)

- [ ] Identify files covering the same topic (e.g., two files about dark mode)
- [ ] Compare content overlap percentage
- [ ] Decide which file to keep (prefer the one with more complete content)
- [ ] Plan merge strategy: absorb content from duplicate into primary file

### Phase 3: Outdated Detection (5 min)

- [ ] Check each file's `updated` date against the codebase
- [ ] Flag files where the referenced code has changed significantly
- [ ] Flag files referencing deleted components, removed patterns, or deprecated approaches
- [ ] Mark files for update or deletion

### Phase 4: Merge Duplicates (10-15 min)

For each duplicate pair:

- [ ] Read the appropriate template from `/guidelines/_templates/`
- [ ] Rewrite the primary file using the template as the base structure
- [ ] Incorporate unique content from the duplicate file
- [ ] Delete the duplicate file
- [ ] Update any files that referenced the deleted duplicate

### Phase 5: Update Stale Files (5-10 min)

For each outdated file:

- [ ] If content is still relevant: update content and frontmatter
- [ ] If content is completely obsolete: delete the file
- [ ] Update `/guidelines/Guidelines.md` sub-guidelines directory if files were deleted

### Phase 6: Standardize Frontmatter (5 min)

For files missing frontmatter:

- [ ] Add YAML frontmatter block with title, version, updated fields
- [ ] Set version to `1.0.0` if no version existed
- [ ] Set updated to today's date

---

## Merge Rules

1. **Keep the file with the more descriptive name** (e.g., keep `Dark-Mode.md` over `dark-mode-notes.md`)
2. **Keep the file in the correct directory** (e.g., keep `design-tokens/Colors.md` over `colors-reference.md` in root)
3. **Preserve all unique content** from the file being deleted
4. **Use the template structure** when rewriting merged files
5. **Never merge files that cover genuinely different topics** just because they sound similar

---

## Deletion Rules

1. **Never delete** files listed in `/guidelines/Guidelines.md` Section 3 (Protected Files)
2. **Always check** if the file is referenced by other guidelines, prompts, or task lists
3. **Update references** in all files that pointed to a deleted file
4. **Log deletions** in the cleanup report

---

## Success Criteria

- [ ] No duplicate guideline files remain
- [ ] All files have YAML frontmatter with version and date
- [ ] All files are under 500 lines
- [ ] All file paths in Guidelines.md are valid
- [ ] Deleted files are not referenced anywhere
- [ ] Report created at `/reports/documentation/YYYY-MM-DD_guidelines-cleanup.md`

---

## Output

**Report:** `/reports/documentation/YYYY-MM-DD_guidelines-cleanup.md`
**Task list:** `/tasks/guidelines-cleanup-task-list.md` (if follow-up work needed)
