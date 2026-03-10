/**
 * FrontPage.tsx - Template
 * 
 * Homepage template with funky hero, featured products, and newsletter.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. ASCII characters only
 */

import React from 'react';
import { CaretRight } from '@phosphor-icons/react';
import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as QuickEntryModule from '../patterns/QuickEntryTilesGrid';
import * as CategoryShowcaseModule from '../patterns/CategoryShowcaseGrid';
import * as ProductGridModule from '../patterns/ProductGrid';
import * as NewsletterModule from '../patterns/NewsletterCTA';
import * as ImageFallbackModule from '../figma/ImageWithFallback';
import * as ReducedMotionHook from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';
import * as HomepageData from '../../data/homepage';
import * as ProductsData from '../../data/products';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Button = ButtonsModule.Button;
var QuickEntryTilesGrid = QuickEntryModule.QuickEntryTilesGrid;
var CategoryShowcaseGrid = CategoryShowcaseModule.CategoryShowcaseGrid;
var ProductGrid = ProductGridModule.ProductGrid;
var NewsletterCTA = NewsletterModule.NewsletterCTA;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;
var usePrefersReducedMotion = ReducedMotionHook.usePrefersReducedMotion;
var homepageHero = HeroDataModule.homepageHero;
var featureTiles = HomepageData.featureTiles;
var categoryShowcase = HomepageData.categoryShowcase;
var newsletterContent = HomepageData.newsletterContent;
var collectionRowContent = HomepageData.collectionRowContent;
var shopByCategoryHeading = HomepageData.shopByCategoryHeading;
var brandStory = HomepageData.brandStory;
var getBestSellers = ProductsData.getBestSellers;
var getNewArrivals = ProductsData.getNewArrivals;

export function FrontPage() {
  var trendingProducts = getNewArrivals(4);
  var bestSellerProducts = getBestSellers(4);
  var prefersReduced = usePrefersReducedMotion();

  /* ── HERO (data-driven via FunkyHero) ── */
  var heroSection = React.createElement(FunkyHero, {
    key: 'hero',
    config: homepageHero
  });

  /* ── FEATURES BAND ── */
  var featuresSection = React.createElement('section', { className: 'front-page__features', 'aria-label': 'Store features' },
    React.createElement('div', { className: 'front-page__features-inner' },
      React.createElement(QuickEntryTilesGrid, { tiles: featureTiles })
    )
  );

  /* ── CATEGORIES ── */
  var categoriesSection = React.createElement('section', { className: 'front-page__categories', 'aria-label': 'Shop by category' },
    React.createElement('div', { className: 'front-page__categories-inner' }, [
      React.createElement('h2', { key: 'title', className: 'front-page__section-heading front-page__section-heading--gradient' },
        shopByCategoryHeading.title
      ),
      React.createElement(CategoryShowcaseGrid, {
        key: 'grid',
        categories: categoryShowcase,
        columns: { mobile: 1, tablet: 2, desktop: 4 }
      })
    ])
  );

  /* ── TRENDING PRODUCTS ── */
  var trendingSection = React.createElement('section', { className: 'front-page__trending', 'aria-label': 'Trending products' },
    React.createElement('div', { className: 'front-page__trending-inner' }, [
      React.createElement('div', { key: 'header', className: 'front-page__collection-header' }, [
        React.createElement('div', { key: 'text', className: 'front-page__collection-header-text' }, [
          React.createElement('h2', { key: 'title', className: 'front-page__section-heading front-page__section-heading--gradient' },
            collectionRowContent.trending.title
          ),
          React.createElement('p', { key: 'desc', className: 'front-page__section-description' },
            collectionRowContent.trending.description
          )
        ]),
        collectionRowContent.trending.viewAllLink ? React.createElement(Button, {
          key: 'view-all',
          variant: 'link',
          size: 'default',
          to: collectionRowContent.trending.viewAllLink,
          icon: React.createElement(CaretRight, { size: 16, weight: 'bold' }),
          iconPosition: 'right'
        }, "View all") : null
      ]),
      React.createElement(ProductGrid, {
        key: 'grid',
        products: trendingProducts,
        scrollOnMobile: true
      })
    ])
  );

  /* ── BRAND STORY BANNER ── */
  var brandStoryOrbs = !prefersReduced ? [
    React.createElement('div', { key: 'orb1', className: 'front-page__brand-story-orb front-page__brand-story-orb--1', 'aria-hidden': 'true' }),
    React.createElement('div', { key: 'orb2', className: 'front-page__brand-story-orb front-page__brand-story-orb--2', 'aria-hidden': 'true' })
  ] : null;

  var brandStorySection = React.createElement('section', { className: 'front-page__brand-story', 'aria-label': 'Brand story' }, [
    React.createElement(ImageWithFallback, {
      key: 'bg',
      src: brandStory.image,
      alt: '',
      className: 'front-page__brand-story-bg'
    }),
    React.createElement('div', { key: 'overlay', className: 'front-page__brand-story-overlay' }),
    brandStoryOrbs,
    React.createElement('div', { key: 'content', className: 'front-page__brand-story-content' }, [
      React.createElement('h2', { key: 'title', className: 'front-page__brand-story-title' }, brandStory.heading),
      React.createElement('p', { key: 'text', className: 'front-page__brand-story-text' }, brandStory.body),
      React.createElement('div', { key: 'btn' },
        React.createElement(Button, {
          variant: 'secondary',
          size: 'lg',
          to: brandStory.ctaHref
        }, brandStory.ctaLabel)
      )
    ])
  ]);

  /* ── BEST SELLERS ── */
  var bestSellersSection = React.createElement('section', { className: 'front-page__best-sellers', 'aria-label': 'Best selling products' },
    React.createElement('div', { className: 'front-page__best-sellers-inner' }, [
      React.createElement('div', { key: 'header', className: 'front-page__collection-header' }, [
        React.createElement('div', { key: 'text', className: 'front-page__collection-header-text' }, [
          React.createElement('h2', { key: 'title', className: 'front-page__section-heading front-page__section-heading--gradient' },
            collectionRowContent.bestSellers.title
          ),
          React.createElement('p', { key: 'desc', className: 'front-page__section-description' },
            collectionRowContent.bestSellers.description
          )
        ]),
        collectionRowContent.bestSellers.viewAllLink ? React.createElement(Button, {
          key: 'view-all',
          variant: 'link',
          size: 'default',
          to: collectionRowContent.bestSellers.viewAllLink,
          icon: React.createElement(CaretRight, { size: 16, weight: 'bold' }),
          iconPosition: 'right'
        }, "View all") : null
      ]),
      React.createElement(ProductGrid, {
        key: 'grid',
        products: bestSellerProducts,
        scrollOnMobile: true
      })
    ])
  );

  /* ── NEWSLETTER ── */
  var newsletterSection = React.createElement(NewsletterCTA, {
    key: 'newsletter',
    variant: 'full',
    heading: newsletterContent.heading,
    description: newsletterContent.subheading,
    buttonText: newsletterContent.buttonText,
    placeholder: newsletterContent.placeholder
  });

  /* ── PAGE ASSEMBLY ── */
  var mainContent = React.createElement('div', { className: 'front-page' }, [
    heroSection,
    React.cloneElement(featuresSection, { key: 'features' }),
    React.createElement('hr', { key: 'd1', className: 'front-page__divider', 'aria-hidden': 'true' }),
    React.cloneElement(categoriesSection, { key: 'categories' }),
    React.createElement('hr', { key: 'd2', className: 'front-page__divider', 'aria-hidden': 'true' }),
    React.cloneElement(trendingSection, { key: 'trending' }),
    React.cloneElement(brandStorySection, { key: 'brand' }),
    React.cloneElement(bestSellersSection, { key: 'best' }),
    React.createElement('hr', { key: 'd3', className: 'front-page__divider', 'aria-hidden': 'true' }),
    newsletterSection
  ]);

  return React.createElement(Layout, null, mainContent);
}

FrontPage.displayName = 'FrontPage';