import React from 'react';
import { CheckCircle, Package, Truck, House, MapPin, CalendarBlank, Tag, Clock } from '@phosphor-icons/react';

import * as AccountDashboardSectionModule from './AccountDashboardSection';
var AccountDashboardSection = AccountDashboardSectionModule.AccountDashboardSection;

import * as orderDataModule from '../../../data/account';
var orderHistory = orderDataModule.mockOrders;

/**
 * Orders Pattern
 *
 * Reusable order history pattern rendered inside the AccountLayout.
 */
export function Orders() {
  return React.createElement(AccountDashboardSection, {
    title: "Order history",
    subtitle: "View and track your recent orders"
  },
    React.createElement('div', { className: "account-orders__list", style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--30)' } },
      orderHistory.map(function(order) {
        var statusColor = 
          order.status === 'Delivered' ? 'var(--wp--preset--color--success)' :
          order.status === 'Processing' ? 'var(--wp--preset--color--warning)' :
          order.status === 'Shipped' ? 'var(--wp--preset--color--info)' :
          'var(--wp--preset--color--muted-foreground)';

        var statusBg = 
          order.status === 'Delivered' ? 'rgba(22, 163, 74, 0.1)' :
          order.status === 'Processing' ? 'rgba(217, 119, 6, 0.1)' :
          order.status === 'Shipped' ? 'rgba(59, 130, 246, 0.1)' :
          'var(--wp--preset--color--surface)';

        return React.createElement('div', { 
          key: order.id, 
          className: "account-order-card funky-glass-panel funky-spring-hover",
          style: {
            padding: 'var(--wp--preset--spacing--40)',
            borderLeft: '4px solid ' + statusColor
          }
        },
          /* Header */
          React.createElement('div', { className: "account-order-card__header", style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--wp--preset--spacing--20)', marginBottom: 'var(--wp--preset--spacing--30)', paddingBottom: 'var(--wp--preset--spacing--20)', borderBottom: '1px solid var(--wp--preset--color--border)' } },
            React.createElement('div', null,
              React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', marginBottom: 'var(--wp--preset--spacing--10)' } },
                React.createElement('h4', { style: { margin: 0, fontSize: 'var(--wp--preset--font-size--large)' } }, order.id),
                React.createElement('span', { className: "account-order-card__status", style: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: 'var(--wp--preset--border-radius--full)', fontSize: 'var(--wp--preset--font-size--small)', fontWeight: '500', color: statusColor, background: statusBg } },
                  order.status === 'Delivered' ? React.createElement(CheckCircle, { size: 14, weight: 'fill' }) :
                  order.status === 'Processing' ? React.createElement(Package, { size: 14, weight: 'fill' }) :
                  order.status === 'Shipped' ? React.createElement(Truck, { size: 14, weight: 'fill' }) :
                  React.createElement(Clock, { size: 14, weight: 'fill' }),
                  order.status
                )
              ),
              React.createElement('div', { style: { display: 'flex', gap: 'var(--wp--preset--spacing--30)', color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)' } },
                React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
                  React.createElement(CalendarBlank, { size: 14 }),
                  order.date
                ),
                React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
                  React.createElement(Tag, { size: 14 }),
                  order.total
                )
              )
            ),
            React.createElement('a', { href: "/account/orders/" + order.id, className: "wp-sales-btn wp-sales-btn--outline", style: { padding: 'var(--wp--preset--spacing--20) var(--wp--preset--spacing--30)', fontSize: 'var(--wp--preset--font-size--small)' } },
              "View details"
            )
          ),

          /* Items Preview */
          React.createElement('div', { className: "account-order-card__items", style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)' } },
            React.createElement('div', { style: { display: 'flex', gap: 'var(--wp--preset--spacing--10)' } },
              order.items.slice(0, 3).map(function(item, idx) {
                return React.createElement('div', { 
                  key: idx,
                  style: {
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--wp--preset--border-radius--md)',
                    background: 'var(--wp--preset--color--surface-elevated)',
                    border: '1px solid var(--wp--preset--color--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  },
                  title: item.name
                },
                  React.createElement('img', { 
                    src: item.image, 
                    alt: item.name,
                    style: { width: '100%', height: '100%', objectFit: 'cover' }
                  })
                );
              })
            ),
            order.items.length > 3 ? 
              React.createElement('span', { style: { fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--muted-foreground)', fontWeight: '500' } },
                "+" + (order.items.length - 3) + " more"
              )
              : null
          )
        );
      })
    )
  );
}

export default Orders;