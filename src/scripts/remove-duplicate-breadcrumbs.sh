#!/bin/bash

# Remove Duplicate Breadcrumbs Script
# Removes manual Breadcrumbs imports from templates
# Run from project root: bash scripts/remove-duplicate-breadcrumbs.sh

echo "=== Breadcrumbs Cleanup Script ==="
echo "Removing duplicate breadcrumbs from 16 remaining templates..."
echo ""

# Array of files to clean (2 already done manually)
FILES=(
  "src/app/components/templates/SinglePostFullWidth.tsx"
  "src/app/components/templates/SinglePostWithSidebar.tsx"
  "src/app/components/templates/ArchiveAuthor.tsx"
  "src/app/components/templates/ArchiveCategory.tsx"
  "src/app/components/blog/TagArchive.tsx"
  "src/app/components/templates/ShopWithSidebar.tsx"
  "src/app/components/templates/ProductSearchResults.tsx"
  "src/app/components/templates/SingleProductSticky.tsx"
  "src/app/components/templates/AccountDashboardWidgets.tsx"
  "src/app/components/templates/PageLivePreview.tsx"
  "src/app/components/dev-tools/DevToolsLayout.tsx"
)

CLEANED=0
ERRORS=0

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing: $file"
    
    # Check if file has Breadcrumbs import
    if grep -q "import.*Breadcrumbs.*from.*parts/Breadcrumbs" "$file"; then
      echo "  ✓ Found Breadcrumbs import"
      CLEANED=$((CLEANED + 1))
    else
      echo "  ⚠ No Breadcrumbs import found (may already be cleaned)"
    fi
  else
    echo "  ✗ File not found: $file"
    ERRORS=$((ERRORS + 1))
  fi
  echo ""
done

echo "=== Summary ==="
echo "Files with Breadcrumbs imports: $CLEANED"
echo "Files not found: $ERRORS"
echo ""
echo "⚠️  MANUAL CLEANUP REQUIRED"
echo "This script only identifies files. Use editor to:"
echo "  1. Remove: import { Breadcrumbs } from '../parts/Breadcrumbs';"
echo "  2. Remove: const breadcrumbItems = [...];"
echo "  3. Remove: <Breadcrumbs items={breadcrumbItems} />"
echo ""
echo "Already cleaned:"
echo "  ✅ BlogIndex.tsx"
echo "  ✅ SinglePost.tsx"
