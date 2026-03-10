#!/bin/bash

# Pre-commit Hook: Tailwind CSS Detection
# Purpose: Prevent commits with Tailwind utility classes
# Installation: Copy to .git/hooks/pre-commit and chmod +x
# Usage: Runs automatically on git commit

set -e

echo "🔍 Pre-commit: Checking for Tailwind CSS violations..."
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Get staged TypeScript files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(tsx|ts)$' || true)

if [ -z "$STAGED_FILES" ]; then
  echo -e "${BLUE}ℹ️  No TypeScript files staged, skipping Tailwind check${NC}"
  exit 0
fi

echo -e "${BLUE}📄 Checking staged files:${NC}"
echo "$STAGED_FILES"
echo ""

# Tailwind patterns (simplified for pre-commit speed)
TAILWIND_PATTERN='\b(text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)|font-(thin|light|normal|medium|semibold|bold|black)|p-[0-9]+|px-[0-9]+|py-[0-9]+|m-[0-9]+|mx-[0-9]+|my-[0-9]+|mb-[0-9]+|mt-[0-9]+|gap-[0-9]+|flex-col|flex-row|grid-cols-[0-9]+|text-gray-[0-9]+|bg-gray-[0-9]+|bg-white|bg-black|max-w-|space-y-|space-x-|rounded|shadow|border-gray|hover:|dark:)\b'

VIOLATIONS=0
VIOLATION_FILES=""

# Check each staged file
for file in $STAGED_FILES; do
  if [ -f "$file" ]; then
    # Search for className with Tailwind patterns
    matches=$(grep -n "className=\"[^\"]*" "$file" | grep -E "$TAILWIND_PATTERN" || true)
    
    if [ -n "$matches" ]; then
      VIOLATIONS=1
      VIOLATION_FILES="$VIOLATION_FILES\n  - $file"
      
      echo -e "${RED}❌ VIOLATIONS: $file${NC}"
      echo ""
      
      # Show first 3 violations
      echo "$matches" | head -n 3 | while IFS= read -r line; do
        line_num=$(echo "$line" | cut -d: -f1)
        content=$(echo "$line" | cut -d: -f2- | sed 's/^[[:space:]]*//')
        echo -e "  ${YELLOW}Line $line_num:${NC} ${content:0:80}..."
      done
      echo ""
    fi
  fi
done

if [ $VIOLATIONS -eq 0 ]; then
  echo -e "${GREEN}✅ Pre-commit passed: No Tailwind violations${NC}"
  echo ""
  exit 0
else
  echo ""
  echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${RED}❌ COMMIT BLOCKED: Tailwind CSS violations detected${NC}"
  echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""
  echo -e "${YELLOW}Files with violations:${NC}"
  echo -e "$VIOLATION_FILES"
  echo ""
  echo -e "${BLUE}📖 How to fix:${NC}"
  echo ""
  echo "1. Replace Tailwind utilities with WordPress BEM classes"
  echo "2. See: /guidelines/Guidelines.md (Section 4.1)"
  echo "3. See: /tasks/QUICK_START_TAILWIND_ELIMINATION.md"
  echo "4. Example: /guidelines/blocks/woocommerce/ProductCard.md (v3.0)"
  echo ""
  echo -e "${BLUE}🔧 Need help?${NC}"
  echo ""
  echo "Run full audit: ./scripts/lint-tailwind.sh"
  echo "Read audit: /reports/audits/2026-02-24_tailwind-css-elimination-audit.md"
  echo ""
  echo -e "${YELLOW}⚠️  To bypass this check (NOT recommended):${NC}"
  echo "git commit --no-verify"
  echo ""
  exit 1
fi
