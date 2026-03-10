#!/bin/bash

###############################################################################
# Orphaned Components Checker
# 
# Purpose: Identify components in /components/ui/ that are not imported anywhere
# Based on: /reports/audits/2026-02-25_root-directory-cleanup-audit.md
# Created: 2026-02-25
# 
# Usage: bash /scripts/check-orphaned-components.sh
# Output: /reports/audits/YYYY-MM-DD_orphaned-components-report.md
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get current date for report filename
REPORT_DATE=$(date +%Y-%m-%d)
REPORT_FILE="reports/audits/${REPORT_DATE}_orphaned-components-report.md"

echo -e "${BLUE}🔍 Checking for orphaned components in /components/ui/${NC}\n"

# Arrays to store results
declare -a USED_COMPONENTS
declare -a ORPHANED_COMPONENTS
declare -a MIGRATED_COMPONENTS

# Get all .tsx and .ts files in /components/ui/
UI_COMPONENTS=($(find components/ui -name "*.tsx" -o -name "*.ts" 2>/dev/null | sort))

echo -e "${BLUE}Found ${#UI_COMPONENTS[@]} files in /components/ui/${NC}\n"

# Check each component
TOTAL=${#UI_COMPONENTS[@]}
CURRENT=0

for COMPONENT_PATH in "${UI_COMPONENTS[@]}"; do
  CURRENT=$((CURRENT + 1))
  COMPONENT_FILE=$(basename "$COMPONENT_PATH")
  COMPONENT_NAME="${COMPONENT_FILE%.*}"
  
  echo -ne "${BLUE}Checking ($CURRENT/$TOTAL): $COMPONENT_FILE...${NC}\r"
  
  # Check if component is imported in /src/app/
  USAGE_COUNT=$(grep -r "from ['\"].*/$COMPONENT_FILE['\"]" src/app/ 2>/dev/null | wc -l || echo "0")
  USAGE_COUNT=$(echo "$USAGE_COUNT" | tr -d ' ')
  
  # Check if component exists in /src/app/components/blocks/
  MIGRATED_PATH=$(find src/app/components/blocks -name "$COMPONENT_FILE" 2>/dev/null | head -n 1)
  
  if [ -n "$MIGRATED_PATH" ]; then
    # Component has been migrated to /src/app/
    MIGRATED_COMPONENTS+=("$COMPONENT_FILE|$COMPONENT_PATH|$MIGRATED_PATH")
  elif [ "$USAGE_COUNT" -gt 0 ]; then
    # Component is still in use
    USED_COMPONENTS+=("$COMPONENT_FILE|$COMPONENT_PATH|$USAGE_COUNT")
  else
    # Component is orphaned
    ORPHANED_COMPONENTS+=("$COMPONENT_FILE|$COMPONENT_PATH")
  fi
done

echo -ne "\n\n"

# Display summary
echo -e "${GREEN}✅ Scan complete!${NC}\n"
echo -e "${BLUE}📊 Summary:${NC}"
echo "  Used components: ${#USED_COMPONENTS[@]}"
echo "  Migrated components: ${#MIGRATED_COMPONENTS[@]}"
echo "  Orphaned components: ${#ORPHANED_COMPONENTS[@]}"
echo ""

# Generate report
echo "Generating report: $REPORT_FILE"

cat > "$REPORT_FILE" << EOF
# Orphaned Components Report

**Date:** $REPORT_DATE  
**Scan Location:** \`/components/ui/\`  
**Scan Target:** \`/src/app/\`  
**Script:** \`/scripts/check-orphaned-components.sh\`

---

## 📊 Executive Summary

**Total files scanned:** $TOTAL  
**Used components:** ${#USED_COMPONENTS[@]}  
**Migrated components:** ${#MIGRATED_COMPONENTS[@]}  
**Orphaned components:** ${#ORPHANED_COMPONENTS[@]}

### Risk Assessment
- **Low Risk:** Deleting migrated components (already in /src/app/)
- **Medium Risk:** Deleting orphaned components (verify not used in tests)
- **High Risk:** None (used components will be kept)

---

## 🟢 Used Components (Still Needed)

These components are actively imported in \`/src/app/\` and should NOT be deleted:

| Component | Location | Usage Count |
|-----------|----------|-------------|
EOF

# Add used components to report
if [ ${#USED_COMPONENTS[@]} -eq 0 ]; then
  echo "| - | - | No used components found |" >> "$REPORT_FILE"
else
  for COMPONENT in "${USED_COMPONENTS[@]}"; do
    IFS='|' read -r NAME PATH COUNT <<< "$COMPONENT"
    echo "| \`$NAME\` | \`$PATH\` | $COUNT imports |" >> "$REPORT_FILE"
  done
fi

cat >> "$REPORT_FILE" << EOF

---

## 🔄 Migrated Components (Can Be Deleted)

These components have been migrated to \`/src/app/components/blocks/\` and can be safely deleted from \`/components/ui/\`:

| Component | Old Location | New Location | Action |
|-----------|--------------|--------------|--------|
EOF

# Add migrated components to report
if [ ${#MIGRATED_COMPONENTS[@]} -eq 0 ]; then
  echo "| - | - | - | No migrated components found |" >> "$REPORT_FILE"
else
  for COMPONENT in "${MIGRATED_COMPONENTS[@]}"; do
    IFS='|' read -r NAME OLD_PATH NEW_PATH <<< "$COMPONENT"
    echo "| \`$NAME\` | \`$OLD_PATH\` | \`$NEW_PATH\` | Delete old file |" >> "$REPORT_FILE"
  done
fi

cat >> "$REPORT_FILE" << EOF

**Recommended Actions:**
\`\`\`bash
# Delete migrated components (backup first!)
EOF

if [ ${#MIGRATED_COMPONENTS[@]} -gt 0 ]; then
  for COMPONENT in "${MIGRATED_COMPONENTS[@]}"; do
    IFS='|' read -r NAME OLD_PATH NEW_PATH <<< "$COMPONENT"
    echo "rm $OLD_PATH  # Migrated to $NEW_PATH" >> "$REPORT_FILE"
  done
else
  echo "# No migrated components to delete" >> "$REPORT_FILE"
fi

cat >> "$REPORT_FILE" << EOF
\`\`\`

---

## 🔴 Orphaned Components (No Imports Found)

These components are NOT imported anywhere in \`/src/app/\`. Verify they are not needed before deleting:

| Component | Location | Notes |
|-----------|----------|-------|
EOF

# Add orphaned components to report
if [ ${#ORPHANED_COMPONENTS[@]} -eq 0 ]; then
  echo "| - | - | No orphaned components found |" >> "$REPORT_FILE"
else
  for COMPONENT in "${ORPHANED_COMPONENTS[@]}"; do
    IFS='|' read -r NAME PATH <<< "$COMPONENT"
    echo "| \`$NAME\` | \`$PATH\` | Verify not used in tests |" >> "$REPORT_FILE"
  done
fi

cat >> "$REPORT_FILE" << EOF

**⚠️ IMPORTANT:** Before deleting orphaned components:
1. Search for usage in test files
2. Check if component is used in commented code
3. Verify component is not imported via barrel exports
4. Backup /components/ui/ directory first

**Recommended Actions:**
\`\`\`bash
# Backup first!
cp -r components/ui components/ui.backup

# Delete orphaned components (after verification)
EOF

if [ ${#ORPHANED_COMPONENTS[@]} -gt 0 ]; then
  for COMPONENT in "${ORPHANED_COMPONENTS[@]}"; do
    IFS='|' read -r NAME PATH <<< "$COMPONENT"
    echo "# rm $PATH  # Verify first!" >> "$REPORT_FILE"
  done
else
  echo "# No orphaned components to delete" >> "$REPORT_FILE"
fi

cat >> "$REPORT_FILE" << EOF
\`\`\`

---

## 🔍 Detailed Findings

### Used Components Details
EOF

# Add detailed usage for each used component
if [ ${#USED_COMPONENTS[@]} -gt 0 ]; then
  for COMPONENT in "${USED_COMPONENTS[@]}"; do
    IFS='|' read -r NAME PATH COUNT <<< "$COMPONENT"
    echo "" >> "$REPORT_FILE"
    echo "#### \`$NAME\`" >> "$REPORT_FILE"
    echo "**Location:** \`$PATH\`  " >> "$REPORT_FILE"
    echo "**Usage Count:** $COUNT  " >> "$REPORT_FILE"
    echo "**Imported By:**" >> "$REPORT_FILE"
    echo "\`\`\`" >> "$REPORT_FILE"
    grep -r "from ['\"].*/$NAME\." src/app/ 2>/dev/null | head -n 5 | sed 's/^/  /' >> "$REPORT_FILE" || echo "  (usage not found)" >> "$REPORT_FILE"
    echo "\`\`\`" >> "$REPORT_FILE"
  done
else
  echo "" >> "$REPORT_FILE"
  echo "> No used components found" >> "$REPORT_FILE"
fi

cat >> "$REPORT_FILE" << EOF

---

## ✅ Validation Checklist

After cleanup:
- [ ] Backup \`/components/ui/\` directory
- [ ] Delete migrated components
- [ ] Verify build works: \`npm run build\`
- [ ] Verify dev server: \`npm run dev\`
- [ ] Test critical pages
- [ ] Check for broken imports
- [ ] Update task list with completion status

---

## 📋 Next Steps

1. **Review this report** - Verify findings
2. **Backup components** - \`cp -r components/ui components/ui.backup\`
3. **Delete migrated components** - Safe to remove (already in /src/)
4. **Verify orphaned components** - Check test files
5. **Delete confirmed orphaned** - After verification
6. **Verify build** - Ensure nothing broke
7. **Update task list** - Mark Task #12 complete

---

**Report Generated:** $REPORT_DATE  
**Script Version:** 1.0  
**Related Task:** /tasks/task-list.md (Task #12)
EOF

echo -e "${GREEN}✅ Report generated: $REPORT_FILE${NC}\n"

# Display findings
if [ ${#ORPHANED_COMPONENTS[@]} -gt 0 ]; then
  echo -e "${YELLOW}⚠️  Found ${#ORPHANED_COMPONENTS[@]} orphaned components${NC}"
  echo "Review $REPORT_FILE for details"
fi

if [ ${#MIGRATED_COMPONENTS[@]} -gt 0 ]; then
  echo -e "${BLUE}ℹ️  Found ${#MIGRATED_COMPONENTS[@]} migrated components (safe to delete)${NC}"
fi

if [ ${#USED_COMPONENTS[@]} -gt 0 ]; then
  echo -e "${GREEN}✅ Found ${#USED_COMPONENTS[@]} components still in use (keep these)${NC}"
fi

echo ""
echo -e "${BLUE}📖 Full report: $REPORT_FILE${NC}"
