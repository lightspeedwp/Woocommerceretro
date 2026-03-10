#!/bin/bash

# Tailwind CSS Detection Script
# Purpose: Detect Tailwind utility classes in TypeScript files
# Usage: ./scripts/lint-tailwind.sh
# Exit: 1 if violations found, 0 if clean

set -e

echo "🔍 Scanning for Tailwind CSS violations..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track violations
VIOLATIONS=0
FILES_WITH_VIOLATIONS=0

# Tailwind utility patterns to detect
PATTERNS=(
  # Typography
  "text-xs|text-sm|text-base|text-lg|text-xl|text-2xl|text-3xl|text-4xl|text-5xl|text-6xl"
  "font-thin|font-light|font-normal|font-medium|font-semibold|font-bold|font-black"
  "italic|not-italic|uppercase|lowercase|capitalize|normal-case"
  "leading-\w+|tracking-\w+"
  "text-left|text-center|text-right|text-justify"
  
  # Spacing
  "p-\d+|px-\d+|py-\d+|pt-\d+|pr-\d+|pb-\d+|pl-\d+"
  "m-\d+|mx-\d+|my-\d+|mt-\d+|mr-\d+|mb-\d+|ml-\d+"
  "space-x-\d+|space-y-\d+"
  "gap-\d+|gap-x-\d+|gap-y-\d+"
  
  # Layout
  "flex|inline-flex|flex-row|flex-col|flex-wrap|flex-nowrap"
  "grid|inline-grid|grid-cols-\d+|grid-rows-\d+"
  "items-\w+|justify-\w+|place-\w+"
  
  # Colors
  "text-gray-\d+|text-white|text-black"
  "bg-gray-\d+|bg-white|bg-black"
  "border-gray-\d+|border-white|border-black"
  "text-red-\d+|text-blue-\d+|text-green-\d+|text-purple-\d+|text-yellow-\d+"
  "bg-red-\d+|bg-blue-\d+|bg-green-\d+|bg-purple-\d+|bg-yellow-\d+"
  
  # Borders & Radius
  "border|border-\d+|border-t|border-r|border-b|border-l"
  "rounded|rounded-\w+"
  
  # Sizing
  "w-\d+|w-full|w-screen|w-1/\d+"
  "h-\d+|h-full|h-screen|h-auto"
  "min-w-\d+|max-w-\w+"
  "min-h-\d+|max-h-\d+"
  
  # Effects
  "shadow|shadow-\w+|opacity-\d+"
  "transition|transition-\w+|duration-\d+"
  
  # Responsive & State
  "dark:|hover:|focus:|active:|disabled:"
)

# Combine patterns
PATTERN_REGEX=$(IFS='|'; echo "${PATTERNS[*]}")

# Find all TypeScript files
echo "📁 Scanning TypeScript files..."
echo ""

while IFS= read -r -d '' file; do
  # Skip node_modules and build directories
  if [[ "$file" == *"node_modules"* ]] || [[ "$file" == *"dist"* ]] || [[ "$file" == *"build"* ]]; then
    continue
  fi
  
  # Search for Tailwind patterns in className attributes
  matches=$(grep -n "className=\"[^\"]*\($PATTERN_REGEX\)" "$file" 2>/dev/null || true)
  
  if [ -n "$matches" ]; then
    FILES_WITH_VIOLATIONS=$((FILES_WITH_VIOLATIONS + 1))
    
    echo -e "${RED}❌ VIOLATIONS FOUND: $file${NC}"
    echo ""
    
    # Count violations in this file
    file_violations=$(echo "$matches" | wc -l | tr -d ' ')
    VIOLATIONS=$((VIOLATIONS + file_violations))
    
    # Show each violation
    while IFS= read -r line; do
      line_num=$(echo "$line" | cut -d: -f1)
      content=$(echo "$line" | cut -d: -f2-)
      
      echo -e "  ${YELLOW}Line $line_num:${NC}"
      echo "  $content"
      echo ""
    done <<< "$matches"
  fi
done < <(find ./src -name "*.tsx" -type f -print0 2>/dev/null)

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $VIOLATIONS -eq 0 ]; then
  echo -e "${GREEN}✅ SUCCESS: No Tailwind CSS violations found!${NC}"
  echo ""
  echo "All files are WordPress-aligned ✨"
  exit 0
else
  echo -e "${RED}❌ FAILURE: Found $VIOLATIONS Tailwind violations in $FILES_WITH_VIOLATIONS files${NC}"
  echo ""
  echo "📖 Guidelines: /guidelines/Guidelines.md (Section 4.1: NO TAILWIND CSS)"
  echo "📋 Audit Report: /reports/audits/2026-02-24_tailwind-css-elimination-audit.md"
  echo "✅ Task List: /tasks/tailwind-css-elimination-tasks.md"
  echo ""
  echo "Fix these violations before committing!"
  exit 1
fi
