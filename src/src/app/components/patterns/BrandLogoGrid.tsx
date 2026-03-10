/**
 * BrandLogoGrid.tsx - Brand Block
 * 
 * Grid display of partner/brand logos.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
import * as TypographyModule from '../common/Typography';
import * as BrandsDataModule from '../../data/brands';

var Typography = TypographyModule.Typography;
var brandLogos = BrandsDataModule.brandLogos;

export function BrandLogoGrid(props) {
  var brands = props.brands || brandLogos;
  var heading = props.heading === undefined ? 'Trusted By' : props.heading;
  var description = props.description;
  var columns = props.columns || { mobile: 2, tablet: 3, desktop: 6 };
  var grayscale = props.grayscale === undefined ? true : props.grayscale;
  var className = props.className || '';

  var mobile = columns.mobile || 2;
  var tablet = columns.tablet || 3;
  var desktop = columns.desktop || 6;

  var sectionHeader = [];
  if (heading) {
    sectionHeader.push(React.createElement(Typography, { 
      variant: "h2", 
      align: "center",
      key: "h"
    }, heading));
  }
  if (description) {
    sectionHeader.push(React.createElement(Typography, { 
      variant: "p", 
      className: "wp-brand-section__description",
      key: "d"
    }, description));
  }

  var headerElement = sectionHeader.length > 0 ? React.createElement('div', { 
    className: "wp-brand-section__header" 
  }, sectionHeader) : null;

  var logoGridItems = brands.map(function(brand) {
    var imgClasses = "wp-brand-image " + (grayscale ? 'wp-brand-image--grayscale' : '');
    
    var logoElement = React.createElement('div', { className: "wp-brand-item" },
      React.createElement('img', {
        src: brand.logo,
        alt: brand.name,
        className: imgClasses
      })
    );

    if (brand.url) {
      return React.createElement('a', {
        key: brand.id,
        href: brand.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Visit " + brand.name
      }, logoElement);
    } else {
      return React.createElement('div', { key: brand.id }, logoElement);
    }
  });

  var gridElement = React.createElement('div', { 
    className: "wp-brand-grid wp-brand-grid--cols-" + mobile + " wp-brand-grid--cols-" + tablet + " wp-brand-grid--cols-" + desktop
  }, logoGridItems);

  return React.createElement('div', { 
    className: "wp-brand-section " + className 
  }, [headerElement, gridElement]);
}

BrandLogoGrid.displayName = 'BrandLogoGrid';
