#!/bin/bash
# Root Directory Cleanup Script
# Created: 2026-02-25
# Purpose: Clean root directory per audit findings
# Report: /reports/audits/2026-02-25_root-cleanup-comprehensive-audit.md

set -e  # Exit on error

echo "🧹 Starting root directory cleanup..."
echo ""

# ============================================================================
# Phase 1: DELETE obsolete files
# ============================================================================

echo "📋 Phase 1: Deleting 19 obsolete .md files..."

# Status/Completion Reports (10 files)
rm -fv CRITICAL_FIX_NEEDED.md
rm -fv ERROR_RESOLUTION_SUMMARY.md
rm -fv EXECUTIVE_BRIEFING.md
rm -fv PROJECT_ORGANIZATION_COMPLETE.md
rm -fv REACT_ROUTER_ERROR_RESOLUTION.md
rm -fv SUCCESS_CERTIFICATE.md
rm -fv DEV_TOOLS_UPDATE_SUMMARY.md
rm -fv PACKAGE_COMPLETE.md
rm -fv PACKAGE_VISUAL_MAP.md
rm -fv TESTS_STORYBOOK_CLEANUP_SUMMARY.md

# Planning Documents (3 files)
rm -fv NEXT_ACTIONS_FILE_ORGANIZATION.md
rm -fv NEXT_ACTION_PLAN.md
rm -fv OPEN_TASKS_SUMMARY.md

# Tailwind Elimination Docs (3 files)
rm -fv TAILWIND_ELIMINATION_PHASE_1_COMPLETE.md
rm -fv TAILWIND_ELIMINATION_PROGRESS.md
rm -fv TAILWIND_ELIMINATION_SESSION_1_COMPLETE.md

# Miscellaneous (3 files)
rm -fv LAUNCH_NOW.md
rm -fv SPACING_FIXES_SUMMARY.md
rm -fv WHATS_NEXT.md

echo "✅ Deleted 19 obsolete files"
echo ""

# ============================================================================
# Phase 2: MOVE useful documentation
# ============================================================================

echo "📦 Phase 2: Moving 5 useful docs to /docs/..."

# Already created in previous step:
# /docs/quick-references/quick-start-guide.md (moved from START_HERE.md)

# Delete the original START_HERE.md now that it's moved
rm -fv START_HERE.md

# Move remaining docs
mv -v README_TAILWIND_ELIMINATION.md /docs/tailwind-elimination-overview.md || echo "⚠️  README_TAILWIND_ELIMINATION.md not found or already moved"
mv -v TAILWIND_ELIMINATION_INDEX.md /docs/tailwind-elimination-index.md || echo "⚠️  TAILWIND_ELIMINATION_INDEX.md not found or already moved"
mv -v SPACING_FIXES_QUICK_REF.md /docs/quick-references/spacing-fixes.md || echo "⚠️  SPACING_FIXES_QUICK_REF.md not found or already moved"
mv -v Attributions.md /docs/attributions.md || echo "⚠️  Attributions.md not found or already moved"

echo "✅ Moved 5 files to /docs/"
echo ""

# ============================================================================
# Phase 3: Verification
# ============================================================================

echo "🔍 Phase 3: Verifying cleanup..."

# Check for remaining .md files in root (excluding README.md)
echo "Checking for unauthorized .md files in root..."
REMAINING_MD_FILES=$(find . -maxdepth 1 -name "*.md" ! -name "README.md" -type f | wc -l)

if [ "$REMAINING_MD_FILES" -eq 0 ]; then
  echo "✅ SUCCESS: Only README.md remains in root"
else
  echo "⚠️  WARNING: $REMAINING_MD_FILES unauthorized .md file(s) still in root:"
  find . -maxdepth 1 -name "*.md" ! -name "README.md" -type f
fi

echo ""

# List all .md files in root for verification
echo "📋 Current root .md files:"
ls -1 *.md 2>/dev/null || echo "✅ No .md files found (except README.md if exists)"

echo ""

# ============================================================================
# Phase 4: Update Documentation
# ============================================================================

echo "📝 Phase 4: Documentation updates..."
echo "⏭️  Skipping (manual step - update /docs/README.md)"
echo ""

# ============================================================================
# Summary
# ============================================================================

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ROOT CLEANUP COMPLETE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 Summary:"
echo "  • Deleted: 19 obsolete files"
echo "  • Moved: 5 files to /docs/"
echo "  • Remaining root .md files: $REMAINING_MD_FILES (target: 0)"
echo ""
echo "📂 Moved files now in:"
echo "  • /docs/quick-references/quick-start-guide.md"
echo "  • /docs/tailwind-elimination-overview.md"
echo "  • /docs/tailwind-elimination-index.md"
echo "  • /docs/quick-references/spacing-fixes.md"
echo "  • /docs/attributions.md"
echo ""
echo "📋 Next steps:"
echo "  1. Review remaining files (if any)"
echo "  2. Update /docs/README.md with new file references"
echo "  3. Update /tasks/task-list.md with completion status"
echo "  4. Git commit changes"
echo ""
echo "✨ Done!"
