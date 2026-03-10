## **Memory Optimisation Prompt – WooCommerce Demo**

### **Summary**

* **Purpose and Value:** Optimise the Figma‑Make prototype for the WooCommerce Demo project by proactively reducing memory usage and structuring the codebase for reusability. Figma’s WebAssembly rendering is capped at about **2 GB per browser tab**, so large files with many pages will slow performance[\[1\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=way%20to%20find%20out%20how,that%20percentage%20seems%20as%20a). A memory‑efficient, modular design also makes it easier to reuse components and maintain consistency across projects.  
    
* **Risks and Constraints:** Failing to manage memory results in slow file loading, out‑of‑memory warnings and crashes. Hidden layers, oversized images, complex vectors and excessive component variants are common culprits[\[2\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=off%20when%20you%27re%20done,Replace%20variants%20with). Over‑optimisation can remove necessary design context, so always keep user flows intact.  
    
* **Next Step:** Follow the actions below to audit the prototype, optimise assets and code, document findings in /reports/, then create a task list. Respect the existing project architecture (imports, blocks/patterns/parts, WordPress BEM CSS) and never mix Tailwind or inline styles. Move hard‑coded values into config files to promote portability.

### **Actions**

1. **Monitor memory usage and identify problem areas**  
     
2. In Figma, open **Main menu → View → Memory usage** to display the memory meter[\[1\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=way%20to%20find%20out%20how,that%20percentage%20seems%20as%20a). Use **Manage memory → Show memory in layers panel** to see which pages, layers or components consume the most memory[\[3\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=also%20click%20,via%20Figma%29%3A%20%E2%9E%8A%20Break).  
     
3. Note pages approaching the 2 GB per‑tab limit; these need to be split into smaller files or pages[\[2\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=off%20when%20you%27re%20done,Replace%20variants%20with). Document memory percentages and offending layers in your report.  
     
4. Clear local cache if needed and restart Figma to ensure measurements are accurate.  
     
5. **Split large files and rationalise pages**  
     
6. Avoid having all wireframes, components and screens in one “franken‑file”; this quickly grows beyond the memory cap[\[4\]](https://uxdesign.cc/how-to-reduce-figma-memory-usage-974684c84b5c#:~:text=1,pages). Create separate files: e.g., one for the component library, one for final templates and another for experiments.  
     
7. Within each file, use multiple pages to isolate flows; Figma only loads the active page, reducing memory usage.  
     
8. For the codebase, mirror this structure: break large React components and CSS files into modules located under /src/app/components/blocks/, /patterns/ and /templates/ to match the WordPress block architecture.  
     
9. **Clean up layers, variants and assets**  
     
10. Delete hidden or duplicated layers; hidden layers still consume memory[\[5\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=off%20when%20you%27re%20done,%E2%9E%8C).  
      
11. Flatten complex SVGs and vector shapes to reduce the number of nodes[\[6\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=layers%20you%20don%27t%20need%20and,Replace%20variants%20with). Use the vector boolean or flatten selection tool in Figma before importing.  
      
12. Trim the number of component variants; use Boolean properties instead of dozens of variants[\[7\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=memory%20use,For%20more%20information%20from%20Figma). This also simplifies the generated React components.  
      
13. Compress images before importing. Use PNG or JPG only at required dimensions; prefer WebP for photographs. Within the code, store images in /src/app/imports/images/, name them descriptively and include dimensions (e.g., hero-banner-1920x1080.jpg) and compress them as recommended[\[8\]](https://github.com/lightspeedwp/Woocommercedemo/blob/390fcc6d210b41fea0ec965ddb0e02cb59ed0808/src/guidelines/IMPORTS_GUIDELINES.md#L512-L518). Avoid loading the same image multiple times; create a wrapper component that centralises image imports.  
      
14. Consolidate fonts and icons. Use only the required font weights (e.g., inter-400 and inter-700) and import via CSS @font-face in /src/styles/ as per the import guidelines. For SVG icons, import the path data via relative paths (without .svg) and render via \<svg\>\<path d={path}/\>\</svg\>[\[9\]](https://github.com/lightspeedwp/Woocommercedemo/blob/390fcc6d210b41fea0ec965ddb0e02cb59ed0808/src/guidelines/IMPORTS_GUIDELINES.md#L196-L225).  
      
15. **Refactor components and data for reuse**  
      
16. Identify repeated UI patterns (e.g., product cards, hero sections, navigation menus) and convert them into modular **blocks**, **patterns** and **parts**. Place WordPress‑aligned BEM classes on elements (e.g., .woocommerce-product-card\_\_image) to maintain semantic structure.  
      
17. Break large React components into smaller ones. Move business logic and API calls into /src/app/utils/ or /hooks/ to keep components declarative. Use config files in /src/app/constants/ for hard‑coded values like API endpoints, currency symbols or theme settings.  
      
18. Divide monolithic CSS files. Instead of a single frontpage.css, create smaller files per block or pattern (e.g., /src/styles/blocks/product-card.css, /src/styles/patterns/hero.css) and import them into globals.css. Align CSS variables with WordPress theme.json (spacing, colour, typography) and adopt the spacing scale described in the guidelines.  
      
19. Separate mock data. Split large JSON data sets into domain‑specific files (products, categories, posts) and import only what a component needs. For dynamic data, write functions that fetch or generate sample records, ensuring they are pure and easily reused.  
      
20. **Document and report**  
      
21. After the optimisation audit, write a detailed report in /reports/audits/YYYY-MM-DD\_woocommercedemo\_memory.md. Summarise memory measurements, problematic layers, the steps taken to reduce usage, and any code refactoring performed.  
      
22. Only after the report is saved should you create a task list in /tasks/task-list.md. Group tasks by priority (e.g., immediate memory fixes, refactoring, future improvements) and link back to the report.  
      
23. Maintain the orchestrator workflow: **prompt → audit → report → tasks**, and follow the repository’s file placement rules to avoid clutter.

### **Notes**

* Use the **Figma memory meter** regularly to ensure the file stays below the 2 GB limit[\[1\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=way%20to%20find%20out%20how,that%20percentage%20seems%20as%20a). Toggling memory visibility on layers may slow Figma temporarily, so use it sparingly[\[10\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=also%20click%20,%E2%AD%90%20If%20Figma).  
    
* When compressing images, strip EXIF data and resize to the exact display dimensions; heavy images are a primary cause of memory bloat[\[8\]](https://github.com/lightspeedwp/Woocommercedemo/blob/390fcc6d210b41fea0ec965ddb0e02cb59ed0808/src/guidelines/IMPORTS_GUIDELINES.md#L512-L518). Avoid duplicating the same image across multiple components – instead, centralise imports and pass props.  
    
* Always use the project’s **WordPress/WooCommerce CSS patterns** (BEM classes, CSS variables) to ensure consistency and theme compatibility. Avoid Tailwind classes and inline styles altogether.  
    
* Breaking files and components into smaller units not only reduces memory usage but also improves code maintainability and encourages reuse across LightSpeed projects.

---

[\[1\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=way%20to%20find%20out%20how,that%20percentage%20seems%20as%20a) [\[2\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=off%20when%20you%27re%20done,Replace%20variants%20with) [\[3\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=also%20click%20,via%20Figma%29%3A%20%E2%9E%8A%20Break) [\[5\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=off%20when%20you%27re%20done,%E2%9E%8C) [\[6\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=layers%20you%20don%27t%20need%20and,Replace%20variants%20with) [\[7\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=memory%20use,For%20more%20information%20from%20Figma) [\[10\]](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu#:~:text=also%20click%20,%E2%AD%90%20If%20Figma) How much memory is my Figma file consuming? | Muhammad Bilal

[https://www.linkedin.com/posts/empathybilal\_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu](https://www.linkedin.com/posts/empathybilal_how-much-memory-is-my-figma-file-consuming-activity-7157964367454519298-TRSu)

[\[4\]](https://uxdesign.cc/how-to-reduce-figma-memory-usage-974684c84b5c#:~:text=1,pages) How to reduce Figma memory usage. Follow these 4 tips to reduce memory… | by Anna Rzepka | UX Collective

[https://uxdesign.cc/how-to-reduce-figma-memory-usage-974684c84b5c](https://uxdesign.cc/how-to-reduce-figma-memory-usage-974684c84b5c)

[\[8\]](https://github.com/lightspeedwp/Woocommercedemo/blob/390fcc6d210b41fea0ec965ddb0e02cb59ed0808/src/guidelines/IMPORTS_GUIDELINES.md#L512-L518) [\[9\]](https://github.com/lightspeedwp/Woocommercedemo/blob/390fcc6d210b41fea0ec965ddb0e02cb59ed0808/src/guidelines/IMPORTS_GUIDELINES.md#L196-L225) IMPORTS\_GUIDELINES.md

[https://github.com/lightspeedwp/Woocommercedemo/blob/390fcc6d210b41fea0ec965ddb0e02cb59ed0808/src/guidelines/IMPORTS\_GUIDELINES.md](https://github.com/lightspeedwp/Woocommercedemo/blob/390fcc6d210b41fea0ec965ddb0e02cb59ed0808/src/guidelines/IMPORTS_GUIDELINES.md)  