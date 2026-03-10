/**
 * CategoryShowcaseGrid.tsx - Pattern
 * 
 * Grid of category cards with images and product counts.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. ASCII only
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
import { ArrowRight } from '@phosphor-icons/react';
import * as GridModule from '../blocks/design/Grid';
import * as ImageFallbackModule from '../figma/ImageWithFallback';

var Link = ReactRouterModule.Link;
var ResponsiveGrid = GridModule.ResponsiveGrid;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;

var IconArrowRight = function(props) {
  return ArrowRight ? React.createElement(ArrowRight, props) : React.createElement('span', { 'aria-hidden': 'true' }, "->");
};

// CategoryShowcase structure
// - id: string
// - name: string
// - slug: string
// - image: string
// - productCount?: number
// - description?: string

// CategoryShowcaseGridProps structure
// - categories: CategoryShowcase[]
// - columns?: { mobile?: 1 | 2, tablet?: 2 | 3, desktop?: 3 | 4 }
// - showProductCount?: boolean
// - showDescription?: boolean
// - className?: string

export function CategoryShowcaseGrid(props) {
  var categories = props.categories;
  var columns = props.columns || { mobile: 2, tablet: 2, desktop: 4 };
  var showDescription = props.showDescription !== undefined ? props.showDescription : true;
  var showProductCount = props.showProductCount !== undefined ? props.showProductCount : true;
  var className = props.className || '';

  return React.createElement(ResponsiveGrid, {
    mobile: columns.mobile,
    tablet: columns.tablet,
    desktop: columns.desktop,
    gap: 'lg',
    className: className
  },
    categories.map(function(category) {
      var content = React.createElement(React.Fragment, null, [
        React.createElement('div', { key: 'img', className: 'wp-category-card__image-container' },
          React.createElement(ImageWithFallback, {
            src: category.image,
            alt: category.name,
            className: 'wp-category-card__image'
          })
        ),
        React.createElement('div', { key: 'overlay', className: 'wp-category-card__overlay' }, [
          React.createElement('h3', { key: 'name', className: 'wp-category-card__name' }, category.name),
          (showDescription && category.description) ? React.createElement('p', { key: 'desc', className: 'wp-category-card__description' }, category.description) : null,
          (showProductCount && category.productCount !== undefined) ? React.createElement('p', { key: 'count', className: 'wp-category-card__count' },
            React.createElement('small', null, category.productCount + (category.productCount === 1 ? ' Product' : ' Products'))
          ) : null,
          React.createElement('div', { key: 'action', className: 'wp-category-card__action' }, [
            React.createElement('small', { key: 'label' }, 'Shop Now'),
            React.createElement(IconArrowRight, { key: 'icon', size: 16, 'aria-hidden': 'true' })
          ])
        ])
      ]);

      return React.createElement(Link, {
        key: category.id,
        to: '/shop/category/' + category.slug,
        className: 'wp-category-card wp-block-card wp-block-card--interactive funky-spring-hover'
      }, content);
    })
  );
}

CategoryShowcaseGrid.displayName = 'CategoryShowcaseGrid';