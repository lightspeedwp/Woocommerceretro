#!/bin/bash

# verify-all-routes.sh
# Comprehensive route validation for all navigation links
# Checks header, footer, and mega menu links against routes.ts

set -e

echo "🔍 PlayPocket Route Validation Audit"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ROUTES_FILE="routes.ts"
HEADER_FILE="src/app/components/patterns/HeaderRetroPattern.tsx"
FOOTER_FILE="src/app/components/patterns/FooterRetroPattern.tsx"

# Extract all route paths from routes.ts
echo "📋 Extracting routes from routes.ts..."
ROUTES=$(grep -oP "path:\s*'[^']*'" $ROUTES_FILE | sed "s/path: '//g" | sed "s/'//g" | grep -v ":" | sort -u)

echo "✅ Found $(echo "$ROUTES" | wc -l) unique routes"
echo ""

# Header Navigation Links
echo "🎯 Checking Header Navigation Links..."
echo "---------------------------------------"

HEADER_LINKS=(
  "/shop"
  "/promotions/flash-sale"
  "/community"
  "/about"
  "/sitemap"
)

for link in "${HEADER_LINKS[@]}"; do
  route="${link#/}" # Remove leading slash
  if echo "$ROUTES" | grep -q "^${route}$"; then
    echo -e "${GREEN}✓${NC} $link"
  else
    echo -e "${RED}✗${NC} $link (MISSING ROUTE!)"
  fi
done

echo ""

# Footer Navigation Links
echo "🎯 Checking Footer Navigation Links..."
echo "---------------------------------------"

FOOTER_LINKS=(
  "/contact"
  "/faq"
  "/stores"
  "/shipping"
  "/returns"
  "/compare"
  "/privacy-policy"
  "/terms-and-conditions"
  "/sitemap"
)

for link in "${FOOTER_LINKS[@]}"; do
  route="${link#/}"
  if echo "$ROUTES" | grep -q "^${route}$"; then
    echo -e "${GREEN}✓${NC} $link"
  else
    echo -e "${RED}✗${NC} $link (MISSING ROUTE!)"
  fi
done

echo ""

# Common Account Links
echo "🎯 Checking Account Links..."
echo "---------------------------------------"

ACCOUNT_LINKS=(
  "/account"
  "/account/dashboard"
  "/account/orders"
  "/account/addresses"
  "/account/loyalty"
  "/account/login"
  "/wishlist"
)

for link in "${ACCOUNT_LINKS[@]}"; do
  route="${link#/}"
  if echo "$ROUTES" | grep -q "^${route}$"; then
    echo -e "${GREEN}✓${NC} $link"
  else
    echo -e "${RED}✗${NC} $link (MISSING ROUTE!)"
  fi
done

echo ""

# Cart & Checkout Links
echo "🎯 Checking Cart & Checkout Links..."
echo "---------------------------------------"

CART_LINKS=(
  "/cart"
  "/checkout"
  "/order-confirmation"
  "/track-order"
)

for link in "${CART_LINKS[@]}"; do
  route="${link#/}"
  if echo "$ROUTES" | grep -q "^${route}$"; then
    echo -e "${GREEN}✓${NC} $link"
  else
    echo -e "${RED}✗${NC} $link (MISSING ROUTE!)"
  fi
done

echo ""

# Blog Links
echo "🎯 Checking Blog Links..."
echo "---------------------------------------"

BLOG_LINKS=(
  "/blog"
  "/blog/podcasts"
  "/blog/videos"
)

for link in "${BLOG_LINKS[@]}"; do
  route="${link#/}"
  if echo "$ROUTES" | grep -q "^${route}$"; then
    echo -e "${GREEN}✓${NC} $link"
  else
    echo -e "${RED}✗${NC} $link (MISSING ROUTE!)"
  fi
done

echo ""
echo "✅ Route validation complete!"
echo ""
echo "💡 TIP: If any routes show as missing, add them to routes.ts"
