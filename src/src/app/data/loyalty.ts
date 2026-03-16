/**
 * Loyalty Program — Shared Mock Data
 *
 * Centralised data for the loyalty / rewards dashboard so that
 * Dashboard.tsx, PageLoyalty.tsx, and AccountLoyalty.tsx all stay
 * in sync automatically.
 *
 * @module data/loyalty
 */

import React from 'react';
import { Star, Medal as Award, Crown, Lightning as Zap, Gift, ShoppingBag, ChatCircle as MessageSquare, Users } from '../utils/phosphor-compat';

/* ── Mock User ───────────────────────────────────────────────────────────── */

const loyaltyUser = {
  name: 'Alex Chen',
  tier: 'Silver',
  points: 1120,
  nextTier: 'Gold',
  nextTierThreshold: 1500,
  lifetimePoints: 3840,
  memberSince: 'March 2024',
};

/* ── Tier Icon Map ───────────────────────────────────────────────────────── */

const tierIcons: Record<string, React.ReactNode> = {
  Bronze: <Star size={20} />,
  Silver: <Award size={20} />,
  Gold: <Crown size={20} />,
  Platinum: <Zap size={20} />,
};

/* ── Recent Activity ─────────────────────────────────────────────────────── */

const recentActivity = [
  {
    id: 'a1',
    action: 'Purchased Premium Headphones',
    points: 120,
    type: 'earn',
    date: 'Feb 18, 2026',
    icon: <ShoppingBag size={16} />,
  },
  {
    id: 'a2',
    action: 'Wrote a product review',
    points: 50,
    type: 'earn',
    date: 'Feb 14, 2026',
    icon: <MessageSquare size={16} />,
  },
  {
    id: 'a3',
    action: 'Redeemed $10 coupon',
    points: -500,
    type: 'redeem',
    date: 'Feb 10, 2026',
    icon: <Gift size={16} />,
  },
  {
    id: 'a4',
    action: 'Referred a friend',
    points: 200,
    type: 'earn',
    date: 'Feb 5, 2026',
    icon: <Users size={16} />,
  },
  {
    id: 'a5',
    action: 'Purchased Ceramic Vase Set',
    points: 65,
    type: 'earn',
    date: 'Jan 30, 2026',
    icon: <ShoppingBag size={16} />,
  },
  {
    id: 'a6',
    action: 'Birthday bonus',
    points: 100,
    type: 'earn',
    date: 'Jan 15, 2026',
    icon: <Star size={16} />,
  },
];

/* ── Quick Actions ───────────────────────────────────────────────────────── */

const quickActions = [
  {
    label: 'Shop to earn',
    description: 'Earn 1.5 pts per $1 at Silver tier',
    icon: <ShoppingBag size={22} />,
    link: '/shop',
  },
  {
    label: 'Write a review',
    description: 'Earn 50 pts per review',
    icon: <MessageSquare size={22} />,
    link: '/reviews',
  },
  {
    label: 'Refer a friend',
    description: 'Give $10, get 200 pts',
    icon: <Users size={22} />,
    link: '/account/details',
  },
  {
    label: 'Redeem points',
    description: '250 pts = $5 off',
    icon: <Gift size={22} />,
    link: '/rewards',
  },
];

/* ── Derived Helpers ─────────────────────────────────────────────────────── */

const getLoyaltyProgress = (user = loyaltyUser) => {
  const pct = Math.round((user.points / user.nextTierThreshold) * 100);
  return {
    progressPct: pct,
    pointsRemaining: user.nextTierThreshold - user.points,
  };
};

export { loyaltyUser, tierIcons, recentActivity, quickActions, getLoyaltyProgress };