#!/bin/bash

# check-unused-css-variables.sh
# Checks which CSS variables in theme-variables.css are unused in the codebase
# Usage: bash scripts/check-unused-css-variables.sh

echo "========================================="
echo "CSS Variables Usage Audit"
echo "========================================="
echo ""
echo "Checking all variables in /src/styles/theme-variables.css..."
echo ""

# Extract all CSS variable names from theme-variables.css
VARIABLES=$(grep -oE '\-\-[a-z\-]+' /src/styles/theme-variables.css | sort -u)

UNUSED_COUNT=0
USED_COUNT=0

# Array to store unused variables
declare -a UNUSED_VARS

# Check each variable for usage in the codebase
while IFS= read -r VAR; do
  # Search for the variable in CSS and TSX files
  # Exclude the theme-variables.css file itself (that's where they're defined)
  USAGE_COUNT=$(grep -r "var($VAR)" /src/styles/ /src/app/ 2>/dev/null | grep -v "theme-variables.css" | wc -l)
  
  if [ "$USAGE_COUNT" -eq 0 ]; then
    echo "❌ UNUSED: $VAR"
    UNUSED_VARS+=("$VAR")
    ((UNUSED_COUNT++))
  else
    echo "✅ USED ($USAGE_COUNT times): $VAR"
    ((USED_COUNT++))
  fi
done <<< "$VARIABLES"

echo ""
echo "========================================="
echo "Summary"
echo "========================================="
echo "Total Variables: $((USED_COUNT + UNUSED_COUNT))"
echo "✅ Used: $USED_COUNT"
echo "❌ Unused: $UNUSED_COUNT"
echo ""

if [ "$UNUSED_COUNT" -gt 0 ]; then
  echo "========================================="
  echo "Unused Variables (Ready for Deletion)"
  echo "========================================="
  for VAR in "${UNUSED_VARS[@]}"; do
    echo "$VAR"
  done
  echo ""
  echo "To remove these, delete their definitions from /src/styles/theme-variables.css"
fi
