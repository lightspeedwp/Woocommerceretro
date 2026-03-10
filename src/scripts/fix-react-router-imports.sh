#!/bin/bash

# Fix React Router Imports
# Replaces all 'react-router-dom' imports with 'react-router'
# 
# Usage: bash scripts/fix-react-router-imports.sh

echo "🔄 Replacing 'react-router-dom' with 'react-router' in all TypeScript files..."

# Find all .tsx and .ts files and replace react-router-dom with react-router
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i.bak \
  -e "s/from 'react-router-dom'/from 'react-router'/g" \
  -e 's/from "react-router-dom"/from "react-router"/g' \
  {} \;

# Also fix test files
find tests -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i.bak \
  -e "s/from 'react-router-dom'/from 'react-router'/g" \
  -e 's/from "react-router-dom"/from "react-router"/g' \
  {} \;

# Remove backup files
find src tests -type f -name "*.bak" -delete

echo "✅ Done! All react-router-dom imports have been replaced with react-router"
echo "📝 Please verify the changes and test your application"
