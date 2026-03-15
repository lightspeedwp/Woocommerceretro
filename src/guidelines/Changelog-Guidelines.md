---
title: "Changelog Standards"
description: "Defines the format, versioning rules, and update workflow for the project changelog (CHANGELOG.md), following Keep a Changelog and Semantic Versioning 2.0.0."
version: "1.0.0"
created: "2026-03-15"
updated: "2026-03-15"
owner: "DevOps Architecture Team"
scope: "The root /CHANGELOG.md file and all version-related documentation"
ai_context: "This file defines HOW to write and maintain the project changelog. Use these rules when generating changelog entries, bumping versions, or reviewing pull requests that modify CHANGELOG.md."
depends_on:
  - "/guidelines/Core-Repository-Guidelines.md"
---

# Changelog Standards

This document defines the authoritative rules for writing, formatting, and maintaining the project changelog at `/CHANGELOG.md`. Every version release, bug fix, and feature addition must be recorded in the changelog following these standards.

## Format Requirement

The changelog must follow the [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) specification. Keep a Changelog is a convention that makes changelogs readable by both humans and automated tools.

### Core Principles

1. **Changelogs are for humans.** Write entries in clear, concise language that a developer unfamiliar with the codebase can understand.
2. **Every version gets its own section.** Each release occupies a dedicated H2 heading with the version number and release date.
3. **Group changes by type.** Entries within a version are organized under H3 headings by change category.
4. **Latest version first.** The most recent version appears at the top of the file, immediately below the `[Unreleased]` section.
5. **Dates use ISO 8601.** All dates follow the `YYYY-MM-DD` format (e.g., `2026-03-15`).

## Semantic Versioning

The project follows [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) (SemVer). Every version number uses the `MAJOR.MINOR.PATCH` format.

### Version Number Components

| Component | When to Increment | Example |
|---|---|---|
| **MAJOR** | The release contains incompatible API changes. Consumers of the API must modify their code to upgrade. | `1.0.0` to `2.0.0`: A context provider's function signature changes from `addToCart(id)` to `addToCart(id, options)` where `options` is required. |
| **MINOR** | The release adds new functionality in a backwards-compatible manner. Existing consumers do not need to modify their code. | `2.0.0` to `2.1.0`: A new `PageEventsRetro` template and `/events` route are added without modifying existing templates or routes. |
| **PATCH** | The release contains backwards-compatible bug fixes. No new functionality is added. | `2.1.0` to `2.1.1`: A broken link in the sitemap is corrected, or a CSS class typo is fixed. |

### Pre-Release and Build Metadata

SemVer supports pre-release identifiers and build metadata appended to the version number:

- **Pre-release:** `2.2.0-beta.1` indicates a pre-release version. Pre-release versions have lower precedence than the associated release version.
- **Build metadata:** `2.2.0+build.42` includes build information. Build metadata does not affect version precedence.

### Version Precedence Rules

Version precedence determines which version is newer. Precedence is calculated by comparing MAJOR, MINOR, and PATCH components from left to right:

1. `1.0.0` < `2.0.0` (MAJOR difference)
2. `2.0.0` < `2.1.0` (MINOR difference)
3. `2.1.0` < `2.1.1` (PATCH difference)
4. `2.1.1-alpha` < `2.1.1-beta` < `2.1.1` (pre-release precedence)

## Change Categories

Every changelog entry must be placed under one of the following H3 category headings. Use only these six categories. Do not invent new category names.

### Category Definitions

| Category | H3 Heading | When to Use | Example Entry |
|---|---|---|---|
| **Added** | `### Added` | New features, new components, new routes, new data files. | `- Add PageEventsRetro template and /events route.` |
| **Changed** | `### Changed` | Modifications to existing functionality that do not break backwards compatibility. | `- Update FooterRetro to show only Contact, FAQ, and About links.` |
| **Deprecated** | `### Deprecated` | Features that will be removed in a future MAJOR release. Include the planned removal version. | `- Deprecate /src/styles/globals.css in favor of /styles/globals.css. Removal planned for v3.0.0.` |
| **Removed** | `### Removed` | Features removed in this release. Removal of non-deprecated features requires a MAJOR version bump. | `- Remove Tailwind CSS dependency from package.json.` |
| **Fixed** | `### Fixed` | Bug fixes, typo corrections, broken link repairs. | `- Fix sitemap links falling through to 404 by registering all routes in routes.minimal.ts.` |
| **Security** | `### Security` | Vulnerability patches, dependency updates for security reasons, authentication fixes. | `- Update dependency X to v2.3.1 to patch CVE-2026-XXXX.` |

### Category Ordering

Within each version section, list categories in the following order:

1. `### Added`
2. `### Changed`
3. `### Deprecated`
4. `### Removed`
5. `### Fixed`
6. `### Security`

Omit categories that have no entries for a given version. Do not include empty category headings.

## Changelog File Structure

The `/CHANGELOG.md` file must follow this exact structure:

```markdown
# Changelog

All notable changes to the PlayPocket project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add PageEventsRetro template and /events route.

### Fixed

- Fix broken anchor link in /guidelines/Core-Repository-Guidelines.md.

## [2.13.0] - 2026-03-15

### Added

- Add RetroDemoIndex template at /retro-demo/ with demo hub cards.
- Add RetroDemoLandingPage template at /retro-demo/landing-page/ with 15+ patterns.
- Add /src/app/data/retroDemo.ts with 10 exported data constants.
- Add "Retro Demo Pages" section to Sitemap component (17th section).

### Changed

- Expand routes.minimal.ts from 4 routes to 120+ routes.
- Update DevToolsIndex stats bar: CSS imports corrected to 280, version bumped to v2.13.

### Fixed

- Fix sitemap and header navigation links falling through to 404.

## [2.12.0] - 2026-03-13

### Fixed

- Resolve IframeMessageAbortError caused by 280 CSS @import statements.
- Fix QuickView Rules of Hooks violation by moving useVariantSelection to top level.

### Changed

- Consolidate 16 Google Fonts injections into single RootLayout useEffect.

### Removed

- Delete 56 stale report files from January and February 2026.
```

## Entry Writing Standards

Each changelog entry is a single bullet point under a category heading. Follow these rules when writing entries.

### Rule 1: Start with an Imperative Verb

Begin every entry with an imperative verb (e.g., Add, Fix, Update, Remove, Deprecate). Do not use past tense.

```markdown
<!-- CORRECT -->
- Add PageEventsRetro template and /events route.
- Fix broken sitemap links by registering all routes.

<!-- INCORRECT -->
- Added PageEventsRetro template.
- Sitemap links were fixed.
```

### Rule 2: Reference Specific Files and Routes

Include the file path or route path affected by the change. Use absolute paths from the repository root.

```markdown
<!-- CORRECT -->
- Fix route mismatch in /routes.minimal.ts for /about/our-story path.
- Add CSS styles for .retro-sitemap__hero to /src/styles/sections/sitemap-retro.css.

<!-- INCORRECT -->
- Fix route mismatch.
- Add CSS styles for the sitemap hero.
```

### Rule 3: One Change Per Entry

Each bullet point must describe a single, atomic change. Do not combine multiple changes into one entry.

```markdown
<!-- CORRECT -->
- Add PageContactRetro template at /src/app/components/templates/PageContactRetro.tsx.
- Add /contact route to /routes.minimal.ts.

<!-- INCORRECT -->
- Add PageContactRetro template and route.
```

### Rule 4: No Issue or PR Numbers in Entry Text

Place issue and pull request references in a link at the end of the entry, not inline.

```markdown
<!-- CORRECT -->
- Fix cart total calculation rounding error. ([#142](https://github.com/org/repo/issues/142))

<!-- INCORRECT -->
- Fix #142: cart total calculation rounding error.
```

## Update Workflow

The changelog update process follows a two-phase workflow: staging and releasing.

### Phase 1: Staging (During Development)

Every pull request or commit that introduces a notable change must add an entry to the `[Unreleased]` section of `/CHANGELOG.md`.

1. Open `/CHANGELOG.md`.
2. Locate the `## [Unreleased]` section. If the section does not exist, create the section immediately below the file header.
3. Determine the correct category for the change (`Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, or `Security`).
4. Add the category H3 heading if the category does not yet exist under `[Unreleased]`.
5. Add the entry as a bullet point under the correct category heading.
6. Commit the changelog update alongside the code change.

### Phase 2: Releasing (On Version Bump)

When the team decides to cut a release, the `[Unreleased]` section is converted into a versioned section.

1. Determine the new version number using [Semantic Versioning](#semantic-versioning) rules:
   - Any `Removed` entry (breaking) or incompatible `Changed` entry requires a MAJOR bump.
   - Any `Added` entry requires at least a MINOR bump.
   - Only `Fixed` entries require a PATCH bump.
2. Replace the `## [Unreleased]` heading with the new version heading: `## [X.Y.Z] - YYYY-MM-DD`.
3. Add a new empty `## [Unreleased]` section above the newly created version section.
4. Verify that categories within the new version section are ordered correctly (Added, Changed, Deprecated, Removed, Fixed, Security).
5. Remove any empty category headings.
6. Add a comparison link at the bottom of the file (see [Comparison Links](#comparison-links)).
7. Commit with the message: `chore: release vX.Y.Z`.

### AI Agent Workflow

When an AI agent (e.g., Copilot, Cursor) generates code changes, the AI agent must also generate the corresponding changelog entry. The AI agent must:

1. Identify the change category based on the code modification.
2. Write the entry following the [Entry Writing Standards](#entry-writing-standards).
3. Place the entry under the `## [Unreleased]` section.
4. Never create a new version section. Version sections are created only during the [Release Phase](#phase-2-releasing-on-version-bump).

## Comparison Links

At the bottom of `/CHANGELOG.md`, include comparison links that allow readers to view the diff between versions on the repository hosting platform.

```markdown
[Unreleased]: https://github.com/org/repo/compare/v2.13.0...HEAD
[2.13.0]: https://github.com/org/repo/compare/v2.12.0...v2.13.0
[2.12.0]: https://github.com/org/repo/compare/v2.11.0...v2.12.0
```

## Validation Checklist

Before committing changes to `/CHANGELOG.md`, verify:

- [ ] The `## [Unreleased]` section exists at the top.
- [ ] New entries are placed under `[Unreleased]`, not under a versioned section.
- [ ] Each entry starts with an imperative verb.
- [ ] Each entry references the specific file path or route affected.
- [ ] Each entry describes a single atomic change.
- [ ] Categories are ordered: Added, Changed, Deprecated, Removed, Fixed, Security.
- [ ] Empty category headings are removed.
- [ ] Dates use ISO 8601 format (`YYYY-MM-DD`).
- [ ] Version numbers follow SemVer `MAJOR.MINOR.PATCH` format.
- [ ] Comparison links at the bottom of the file are updated.
