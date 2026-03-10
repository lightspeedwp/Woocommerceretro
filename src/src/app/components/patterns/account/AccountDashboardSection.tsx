import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Package, Heart, MapPin, User, Eye } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as AccountDataModule from '../../../data/account';
import * as HeadingModule from '../../common/Heading';
import * as TypographyModule from '../../common/Typography';
import * as ButtonsModule from '../../blocks/design/Buttons';

var Heading = HeadingModule.Heading;
var Typography = TypographyModule.Typography;
var Button = ButtonsModule.Button;

/**
 * AccountDashboardSection Pattern Component
 * 
 * Overview dashboard for customer account with stats, recent orders,
 * and quick action buttons.
 * 
 * **Version:** 1.1 (Tailwind-free)
 * **WordPress Mapping:** Dashboard Block / Account Overview
 * **Used In:** AccountLayout.tsx (Dashboard view)
 * **Data Source:** `/data/account.ts` (mockAccountStats, getRecentOrders)
 * **Dark Mode:** ✅ Full support via CSS variables
 * 
 * @pattern
 * 
 * @typedef AccountDashboardSectionProps
 * @property {AccountStats} stats
 * @property {Array<Order>} recentOrders
 * @property {string} [userName]
 * @property {boolean} [showQuickActions]
 * @property {string} [className]
 */

function getStatusBadgeClass(status) {
  switch (status) {
    case 'completed': return 'wp-account-badge--completed';
    case 'processing': return 'wp-account-badge--processing';
    case 'shipped': return 'wp-account-badge--shipped';
    case 'pending': return 'wp-account-badge--pending';
    case 'cancelled':
    case 'refunded': return 'wp-account-badge--cancelled';
    default: return 'wp-account-badge--default';
  }
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function AccountDashboardSection(props) {
  var stats = props.stats;
  var recentOrders = props.recentOrders;
  var userName = props.userName || 'there';
  var showQuickActions = props.showQuickActions !== undefined ? props.showQuickActions : false;
  var className = props.className || '';
  
  return React.createElement('section', { className: 'wp-account-dashboard ' + className },
    React.createElement('div', { className: 'wp-account-dashboard__welcome' },
      React.createElement(Heading, { level: 1, className: 'wp-account-dashboard__welcome-title' },
        'Welcome back, ' + userName + '!'
      ),
      React.createElement(Typography, { className: 'wp-account-dashboard__welcome-subtitle' },
        "Here's what's happening with your account"
      )
    ),

    React.createElement('div', { className: 'wp-account-dashboard__stats-grid' },
      React.createElement('div', { className: 'wp-account-stat-card' },
        React.createElement('div', { className: 'wp-account-stat-card__inner' },
          React.createElement('div', { className: 'wp-account-stat-card__icon wp-account-stat-card__icon--purple' },
            React.createElement(Package, { size: 24, 'aria-hidden': 'true' })
          ),
          React.createElement('div', { className: 'wp-account-stat-card__data' },
            React.createElement(Typography, { className: 'wp-account-stat-card__value' },
              stats.totalOrders
            ),
            React.createElement(Typography, { variant: 'caption', className: 'wp-account-stat-card__label' },
              'Total Orders'
            )
          )
        )
      ),

      React.createElement('div', { className: 'wp-account-stat-card' },
        React.createElement('div', { className: 'wp-account-stat-card__inner' },
          React.createElement('div', { className: 'wp-account-stat-card__icon wp-account-stat-card__icon--green' },
            React.createElement(Heart, { size: 24, 'aria-hidden': 'true' })
          ),
          React.createElement('div', { className: 'wp-account-stat-card__data' },
            React.createElement(Typography, { className: 'wp-account-stat-card__value' },
              formatCurrency(stats.totalSpent)
            ),
            React.createElement(Typography, { variant: 'caption', className: 'wp-account-stat-card__label' },
              'Total Spent'
            )
          )
        )
      ),

      React.createElement('div', { className: 'wp-account-stat-card' },
        React.createElement('div', { className: 'wp-account-stat-card__inner' },
          React.createElement('div', { className: 'wp-account-stat-card__icon wp-account-stat-card__icon--yellow' },
            React.createElement(MapPin, { size: 24, 'aria-hidden': 'true' })
          ),
          React.createElement('div', { className: 'wp-account-stat-card__data' },
            React.createElement(Typography, { className: 'wp-account-stat-card__value' },
              stats.rewardPoints.toLocaleString()
            ),
            React.createElement(Typography, { variant: 'caption', className: 'wp-account-stat-card__label' },
              'Reward Points'
            )
          )
        )
      ),

      stats.activeSubscriptions !== undefined && React.createElement('div', { className: 'wp-account-stat-card' },
        React.createElement('div', { className: 'wp-account-stat-card__inner' },
          React.createElement('div', { className: 'wp-account-stat-card__icon wp-account-stat-card__icon--blue' },
            React.createElement(User, { size: 24, 'aria-hidden': 'true' })
          ),
          React.createElement('div', { className: 'wp-account-stat-card__data' },
            React.createElement(Typography, { className: 'wp-account-stat-card__value' },
              stats.activeSubscriptions
            ),
            React.createElement(Typography, { variant: 'caption', className: 'wp-account-stat-card__label' },
              'Active Plans'
            )
          )
        )
      )
    ),

    React.createElement('div', { className: 'wp-account-dashboard__membership-bar' },
      React.createElement('div', { className: 'wp-account-dashboard__membership-inner' },
        React.createElement('div', { className: 'wp-account-dashboard__membership-item' },
          React.createElement(Typography, { className: 'wp-account-dashboard__membership-label' },
            'Member Since'
          ),
          React.createElement(Typography, { className: 'wp-account-dashboard__membership-value' },
            stats.memberSince
          )
        ),
        
        stats.nextBillingDate && React.createElement('div', { className: 'wp-account-dashboard__membership-item' },
          React.createElement(Typography, { className: 'wp-account-dashboard__membership-label' },
            'Next Billing Date'
          ),
          React.createElement(Typography, { className: 'wp-account-dashboard__membership-value' },
            new Date(stats.nextBillingDate).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          )
        )
      )
    ),

    React.createElement('div', { className: 'wp-account-dashboard__orders' },
      React.createElement('div', { className: 'wp-account-dashboard__orders-header' },
        React.createElement(Heading, { level: 2 },
          'Recent Orders'
        ),
        React.createElement(Link, { to: '/account/orders' },
          React.createElement(Button, { variant: 'ghost', size: 'sm' },
            'View All Orders'
          )
        )
      ),

      recentOrders.length === 0 ? React.createElement('div', { className: 'wp-account-dashboard__empty-orders' },
        React.createElement(Package, { size: 48, className: 'wp-account-dashboard__empty-icon', 'aria-hidden': 'true' }),
        React.createElement(Typography, { className: 'wp-account-dashboard__empty-text' },
          "You haven't placed any orders yet"
        ),
        React.createElement(Link, { to: '/shop' },
          React.createElement(Button, null,
            'Start Shopping'
          )
        )
      ) : React.createElement('div', { className: 'wp-account-dashboard__orders-table-wrapper' },
        React.createElement('div', { className: 'wp-account-dashboard__orders-desktop' },
          React.createElement('table', { className: 'wp-account-dashboard__table' },
            React.createElement('thead', { className: 'wp-account-dashboard__table-head' },
              React.createElement('tr', null,
                React.createElement('th', { className: 'wp-account-dashboard__table-th' }, 'Order'),
                React.createElement('th', { className: 'wp-account-dashboard__table-th' }, 'Date'),
                React.createElement('th', { className: 'wp-account-dashboard__table-th' }, 'Status'),
                React.createElement('th', { className: 'wp-account-dashboard__table-th' }, 'Total'),
                React.createElement('th', { className: 'wp-account-dashboard__table-th wp-account-dashboard__table-th--right' }, 'Actions')
              )
            ),
            React.createElement('tbody', { className: 'wp-account-dashboard__table-body' },
              recentOrders.map(function(order) {
                return React.createElement('tr', { key: order.id, className: 'wp-account-dashboard__table-row' },
                  React.createElement('td', { className: 'wp-account-dashboard__table-td' },
                    React.createElement(Link, {
                        to: '/account/orders/' + order.id,
                        className: 'wp-account-dashboard__order-link'
                      },
                      order.id
                    )
                  ),
                  React.createElement('td', { className: 'wp-account-dashboard__table-td wp-account-dashboard__table-td--muted' },
                    formatDate(order.date)
                  ),
                  React.createElement('td', { className: 'wp-account-dashboard__table-td' },
                    React.createElement('span', { className: 'wp-account-badge ' + getStatusBadgeClass(order.status) },
                      order.status.charAt(0).toUpperCase() + order.status.slice(1)
                    )
                  ),
                  React.createElement('td', { className: 'wp-account-dashboard__table-td wp-account-dashboard__table-td--bold' },
                    formatCurrency(order.total)
                  ),
                  React.createElement('td', { className: 'wp-account-dashboard__table-td wp-account-dashboard__table-td--right' },
                    React.createElement(Link, { to: '/account/orders/' + order.id },
                      React.createElement(Button, { variant: 'ghost', size: 'sm' },
                        React.createElement(Eye, { size: 16, className: 'wp-account-dashboard__view-icon', 'aria-hidden': 'true' }),
                        'View'
                      )
                    )
                  )
                );
              })
            )
          )
        ),

        React.createElement('div', { className: 'wp-account-dashboard__orders-mobile' },
          recentOrders.map(function(order) {
            return React.createElement('div', { key: order.id, className: 'wp-account-dashboard__mobile-order' },
              React.createElement('div', { className: 'wp-account-dashboard__mobile-order-top' },
                React.createElement('div', null,
                  React.createElement(Link, {
                      to: '/account/orders/' + order.id,
                      className: 'wp-account-dashboard__order-link'
                    },
                    order.id
                  ),
                  React.createElement(Typography, { variant: 'caption', className: 'wp-account-dashboard__mobile-order-date' },
                    formatDate(order.date)
                  )
                ),
                React.createElement('span', { className: 'wp-account-badge ' + getStatusBadgeClass(order.status) },
                  order.status.charAt(0).toUpperCase() + order.status.slice(1)
                )
              ),
              React.createElement('div', { className: 'wp-account-dashboard__mobile-order-bottom' },
                React.createElement(Typography, { className: 'wp-account-dashboard__mobile-order-total' },
                  formatCurrency(order.total)
                ),
                React.createElement(Link, { to: '/account/orders/' + order.id },
                  React.createElement(Button, { variant: 'ghost', size: 'sm' },
                    React.createElement(Eye, { size: 16, className: 'wp-account-dashboard__view-icon', 'aria-hidden': 'true' }),
                    'View'
                  )
                )
              )
            );
          })
        )
      )
    ),

    showQuickActions && recentOrders.length > 0 && React.createElement('div', { className: 'wp-account-dashboard__quick-actions' },
      React.createElement(Link, { to: '/account/orders?filter=shipped' },
        React.createElement(Button, { variant: 'outline', fullWidth: true },
          'Track Shipment'
        )
      ),
      stats.activeSubscriptions && stats.activeSubscriptions > 0 && React.createElement(Link, { to: '/account/subscriptions' },
        React.createElement(Button, { variant: 'outline', fullWidth: true },
          'Manage Subscriptions'
        )
      ),
      React.createElement(Link, { to: '/contact' },
        React.createElement(Button, { variant: 'outline', fullWidth: true },
          'Contact Support'
        )
      )
    )
  );
};

export default AccountDashboardSection;