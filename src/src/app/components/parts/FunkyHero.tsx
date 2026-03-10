/**
 * FunkyHero - Shared Hero Template Part
 *
 * Data-driven hero component with funky neon aesthetic.
 * All elements are optional -- omit a data field to hide that element.
 *
 * Optimized for Figma Make parser:
 * 1. No JSX (React.createElement only)
 * 2. No const, let, arrow functions, destructuring
 * 3. ASCII characters only
 *
 * @see /src/app/data/heroData.ts for data schema
 * @see /src/styles/sections/funky-hero.css for styles
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Sparkle, Storefront, Envelope, Heart, Question, PencilSimple, BookOpen, Leaf, Briefcase, Star, ShoppingCart, Lightning, Package, Users, Trophy, Globe, Megaphone, Ruler, Truck, ShieldCheck, FileText, Lifebuoy, ArrowCounterClockwise, Lightbulb, Wheelchair, Tag, Gift, CreditCard, ChartBar, Crown, Handshake, MagnifyingGlass, Headset, CurrencyDollar, CaretDown } from '@phosphor-icons/react';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as ImageFallbackModule from '../figma/ImageWithFallback';
import * as ReducedMotionHook from '../../hooks/usePrefersReducedMotion';

var useNavigate = ReactRouterModule.useNavigate;
var Button = ButtonsModule.Button;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;
var usePrefersReducedMotion = ReducedMotionHook.usePrefersReducedMotion;

/* Phosphor icon map -- avoids dynamic requires */
var iconMap = {
  Sparkle: Sparkle,
  Storefront: Storefront,
  Envelope: Envelope,
  Heart: Heart,
  Question: Question,
  PencilSimple: PencilSimple,
  BookOpen: BookOpen,
  Leaf: Leaf,
  Briefcase: Briefcase,
  Star: Star,
  ShoppingCart: ShoppingCart,
  Lightning: Lightning,
  Package: Package,
  Users: Users,
  Trophy: Trophy,
  Globe: Globe,
  Megaphone: Megaphone,
  Ruler: Ruler,
  Truck: Truck,
  ShieldCheck: ShieldCheck,
  FileText: FileText,
  Lifebuoy: Lifebuoy,
  ArrowCounterClockwise: ArrowCounterClockwise,
  Lightbulb: Lightbulb,
  Wheelchair: Wheelchair,
  Tag: Tag,
  Gift: Gift,
  CreditCard: CreditCard,
  ChartBar: ChartBar,
  Crown: Crown,
  Handshake: Handshake,
  MagnifyingGlass: MagnifyingGlass,
  Headset: Headset,
  CurrencyDollar: CurrencyDollar,
  CaretDown: CaretDown
};

/**
 * FunkyHero Component
 *
 * @param {Object} props
 * @param {Object} props.config - HeroConfig from heroData.ts
 * @param {string} [props.className] - Additional CSS class
 * @param {React.ReactNode} [props.children] - Extra content injected after actions
 */
export function FunkyHero(props) {
  var config = props.config;
  var extraClass = props.className || '';
  var children = props.children;

  var prefersReduced = usePrefersReducedMotion();
  var navigate = useNavigate();

  /* ── Derived values ── */
  var id = config.id || 'hero';
  var heightClass = config.height || 'large';
  var patternClass = config.pattern || 'centered';
  var alignClass = config.textAlign || 'center';
  var heroGraphic = config.heroGraphic || 'none';

  var rootClassName = [
    'funky-hero',
    'funky-hero--' + heightClass,
    'funky-hero--' + patternClass,
    'funky-hero--align-' + alignClass,
    config.backgroundImage ? 'funky-hero--has-bg' : '',
    extraClass
  ].filter(function(c) { return !!c; }).join(' ');

  /* ── Background image ── */
  var bgElement = null;
  if (config.backgroundImage) {
    bgElement = React.createElement(ImageWithFallback, {
      key: 'bg',
      src: config.backgroundImage,
      alt: '',
      className: 'funky-hero__bg',
      loading: 'eager'
    });
  }

  /* ── Colour / gradient base (inline style only for dynamic bg) ── */
  var baseStyle = {};
  if (config.backgroundColor) {
    baseStyle.backgroundColor = config.backgroundColor;
  }

  /* ── Overlay ── */
  var overlayStyle = {};
  if (config.backgroundGradient) {
    overlayStyle.background = config.backgroundGradient;
  }
  if (config.overlayOpacity !== undefined) {
    overlayStyle.opacity = config.overlayOpacity;
  }

  var overlayElement = React.createElement('div', {
    key: 'overlay',
    className: 'funky-hero__overlay',
    style: overlayStyle,
    'aria-hidden': 'true'
  });

  /* ── Animated orbs ── */
  var orbsElement = null;
  if (heroGraphic === 'orbs' && !prefersReduced) {
    orbsElement = [
      React.createElement('div', { key: 'orb1', className: 'funky-hero__orb funky-hero__orb--1', 'aria-hidden': 'true' }),
      React.createElement('div', { key: 'orb2', className: 'funky-hero__orb funky-hero__orb--2', 'aria-hidden': 'true' }),
      React.createElement('div', { key: 'orb3', className: 'funky-hero__orb funky-hero__orb--3', 'aria-hidden': 'true' })
    ];
  }

  /* ── Mesh gradient graphic ── */
  var meshElement = null;
  if (heroGraphic === 'mesh') {
    meshElement = React.createElement('div', {
      key: 'mesh',
      className: 'funky-hero__mesh',
      'aria-hidden': 'true'
    });
  }

  /* ── Badge ── */
  var badgeElement = null;
  if (config.badge) {
    var BadgeIcon = iconMap[config.badge.icon] || null;
    var badgeIconEl = BadgeIcon ? React.createElement(BadgeIcon, {
      key: 'icon',
      size: 14,
      weight: 'fill',
      className: 'funky-hero__badge-icon'
    }) : null;

    badgeElement = React.createElement('span', {
      key: 'badge',
      className: 'funky-hero__badge'
    }, [
      badgeIconEl,
      React.createElement('span', { key: 'text' }, config.badge.text)
    ]);
  }

  /* ── Title ── */
  var titleElement = React.createElement('h1', {
    key: 'title',
    className: 'funky-hero__title'
  }, config.title);

  /* ── Subtitle ── */
  var subtitleElement = null;
  if (config.subtitle) {
    subtitleElement = React.createElement('p', {
      key: 'subtitle',
      className: 'funky-hero__subtitle'
    }, config.subtitle);
  }

  /* ── Buttons ── */
  function handleButtonClick(btn) {
    return function() {
      if (btn && btn.href) {
        navigate(btn.href);
      }
    };
  }

  var btn1 = null;
  if (config.button1) {
    btn1 = React.createElement(Button, {
      key: 'btn1',
      variant: config.button1.variant || 'cta',
      size: 'lg',
      to: config.button1.href,
      className: 'funky-hero__btn funky-hero__btn--primary'
    }, config.button1.label);
  }

  var btn2 = null;
  if (config.button2) {
    btn2 = React.createElement(Button, {
      key: 'btn2',
      variant: config.button2.variant || 'outline',
      size: 'lg',
      to: config.button2.href,
      className: 'funky-hero__btn funky-hero__btn--secondary'
    }, config.button2.label);
  }

  var actionsElement = null;
  if (btn1 || btn2) {
    actionsElement = React.createElement('div', {
      key: 'actions',
      className: 'funky-hero__actions'
    }, [btn1, btn2]);
  }

  /* ── Stats ── */
  var statsElement = null;
  if (config.stats && config.stats.length > 0) {
    var statItems = config.stats.map(function(stat, idx) {
      return React.createElement('div', {
        key: 'stat-' + idx,
        className: 'funky-hero__stat'
      }, [
        React.createElement('span', { key: 'val', className: 'funky-hero__stat-value' }, stat.value),
        React.createElement('span', { key: 'lbl', className: 'funky-hero__stat-label' }, stat.label)
      ]);
    });

    statsElement = React.createElement('div', {
      key: 'stats',
      className: 'funky-hero__stats',
      'aria-label': 'Key statistics'
    }, statItems);
  }

  /* ── Scroll arrow ── */
  var scrollElement = null;
  if (config.showScrollArrow) {
    var ChevronDown = iconMap.CaretDown || "span";
    scrollElement = React.createElement('button', {
      key: 'scroll',
      className: 'funky-hero__scroll',
      'aria-label': 'Scroll down',
      type: 'button',
      onClick: function() {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    }, React.createElement(ChevronDown, { size: 28, weight: 'bold' }));
  }

  /* ── Content wrapper ── */
  var contentElement = React.createElement('div', {
    key: 'content',
    className: 'funky-hero__content'
  }, [
    badgeElement,
    titleElement,
    subtitleElement,
    actionsElement,
    statsElement,
    children ? React.createElement('div', { key: 'extra', className: 'funky-hero__extra' }, children) : null
  ]);

  /* ── Root section ── */
  return React.createElement('section', {
    className: rootClassName,
    'aria-label': config.ariaLabel || config.title,
    style: baseStyle
  }, [
    bgElement,
    overlayElement,
    orbsElement,
    meshElement,
    contentElement,
    scrollElement
  ]);
}

FunkyHero.displayName = 'FunkyHero';