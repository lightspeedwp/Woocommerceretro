#!/bin/bash

# Template Data Wiring Audit Script
# Verifies all templates:
# 1. Import data from /src/app/data/ (no hardcoded content)
# 2. Use Layout wrapper
# 3. Are connected to routes in /App.tsx

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
TOTAL_TEMPLATES=0
TEMPLATES_WITH_DATA=0
TEMPLATES_WITHOUT_DATA=0
TEMPLATES_WITH_LAYOUT=0
TEMPLATES_WITHOUT_LAYOUT=0
TEMPLATES_WITH_ROUTE=0
TEMPLATES_WITHOUT_ROUTE=0

echo -e "${BLUE}========================================"
echo "Template Data Wiring Audit"
echo "========================================${NC}"
echo ""

# Template directory
TEMPLATE_DIR="./src/app/components/templates"

# Get all template files
TEMPLATES=$(find "$TEMPLATE_DIR" -maxdepth 1 -name "*.tsx" -type f | sort)

# Arrays to store results
declare -a NO_DATA_IMPORTS=()
declare -a NO_LAYOUT=()
declare -a NO_ROUTE=()
declare -a VERIFIED_TEMPLATES=()

echo -e "${BLUE}Phase 1: Checking Data Imports${NC}"
echo "------------------------------------------------"

for template in $TEMPLATES; do
  FILENAME=$(basename "$template")
  ((TOTAL_TEMPLATES++))
  
  # Check for data imports from /src/app/data/ or ../../data/
  if grep -q "from ['\"].*\/data\/" "$template" || \
     grep -q "from ['\"]@\/data\/" "$template"; then
    ((TEMPLATES_WITH_DATA++))
    echo -e "${GREEN}✓${NC} $FILENAME — has data imports"
  else
    ((TEMPLATES_WITHOUT_DATA++))
    NO_DATA_IMPORTS+=("$FILENAME")
    echo -e "${YELLOW}⚠${NC} $FILENAME — NO data imports"
  fi
done

echo ""
echo -e "${BLUE}Phase 2: Checking Layout Wrapper${NC}"
echo "------------------------------------------------"

for template in $TEMPLATES; do
  FILENAME=$(basename "$template")
  
  # Check for <Layout> wrapper or Layout import
  if grep -q "<Layout" "$template" || \
     grep -q "import.*Layout.*from" "$template"; then
    ((TEMPLATES_WITH_LAYOUT++))
    echo -e "${GREEN}✓${NC} $FILENAME — uses Layout wrapper"
  else
    # Check if it's a special template that doesn't need Layout
    if [[ "$FILENAME" == "AccountLayout.tsx" ]] || \
       [[ "$FILENAME" == "PageLivePreview.tsx" ]] || \
       [[ "$FILENAME" == "PageCheckout.tsx" ]] || \
       [[ "$FILENAME" == "SocialRedirect.tsx" ]]; then
      echo -e "${BLUE}ℹ${NC} $FILENAME — special template (no Layout needed)"
    else
      ((TEMPLATES_WITHOUT_LAYOUT++))
      NO_LAYOUT+=("$FILENAME")
      echo -e "${YELLOW}⚠${NC} $FILENAME — NO Layout wrapper"
    fi
  fi
done

echo ""
echo -e "${BLUE}Phase 3: Checking Route Connections${NC}"
echo "------------------------------------------------"

# Read App.tsx route definitions
APP_ROUTES=$(cat "./App.tsx")

for template in $TEMPLATES; do
  FILENAME=$(basename "$template" .tsx)
  
  # Check if template name appears in App.tsx routes
  if echo "$APP_ROUTES" | grep -q "$FILENAME"; then
    ((TEMPLATES_WITH_ROUTE++))
    echo -e "${GREEN}✓${NC} $FILENAME — connected to route"
  else
    # Check if it's a special template that doesn't need a route
    if [[ "$FILENAME" == "AccountLayout" ]] || \
       [[ "$FILENAME" == "AccountDashboardWidgets" ]]; then
      echo -e "${BLUE}ℹ${NC} $FILENAME — component (not routed)"
    else
      ((TEMPLATES_WITHOUT_ROUTE++))
      NO_ROUTE+=("$FILENAME")
      echo -e "${YELLOW}⚠${NC} $FILENAME — NOT connected to route"
    fi
  fi
done

echo ""
echo -e "${BLUE}========================================"
echo "Summary"
echo "========================================${NC}"
echo ""
echo "Total Templates: $TOTAL_TEMPLATES"
echo ""
echo -e "${GREEN}Data Imports:${NC} $TEMPLATES_WITH_DATA / $TOTAL_TEMPLATES"
echo -e "${GREEN}Layout Wrapper:${NC} $TEMPLATES_WITH_LAYOUT / $TOTAL_TEMPLATES"
echo -e "${GREEN}Route Connections:${NC} $TEMPLATES_WITH_ROUTE / $TOTAL_TEMPLATES"
echo ""

# Report issues
if [ ${#NO_DATA_IMPORTS[@]} -gt 0 ]; then
  echo -e "${YELLOW}Templates WITHOUT Data Imports (${#NO_DATA_IMPORTS[@]}):${NC}"
  printf '  - %s\n' "${NO_DATA_IMPORTS[@]}"
  echo ""
fi

if [ ${#NO_LAYOUT[@]} -gt 0 ]; then
  echo -e "${YELLOW}Templates WITHOUT Layout Wrapper (${#NO_LAYOUT[@]}):${NC}"
  printf '  - %s\n' "${NO_LAYOUT[@]}"
  echo ""
fi

if [ ${#NO_ROUTE[@]} -gt 0 ]; then
  echo -e "${YELLOW}Templates WITHOUT Route Connection (${#NO_ROUTE[@]}):${NC}"
  printf '  - %s\n' "${NO_ROUTE[@]}"
  echo ""
fi

# Verification status
if [ ${#NO_DATA_IMPORTS[@]} -eq 0 ] && \
   [ ${#NO_LAYOUT[@]} -eq 0 ] && \
   [ ${#NO_ROUTE[@]} -eq 0 ]; then
  echo -e "${GREEN}✅ ALL VERIFICATION CHECKS PASSED${NC}"
  exit 0
else
  echo -e "${YELLOW}⚠️  SOME VERIFICATION CHECKS FAILED${NC}"
  exit 1
fi
