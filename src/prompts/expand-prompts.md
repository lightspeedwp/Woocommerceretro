# Expand Prompts — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand prompts`
**Duration:** 20-40 minutes

---

## Objective

Analyse the current conversation history and project state to recommend new reusable trigger prompts or improvements to existing ones. This prompt mines patterns from completed work sessions to identify repetitive workflows that should be automated via trigger prompts.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/PROMPT-TRIGGERS.md` — current trigger registry
3. Read `/guidelines/PROMPT_GENERATION_GUIDELINES.md` — prompt creation standards

---

## Execution Steps

### Phase 1: Analyse conversation history (5-10 min)

Review the current conversation/session for:

1. **Repeated manual tasks** — work the user has done 2+ times that could be a trigger
2. **Multi-step workflows** — sequences of triggers the user ran together that could be a combo or orchestrator
3. **Pain points** — tasks where the user expressed frustration or had to redo work
4. **Requests for new capabilities** — "I wish I could just say X and have it do Y"
5. **Ad-hoc fixes** — one-off fixes that reveal a missing systematic prompt

For each pattern found, document:
- **What was done** — the manual work performed
- **How often** — frequency across sessions
- **Generalizable?** — could this apply to different targets?
- **Existing coverage** — does a current trigger partially cover this?

### Phase 2: Analyse project gaps (5-10 min)

Review the current trigger registry for systematic gaps:

1. **Missing CRUD operations** — if `update X` exists but `create X` doesn't, should it?
2. **Missing domains** — are there project domains (components, icons, images, etc.) with no triggers?
3. **Asymmetric coverage** — if `audit X` exists but `update X` and `archive X` don't
4. **Orchestrator gaps** — groups of triggers that are always run together but lack an orchestrator
5. **Stale triggers** — triggers that reference outdated workflows

### Phase 3: Generate recommendations (5-10 min)

For each recommendation, provide:

```markdown
### Recommendation [N]: [Trigger Name]

**Type:** New prompt / Update existing / New combo / New orchestrator
**Trigger Word:** `[proposed trigger]`
**Problem:** [What manual work this automates]
**Evidence:** [Where in conversation/project this pattern was observed]
**Scope:** [What the prompt would do]
**Priority:** P0 (essential) / P1 (high value) / P2 (nice to have)
**Dependencies:** [Other triggers this relates to]
```

### Phase 4: Implement approved recommendations (5-10 min)

Present all recommendations to the user. For each one the user approves:

1. Create the prompt file following `/guidelines/PROMPT_GENERATION_GUIDELINES.md`
2. Register the trigger in `/guidelines/PROMPT-TRIGGERS.md`
3. Update `/guidelines/Guidelines.md` Section 6
4. Update the Quick Reference Card

For updates to existing prompts:
1. Read the current prompt
2. Apply the recommended changes
3. Bump the version number

### Phase 5: Summary (2 min)

```
Prompt expansion complete.
- Patterns identified: [X]
- Recommendations generated: [Y]
- New prompts created: [Z]
- Existing prompts updated: [W]
- Total triggers: [N] (was [M])

→ Next: Say "expand guidelines" to add matching guideline documentation.
→ Or: Say "update triggers" to verify registry sync.
```

---

## Recommendation Categories

Use these categories to organise recommendations:

| Category | Description | Example |
|----------|-------------|---------|
| **Workflow** | Automates a manual multi-step process | `validate imports` |
| **Maintenance** | Keeps a domain current/clean | `update icons` |
| **Quality** | Enforces a standard across files | `apply dark-mode` |
| **Creation** | Scaffolds new project assets | `create component` |
| **Migration** | Moves content between formats | `migrate styles` |
| **Orchestrator** | Groups related triggers | `maintain` |

---

## Rules

1. **Always present recommendations before implementing** — the user decides what to create
2. **Prioritise reusability** — prompts that apply to many targets are more valuable than one-off prompts
3. **Check for duplicates** — don't recommend a prompt that already exists under a different name
4. **Follow naming conventions** — `verb noun` pattern, lowercase, matches existing trigger style
5. **Keep prompts focused** — one prompt, one job. Use orchestrators to combine.

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/PROMPT_GENERATION_GUIDELINES.md`
- `/guidelines/PROMPT-TRIGGERS.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `expand prompts`
