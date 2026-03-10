import React from 'react';
import * as ContainerModule from '../../common/Container';
import { Truck, ShieldCheck, ArrowsClockwise as RefreshCw, Gift } from '@phosphor-icons/react';

var Container = ContainerModule.Container;

/**
 * ServiceFeaturesSection Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ServiceFeaturesSection() {
  var item1 = React.createElement('div', { key: '1', className: "wp-service-features__item" }, [
    React.createElement('div', { key: 'i', className: "wp-service-features__icon" }, 
      React.createElement(Truck, { size: 40, weight: 'duotone' })
    ),
    React.createElement('h4', { key: 't', className: "wp-service-features__title" }, "Nationwide Delivery"),
    React.createElement('p', { key: 'd', className: "wp-service-features__description" }, "Reliable delivery to your door across South Africa.")
  ]);

  var item2 = React.createElement('div', { key: '2', className: "wp-service-features__item" }, [
    React.createElement('div', { key: 'i', className: "wp-service-features__icon" }, 
      React.createElement(ShieldCheck, { size: 40, weight: 'duotone' })
    ),
    React.createElement('h4', { key: 't', className: "wp-service-features__title" }, "Secure Payment"),
    React.createElement('p', { key: 'd', className: "wp-service-features__description" }, "100% secure checkout with multiple payment options.")
  ]);

  var item3 = React.createElement('div', { key: '3', className: "wp-service-features__item" }, [
    React.createElement('div', { key: 'i', className: "wp-service-features__icon" }, 
      React.createElement(RefreshCw, { size: 40, weight: 'duotone' })
    ),
    React.createElement('h4', { key: 't', className: "wp-service-features__title" }, "Easy Returns"),
    React.createElement('p', { key: 'd', className: "wp-service-features__description" }, "Hassle-free returns within 30 days of purchase.")
  ]);

  var item4 = React.createElement('div', { key: '4', className: "wp-service-features__item" }, [
    React.createElement('div', { key: 'i', className: "wp-service-features__icon" }, 
      React.createElement(Gift, { size: 40, weight: 'duotone' })
    ),
    React.createElement('h4', { key: 't', className: "wp-service-features__title" }, "Gift Wrapping"),
    React.createElement('p', { key: 'd', className: "wp-service-features__description" }, "Add a personal touch with our premium gift wrapping service.")
  ]);

  var grid = React.createElement('div', { className: "wp-service-features__grid" }, [
    item1, item2, item3, item4
  ]);

  return React.createElement('div', { className: "wp-service-features" }, 
    React.createElement(Container, { variant: "site" }, grid)
  );
}