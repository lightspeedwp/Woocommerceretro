# Quick Start: Project Organization System

**Last Updated:** 2026-02-25  
**Purpose:** Fast reference for the new file organization system

---

## 🚨 CRITICAL RULES (Memorize These)

### Root Directory

**ONLY allowed in root `/`:**
- ✅ `README.md`
- ✅ `CHANGELOG.md`
- ✅ Config files (`package.json`, `tsconfig.json`, etc.)

**FORBIDDEN in root:**
- ❌ ANY other `.md` files
- ❌ `.sh` script files
- ❌ Prompt files
- ❌ Report files
- ❌ Task lists

---

## 📁 Where Files Go

| File Type | Location | Example |
|-----------|----------|---------|
| **Prompts** | `/prompts/[category]/` | `/prompts/audits/audit-name.md` |
| **Reports** | `/reports/[category]/` | `/reports/audits/2026-02-25_report.md` |
| **Tasks** | `/tasks/` | `/tasks/project-tasks.md` |
| **Scripts** | `/scripts/` | `/scripts/cleanup.sh` |
| **Docs** | `/docs/` | `/docs/quick-ref.md` |
| **Guidelines** | `/guidelines/` | `/guidelines/component.md` |

---

## 🔄 Standard Workflow

**Every time you create an audit, refactoring, or optimization:**

```
1. CREATE PROMPT
   /prompts/audits/my-audit.md

2. RUN AUDIT
   Execute prompt

3. SAVE REPORT
   /reports/audits/2026-02-25_my-audit.md

4. CREATE TASKS
   /tasks/my-project-tasks.md
   Update /tasks/task-list.md

5. EXECUTE
   Follow task list

6. CLEANUP
   Archive to /tasks/archive/
   Delete old reports
```

---

## 📋 Master Task List

**File:** `/tasks/task-list.md`

- ✅ Central tracking for ALL open tasks
- ✅ NEVER delete this file
- ✅ Update daily
- ✅ Archive completed tasks

---

## ⚡ Quick Commands

```bash
# Check root directory compliance
ls -la /*.md
# Should show ONLY README.md (and maybe CHANGELOG.md)

# Run current cleanup
chmod +x /scripts/execute-root-cleanup.sh
./scripts/execute-root-cleanup.sh

# View master task list
cat /tasks/task-list.md

# View organization summary
cat /docs/PROJECT-ORGANIZATION-SUMMARY.md
```

---

## 🎯 First Time Setup (Done!)

- [x] Updated `/guidelines/Guidelines.md` with rules
- [x] Created `/docs/` folder
- [x] Created master task list `/tasks/task-list.md`
- [x] Created cleanup audit & report
- [x] Created cleanup script
- [ ] **Execute cleanup** (run `/scripts/execute-root-cleanup.sh`)

---

## 📚 Important Files

**Read First:**
- `/guidelines/Guidelines.md` (top section — file organization rules)
- `/tasks/task-list.md` (master task tracker)

**Detailed Documentation:**
- `/docs/PROJECT-ORGANIZATION-SUMMARY.md` (complete system overview)
- `/reports/audits/2026-02-25_root-cleanup-comprehensive-audit.md` (audit findings)
- `/tasks/root-cleanup-tasks.md` (cleanup tasks)

**For Future Reference:**
- `/prompts/audits/root-cleanup-comprehensive-audit.md` (audit prompt template)
- `/scripts/execute-root-cleanup.sh` (cleanup automation)

---

## ❓ FAQ

**Q: Where do I create a new audit prompt?**  
A: `/prompts/audits/[audit-name].md`

**Q: Where do I save the audit report?**  
A: `/reports/audits/YYYY-MM-DD_[report-name].md`

**Q: Where do I create a task list?**  
A: `/tasks/[project-name]-tasks.md` AND update `/tasks/task-list.md`

**Q: Can I create a `.md` file in root?**  
A: ❌ NO! Only `README.md` and `CHANGELOG.md` allowed.

**Q: Where do scripts go?**  
A: `/scripts/` folder ONLY

**Q: Where do docs and guides go?**  
A: `/docs/` folder (quick refs in `/docs/quick-references/`)

---

## ✅ Daily Checklist

**Before starting work:**
- [ ] Check `/tasks/task-list.md` for open tasks
- [ ] Read relevant `/guidelines/` files

**When creating new audit:**
- [ ] Create prompt in `/prompts/[category]/`
- [ ] Run audit
- [ ] Save report in `/reports/[category]/`
- [ ] Create task list in `/tasks/`
- [ ] Update `/tasks/task-list.md`

**End of day:**
- [ ] Update `/tasks/task-list.md` with progress
- [ ] Archive completed tasks to `/tasks/archive/`
- [ ] Delete old reports (>7 days)
- [ ] Check root directory is clean

---

## 🚀 Next Actions

1. **Execute cleanup:**
   ```bash
   chmod +x /scripts/execute-root-cleanup.sh
   ./scripts/execute-root-cleanup.sh
   ```

2. **Verify:**
   ```bash
   ls -la /*.md  # Should show ONLY README.md
   ```

3. **Update task list:**
   ```bash
   # Mark cleanup complete in /tasks/task-list.md
   ```

---

**YOU HAVE A SYSTEM!** ✨  
**USE IT CONSISTENTLY!** 🎯

For full details, see `/docs/PROJECT-ORGANIZATION-SUMMARY.md`
