# Prompt Trigger System Implementation

**Date:** March 13, 2026  
**Status:** ✅ Complete  
**Version:** 1.0

---

## 🎯 Summary

Implemented a **single-word prompt trigger system** allowing users to execute complex workflows with simple commands like `"cleanup"` or `"continue"`.

---

## 📋 What Was Created

### 1. Cleanup Prompt (`/prompts/cleanup.md`)

**Purpose:** Comprehensive project maintenance in one session

**Features:**
- File system cleanup (organize misplaced files)
- Broken import detection & fixing (CSS + JS)
- Missing route identification
- Task list consolidation
- Documentation updates (changelog, guidelines, sitemap, devtools)
- Generates detailed cleanup report

**Execution time:** ~60 minutes  
**Trigger word:** `"cleanup"`

---

### 2. Continue Prompt (`/prompts/continue.md`)

**Purpose:** Simple task resumption

**Features:**
- Reads `/tasks/task-list.md`
- Identifies next priority task (P0 → P1 → P2 → P3)
- Executes task following project standards
- Updates task status
- Reports completion

**Execution time:** Per task (varies)  
**Trigger word:** `"continue"`

---

### 3. Trigger System Guidelines (`/guidelines/PROMPT_TRIGGER_SYSTEM.md`)

**Purpose:** Documentation and standards for trigger system

**Sections:**
- Registered trigger words
- How the system works
- Prompt file standards
- Protected file guard rails
- Report naming standards
- Task/report cleanup guidelines
- Workflow integration examples

---

### 4. Guidelines.md Integration

**Location:** Section "🚀 Quick Workflow Commands"  
**Added after:** "How to Navigate These Guidelines"

**Content:**
- Trigger word documentation
- Usage examples
- Workflow recommendations
- Link to full PROMPT_TRIGGER_SYSTEM.md

---

## 🎯 How It Works

### User Workflow

```
User: "cleanup"
  ↓
AI reads: /guidelines/PROMPT_TRIGGER_SYSTEM.md
  ↓
AI sees: "cleanup" → /prompts/cleanup.md
  ↓
AI loads & executes: /prompts/cleanup.md
  ↓
AI reports: Cleanup complete (12 files moved, 3 imports fixed)
  ↓
User: "continue"
  ↓
AI reads: /guidelines/PROMPT_TRIGGER_SYSTEM.md
  ↓
AI sees: "continue" → /prompts/continue.md
  ↓
AI loads & executes: /prompts/continue.md
  ↓
AI reports: Task complete, ready for next
```

---

## 📊 Cleanup Prompt Details

### Phase 1: File System Audit
- Scan root directory for misplaced files
- Move to correct locations (/reports/, /tasks/, /scripts/)
- Delete stale files (> 30 days)
- Verify no protected files deleted

### Phase 2: Import Audits
- **CSS Imports:**
  - Scan all .tsx files for CSS imports
  - Verify imported files exist
  - Fix broken import paths
  
- **JS Imports:**
  - Scan all .tsx files for component imports
  - Verify path aliases resolve
  - Fix circular dependencies

### Phase 3: Routes Audit
- Scan templates for missing routes
- Compare against `/src/routes.tsx`
- Add missing routes
- Validate route hierarchy

### Phase 4: Task Management
- Read master task list
- Extract completed tasks (✅)
- Archive to `/tasks/archive/`
- Update status counts

### Phase 5: Documentation
- Update `/CHANGELOG.md`
- Update `/guidelines/Guidelines.md`
- Sync `/src/app/components/pages/Sitemap.tsx`
- Update `/src/app/components/pages/DevTools.tsx`

### Phase 6: Report Generation
- Create cleanup report: `/reports/maintenance/YYYY-MM-DD_cleanup-audit.md`
- Document all changes
- List files moved/deleted/fixed

---

## 📊 Continue Prompt Details

### Simple 5-Step Process

1. **Read task status** from `/tasks/task-list.md`
2. **Determine priority** (P0 → P1 → P2 → P3)
3. **Check references** (follow task list pointers)
4. **Execute task** (follow project standards)
5. **Update status** (mark complete/in-progress/blocked)

### Decision Tree

```
Has P0 tasks? → Execute P0 (critical)
  ↓
Has in-progress (🔄)? → Resume in-progress
  ↓
Has P1 tasks? → Execute P1 (high priority)
  ↓
Points to another file? → Read that file, repeat
  ↓
All complete? → Report completion, suggest milestone
```

---

## 🚨 Protected File Guard Rails

### Never Delete

**Directories:**
```
/src/styles/*.css               # All root CSS files
/src/styles/blocks/**/*.css     # 130+ block CSS files
/src/styles/sections/*.css      # 42 section CSS files
/src/app/components/figma/      # System components
```

**Files:**
```
/guidelines/Guidelines.md       # Master guidelines
/tasks/task-list.md            # Master task list
/CHANGELOG.md                  # Version history
/README.md                     # Project overview
```

**Verification process:**
1. Check file path against protected list
2. Verify not imported by other files
3. Confirm file age (> 30 days for reports, > 60 for tasks)
4. Log deletion before executing

---

## 📁 Report Naming Standards

### Format

```
YYYY-MM-DD_[category]_[description].md
```

### Categories

| Category | Directory | Retention |
|----------|-----------|-----------|
| `cleanup` | `/reports/maintenance/` | 30 days |
| `accessibility` | `/reports/accessibility/` | 60 days |
| `performance` | `/reports/performance/` | 60 days |
| `fixes` | `/reports/fixes/` | 60 days |
| `audits` | `/reports/audits/` | 90 days |
| `migration` | `/reports/migration/` | Permanent |

---

## 🗂️ Task/Report Cleanup Rules

### Task List Retention

**Master task list:** Never delete (update only)

**Individual task lists:**
- Archive when all tasks ✅ complete
- Move to `/tasks/archive/completed-[date].md`
- Keep if any tasks in-progress (🔄)

### Report Retention

**Cleanup schedule:**
- Weekly: Delete reports > 30 days (except referenced)
- Monthly: Archive reports > 60 days
- Quarterly: Review archived reports for deletion

**Archive structure:**
```
/reports/archive/
├── 2026/
│   ├── 01-january/
│   ├── 02-february/
│   └── 03-march/
└── historical/
```

---

## 🎯 Recommended Usage

### Daily Development

```
Morning:
User: "cleanup" → Fresh start, organized files

User: "continue" → Task 1
User: "continue" → Task 2
User: "continue" → Task 3

End of day:
User: "cleanup" → Archive day's work
```

### Weekly Maintenance

```
Monday:
User: "cleanup" → Week prep

Daily:
User: "continue" → Execute tasks

Friday:
User: "cleanup" → Week wrap-up
```

### Before Milestones

```
User: "cleanup" → Organize before major work
User: "continue" → Complete remaining tasks
User: "cleanup" → Archive milestone completion
```

---

## 🚀 Future Enhancements

### Planned Triggers

| Trigger | Prompt File | Purpose |
|---------|------------|---------|
| `audit` | `/prompts/audits/component-audit.md` | Component compliance |
| `test` | `/prompts/testing/run-tests.md` | Test execution |
| `build` | `/prompts/build/verify-build.md` | Production build check |
| `optimize` | `/prompts/performance/optimize.md` | Performance optimization |

### Advanced Features

- **Trigger chains:** cleanup → continue → cleanup
- **Conditional triggers:** cleanup if > 5 misplaced files
- **Scheduled triggers:** cleanup every Monday
- **Custom triggers:** Per-project customization

---

## ✅ Verification Checklist

**System working when:**
- [ ] User says "cleanup" → cleanup executes
- [ ] User says "continue" → next task executes
- [ ] Protected files never deleted
- [ ] Reports follow naming standards
- [ ] Tasks properly archived
- [ ] Guidelines.md references system
- [ ] All prompt files follow standards

---

## 📚 Files Created/Modified

### Created
1. `/prompts/cleanup.md` (670 lines)
2. `/prompts/continue.md` (320 lines)
3. `/guidelines/PROMPT_TRIGGER_SYSTEM.md` (550 lines)
4. `/reports/documentation/2026-03-13_prompt-trigger-system-implementation.md` (this file)

### Modified
1. `/guidelines/Guidelines.md` (added "🚀 Quick Workflow Commands" section)

### Total Impact
- **New lines:** ~1,600 lines of documentation
- **New triggers:** 2 active (`cleanup`, `continue`)
- **New workflows:** Automated maintenance & task execution

---

## 🎓 Key Benefits

### For Users
1. **Single-word commands** replace long instructions
2. **Consistent workflows** (always same process)
3. **Reduced mental load** (AI handles complexity)
4. **Faster task switching** (just say "continue")

### For Project
1. **Automated maintenance** (cleanup runs systematically)
2. **File organization** (everything in right place)
3. **Status tracking** (tasks always current)
4. **Documentation sync** (changelog/guidelines updated)

### For AI Assistants
1. **Clear instructions** (comprehensive prompts)
2. **Reusable workflows** (same process every time)
3. **Verification built-in** (checklists prevent mistakes)
4. **Guard rails** (protected files system)

---

## 🎯 Best Practices

### DO
✅ Run cleanup before starting new work  
✅ Use continue multiple times per session  
✅ Review cleanup reports  
✅ Follow trigger word recommendations

### DON'T
❌ Skip cleanup for extended periods  
❌ Manually delete files (let cleanup handle it)  
❌ Ignore cleanup warnings  
❌ Create ad-hoc trigger words without documentation

---

## 📖 Documentation Links

- **Cleanup Prompt:** `/prompts/cleanup.md`
- **Continue Prompt:** `/prompts/continue.md`
- **Trigger System:** `/guidelines/PROMPT_TRIGGER_SYSTEM.md`
- **Guidelines Integration:** `/guidelines/Guidelines.md` (section: "🚀 Quick Workflow Commands")

---

**Status:** ✅ Production Ready  
**Next Steps:** Test both prompts in real workflow  
**Maintenance:** Review/update every 30 days
