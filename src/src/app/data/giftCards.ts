/**
 * Gift Cards — Shared Mock Data
 *
 * Centralised content for the gift card builder page.
 * All strings, denominations, occasion thumbnails, features,
 * and hero copy live here so the template stays data-driven.
 *
 * @module data/giftCards
 */

import React from 'react';
import { Envelope as Mail, Heart, CreditCard, Bag as ShoppingBag } from '../utils/phosphor-compat';

/* ── Hero Copy ───────────────────────────────────────────────────────────── */

const giftCardHero = {
  badge: 'The perfect gift',
  title: 'Gift cards',
  subtitle:
    'Give the gift of choice. Our digital gift cards can be sent instantly and redeemed on anything in the store.',
  primaryCta: 'Choose an amount',
  secondaryCta: 'Browse products',
};

/* ── Denominations ───────────────────────────────────────────────────────── */

const giftCardDenominations = [
  { id: 'gc-25', amount: 25 },
  { id: 'gc-50', amount: 50, popular: true },
  { id: 'gc-75', amount: 75 },
  { id: 'gc-100', amount: 100, popular: true },
  { id: 'gc-150', amount: 150 },
  { id: 'gc-250', amount: 250 },
];

/* ── Occasions ───────────────────────────────────────────────────────────── */

const giftCardOccasions = [
  {
    label: 'Birthday',
    image:
      'https://images.unsplash.com/photo-1761296152332-88ada22be48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwY2FrZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MTc5MzgwNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'Thank you',
    image:
      'https://images.unsplash.com/photo-1767694934233-a277dc685f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFuayUyMHlvdSUyMGdyYXRpdHVkZSUyMGZsb3dlcnMlMjBnaWZ0fGVufDF8fHx8MTc3MTc5MzgwNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'Congratulations',
    image:
      'https://images.unsplash.com/photo-1643537243683-a61ba2e77cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25ncmF0dWxhdGlvbnMlMjBjb25mZXR0aSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MTc5MzExM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'Just because',
    image:
      'https://images.unsplash.com/photo-1766864498722-c9499760c901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmFwcGVkJTIwZ2lmdCUyMHByZXNlbnQlMjBzdXJwcmlzZXxlbnwxfHx8fDE3NzE3OTM4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'Holiday',
    image:
      'https://images.unsplash.com/photo-1767458877083-a03bae61925d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpZGF5JTIwY2hyaXN0bWFzJTIwZmVzdGl2ZSUyMGRlY29yYXRpb25zfGVufDF8fHx8MTc3MTc5MzgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    label: 'Wedding',
    image:
      'https://images.unsplash.com/photo-1769374072073-bc358149ecee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBlbGVnYW50JTIwYm91cXVldHxlbnwxfHx8fDE3NzE3OTM4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

/* ── Fallback card preview image ─────────────────────────────────────────── */

const GIFT_CARD_IMAGE =
  'https://images.unsplash.com/photo-1614850715776-a749a85b4144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZ2lmdCUyMGNhcmQlMjBjb2xvcmZ1bCUyMGdyYWRpZW50fGVufDF8fHx8MTc3MTc5MzgxMHww&ixlib=rb-4.1.0&q=80&w=1080';

/* ── Features ────────────────────────────────────────────────────────────── */

const giftCardFeatures = [
  {
    icon: <Mail size={24} />,
    title: 'Instant delivery',
    description: 'Send by email or print at home — arrives in seconds.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Add a personal note',
    description: 'Include a heartfelt message with every gift card.',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Never expires',
    description: 'No expiry dates, no hidden fees. Use at any time.',
  },
  {
    icon: <ShoppingBag size={24} />,
    title: 'Redeemable on anything',
    description: 'Valid across our entire product catalogue.',
  },
];

/* ── CTA Copy ────────────────────────────────────────────────────────────── */

const giftCardCta = {
  title: 'Not sure what to give?',
  text: 'A gift card lets them pick exactly what they love from our entire collection.',
  btnLabel: 'Get a gift card',
};

export { giftCardHero, giftCardDenominations, giftCardOccasions, GIFT_CARD_IMAGE, giftCardFeatures, giftCardCta };