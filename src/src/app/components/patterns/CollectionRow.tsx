import React from 'react';
import { CaretRight as ChevronRight } from '@phosphor-icons/react';
import * as ContentSectionModule from './sections/ContentSection';
import * as MutedSectionModule from './sections/MutedSection';
import * as TypographyModule from '../common/Typography';
import * as ProductGridModule from './ProductGrid';
import * as ButtonsModule from '../blocks/design/Buttons';

var ContentSection = ContentSectionModule.ContentSection;
var MutedSection = MutedSectionModule.MutedSection;
var Typography = TypographyModule.Typography;
var ProductGrid = ProductGridModule.ProductGrid;
var Button = ButtonsModule.Button;

function IconChevronRight(props) {
  return ChevronRight ? React.createElement(ChevronRight, props) : React.createElement('span', { 'aria-hidden': 'true' }, '->');
}

/* CollectionRowProps: { title, description, viewAllLink, products, background } */

/**
 * CollectionRow Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No JSX
 */
export function CollectionRow(props) {
  var title = props.title;
  var description = props.description;
  var viewAllLink = props.viewAllLink;
  var products = props.products;
  var background = props.background || 'white';

  var titleElement = title ? React.createElement(Typography, { 
    key: 'title',
    variant: "h2", 
    className: "wc-collection-row__title" 
  }, title) : null;

  var descElement = description ? React.createElement(Typography, { 
    key: 'desc',
    variant: "p", 
    className: "wc-collection-row__description" 
  }, description) : null;

  var viewAllBtn = viewAllLink ? React.createElement(Button, {
    key: 'view-all',
    variant: "link",
    size: "default",
    to: viewAllLink,
    icon: React.createElement(IconChevronRight, { size: 16 }),
    iconPosition: "right",
    className: "wc-collection-row__view-all"
  }, "View All") : null;

  var header = React.createElement('div', { key: 'header', className: "wc-collection-row__header" }, [
    React.createElement('div', { key: 'h-content', className: "wc-collection-row__header-content" }, [
      titleElement,
      descElement
    ]),
    viewAllBtn
  ]);

  var grid = React.createElement(ProductGrid, {
    key: 'grid',
    products: products,
    scrollOnMobile: true
  });

  var content = React.createElement('div', { className: "wc-collection-row__content" }, [
    header,
    grid
  ]);

  if (background === 'gray') {
    return React.createElement(MutedSection, { content: content });
  }

  return React.createElement(ContentSection, { content: content });
}