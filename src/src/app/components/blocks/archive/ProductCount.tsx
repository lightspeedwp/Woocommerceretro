import React from 'react';
import * as TypographyModule from '../../common/Typography';
var Typography = TypographyModule.Typography;

/**
 * ProductCount Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function ProductCount(props) {
  var total = props.total;
  var showing = props.showing;
  var className = props.className || '';

  var message = showing === total
    ? total + " products"
    : "Showing " + showing + " of " + total + " products";

  return React.createElement(Typography, { 
    variant: "body",
    className: "wp-product-count funky-product-count " + className
  }, message);
}

ProductCount.displayName = 'ProductCount';
