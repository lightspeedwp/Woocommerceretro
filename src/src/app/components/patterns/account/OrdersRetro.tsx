import React from 'react';
import { Link } from 'react-router';
import { Package, CheckCircle, Truck } from '../../../utils/phosphor-compat';

/**
 * OrdersRetro
 *
 * "PlayPocket" FSE theme - My Account Orders.
 * Strictly WCAG AA 2.2 compliant.
 *
 * Styling: BEM (.retro-orders__*) in
 *   /src/styles/sections/retro-page-layouts.css
 */
export const OrdersRetro = () => {
  const orders = [
    { id: '#9942', date: 'Oct 12, 2026', total: 129.99, status: 'DELIVERED', items: 1 },
    { id: '#9831', date: 'Sep 04, 2026', total: 45.50, status: 'SHIPPED', items: 3 },
    { id: '#8720', date: 'Jan 15, 2026', total: 299.00, status: 'DELIVERED', items: 2 },
  ];

  return (
    <div className="retro-orders">
      <div className="retro-orders__header">
        <h2 className="retro-font-display retro-bold retro-orders__title">
          INVENTORY (ORDERS)
        </h2>
        <p className="retro-font-body retro-orders__subtitle">
          Review your past loot drops.
        </p>
      </div>

      <div className="retro-orders__list">
        {orders.map((order) => {
          const isDelivered = order.status === 'DELIVERED';
          return (
            <div key={order.id} className="retro-orders__card">
              {/* Info block */}
              <div className="retro-orders__card-info">
                <div className="retro-orders__card-icon">
                  <Package size={32} weight="bold" />
                </div>
                <div>
                  <div className="retro-font-display retro-bold retro-orders__card-id">
                    ORDER {order.id}
                  </div>
                  <div className="retro-font-body retro-orders__card-meta">
                    {order.date} · {order.items} Items
                  </div>
                  <div className="retro-font-display retro-bold retro-orders__card-total">
                    ${order.total.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Status & Action */}
              <div className="retro-orders__card-actions">
                <div className="retro-font-display retro-bold retro-orders__status-badge">
                  {isDelivered ? <CheckCircle weight="fill" /> : <Truck weight="bold" />}
                  {order.status}
                </div>
                <Link
                  to="/track-order"
                  className="retro-btn retro-btn--secondary retro-font-display retro-orders__track-link"
                >
                  TRACK / VIEW
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

OrdersRetro.displayName = 'OrdersRetro';