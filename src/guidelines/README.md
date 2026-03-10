# Guidelines Directory

**Purpose:** Central repository for all project guidelines, standards, and documentation templates  
**Location:** `/guidelines/`  
**Last Updated:** January 9, 2026

**📖 Main Guidelines:** See [/guidelines/Guidelines.md](/guidelines/Guidelines.md) for the complete project guidelines (v2.4+)

---

## 📋 Overview

This directory contains comprehensive documentation for the WooCommerce Prototype project, organized by category and component type. All guidelines follow WordPress FSE (Full Site Editing) architecture principles and WCAG 2.1 AA accessibility standards.

**🚨 CRITICAL: Always read relevant guidelines BEFORE creating or modifying components.**

**⭐ Main Guidelines File:** The complete project guidelines are located at `/guidelines/Guidelines.md` - this is the authoritative source for all project standards, architecture, and best practices.

---

## 📁 Directory Structure

```
/guidelines/
├── README.md                          # This file - Guidelines directory index
│
├── 📚 CORE GUIDELINES (Process & Standards)
│   ├── WRITING_GUIDELINES.md          # Documentation writing standards
│   ├── REPORTING_GUIDELINES.md        # Report creation and organization
│   ├── SHELL_SCRIPT_GUIDELINES.md     # Shell script standards (.sh files)
│   ├── PYTHON_SCRIPT_GUIDELINES.md    # Python script standards (.py files)
│   ├── PLANNING_GUIDELINES.md         # Planning document standards
│   ├── IMPORTS_GUIDELINES.md          # File import standards (NEW)
│   └── REDUCED_MOTION_GUIDELINES.md   # prefers-reduced-motion a11y standards (NEW)
│
├── 📖 OVERVIEW DOCUMENTS (Architecture)
│   ├── overview-components.md         # Component architecture & hierarchy
│   ├── overview-templates.md          # Template architecture (Pages)
│   ├── overview-parts.md              # Parts architecture (Global sections)
│   ├── overview-patterns.md           # Patterns architecture (Reusable sections)
│   ├── overview-blocks.md             # Blocks architecture (Functional units)
│   ├── overview-sections.md           # Section styling system
│   └── overview-icons.md              # Icon system (@phosphor-icons/react)
│
├── 🎨 DESIGN TOKENS
│   ├── design-tokens/
│   │   ├── colors.md                  # Color palette & semantic tokens
│   │   ├── typography.md              # Typography hierarchy & fluid scaling
│   │   └── spacing.md                 # Spacing scale & layout guidelines
│
├── 📱 MOBILE GUIDELINES
│   ├── mobile/
│   │   ├── buttons.md                 # Mobile button sizing & touch targets
│   │   ├── spacing.md                 # Mobile-specific spacing & clamp()
│   │   ├── typography.md              # Mobile typography & readability
│   │   ├── forms.md                   # Mobile form design & input optimization
│   │   ├── images.md                  # Mobile image optimization
│   │   ├── animations.md              # Mobile animation performance
│   │   └── performance.md             # Mobile performance optimization
│
├── 🔧 DEVELOPMENT GUIDELINES ⭐ NEW
│   ├── development/
│   │   ├── css-optimization-guidelines.md         # Complete CSS optimization standards (800+ lines)
│   │   ├── css-optimization-quick-reference.md    # Quick lookup guide
│   │   ├── css-optimization-implementation-guide.md  # Step-by-step process (1,100+ lines)
│   │   ├── implementation-example.md              # Real-world example (P0.1 task)
│   │   └── CSS-OPTIMIZATION-SYSTEM-MAP.md         # System overview & file relationships
│
├── 🎭 COMPONENT GUIDELINES
│   ├── blocks/                        # Block component guidelines
│   ├── patterns/                      # Pattern component guidelines
│   ├── parts/                         # Parts component guidelines
│   ├── templates/                     # Template guidelines
│   ├── components/                    # General component guidelines
│   │   ├── ProductCard.md
│   │   ├── CartBlock.md
│   │   ├── Hero.md
│   │   ├── SectionPresets.md
│   │   └── ...
│
└── 🎨 STYLE GUIDELINES
    └── styles/
        └── section-styles.md          # Complete section preset system
```

---

## 📚 Core Guidelines (Must Read)

### **1. WRITING_GUIDELINES.md**

**Purpose:** Standards for writing documentation, guidelines, and markdown files

**When to Use:**
- Creating new guideline documents
- Writing component documentation
- Creating README files
- Documenting features or patterns

**Key Topics:**
- Documentation structure standards
- Markdown formatting guidelines
- File naming conventions
- Documentation templates
- JSDoc standards

**Read Before:** Writing any documentation

**Link:** [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md)

---

### **2. REPORTING_GUIDELINES.md**

**Purpose:** Standards for creating reports and organizing them in `/reports/`

**When to Use:**
- Creating project reports
- Documenting audits or reviews
- Writing status updates
- Documenting test results

**Key Topics:**
- Report naming conventions (`YYYY-MM-DD_type_description.md`)
- Report categories (9 types)
- Report templates (5 templates)
- File organization in `/reports/`

**Read Before:** Creating any report

**Link:** [REPORTING_GUIDELINES.md](./REPORTING_GUIDELINES.md)

---

### **3. SHELL_SCRIPT_GUIDELINES.md**

**Purpose:** Standards for creating shell scripts in `/scripts/`

**When to Use:**
- Writing bash/shell scripts
- Creating automation scripts
- Writing deployment scripts

**Key Topics:**
- Script structure and shebang
- Error handling and logging
- Input validation
- Security best practices
- Documentation requirements

**Read Before:** Creating any `.sh` file

**Link:** [SHELL_SCRIPT_GUIDELINES.md](./SHELL_SCRIPT_GUIDELINES.md)

---

### **4. PYTHON_SCRIPT_GUIDELINES.md**

**Purpose:** Standards for creating Python scripts in `/scripts/`

**When to Use:**
- Writing Python scripts
- Creating data processing tools
- Writing analysis scripts

**Key Topics:**
- Type hints (mypy)
- Code style (black, pylint)
- Error handling
- Testing requirements
- Security standards

**Read Before:** Creating any `.py` file

**Link:** [PYTHON_SCRIPT_GUIDELINES.md](./PYTHON_SCRIPT_GUIDELINES.md)

---

### **5. PLANNING_GUIDELINES.md**

**Purpose:** Standards for creating planning documents in `/planning/`

**When to Use:**
- Creating feature plans
- Writing sprint plans
- Documenting roadmaps
- Writing proposals or RFCs
- Creating Architecture Decision Records

**Key Topics:**
- 5 planning document templates
- Planning workflow
- Status progression
- Archiving process
- Naming conventions

**Read Before:** Creating any planning document

**Link:** [PLANNING_GUIDELINES.md](./PLANNING_GUIDELINES.md)

---

### **6. IMPORTS_GUIDELINES.md** ⭐ NEW

**Purpose:** Standards for importing assets (images, SVGs, fonts, data)

**When to Use:**
- Importing Figma assets
- Adding local images
- Importing SVG vectors
- Adding custom fonts
- Importing data files

**Key Topics:**
- 5 import methods (Figma, SVG, images, fonts, data)
- Naming conventions for all asset types
- Figma import workflow
- Decision tree for import methods
- Troubleshooting guide

**Read Before:** Importing any assets

**Link:** [IMPORTS_GUIDELINES.md](./IMPORTS_GUIDELINES.md)

---

### **7. REDUCED_MOTION_GUIDELINES.md** ⭐ NEW

**Purpose:** Standards for implementing prefers-reduced-motion a11y

**When to Use:**
- Creating animations
- Writing CSS for animations
- Implementing interactive components

**Key Topics:**
- prefers-reduced-motion media query
- Animation techniques
- Testing a11y
- Documentation requirements

**Read Before:** Implementing any animations

**Link:** [REDUCED_MOTION_GUIDELINES.md](./REDUCED_MOTION_GUIDELINES.md)

---

## 📖 Overview Documents (Architecture)

### **Component Architecture Guides**

| Document | Purpose | Read Before |
|----------|---------|-------------|
| [overview-components.md](./overview-components.md) | Component hierarchy & usage patterns | Creating ANY component |
| [overview-templates.md](./overview-templates.md) | Template architecture (Full pages) | Creating templates |
| [overview-parts.md](./overview-parts.md) | Parts architecture (Global sections) | Creating global parts |
| [overview-patterns.md](./overview-patterns.md) | Patterns architecture (Reusable sections) | Creating patterns |
| [overview-blocks.md](./overview-blocks.md) | Blocks architecture (Functional units) | Creating blocks |
| [overview-sections.md](./overview-sections.md) | Section styling system | Creating sections |
| [overview-icons.md](./overview-icons.md) | Icon system (@phosphor-icons/react) | Using icons |

---

## 🎨 Design Tokens

### **Design System Foundation**

**Location:** `/guidelines/design-tokens/`

**Purpose:** Complete design system token documentation

| Token Type | File | Purpose |
|------------|------|---------|
| **Colors** | [colors.md](./design-tokens/colors.md) | Color palette, semantic tokens, light/dark modes |
| **Typography** | [typography.md](./design-tokens/typography.md) | Font sizes, weights, line heights, fluid scaling |
| **Spacing** | [spacing.md](./design-tokens/spacing.md) | Spacing scale, layout guidelines, fluid spacing |

**🚨 CRITICAL:** Always use WordPress CSS variables from these token files.

**Read Before:** Styling ANY component or section

---

## 📱 Mobile Guidelines

### **Mobile-First Development Standards**

**Location:** `/guidelines/mobile/`

**Purpose:** Mobile-specific design and performance guidelines

| Guideline | File | Purpose |
|-----------|------|---------|
| **Buttons** | [buttons.md](./mobile/buttons.md) | Touch targets (44x44px minimum), mobile sizing |
| **Spacing** | [spacing.md](./mobile/spacing.md) | Mobile spacing scale, clamp() usage |
| **Typography** | [typography.md](./mobile/typography.md) | Mobile readability, font sizing |
| **Forms** | [forms.md](./mobile/forms.md) | Mobile input optimization, form design |
| **Images** | [images.md](./mobile/images.md) | Mobile image optimization, responsive images |
| **Animations** | [animations.md](./mobile/animations.md) | Performance-conscious animations |
| **Performance** | [performance.md](./mobile/performance.md) | Mobile optimization techniques |

**Read Before:** Implementing mobile-responsive features

---

## 🔧 Development Guidelines ⭐ NEW

### **CSS Optimization Standards**

**Location:** `/guidelines/development/`

**Purpose:** Complete CSS optimization standards

| Guideline | File | Purpose |
|-----------|------|---------|
| **CSS Optimization Guidelines** | [css-optimization-guidelines.md](./development/css-optimization-guidelines.md) | Complete CSS optimization standards (800+ lines) |
| **CSS Optimization Quick Reference** | [css-optimization-quick-reference.md](./development/css-optimization-quick-reference.md) | Quick lookup guide |
| **CSS Optimization Implementation Guide** | [css-optimization-implementation-guide.md](./development/css-optimization-implementation-guide.md) | Step-by-step process (1,100+ lines) |
| **Implementation Example** | [implementation-example.md](./development/implementation-example.md) | Real-world example (P0.1 task) |
| **CSS Optimization System Map** | [CSS-OPTIMIZATION-SYSTEM-MAP.md](./development/CSS-OPTIMIZATION-SYSTEM-MAP.md) | System overview & file relationships |

**Read Before:** Implementing CSS optimizations

---

## 🎭 Component Guidelines

### **Component-Specific Documentation**

**Organization:** Guidelines are organized by component type

```
/guidelines/
├── blocks/           # Block component guidelines
├── patterns/         # Pattern component guidelines
├── parts/            # Parts component guidelines
├── templates/        # Template guidelines
└── components/       # General component guidelines
```

### **Notable Component Guidelines**

| Component | File | Type |
|-----------|------|------|
| ProductCard | [components/ProductCard.md](./components/ProductCard.md) | Block |
| CartBlock | [components/CartBlock.md](./components/CartBlock.md) | Block |
| Hero | [components/Hero.md](./components/Hero.md) | Pattern |
| SectionPresets | [components/SectionPresets.md](./components/SectionPresets.md) | BEM Pattern Guide |

**Read Before:** Using any specific component

---

## 🎨 Style Guidelines

### **Section Styling System**

**Location:** `/guidelines/styles/`

| Guideline | File | Purpose |
|-----------|------|---------|
| **Section Styles** | [section-styles.md](./guidelines/styles/section-styles.md) | Complete section preset system (14 types, 56 variants) |

**Key Features:**
- 14 section types (Hero, Content, Featured, etc.)
- WordPress BEM class naming convention
- Full light/dark mode support
- Inline className pattern (no JavaScript abstractions)

**Read Before:** Creating sections or patterns

---

## 🔄 How to Use These Guidelines

### **Step 1: Identify Your Task**

What are you working on?
- Writing documentation? → Read [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md)
- Creating a report? → Read [REPORTING_GUIDELINES.md](./REPORTING_GUIDELINES.md)
- Writing a script? → Read [SHELL_SCRIPT_GUIDELINES.md](./SHELL_SCRIPT_GUIDELINES.md) or [PYTHON_SCRIPT_GUIDELINES.md](./PYTHON_SCRIPT_GUIDELINES.md)
- Planning a feature? → Read [PLANNING_GUIDELINES.md](./PLANNING_GUIDELINES.md)
- Importing assets? → Read [IMPORTS_GUIDELINES.md](./IMPORTS_GUIDELINES.md)
- Creating a component? → Read relevant overview + component guideline
- Styling a section? → Read [section-styles.md](./guidelines/styles/section-styles.md)

---

### **Step 2: Read Required Guidelines**

**For Component Development:**

1. **ALWAYS read these first:**
   - [overview-components.md](./overview-components.md) - Component architecture
   - [overview-icons.md](./overview-icons.md) - Icon usage

2. **Read design tokens:**
   - [design-tokens/colors.md](./design-tokens/colors.md)
   - [design-tokens/typography.md](./design-tokens/typography.md)
   - [design-tokens/spacing.md](./design-tokens/spacing.md)

3. **Read mobile guidelines (if mobile-responsive):**
   - [mobile/buttons.md](./mobile/buttons.md)
   - [mobile/spacing.md](./mobile/spacing.md)
   - [mobile/typography.md](./mobile/typography.md)

4. **Read component-specific guideline:**
   - Example: Using ProductCard? → Read [components/ProductCard.md](./components/ProductCard.md)

5. **Read section styles (if creating sections):**
   - [styles/section-styles.md](./guidelines/styles/section-styles.md)

---

### **Step 3: Follow the Standards**

Apply the guidelines to your work:
- Use WordPress CSS variables (`--wp--preset--*`)
- Follow component hierarchy (Templates → Parts/Patterns → Blocks → UI)
- Use section presets for section styling
- Follow naming conventions
- Include proper documentation (JSDoc)
- Test accessibility (WCAG 2.1 AA)

---

## 📊 Guidelines Summary

### **Total Guidelines Count**

| Category | Count | Status |
|----------|-------|--------|
| **Core Guidelines** | 7 | ✅ Complete |
| **Overview Documents** | 7 | ✅ Complete |
| **Design Tokens** | 3 | ✅ Complete |
| **Mobile Guidelines** | 7 | ✅ Complete |
| **Development Guidelines** | 5 | ✅ Complete |
| **Component Guidelines** | 148+ | ✅ Complete |
| **Style Guidelines** | 1 | ✅ Complete |

**Total:** 172+ guideline documents

---

### **Recent Updates**

#### **v2.4.0 - January 9, 2026**

**Added:**
- ✅ IMPORTS_GUIDELINES.md - File import standards
- ✅ REDUCED_MOTION_GUIDELINES.md - prefers-reduced-motion a11y standards
- ✅ /guidelines/README.md - This comprehensive index
- ✅ Stylesheet location clarification
- ✅ Development guidelines for CSS optimization

**Updated:**
- ✅ Guidelines.md - Added file imports reference
- ✅ WRITING_GUIDELINES.md - Updated with latest templates
- ✅ PLANNING_GUIDELINES.md - Enhanced planning workflows

---

## 🚨 Critical Reminders

### **Before Starting ANY Work:**

1. ✅ **Read relevant guidelines FIRST**
   - Don't skip this step
   - Guidelines prevent costly mistakes
   - Standards ensure consistency

2. ✅ **Use WordPress CSS variables**
   - Never use hardcoded values
   - All tokens in `/guidelines/design-tokens/`
   - Follow WordPress naming conventions

3. ✅ **Follow component hierarchy**
   - Templates → Parts/Patterns → Blocks → UI
   - No circular dependencies
   - Clear separation of concerns

4. ✅ **Test accessibility**
   - WCAG 2.1 AA is non-negotiable
   - Use semantic HTML
   - Include ARIA attributes where needed

5. ✅ **Document your work**
   - JSDoc for all exported components
   - Follow WRITING_GUIDELINES.md
   - Include usage examples

---

## 📚 Quick Reference Links

### **Most Referenced Guidelines**

| Guideline | Use Case | Link |
|-----------|----------|------|
| Component Architecture | Creating any component | [overview-components.md](./overview-components.md) |
| Design Tokens - Colors | Using colors | [design-tokens/colors.md](./design-tokens/colors.md) |
| Design Tokens - Typography | Using fonts/text | [design-tokens/typography.md](./design-tokens/typography.md) |
| Design Tokens - Spacing | Using spacing/layout | [design-tokens/spacing.md](./design-tokens/spacing.md) |
| Section Styles | Creating sections | [styles/section-styles.md](./guidelines/styles/section-styles.md) |
| File Imports | Importing assets | [IMPORTS_GUIDELINES.md](./IMPORTS_GUIDELINES.md) |
| Mobile Guidelines | Mobile development | [mobile/](./mobile/) |

---

### **Process Guidelines**

| Process | Guideline | Link |
|---------|-----------|------|
| Writing Documentation | WRITING_GUIDELINES.md | [Link](./WRITING_GUIDELINES.md) |
| Creating Reports | REPORTING_GUIDELINES.md | [Link](./REPORTING_GUIDELINES.md) |
| Writing Shell Scripts | SHELL_SCRIPT_GUIDELINES.md | [Link](./SHELL_SCRIPT_GUIDELINES.md) |
| Writing Python Scripts | PYTHON_SCRIPT_GUIDELINES.md | [Link](./PYTHON_SCRIPT_GUIDELINES.md) |
| Planning Features | PLANNING_GUIDELINES.md | [Link](./PLANNING_GUIDELINES.md) |
| Importing Assets | IMPORTS_GUIDELINES.md | [Link](./IMPORTS_GUIDELINES.md) |

---

## 🔍 Finding Specific Guidelines

### **By Component Type**

```bash
# Block guidelines
ls /guidelines/blocks/

# Pattern guidelines
ls /guidelines/patterns/

# Parts guidelines
ls /guidelines/parts/

# Template guidelines
ls /guidelines/templates/

# General component guidelines
ls /guidelines/components/
```

---

### **By Topic**

```bash
# Design tokens
ls /guidelines/design-tokens/

# Mobile guidelines
ls /guidelines/mobile/

# Style guidelines
ls /guidelines/styles/
```

---

### **Search for Specific Topic**

```bash
# Find all references to "ProductCard"
grep -r "ProductCard" /guidelines/

# Find all references to "section presets"
grep -r "section preset" /guidelines/

# Find all references to "WordPress CSS"
grep -r "WordPress CSS" /guidelines/
```

---

## 📞 Questions?

### **Which guideline do I need?**

**Ask yourself:**
- What am I creating? → Find relevant overview document
- What component am I using? → Find component-specific guideline
- What process am I following? → Find process guideline
- What design decision am I making? → Find design token guideline

---

### **Can't find a guideline?**

**Check these locations:**
1. This README.md (you are here)
2. [Guidelines.md](../Guidelines.md) - Main project guidelines
3. Component-specific folders (`/guidelines/components/`, `/guidelines/blocks/`, etc.)
4. Overview documents (`/guidelines/overview-*.md`)

---

### **Guideline conflicts?**

**Priority order:**
1. Component-specific guideline (most specific)
2. Overview document for that component type
3. Design token guidelines
4. Main Guidelines.md
5. Process guidelines (WRITING, REPORTING, etc.)

---

## 🔄 Maintenance

### **Updating Guidelines**

**When to Update:**
- New features added
- Architecture changes
- Process improvements
- Standards clarification

**How to Update:**
1. Update the relevant guideline file
2. Update this README.md if needed
3. Update main Guidelines.md references
4. Create documentation report in `/reports/documentation/`
5. Update CHANGELOG.md

---

### **Creating New Guidelines**

**Follow these steps:**
1. Read [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md)
2. Use appropriate template
3. Place in correct directory
4. Update this README.md
5. Update main Guidelines.md
6. Create documentation report

---

## 📊 Version History

### **v2.4.0 - January 9, 2026**
- Added IMPORTS_GUIDELINES.md
- Added REDUCED_MOTION_GUIDELINES.md
- Created this comprehensive README.md
- Updated cross-references
- Enhanced organization
- Added Development guidelines for CSS optimization

### **v2.3.0 - January 9, 2026**
- Added WordPress CSS alignment documentation
- Updated design token guidelines
- Enhanced component guidelines

### **v2.2.0 - Previous**
- Added PLANNING_GUIDELINES.md
- Enhanced REPORTING_GUIDELINES.md
- Updated WRITING_GUIDELINES.md

---

## 📚 Related Documentation

### **Project Documentation**

- [Main Guidelines.md](../Guidelines.md) - Complete project guidelines
- [README.md](../README.md) - Project overview
- [CHANGELOG.md](../CHANGELOG.md) - Version history

### **Other Directories**

- [/reports/](../reports/) - All project reports
- [/planning/](../planning/) - Planning documents
- [/scripts/](../scripts/) - Project scripts
- [/src/app/imports/](../src/app/imports/) - Imported assets

---

## ✨ Summary

**The `/guidelines/` directory is your comprehensive resource for all project standards, best practices, and component documentation. Always consult relevant guidelines BEFORE starting work to ensure consistency, quality, and adherence to WordPress FSE architecture principles.**

### **Key Takeaways:**

1. ✅ **172+ guidelines** covering all aspects of development
2. ✅ **7 core process guidelines** for documentation, reporting, scripting, planning, and imports
3. ✅ **7 overview documents** for architecture understanding
4. ✅ **3 design token guides** for colors, typography, and spacing
5. ✅ **7 mobile guidelines** for responsive development
6. ✅ **148+ component guidelines** for specific components
7. ✅ **Complete section styling system** with 56 preset variants

### **Remember:**

- 🚨 **Always read guidelines BEFORE creating or modifying components**
- ✅ **Use WordPress CSS variables** (`--wp--preset--*`)
- ✅ **Follow component hierarchy** (Templates → Parts/Patterns → Blocks → UI)
- ✅ **Test accessibility** (WCAG 2.1 AA)
- ✅ **Document your work** (JSDoc + comments)

---

**Last Updated:** January 9, 2026  
**Maintained By:** Project Team  
**Version:** 2.4.0