# Writing Guidelines - Standards for Documentation

**Version:** 1.0  
**Updated:** January 9, 2026  
**Purpose:** Standardize the creation and organization of guideline documentation for the WooCommerce Prototype project.

---

## 📋 Overview

All project guidelines must be stored in the `/guidelines/` directory with consistent structure, naming, and formatting. This document defines the standards for creating new guideline files.

---

## 📁 Directory Structure

```
/guidelines/
├── WRITING_GUIDELINES.md          # This file - How to write guidelines
├── REPORTING_GUIDELINES.md         # Reporting standards
├── README.md                       # Guidelines directory index
│
├── blocks/                         # Block component guidelines
│   ├── design/                     # Design blocks (buttons, columns, etc.)
│   └── theme/                      # Theme blocks (navigation, search, etc.)
│
├── components/                     # Common component guidelines
├── design-tokens/                  # Design system tokens
├── mobile/                         # Mobile-specific guidelines
├── overview-*.md                   # Architecture overviews
├── parts/                          # Global parts guidelines
├── patterns/                       # Pattern component guidelines
├── styles/                         # Styling guidelines
└── templates/                      # Template guidelines
```

---

## 🏷️ Naming Conventions

### **File Names**

All guideline files must use **PascalCase** or **kebab-case** with `.md` extension:

**✅ CORRECT:**
```
ProductCard.md
WRITING_GUIDELINES.md
section-styles.md
overview-components.md
```

**❌ INCORRECT:**
```
product_card.md          # Use PascalCase or kebab-case
product card.md          # No spaces
PRODUCTCARD.MD           # Use .md not .MD
productCard.txt          # Must be .md
```

---

### **Naming Patterns by Type**

| Type | Pattern | Example |
|------|---------|---------|
| **Component** | `ComponentName.md` | `ProductCard.md`, `Hero.md` |
| **Overview** | `overview-topic.md` | `overview-components.md` |
| **Design Token** | `token-name.md` | `colors.md`, `typography.md` |
| **Process** | `PROCESS_NAME.md` | `WRITING_GUIDELINES.md` |
| **Mobile** | `feature.md` | `buttons.md`, `forms.md` |

---

## 📝 Standard Template

Use this template for all new guideline files:

```markdown
# [Component/Feature Name]

**Type:** [Block/Pattern/Part/Template/Token/Process]  
**Category:** [Category if applicable]  
**Status:** [Draft/Review/Complete]  
**Last Updated:** YYYY-MM-DD

---

## 📋 Overview

[Brief 2-3 sentence description of what this guideline covers]

---

## 🎯 Purpose

[What this component/feature is for and when to use it]

---

## 📐 Structure

[File structure, component hierarchy, or organization]

---

## 💻 Implementation

### **Props/Parameters** (if applicable)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `propName` | `string` | Yes | - | Description |

### **Code Example**

\```tsx
// Example usage
<ComponentName 
  prop="value"
  className="wp-block-component"
/>
\```

---

## 🎨 Styling

### **WordPress Classes**

\```css
.wp-block-component {
  /* Primary styles */
}

[data-theme="dark"] .wp-block-component {
  /* Dark mode styles */
}
\```

### **CSS Variables Used**

- `--wp--preset--color--primary`
- `--wp--preset--spacing--40`
- `--wp--preset--font-size--normal`

---

## ♿ Accessibility

- **ARIA:** [Required ARIA attributes]
- **Keyboard:** [Keyboard interaction patterns]
- **Screen Readers:** [Screen reader considerations]
- **Focus:** [Focus management]

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | [Mobile behavior] |
| Tablet (640-1024px) | [Tablet behavior] |
| Desktop (>1024px) | [Desktop behavior] |

---

## 🌓 Dark Mode

[How dark mode is implemented for this component]

---

## 🔗 WordPress Mapping

**Maps to:** `[WordPress block/pattern name]`

**theme.json settings:**
\```json
{
  "settings": {
    "blocks": {
      "core/block-name": {}
    }
  }
}
\```

---

## ✅ Best Practices

- ✅ [Best practice 1]
- ✅ [Best practice 2]
- ✅ [Best practice 3]

---

## ❌ Common Mistakes

- ❌ [Common mistake 1]
- ❌ [Common mistake 2]

---

## 📚 Related Documentation

- [Related guideline 1](./RelatedFile.md)
- [Related guideline 2](../category/OtherFile.md)

---

## 🔄 Changelog

### v1.0 - YYYY-MM-DD
- Initial documentation

---

**Status:** [Draft/Review/Complete]  
**Maintainer:** [Team/Role]  
**Last Review:** YYYY-MM-DD
```

---

## 📂 File Organization Rules

### **Rule 1: Location**

**ALL guideline files MUST be in `/guidelines/` directory or its subdirectories.**

**✅ CORRECT:**
```
/guidelines/components/ProductCard.md
/guidelines/design-tokens/colors.md
/guidelines/REPORTING_GUIDELINES.md
```

**❌ INCORRECT:**
```
/REPORTING_GUIDELINES.md          # Root directory
/docs/guidelines/ProductCard.md   # Wrong parent folder
/src/guidelines/colors.md         # Inside source code
```

---

### **Rule 2: Categorization**

Place guidelines in appropriate subdirectories:

| Category | Location | Examples |
|----------|----------|----------|
| **Blocks** | `/guidelines/blocks/` | ProductCard.md, SearchInput.md |
| **Patterns** | `/guidelines/patterns/` | Hero.md, ProductGrid.md |
| **Parts** | `/guidelines/parts/` | Header.md, Footer.md |
| **Templates** | `/guidelines/templates/` | FrontPage.md, PageCart.md |
| **Design Tokens** | `/guidelines/design-tokens/` | colors.md, spacing.md |
| **Mobile** | `/guidelines/mobile/` | buttons.md, forms.md |
| **Styles** | `/guidelines/styles/` | section-styles.md |
| **Overviews** | `/guidelines/` (root) | overview-components.md |
| **Processes** | `/guidelines/` (root) | WRITING_GUIDELINES.md |

---

### **Rule 3: File Naming**

- **Components:** PascalCase (e.g., `ProductCard.md`)
- **Concepts:** kebab-case (e.g., `section-styles.md`)
- **Processes:** SCREAMING_SNAKE_CASE (e.g., `WRITING_GUIDELINES.md`)
- **Overviews:** kebab-case with prefix (e.g., `overview-blocks.md`)

---

## ✍️ Writing Standards

### **Tone and Voice**

- **Professional** - Clear, authoritative, trustworthy
- **Direct** - Get to the point quickly
- **Helpful** - Provide solutions, not just problems
- **Consistent** - Use the same terminology throughout

---

### **Structure**

Every guideline should have:

1. **Header** - Title, metadata (Type, Status, Date)
2. **Overview** - Brief summary (2-3 sentences)
3. **Purpose** - Why this exists and when to use it
4. **Implementation** - Code examples and usage
5. **Styling** - CSS and WordPress classes
6. **Accessibility** - WCAG compliance notes
7. **Responsive** - Mobile/tablet/desktop behavior
8. **Dark Mode** - Dark mode implementation
9. **WordPress Mapping** - How it maps to WordPress
10. **Best Practices** - DO/DON'T lists
11. **Related Docs** - Cross-references
12. **Changelog** - Version history

---

### **Formatting**

#### **Headings**

```markdown
# Main Title (H1) - Only one per document

## Major Section (H2)

### Subsection (H3)

#### Detail (H4)
```

#### **Code Blocks**

Always specify the language:

\```tsx
// TypeScript/React code
<Component prop="value" />
\```

\```css
/* CSS code */
.class-name { }
\```

\```json
// JSON configuration
{ "key": "value" }
\```

#### **Lists**

**Unordered:**
```markdown
- Item 1
- Item 2
  - Sub-item
```

**Ordered:**
```markdown
1. First step
2. Second step
3. Third step
```

**DO/DON'T Lists:**
```markdown
✅ DO: Use semantic class names
❌ DON'T: Use inline styles
```

#### **Tables**

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
```

#### **Callouts**

```markdown
**⚠️ Warning:** Important cautionary information

**💡 Tip:** Helpful suggestion

**📌 Note:** Additional context

**🚨 Critical:** Must-follow requirement
```

---

## 🎯 Quality Checklist

Before submitting a new guideline, verify:

### **Content**
- [ ] Overview clearly explains purpose
- [ ] Code examples are complete and tested
- [ ] All sections from template are included
- [ ] Accessibility requirements documented
- [ ] WordPress mapping provided
- [ ] Best practices include DO/DON'T lists

### **Formatting**
- [ ] Markdown syntax is correct
- [ ] Code blocks have language specified
- [ ] Tables are properly formatted
- [ ] Links are valid and relative
- [ ] Headings use proper hierarchy

### **Organization**
- [ ] File is in correct `/guidelines/` subdirectory
- [ ] File name follows naming convention
- [ ] Related documents are cross-referenced
- [ ] Changelog includes initial version

### **Standards**
- [ ] WordPress CSS class names used
- [ ] WordPress CSS variables referenced
- [ ] WCAG compliance addressed
- [ ] Dark mode implementation documented
- [ ] Mobile-first responsive approach

---

## 🔄 Update Process

### **When to Update Guidelines**

Update guidelines when:
- Component API changes
- New props or features added
- Styling changes
- Accessibility improvements
- WordPress mapping changes
- Best practices evolve

### **Update Procedure**

1. **Open** the guideline file in `/guidelines/`
2. **Update** the relevant sections
3. **Increment** the version in changelog
4. **Update** the "Last Updated" date
5. **Test** all code examples
6. **Verify** all links still work
7. **Submit** for review if major changes

### **Changelog Format**

```markdown
## 🔄 Changelog

### v1.2 - 2026-01-15
- Added new `variant` prop
- Updated dark mode implementation
- Fixed accessibility notes

### v1.1 - 2026-01-10
- Added responsive behavior section
- Updated code examples

### v1.0 - 2026-01-05
- Initial documentation
```

---

## 📊 Guideline Types

### **1. Component Guidelines**

**Purpose:** Document individual components (blocks, patterns, parts)

**Location:** `/guidelines/[category]/ComponentName.md`

**Required Sections:**
- Props/API
- Code examples
- Styling
- Accessibility
- Responsive behavior
- Dark mode
- WordPress mapping

**Example:** `/guidelines/blocks/ProductCard.md`

---

### **2. Overview Guidelines**

**Purpose:** High-level architecture and organization

**Location:** `/guidelines/overview-topic.md`

**Required Sections:**
- Architecture overview
- Directory structure
- Component relationships
- Usage guidelines
- Examples

**Example:** `/guidelines/overview-components.md`

---

### **3. Design Token Guidelines**

**Purpose:** Document design system tokens (colors, spacing, typography)

**Location:** `/guidelines/design-tokens/token-name.md`

**Required Sections:**
- Token values
- Usage examples
- CSS variables
- WordPress mapping
- Accessibility (contrast ratios for colors)

**Example:** `/guidelines/design-tokens/colors.md`

---

### **4. Process Guidelines**

**Purpose:** Document processes, workflows, and standards

**Location:** `/guidelines/PROCESS_NAME.md`

**Required Sections:**
- Process overview
- Step-by-step instructions
- Rules and standards
- Examples
- Quality checklist

**Example:** `/guidelines/WRITING_GUIDELINES.md` (this file)

---

### **5. Mobile Guidelines**

**Purpose:** Mobile-specific implementation details

**Location:** `/guidelines/mobile/feature.md`

**Required Sections:**
- Mobile behavior
- Touch targets (min 44x44px)
- Performance considerations
- Responsive breakpoints
- Mobile-specific best practices

**Example:** `/guidelines/mobile/buttons.md`

---

## 🚫 Common Mistakes to Avoid

### **❌ DON'T:**

1. **Create guidelines in root directory**
   ```
   /ProductCard.md  # ❌ WRONG
   ```
   Should be:
   ```
   /guidelines/blocks/ProductCard.md  # ✅ CORRECT
   ```

2. **Use inconsistent naming**
   ```
   product_card.md     # ❌ Wrong format
   product-Card.md     # ❌ Mixed case
   PRODUCT-CARD.md     # ❌ All caps (unless process)
   ```

3. **Forget required sections**
   - Missing accessibility section
   - Missing dark mode section
   - Missing WordPress mapping
   - Missing code examples

4. **Use absolute paths in links**
   ```markdown
   [Link](/Users/name/project/guidelines/file.md)  # ❌ WRONG
   ```
   Should be:
   ```markdown
   [Link](./file.md)  # ✅ CORRECT (relative)
   ```

5. **Hardcode values instead of variables**
   ```css
   /* ❌ WRONG */
   .component { padding: 16px; }
   
   /* ✅ CORRECT */
   .component { padding: var(--wp--preset--spacing--40); }
   ```

6. **Omit language in code blocks**
   ```markdown
   ``` ❌ WRONG (no language)
   const example = true;
   ```
   
   ```markdown
   ```tsx ✅ CORRECT (has language)
   const example = true;
   ```
   ```

---

## ✅ Best Practices

### **DO:**

1. **Use the template** - Start with the standard template
2. **Provide examples** - Include working code examples
3. **Cross-reference** - Link to related guidelines
4. **Be specific** - Use concrete examples, not abstract concepts
5. **Test code** - Ensure all code examples actually work
6. **Update changelog** - Document all changes with version and date
7. **Use WordPress conventions** - CSS classes, variables, mapping
8. **Address accessibility** - Always include WCAG notes
9. **Show dark mode** - Document dark mode implementation
10. **Keep updated** - Review and update guidelines regularly

---

## 📚 Related Documentation

- [REPORTING_GUIDELINES.md](./REPORTING_GUIDELINES.md) - Reporting standards
- [Guidelines.md](../Guidelines.md) - Main project guidelines
- [overview-components.md](./overview-components.md) - Component architecture
- [design-tokens/README.md](./design-tokens/) - Design system tokens

---

## 📞 Questions?

### **Where to store a guideline:**
- Component documentation? → `/guidelines/[blocks|patterns|parts|templates]/`
- Design token? → `/guidelines/design-tokens/`
- Mobile-specific? → `/guidelines/mobile/`
- Overview/architecture? → `/guidelines/overview-*.md`
- Process/standard? → `/guidelines/PROCESS_NAME.md`

### **How to name a guideline:**
- Component? → PascalCase (e.g., `ProductCard.md`)
- Concept? → kebab-case (e.g., `section-styles.md`)
- Process? → SCREAMING_SNAKE_CASE (e.g., `WRITING_GUIDELINES.md`)

### **What sections to include:**
Use the standard template and ensure all required sections are present.

---

## 🔄 Changelog

### v1.0 - 2026-01-09
- Initial documentation
- Established guideline standards
- Created template and examples
- Defined organization rules
- Documented naming conventions
- Added quality checklist

---

**Status:** ✅ Complete  
**Maintainer:** Project Team  
**Last Review:** January 9, 2026
