#!/bin/bash

# Git Hooks Setup Script
# Purpose: Install pre-commit hook for Tailwind detection
# Usage: ./scripts/setup-hooks.sh

set -e

echo "🔧 Setting up Git hooks for Tailwind CSS detection..."
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check if .git directory exists
if [ ! -d ".git" ]; then
  echo "❌ Error: .git directory not found"
  echo "Run this script from the project root"
  exit 1
fi

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Copy pre-commit hook
echo -e "${BLUE}📄 Installing pre-commit hook...${NC}"

if [ -f ".git/hooks/pre-commit" ]; then
  echo -e "${YELLOW}⚠️  Pre-commit hook already exists${NC}"
  echo ""
  read -p "Overwrite existing hook? (y/N) " -n 1 -r
  echo ""
  
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Skipping pre-commit hook installation"
    echo ""
  else
    cp scripts/pre-commit-tailwind.sh .git/hooks/pre-commit
    chmod +x .git/hooks/pre-commit
    echo -e "${GREEN}✅ Pre-commit hook installed (overwrote existing)${NC}"
    echo ""
  fi
else
  cp scripts/pre-commit-tailwind.sh .git/hooks/pre-commit
  chmod +x .git/hooks/pre-commit
  echo -e "${GREEN}✅ Pre-commit hook installed${NC}"
  echo ""
fi

# Make lint script executable
echo -e "${BLUE}🔧 Making lint script executable...${NC}"
chmod +x scripts/lint-tailwind.sh
echo -e "${GREEN}✅ Lint script ready${NC}"
echo ""

# Test the hook
echo -e "${BLUE}🧪 Testing pre-commit hook...${NC}"
echo ""

if .git/hooks/pre-commit 2>/dev/null; then
  echo -e "${GREEN}✅ Pre-commit hook test passed${NC}"
else
  echo -e "${YELLOW}⚠️  Pre-commit hook test detected violations (expected if Tailwind still present)${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ Git hooks setup complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${BLUE}📋 What was installed:${NC}"
echo ""
echo "  1. Pre-commit hook → .git/hooks/pre-commit"
echo "     (Automatically runs on 'git commit')"
echo ""
echo "  2. Lint script → scripts/lint-tailwind.sh"
echo "     (Manual scan: ./scripts/lint-tailwind.sh)"
echo ""
echo -e "${BLUE}🔍 How it works:${NC}"
echo ""
echo "  • Every 'git commit' will scan staged .tsx files"
echo "  • Detects Tailwind utility classes"
echo "  • Blocks commit if violations found"
echo "  • Provides fix instructions"
echo ""
echo -e "${BLUE}🚫 To bypass (NOT recommended):${NC}"
echo ""
echo "  git commit --no-verify"
echo ""
echo -e "${BLUE}🧪 Test manually:${NC}"
echo ""
echo "  ./scripts/lint-tailwind.sh"
echo ""
echo -e "${GREEN}Happy WordPress-aligned coding! ✨${NC}"
echo ""
