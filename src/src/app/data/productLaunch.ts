/**
 * Product Launch Sales Page Data
 * 
 * Content for the LongFormSalesPage template.
 * Adapted for "Woo Shop" context (The Ultimate Planner System).
 * 
 * @module data/productLaunch
 */

import { Lightning as Zap, Shield, Users, TrendUp as TrendingUp } from '@phosphor-icons/react';

export var productLaunchContent = {
  hero: {
    badge: 'Limited Time Offer - 50% Off',
    heading: 'Transform Your Productivity in 30 Days',
    subheading: 'Join 10,000+ creatives using our Ultimate Planner System to organize their life, streamline workflows, and achieve their goals.',
    primaryCta: 'Start Planning Today',
    secondaryCta: 'Watch Walkthrough',
    trust: [
      'Digital & Physical Versions',
      '30-Day Money-Back Guarantee',
      'Instant Access'
    ]
  },
  stats: [
    { value: '10,000+', label: 'Happy Planners' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '1M+', label: 'Tasks Completed' },
    { value: '24/7', label: 'Community Support' }
  ],
  problem: {
    heading: 'The Challenge',
    text: 'Juggling multiple notebooks, apps, and sticky notes shouldn\'t feel like a full-time job. Yet for most of us, staying organized is a chaotic mess.',
  },
  solution: {
    heading: 'The Solution',
    text: 'One cohesive system that brings everything together. Plan your days, track habits, and reflect on progress - all in one beautifully designed space.',
  },
  features: [
    {
      title: 'Smart Layouts',
      description: 'Scientifically designed pages that prioritize focus and reduce overwhelm.',
      icon: 'Zap'
    },
    {
      title: 'Premium Quality',
      description: '120gsm paper that resists bleed-through, bound in vegan leather.',
      icon: 'Shield'
    },
    {
      title: 'Community Access',
      description: 'Join a vibrant community of planners sharing tips and inspiration.',
      icon: 'Users'
    },
    {
      title: 'Goal Tracking',
      description: 'Dedicated sections for monthly, quarterly, and annual goal setting.',
      icon: 'TrendingUp'
    }
  ],
  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      content: 'This planner completely transformed how I work. I\'ve seen a massive increase in my creative output.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Entrepreneur',
      content: 'The best investment I\'ve made this year. The quality is unmatched and the layout makes total sense.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Student',
      content: 'Intuitive, beautiful, and exactly what I needed to stay on top of my studies.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    }
  ],
  pricing: {
    badge: 'Limited Time - 50% Off',
    heading: 'Special Launch Pricing',
    subheading: 'Lock in this exclusive bundle before it\'s gone',
    price: '$49',
    originalPrice: '$99',
    period: '/bundle',
    savings: 'Save $50 today',
    features: [
      'Physical Ultimate Planner (A5)',
      'Digital Planner (PDF for iPad)',
      'Access to Planning Workshop',
      'Printable Sticker Pack',
      'Exclusive Community Access'
    ],
    cta: 'Get The Bundle',
    guarantee: 'Free shipping worldwide • 30-day returns'
  },
  faq: {
    heading: 'Frequently Asked Questions',
    subheading: 'Everything you need to know',
    items: [
      {
        question: 'Is this a physical or digital product?',
        answer: 'This bundle includes BOTH! You get the physical A5 planner shipped to you, plus instant access to the digital version for your tablet.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes! We ship worldwide. Shipping is free for this launch bundle.'
      },
      {
        question: 'What paper quality is it?',
        answer: 'We use premium 120gsm paper that is fountain pen friendly and resistant to ghosting.'
      },
      {
        question: 'Can I return it if I don\'t like it?',
        answer: 'Absolutely. We offer a 30-day money-back guarantee. If you\'re not happy, just send it back for a full refund.'
      }
    ]
  },
  finalCta: {
    heading: 'Ready to Get Organized?',
    text: 'Join thousands of others organizing their life with the Ultimate Planner System',
    button: 'Get The Bundle Now',
    trust: [
      { icon: 'Shield', text: 'Secure Payment' },
      { icon: 'Truck', text: 'Free Shipping' },
      { icon: 'RefreshCcw', text: '30-Day Guarantee' }
    ]
  }
};