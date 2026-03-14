#!/bin/bash
#
# Production Verification Script
# Runs all quality checks before deployment
#

set -e  # Exit on error

echo "🔍 PlayPocket Production Verification"
echo "======================================"
echo ""

# 1. ESLint Check
echo "1️⃣  Running ESLint..."
npx eslint src/ --ext .ts,.tsx --max-warnings 0 || {
  echo "❌ ESLint failed. Fix errors before proceeding."
  exit 1
}
echo "✅ ESLint passed"
echo ""

# 2. TypeScript Check
echo "2️⃣  Running TypeScript type check..."
npx tsc --noEmit || {
  echo "❌ TypeScript errors found. Fix before proceeding."
  exit 1
}
echo "✅ TypeScript passed"
echo ""

# 3. Check for console.log in production
echo "3️⃣  Checking for console.log statements..."
if grep -r "console.log" src/app/ --exclude-dir=node_modules --exclude-dir=debug --exclude-dir=developer; then
  echo "❌ console.log found in production code"
  exit 1
fi
echo "✅ No console.log in production code"
echo ""

# 4. Check for 'var' declarations
echo "4️⃣  Checking for 'var' declarations..."
if grep -r "var " src/app/ --exclude=ImageWithFallback.tsx | grep -v "//"; then
  echo "❌ 'var' declarations found (except protected files)"
  exit 1
fi
echo "✅ No 'var' declarations (modern code)"
echo ""

# 5. Build test
echo "5️⃣  Testing production build..."
npm run build || {
  echo "❌ Build failed"
  exit 1
}
echo "✅ Build successful"
echo ""

# 6. Check bundle size
echo "6️⃣  Analyzing bundle size..."
if [ -d "build" ]; then
  BUILD_SIZE=$(du -sh build | cut -f1)
  echo "📦 Build size: $BUILD_SIZE"
else
  echo "⚠️  Build directory not found"
fi
echo ""

# Success!
echo "=============================================="
echo "✅ All verification checks passed!"
echo "🚀 Ready for production deployment"
echo "=============================================="
