import React from 'react';
import * as TypographyModule from '../../common/Typography';
var Typography = TypographyModule.Typography;

/* ProductSummaryProps: { summary: string } */

/**
 * ProductSummary Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ProductSummary(props) {
  var summary = props.summary;

  var typography = React.createElement(Typography, { 
    variant: "body" 
  }, summary);

  return React.createElement('div', { 
    className: "wc-product-summary" 
  }, typography);
}