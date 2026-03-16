# Woocommerceretro guidelines, design tokens, and audit orchestration for Playpocket

## Findings from the current repo state

The repo already contains a substantial “WordPress CSS variables” approach (with many `--wp--preset--*` custom properties), but it is currently undermined by duplication, drift, and inconsistent documentation paths. The practical outcome is exactly what you described: prompting tools (and humans) struggle to understand “the one true way” to style light/dark mode, and the UI ends up mixing old branding and multiple dark-mode patterns. fileciteturn16file0L1-L1 fileciteturn15file0L1-L1

Key concrete issues visible right now:

The design-token docs are internally inconsistent and don’t reliably point to real source files. For example, `Colors.md` claims the “source of truth” is a `colors.css` file, but the repo’s actual colour system appears to live in `src/src/styles/theme-variables.css` and `src/src/styles/theme-dark-mode.css` (and in a very large `src/styles/globals.css` entrypoint that imports many CSS files). fileciteturn13file0L1-L1 fileciteturn16file0L1-L1 fileciteturn15file0L1-L1 fileciteturn52file0L1-L1

Light/dark mode is implemented in more than one way, with overlapping responsibilities. There is a `.dark` override section in `theme-variables.css`, and also a separate `theme-dark-mode.css` that sets a large list of variables under `.dark`. This makes it hard to know which file “wins,” and it becomes very easy for pages/sections to accidentally hardcode colours to compensate. fileciteturn16file0L1-L1 fileciteturn15file0L1-L1

Hard-coded hex colours still appear in real section CSS, including gradients/vfx in front-page styles. That directly conflicts with your target of replacing inline hex usage with WordPress-aligned CSS variables. fileciteturn18file0L1-L1

The “auto-loaded by Figma Make” global stylesheet is extremely large and still contains inline hex colours in multiple places (including “funky” overrides, gradients, and utility classes). This both increases the likelihood that AI tools partially process the file and also keeps legacy palette leaks alive. fileciteturn52file0L1-L1

Component guideline accuracy is mixed, especially in `/src/guidelines/components/` (distinct from the much more extensive `/src/guidelines/blocks/` set). For instance, `Logo.md` describes a different component shape, old colours, and an outdated file path; the actual `Logo.tsx` is a simple image wrapper. fileciteturn20file0L1-L1 fileciteturn24file0L1-L1

Your own repo documents already recognise a “templates + orchestrator” guidelines system, but the filesystem reality is still drifting versus those docs (notably around `/guidelines/_templates/` and naming conventions for token docs). fileciteturn41file0L1-L1 fileciteturn44file0L1-L1

## WordPress-aligned design tokens architecture for reliable light and dark mode

### What WordPress expects from token naming

WordPress’s `theme.json` system generates CSS custom properties for presets (palette, font sizes, spacing sizes, etc.) using the schema `--wp--preset--{category}--{slug}` and also supports “custom” variables via `--wp--custom--…`. citeturn2search0turn2search1

This is the correct backbone for your requirement “align with WordPress CSS variables, not Tailwind.” The goal should be: component/section CSS never uses raw hex values; it references stable semantic tokens (`--wp--preset--color--…`, `--wp--preset--spacing--…`, etc.), and only a small, clearly-scoped set of “token source files” contain literal colour values.

### Required simplification: one token source, one mode switch pattern

Right now, the overlap between `theme-variables.css` and `theme-dark-mode.css` makes it ambiguous where to define tokens and how to extend them. fileciteturn16file0L1-L1 fileciteturn15file0L1-L1

To make prompting and enforcement reliable, adopt this rule:

All literal colour values (hex/rgba/hsl) are only allowed in a small set of token source files (per mode). Everything else must reference `var(--wp--preset--color--…)` or `var(--wp--custom--…)`.

WordPress itself encourages using presets/custom properties as centralised, shared values. citeturn2search0turn2search3

### Accessibility constraints that must be baked into tokens

Your audits and token specs should treat WCAG contrast as a token-level concern, not a per-component afterthought.

Text contrast: WCAG SC 1.4.3 requires at least **4.5:1** for normal text and **3:1** for large text. citeturn3search0  
Non-text UI boundaries/focus indicators: WCAG SC 1.4.11 requires **3:1** contrast for UI component boundaries and graphical objects that convey meaning. citeturn3search2

This is why “light mode = light background + dark foreground; dark mode = dark background + light foreground” is a sensible default for the *core semantic tokens*.

### Explicit light/dark token map for Playpocket

Below is a deliberately explicit “semantic token map” designed to be prompt-friendly (and Figma-variables-friendly). It defines the stable variable names the UI should use, and for each one, the intended light and dark values (values are centralised; components should not repeat them).

These values also intentionally steer away from the legacy blue/teal “Bento News” feel you mentioned, by anchoring the brand to retro “paper/ink/signal/screen” plus neon accents used decoratively (not body text). This aligns with the retro palette already present in your token file, but removes ambiguity and makes it auditable. fileciteturn16file0L1-L1 fileciteturn13file0L1-L1

| Semantic token (use in UI) | Light mode value | Dark mode value | Usage rules |
|---|---:|---:|---|
| `--wp--preset--color--background` | `#F2EEE6` | `#151A1E` | Page background; never transparent for default pages |
| `--wp--preset--color--foreground` | `#1E2630` | `#F2EEE6` | Primary text on background; default text colour |
| `--wp--preset--color--surface` | `#FFFFFF` | `#1B2228` | Cards, panels; should contrast subtly vs background |
| `--wp--preset--color--surface-2` | `#E7E2D8` | `#232D35` | Secondary surfaces (striped rows, subtle panels) |
| `--wp--preset--color--border` | `#CBD5C9` | `#2A3A46` | Borders/dividers; must meet 3:1 for meaningful boundaries where required citeturn3search2 |
| `--wp--preset--color--muted` | `#E7E2D8` | `#232D35` | Muted background fills (chips, subtle panels) |
| `--wp--preset--color--muted-foreground` | `#4B5563` | `#B7C3CC` | Secondary text; must still hit 4.5:1 on its intended background citeturn3search0 |
| `--wp--preset--color--primary` | `#FFC533` | `#FFC533` | Primary actions/CTAs (retro “signal”); avoid using for body text |
| `--wp--preset--color--primary-foreground` | `#1E2630` | `#1E2630` | Text/icons on primary (dark ink for both modes) |
| `--wp--preset--color--secondary` | `#6BBF59` | `#6BBF59` | Secondary actions/success-leaning UI |
| `--wp--preset--color--secondary-foreground` | `#1E2630` | `#1E2630` | Text/icons on secondary |
| `--wp--preset--color--accent` | `#D4143D` | `#D4143D` | High-attention accent; sparing use (badges, key highlights) |
| `--wp--preset--color--accent-foreground` | `#F2EEE6` | `#F2EEE6` | Text on accent backgrounds |
| `--wp--preset--color--link` | `#0F4C5C` | `#00FFF9` | Links must be distinguishable beyond colour (underline or other cue) |
| `--wp--preset--color--ring` | `#00FFF9` | `#00FFF9` | Focus rings/outlines; ensure 3:1 vs adjacent colours citeturn3search2 |
| `--wp--preset--color--success` | `#2ECC71` | `#86EFAC` | Semantic success state |
| `--wp--preset--color--warning` | `#F59E0B` | `#FBBF24` | Semantic warning state |
| `--wp--preset--color--error` | `#DC2626` | `#FCA5A5` | Semantic error state |

Decorative-only neon accents (never body text):
- `--wp--preset--color--neon-cyan: #00FFF9`
- `--wp--preset--color--neon-pink: #FF00FF`
- `--wp--preset--color--neon-lime: #CCFF00`
- `--wp--preset--color--neon-yellow: #FFC533` (same as primary signal in this proposal)

This matches the spirit of your existing “neon” set but makes the “decorative-only” constraint explicit and enforceable. fileciteturn16file0L1-L1 fileciteturn37file0L1-L1 fileciteturn38file0L1-L1

### The canonical implementation files to create or refactor toward

Your repo currently imports `theme-variables.css`, `theme-light-mode.css`, `theme-dark-mode.css`, and more through a large entrypoint stylesheet. fileciteturn52file0L1-L1

To meet your “smaller file chunks” requirement, split tokens and mode plumbing into small, purpose-specific files, and strictly whitelist where literals are allowed.

Recommended minimal token file set:

- `src/src/styles/tokens/color.ref.light.css` (literals allowed)
- `src/src/styles/tokens/color.ref.dark.css` (literals allowed)
- `src/src/styles/tokens/color.semantic.css` (no literals; only `var(...)` mapping)
- `src/src/styles/tokens/typography.css` (font families/sizes as WP variables)
- `src/src/styles/tokens/spacing.css` (WP spacing tokens)
- `src/src/styles/tokens/motion.css` (easings/durations, reduced motion)

Then, section and block CSS reference semantic tokens only.

A prompt-friendly CSS skeleton (to copy into your repo as the new canonical pattern):

```css
/* File: src/src/styles/tokens/color.semantic.css
   What this is: Semantic colour tokens mapped to WordPress preset variables.
   Rule: NO literal colours in this file (no hex/rgb/hsl).
*/

:root {
  /* Semantic (do not rename lightly) */
  --wp--preset--color--background: var(--wp--custom--color--background);
  --wp--preset--color--foreground: var(--wp--custom--color--foreground);

  --wp--preset--color--surface: var(--wp--custom--color--surface-1);
  --wp--preset--color--surface-2: var(--wp--custom--color--surface-2);

  --wp--preset--color--border: var(--wp--custom--color--border);
  --wp--preset--color--muted: var(--wp--custom--color--muted);
  --wp--preset--color--muted-foreground: var(--wp--custom--color--muted-foreground);

  --wp--preset--color--primary: var(--wp--custom--color--primary);
  --wp--preset--color--primary-foreground: var(--wp--custom--color--primary-foreground);

  --wp--preset--color--secondary: var(--wp--custom--color--secondary);
  --wp--preset--color--secondary-foreground: var(--wp--custom--color--secondary-foreground);

  --wp--preset--color--accent: var(--wp--custom--color--accent);
  --wp--preset--color--accent-foreground: var(--wp--custom--color--accent-foreground);

  --wp--preset--color--link: var(--wp--custom--color--link);
  --wp--preset--color--ring: var(--wp--custom--color--ring);

  --wp--preset--color--success: var(--wp--custom--color--success);
  --wp--preset--color--warning: var(--wp--custom--color--warning);
  --wp--preset--color--error: var(--wp--custom--color--error);

  /* Decorative-only (still stable names; usage is constrained by guidelines) */
  --wp--preset--color--neon-cyan: var(--wp--custom--color--neon-cyan);
  --wp--preset--color--neon-pink: var(--wp--custom--color--neon-pink);
  --wp--preset--color--neon-lime: var(--wp--custom--color--neon-lime);
  --wp--preset--color--neon-yellow: var(--wp--custom--color--neon-yellow);
}
```

```css
/* File: src/src/styles/tokens/color.ref.light.css
   What this is: Light mode literal values.
   Rule: literals allowed ONLY here (and the dark equivalent).
*/

:root {
  color-scheme: light;

  --wp--custom--color--background: #F2EEE6;
  --wp--custom--color--foreground: #1E2630;

  --wp--custom--color--surface-1: #FFFFFF;
  --wp--custom--color--surface-2: #E7E2D8;

  --wp--custom--color--border: #CBD5C9;
  --wp--custom--color--muted: #E7E2D8;
  --wp--custom--color--muted-foreground: #4B5563;

  --wp--custom--color--primary: #FFC533;
  --wp--custom--color--primary-foreground: #1E2630;

  --wp--custom--color--secondary: #6BBF59;
  --wp--custom--color--secondary-foreground: #1E2630;

  --wp--custom--color--accent: #D4143D;
  --wp--custom--color--accent-foreground: #F2EEE6;

  --wp--custom--color--link: #0F4C5C;
  --wp--custom--color--ring: #00FFF9;

  --wp--custom--color--success: #2ECC71;
  --wp--custom--color--warning: #F59E0B;
  --wp--custom--color--error: #DC2626;

  --wp--custom--color--neon-cyan: #00FFF9;
  --wp--custom--color--neon-pink: #FF00FF;
  --wp--custom--color--neon-lime: #CCFF00;
  --wp--custom--color--neon-yellow: #FFC533;
}
```

```css
/* File: src/src/styles/tokens/color.ref.dark.css
   What this is: Dark mode literal values.
*/

.dark {
  color-scheme: dark;

  --wp--custom--color--background: #151A1E;
  --wp--custom--color--foreground: #F2EEE6;

  --wp--custom--color--surface-1: #1B2228;
  --wp--custom--color--surface-2: #232D35;

  --wp--custom--color--border: #2A3A46;
  --wp--custom--color--muted: #232D35;
  --wp--custom--color--muted-foreground: #B7C3CC;

  /* Keep brand stable across modes */
  --wp--custom--color--primary: #FFC533;
  --wp--custom--color--primary-foreground: #1E2630;

  --wp--custom--color--secondary: #6BBF59;
  --wp--custom--color--secondary-foreground: #1E2630;

  --wp--custom--color--accent: #D4143D;
  --wp--custom--color--accent-foreground: #F2EEE6;

  --wp--custom--color--link: #00FFF9;
  --wp--custom--color--ring: #00FFF9;

  --wp--custom--color--success: #86EFAC;
  --wp--custom--color--warning: #FBBF24;
  --wp--custom--color--error: #FCA5A5;

  --wp--custom--color--neon-cyan: #00FFF9;
  --wp--custom--color--neon-pink: #FF00FF;
  --wp--custom--color--neon-lime: #CCFF00;
  --wp--custom--color--neon-yellow: #FFC533;
}
```

This aligns with WordPress’s preset/custom naming scheme while giving you a mode system that is trivial to explain to tools: “literals only in `color.ref.*`, everything else maps to `--wp--preset--color--…`.” citeturn2search0turn2search1

### Enforcing “no inline hex values” in the real codebase

Your repo already contains a “find hardcoded CSS values” script, but it currently targets paths that don’t match where your styles truly live (and it excludes only one token file by name). fileciteturn22file0L1-L1 fileciteturn16file0L1-L1

Update the enforcement rule to:

- Scan all `*.css`, `*.ts`, `*.tsx`.
- Fail if any literal hex/rgb/hsl colour occurs **outside** whitelisted token source files.
- Fail if any `font-family:` literal occurs outside typography token source files (or outside a strict whitelist for icon fonts).

Also: given you already have an “auto-loaded entrypoint” stylesheet, aggressively remove literals there by pushing them down into token/ref files (or into the smallest relevant *component CSS* file, still using tokens). fileciteturn52file0L1-L1

## Guidelines system updates and required templates

### The repo already describes the template system, but the folder is incomplete

Your `src/docs/GUIDELINES-SYSTEM-SUMMARY.md` explicitly says templates exist under `/guidelines/_templates/` and that more templates are “coming.” fileciteturn41file0L1-L1  
Your `src/guidelines/_templates.md` also lists template filenames such as `process-guideline.md`, `overview-guideline.md`, `report-template.md`, `prompt-template.md`, and `task-list-template.md`. fileciteturn44file0L1-L1

Your request is to complete this properly and add templates for:
- Component guidelines
- Design Tokens guidelines
- General guidelines
- Prompts
- Reports
- Task lists

Below are **small, strict templates** (designed to stay under “AI-safe” size and avoid the current 500–1300 line monster-doc pattern).

### Folder and file structure to add

Create the folder:

- `src/guidelines/_templates/`

Add these files (minimum viable set):

- `src/guidelines/_templates/component-guideline.md`
- `src/guidelines/_templates/design-tokens-guideline.md`
- `src/guidelines/_templates/general-guideline.md`
- `src/guidelines/_templates/prompt-template.md`
- `src/guidelines/_templates/report-template.md`
- `src/guidelines/_templates/task-list-template.md`

This aligns to what your repo’s template index already claims should exist. fileciteturn44file0L1-L1 fileciteturn41file0L1-L1

### Proposed concise templates

```md
<!-- File: src/guidelines/_templates/component-guideline.md -->
# [ComponentName] Guideline

**What this is:** Component guideline template (blocks/patterns/parts/common).  
**Status:** Template  
**Last updated:** [YYYY-MM-DD]

## Overview
Describe the component in 2–4 sentences: problem solved, where used, who owns it.

## Source of truth
Component file: `[path/to/component.tsx]`  
Primary CSS file(s): `[path/to/component.css]`  
Related tokens: `[link to token docs]`

## API
### Props
```ts
// Copy exact interface(s) from code.
// No invented props.
```

### Variants
List variants (if any) and which CSS classes/props enable them.

## Styling rules
Use **ONLY**:
- `var(--wp--preset--color--*)`
- `var(--wp--preset--spacing--*)`
- `var(--wp--preset--font-size--*)`, `--wp--preset--font-family--*`

Forbidden:
- Inline hex/rgb/hsl in component CSS
- Tailwind colour utilities
- `style={{ color: '#...' }}`

## Dark mode
State exactly what should change in dark mode and which tokens handle it.
Include at least one `.dark` example if component has any colour-dependent visuals.

## Accessibility
Keyboard: focus order, trap rules (if overlay), escape behaviour (if modal).  
ARIA: labels for icon buttons, roles for special widgets.  
Contrast: meet WCAG 1.4.3 / 1.4.11. citeturn3search0turn3search2

## Examples
Provide 1–2 minimal usage examples from real routes/templates.

## Changelog
- [YYYY-MM-DD] vX.Y — summary of change
```

```md
<!-- File: src/guidelines/_templates/design-tokens-guideline.md -->
# [token-area] design tokens

**What this is:** Design token guideline template.  
**Status:** Template  
**Last updated:** [YYYY-MM-DD]

## Goal
One paragraph describing what this token set controls and what it must NOT contain.

## Canonical implementation files
List the real CSS/TS files where these tokens are defined.

## Token list
Use a table:
- Token name
- Light value
- Dark value
- Usage notes
- Forbidden usage (if any)

## Rules
No component/section may use literals; literals only allowed in token ref files.
Reference WordPress preset naming scheme. citeturn2search0turn2search1

## Examples
### Correct
```css
.selector { color: var(--wp--preset--color--foreground); }
```

### Incorrect
```css
.selector { color: #ffffff; }
```

## Audit checklist
Short checklist used by audit prompts to detect violations.
```

```md
<!-- File: src/guidelines/_templates/general-guideline.md -->
# [Guideline title]

**What this is:** General guideline template (process or standards).  
**Status:** Template  
**Last updated:** [YYYY-MM-DD]

## Scope
What this guideline governs, what it does not.

## Rules
Write rules as “MUST / MUST NOT / SHOULD”.

## How to comply
Step-by-step, short and operational.

## Examples
At least one compliant example; one non-compliant example.

## Related docs
Link to relevant templates/guidelines.

## Changelog
- [YYYY-MM-DD] vX.Y — summary of change
```

```md
<!-- File: src/guidelines/_templates/prompt-template.md -->
# [Prompt title]

**What this is:** Prompt template (single prompt OR orchestrator subprompt).  
**Status:** Template  
**Created:** [YYYY-MM-DD]  
**Owner:** [team/person]

## Inputs
- Repo scope (always state which folders/files to inspect)
- Required guideline links (must be up-to-date before auditing)

## Output contract
### Report location rules
- Single prompt → `/src/reports/[category]/[YYYY-MM-DD]_[slug].md`
- Orchestrator subprompt → `/src/reports/[orchestrator-slug]/[subprompt-slug]/[YYYY-MM-DD]_[subprompt-slug].md`

### Task creation rule
Do **NOT** create tasks until **all** reports are finished and written.

## Procedure
Step-by-step checklist of what to inspect and how to record findings.

## Report format
Must include:
- Summary
- Violations table (file → problem → evidence → fix)
- Recommendations (prioritised)

## Done criteria
Explicit pass/fail conditions.
```

```md
<!-- File: src/guidelines/_templates/report-template.md -->
# [Report title]

**What this is:** Report template (audits, fixes, design reviews).  
**Date:** [YYYY-MM-DD]  
**Scope:** [what was inspected]  
**Status:** Draft | Final

## Summary
What was checked and the headline results.

## Method
How you inspected the repo (files searched, heuristics, tooling).

## Findings
Use a table:
- Severity (P0–P3)
- Location (file + line region if possible)
- Problem
- Expected (quote the guideline rule)
- Fix approach

## Evidence
Short excerpts or references (no giant dumps).

## Recommendations
Short, practical next actions.

## Appendix
Optional small snippets only.
```

```md
<!-- File: src/guidelines/_templates/task-list-template.md -->
# [Task list title]

**What this is:** Task list template generated *after* reports.  
**Created:** [YYYY-MM-DD]  
**Related report(s):** [link(s)]

## Ordering rules
- P0: broken UX / security / crashes / “cannot buy”
- P1: dark mode fails / accessibility fails / major brand inconsistency
- P2: polish / refactor / tech debt
- P3: nice-to-have

## Tasks
Use this format per task:
- **ID:** T-[slug]-[number]
- **Priority:** P0–P3
- **Owner:** TBD
- **Where:** file(s)
- **What:** single-sentence outcome
- **Acceptance criteria:** measurable checks
```

### Updating the prompt/report/task creation rules to match your request

Your existing `PROMPT_GENERATION_GUIDELINES.md` gives a detailed taxonomy, but it does not encode your newer “single prompt vs orchestrator folder” output contract the way you specified. fileciteturn39file0L1-L1

You want these behaviours to be non-negotiable:

- Prompts are created in `/prompts/`
- Reports are created in `/reports/`
- Tasks are created in `/tasks/`
- Single prompts live at the root of `/prompts/`
- Orchestrators live in their own subfolder under `/prompts/` and create one report per subprompt under a mirrored folder under `/reports/`
- Only after reports are completed does the AI generate a single task list

Your repo already has `/src/prompts/`, `/src/reports/`, `/src/tasks/` (under the top-level `src/` directory), so the safest low-risk change is to standardise on **repo-relative paths including that prefix** and update every guideline/prompt that references bare `/prompts/` etc for clarity. fileciteturn39file0L1-L1 fileciteturn41file0L1-L1

## Component guideline verification and corrections needed

### What’s accurate vs what’s drifting

Your repo contains strong guideline coverage for many block components (and has audits reporting high compliance in sampled areas), but the specific folder you flagged—`/src/guidelines/components/`—contains multiple documents that are clearly out of sync with the current React app paths and implementations. fileciteturn51file0L1-L1 fileciteturn20file0L1-L1 fileciteturn25file0L1-L1 fileciteturn49file0L1-L1

Concrete examples (and why they matter):

Logo guideline mismatch: `Logo.md` references old branding and an older file location; the real `Logo.tsx` is currently just an image wrapper using a Figma asset import, plus inline sizing. This makes it impossible for an AI prompt to infer how to implement your new interactive “keyboard key” logo without contradicting the guideline. fileciteturn20file0L1-L1 fileciteturn24file0L1-L1

Container guideline mismatch: `Container.md` describes variants and Tailwind usage that don’t match the current code (the code uses a `VARIANTS` map including `narrow`, and a `CONTAINER` config from `theme.ts`). Any audit prompt that trusts `Container.md` right now will generate false positives/negatives. fileciteturn25file0L1-L1 fileciteturn27file0L1-L1 fileciteturn28file0L1-L1

Section preset guideline drift: `SectionPresets.md` looks newer, but it still references paths and token names that don’t align with the actual styles directories and token definitions you currently import via the global stylesheet. fileciteturn23file0L1-L1 fileciteturn52file0L1-L1

BrandLogoGrid guideline mismatch: `BrandLogoGrid.md` is huge and prescribes props/interfaces and token names that may not match the current implementation and your “no literals outside token files” rule. It also references legacy pseudo-paths, which makes it brittle for automation. fileciteturn49file0L1-L1

### What “verified accurate” should mean going forward

Given your requirement “Before any audit reporting, guidelines must be fully updated,” the definition of “accurate guideline” must include:

- Correct source file paths (component + CSS)
- Props interface copied verbatim from code (no invented props)
- Token usage rules updated to the “no literals” policy
- Dark mode behaviour described in terms of semantic tokens (not ad-hoc `.dark` overrides per component unless necessary)
- File is kept intentionally short (so AI tools can process it reliably)

The quickest way to get there is:

- Move `/src/guidelines/components/*` to the template format above (short)
- For each file, add a “Source of truth” section with the actual current path, like `src/src/app/components/...`
- Remove old colour palettes and replace examples with `var(--wp--preset--color--…)`

This will also reduce the need for the large “component guideline” docs to be multi-hundred-line monoliths.

## Retro Shop redesign orchestrator prompt rewrite and sub-audit prompts

### Why v1 needs a reset for your current objective

`PROMPT_RETRO_CONVERSION_v1.md` is written as a long conversion playbook and includes multiple patterns you are now explicitly trying to eliminate (hard-coded colours, Tailwind usage in examples, conflicting guidance about where CSS lives). fileciteturn46file0L1-L1

Your current goal is different: you want a **finalisation brief** for a duplicated prototype that is internally inconsistent, and you want audit subprompts that generate reports (and only then tasks). That calls for an orchestrator structure, not a single mega prompt.

### Files to add as “downloadable” prompt artefacts

Create this folder (or equivalent under your existing `src/prompts/` layout):

- `src/prompts/redesign/retro-shop-audit-v2/`

Inside it:

- `PROMPT_RETRO_CONVERSION_v2.md` (the orchestrator)
- `subprompts/01_audit_tokens_light-dark.md`
- `subprompts/02_audit_retro_consistency.md`
- `subprompts/03_audit_webgl_opportunities.md`
- `subprompts/04_audit_routing_404s.md`
- `subprompts/05_audit_layout_breakage.md`
- `subprompts/06_audit_functionality_flows.md`
- `subprompts/07_audit_dark_mode_switching.md`
- `subprompts/08_audit_accessibility.md`
- `subprompts/09_audit_performance.md`

Then mirror report outputs:

- `src/reports/retro-shop-audit-v2/01_audit_tokens_light-dark/[YYYY-MM-DD]_01_audit_tokens_light-dark.md`
- … etc per subprompt

This matches the “one report per subprompt” contract you described.

### Orchestrator prompt v2 content

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_CONVERSION_v2.md -->
# Retro Shop (Playpocket) Finalisation Orchestrator — Audit + Report System

**What this is:** Orchestrator prompt (runs audits via subprompts and produces reports).  
**Version:** v2.0  
**Date:** 2026-03-15  
**Repo:** lightspeedwp/Woocommerceretro  
**Output:** Reports only. Tasks are created ONLY after all reports are written.

## Context
This repo was duplicated from an earlier prototype and contains mixed brand systems (legacy palettes and inconsistent dark mode patterns).
Goal: finalise the Playpocket prototype with a consistent retro design system, WordPress-aligned tokens, solid routing, and stable UX.

## Hard rules (non-negotiable)
- **Before auditing:** update any relevant guidelines so they match the new token/mode requirements.
- **During audits:** do not invent requirements; cite existing guidelines.
- **Outputs:**
  - Each subprompt produces exactly one report at the required path.
  - Do NOT create task lists until ALL subprompt reports exist.

## Required guideline baseline (must be up to date before audits)
- Design tokens: colours, spacing, typography, dark/light mode, and “no literals” policy.
- Prompt/report/task folder contract and orchestrator output rules.
- Component guideline templates for short, accurate docs.

## Execution order
Run subprompts in this order (stop only if a subprompt reveals guideline gaps; fix guidelines, then re-run):
1) 01_audit_tokens_light-dark
2) 02_audit_retro_consistency
3) 03_audit_webgl_opportunities
4) 04_audit_routing_404s
5) 05_audit_layout_breakage
6) 06_audit_functionality_flows
7) 07_audit_dark_mode_switching
8) 08_audit_accessibility
9) 09_audit_performance

## Report output contract
Each subprompt MUST write its report to:
`src/reports/retro-shop-audit-v2/<subprompt-slug>/YYYY-MM-DD_<subprompt-slug>.md`

## After all reports exist
Only then: generate ONE consolidated task list in:
`src/tasks/retro-shop-audit-v2_tasks.md`
This task list must reference findings from the reports (no speculation).
```

### Subprompt examples (all nine)

These are intentionally explicit but kept short enough for reliable tool processing.

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/01_audit_tokens_light-dark.md -->
# Audit — Light/Dark Mode Tokens + WordPress Variable Alignment

**What this is:** Subprompt audit (tokens + mode switching).  
**Report path:** src/reports/retro-shop-audit-v2/01_audit_tokens_light-dark/YYYY-MM-DD_01_audit_tokens_light-dark.md

## Goal
Verify that:
1) All UI styling uses WordPress-aligned CSS variables (no inline hex outside token ref files).
2) Light mode and dark mode are implemented via one consistent switch pattern.
3) Token docs match implementation files.

Reference: WordPress preset variable naming scheme. citeturn2search0turn2search1

## Inspect
- Token CSS files (theme variables, dark mode overrides, any token ref files).
- Section CSS for hard-coded colours (hex/rgb/hsl).
- Components for inline style colour/font usage.

## Output (in report)
- Current token source-of-truth file(s) and conflicts.
- Table of violations: file → literal usage → recommended token replacement.
- Recommended minimal refactor plan: consolidate to 1 token system and 1 mode switch.
- Explicit list of token variables required for Playpocket (background/foreground/surfaces/borders/link/ring/state colours).

## Done criteria
Report includes:
- At least 10 concrete findings with file-level evidence.
- A clear “single source of truth” recommendation.
```

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/02_audit_retro_consistency.md -->
# Audit — Retro Design Consistency

**What this is:** Subprompt audit (visual consistency).  
**Report path:** src/reports/retro-shop-audit-v2/02_audit_retro_consistency/YYYY-MM-DD_02_audit_retro_consistency.md

## Goal
Identify pages/sections still using “funky/bento/legacy” styling patterns rather than the Playpocket retro system.

## Inspect
- Global style entrypoint imports and any legacy “funky” blocks.
- Section CSS for mixed naming conventions and mixed palettes.
- Template/page components for inconsistent layout primitives.

## Output
- Inventory of inconsistent pages/components.
- Recommended consolidation: which classes/tokens should be used instead.
- Quick wins (P1) vs refactors (P2).

## Done criteria
Report includes a short list of “top 10 inconsistency hotspots” with file paths.
```

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/03_audit_webgl_opportunities.md -->
# Audit — WebGL Usage and Integration Recommendations

**What this is:** Subprompt audit (WebGL).  
**Report path:** src/reports/retro-shop-audit-v2/03_audit_webgl_opportunities/YYYY-MM-DD_03_audit_webgl_opportunities.md

## Goal
Recommend where WebGL adds real value (not gimmick), and define guardrails:
- performance budgets
- reduced motion behaviour
- progressive enhancement

## Inspect
- Existing canvas/WebGL components (if any) and how they load.
- Routes/sections where interactive retro effects improve UX (hero, product showcases).
- Any performance tooling already present.

## Output
- Recommended WebGL placements ranked by ROI.
- Technical constraints (lazy load, device capability checks).
- Accessibility: reduced motion and fallback content required. citeturn2search2

## Done criteria
Report includes at least 3 concrete integration patterns and 3 anti-patterns.
```

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/04_audit_routing_404s.md -->
# Audit — Routing and 404/Page Not Loading Issues

**What this is:** Subprompt audit (React Router).  
**Report path:** src/reports/retro-shop-audit-v2/04_audit_routing_404s/YYYY-MM-DD_04_audit_routing_404s.md

## Goal
Find and explain:
- route config mismatches
- broken links
- missing route elements producing “page not loading”

## Inspect
- Router configuration files
- Navigation components (header/footer/menus)
- Any route constants/enums
- 404 page implementation

## Output
- Table of broken routes/links: “from” → “to” → reason → fix
- Recommended route naming conventions and link helpers

## Done criteria
Report includes at least 10 link/route checks and a proposed canonical route map.
```

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/05_audit_layout_breakage.md -->
# Audit — Layout Problems / Broken Design / Missing Components

**What this is:** Subprompt audit (layout integrity).  
**Report path:** src/reports/retro-shop-audit-v2/05_audit_layout_breakage/YYYY-MM-DD_05_audit_layout_breakage.md

## Goal
Identify layout breakpoints, overflow, missing spacing, and component gaps.

## Inspect
- Section CSS files for fixed heights/widths and overflow traps.
- Layout primitives (Container, grids).
- Known “large CSS” hotspots.

## Output
- List of broken layouts by route and likely root cause.
- Fix recommendations that use spacing tokens (no literals).

## Done criteria
Report includes at least 5 breakpoint-related findings and remediation guidance.
```

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/06_audit_functionality_flows.md -->
# Audit — Functional Flows (filters, cart, search, etc.)

**What this is:** Subprompt audit (core UX flows).  
**Report path:** src/reports/retro-shop-audit-v2/06_audit_functionality_flows/YYYY-MM-DD_06_audit_functionality_flows.md

## Goal
Verify that key ecommerce flows work and are internally consistent:
- filters
- cart add/remove/update
- search + autocomplete
- checkout progression (even if mocked)

## Inspect
- Cart context/state module
- Search components
- Filter sidebar/drawer components
- Any mocked API/data sources

## Output
- Pass/fail matrix per flow
- Bugs with file pointers and suspected causes

## Done criteria
Report includes a flow checklist and at least 10 functional assertions.
```

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/07_audit_dark_mode_switching.md -->
# Audit — Dark Mode Switching Failures

**What this is:** Subprompt audit (theme switching).  
**Report path:** src/reports/retro-shop-audit-v2/07_audit_dark_mode_switching/YYYY-MM-DD_07_audit_dark_mode_switching.md

## Goal
Find UI elements that do not switch properly (wrong colours, unreadable text, missing borders).

## Inspect
- Theme toggle component
- Any `.dark` selectors in section CSS
- Any inline style colour usage

## Output
- List of components failing in dark mode (with the token that should be used instead)
- Recommended simplification (fewer `.dark` special-cases; more semantic tokens)

## Done criteria
Report links failures to the exact token misuse (or missing token).
```

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/08_audit_accessibility.md -->
# Audit — Accessibility (focus, ARIA, contrast, motion)

**What this is:** Subprompt audit (a11y).  
**Report path:** src/reports/retro-shop-audit-v2/08_audit_accessibility/YYYY-MM-DD_08_audit_accessibility.md

## Goal
Identify a11y violations, prioritising:
- missing focus states or insufficient focus contrast (WCAG 1.4.11) citeturn3search2
- insufficient text contrast (WCAG 1.4.3) citeturn3search0
- missing ARIA labels for icon buttons
- keyboard traps in overlays/menus
- reduced motion coverage for animated effects citeturn2search2

## Inspect
- Buttons/controls with icons only
- Navigation menus and dialogs
- Motion-heavy sections

## Output
- Violations table with WCAG reference
- Fix patterns using tokens (ring colour, focus outlines)

## Done criteria
Report includes at least 10 concrete issues or explicit “pass” evidence.
```

```md
<!-- File: src/prompts/redesign/retro-shop-audit-v2/subprompts/09_audit_performance.md -->
# Audit — Performance (loading, rendering, bundle hotspots)

**What this is:** Subprompt audit (perf).  
**Report path:** src/reports/retro-shop-audit-v2/09_audit_performance/YYYY-MM-DD_09_audit_performance.md

## Goal
Identify slow-loading or rendering hotspots and recommend fixes that do not regress UX.

## Inspect
- Large CSS entrypoint and import structure
- Any heavy assets, animations, or un-lazy-loaded routes
- WebGL/canvas (if present)

## Output
- Largest likely bottlenecks
- Fixes: CSS splitting, lazy loading, asset optimisation
- Keep retro effects but move them behind capability checks

## Done criteria
Report includes a prioritised performance backlog with measurable outcomes.
```

This suite directly reflects your requested audit categories and enforces your required “reports first, tasks last” workflow at the prompt-contract level.

## Playpocket interactive logo brief and font recommendation

### Logo brief

Brand name and tagline:
- Wordmark: **Playpocket**
- Tagline: **Retro gear & apparel**

Icon concept:
- A single **keyboard keycap** (rounded square key) that communicates “press to play / pocket console.”

Interaction:
- The logo (icon + wordmark) is a **button**.
- On click/tap:
  - Keycap animates “press in” (translate down by 1–2px, shadow reduces, highlight shifts).
  - Optional subtle “beep” is allowed only if muted by default and user-initiated (avoid auto sound).
  - The interaction must respect reduced motion preferences (no bounce/overshoot when `prefers-reduced-motion: reduce`). Using OS-level motion prefs is a standard web pattern. citeturn2search2

Accessibility requirements:
- The entire logo must be a single focusable element (`<button>` or `<a>` depending on whether it navigates home).
- Visible focus ring uses `--wp--preset--color--ring` and must meet non-text contrast requirements in both modes (WCAG 1.4.11, 3:1). citeturn3search2
- Include an accessible name: `aria-label="Playpocket — Home"` if the visible text is stylised or if the icon is purely decorative.
- Do not make the keypress animation the only feedback; include standard hover/focus styling and keep the click behaviour deterministic.

Styling (token-aligned):
- In light mode: key face uses `--wp--preset--color--surface`, border uses `--wp--preset--color--border`, text uses `--wp--preset--color--foreground`.
- In dark mode: same tokens; the values switch via the `.dark` system.
- Accent: allow a small neon edge highlight using `--wp--preset--color--neon-cyan` (decorative, not text).

### Font recommendation for the wordmark

You asked for a sans serif recommendation. For a retro-tech feel that stays modern and readable, the best fit is:

- **Space Grotesk** (primary recommendation): geometric, slightly “tech” vibe without looking like a novelty font; works well with a keycap icon and retro UI.
- Safe fallback: your existing body/utility font (currently the repo references Inter in multiple places) for consistency. fileciteturn26file0L1-L1

Implementation note: define the logo font via WordPress-aligned variables (e.g., `--wp--preset--font-family--brand`), then use that in the logo component CSS. WordPress supports font-family presets as CSS custom properties. citeturn2search0turn2search1

---

**Cited repo artefacts that most strongly indicate what must change next:** token duplication and mixed mode logic (`theme-variables.css`, `theme-dark-mode.css`), hard-coded colours in section CSS (`front-page.css`) and the massive “auto-loaded” stylesheet (`src/styles/globals.css`), plus outdated component guidelines (`Logo.md`, `Container.md`, `BrandLogoGrid.md`) versus the actual component code (`Logo.tsx`, `Container.tsx`). fileciteturn16file0L1-L1 fileciteturn15file0L1-L1 fileciteturn18file0L1-L1 fileciteturn52file0L1-L1 fileciteturn20file0L1-L1 fileciteturn25file0L1-L1 fileciteturn49file0L1-L1 fileciteturn24file0L1-L1 fileciteturn27file0L1-L1