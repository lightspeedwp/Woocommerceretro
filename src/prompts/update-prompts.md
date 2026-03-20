# Update Prompts — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `update prompts`
**Duration:** 15-30 minutes

---

## Objective

Refresh all registered trigger prompt files. Update frontmatter (version, date), verify guideline references are current, ensure environment notices are consistent, and fix any structural issues.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — current project structure
2. Read `/guidelines/PROMPT_GENERATION_GUIDELINES.md` — prompt creation standards
3. Read `/guidelines/PROMPT-TRIGGERS.md` — registered trigger list

---

## Execution Steps

### Phase 1: Inventory registered prompts (3 min)

1. Read the trigger tables from `/guidelines/PROMPT-TRIGGERS.md`
2. Build a list of all registered prompt file paths
3. Read the first 30 lines of each to extract frontmatter

### Phase 2: Structural audit (5-10 min)

For each registered prompt, verify:

| Check | Expected | Action if Missing |
|-------|----------|-------------------|
| `**Version:**` | Present | Add `1.0` |
| `**Created:**` | Valid date | Add today's date |
| `**Type:**` | Single/Orchestrator | Add based on content |
| `**Trigger Word:**` | Matches registry | Fix to match |
| `## Environment Notice` | Present with Figma Make notice | Add standard notice |
| `## Guidelines Referenced` | Present, lists 1+ guidelines | Add section with relevant refs |
| Footer version line | Matches header version | Sync |

### Phase 3: Guideline reference validation (5-10 min)

For each `## Guidelines Referenced` section:

1. Verify every listed guideline file exists on disk
2. If a guideline was archived or renamed, update the reference
3. If a prompt references guidelines that are no longer relevant, remove the reference
4. If a prompt is missing references to guidelines it clearly depends on, add them

### Phase 4: Content freshness (5-10 min)

For each prompt, check:

1. **Outdated file paths** — references to moved/renamed files
2. **Outdated component names** — references to renamed components
3. **Outdated counts** — "130+ block CSS files" that may have changed
4. **Inconsistent terminology** — align with current project vocabulary
5. **Bash commands** — ensure the environment notice warns against terminal commands

### Phase 5: Apply fixes (3-5 min)

1. Update frontmatter on all prompts that needed fixes
2. Bump version numbers on prompts that had content changes
3. Update dates on modified prompts
4. Do NOT change the core logic/phases of any prompt — this is a freshness pass, not a rewrite

### Phase 6: Summary (2 min)

```
Prompt update complete.
- Reviewed: [X] registered prompt files
- Updated: [Y] prompts (frontmatter/references)
- Unchanged: [Z] prompts (already current)
- Guideline refs fixed: [W]

→ Next: Say "update triggers" to verify registry sync.
→ Or: Say "archive prompts" to review unregistered prompts.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/PROMPT_GENERATION_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `update prompts`
