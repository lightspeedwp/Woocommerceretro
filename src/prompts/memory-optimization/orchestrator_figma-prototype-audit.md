# 🎯 **ORCHESTRATOR PROMPT** — Figma Prototype Codebase Audit

**Role:** Main orchestrator prompt (run once per repository)

## **Overview**

This orchestrator prompt coordinates an AI audit of multiple Figma‑Make prototype codebases. The goal is to **identify opportunities to simplify and modularise frontend code**, improve alignment with WordPress full‑site editing standards, and reduce memory bloat in the design files. The audit is split into distinct sub‑prompts that target specific patterns (DRY, BEM, CSS structure, component modularity, data separation and memory usage). Each sub‑prompt produces its own report; once all sub‑prompts have run for every repository, the orchestrator compiles a final audit report and only then creates a task list of recommended actions.

## **3‑bullet summary**

* **Value:** Improves maintainability, performance and reusability across all prototypes. Ensures WordPress compatibility and reduces Figma memory usage.  
    
* **Risks:** Over‑refactoring could break existing layouts. Ensure that design tokens and WordPress presets remain intact. Audit reports must be thorough to avoid overlooking hidden issues.  
    
* **Next step:** Run the **memory reduction audit** first for each repo using `sub-prompt_woocommerce-memory-optimization.md`; then execute the **CSS architecture audit** using `sub-prompt_css-architecture-audit.md`. Consolidate findings into /reports/ before generating tasks.

## **Workflow**

### **1. Preparation**
     
- Read the **global guidelines** for the project, especially `css-architecture.md` (for BEM, dark‑mode patterns and design tokens)[[1]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L65-L100)[[2]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L131-L155) and the LSX Design System guidelines[[3]](https://github.com/lightspeedwp/Lsxdesigndemo/blob/73d8d414f927ef1ab6cee55a325cbc7fcec384c7/guidelines/README.md#L30-L45)[[4]](https://github.com/lightspeedwp/Lsxdesigndemo/blob/73d8d414f927ef1ab6cee55a325cbc7fcec384c7/guidelines/README.md#L96-L108).  
     
- Create `/reports/` folder if it does not exist. Each audit sub‑prompt will write its report here (e.g. `AUDIT_MEMORY_<repo>.md`, `AUDIT_CSS_<repo>.md`).  
     
### **2. Run memory‑reduction audit**
     
- For each repository, run the `sub-prompt_woocommerce-memory-optimization.md` prompt first. Identify high memory pages, compress images, remove hidden layers, flatten vectors, reduce variants and split the file[[5]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem#:~:text=,Figma%20may%20not%20function%20properly)[[6]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc#:~:text=1,They%20Split%20You). Produce `AUDIT_MEMORY_<repo>.md` summarising the bottlenecks and remediation steps.  
     
### **3. Run CSS architecture audit**
     
- After memory optimization is complete, run `sub-prompt_css-architecture-audit.md` which includes pattern‑specific audits:
     
  - **DRY & Reusability:** Detect repeated JSX/HTML structures, duplicated CSS or logic. Recommend creating reusable components or WordPress block patterns. Look for opportunities to sync patterns across projects and to separate configuration from content.  
       
  - **BEM Compliance:** Verify that CSS classes follow the BEM naming convention with block, element and modifier forms[[1]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L65-L100). Flag Tailwind or inline styles (forbidden)[[7]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L210-L220). Recommend refactoring to semantic class names.  
       
  - **WordPress‑aligned CSS:** Ensure use of WordPress preset variables (`--wp--preset--*`) and design tokens rather than hard‑coded values[[2]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L131-L155). Identify any global utility classes that conflict with WordPress theme.json and suggest mapping or removal.  
       
  - **CSS modularity:** Assess the size and structure of CSS files. Recommend breaking large files into logical modules (one per component or page). Move animations and global tokens to dedicated files (as in the example globals.css/animations.css)[[8]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L15-L25).  
       
  - **Component & data modularity:** Locate large React/Vue/Svelte components and suggest splitting them into smaller, focused components. Move mock data and configuration into separate JSON or config files. Replace hard‑coded values with constants or WordPress‑style config objects.  
       
  - **Section styles & JSON alignment:** Where prototypes use Figma section styles, ensure that corresponding JSON or theme definitions exist to replicate them in WordPress. Recommend converting static styles into JSON definitions that can be reused.  
       
### **4. Reporting**
     
- Each sub‑prompt writes a short report in `/reports/audits/` with findings and recommendations for the specific audit. Use markdown headings and bullet lists for clarity. Always cite relevant lines from the guidelines or research articles.  
     
- After all sub‑prompts run for a repository, the orchestrator compiles a **consolidated audit report** `AUDIT_REPORT_<repo>.md` summarising high‑impact issues and cross‑referencing individual reports. Include a section for **Shared issues across repositories**, noting patterns that appear in multiple codebases (e.g. repeated CSS patterns or component structures).  
     
### **5. Task list generation**
     
- Only after writing the consolidated reports for *all* repositories should the orchestrator generate `TASKS_<repo>.md` files and a global `TASKS_ALL.md`. Each task should be actionable, ordered by priority and include an owner/assignee placeholder. Tasks might include "Refactor Header component into reusable pattern," "Migrate Tailwind utility classes to BEM with WordPress tokens," or "Split globals.css into theme-base.css, theme-light.css, etc."  
     
- The tasks should map directly back to the audit findings and cite the report lines where the issue was identified.

## **Sub-Prompts to Execute**

1. **Memory Optimization:** `sub-prompt_woocommerce-memory-optimization.md`
   - Figma memory usage analysis
   - Asset optimization (images, SVGs, fonts)
   - Component modularization
   - Code structure improvements

2. **CSS Architecture Audit:** `sub-prompt_css-architecture-audit.md`
   - Includes 10 detailed audit prompts (A-J)
   - BEM compliance
   - WordPress alignment
   - Token-driven theming
   - Accessibility (WCAG 2.1 AA/AAA)

## **Output Structure**

```
/reports/audits/
├── YYYY-MM-DD_<repo>_memory.md              # Memory optimization findings
├── YYYY-MM-DD_<repo>_css-audit.md           # CSS architecture findings
├── YYYY-MM-DD_<repo>_consolidated.md        # Combined report
└── ...

/reports/
├── YYYY-MM-DD_<repo>_task-list.md           # Actionable tasks (generated LAST)
└── YYYY-MM-DD_all-repos_shared-issues.md    # Cross-repo patterns
```

## **Notes**

* Use UK English. Provide brief, clear explanations; avoid unnecessary hype or boilerplate.  
    
* Always respect the DRY principle: if multiple repositories share the same issue, document it once in the shared issues section.  
    
* Prioritise maintainability and WordPress compatibility. Use modular solutions unless a heavier tool yields a clear ROI.  
    
* Memory optimisation is a prerequisite: do not begin other audits until the memory bottlenecks have been addressed.

---

## **References**

[[1]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L65-L100) [[2]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L131-L155) [[7]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L210-L220) [[8]](https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md#L15-L25) css-architecture.md

https://github.com/lightspeedwp/ashmakeup/blob/main/src/guidelines/css-architecture.md

[[3]](https://github.com/lightspeedwp/Lsxdesigndemo/blob/73d8d414f927ef1ab6cee55a325cbc7fcec384c7/guidelines/README.md#L30-L45) [[4]](https://github.com/lightspeedwp/Lsxdesigndemo/blob/73d8d414f927ef1ab6cee55a325cbc7fcec384c7/guidelines/README.md#L96-L108) README.md

https://github.com/lightspeedwp/Lsxdesigndemo/blob/73d8d414f927ef1ab6cee55a325cbc7fcec384c7/guidelines/README.md

[[5]](https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem#:~:text=,Figma%20may%20not%20function%20properly) Figma Memory Limit \- This file is almost out of browser memory figma

https://www.linkedin.com/pulse/figma-memory-limit-file-almost-out-browser-nabeel-saleem

[[6]](https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc#:~:text=1,They%20Split%20You) Figma Memory Limits Will Eat You Alive If You Don't Manage Them Like a Pro

https://www.linkedin.com/pulse/figma-memory-limits-eat-you-alive-dont-manage-them-like-scott-ellis-peuqc
