#!/bin/bash
#
# Fix All React Router Imports
# 
# This script replaces all instances of 'react-router-dom' with 'react-router'
# in TypeScript and TSX files throughout the codebase.
#
# Usage: bash scripts/fix-all-router-imports.sh

echo "=========================================="
echo "Fixing React Router Imports"
echo "=========================================="
echo ""

# Counter for fixed files
fixed_count=0

# Find all .tsx and .ts files and replace react-router-dom with react-router
find src/app/components -type f \( -name "*.tsx" -o -name "*.ts" \) | while read file; do
  if grep -q "react-router-dom" "$file"; then
    echo "Fixing: $file"
    sed -i.bak "s/'react-router-dom'/'react-router'/g" "$file"
    sed -i.bak 's/"react-router-dom"/"react-router"/g' "$file"
    rm "${file}.bak"
    ((fixed_count++))
  fi
done

# Also check components at root level
find components -type f \( -name "*.tsx" -o -name "*.ts" \) 2>/dev/null | while read file; do
  if grep -q "react-router-dom" "$file"; then
    echo "Fixing: $file"
    sed -i.bak "s/'react-router-dom'/'react-router'/g" "$file"
    sed -i.bak 's/"react-router-dom"/"react-router"/g' "$file"
    rm "${file}.bak"
    ((fixed_count++))
  fi
done

echo ""
echo "=========================================="
echo "✅ Fix Complete!"
echo "=========================================="
echo ""
echo "All 'react-router-dom' imports have been replaced with 'react-router'"
echo ""
