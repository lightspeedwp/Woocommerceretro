---
title: "Core Repository Guidelines"
description: "Single source of truth for documentation standards, Markdown hierarchy, semantic clarity, and AI-agent readability across the PlayPocket repository."
version: "1.0.0"
created: "2026-03-15"
updated: "2026-03-15"
owner: "DevOps Architecture Team"
scope: "All repository documentation, guidelines, reports, and READMEs"
ai_context: "This file defines HOW to write documentation in this repository. For project-specific technical standards (CSS architecture, component structure, routing, design tokens), see /guidelines/Guidelines.md."
---

# Core Repository Guidelines

This document is the authoritative reference for all documentation standards in the PlayPocket repository. Every contributor, automation script, and AI agent must follow these rules when creating or modifying documentation files.

## Purpose and Scope

These guidelines govern the structure, language, and metadata of every Markdown file in the repository. The goals are:

- **Human readability**: Engineers can scan, search, and understand documents quickly.
- **AI-agent comprehension**: Tools such as GitHub Copilot, Cursor, and custom LLM pipelines can parse individual file sections ("chunks") without requiring full repository context.
- **Consistency**: Every document follows the same hierarchy, voice, and formatting conventions.

### Relationship to Other Guidelines

| Guideline File | Governs |
|---|---|
| `/guidelines/Guidelines.md` | Project-specific technical standards (CSS, components, routing, architecture) |
| `/guidelines/Core-Repository-Guidelines.md` | Documentation format, Markdown hierarchy, AI readability (this file) |
| `/guidelines/Changelog-Guidelines.md` | Changelog format and versioning standards |
| `/guidelines/Readme-Guidelines.md` | README structure and contextual independence |
| `/guidelines/WRITING_GUIDELINES.md` | Prose style for component and process guidelines |

## Glossary

Define ambiguous terms explicitly. Every document that introduces domain-specific vocabulary must include a glossary section or inline definitions.

| Term | Definition |
|---|---|
| **Block** | A WordPress Gutenberg block mapped to a React component (e.g., `ProductCard`, `SearchInput`). |
| **Pattern** | A reusable page section composed of multiple blocks (e.g., `HeroRetro`, `ProductGrid`). |
| **Part** | A global template region rendered on every page (e.g., `HeaderRetro`, `FooterRetro`). |
| **Template** | A full-page layout component mapped to a route (e.g., `FrontPageRetro`, `PageCartRetro`). |
| **Token** | A CSS custom property following WordPress `--wp--preset--*` naming (e.g., `--wp--preset--color--primary`). |
| **Chunk** | A self-contained section of a Markdown file that an AI agent can reason over independently. |
| **SemVer** | Semantic Versioning 2.0.0, the `MAJOR.MINOR.PATCH` version numbering system. |
| **FSE** | Full Site Editing, the WordPress block-based theme architecture. |
| **BEM** | Block Element Modifier, the CSS class naming convention used in this project. |
| **WCAG** | Web Content Accessibility Guidelines, the accessibility compliance standard (target: AA 2.2). |

## Markdown Hierarchy Rules

Every Markdown file must follow a strict heading hierarchy to prevent AI chunking errors, where a model misattributes content to the wrong section.

### Rule 1: Single H1 Per File

Every file must contain exactly one `# H1` heading. The H1 heading is the document title. Place the H1 heading immediately after the YAML front matter block (if present) or at the top of the file.

```markdown
# Document Title    <-- Exactly one H1
```

### Rule 2: Sequential Heading Levels

Never skip heading levels. An H3 must appear inside an H2. An H4 must appear inside an H3. Skipping levels (e.g., jumping from H2 to H4) breaks the document outline and causes AI agents to misinterpret section boundaries.

```markdown
<!-- CORRECT -->
## Section
### Subsection
#### Detail

<!-- INCORRECT - skips H3 -->
## Section
#### Detail
```

### Rule 3: Heading Depth Limit

Do not use headings deeper than H4 (`####`). If content requires further nesting, use bold text or definition lists instead of H5 or H6 headings.

```markdown
#### Deepest Allowed Heading

**Sub-point A**: Description of the sub-point.

**Sub-point B**: Description of the sub-point.
```

### Rule 4: Descriptive Heading Text

Headings must describe the content of their section, not the action the reader should take. Headings must not duplicate the parent heading text.

```markdown
<!-- CORRECT -->
## Authentication Flow
### Token Refresh Mechanism

<!-- INCORRECT - action-oriented, vague -->
## How to Do It
### More Details
```

## YAML Front Matter

Every guideline file, report, and standards document must begin with a YAML front matter block. YAML front matter enables AI agents to classify and filter documents without parsing the full Markdown body.

### Required Fields

```yaml
---
title: "Human-readable document title"
description: "One-sentence summary of the document's purpose and scope"
version: "SemVer version of this document (e.g., 1.0.0)"
created: "ISO 8601 date (YYYY-MM-DD)"
updated: "ISO 8601 date (YYYY-MM-DD)"
owner: "Team or individual responsible for maintenance"
---
```

### Optional Fields

```yaml
---
scope: "What this document covers (e.g., 'All React components')"
ai_context: "One-sentence instruction for AI agents explaining how to use this file"
tags: ["css", "architecture", "wcag"]
status: "draft | active | deprecated"
depends_on:
  - "/guidelines/Guidelines.md"
  - "/guidelines/design-tokens/Colors.md"
---
```

### AI Context Field

The `ai_context` field provides a one-sentence directive that tells AI agents how to interpret the document. Write the `ai_context` value as if instructing a junior engineer who has never seen the repository.

```yaml
ai_context: "This file defines the color token system. Use these token names (not raw hex values) when generating CSS or React components."
```

## Self-Contained Sections

Every H2 section must be understandable without reading the rest of the document. This rule ensures AI agents can reason over individual chunks extracted from a file.

### Rules for Self-Contained Sections

1. **Define terms on first use.** Do not assume the reader has read previous sections. If a term was defined in the Glossary, repeat a brief inline definition on first use within each H2 section.
2. **Include context sentences.** Start each H2 section with one or two sentences that explain what the section covers and why the reader needs the information.
3. **Avoid forward references.** Do not write "as described in the next section." Instead, write "as described in the [Section Name](#section-name) section below" with an explicit anchor link.
4. **Avoid backward references without links.** Do not write "as mentioned earlier." Instead, write "as defined in the [Glossary](#glossary) section" with an explicit anchor link.

### Example: Self-Contained Section

```markdown
## Error Handling Standards

Error handling governs how the application reports, logs, and recovers from
runtime failures. These standards apply to all React components and utility
functions in the `/src/app/` directory.

A "boundary error" is an unhandled exception caught by a React ErrorBoundary
component. Boundary errors trigger the fallback UI defined in
`/src/app/components/common/ErrorBoundary.tsx`.

### Component-Level Errors

Components must catch errors using try-catch blocks in event handlers...
```

## Semantic Clarity Rules

Clear, unambiguous language reduces misinterpretation by both humans and AI agents.

### Rule 1: Active Voice

Write in active voice. Active voice makes the actor and the action explicit.

```markdown
<!-- CORRECT - active voice -->
The CartContext provider manages cart state.
The developer must add the route to routes.minimal.ts.

<!-- INCORRECT - passive voice -->
Cart state is managed by the CartContext provider.
The route should be added to routes.minimal.ts.
```

### Rule 2: Eliminate Vague Pronouns

Replace vague pronouns (`it`, `this`, `that`, `they`) with the specific noun the pronoun refers to. Vague pronouns cause AI agents to resolve references incorrectly.

```markdown
<!-- CORRECT -->
The API key must be stored in an environment variable. The API key must never
appear in client-side code.

<!-- INCORRECT -->
The API key must be stored in an environment variable. It must never appear
in client-side code.
```

### Rule 3: One Instruction Per Sentence

Each sentence must convey a single instruction or fact. Compound sentences with multiple instructions cause AI agents to miss the second instruction.

```markdown
<!-- CORRECT -->
Add the new route to routes.minimal.ts.
Import the template component using React.lazy.

<!-- INCORRECT -->
Add the new route to routes.minimal.ts and import the template component
using React.lazy.
```

### Rule 4: Explicit File Paths

Always use absolute paths from the repository root when referencing files. Never use relative descriptions such as "the config file" or "the styles folder."

```markdown
<!-- CORRECT -->
Add the CSS class to /styles/globals.css.
The component is located at /src/app/components/templates/PageAboutRetro.tsx.

<!-- INCORRECT -->
Add the CSS class to the global stylesheet.
The component is in the templates folder.
```

## Code Block Standards

Code blocks must include a language identifier and, when the code represents a file, a comment indicating the file path.

### Format

````markdown
```tsx
// File: /src/app/components/templates/PageAboutRetro.tsx
export const PageAboutRetro = () => {
  return <main className="retro-main">About Page</main>;
};
```
````

### Rules

1. **Language identifier required.** Every fenced code block must specify the language: `tsx`, `css`, `bash`, `json`, `yaml`, or `markdown`.
2. **File path comment.** If the code block represents the contents of a specific file, include a `// File:` comment on the first line.
3. **Runnable examples.** Code examples must be syntactically valid. Do not use pseudo-code or incomplete snippets unless explicitly marked with a `// pseudo-code` comment.
4. **No screenshots of code.** Never embed code as an image. Always use fenced code blocks.

## Table Standards

Tables organize structured data. Follow these rules to ensure AI agents can parse table contents correctly.

### Rules

1. **Header row required.** Every table must have a header row with descriptive column names.
2. **Alignment row required.** Include the Markdown alignment row (`|---|---|`) immediately after the header row.
3. **No merged cells.** Markdown does not support merged cells. Use separate rows instead.
4. **Cell content limit.** Keep cell content under 80 characters. For longer content, use a footnote or a linked section.
5. **No empty cells.** Use `N/A` or `-` for cells with no applicable value.

## Link and Cross-Reference Standards

Internal links enable navigation and help AI agents build a dependency graph of the documentation.

### Rules

1. **Use relative paths.** Link to other files using repository-relative paths: `[Changelog Standards](./Changelog-Guidelines.md)`.
2. **Use anchor links for sections.** Link to specific sections using the auto-generated anchor: `[Glossary](#glossary)`.
3. **Descriptive link text.** Never use "click here" or "this link" as link text. Use the title or description of the target document.
4. **Verify links on commit.** Before committing documentation changes, verify that all internal links resolve to existing files and anchors.

```markdown
<!-- CORRECT -->
See the [Changelog Standards](./Changelog-Guidelines.md) for versioning rules.
See the [Glossary](#glossary) section for term definitions.

<!-- INCORRECT -->
See [here](./Changelog-Guidelines.md) for more info.
Click [this link](#glossary).
```

## File Organization Rules

All documentation files must reside in designated directories. These rules align with the project structure defined in `/guidelines/Guidelines.md`.

### Documentation File Locations

| File Type | Directory | Naming Convention | Example |
|---|---|---|---|
| Project guidelines | `/guidelines/` | `PascalCase.md` or `SCREAMING_SNAKE.md` | `Guidelines.md`, `WRITING_GUIDELINES.md` |
| Design tokens | `/guidelines/design-tokens/` | `PascalCase.md` | `Colors.md`, `Typography.md` |
| Component guidelines | `/guidelines/blocks/`, `/guidelines/patterns/`, `/guidelines/parts/` | `PascalCase.md` | `ProductCard.md`, `Hero.md` |
| Reports | `/reports/` | `YYYY-MM-DD_description.md` | `2026-03-15_route-fix-report.md` |
| Task lists | `/tasks/` | `kebab-case.md` | `task-list.md` |
| Prompts | `/prompts/` | `kebab-case.md` | `cleanup.md` |

### Forbidden Locations

Documentation files must never be placed in:

- The repository root (`/`) except for `README.md` and `CHANGELOG.md`.
- Inside `/src/` directories (source code only).
- Inside `/node_modules/` or build output directories.

## Validation Checklist

Before committing any documentation file, verify the following:

- [ ] File begins with YAML front matter (for guideline/report files).
- [ ] File contains exactly one H1 heading.
- [ ] Heading levels are sequential (no skipped levels).
- [ ] No heading deeper than H4.
- [ ] All code blocks have a language identifier.
- [ ] All tables have a header row and alignment row.
- [ ] All internal links resolve to existing files or anchors.
- [ ] No vague pronouns (`it`, `this`, `that`) without an explicit antecedent within the same sentence.
- [ ] Active voice used throughout.
- [ ] File is saved in the correct directory per the [File Organization Rules](#file-organization-rules).
- [ ] Glossary terms are defined on first use within each H2 section.
