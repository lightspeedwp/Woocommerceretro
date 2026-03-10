#!/bin/bash

###############################################################################
# Root Directory Cleanup Script
# 
# Purpose: Clean up misplaced files from project root directory
# Based on: /reports/audits/2026-02-25_root-directory-cleanup-audit.md
# Created: 2026-02-25
# 
# Usage: bash /scripts/cleanup-root-directory.sh [--dry-run]
#        --dry-run: Show what would be moved without actually moving files
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check for dry-run flag
DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
  echo -e "${YELLOW}🔍 DRY RUN MODE - No files will be moved${NC}"
fi

# Function to move file safely
move_file() {
  local source="$1"
  local dest="$2"
  local reason="$3"
  
  if [ -f "$source" ]; then
    if [ "$DRY_RUN" = true ]; then
      echo -e "${BLUE}[DRY RUN]${NC} Would move: $source → $dest ($reason)"
    else
      mv "$source" "$dest"
      echo -e "${GREEN}✅${NC} Moved: $source → $dest ($reason)"
    fi
  else
    echo -e "${YELLOW}⚠️${NC}  Not found: $source (already moved or doesn't exist)"
  fi
}

# Function to create directory safely
create_dir() {
  local dir="$1"
  
  if [ ! -d "$dir" ]; then
    if [ "$DRY_RUN" = true ]; then
      echo -e "${BLUE}[DRY RUN]${NC} Would create directory: $dir"
    else
      mkdir -p "$dir"
      echo -e "${GREEN}✅${NC} Created directory: $dir"
    fi
  fi
}

echo -e "${BLUE}🧹 Starting root directory cleanup...${NC}\n"

###############################################################################
# PHASE 0: Create Archive Directories
###############################################################################

echo -e "${BLUE}📋 Phase 0: Creating archive directories...${NC}"

create_dir "reports/archive"
create_dir "reports/archive/fixes"
create_dir "tasks/archive"

echo -e "${GREEN}✅ Phase 0 complete${NC}\n"

###############################################################################
# PHASE 1: High Priority (Critical Cleanup)
###############################################################################

echo -e "${BLUE}📋 Phase 1: High priority cleanup...${NC}"

# Move high priority reports to archive
move_file "ERROR_RESOLUTION_SUMMARY.md" "reports/archive/" "Outdated error resolution"
move_file "DEV_TOOLS_UPDATE_SUMMARY.md" "reports/archive/" "Outdated dev tools update"
move_file "REACT_ROUTER_ERROR_RESOLUTION.md" "reports/archive/fixes/" "Old fix report"
move_file "TAILWIND_ELIMINATION_PHASE_1_COMPLETE.md" "reports/archive/" "Historical milestone"
move_file "OPEN_TASKS_SUMMARY.md" "tasks/archive/" "Superseded by task-list.md"

# Move active reference to guidelines
move_file "SPACING_FIXES_QUICK_REF.md" "guidelines/SPACING_QUICK_REFERENCE.md" "Active reference doc"

# Handle CRITICAL_FIX_NEEDED.md
if [ -f "CRITICAL_FIX_NEEDED.md" ]; then
  echo -e "${YELLOW}⚠️  Found CRITICAL_FIX_NEEDED.md - Please review manually${NC}"
  echo -e "${YELLOW}   If issue resolved → move to reports/archive/${NC}"
  echo -e "${YELLOW}   If still open → add to tasks/task-list.md${NC}"
fi

echo -e "${GREEN}✅ Phase 1 complete${NC}\n"

###############################################################################
# PHASE 2: Medium Priority (Status & Historical Docs)
###############################################################################

echo -e "${BLUE}📋 Phase 2: Medium priority cleanup...${NC}"

# Move status files to task archive
move_file "NEXT_ACTION_PLAN.md" "tasks/archive/" "Outdated action plan"
move_file "CURRENT_STATUS.md" "tasks/archive/" "Outdated status"
move_file "WHATS_NEXT.md" "tasks/archive/" "Superseded planning"
move_file "PLAN.md" "tasks/archive/" "Generic outdated plan"

# Move Tailwind elimination docs to report archive
move_file "EXECUTIVE_BRIEFING.md" "reports/archive/" "Historical briefing"
move_file "LAUNCH_NOW.md" "reports/archive/" "Historical launch doc"
move_file "TAILWIND_ELIMINATION_INDEX.md" "reports/archive/" "Superseded index"
move_file "TAILWIND_ELIMINATION_PROGRESS.md" "reports/archive/" "Superseded progress"
move_file "TAILWIND_ELIMINATION_SESSION_1_COMPLETE.md" "reports/archive/" "Historical milestone"
move_file "TESTS_STORYBOOK_CLEANUP_SUMMARY.md" "reports/archive/" "Historical cleanup"
move_file "SPACING_FIXES_SUMMARY.md" "reports/archive/" "Historical summary"
move_file "README_TAILWIND_ELIMINATION.md" "reports/archive/" "Historical reference"

echo -e "${GREEN}✅ Phase 2 complete${NC}\n"

###############################################################################
# PHASE 3: Low Priority (Historical Documentation)
###############################################################################

echo -e "${BLUE}📋 Phase 3: Low priority cleanup...${NC}"

# Move historical docs
move_file "SUCCESS_CERTIFICATE.md" "reports/archive/" "Historical milestone"
move_file "PACKAGE_COMPLETE.md" "reports/archive/" "Historical package doc"
move_file "PACKAGE_VISUAL_MAP.md" "reports/archive/" "Historical visual map"

echo -e "${GREEN}✅ Phase 3 complete${NC}\n"

###############################################################################
# VALIDATION
###############################################################################

echo -e "${BLUE}🔍 Validating cleanup...${NC}\n"

echo -e "${BLUE}Remaining .md files in root:${NC}"
if ls *.md 2>/dev/null; then
  echo ""
  echo -e "${YELLOW}ℹ️  Note: README.md, Attributions.md, and START_HERE.md should remain${NC}"
else
  echo -e "${GREEN}No .md files found in root (excluding essential docs)${NC}"
fi

echo ""
echo -e "${GREEN}✅ Root directory cleanup complete!${NC}\n"

if [ "$DRY_RUN" = false ]; then
  echo -e "${BLUE}📊 Next steps:${NC}"
  echo "1. Review remaining files in root directory"
  echo "2. Run: npm run build"
  echo "3. Run: npm run dev"
  echo "4. Verify all pages load correctly"
  echo "5. Check for broken links in documentation"
  echo "6. Update /tasks/task-list.md with completion status"
else
  echo -e "${YELLOW}🔍 This was a DRY RUN - no files were moved${NC}"
  echo "Run without --dry-run flag to execute cleanup"
fi

echo ""
