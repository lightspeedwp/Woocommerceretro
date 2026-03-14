#!/usr/bin/env bash

##############################################################################
# CSS Stability Testing Script
# Tests current globals-minimal.css configuration for iframe stability
##############################################################################

set -euo pipefail

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}CSS Stability Testing${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check globals-minimal.css exists
if [[ ! -f "styles/globals-minimal.css" ]]; then
  echo -e "${RED}✗ ERROR: styles/globals-minimal.css not found${NC}"
  exit 1
fi

echo -e "${GREEN}✓ Found globals-minimal.css${NC}"
echo ""

# Count active imports
ACTIVE_IMPORTS=$(grep -c "^@import" styles/globals-minimal.css || echo 0)
COMMENTED_IMPORTS=$(grep -c "^.*@import.*\.css\".*;" styles/globals-minimal.css | grep -v "^@import" || echo 0)

echo -e "${BLUE}Import Statistics:${NC}"
echo -e "  Active imports:    ${GREEN}${ACTIVE_IMPORTS}${NC}"
echo -e "  Commented imports: ${YELLOW}${COMMENTED_IMPORTS}${NC}"
echo ""

# Verify critical batches
echo -e "${BLUE}Verifying Critical Batches:${NC}"

declare -a CRITICAL_FILES=(
  "src/styles/theme-variables.css"
  "src/styles/critical.css"
  "src/styles/retro-theme.css"
  "src/styles/layout-grid.css"
  "src/styles/utilities.css"
)

MISSING_COUNT=0

for FILE in "${CRITICAL_FILES[@]}"; do
  if [[ -f "$FILE" ]]; then
    echo -e "  ${GREEN}✓${NC} $FILE"
  else
    echo -e "  ${RED}✗${NC} $FILE ${RED}(MISSING)${NC}"
    ((MISSING_COUNT++))
  fi
done

echo ""

if [[ $MISSING_COUNT -gt 0 ]]; then
  echo -e "${RED}✗ CRITICAL: $MISSING_COUNT critical files missing${NC}"
  exit 1
fi

echo -e "${GREEN}✓ All critical files present${NC}"
echo ""

# Check for syntax errors in main.tsx
echo -e "${BLUE}Checking Entry Point:${NC}"

if [[ -f "src/main.tsx" ]]; then
  if grep -q "globals-minimal.css" "src/main.tsx"; then
    echo -e "  ${GREEN}✓${NC} main.tsx imports globals-minimal.css"
  else
    echo -e "  ${YELLOW}⚠${NC} main.tsx may not be importing globals-minimal.css"
  fi
  
  if grep -q "StrictMode" "src/main.tsx"; then
    echo -e "  ${GREEN}✓${NC} StrictMode enabled"
  else
    echo -e "  ${YELLOW}⚠${NC} StrictMode may be disabled"
  fi
else
  echo -e "  ${RED}✗${NC} src/main.tsx not found"
  exit 1
fi

echo ""

# Verify batch organization
echo -e "${BLUE}Verifying Batch Organization:${NC}"

declare -a BATCH_MARKERS=(
  "BATCH 1: CRITICAL PATH"
  "BATCH 2: ROOT THEME FILES"
  "BATCH 3: LAYOUT + NAVIGATION"
  "BATCH 4: DESIGN BLOCKS"
  "BATCH 5: FORMS BLOCKS"
  "BATCH 6: PRODUCT + CART + CHECKOUT"
  "BATCH 7: FEEDBACK + OVERLAY"
  "BATCH 8: RETRO SECTIONS"
  "BATCH 9: TEXT, DISPLAY, SEARCH"
  "BATCH 10: EMBED, WIDGETS"
)

for MARKER in "${BATCH_MARKERS[@]}"; do
  if grep -q "$MARKER" styles/globals-minimal.css; then
    echo -e "  ${GREEN}✓${NC} $MARKER"
  else
    echo -e "  ${YELLOW}⚠${NC} $MARKER (not found, may be renamed)"
  fi
done

echo ""

# Check for common issues
echo -e "${BLUE}Checking for Common Issues:${NC}"

# Check for duplicate imports
DUPLICATES=$(grep "^@import" styles/globals-minimal.css | sort | uniq -d)
if [[ -n "$DUPLICATES" ]]; then
  echo -e "  ${RED}✗${NC} Duplicate imports found:"
  echo "$DUPLICATES"
  echo ""
else
  echo -e "  ${GREEN}✓${NC} No duplicate imports"
fi

# Check for missing semicolons
MISSING_SEMICOLONS=$(grep "^@import" styles/globals-minimal.css | grep -v ";$" || echo "")
if [[ -n "$MISSING_SEMICOLONS" ]]; then
  echo -e "  ${RED}✗${NC} Missing semicolons:"
  echo "$MISSING_SEMICOLONS"
  echo ""
else
  echo -e "  ${GREEN}✓${NC} All imports have semicolons"
fi

# Check for invalid paths (basic check)
INVALID_PATHS=$(grep "^@import" styles/globals-minimal.css | grep -v "\.css\";" || echo "")
if [[ -n "$INVALID_PATHS" ]]; then
  echo -e "  ${YELLOW}⚠${NC} Possible invalid paths (manual review needed):"
  echo "$INVALID_PATHS"
  echo ""
fi

echo ""

# Summary
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Summary${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo -e "Total active imports:    ${GREEN}${ACTIVE_IMPORTS}${NC}"
echo -e "Total commented imports: ${YELLOW}${COMMENTED_IMPORTS}${NC}"
echo -e "Total imports:           $((ACTIVE_IMPORTS + COMMENTED_IMPORTS))"
echo ""

if [[ $MISSING_COUNT -eq 0 ]] && [[ -z "$DUPLICATES" ]] && [[ -z "$MISSING_SEMICOLONS" ]]; then
  echo -e "${GREEN}✓ CSS configuration appears stable${NC}"
  echo ""
  echo -e "${BLUE}Next Steps:${NC}"
  echo "  1. Start Figma Make and load the application"
  echo "  2. Open browser console (F12)"
  echo "  3. Test critical routes (see /tasks/css-gradual-reenable-testing-plan.md)"
  echo "  4. Monitor console for IframeMessageAbortError"
  echo "  5. Verify retro styling renders correctly"
  echo "  6. If stable for 24 hours → proceed to Batch 9 uncommenting"
  echo ""
  exit 0
else
  echo -e "${RED}✗ Issues detected - review above warnings${NC}"
  echo ""
  exit 1
fi
