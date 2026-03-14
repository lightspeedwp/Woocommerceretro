# Continue Prompt — Resume Next Task

**Purpose:** Simple prompt to continue with the next logical task from the master task list.

**Trigger Word:** `continue`

**Version:** 1.0  
**Created:** 2026-03-13  
**Environment:** Figma Make (in-browser preview)

---

## ⚠️ CRITICAL: Figma Make Environment Notice

**You are running in Figma Make, NOT a local development environment.**

**DO NOT suggest:**
- ❌ "Refresh your browser"
- ❌ "Clear your cache"
- ❌ "Restart your dev server"
- ❌ "Run npm install"
- ❌ "Check your file system"

**Instead:**
- ✅ Make code changes directly
- ✅ Update files in place
- ✅ Verify via code inspection
- ✅ Work within Figma Make preview

---

## Simple Execution Flow

### Step 1: Read Master Task List

**File:** `/tasks/task-list.md`

**Find the "Open Tasks" section:**

```markdown
## 📋 Open Tasks (Remaining Work)

### 🎯 Next Priority: [Current Focus]

**Next Task:**
1. **T#.#** - [Task description]
```

---

### Step 2: Determine Next Task

**Decision Logic:**

1. **If master task list has "Next Task" explicitly listed:**
   → Execute that task

2. **If master task list points to another task file:**
   → Read that task file
   → Find first unchecked task `- [ ]`
   → Execute that task

3. **If no clear next task:**
   → Read all active task files
   → Choose highest priority unchecked task (P0 > P1 > P2 > P3)
   → Execute that task

**Priority Order:**
- **P0** - Critical (blocks other work)
- **P1** - High priority
- **P2** - Medium priority
- **P3** - Low priority

---

### Step 3: Read Relevant Guidelines

**Before executing task, read:**

1. **Main Guidelines:** `/guidelines/Guidelines.md`
2. **Task-specific guideline** (if applicable)
   - Component task → `/guidelines/blocks/[ComponentName].md`
   - Design token → `/guidelines/design-tokens/[token-name].md`
   - Template → `/guidelines/templates/[TemplateName].md`
3. **Process guideline** (if applicable)
   - Writing docs → `/guidelines/WRITING_GUIDELINES.md`
   - Creating reports → `/guidelines/REPORTING_GUIDELINES.md`

---

### Step 4: Execute Task

**Follow this pattern:**

1. **Understand the task**
   - Read task description completely
   - Note any acceptance criteria
   - Check related guidelines

2. **Plan the work**
   - Identify files to modify
   - Determine changes needed
   - Consider dependencies

3. **Implement the work**
   - Make code changes
   - Follow coding standards from `/guidelines/development/modern-react-coding-standards.md`
   - Follow WordPress CSS standards from `/guidelines/Guidelines.md`

4. **Verify the work**
   - Check code compiles (no TypeScript errors)
   - Verify dark mode support (if UI component)
   - Verify accessibility (if UI component)
   - Test in Figma Make preview

5. **Update documentation**
   - Mark task complete: `- [ ]` → `- [x]`
   - Update master task list if needed
   - Create report if task is significant

---

### Step 5: Update Task Status

**In the task file:**

```markdown
- [x] **T#.#** - [Task description] ✅ **COMPLETE** (YYYY-MM-DD)
```

**In master task list (if major task):**

```markdown
## 🗂️ Latest Session — YYYY-MM-DD

### [Task Category] ✅ **COMPLETE**

- [x] **T#.#** - [Task description]

**Status:** [X]/[Y] complete ([percentage]%)
```

---

## Task Execution Examples

### Example 1: Create Component Guideline

**Task:** `- [ ] **T4.12** - Create ProductPrice.md guideline`

**Execution:**

1. **Read template:** `/guidelines/_templates/component-guideline.md`
2. **Inspect component:** `/src/app/components/blocks/single-product/ProductPrice.tsx`
3. **Extract:**
   - Props interface
   - Usage examples
   - CSS classes
   - Dark mode support
4. **Create file:** `/guidelines/blocks/ProductPrice.md`
5. **Fill template** with component details
6. **Mark complete:** Task checked off ✅

---

### Example 2: Fix Broken Import

**Task:** `- [ ] **T5.3** - Fix CartContext import in ProductCard`

**Execution:**

1. **Locate file:** `/src/app/components/blocks/ProductCard.tsx`
2. **Find import:**
   ```typescript
   import { useCart } from '@/contexts/CartContext';
   ```
3. **Verify path:** Check if `/src/app/contexts/CartContext.tsx` exists
4. **If broken:** Update to correct path
   ```typescript
   import { useCart } from '../../contexts/CartContext';
   ```
5. **Verify:** Ensure no TypeScript errors
6. **Mark complete:** Task checked off ✅

---

### Example 3: Create Design Token File

**Task:** `- [ ] **T6.2** - Create buttons.md design token guideline`

**Execution:**

1. **Read template:** `/guidelines/_templates/design-token-guideline.md`
2. **Review existing buttons:** Search codebase for button CSS
3. **Extract tokens:**
   - Button sizes
   - Button variants
   - Button colors
   - Button states
4. **Create file:** `/guidelines/design-tokens/buttons.md`
5. **Fill template** with token definitions
6. **Mark complete:** Task checked off ✅

---

## Common Task Types

### Type 1: Create Guideline

**Pattern:**
1. Read appropriate template
2. Inspect code/component
3. Extract required information
4. Fill template
5. Save to correct location

**Templates:**
- Component → `/guidelines/_templates/component-guideline.md`
- Design token → `/guidelines/_templates/design-token-guideline.md`

---

### Type 2: Fix Code Issue

**Pattern:**
1. Locate problematic file
2. Understand the issue
3. Implement fix
4. Verify fix works
5. Update related docs if needed

**Standards:**
- Follow `/guidelines/development/modern-react-coding-standards.md`
- Use WordPress CSS classes (no Tailwind)
- Support dark mode
- Follow accessibility guidelines

---

### Type 3: Update Documentation

**Pattern:**
1. Locate documentation file
2. Read current content
3. Identify outdated information
4. Update with current state
5. Verify cross-references

**Guidelines:**
- Follow `/guidelines/WRITING_GUIDELINES.md`
- Maintain consistent formatting
- Update version numbers
- Update "Last Updated" date

---

### Type 4: Create Report

**Pattern:**
1. Understand report purpose
2. Gather information
3. Follow report template
4. Save to correct location
5. Link from task list

**Guidelines:**
- Follow `/guidelines/REPORTING_GUIDELINES.md`
- Use date prefix: `YYYY-MM-DD_report-name.md`
- Include all required sections
- Link to related tasks

---

## After Task Completion

### Step 1: Mark Task Complete

**In task file:**
```markdown
- [x] **T#.#** - Task description ✅ **COMPLETE**
```

**Add completion date if significant:**
```markdown
- [x] **T#.#** - Task description ✅ **COMPLETE** (2026-03-13)
```

---

### Step 2: Update Master Task List (if needed)

**For major milestones:**

```markdown
## 🗂️ Latest Session — YYYY-MM-DD

### [Category] Progress

- [x] **T#.#** - [Task description] ✅ **COMPLETE**

**Status:** [X]/[Y] complete ([percentage]%)
```

---

### Step 3: Create Report (if significant)

**For tasks that warrant documentation:**

**Report location:** `/reports/documentation/YYYY-MM-DD_task-completion.md`

**Contents:**
- Task description
- Work completed
- Files changed
- Verification performed
- Next steps (if any)

---

### Step 4: Check for Follow-up Tasks

**Questions:**
- Does this task unlock other tasks?
- Are there dependent tasks to execute next?
- Should master task list be updated?

**Action:**
- If follow-up exists → Note in task list
- If dependencies cleared → Update blocked tasks
- If milestone reached → Update master task list

---

## Troubleshooting

### Issue: Task description unclear

**Solution:**
1. Read related guidelines
2. Search codebase for context
3. Check related reports
4. If still unclear, ask for clarification

---

### Issue: Task depends on blocked work

**Solution:**
1. Check task list for blocker status
2. If blocker is actually complete → Update task, proceed
3. If blocker still active → Skip to next task
4. Document blocked status in task file

---

### Issue: Task file empty or all complete

**Solution:**
1. Mark task file as complete in master task list
2. Archive task file to `/tasks/archive/`
3. Move to next active task file
4. Update master task list status

---

## Output Format

**After completing task, provide:**

1. **Task Completed:**
   - Task ID: T#.#
   - Description: [task description]
   - Status: ✅ Complete

2. **Work Done:**
   - Files changed: [list]
   - Key changes: [brief summary]

3. **Verification:**
   - [What was verified]
   - [How it was verified]

4. **Next Task:**
   - [If obvious, state next task]
   - [If not, state "Ready for next 'continue'"]

---

## Usage Examples

### Usage 1: First Task of the Day

**User says:** `continue`

**AI reads:** `/tasks/task-list.md`  
**AI finds:** "Next Task: T4.12 - Create ProductPrice.md guideline"  
**AI reads:** `/guidelines/_templates/component-guideline.md`  
**AI executes:** Creates guideline file  
**AI updates:** Marks task complete  
**AI reports:** "T4.12 complete. Ready for next 'continue'."

---

### Usage 2: Middle of Task List

**User says:** `continue`

**AI reads:** `/tasks/blocks-guidelines-gaps.md`  
**AI finds:** First unchecked task  
**AI executes:** Completes task  
**AI updates:** Checks off task  
**AI reports:** "Task complete. [X]/[Y] blocks done."

---

### Usage 3: After Cleanup

**User says:** `cleanup` (completes)  
**User says:** `continue`

**AI reads:** Updated task list from cleanup  
**AI finds:** Next priority task  
**AI executes:** Continues with updated priorities  

---

## Guidelines Referenced

This prompt follows these standards:

- **Main Guidelines:** `/guidelines/Guidelines.md`
- **Writing Standards:** `/guidelines/WRITING_GUIDELINES.md`
- **Reporting Standards:** `/guidelines/REPORTING_GUIDELINES.md`
- **Coding Standards:** `/guidelines/development/modern-react-coding-standards.md`
- **Template Standards:** `/guidelines/_templates.md`

---

## Frequency of Use

**Recommended:**
- Run `cleanup` once per day or once per week
- Run `continue` as many times as needed
- Typical workflow: `cleanup` → `continue` → `continue` → `continue`...

**Pattern:**
```
Day 1: cleanup → continue → continue → continue
Day 2: continue → continue → continue
Day 3: cleanup → continue → continue
```

---

**Created:** 2026-03-13  
**Trigger Word:** `continue`  
**Dependency:** Works best after `cleanup`  
**Can Run Standalone:** Yes
