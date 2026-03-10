# Root Directory Cleanup Audit Prompt

**Version:** 1.0  
**Created:** 2026-02-25  
**Category:** Architecture / File Organization  
**Purpose:** Identify and clean up misplaced, outdated, and orphaned files in the project root directory

---

## 🎯 Audit Objective

Ensure the project root directory (`/`) contains ONLY:
- Core configuration files (package.json, tsconfig.json, vite.config.ts, etc.)
- README.md (project overview)
- Essential application folders (`/src/`, `/components/ui/`, `/guidelines/`, `/prompts/`, `/reports/`, `/tasks/`, `/scripts/`)

**Everything else should be:**
- Moved to appropriate folders
- Archived if completed
- Deleted if obsolete

---

## 📋 Audit Checklist

### Phase 1: Identify Misplaced Files

**Task Files (Move to `/tasks/` or archive):**
- [ ] List all `.md` files in root with "TASK", "TODO", "NEXT", "PLAN" in filename
- [ ] Check if content is still relevant
- [ ] If relevant → move to `/tasks/`
- [ ] If completed → move to `/tasks/archive/`
- [ ] If obsolete → delete

**Report Files (Move to `/reports/` or archive):**
- [ ] List all `.md` files in root with "REPORT", "AUDIT", "SUMMARY", "STATUS", "FINDINGS" in filename
- [ ] Check creation date (files > 7 days old should be archived)
- [ ] If recent → move to `/reports/[category]/`
- [ ] If old but significant → move to `/reports/archive/`
- [ ] If obsolete → delete

**Prompt Files (Move to `/prompts/`):**
- [ ] List all `.md` files in root with "PROMPT", "GUIDE", "TEMPLATE" in filename
- [ ] Move to `/prompts/[category]/`
- [ ] Update references in other files

**Documentation Files (Evaluate):**
- [ ] List all `.md` files in root that are documentation
- [ ] Keep only README.md in root
- [ ] Move others to `/guidelines/` or `/docs/`
- [ ] Archive obsolete docs

### Phase 2: Orphaned Components & Imports

**Check `/components/ui/` for orphaned files:**
- [ ] List all files in `/components/ui/`
- [ ] Cross-reference with actual usage in `/src/app/components/blocks/`
- [ ] Identify files NOT imported anywhere
- [ ] If migrated to `/src/` → delete from `/components/ui/`
- [ ] If still needed → keep and document
- [ ] If unused → delete

**Check for duplicate imports:**
- [ ] Scan for duplicate SVG files
- [ ] Scan for duplicate image assets
- [ ] Consolidate duplicates to `/src/app/imports/`
- [ ] Update import paths

### Phase 3: Outdated Configuration Files

**Review configuration files:**
- [ ] Check for duplicate config files (e.g., multiple `.eslintrc` files)
- [ ] Verify all configs are actively used by build process
- [ ] Remove configs for deleted tools (Storybook, etc.)
- [ ] Consolidate where possible

### Phase 4: Script Files

**Check root for scripts:**
- [ ] List all `.sh` and `.py` files in root
- [ ] Move to `/scripts/` directory
- [ ] Verify they still work after move
- [ ] Update documentation

---

## 🔍 Audit Criteria

### Files to KEEP in Root

✅ **Essential Configuration:**
- package.json
- package-lock.json (or yarn.lock, pnpm-lock.yaml)
- tsconfig.json
- tsconfig.node.json
- vite.config.ts
- vitest.config.ts
- vercel.json
- .gitignore
- .eslintrc (or eslint.config.js)
- .prettierrc

✅ **Essential Documentation:**
- README.md (project overview only)

✅ **Essential Folders:**
- /src/
- /components/ui/ (legacy, will be removed eventually)
- /guidelines/
- /prompts/
- /reports/
- /tasks/
- /scripts/
- /workflows/
- /index.html (Vite entry point)

### Files to MOVE or DELETE

❌ **Move to `/tasks/`:**
- OPEN_TASKS_SUMMARY.md
- NEXT_ACTION_PLAN.md
- CURRENT_STATUS.md
- Any other task/planning files

❌ **Move to `/reports/`:**
- ERROR_RESOLUTION_SUMMARY.md
- DEV_TOOLS_UPDATE_SUMMARY.md
- EXECUTIVE_BRIEFING.md
- SUCCESS_CERTIFICATE.md
- Any other status/report files

❌ **Move to `/reports/archive/`:**
- Old reports (> 7 days)
- Completed status documents
- Historical summaries no longer referenced

❌ **Move to `/guidelines/`:**
- SPACING_FIXES_QUICK_REF.md
- README_TAILWIND_ELIMINATION.md
- Any reference documentation

❌ **DELETE (Obsolete):**
- Duplicate files
- Outdated status files
- Files for deleted features (Storybook, etc.)
- Orphaned components not used anywhere

---

## 📊 Expected Output Format

### Audit Report Structure

```markdown
# Root Directory Cleanup Audit Report

**Date:** YYYY-MM-DD
**Auditor:** [Name/System]

## Executive Summary
- Total files reviewed: [number]
- Files to move: [number]
- Files to archive: [number]
- Files to delete: [number]
- Orphaned components: [number]

## Findings

### Task Files (Move to /tasks/)
| File | Current Location | Destination | Reason |
|------|------------------|-------------|--------|
| ... | / | /tasks/ | Task tracking |

### Report Files (Move to /reports/ or archive)
| File | Current Location | Destination | Reason |
|------|------------------|-------------|--------|
| ... | / | /reports/audits/ | Audit report |
| ... | / | /reports/archive/ | Old status (>7 days) |

### Documentation Files
| File | Current Location | Destination | Reason |
|------|------------------|-------------|--------|
| ... | / | /guidelines/ | Reference doc |

### Files to Delete
| File | Reason |
|------|--------|
| ... | Obsolete/duplicate |

### Orphaned Components
| File | Status | Action |
|------|--------|--------|
| /components/ui/xyz.tsx | Unused | Delete |
| /components/ui/abc.tsx | Migrated to /src/ | Delete |

## Recommended Actions
1. [Action 1]
2. [Action 2]
...

## Risk Assessment
- **Low Risk:** Moving documentation files
- **Medium Risk:** Deleting orphaned components
- **High Risk:** Deleting configuration files

## Implementation Plan
1. Phase 1: Move files to correct locations
2. Phase 2: Archive old reports
3. Phase 3: Delete orphaned components
4. Phase 4: Verify build still works
5. Phase 5: Update references
```

---

## ✅ Validation Steps

After cleanup, verify:
- [ ] Project builds successfully (`npm run build`)
- [ ] Development server runs (`npm run dev`)
- [ ] All import paths still work
- [ ] No broken links in documentation
- [ ] Task list updated with any new findings
- [ ] Guidelines updated if new patterns discovered

---

## 🔗 Related Guidelines

- **File Organization:** `/guidelines/Guidelines.md` - "Project File Organization" section
- **Reporting:** `/guidelines/REPORTING_GUIDELINES.md`
- **Task Planning:** `/guidelines/PLANNING_GUIDELINES.md`

---

## 📝 Notes for Auditor

- Be conservative: When in doubt, archive rather than delete
- Document all moves in audit report
- Update any broken references immediately
- If a file's purpose is unclear, flag for review rather than deleting
- Prioritize files that make root directory cluttered

---

## 🎯 Success Criteria

**Audit is successful when:**
1. Root directory has < 20 total files
2. All task files are in `/tasks/`
3. All reports are in `/reports/`
4. All prompts are in `/prompts/`
5. No ad-hoc documentation in root
6. No orphaned components
7. Project builds without errors
8. All tests pass
9. Documentation updated
10. Task list reflects new findings
