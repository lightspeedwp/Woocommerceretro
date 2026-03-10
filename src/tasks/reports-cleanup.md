# Reports Cleanup Task List

**Source:** A3 Reports Cleanup Audit (2026-02-21)  
**Status:** NOT STARTED  
**Updated:** February 21, 2026  
**Cross-Reference:** `/prompts/funky-redesign-orchestrator.md`

---

## Phase 1: Archive Old Reports

- [x] **T3.1** Create `/reports/archive/` directory (completed — exists with `2026-02/` subdirectory and README)
- [x] **T3.2** Move all 22 reports dated before Feb 14, 2026 to `/reports/archive/` (indexed in `/reports/archive/2026-02/README.md`)
- [ ] **T3.3** Delete `SESSION_SUMMARY_2026-01-13.md` from reports root (non-compliant location)

## Phase 2: Rename Non-Compliant

- [ ] **T3.4** Rename `2026-02-19_AUDIT_REPORT_V6_css-architecture-data-integrity.md` to `2026-02-19_audit_css-architecture-data-integrity-v6.md`
- [ ] **T3.5** Delete superseded `2026-01-10_audit_mock-data-centralization.md` and `*-summary.md` (keep only FINAL)

## Phase 3: Update Documentation

- [ ] **T3.6** Update `/reports/README.md` with current report categories and new funky redesign audit reports
- [ ] **T3.7** Add entry for Phase 0 audit reports (8 files in `/reports/audits/2026-02-21-*.md`)

---

**Note:** This is the lowest-priority task file. Reports cleanup does not block any funky redesign work. Execute when convenient between implementation phases.