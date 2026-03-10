import React from 'react';
import * as TypographyModule from '../common/Typography';

var Typography = TypographyModule.Typography;

/*
 * ArchiveHeaderProps:
 *   icon?: React.ReactNode
 *   iconColor?: 'purple' | 'blue' | 'green' | 'red' | 'gray'
 *   label?: string
 *   title: string
 *   description?: string
 *   metadata?: string | React.ReactNode
 *   children?: React.ReactNode
 *   className?: string
 */

/**
 * ArchiveHeader Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 */
export function ArchiveHeader(props) {
  var icon = props.icon;
  var iconColor = props.iconColor || 'purple';
  var label = props.label;
  var title = props.title;
  var description = props.description;
  var metadata = props.metadata;
  var children = props.children;
  var className = props.className || '';

  var iconElement = icon ? React.createElement('div', {
    className: 'wp-archive-header__icon wp-archive-header__icon--' + iconColor,
    'aria-hidden': 'true'
  }, icon) : null;

  var labelElement = label ? React.createElement('div', {
    className: 'wp-archive-header__label wp-archive-header__label--' + iconColor
  }, label) : null;

  var titleElement = React.createElement('div', { className: 'wp-archive-header__title' },
    React.createElement(Typography, { variant: 'h1' }, title)
  );

  var descriptionElement = description ? React.createElement('p', {
    className: 'wp-archive-header__description'
  }, description) : null;

  var metadataElement = metadata ? React.createElement('div', {
    className: 'wp-archive-header__metadata'
  }, typeof metadata === 'string' ? React.createElement('p', null, metadata) : metadata) : null;

  return React.createElement('header', {
    className: 'wp-archive-header ' + className
  },
    iconElement,
    labelElement,
    titleElement,
    descriptionElement,
    metadataElement,
    children
  );
}
