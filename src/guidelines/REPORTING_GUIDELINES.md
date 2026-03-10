# Reporting Guidelines

**Type:** Process  
**Status:** Complete  
**Version:** 1.0  
**Last Updated:** January 9, 2026  
**Purpose:** Standardize report creation, naming, and organization for the WooCommerce Prototype project.

---

## 📋 Overview

All project reports must follow standardized naming conventions and be organized in the `/reports/` directory with 10 category subfolders. This ensures consistent organization, discoverability, and maintainability of project documentation.

---

## 📁 Report Folder Structure

All reports must be stored in the `/reports/` directory with the following structure:

```
/reports/
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

## 🏷️ Naming Conventions

### **Standard Format**

All reports must follow this naming convention:

```
YYYY-MM-DD_report-type_brief-description.md
```

**Components:**
1. **Date (Required):** `YYYY-MM-DD` format (e.g., `2026-01-09`)
2. **Report Type (Required):** Lowercase, hyphenated (e.g., `release-notes`, `audit-report`, `test-results`)
3. **Brief Description (Required):** Concise, hyphenated description (e.g., `v2.4.0`, `component-compliance`, `wcag-aa`)

### **Examples**

#### ✅ CORRECT:
```
2026-01-09_release-notes_v2.4.0.md
2026-01-09_architecture-audit_component-compliance.md
2026-01-08_test-results_jest-coverage-92-percent.md
2026-01-07_performance-report_lighthouse-scores.md
2026-01-06_accessibility-audit_wcag-2.1-aa.md
2026-01-05_migration-status_wordpress-css-complete.md
```

#### ❌ INCORRECT:
```
report.md                           # Missing date
v2.4.0.md                          # Missing date and type
RELEASE_NOTES_v2.4.0.md            # Wrong format (uppercase, no date)
2026-01-09-release-notes.md        # Wrong separator (- instead of _)
01-09-2026_release-notes.md        # Wrong date format (MM-DD-YYYY)
```

---

## 📂 Report Categories & File Locations

### **1. Release Notes**
**Location:** `/reports/releases/`  
**Purpose:** Version announcements, release documentation, changelog details  
**Naming:** `YYYY-MM-DD_release-notes_vX.X.X.md`

**Examples:**
```
/reports/releases/2026-01-09_release-notes_v2.4.0.md
/reports/releases/2025-12-25_release-notes_v2.3.0.md
/reports/releases/2025-12-20_release-notes_v2.2.0.md
```

---

### **2. Architecture Reports**
**Location:** `/reports/architecture/`  
**Purpose:** Architecture audits, refactoring plans, compliance checks  
**Naming:** `YYYY-MM-DD_architecture-audit_description.md`

**Examples:**
```
/reports/architecture/2026-01-09_architecture-audit_component-compliance.md
/reports/architecture/2026-01-08_refactoring-plan_template-consolidation.md
/reports/architecture/2026-01-07_compliance-check_fse-alignment.md
```

---

### **3. Testing Reports**
**Location:** `/reports/testing/`  
**Purpose:** Test results, coverage reports, QA findings  
**Naming:** `YYYY-MM-DD_test-results_description.md`

**Examples:**
```
/reports/testing/2026-01-09_test-results_jest-coverage-92-percent.md
/reports/testing/2026-01-08_qa-report_checkout-flow-validation.md
/reports/testing/2026-01-07_integration-tests_cart-functionality.md
```

---

### **4. Performance Reports**
**Location:** `/reports/performance/`  
**Purpose:** Performance audits, optimization results, benchmarks  
**Naming:** `YYYY-MM-DD_performance-report_description.md`

**Examples:**
```
/reports/performance/2026-01-09_performance-report_lighthouse-scores.md
/reports/performance/2026-01-08_optimization-results_bundle-size-reduction.md
/reports/performance/2026-01-07_benchmark_page-load-times.md
```

---

### **5. Accessibility Reports**
**Location:** `/reports/accessibility/`  
**Purpose:** WCAG audits, accessibility testing, a11y compliance  
**Naming:** `YYYY-MM-DD_accessibility-audit_description.md`

**Examples:**
```
/reports/accessibility/2026-01-09_accessibility-audit_wcag-2.1-aa.md
/reports/accessibility/2026-01-08_screen-reader-test_nvda-jaws.md
/reports/accessibility/2026-01-07_keyboard-navigation_tab-order-audit.md
```

---

### **6. Documentation Reports**
**Location:** `/reports/documentation/`  
**Purpose:** Documentation audits, coverage reports, JSDoc analysis  
**Naming:** `YYYY-MM-DD_documentation-audit_description.md`

**Examples:**
```
/reports/documentation/2026-01-09_documentation-audit_jsdoc-coverage.md
/reports/documentation/2026-01-08_coverage-report_component-guidelines.md
/reports/documentation/2026-01-07_quality-check_readme-updates.md
```

---

### **7. Component Reports**
**Location:** `/reports/components/`  
**Purpose:** Component-specific audits, refactoring reports, compliance  
**Naming:** `YYYY-MM-DD_component-audit_description.md`

**Examples:**
```
/reports/components/2026-01-09_component-audit_product-card-compliance.md
/reports/components/2026-01-08_refactoring_button-variants-consolidation.md
/reports/components/2026-01-07_quality-check_ui-component-audit.md
```

---

### **8. Migration Reports**
**Location:** `/reports/migration/`  
**Purpose:** Migration status, refactoring progress, consolidation reports  
**Naming:** `YYYY-MM-DD_migration-status_description.md`

**Examples:**
```
/reports/migration/2026-01-09_migration-status_wordpress-css-complete.md
/reports/migration/2026-01-08_progress-report_src-folder-migration.md
/reports/migration/2026-01-07_consolidation_tailwind-to-wordpress-css.md
```

---

### **9. Compliance Reports**
**Location:** `/reports/compliance/`  
**Purpose:** Standards compliance, guideline adherence, quality metrics  
**Naming:** `YYYY-MM-DD_compliance-check_description.md`

**Examples:**
```
/reports/compliance/2026-01-09_compliance-check_guideline-adherence.md
/reports/compliance/2026-01-08_standards-audit_wordpress-fse-alignment.md
/reports/compliance/2026-01-07_quality-metrics_component-scoring.md
```

---

### **10. Planning Reports**
**Location:** `/reports/planning/`  
**Purpose:** Project planning, roadmaps, proposals, sprint plans  
**Naming:** `YYYY-MM-DD_plan_description.md`

**Examples:**
```
/reports/planning/2026-01-09_roadmap_q1-2026-features.md
/reports/planning/2026-01-08_proposal_dark-mode-enhancement.md
/reports/planning/2026-01-07_sprint-plan_week-02-objectives.md
```

---

## 📝 Report Template

Use this template for all reports:

```markdown
# [Report Type]: [Brief Description]

**Date:** YYYY-MM-DD  
**Author:** [Name/Role]  
**Version:** [Project Version if applicable]  
**Category:** [Report Category]

---

## 📋 Executive Summary

[2-3 sentence overview of the report's purpose and key findings]

---

## 🎯 Objectives

- [Primary objective]
- [Secondary objective]
- [Additional objectives]

---

## 📊 Findings

### [Finding Category 1]
[Detailed findings with metrics, examples, or evidence]

### [Finding Category 2]
[Detailed findings with metrics, examples, or evidence]

---

## ✅ Achievements

- ✅ [Achievement 1]
- ✅ [Achievement 2]
- ✅ [Achievement 3]

---

## ⚠️ Issues & Concerns

- ⚠️ [Issue 1]
- ⚠️ [Issue 2]

---

## 📈 Metrics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| [Metric 1] | X | Y | +Z% |
| [Metric 2] | X | Y | +Z% |

---

## 🔄 Recommendations

1. **[Recommendation 1]** - [Brief explanation]
2. **[Recommendation 2]** - [Brief explanation]
3. **[Recommendation 3]** - [Brief explanation]

---

## 📅 Next Steps

- [ ] [Action item 1]
- [ ] [Action item 2]
- [ ] [Action item 3]

---

## 📎 References

- [Related document 1]
- [Related document 2]
- [External resource]

---

**Report Status:** ✅ Complete | 🔄 In Progress | ⏸️ On Hold
```

---

## 🚫 Prohibited Practices

### ❌ DO NOT:
1. **Store reports in root directory** (e.g., `/REPORT_NAME.md`)
2. **Use uppercase in filenames** (e.g., `RELEASE_NOTES.md`)
3. **Omit dates from filenames** (e.g., `audit-report.md`)
4. **Use wrong date format** (e.g., `01-09-2026` instead of `2026-01-09`)
5. **Use spaces in filenames** (e.g., `2026 01 09 report.md`)
6. **Create ad-hoc report locations** (always use `/reports/` structure)

### ✅ DO:
1. **Always use `/reports/` directory structure**
2. **Start filename with date** (`YYYY-MM-DD_`)
3. **Use lowercase and hyphens** (`test-results`, not `Test_Results`)
4. **Place in correct category folder** (e.g., releases, testing, architecture)
5. **Follow naming convention exactly** (`YYYY-MM-DD_type_description.md`)
6. **Use Markdown format** (`.md` extension)

---

## 🗂️ Legacy Reports

### **Migration Process**

If you encounter legacy reports in incorrect locations:

1. **Identify the report type** (release, architecture, testing, etc.)
2. **Rename using proper convention** (`YYYY-MM-DD_type_description.md`)
3. **Move to correct `/reports/` subfolder**
4. **Update any references in documentation**
5. **Delete from original location**

### **Example Migration:**

```bash
# Before (WRONG)
/RELEASE_NOTES_v2.4.0.md

# After (CORRECT)
/reports/releases/2026-01-09_release-notes_v2.4.0.md
```

---

## 📊 Report Retention Policy

### **Active Reports**
- **Releases:** Keep all release notes indefinitely
- **Architecture:** Keep for 1 year after implementation
- **Testing:** Keep latest 3 months of test reports
- **Performance:** Keep latest 6 months of performance reports
- **Accessibility:** Keep all WCAG compliance reports indefinitely
- **Documentation:** Keep latest documentation audits
- **Components:** Keep latest component audits
- **Migration:** Archive after migration completion
- **Compliance:** Keep all compliance reports indefinitely
- **Planning:** Archive after sprint/project completion

### **Archiving**
After the retention period, move reports to:
```
/reports/[category]/archive/YYYY/
```

Example:
```
/reports/testing/archive/2025/2025-12-15_test-results_cart-tests.md
```

---

## 🔍 Quick Reference

### **Category Quick Guide**

| If your report is about... | Store it in... | Example name |
|----------------------------|----------------|--------------|
| Version release | `/reports/releases/` | `2026-01-09_release-notes_v2.4.0.md` |
| Code structure | `/reports/architecture/` | `2026-01-09_architecture-audit_component-compliance.md` |
| Test results | `/reports/testing/` | `2026-01-09_test-results_jest-coverage.md` |
| Speed/optimization | `/reports/performance/` | `2026-01-09_performance-report_lighthouse.md` |
| WCAG/a11y | `/reports/accessibility/` | `2026-01-09_accessibility-audit_wcag-aa.md` |
| Docs/JSDoc | `/reports/documentation/` | `2026-01-09_documentation-audit_jsdoc.md` |
| Specific component | `/reports/components/` | `2026-01-09_component-audit_product-card.md` |
| Code migration | `/reports/migration/` | `2026-01-09_migration-status_css-complete.md` |
| Standards check | `/reports/compliance/` | `2026-01-09_compliance-check_guidelines.md` |
| Future planning | `/reports/planning/` | `2026-01-09_roadmap_q1-2026.md` |

---

## ✅ Checklist for Creating Reports

Before creating a new report, verify:

- [ ] Date is at the beginning of filename (`YYYY-MM-DD_`)
- [ ] Report type is clear and hyphenated (e.g., `release-notes`, `test-results`)
- [ ] Brief description is concise and hyphenated
- [ ] File extension is `.md` (Markdown)
- [ ] Stored in correct `/reports/` subfolder
- [ ] Uses lowercase letters only
- [ ] Follows template structure
- [ ] Includes all required sections
- [ ] No spaces in filename (use hyphens)
- [ ] Not stored in root directory

---

## 📞 Questions?

If you're unsure about:
- **Where to store a report:** Check the category quick guide above
- **How to name a report:** Follow `YYYY-MM-DD_type_description.md`
- **What template to use:** Use the standard template in this document
- **Retention period:** Check the retention policy section

---

## 📚 Related Documentation

- [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md) - Guidelines for writing guidelines
- [../Guidelines.md](../Guidelines.md) - Main project guidelines
- [../CHANGELOG.md](../CHANGELOG.md) - Version history
- [../README.md](../README.md) - Project overview
- [../ARCHITECTURE.md](../ARCHITECTURE.md) - Architecture documentation

---

## 🔄 Changelog

### v1.0 - 2026-01-09
- Initial documentation
- Established reporting standards
- Created 10 category folders
- Defined naming convention
- Added report template

---

**Status:** ✅ Complete  
**Maintainer:** Project Team  
**Last Review:** January 9, 2026
