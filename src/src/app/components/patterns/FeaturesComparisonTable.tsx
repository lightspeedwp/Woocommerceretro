import React from 'react';
import { Check, X } from '@phosphor-icons/react';
import * as TypographyModule from '../common/Typography';

var Typography = TypographyModule.Typography;

var XIcon = X;

// ComparisonPlan structure
// - id: string
// - name: string
// - popular?: boolean

// ComparisonFeature structure
// - name: string
// - description?: string
// - values: (boolean | string)[]

// FeaturesComparisonTableProps structure
// - plans: ComparisonPlan[]
// - features: ComparisonFeature[]
// - heading?: string
// - className?: string

/**
 * FeaturesComparisonTable Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function FeaturesComparisonTable(props) {
  var plans = props.plans;
  var features = props.features;
  var heading = props.heading || 'Compare Plans';
  var className = props.className || '';

  var headingElement = heading ? React.createElement(Typography, { 
    key: 'heading',
    variant: "h2", 
    align: "center", 
    className: "wp-comparison-table__heading" 
  }, heading) : null;

  var headerCells = plans.map(function(plan) {
    var popularBadge = plan.popular ? React.createElement('div', { key: 'badge', className: "wp-comparison-table__plan-badge" }, 
      React.createElement('small', null, React.createElement('strong', null, "Most Popular"))
    ) : null;

    return React.createElement('th', { key: plan.id, className: "wp-comparison-table__header-cell wp-comparison-table__header-cell--plan" }, 
      React.createElement('div', { className: (plan.popular ? 'wp-comparison-table__plan-name--popular' : 'wp-comparison-table__plan-name') }, [
        React.createElement('strong', { key: 'name' }, plan.name),
        popularBadge
      ])
    );
  });

  var headerRow = React.createElement('tr', { key: 'h-row', className: "wp-comparison-table__header-row" }, [
    React.createElement('th', { key: 'f-head', className: "wp-comparison-table__header-cell wp-comparison-table__header-cell--features" }, 
      React.createElement('strong', null, "Features")
    ),
    headerCells
  ]);

  var featureRows = features.map(function(feature, index) {
    var featureInfo = React.createElement('td', { key: 'info', className: "wp-comparison-table__cell wp-comparison-table__cell--feature" }, [
      React.createElement('div', { key: 'n', className: "wp-comparison-table__feature-name" }, React.createElement('strong', null, feature.name)),
      feature.description ? React.createElement('div', { key: 'd', className: "wp-comparison-table__feature-desc" }, 
        React.createElement('small', null, feature.description)
      ) : null
    ]);

    var valueCells = feature.values.map(function(value, i) {
      var content;
      if (typeof value === 'boolean') {
        content = value 
          ? React.createElement(Check, { size: 24, className: "wp-comparison-table__icon--check" })
          : React.createElement(XIcon, { size: 24, className: "wp-comparison-table__icon--cross" });
      } else {
        content = React.createElement('span', { className: "wp-comparison-table__text-value" }, value);
      }

      return React.createElement('td', { key: i, className: "wp-comparison-table__cell wp-comparison-table__cell--value" }, content);
    });

    return React.createElement('tr', { key: index, className: "wp-comparison-table__row" }, [
      featureInfo,
      valueCells
    ]);
  });

  var table = React.createElement('table', { key: 'table', className: "wp-comparison-table__table" }, [
    React.createElement('thead', { key: 'thead' }, [headerRow]),
    React.createElement('tbody', { key: 'tbody' }, [featureRows])
  ]);

  var scrollContainer = React.createElement('div', { key: 'scroll', className: "wp-comparison-table__scroll" }, [table]);

  return React.createElement('div', { className: "wp-comparison-table " + className }, [
    headingElement,
    scrollContainer
  ]);
}