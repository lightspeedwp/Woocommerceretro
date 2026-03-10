import React from 'react';
import * as TypographyModule from '../../common/Typography';
var Typography = TypographyModule.Typography;

/* ProductTitleProps: { title: string, brand?: string } */

/**
 * ProductTitle Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ProductTitle(props) {
  var title = props.title;
  var brand = props.brand;

  var brandBadge = brand ? React.createElement('span', { 
    key: 'brand', 
    className: "wc-product-title__brand" 
  }, brand) : null;

  var titleHeading = React.createElement(Typography, { 
    key: 'title', 
    variant: "h1" 
  }, title);

  return React.createElement('div', { 
    className: "wc-product-title" 
  }, [brandBadge, titleHeading]);
}