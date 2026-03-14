# AI Prompts Directory

**Purpose:** Centralized storage for all AI prompts used in project maintenance, development, and auditing.

**Organization:** Prompts are organized by category in subfolders.

---

## 📂 Folder Structure

```
/prompts/
├── README.md                          # This file
├── maintenance/                       # Regular maintenance prompts
│   └── orchestrator_comprehensive-cleanup-audit.md
├── audits/                            # Audit prompts
├── components/                        # Component creation prompts
├── refactoring/                       # Refactoring prompts
├── testing/                           # Testing prompts
└── workflows/                         # Multi-step workflow prompts
```

---

## 🚀 Quick Start

### Running a Prompt

**Method 1: Copy-paste into AI chat**
1. Open the prompt file (e.g., `/prompts/maintenance/orchestrator_comprehensive-cleanup-audit.md`)
2. Copy the entire content
3. Paste into your AI assistant chat
4. Wait for completion

**Method 2: Reference in conversation**
```
Please run the comprehensive cleanup audit prompt located at:
/prompts/maintenance/orchestrator_comprehensive-cleanup-audit.md
```

---

## 📋 Available Prompts

### Maintenance Prompts

#### `orchestrator_comprehensive-cleanup-audit.md`
**Purpose:** Regular maintenance audit and cleanup  
**Type:** Single-session orchestrator  
**Duration:** ~100 minutes  
**Frequency:** Weekly or before releases

**What it does:**
- ✅ Cleans up root directory (moves/deletes orphaned files)
- ✅ Archives stale reports (> 30 days)
- ✅ Archives completed task files
- ✅ Validates all routes in routes.tsx
- ✅ Checks for broken CSS imports
- ✅ Checks for broken JS/TS imports
- ✅ Updates CHANGELOG.md
- ✅ Updates Guidelines.md
- ✅ Updates task-list.md
- ✅ Updates Sitemap.tsx component
- ✅ Updates DevTools.tsx component
- ✅ Runs TypeScript/ESLint/build checks
- ✅ Generates comprehensive report

**When to run:**
- Before deploying to production
- After major feature completion
- Weekly maintenance (recommended)
- When file system feels cluttered

**Example usage:**
```
Run the comprehensive cleanup audit. Today is March 20, 2026.
```

---

## 🎯 Prompt Categories

### 1. Maintenance
Regular upkeep and validation tasks.

**Examples:**
- Comprehensive cleanup and audit
- Documentation sync
- File organization
- Dependency updates

### 2. Audits
Code quality, compliance, and standards audits.

**Examples:**
- CSS architecture audit
- Component coverage audit
- Accessibility audit
- Performance audit

### 3. Components
Templates for creating new components with proper structure.

**Examples:**
- Create new block component
- Create new pattern component
- Create new template

### 4. Refactoring
Large-scale code refactoring workflows.

**Examples:**
- Convert Tailwind to WordPress CSS
- Modernize ES5 to modern JS
- Migrate to new architecture

### 5. Testing
Test creation and validation prompts.

**Examples:**
- Create unit tests for component
- Create E2E test flow
- Validate test coverage

### 6. Workflows
Multi-step processes for complex tasks.

**Examples:**
- Complete feature development
- Release preparation
- Migration workflows

---

## 📝 Prompt Writing Standards

When creating new prompts, follow these standards:

### File Naming
```
{type}_{descriptive-name}.md

Examples:
orchestrator_comprehensive-cleanup-audit.md
audit_css-architecture.md
component_create-block.md
workflow_feature-complete.md
```

### Naming Conventions
- **orchestrator_** - Single-session, multi-phase workflow
- **audit_** - Code/system audit
- **component_** - Component creation
- **refactoring_** - Refactoring workflow
- **testing_** - Test creation/validation
- **workflow_** - Multi-step process

### Required Sections
1. **Title & Metadata**
   - Purpose
   - Type (single-session, multi-session)
   - Duration estimate
   - Frequency (if recurring)

2. **Overview**
   - What the prompt does
   - Expected outputs
   - Prerequisites

3. **Phases/Steps**
   - Clear numbered phases
   - Time estimates per phase
   - Actions to take
   - Expected outputs

4. **Configuration** (if applicable)
   - Customizable settings
   - Rules that can be adjusted

5. **Success Criteria**
   - How to know it completed successfully
   - Quality checks

6. **Expected Outputs**
   - Files created
   - Files updated
   - Reports generated

---

## 🔄 Prompt Lifecycle

### 1. Creation
- Create prompt file in appropriate category folder
- Follow naming convention
- Include all required sections
- Test with AI assistant

### 2. Versioning
- Append `_v1.md`, `_v2.md` for major changes
- Document changes in prompt header
- Keep old versions for reference

### 3. Testing
- Run prompt in isolated environment
- Verify all phases complete
- Check output quality
- Time the execution

### 4. Documentation
- Add to this README
- Update `/docs/` if needed
- Create quick-start guide if complex

### 5. Maintenance
- Review monthly for accuracy
- Update as codebase evolves
- Archive obsolete prompts

---

## 📊 Prompt Performance Tracking

### Recommended Format

After each prompt run, track:

```markdown
**Date:** YYYY-MM-DD
**Prompt:** orchestrator_comprehensive-cleanup-audit.md
**Duration:** XX minutes
**Status:** Success / Partial / Failed
**Issues:** [any problems encountered]
**Outputs:** [key files created/updated]
```

**Storage:** `/reports/prompt-runs/YYYY-MM-DD_prompt-name.md`

---

## 🎯 Best Practices

### For Single-Session Prompts
- ✅ Clear phase breakdown
- ✅ Time estimates per phase
- ✅ No user input required between phases
- ✅ Generate final report
- ✅ Clear success criteria

### For Multi-Session Prompts
- ✅ Clear stopping points
- ✅ State preservation instructions
- ✅ Progress tracking
- ✅ Resume instructions

### General
- ✅ Use code blocks for examples
- ✅ Include validation steps
- ✅ Specify exact file paths
- ✅ List expected outputs
- ✅ Include rollback instructions (if destructive)

---

## ⚠️ Safety Guidelines

### Before Running Destructive Prompts

**Prompts that delete/move files should warn:**

```markdown
⚠️ **WARNING: This prompt will delete/move files.**

Before running:
- [ ] Commit pending changes
- [ ] Review files marked for deletion
- [ ] Back up important data
- [ ] Verify cleanup rules are correct
```

### Required Safeguards
1. **Always list files before deletion**
2. **Provide dry-run option**
3. **Archive before delete**
4. **Generate undo instructions**

---

## 📚 Related Documentation

- `/guidelines/PROMPT_GENERATION_GUIDELINES.md` - Standards for prompt creation
- `/guidelines/REPORTING_GUIDELINES.md` - Report structure standards
- `/tasks/task-list.md` - Current project tasks
- `/CHANGELOG.md` - Version history

---

## 🔗 Quick Links

**Most Used Prompts:**
- [Comprehensive Cleanup & Audit](./maintenance/orchestrator_comprehensive-cleanup-audit.md)

**Documentation:**
- [Prompt Generation Guidelines](/guidelines/PROMPT_GENERATION_GUIDELINES.md)
- [Project Guidelines](/guidelines/Guidelines.md)

**Reports:**
- [Maintenance Reports](/reports/maintenance/)
- [Audit Reports](/reports/audits/)

---

## 📝 Prompt Request Template

**To request a new prompt:**

```markdown
**Prompt Name:** [descriptive name]
**Category:** [maintenance/audits/components/etc.]
**Purpose:** [what it should do]
**Type:** [single-session/multi-session]
**Expected Duration:** [time estimate]
**Frequency:** [one-time/weekly/monthly]

**Phases:**
1. Phase 1: [description]
2. Phase 2: [description]
3. ...

**Expected Outputs:**
- [file 1]
- [file 2]
- ...

**Success Criteria:**
- [criterion 1]
- [criterion 2]
- ...
```

---

**Last Updated:** March 13, 2026  
**Prompts Count:** 1  
**Status:** Active
