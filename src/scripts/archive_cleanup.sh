#!/bin/bash

# Create archive directories
mkdir -p /tasks/archive/completed
mkdir -p /reports/archive/2026-02
mkdir -p /reports/archive/2026-03

# Archive task lists
echo "Archiving completed tasks..."
mv /tasks/BATCH_4_PLAN.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/BREADCRUMBS_CLEANUP_COMPLETE.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/BREADCRUMBS_CLEANUP_STATUS.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/BREADCRUMBS_CONSOLIDATION_PLAN.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/COMPLETE_TAILWIND_ELIMINATION_PACKAGE.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/CURRENT_STATUS.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/DASHBOARD_INTEGRATION_SUMMARY.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/FINAL_PACKAGE_SUMMARY.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/METRICS_DASHBOARD.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/NEXT_PRIORITIES.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/P1_PERFORMANCE_COMPLETE_STATUS.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/PACKAGE_UPDATE_SUMMARY.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/PERFORMANCE_OPTIMIZATION_STATUS.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/PLAN.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/AUTOMATION_SETUP_GUIDE.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/CODE_REVIEW_CHECKLIST.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/DEPLOYMENT_CHECKLIST.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/DEVELOPER_DECISION_TREE.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/LAUNCH_CHECKLIST.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/MIGRATION_EXAMPLES.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/PROGRESS_TRACKER.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/QUICK_REFERENCE_CARD.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/QUICK_START_TAILWIND_ELIMINATION.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/QUICK_TEST_CHECKLIST.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/READY_TO_DEPLOY_SUMMARY.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/RETROSPECTIVE_TEMPLATE.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/TAILWIND_AUDIT_SUMMARY.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/TAILWIND_ELIMINATION_FAQ.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/TEAM_COMMUNICATION_TEMPLATES.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/TEMPLATE_GUIDELINES_PROGRESS.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/TEST_DASHBOARD_INTEGRATION.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/TROUBLESHOOTING_PLAYBOOK.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/ULTIMATE_PACKAGE_SUMMARY.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/dev-tools-update-task-list.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/funky-redesign-plan.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/root-cleanup-tasks.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/tailwind-css-elimination-tasks.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/plan.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/reports-cleanup.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/css-architecture-remediation.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/css-architecture-data-integrity-remediation.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/data-types-remediation.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/guidelines-remediation.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/performance-optimization-plan.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/stylesheet-architecture-migration-tasks.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/systematic-template-prompt.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/template-guidelines-batch-plan.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/templates-remediation.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/blocks-guidelines-gaps.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/parts-guidelines-gaps.md /tasks/archive/completed/ 2>/dev/null
mv /tasks/patterns-guidelines-gaps.md /tasks/archive/completed/ 2>/dev/null

# Archive reports
echo "Archiving completed reports..."
# February reports
mv /reports/2026-02-24_*.md /reports/archive/2026-02/ 2>/dev/null
mv /reports/2026-02-25_*.md /reports/archive/2026-02/ 2>/dev/null
mv /reports/SESSION_SUMMARY_2026-01-13.md /reports/archive/2026-02/ 2>/dev/null

# March reports (older than recent)
mv /reports/2026-03-03_*.md /reports/archive/2026-03/ 2>/dev/null
mv /reports/2026-03-04_*.md /reports/archive/2026-03/ 2>/dev/null

echo "Cleanup complete!"
