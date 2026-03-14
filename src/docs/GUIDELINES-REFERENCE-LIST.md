# Guidelines Referenced in Orchestrator System

**Purpose:** Complete list of all guidelines files referenced by the new orchestrator prompts and templates.

**Created:** 2026-03-13  
**Status:** Reference Document

---

## Guidelines Referenced by Report Processor

The report processor orchestrator (`/prompts/orchestrators/report-processor.md`) requires these guidelines:

### Core Process Guidelines (3 files)

1. **`/guidelines/REPORTING_GUIDELINES.md`** ✅ Exists
   - Standards for creating project reports
   - Report structure, naming conventions
   - Report archival procedures

2. **`/guidelines/PLANNING_GUIDELINES.md`** ✅ Exists
   - Standards for planning documents
   - Task list structure
   - Priority definitions (P0/P1/P2/P3)

3. **`/guidelines/Guidelines.md`** ✅ Exists
   - Main project guidelines
   - Section: Project File Organization & Workflow
   - Section: Root Directory Cleanup Rules

### Task Files Referenced (3 files)

4. **`/tasks/task-list.md`** ✅ Exists
   - Master task list
   - Updated by report processor

5. **`/tasks/blocks-guidelines-gaps.md`** ✅ Exists
   - Block guidelines tracking
   - Referenced in task examples

6. **`/tasks/README.md`** ✅ Exists
   - Task file structure documentation

---

## Guidelines Referenced by Audit Prompt

The comprehensive audit prompt (`/prompts/audits/guidelines-comprehensive-audit.md`) requires these guidelines:

### Core Guidelines (4 files)

1. **`/guidelines/WRITING_GUIDELINES.md`** ✅ Exists
   - Writing standards for all documentation
   - Required reading before audit

2. **`/guidelines/_templates.md`** ✅ Created
   - Template usage guide
   - Required reading before audit

3. **`/guidelines/Guidelines.md`** ✅ Exists
   - Main project guidelines
   - Referenced for standards

4. **`/guidelines/REPORTING_GUIDELINES.md`** ✅ Exists
   - Report structure for audit output

### Templates Referenced (2 files)

5. **`/guidelines/_templates/component-guideline.md`** ✅ Created
   - Component template structure
   - Required sections list

6. **`/guidelines/_templates/design-token-guideline.md`** ✅ Created
   - Design token template structure
   - Required sections list

### Development Standards (1 file)

7. **`/guidelines/development/modern-react-coding-standards.md`** ✅ Exists
   - Code verification patterns
   - Referenced for code example validation

---

## Guidelines Referenced by Templates

The template files themselves reference these guidelines:

### From Component Template

1. **`/guidelines/Guidelines.md`** ✅ Exists
   - Main project guidelines
   - WordPress/WooCommerce standards

2. **Component-specific guidelines** (will reference each other)
   - Example: ProductCard.md references AddToCartButton.md

### From Design Token Template

1. **`/guidelines/Guidelines.md`** ✅ Exists
   - WordPress CSS architecture
   - theme.json mapping

2. **Other design token files** (cross-references)
   - Example: buttons.md references colors.md

---

## Scripts Referenced

### By Report Processor

1. **`/scripts/verify-production.sh`** ✅ Exists (created in v2.11)
   - Automated verification commands
   - ESLint, TypeScript checks

### By Audit Prompt

1. **`/scripts/check-internal-links.sh`** ⏳ To Create
   - Verifies internal markdown links
   - Used in audit validation phase

---

## All Required Guidelines Files (Summary)

### ✅ Exists and Ready (10 files)

1. `/guidelines/Guidelines.md`
2. `/guidelines/WRITING_GUIDELINES.md`
3. `/guidelines/REPORTING_GUIDELINES.md`
4. `/guidelines/PLANNING_GUIDELINES.md`
5. `/guidelines/development/modern-react-coding-standards.md`
6. `/guidelines/_templates.md` (created today)
7. `/guidelines/_templates/component-guideline.md` (created today)
8. `/guidelines/_templates/design-token-guideline.md` (created today)
9. `/tasks/task-list.md`
10. `/tasks/README.md`

### ⏳ Referenced but Optional (3 files)

11. `/tasks/blocks-guidelines-gaps.md` ✅ Exists
12. `/tasks/guidelines-remediation.md` ⏳ Will be created by audit
13. `/scripts/check-internal-links.sh` ⏳ To create (low priority)

---

## How to Verify All Guidelines Exist

### Quick Check Script

```bash
# Check core guidelines
ls -1 /guidelines/Guidelines.md
ls -1 /guidelines/WRITING_GUIDELINES.md
ls -1 /guidelines/REPORTING_GUIDELINES.md
ls -1 /guidelines/PLANNING_GUIDELINES.md

# Check templates
ls -1 /guidelines/_templates.md
ls -1 /guidelines/_templates/*.md

# Check development guidelines
ls -1 /guidelines/development/modern-react-coding-standards.md

# Check task files
ls -1 /tasks/task-list.md
ls -1 /tasks/README.md

# Result: All should exist
```

### Verify No Broken References

```bash
# Search for markdown links in orchestrator
grep -o "\[.*\](.*\.md)" /prompts/orchestrators/report-processor.md

# Verify each linked file exists
# (manual check against this list)
```

---

## Design Token Files (Detailed Status)

### Existing (6 files)

All exist in `/guidelines/design-tokens/`:

1. `Colors.md` ✅
2. `Dark-Mode.md` ✅ (needs rename to `dark-light-mode.md`)
3. `Spacing.md` ✅
4. `Typography.md` ✅
5. `Funky-Theme.md` ✅
6. `Funky-Woocommerce-Design-System.md` ✅

### Required (14 minimum)

After audit, these should exist:

1. `colors.md` (rename Colors.md)
2. `typography.md` (rename Typography.md)
3. `spacing.md` (rename Spacing.md)
4. `dark-light-mode.md` (rename Dark-Mode.md)
5. `buttons.md` ⏳ Create
6. `forms.md` ⏳ Create
7. `shadows.md` ⏳ Create
8. `borders.md` ⏳ Create
9. `radii.md` ⏳ Create
10. `iconography.md` ⏳ Create
11. `animations.md` ⏳ Create
12. `responsive.md` ⏳ Create
13. `touch-targets.md` ⏳ Create
14. `navigation.md` ⏳ Create

**Note:** Funky theme files are additional, not part of minimum 14.

---

## Component Guidelines Status

### Blocks (50+ expected)

**Existing:** Check `/guidelines/blocks/` directory

**Will be audited** by comprehensive audit prompt to identify:
- Which components have guidelines
- Which components are missing guidelines
- Which guidelines need updates

### Patterns (12+ expected)

**Existing:** Check `/guidelines/patterns/` directory

**Examples:**
- `Hero.md`
- `ProductGrid.md`
- `ArchiveHeader.md`
- `ArchivePagination.md`
- etc.

### Parts (4+ expected)

**Existing:** Check `/guidelines/parts/` directory

**Examples:**
- `Header.md`
- `Footer.md`
- `MiniCart.md`
- `Layout.md`

---

## Verification Checklist

Before running orchestrator prompts, verify:

### Report Processor Prerequisites
- [ ] `/guidelines/REPORTING_GUIDELINES.md` exists
- [ ] `/guidelines/PLANNING_GUIDELINES.md` exists
- [ ] `/guidelines/Guidelines.md` exists
- [ ] `/tasks/task-list.md` exists
- [ ] `/tasks/README.md` exists

### Audit Prompt Prerequisites
- [ ] `/guidelines/WRITING_GUIDELINES.md` exists
- [ ] `/guidelines/_templates.md` exists
- [ ] `/guidelines/_templates/component-guideline.md` exists
- [ ] `/guidelines/_templates/design-token-guideline.md` exists
- [ ] `/guidelines/Guidelines.md` exists

### Script Prerequisites
- [ ] `/scripts/verify-production.sh` exists (for report processor)
- [ ] All referenced task files exist

---

## What Happens If a Referenced File is Missing?

### During Report Processor Execution

If a referenced guideline is missing:
- **Impact:** Processor may not follow correct standards
- **Solution:** Create missing guideline before running
- **Workaround:** Processor can still run but may need manual review

### During Audit Execution

If a referenced guideline is missing:
- **Impact:** Audit cannot verify compliance
- **Solution:** Create missing guideline first
- **Workaround:** Audit can note "template not available" for that type

### During Template Usage

If a referenced guideline is missing:
- **Impact:** User may not understand standards
- **Solution:** Read related existing guidelines
- **Workaround:** Use template anyway, review against Guidelines.md

---

## Related Documentation

- **System Overview:** `/docs/GUIDELINES-SYSTEM-SUMMARY.md`
- **System Implementation:** `/reports/maintenance/2026-03-13_guidelines-system-overhaul.md`
- **Master Task List:** `/tasks/task-list.md`

---

**Created:** 2026-03-13  
**Purpose:** Reference list for orchestrator system  
**Status:** All required files exist ✅  
**Optional files:** 3 to be created later
