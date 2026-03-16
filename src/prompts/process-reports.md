# Process Reports — Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Type:** Single Prompt  
**Trigger Word:** `process reports`  
**Duration:** 15-30 minutes

---

## Objective

Scan `/reports/audits/` for unprocessed audit reports, extract findings, and create or update domain task lists in `/tasks/`. This is the ONLY trigger that converts audit reports into actionable task lists.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Execution Steps

### Phase 1: Discover Unprocessed Reports (2 min)

1. Read `/reports/audits/` directory listing
2. For each report file, check for `Status: Unprocessed` in frontmatter
3. If no status field exists, treat as unprocessed
4. Build a list of reports to process, sorted by date (oldest first)

**If no unprocessed reports found:**
- Report "No unprocessed reports found"
- Suggest `audit` to generate new reports
- Stop

---

### Phase 2: Extract Findings (5-15 min per report)

For each unprocessed report:

1. Read the full report content
2. Extract all findings by priority (P0, P1, P2, P3)
3. Map each finding to a domain:

| Report Domain | Task List Domain | Task List File |
|---------------|-----------------|---------------|
| routes | routes | `/tasks/routes-task-list.md` |
| sitemap | routes | `/tasks/routes-task-list.md` |
| tokens | tokens | `/tasks/tokens-task-list.md` |
| css | css | `/tasks/css-task-list.md` |
| a11y | a11y | `/tasks/a11y-task-list.md` |
| data | data | `/tasks/data-task-list.md` |
| responsive | responsive | `/tasks/responsive-task-list.md` |
| styles | css | `/tasks/css-task-list.md` |
| guidelines | guidelines | `/tasks/guidelines-task-list.md` |

Note: `audit styles` findings go into the `css` task list (same domain).  
Note: `audit sitemap` findings go into the `routes` task list (same domain).

---

### Phase 3: Create/Update Task Lists (5-10 min)

For each domain with findings:

1. **If task list exists:** Read existing file, append new tasks below a dated section header
2. **If task list doesn't exist:** Create new file using structure below
3. **Never overwrite** existing completed tasks (marked `[x]`)
4. **De-duplicate:** Skip findings that match existing open tasks

**Task list structure:**

```markdown
# [Domain] Task List

**Domain:** [Domain Name]
**Status:** Active
**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD
**Source:** process reports — from [report file(s)]

---

## P0: Critical

- [ ] **[ID]** — [Task description]
  - File: [file path]
  - Rule: [guideline reference]
  - Source: [report file]

## P1: High

- [ ] **[ID]** — [Task description]

## P2: Medium

- [ ] **[ID]** — [Task description]

## P3: Low

- [ ] **[ID]** — [Task description]

---

**Total:** [N] tasks | [N] complete | [N] open
**Progress:** [N]%
```

**Task ID format:** Domain prefix + sequential number (e.g., `CSS12`, `A11Y15`, `TK12`)  
**Continue numbering** from the highest existing ID in the task list.

---

### Phase 4: Update Report Status (2 min)

For each processed report:

1. Update `Status: Unprocessed` → `Status: Processed`
2. Add `Processed: YYYY-MM-DD` field
3. Add `Task List: /tasks/[domain]-task-list.md` field

---

### Phase 5: Register in Master Task List (2 min)

Update `/tasks/task-list.md`:

1. Update the **Sub-Task List Registry** table
   - New task lists: add row with status `🆕 New`
   - Updated task lists: update `Last Updated` date and status
2. Add session entry under `Latest Session`:

```markdown
### Process Reports ✅ **COMPLETE**

- [x] Processed [N] audit reports
- [x] Created/updated [N] domain task lists
- [x] Total new tasks: [N] (P0: [N], P1: [N], P2: [N], P3: [N])

**Reports Processed:**
- `/reports/audits/YYYY-MM-DD_css-audit.md` → `/tasks/css-task-list.md`
- `/reports/audits/YYYY-MM-DD_a11y-audit.md` → `/tasks/a11y-task-list.md`
```

---

### Phase 6: Summary (1 min)

Report to user:

```
Process Reports complete.

Reports processed: [N]
Task lists created: [N]
Task lists updated: [N]
Total new tasks: [N]

Breakdown:
  P0 Critical: [N]
  P1 High:     [N]
  P2 Medium:   [N]
  P3 Low:      [N]

→ Next: Say "continue" to start working on the highest priority task.
→ Or: Say "status" to see full project overview.
```

---

## Edge Cases

### Report has no findings

- Mark report as `Status: Processed (clean)`
- Do not create/update task list for that domain
- Note in summary: "[domain] audit: clean — no issues found"

### Task list already has identical task

- Skip the duplicate
- Note in processing log: "Skipped duplicate: [task description]"

### Report references a file that no longer exists

- Mark finding as `Stale` in the task list
- Add note: "Verify — source file may have been moved or deleted"

---

## Success Criteria

- [ ] All unprocessed reports scanned
- [ ] All findings extracted and prioritized
- [ ] Domain task lists created/updated (never overwritten)
- [ ] Report statuses updated to `Processed`
- [ ] Master task list registry updated
- [ ] Summary reported to user
- [ ] Next step suggested

---

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger Word:** `process reports`
