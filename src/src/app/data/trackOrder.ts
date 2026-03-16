/**
 * Track Order — Shared Mock Data
 *
 * Centralised content for the order tracking page.
 * Tracking steps, help links, and hero copy all live here
 * so the template remains data-driven.
 *
 * @module data/trackOrder
 */

import React from 'react';
import { CheckCircle, Cube as Box, Truck, MapPin, Package, Question as HelpCircle, Clock } from '../utils/phosphor-compat';

/* ── Types ───────────────────────────────────────────────────────────────── */

// @typedef {Object} TrackingStep
// @property {string} id
// @property {string} label
// @property {string} description
// @property {React.ReactNode} icon
// @property {string} [date]
// @property {boolean} done
// @property {boolean} [current]

// @typedef {Object} HelpCard
// @property {string} to
// @property {React.ReactNode} icon
// @property {string} title
// @property {string} text

/* ── Hero Copy ───────────────────────────────────────────────────────────── */

const trackOrderHero = {
  badge: 'Order tracking',
  title: 'Track your order',
  subtitle:
    'Enter your order number and email address to see real-time shipping updates.',
};

/* ── Mock Tracking Steps ─────────────────────────────────────────────────── */

const mockTrackingSteps = [
  {
    id: 'confirmed',
    label: 'Order confirmed',
    description: 'Your order has been placed and payment received.',
    icon: React.createElement(CheckCircle, { size: 20 }),
    date: 'Feb 18, 2026 at 10:32 am',
    done: true,
  },
  {
    id: 'processing',
    label: 'Processing',
    description: 'We are picking and packing your items.',
    icon: React.createElement(Box, { size: 20 }),
    date: 'Feb 18, 2026 at 2:15 pm',
    done: true,
  },
  {
    id: 'shipped',
    label: 'Shipped',
    description: 'Your package is on its way.',
    icon: React.createElement(Truck, { size: 20 }),
    date: 'Feb 19, 2026 at 9:05 am',
    done: true,
    current: true,
  },
  {
    id: 'out-for-delivery',
    label: 'Out for delivery',
    description: 'Estimated arrival today.',
    icon: React.createElement(MapPin, { size: 20 }),
    done: false,
  },
  {
    id: 'delivered',
    label: 'Delivered',
    description: 'Package delivered successfully.',
    icon: React.createElement(Package, { size: 20 }),
    done: false,
  },
];

/* ── Help Cards ──────────────────────────────────────────────────────────── */

const trackOrderHelpCards = [
  {
    to: '/help',
    icon: React.createElement(HelpCircle, { size: 24 }),
    title: 'Help center',
    text: 'Browse answers to common shipping questions.',
  },
  {
    to: '/shipping-returns',
    icon: React.createElement(Package, { size: 24 }),
    title: 'Shipping & returns',
    text: 'View our shipping times, costs, and return policy.',
  },
  {
    to: '/contact',
    icon: React.createElement(Clock, { size: 24 }),
    title: 'Contact support',
    text: 'Get in touch with our team for personalised help.',
  },
];

/* ── Mock Result Data ────────────────────────────────────────────────────── */

const mockTrackingResult = {
  statusBadge: 'In transit',
  estimatedDelivery: 'Feb 22, 2026',
};

export { trackOrderHero, mockTrackingSteps, trackOrderHelpCards, mockTrackingResult };