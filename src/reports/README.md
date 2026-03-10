# Reports Directory

**Purpose:** Centralized location for all project reports, organized by category.

---

## 📁 Directory Structure

```
/reports/
├── README.md              # This file
├── releases/              # Release notes and version announcements
├── architecture/          # Architecture audits, refactoring reports
├── testing/               # Test results, coverage reports, QA findings
├── performance/           # Performance audits, optimization reports
├── accessibility/         # WCAG audits, a11y testing reports
├── documentation/         # Documentation audits, coverage reports
├── components/            # Component-specific reports and audits
├── migration/             # Migration reports and status updates
├── compliance/            # Standards compliance, guideline adherence
└── planning/              # Project planning, roadmaps, proposals
```

---

## 🏷️ Naming Convention

All reports follow this format:
```
YYYY-MM-DD_report-type_brief-description.md
```

### Examples:
```
2026-01-09_release-notes_v2.4.0.md
2026-01-09_architecture-audit_component-compliance.md
2026-01-08_test-results_jest-coverage-92-percent.md
```

---

## 📂 Category Descriptions

### **Releases** (`/releases/`)
Version announcements, release notes, and changelog details.

**Current Reports:**
- `2026-01-09_release-notes_v2.4.0.md` - Version 2.4.0 release documentation

---

### **Architecture** (`/architecture/`)
Architecture audits, refactoring plans, FSE compliance checks.

**Purpose:**
- Document architectural decisions
- Track refactoring progress
- Monitor WordPress FSE alignment
- Assess component structure compliance

---

### **Testing** (`/testing/`)
Test results, coverage reports, QA findings.

**Purpose:**
- Jest test results and coverage reports
- Integration test findings
- E2E test results
- Quality assurance reports

---

### **Performance** (`/performance/`)
Performance audits, optimization results, benchmarks.

**Purpose:**
- Lighthouse audit scores
- Bundle size analysis
- Page load time benchmarks
- Optimization impact reports

---

### **Accessibility** (`/accessibility/`)
WCAG audits, accessibility testing, a11y compliance.

**Purpose:**
- WCAG 2.1 AA/AAA compliance audits
- Screen reader testing results
- Keyboard navigation assessments
- Color contrast checks

---

### **Documentation** (`/documentation/`)
Documentation audits, coverage reports, JSDoc analysis.

**Purpose:**
- JSDoc coverage reports
- Component documentation audits
- Guidelines compliance checks
- README quality assessments

---

### **Components** (`/components/`)
Component-specific audits, refactoring reports.

**Purpose:**
- Individual component quality checks
- Props interface audits
- Component compliance reports
- Refactoring documentation

---

### **Migration** (`/migration/`)
Migration status, refactoring progress, consolidation reports.

**Purpose:**
- Stylesheet migration status
- File structure consolidation
- Tailwind to WordPress CSS migration
- TypeScript migration progress

---

### **Compliance** (`/compliance/`)
Standards compliance, guideline adherence, quality metrics.

**Purpose:**
- Guideline adherence checks
- WordPress standards compliance
- WooCommerce block compatibility
- Quality scoring reports

---

### **Planning** (`/planning/`)
Project planning, roadmaps, proposals, sprint plans.

**Purpose:**
- Feature roadmaps
- Sprint planning documents
- Technical proposals
- Project milestones

---

## 📖 Guidelines

For complete reporting guidelines, see:
- [REPORTING_GUIDELINES.md](../REPORTING_GUIDELINES.md) - Full guidelines document

### Quick Reference:

**✅ DO:**
- Start filenames with date (`YYYY-MM-DD_`)
- Use lowercase and hyphens
- Place in correct category folder
- Follow template structure
- Use Markdown format (`.md`)

**❌ DO NOT:**
- Store reports in root directory
- Use uppercase in filenames
- Omit dates from filenames
- Use spaces in filenames
- Create ad-hoc locations

---

## 📊 Current Status

### **Reports by Category**

| Category | Count | Latest Report |
|----------|-------|---------------|
| Releases | 1 | 2026-01-09_release-notes_v2.4.0.md |
| Architecture | 0 | - |
| Testing | 0 | - |
| Performance | 0 | - |
| Accessibility | 0 | - |
| Documentation | 0 | - |
| Components | 0 | - |
| Migration | 0 | - |
| Compliance | 0 | - |
| Planning | 0 | - |

**Total Reports:** 1

---

## 🗂️ Archive Policy

After reports reach their retention period, they are moved to:
```
/reports/[category]/archive/YYYY/
```

Example:
```
/reports/testing/archive/2025/2025-12-15_test-results_cart-tests.md
```

---

## 📞 Questions?

If you're unsure about where to place a report or how to name it, refer to:
- [REPORTING_GUIDELINES.md](../REPORTING_GUIDELINES.md) - Complete guidelines
- [Guidelines.md](../Guidelines.md) - Project guidelines

---

**Last Updated:** January 9, 2026  
**Maintained By:** Project Team
