#!/bin/bash

# find-hardcoded-css-values.sh
# Finds hardcoded CSS values that should use CSS variables
# Usage: bash scripts/find-hardcoded-css-values.sh > hardcoded-values-audit.txt

echo "========================================="
echo "Hardcoded CSS Values Audit"
echo "========================================="
echo ""
echo "Searching for hardcoded values in /src/styles/ that should use CSS variables..."
echo ""

# Pattern 1: Hardcoded hex colors
echo "===== PATTERN 1: Hardcoded Hex Colors ====="
echo ""
grep -rn "#[0-9a-fA-F]\{3,6\}" /src/styles/ --include="*.css" | grep -v "theme-variables.css" | grep -v "/* " | head -50
echo ""

# Pattern 2: Hardcoded px spacing
echo "===== PATTERN 2: Hardcoded Pixel Spacing ====="
echo ""
grep -rn ": [0-9]\+px" /src/styles/ --include="*.css" | grep -v "theme-variables.css" | grep -v "/* " | head -50
echo ""

# Pattern 3: Hardcoded border-radius
echo "===== PATTERN 3: Hardcoded Border Radius ====="
echo ""
grep -rn "border-radius: [0-9]" /src/styles/ --include="*.css" | grep -v "theme-variables.css" | head -30
echo ""

echo "========================================="
echo "Audit Complete"
echo "========================================="
