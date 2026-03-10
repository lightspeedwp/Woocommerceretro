/**
 * Loyalty Program — Shared Mock Data
 *
 * Centralised data for the loyalty / rewards dashboard so that
 * Dashboard.tsx, PageLoyalty.tsx, and AccountLoyalty.tsx all stay
 * in sync automatically.
 *
 * @module data/loyalty
 */

import * as ReactModule from 'react';
import { Star, Medal as Award, Crown, Lightning as Zap, Gift, ShoppingBag, ChatCircle as MessageSquare, Users } from '@phosphor-icons/react';

var React = ReactModule.default || ReactModule;

/* ── Types ───────────────────────────────────────────────────────────────── */

// @typedef {Object} LoyaltyUser
// @property {string} name
// @property {string} tier
// @property {number} points
// @property {string} nextTier
// @property {number} nextTierThreshold
// @property {number} lifetimePoints
// @property {string} memberSince

// @typedef {Object} ActivityItem
// @property {string} id
// @property {string} action
// @property {number} points
// @property {'earn' | 'redeem'} type
// @property {string} date
// @property {React.ReactNode} icon

// @typedef {Object} QuickAction
// @property {string} label
// @property {string} description
// @property {React.ReactNode} icon
// @property {string} link

/* ── Mock User ───────────────────────────────────────────────────────────── */

var loyaltyUser = {
  name: 'Alex Chen',
  tier: 'Silver',
  points: 1120,
  nextTier: 'Gold',
  nextTierThreshold: 1500,
  lifetimePoints: 3840,
  memberSince: 'March 2024',
};

/* ── Tier Icon Map ───────────────────────────────────────────────────────── */

var tierIcons = {
  Bronze: React.createElement(Star, { size: 20 }),
  Silver: React.createElement(Award, { size: 20 }),
  Gold: React.createElement(Crown, { size: 20 }),
  Platinum: React.createElement(Zap, { size: 20 }),
};

/* ── Recent Activity ─────────────────────────────────────────────────────── */

var recentActivity = [
  {
    id: 'a1',
    action: 'Purchased Premium Headphones',
    points: 120,
    type: 'earn',
    date: 'Feb 18, 2026',
    icon: React.createElement(ShoppingBag, { size: 16 }),
  },
  {
    id: 'a2',
    action: 'Wrote a product review',
    points: 50,
    type: 'earn',
    date: 'Feb 14, 2026',
    icon: React.createElement(MessageSquare, { size: 16 }),
  },
  {
    id: 'a3',
    action: 'Redeemed $10 coupon',
    points: -500,
    type: 'redeem',
    date: 'Feb 10, 2026',
    icon: React.createElement(Gift, { size: 16 }),
  },
  {
    id: 'a4',
    action: 'Referred a friend',
    points: 200,
    type: 'earn',
    date: 'Feb 5, 2026',
    icon: React.createElement(Users, { size: 16 }),
  },
  {
    id: 'a5',
    action: 'Purchased Ceramic Vase Set',
    points: 65,
    type: 'earn',
    date: 'Jan 30, 2026',
    icon: React.createElement(ShoppingBag, { size: 16 }),
  },
  {
    id: 'a6',
    action: 'Birthday bonus',
    points: 100,
    type: 'earn',
    date: 'Jan 15, 2026',
    icon: React.createElement(Star, { size: 16 }),
  },
];

/* ── Quick Actions ───────────────────────────────────────────────────────── */

var quickActions = [
  {
    label: 'Shop to earn',
    description: 'Earn 1.5 pts per $1 at Silver tier',
    icon: React.createElement(ShoppingBag, { size: 22 }),
    link: '/shop',
  },
  {
    label: 'Write a review',
    description: 'Earn 50 pts per review',
    icon: React.createElement(MessageSquare, { size: 22 }),
    link: '/reviews',
  },
  {
    label: 'Refer a friend',
    description: 'Give $10, get 200 pts',
    icon: React.createElement(Users, { size: 22 }),
    link: '/account/details',
  },
  {
    label: 'Redeem points',
    description: '250 pts = $5 off',
    icon: React.createElement(Gift, { size: 22 }),
    link: '/rewards',
  },
];

/* ── Derived Helpers ─────────────────────────────────────────────────────── */

function getLoyaltyProgress(user) {
  if (!user) user = loyaltyUser;
  var pct = Math.round((user.points / user.nextTierThreshold) * 100);
  return {
    progressPct: pct,
    pointsRemaining: user.nextTierThreshold - user.points,
  };
}

export { loyaltyUser, tierIcons, recentActivity, quickActions, getLoyaltyProgress };