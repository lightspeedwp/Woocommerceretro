# Project Organization Master Prompt

**Version:** 1.0  
**Created:** 2026-02-25  
**Category:** Workflow / Project Management  
**Purpose:** Master prompt for establishing and maintaining project file organization

---

## 🎯 Objective

Establish a comprehensive, maintainable file organization system for the WooCommerce prototype project that ensures:
1. All artifacts are in appropriate folders
2. Work is traceable (prompts → reports → tasks → implementation)
3. Root directory remains clean
4. Regular cleanup and auditing occurs
5. Team collaboration is efficient

---

## 📋 Standard Workflow Pattern

**This is the MANDATORY process for ALL significant work:**

### Phase 1: Planning & Prompt Creation

1. **Read relevant guidelines**
   ```bash
   # Example: Read CSS guidelines before CSS audit
   cat /guidelines/design-tokens/colors.md
   cat /guidelines/styles/section-styles.md
   ```

2. **Create prompt file**
   ```bash
   # Location: /prompts/[category]/descriptive-name_v1.md
   # Example: /prompts/audits/css-architecture-deep-audit.md
   ```

3. **Document in prompt:**
   - Objective
   - Scope
   - Expected outputs
   - Related guidelines
   - Success criteria

### Phase 2: Execution & Reporting

4. **Run prompt/audit**
   - Execute the audit or task defined in prompt
   - Collect findings systematically

5. **Generate report**
   ```bash
   # Location: /reports/[category]/YYYY-MM-DD_description.md
   # Example: /reports/audits/2026-02-25_css-architecture-deep-audit.md
   ```

6. **Document in report:**
   - Executive summary
   - Detailed findings
   - Risk assessment
   - Recommended actions
   - Related tasks

### Phase 3: Task Planning

7. **Create or update task list**
   ```bash
   # Always update: /tasks/task-list.md (master list)
   # Optional: /tasks/specific-initiative-tasks.md
   ```

8. **For each task, document:**
   - Status (`[ ]` not started, `[~]` in progress, `[✓]` complete)
   - Priority (P0, P1, P2, P3)
   - Related prompt
   - Related report
   - Estimated effort
   - Dependencies
   - Notes

### Phase 4: Implementation

9. **Execute tasks from task list**
   - Update status as you work
   - Reference guidelines during implementation

10. **Generate implementation reports**
    ```bash
    # Location: /reports/fixes/YYYY-MM-DD_fix-description.md
    ```

### Phase 5: Cleanup & Archive

11. **Archive completed tasks**
    ```bash
    mv /tasks/completed-initiative.md /tasks/archive/
    ```

12. **Archive old reports (> 7 days)**
    ```bash
    mv /reports/2026-02-XX_old-report.md /reports/archive/
    ```

13. **Update guidelines** if new patterns discovered

14. **Clean root directory** weekly

---

## 📂 File Organization Rules

### Prompts (`/prompts/`)

**Structure:**
```
/prompts/
├── README.md
├── /audits/                # Audit prompts
│   ├── /accessibility/
│   ├── /performance/
│   └── [audit-name].md
├── /components/            # Component creation prompts
│   ├── /blocks/
│   ├── /parts/
│   └── /patterns/
├── /refactoring/           # Refactoring prompts
│   └── /css-migration/
├── /testing/               # Testing prompts
└── /workflows/             # Multi-step workflow prompts
```

**Naming:** `category_action_description_v1.md`

**Examples:**
- `audit_wcag_color-contrast_v1.md`
- `component_create_product-card_v1.md`
- `refactor_css_tailwind-to-wordpress_v1.md`

---

### Reports (`/reports/`)

**Structure:**
```
/reports/
├── README.md
├── /audits/                # Audit findings
├── /fixes/                 # Fix implementation reports
├── /migration/             # Migration progress
├── /documentation/         # Doc update reports
└── /archive/               # Historical reports (> 7 days)
    ├── README.md
    ├── /fixes/
    └── /audits/
```

**Naming:** `YYYY-MM-DD_category_description.md`

**Examples:**
- `2026-02-25_audit_css-architecture.md`
- `2026-02-24_fix_product-card-defensive-checks.md`
- `2026-02-23_migration_component-migration-status.md`

**Retention:**
- Active reports: Keep in category folder
- Old reports (> 7 days): Move to `/reports/archive/`
- Historical milestones: Keep indefinitely in archive

---

### Tasks (`/tasks/`)

**Structure:**
```
/tasks/
├── task-list.md            # ⭐ MASTER task list (all open tasks)
├── README.md
├── [initiative-tasks].md   # Project-specific task lists
└── /archive/               # Completed task lists
    └── README.md
```

**Master Task List Format:**
```markdown
## P1: High Priority Tasks

#### 1. Task Name

**Status:** `[ ]` Not Started
**Priority:** P1
**Prompt:** /prompts/category/prompt-name.md
**Report:** /reports/category/report-name.md
**Effort:** 2 hours

**Actions:**
- [ ] Action item 1
- [ ] Action item 2

**Dependencies:** Task #X

**Notes:** Additional context
```

**Update Frequency:**
- Daily during active work
- Weekly during maintenance

---

### Scripts (`/scripts/`)

**Structure:**
```
/scripts/
├── README.md
├── [script-name].sh        # Shell scripts
└── [script-name].py        # Python scripts
```

**Naming:** `action-description.sh` or `action-description.py`

**Examples:**
- `cleanup-root-directory.sh`
- `check-orphaned-components.sh`
- `audit-template-data-wiring.sh`

**Guidelines:**
- See `/guidelines/SHELL_SCRIPT_GUIDELINES.md`
- See `/guidelines/PYTHON_SCRIPT_GUIDELINES.md`

---

## 🔄 Regular Maintenance

### Daily (During Active Work)

1. **Update task list**
   - Mark completed tasks: `[✓]`
   - Update in-progress: `[~]`
   - Add new tasks as discovered

2. **Generate reports**
   - Create implementation reports for fixes
   - Document findings

### Weekly

1. **Root directory cleanup**
   ```bash
   bash /scripts/cleanup-root-directory.sh --dry-run  # Review first
   bash /scripts/cleanup-root-directory.sh            # Execute
   ```

2. **Archive old reports**
   ```bash
   # Move reports > 7 days old to archive
   find /reports -name "*.md" -mtime +7 -exec mv {} /reports/archive/ \;
   ```

3. **Review task list**
   - Archive completed initiatives
   - Prioritize upcoming tasks
   - Update estimates

### Monthly

1. **Full audit cycle**
   - Run comprehensive audits
   - Update guidelines
   - Review archived materials
   - Clean up orphaned files

2. **Documentation review**
   - Update README files
   - Review guideline accuracy
   - Archive obsolete docs

---

## 🧹 Root Directory Cleanup

### What Should Be in Root

✅ **KEEP:**
- Configuration files (package.json, tsconfig.json, vite.config.ts, etc.)
- README.md (project overview)
- Attributions.md (legal)
- Core folders (/src/, /guidelines/, /prompts/, /reports/, /tasks/, /scripts/)

❌ **MOVE OR ARCHIVE:**
- Task files → `/tasks/` or `/tasks/archive/`
- Reports → `/reports/[category]/` or `/reports/archive/`
- Documentation → `/guidelines/`
- Scripts → `/scripts/`

### Cleanup Script

```bash
# Dry run first (shows what would be moved)
bash /scripts/cleanup-root-directory.sh --dry-run

# Execute cleanup
bash /scripts/cleanup-root-directory.sh
```

---

## 📊 Example: Complete Audit Workflow

### 1. Create Audit Prompt

**File:** `/prompts/audits/css-architecture-deep-audit.md`

```markdown
# CSS Architecture Deep Audit

**Objective:** Verify all components follow WordPress BEM standards

**Scope:** All files in /src/app/components/

**Expected Outputs:**
- Audit report with findings
- Task list with remediation items
- Priority recommendations

**Related Guidelines:**
- /guidelines/Guidelines.md (Section 4: CSS Architecture)
- /guidelines/design-tokens/colors.md
- /guidelines/TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md

**Audit Criteria:**
1. No Tailwind utility classes
2. All classes use WordPress BEM format
3. Dark mode support via CSS variables
4. Responsive behavior via CSS
```

### 2. Run Audit & Generate Report

**File:** `/reports/audits/2026-02-25_css-architecture-deep-audit.md`

```markdown
# CSS Architecture Deep Audit Report

**Date:** 2026-02-25

## Executive Summary
- Files audited: 150
- Violations found: 23
- High priority: 8
- Medium priority: 12
- Low priority: 3

## Findings
[Detailed findings here]

## Recommended Actions
[Actions with priorities]
```

### 3. Create Task List

**Update:** `/tasks/task-list.md`

```markdown
### P1: High Priority Tasks

#### 1. Fix Critical CSS Violations

**Status:** `[ ]` Not Started
**Priority:** P1
**Prompt:** /prompts/audits/css-architecture-deep-audit.md
**Report:** /reports/audits/2026-02-25_css-architecture-deep-audit.md
**Effort:** 3 hours

**Actions:**
- [ ] Fix ProductCard Tailwind classes
- [ ] Fix Hero section utilities
- [ ] Update CartItem styles

**Dependencies:** None
```

### 4. Execute Tasks

As you work:
- Update task status: `[~]` in progress
- Create implementation reports
- Document any blockers

### 5. Archive When Complete

```bash
# Archive report after 7 days
mv /reports/audits/2026-02-25_css-architecture-deep-audit.md \
   /reports/archive/audits/

# Archive task list when all tasks complete
mv /tasks/css-architecture-remediation.md \
   /tasks/archive/
```

---

## ✅ Verification Checklist

Before considering workflow complete:

- [ ] Prompt created in `/prompts/[category]/`
- [ ] Prompt documents objective, scope, outputs, guidelines
- [ ] Audit/work executed
- [ ] Report generated in `/reports/[category]/`
- [ ] Report includes summary, findings, actions
- [ ] Tasks added to `/tasks/task-list.md`
- [ ] Tasks include status, priority, links, effort, dependencies
- [ ] Implementation completed
- [ ] Implementation reports generated
- [ ] Build verification passed
- [ ] Documentation updated if needed
- [ ] Old reports archived (> 7 days)
- [ ] Completed tasks archived
- [ ] Root directory clean

---

## 🎯 Success Metrics

**Project is well-organized when:**

1. **Root directory has < 10 files** (excluding folders)
2. **All tasks are in task-list.md** (no ad-hoc task files)
3. **All reports are categorized** in `/reports/[category]/`
4. **All prompts are versioned** in `/prompts/[category]/`
5. **Archives are maintained** with README indexes
6. **Guidelines are current** and referenced by prompts
7. **Work is traceable** (prompt → report → task → implementation)

---

## 📖 Related Guidelines

- **Main Guidelines:** `/guidelines/Guidelines.md`
- **Prompt Writing:** `/guidelines/PROMPT_GENERATION_GUIDELINES.md`
- **Report Writing:** `/guidelines/REPORTING_GUIDELINES.md`
- **Task Planning:** `/guidelines/PLANNING_GUIDELINES.md`
- **Shell Scripts:** `/guidelines/SHELL_SCRIPT_GUIDELINES.md`
- **Python Scripts:** `/guidelines/PYTHON_SCRIPT_GUIDELINES.md`

---

## 📞 Quick Reference

### Common Commands

```bash
# Create new prompt
touch /prompts/audits/new-audit-name.md

# Generate report
touch /reports/audits/$(date +%Y-%m-%d)_audit-description.md

# Update task list
vim /tasks/task-list.md

# Cleanup root
bash /scripts/cleanup-root-directory.sh --dry-run
bash /scripts/cleanup-root-directory.sh

# Check orphaned components
bash /scripts/check-orphaned-components.sh

# Archive old reports
find /reports -name "*.md" -mtime +7 -exec mv {} /reports/archive/ \;
```

### File Templates

See respective guidelines for complete templates:
- Prompt template: `/guidelines/PROMPT_GENERATION_GUIDELINES.md`
- Report template: `/guidelines/REPORTING_GUIDELINES.md`
- Task template: `/guidelines/PLANNING_GUIDELINES.md`

---

**Last Updated:** 2026-02-25  
**Maintained By:** Development Team  
**Review Frequency:** Monthly
