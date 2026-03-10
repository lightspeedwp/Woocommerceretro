# Prompts Directory

**Last Updated:** January 10, 2026  
**Version:** 1.0  
**Purpose:** Central repository for all AI prompts used in the WooCommerce prototype project

---

## 📋 Overview

This directory contains standardized prompts for generating code, documentation, tests, audits, and workflows. All prompts follow the conventions defined in [PROMPT_GENERATION_GUIDELINES.md](/guidelines/PROMPT_GENERATION_GUIDELINES.md).

---

## 📁 Directory Structure

```
/prompts/
├── components/              # Component generation prompts
│   ├── blocks/             # Block component prompts
│   ├── patterns/           # Pattern component prompts
│   ├── parts/              # Global parts prompts
│   └── common/             # Common component prompts
│
├── templates/              # Template generation prompts
│   ├── pages/              # Page template prompts
│   ├── archives/           # Archive template prompts
│   └── single/             # Single item template prompts
│
├── testing/                # Testing-related prompts
│   ├── unit-tests/         # Unit test generation
│   ├── integration-tests/  # Integration test prompts
│   └── accessibility/      # A11y testing prompts
│
├── audits/                 # Audit procedure prompts
│   ├── accessibility/      # WCAG audit prompts
│   ├── performance/        # Performance audit prompts
│   ├── code-quality/       # Code quality audit prompts
│   └── compliance/         # Standards compliance prompts
│
├── refactoring/            # Refactoring task prompts
│   ├── css-migration/      # CSS refactoring prompts
│   ├── component-updates/  # Component refactoring
│   └── architecture/       # Architecture refactoring
│
├── documentation/          # Documentation generation prompts
│   ├── components/         # Component doc prompts
│   ├── guidelines/         # Guideline creation prompts
│   └── reports/            # Report generation prompts
│
├── workflows/              # Complete workflow prompts
│   ├── feature-complete/   # End-to-end feature prompts
│   ├── bugfix/             # Bug fixing workflows
│   └── optimization/       # Optimization workflows
│
└── archive/                # Archived/deprecated prompts
    ├── 2026-01/            # January 2026 archives
    └── README.md           # Archive index
```

---

## 🎯 Quick Start

### Using a Prompt

1. **Find the appropriate prompt:**
   - Browse directories by category
   - Check README files in each directory
   - Use naming convention to identify version

2. **Read the prompt:**
   - Review metadata and objective
   - Check prerequisites
   - Review requirements

3. **Execute the prompt:**
   - Follow step-by-step instructions
   - Complete verification checklist
   - Run tests

4. **Verify output:**
   - Check success criteria
   - Review generated files
   - Test functionality

---

## 📝 Naming Convention

All prompts follow this pattern:

```
<category>_<action>_<target>_<version>.md
```

**Examples:**
- `component_create_product-card_v1.md`
- `test_write_unit-tests_header_v1.md`
- `audit_wcag_color-contrast_v2.md`
- `refactor_css_tailwind-to-wordpress_v1.md`

**See:** [PROMPT_GENERATION_GUIDELINES.md](/guidelines/PROMPT_GENERATION_GUIDELINES.md#3-naming-conventions) for complete naming standards.

---

## 📊 Available Prompts

### Components (3 prompts) ✅

**Location:** `/prompts/components/`

| Prompt | Version | Target | Complexity | Time | Status |
|--------|---------|--------|------------|------|--------|
| ProductCard Block | v1.0 | ProductCard.tsx | Medium | 45 min | ✅ Active |
| Hero Pattern | v1.0 | Hero.tsx | Medium | 60 min | ✅ Active |
| MainHeader Part | v1.0 | MainHeader.tsx | High | 90 min | ✅ Active |

**Files:**
- `/prompts/components/blocks/component_create_product-card_v1.md`
- `/prompts/components/patterns/component_create_hero_v1.md`
- `/prompts/components/parts/component_create_header_v1.md`

---

### Templates (2 prompts) ✅

**Location:** `/prompts/templates/`

| Prompt | Version | Target | Complexity | Time | Status |
|--------|---------|--------|------------|------|--------|
| Archive Product | v1.0 | ArchiveProduct.tsx | High | 90 min | ✅ Active |
| Single Product | v1.0 | SingleProduct.tsx | High | 120 min | ✅ Active |

**Files:**
- `/prompts/templates/archives/template_create_archive-product_v1.md`
- `/prompts/templates/single/template_create_single-product_v1.md`

---

### Testing (2 prompts) ✅

**Location:** `/prompts/testing/`

| Prompt | Version | Target | Complexity | Time | Status |
|--------|---------|--------|------------|------|--------|
| Unit Test Generation | v1.0 | Component.test.tsx | Simple | 30 min | ✅ Active |
| Integration Tests | v1.0 | Feature.integration.test.tsx | Medium | 60 min | ✅ Active |

**Files:**
- `/prompts/testing/unit-tests/test_write_unit-tests_component_v1.md`
- `/prompts/testing/integration-tests/test_write_integration-tests_v1.md`

---

### Audits (1 prompt) ✅

**Location:** `/prompts/audits/`

| Prompt | Version | Target | Complexity | Time | Status |
|--------|---------|--------|------------|------|--------|
| WCAG Color Contrast | v1.0 | Contrast audit report | Medium | 2-3 hrs | ✅ Active |

**Files:**
- `/prompts/audits/accessibility/audit_wcag_color-contrast_v1.md`

---

### Refactoring (1 prompt) ✅

**Location:** `/prompts/refactoring/`

| Prompt | Version | Target | Complexity | Time | Status |
|--------|---------|--------|------------|------|--------|
| CSS Migration | v1.0 | Tailwind → WordPress | Medium | 60-90 min | ✅ Active |

**Files:**
- `/prompts/refactoring/css-migration/refactor_css_tailwind-to-wordpress_v1.md`

---

### Documentation (1 prompt) ✅

**Location:** `/prompts/documentation/`

| Prompt | Version | Target | Complexity | Time | Status |
|--------|---------|--------|------------|------|--------|
| Component Guideline | v1.0 | Component.md | Medium | 45-60 min | ✅ Active |

**Files:**
- `/prompts/documentation/components/docs_write_component-guideline_v1.md`

---

### Workflows (0 prompts)

**Location:** `/prompts/workflows/`

| Prompt | Version | Target | Status |
|--------|---------|--------|--------|
| *(Coming soon)* | - | - | Planned |

**Planned:**
- Feature Development Workflow
- Code Optimization Workflow
- Performance Audit

---

## 📚 Creating New Prompts

### Step 1: Choose Category

Determine which category your prompt belongs to:
- **Components:** Generating React components
- **Templates:** Generating page templates
- **Testing:** Generating tests
- **Audits:** Performing code audits
- **Refactoring:** Restructuring code
- **Documentation:** Writing docs
- **Workflows:** Complete multi-step processes

### Step 2: Follow Template

Use the standard template from [PROMPT_GENERATION_GUIDELINES.md](/guidelines/PROMPT_GENERATION_GUIDELINES.md#5-prompt-template-structure):

```markdown
# [Prompt Title]

**Version:** v1.0
**Date Created:** YYYY-MM-DD
**Category:** [category]
**Status:** Active

---

## 📋 Prompt Metadata
[metadata table]

## 🎯 Objective
[clear objective]

## 📋 Requirements
[requirements]

## 🔧 Implementation Instructions
[step-by-step]

## ✅ Verification Checklist
[checklist]

[... other sections ...]
```

### Step 3: Name Correctly

Follow naming convention:
```
category_action_target_v1.md
```

### Step 4: Store in Correct Directory

Place in appropriate subdirectory:
```
/prompts/[category]/[subcategory]/[filename].md
```

### Step 5: Update Index

Add to this README's appropriate section.

---

## 🔍 Search & Discovery

### By Category

Browse directories:
- `/prompts/components/` - Component generation
- `/prompts/testing/` - Test generation
- `/prompts/audits/` - Audit procedures

### By Action

Common actions:
- `create` - Generate new code
- `update` - Modify existing code
- `test` - Write tests
- `audit` - Review/analyze
- `refactor` - Restructure
- `document` - Write docs

### By Target

Target specific components or features:
- `product-card`
- `checkout-form`
- `mobile-navigation`
- `wcag-contrast`

---

## 📖 Guidelines

**Complete Guidelines:** [PROMPT_GENERATION_GUIDELINES.md](/guidelines/PROMPT_GENERATION_GUIDELINES.md)

**Key Standards:**
1. ✅ All prompts must follow standard template
2. ✅ Use semantic naming convention
3. ✅ Include verification checklist
4. ✅ Provide complete code examples
5. ✅ Consider dark mode and accessibility
6. ✅ Include version number
7. ✅ Link to related documentation

---

## 🗂️ Archive

**Location:** `/prompts/archive/`

Deprecated or superseded prompts are moved to archive with:
- Deprecation date
- Reason for deprecation
- Link to replacement prompt

**Archive Structure:**
```
/prompts/archive/
├── 2026-01/
│   ├── component_create_old-card_v1.md
│   └── README.md
└── 2025-12/
    └── ...
```

---

## 🔍 Maintenance

### Regular Tasks

**Weekly:**
- Review new prompts for quality
- Test new prompts for effectiveness

**Monthly:**
- Update index with new prompts
- Archive deprecated prompts
- Review and update active prompts

**Quarterly:**
- Comprehensive prompt audit
- Update templates if needed
- Clean up archive

### Quality Standards

All prompts must:
- [ ] Follow standard template
- [ ] Use correct naming convention
- [ ] Include complete examples
- [ ] Have verification checklist
- [ ] Be tested before publishing
- [ ] Link to related documentation

---

## 📞 Support

**Questions about prompts?**
- Read [PROMPT_GENERATION_GUIDELINES.md](/guidelines/PROMPT_GENERATION_GUIDELINES.md)
- Check examples in this directory
- Review related guidelines

**Creating your first prompt?**
1. Read the guidelines thoroughly
2. Use the standard template
3. Follow naming conventions
4. Test with AI before publishing

---

## 📈 Statistics

**Total Prompts:** 13  
**Active Prompts:** 13  
**Archived Prompts:** 0  
**Categories:** 7  
**Last Updated:** January 10, 2026

---

## 🎯 Roadmap

### Planned Prompts

**Priority 1 (Immediate):**
- [x] Component creation prompts (ProductCard ✅, Hero ✅, Header ✅)
- [x] Test generation prompts (unit tests ✅, integration tests ✅)
- [x] WCAG audit prompt (color contrast ✅)

**Progress:** 6/6 complete (100%) ✅

**Priority 2 (Short-term):**
- [x] Template generation prompts (Archive ✅, Single Product ✅)
- [x] Refactoring prompts (CSS migration ✅)
- [x] Documentation prompts (component guidelines ✅)

**Progress:** 4/4 complete (100%) ✅

**Priority 3 (Long-term):**
- [ ] Complete workflow prompts (feature development)
- [ ] Performance audit prompts
- [ ] Optimization prompts

**Progress:** 0/3 complete (0%)

**Overall Progress:** 10/13 prompts (77%)