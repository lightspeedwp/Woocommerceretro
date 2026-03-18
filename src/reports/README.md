# Reports directory

**Purpose:** Centralized location for all project reports, organized by category.
**Last updated:** March 17, 2026

---

## Directory structure

```
/reports/
├── README.md              # This file
├── accessibility/         # WCAG audits, a11y testing reports
├── audits/                # Multi-domain audit reports
├── archive/               # Archived/superseded reports
├── bem/                   # BEM compliance audits
├── css/                   # CSS architecture audits
├── css-optimization/      # CSS performance reports
├── css-stability/         # CSS stability testing
├── development/           # Development standards audits
├── documentation/         # Documentation audits, coverage reports
├── fixes/                 # Fix implementation reports
├── maintenance/           # Cleanup and maintenance reports
├── migration/             # Migration reports (Phosphor, Tailwind→WP)
├── optimization/          # Performance optimization reports
├── sessions/              # Session summary reports
├── tokens/                # Design token audits
└── verification/          # Verification and validation reports
```

---

## Naming convention

All reports follow this format:

```
YYYY-MM-DD_report-type_brief-description.md
```

### Examples

```
2026-03-16_design-token-audit.md
2026-03-15_css-architecture-audit.md
2026-03-11_phosphor-migration-complete.md
```

---

## Category descriptions

| Category | Purpose |
|----------|---------|
| `accessibility/` | WCAG 2.1 AA/AAA compliance audits, contrast checks, keyboard nav |
| `audits/` | Multi-domain audit reports (9-domain sweeps) |
| `bem/` | BEM naming convention compliance |
| `css/` | CSS architecture health, hardcoded values, organization |
| `css-optimization/` | CSS performance, memory, file size |
| `css-stability/` | CSS re-enable testing, import chain validation |
| `development/` | React/TypeScript coding standards |
| `documentation/` | Guideline freshness, coverage, quality |
| `fixes/` | Implementation reports for specific fixes |
| `maintenance/` | Cleanup sessions, file organization |
| `migration/` | Tailwind→WordPress, Lucide→Phosphor migrations |
| `optimization/` | General performance optimization |
| `sessions/` | Development session summaries |
| `tokens/` | Design token consistency, naming, values |
| `verification/` | Post-fix verification and validation |

---

## Guidelines

For complete reporting guidelines, see:
- [REPORTING_GUIDELINES.md](/guidelines/REPORTING_GUIDELINES.md) — Full guidelines document

### Quick reference

**Do:**
- Start filenames with date (`YYYY-MM-DD_`)
- Use lowercase and hyphens
- Place in correct category folder
- Follow template structure
- Use Markdown format (`.md`)

**Do not:**
- Store reports in root directory
- Use uppercase in filenames
- Omit dates from filenames
- Create ad-hoc category folders

---

## Archive policy

Reports older than 30 days are moved to `/reports/archive/`. Active reports are retained in their category folders.

---

**Last updated:** March 17, 2026
