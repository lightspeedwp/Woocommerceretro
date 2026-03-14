# Prompt Trigger System - Workflow Automation

**Version:** 2.0  
**Updated:** March 13, 2026  
**Purpose:** Enable single-word prompt triggers for workflow automation  
**Status:** Active — 2 triggers implemented

---

## 🎯 Overview

This system allows users to trigger complex prompts using **simple trigger words** like `"cleanup"` or `"continue"` instead of providing full instructions.

**Benefits:**
- ✅ Faster workflow execution
- ✅ Consistent prompt execution
- ✅ Reduced cognitive load
- ✅ Automated project maintenance

---

## 🔑 Registered Trigger Words

### Primary Triggers (Active)

| Trigger Word | Prompt File | Purpose | Duration | Standalone |
|-------------|-------------|---------|----------|------------|
| **`cleanup`** | `/prompts/cleanup.md` | Comprehensive project maintenance | 20-30 min | Yes ✅ |
| **`continue`** | `/prompts/continue.md` | Resume next task from task list | 10-20 min | Yes ✅ |

**Recommended workflow:** Run `cleanup` weekly, run `continue` as needed.

---

### Cleanup Trigger Details

**Trigger:** `cleanup`

**What it does:**
1. **File System Audit** - Finds orphaned files, duplicates
2. **Import Verification** - Checks CSS and JS imports
3. **Route Validation** - Ensures all templates have routes
4. **Root Folder Cleanup** - Moves misplaced files
5. **Task List Maintenance** - Archives completed tasks
6. **Report Processing** - Archives reports >7 days old
7. **Documentation Updates** - Updates Guidelines, Sitemap, DevTools
8. **Generates Report** - Creates cleanup summary

**Duration:** 20-30 minutes per session  
**Frequency:** Weekly recommended  
**Output:** `/reports/maintenance/YYYY-MM-DD_cleanup-session.md`

---

### Continue Trigger Details

**Trigger:** `continue`

**What it does:**
1. **Reads Master Task List** - `/tasks/task-list.md`
2. **Identifies Next Task** - Finds highest priority unchecked task
3. **Reads Guidelines** - Reviews relevant documentation
4. **Executes Task** - Completes the work
5. **Updates Status** - Marks task complete
6. **Reports Completion** - Summarizes work done

**Duration:** 10-20 minutes per task (varies by complexity)  
**Frequency:** As needed, multiple times per day  
**Can run after cleanup:** Yes ✅

---

### Secondary Triggers (Future Implementation)

| Trigger Word | Prompt File | Purpose | Status |
|-------------|-------------|---------|--------|
| `audit` | `/prompts/audits/comprehensive-audit.md` | Full system audit | ⏳ Planned |
| `test` | `/prompts/testing/run-tests.md` | Execute test suite | ⏳ Planned |
| `document` | `/prompts/documentation/update-docs.md` | Update documentation | ⏳ Planned |
| `optimize` | `/prompts/optimization/performance.md` | Performance optimization | ⏳ Planned |

---

## 📋 How It Works

### Step 1: User Says Trigger Word

```
User: "cleanup"
```

### Step 2: AI Recognizes Trigger

AI reads this guideline file (`PROMPT_TRIGGER_SYSTEM.md`) and sees:
- `"cleanup"` → Execute `/prompts/cleanup.md`

### Step 3: AI Executes Prompt

AI reads and executes the full prompt file:
- Follows all checklist items
- Completes in specified session type
- Reports results

### Step 4: AI Confirms Completion

```
AI: "✅ Cleanup complete. 
     - 12 files moved
     - 3 broken imports fixed
     - Task list updated
     
     Ready to continue? (Say 'continue' to resume work)"
```

---

## 🛠️ Implementation Guidelines

### For AI Assistants

**When user says a trigger word:**

1. **Recognize trigger**
   - Check if word matches registered trigger
   - If yes, proceed to step 2
   - If no, ask for clarification

2. **Read prompt file**
   - Load full prompt from specified path
   - Read all sections and checklists

3. **Execute prompt**
   - Follow prompt instructions exactly
   - Complete all checklist items
   - Maintain single session (unless prompt specifies otherwise)

4. **Report completion**
   - Summarize actions taken
   - List files modified
   - Suggest next trigger word

**Example:**
```
User: "cleanup"

AI reads: /guidelines/PROMPT_TRIGGER_SYSTEM.md
AI sees: "cleanup" → /prompts/cleanup.md
AI loads: /prompts/cleanup.md
AI executes: All cleanup tasks
AI reports: Summary of completion
```

---

## 📊 Trigger Word Guidelines

### Creating New Trigger Words

**Requirements for valid trigger word:**
- ✅ Single word (no spaces)
- ✅ Lowercase
- ✅ Descriptive action verb
- ✅ Not already registered
- ✅ Has corresponding prompt file

**Registration process:**
1. Create prompt file in `/prompts/`
2. Add entry to this file (PROMPT_TRIGGER_SYSTEM.md)
3. Test trigger word execution
4. Update Guidelines.md with new trigger

**Example:**
```markdown
| `audit` | `/prompts/audits/accessibility-audit.md` | WCAG AA compliance check |
```

---

## 🎯 Prompt File Standards

### Required Sections in Prompt Files

All prompt files must include:

1. **Header**
   - Version
   - Created date
   - Purpose
   - Environment (Figma Make)

2. **Objective**
   - Clear statement of goal
   - Expected outcome

3. **Execution Checklist**
   - Step-by-step tasks
   - Checkboxes for verification
   - Estimated time per phase

4. **Success Criteria**
   - Clear completion conditions
   - Verification steps

5. **Report Template** (if applicable)
   - Standard format for reporting results

**See:** `/prompts/cleanup.md` for reference implementation

---

## 🚨 Protected File Guard Rails

### Files That Must NEVER Be Deleted

**Read from Guidelines.md section: "🚨 CRITICAL: PROTECTED CSS FILES"**

**Protected directories:**
```
/src/styles/*.css               # All root CSS files
/src/styles/blocks/**/*.css     # 130+ block CSS files  
/src/styles/sections/*.css      # 42 section CSS files
/src/app/components/figma/      # System components
```

**Protected files:**
```
/guidelines/Guidelines.md       # Master guidelines
/tasks/task-list.md            # Master task list
/CHANGELOG.md                  # Version history
/README.md                     # Project overview
```

**Before ANY deletion:**
1. Check file path against protected list
2. Verify file is not imported by other files
3. Confirm file age (> 30 days for reports, > 60 days for tasks)
4. Create backup entry in deletion log

---

## 📁 Report File Naming Standards

### Standard Format

```
YYYY-MM-DD_[category]_[brief-description].md
```

### Categories

| Category | Directory | Example |
|----------|-----------|---------|
| `cleanup` | `/reports/maintenance/` | `2026-03-13_cleanup_audit.md` |
| `accessibility` | `/reports/accessibility/` | `2026-03-13_accessibility_dark-mode-fix.md` |
| `performance` | `/reports/performance/` | `2026-03-13_performance_css-optimization.md` |
| `fixes` | `/reports/fixes/` | `2026-03-13_fixes_iframe-error.md` |
| `audits` | `/reports/audits/` | `2026-03-13_audits_component-compliance.md` |

### Naming Rules

**DO:**
- ✅ Start with date (YYYY-MM-DD)
- ✅ Use kebab-case for description
- ✅ Be descriptive but concise
- ✅ Include category prefix

**DON'T:**
- ❌ Use spaces in filename
- ❌ Use UPPERCASE
- ❌ Omit date prefix
- ❌ Make filename too long (> 50 chars)

---

## 🗂️ Task List Cleanup Guidelines

### Master Task List (`/tasks/task-list.md`)

**Purpose:** Single source of truth for all open tasks

**Maintenance rules:**
1. Update status daily if active work
2. Move completed tasks (✅) to archive after 7 days
3. Consolidate duplicate tasks
4. Ensure priority markers (P0, P1, P2, P3) are current

### Individual Task Lists (`/tasks/[feature]-tasks.md`)

**When to consolidate:**
- All tasks marked ✅ complete
- No tasks in-progress (🔄)
- File age > 30 days

**Consolidation process:**
1. Extract completed tasks
2. Move to `/tasks/archive/completed-[date].md`
3. Update master task list status
4. Delete empty individual task list file

### Archive Policy

**Move to archive when:**
- Task completed > 7 days ago
- Task report completed and filed
- No longer referenced by open tasks

**Archive structure:**
```
/tasks/archive/
├── completed-2026-03.md     # Monthly completed tasks
├── completed-2026-02.md
└── historical/              # Long-term storage (> 6 months)
```

---

## 📊 Reports Cleanup Guidelines

### Retention Policy

| Report Type | Retention | Action After Retention |
|------------|-----------|----------------------|
| **Cleanup reports** | 30 days | Move to `/reports/archive/` |
| **Fix reports** | 60 days | Move to archive or delete |
| **Audit reports** | 90 days | Keep if referenced by guidelines |
| **Migration reports** | Permanent | Keep in `/reports/migration/` |
| **Historical** | Permanent | Keep in `/reports/historical/` |

### Cleanup Process

**Weekly cleanup (automated by cleanup prompt):**
1. Scan `/reports/` for all `.md` files
2. Check file creation date
3. If > retention period:
   - Check if referenced by active tasks
   - Check if referenced by guidelines
   - If unreferenced → move to archive or delete
4. Document deletions in cleanup report

### Archive Structure

```
/reports/archive/
├── 2026/
│   ├── 01-january/
│   ├── 02-february/
│   └── 03-march/
└── historical/
    └── significant-reports/
```

---

## 🔄 Workflow Integration

### Recommended Usage Pattern

```
Day 1:
User: "cleanup"
  → Files organized
  → Status synced
  
User: "continue"
  → Task 1 executed
  
User: "continue"
  → Task 2 executed
  
User: "continue"
  → Task 3 executed

Day 2:
User: "cleanup"
  → Previous day's work archived
  → Ready for new work
  
User: "continue"
  → Resume next task
```

### Cleanup Frequency

**Recommended schedule:**
- **Daily:** If active development
- **Weekly:** If intermittent work
- **Monthly:** Minimum for any project

**Trigger cleanup when:**
- ✅ Completing major milestone
- ✅ Before starting new feature
- ✅ After fixing critical bugs
- ✅ Root directory has > 3 misplaced files

---

## 🎓 Best Practices

### For Users

**DO:**
- ✅ Use trigger words for routine tasks
- ✅ Run cleanup before continue (fresh start)
- ✅ Verify cleanup report before proceeding
- ✅ Use continue multiple times per session

**DON'T:**
- ❌ Skip cleanup for extended periods
- ❌ Manually organize files (let cleanup do it)
- ❌ Delete files without running cleanup first
- ❌ Ignore cleanup warnings

### For AI Assistants

**DO:**
- ✅ Read full prompt file before executing
- ✅ Complete ALL checklist items
- ✅ Report detailed summary
- ✅ Suggest next trigger word

**DON'T:**
- ❌ Skip checklist items
- ❌ Assume files are safe to delete (verify first)
- ❌ Modify prompt files during execution
- ❌ Execute multiple prompts in one session (unless specified)

---

## 📚 Integration with Guidelines.md

### Add to Guidelines.md

**Location:** Add new section after "How to Navigate These Guidelines"

**Section title:** "🚀 Quick Workflow Commands"

**Content:**
```markdown
## 🚀 Quick Workflow Commands

For routine project maintenance and task execution, use these single-word commands:

### Cleanup Command
**Trigger:** `"cleanup"`  
**Purpose:** Complete project maintenance (files, imports, routes, documentation)  
**When to use:** Daily/weekly or before starting new features  
**Details:** See `/prompts/cleanup.md`

### Continue Command  
**Trigger:** `"continue"`  
**Purpose:** Execute next task from `/tasks/task-list.md`  
**When to use:** After cleanup, or to resume work  
**Details:** See `/prompts/continue.md`

**How it works:**
1. User says trigger word (e.g., "cleanup")
2. AI reads `/guidelines/PROMPT_TRIGGER_SYSTEM.md`
3. AI executes corresponding prompt file
4. AI reports completion and suggests next step

**See:** `/guidelines/PROMPT_TRIGGER_SYSTEM.md` for full system documentation
```

---

## 🔧 Customization Options

### Per-Project Triggers

**Custom trigger example:**
```markdown
| `migrate` | `/prompts/custom/migrate-component.md` | Migrate component to new pattern |
| `review` | `/prompts/custom/code-review.md` | Review recent changes |
```

### Trigger Aliases

**Multiple words for same prompt:**
```markdown
| `clean` | `/prompts/cleanup.md` | Alias for cleanup |
| `next` | `/prompts/continue.md` | Alias for continue |
```

---

## ✅ Verification Checklist

**System is working when:**
- [ ] User can say "cleanup" and cleanup executes
- [ ] User can say "continue" and next task executes
- [ ] Protected files are never deleted
- [ ] Reports follow naming standards
- [ ] Tasks are properly archived
- [ ] Guidelines.md references this system
- [ ] All prompt files follow standards

---

## 🚀 Future Enhancements

**Planned triggers:**
- `audit` - Run component compliance audit
- `test` - Execute test suite
- `build` - Verify production build
- `optimize` - Run performance optimization
- `document` - Update all documentation

**Advanced features:**
- Trigger chains (cleanup → continue → cleanup)
- Conditional triggers (cleanup if dirty)
- Scheduled triggers (cleanup every Monday)

---

**Last Updated:** March 13, 2026  
**Maintained by:** Project guidelines system  
**Review frequency:** Monthly or when new triggers added