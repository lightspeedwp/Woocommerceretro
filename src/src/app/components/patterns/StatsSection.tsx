import React from 'react';
import * as TypographyModule from '../common/Typography';

var Typography = TypographyModule.Typography;

// Stat structure
// - id: string
// - value: string
// - label: string
// - icon?: any
// - suffix?: string

// StatsSectionProps structure
// - stats: Stat[]
// - heading?: string
// - description?: string
// - layout?: 'horizontal' | 'grid'
// - dark?: boolean
// - className?: string

/**
 * StatsSection Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function StatsSection(props) {
  var stats = props.stats;
  var heading = props.heading;
  var description = props.description;
  var layout = props.layout === undefined ? 'horizontal' : props.layout;
  var dark = props.dark === undefined ? false : props.dark;
  var className = props.className || '';

  var sectionClasses = "wp-stats-section " + (dark ? 'wp-stats-section--dark' : '') + " " + className;
  var gridClasses = layout === 'horizontal' ? 'wp-stats-grid' : 'wp-stats-grid--grid';

  var titleElement = heading ? React.createElement(Typography, { 
    key: 'title',
    variant: "h2", 
    className: "wp-stats-header__title" 
  }, heading) : null;

  var descElement = description ? React.createElement(Typography, { 
    key: 'desc',
    variant: "p", 
    className: "wp-stats-header__description" 
  }, description) : null;

  var header = (heading || description) ? React.createElement('div', { 
    key: 'header',
    className: "wp-stats-header" 
  }, [
    titleElement,
    descElement
  ]) : null;

  var items = stats.map(function(stat) {
    var Icon = stat.icon;
    
    var iconWrapper = Icon ? React.createElement('div', { 
      key: 'icon-wrap',
      className: "wp-stat-item__icon-wrapper" 
    }, React.createElement(Icon, {
      size: 32,
      className: "wp-stat-item__icon"
    })) : null;

    var value = React.createElement('div', { 
      key: 'val',
      className: "wp-stat-item__value" 
    }, stat.value + (stat.suffix || ''));

    var label = React.createElement('div', { 
      key: 'lab',
      className: "wp-stat-item__label" 
    }, stat.label);

    return React.createElement('div', { 
      key: stat.id, 
      className: "wp-stat-item" 
    }, [
      iconWrapper,
      value,
      label
    ]);
  });

  var grid = React.createElement('div', { 
    key: 'grid',
    className: gridClasses 
  }, items);

  return React.createElement('div', { className: sectionClasses }, [
    header,
    grid
  ]);
}