# Expand Guidelines — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand guidelines`
**Duration:** 20-40 minutes

---

## Objective

Analyse the current conversation history and project state to identify areas where guidelines are missing, vague, or incomplete. Create new guidelines or expand existing ones with specific, actionable rules based on patterns observed in recent work sessions.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — current guideline hub and sub-guidelines directory
2. Read `/guidelines/WRITING_GUIDELINES.md` — documentation standards
3. Read `/guidelines/Core-Repository-Guidelines.md` — file organisation rules

---

## Execution Steps

### Phase 1: Analyse conversation history (5-10 min)

Review the current conversation/session for:

1. **Decisions made without guideline backing** — "I decided to do X because..." but no guideline says to do X
2. **Ambiguity encountered** — places where the AI or user was unsure which approach to take
3. **Rules established ad-hoc** — patterns the user defined in conversation that should be permanent
4. **Corrections made** — where the AI did something wrong because a guideline was missing or unclear
5. **New patterns introduced** — coding patterns, naming conventions, or architecture decisions not yet documented

For each finding, document:
- **What was decided** — the specific rule or pattern
- **Where it applies** — which components, files, or domains
- **Current coverage** — does any guideline partially cover this?
- **Severity** — how often would missing this cause errors?

### Phase 2: Analyse guideline gaps (5-10 min)

Review the Guidelines.md hub for systematic gaps:

1. **Undocumented components** — components in `/src/app/components/` with no matching guideline in `/guidelines/blocks/`, `/guidelines/patterns/`, or `/guidelines/parts/`
2. **Shallow guidelines** — guidelines that exist but are too brief to be useful (< 30 lines of actual content)
3. **Outdated guidelines** — guidelines referencing old patterns, deprecated components, or completed migrations
4. **Missing cross-references** — guidelines that should reference each other but don't
5. **Inconsistent specificity** — some guidelines are very detailed while related ones are vague

### Phase 3: Generate recommendations (5-10 min)

For each recommendation, provide:

```markdown
### Recommendation [N]: [Guideline Title]

**Type:** New guideline / Expand existing / Clarify existing
**File:** `/guidelines/[path]/[filename].md`
**Problem:** [What ambiguity or gap this addresses]
**Evidence:** [Where in conversation/project this gap was observed]
**Proposed content:** [Brief outline of what the guideline should cover]
**Priority:** P0 (blocks work) / P1 (causes errors) / P2 (improves consistency)
**Related guidelines:** [Cross-references]
```

### Phase 4: Implement approved recommendations (5-15 min)

Present all recommendations to the user. For each one the user approves:

**For new guidelines:**
1. Create the file using the template from `/guidelines/_templates/`
2. Follow `/guidelines/WRITING_GUIDELINES.md` format
3. Add to Guidelines.md Section 7 (Sub-Guidelines Directory)
4. Add cross-references in related guidelines

**For expanded/clarified guidelines:**
1. Read the current guideline
2. Add the new sections or clarify existing text
3. Bump the version number
4. Update the date
5. Add any new cross-references

### Phase 5: Summary (2 min)

```
Guideline expansion complete.
- Gaps identified: [X]
- Recommendations generated: [Y]
- New guidelines created: [Z]
- Existing guidelines expanded: [W]
- Cross-references added: [N]

→ Next: Say "expand prompts" to create matching trigger prompts.
→ Or: Say "audit guidelines" to verify guideline compliance.
```

---

## Recommendation Categories

| Category | Description | Example |
|----------|-------------|---------|
| **Architecture** | Component relationships, file structure | New `overview-*.md` |
| **Design Token** | Colours, typography, spacing rules | Expand `Colors.md` |
| **Coding Standard** | React/TS patterns, naming conventions | Expand `modern-react-coding-standards.md` |
| **Process** | Workflow, review, documentation procedures | New process guideline |
| **Component** | Specific component usage rules | New `blocks/[component].md` |
| **Accessibility** | WCAG compliance for specific patterns | Expand `focus-management.md` |

---

## Rules

1. **Always present recommendations before implementing** — the user decides what to create
2. **Be specific** — vague guidelines are worse than no guidelines. Include code examples.
3. **Use sentence case** for guideline headings (per Guidelines.md 2.6)
4. **Include "Why"** — every rule should explain its rationale
5. **Keep under 500 lines** — split large guidelines per Guidelines.md 6.2
6. **Cross-reference** — every new guideline should link to at least one existing guideline
7. **Never duplicate** — if a guideline already covers the topic, expand it instead of creating a new one

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/WRITING_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `expand guidelines`
