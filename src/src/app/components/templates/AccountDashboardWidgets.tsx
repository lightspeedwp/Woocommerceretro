import React from 'react';
import { Link } from 'react-router';
import { Package, Heart, Bag as ShoppingBag, Star, TrendUp as TrendingUp, Gift, MapPin, CreditCard, Bell, User, ArrowRight, Clock, CheckCircle } from '../../utils/phosphor-compat';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { mockUserProfile, getRecentOrders, mockAccountStats } from '../../data/account';

/**
 * AccountDashboardWidgets Template
 *
 * Card-based account dashboard with widget layout.
 * Provides quick overview and access to all account sections.
 *
 * BEM block: wp-account-dashboard
 * CSS: /src/styles/sections/account-dashboard-widgets.css
 *
 * @template
 * @example
 * Route: /account/dashboard-widgets
 */
export const AccountDashboardWidgets = () => {
  const user = {
    name: `${mockUserProfile.firstName} ${mockUserProfile.lastName}`,
    email: mockUserProfile.email,
    memberSince: new Date(mockUserProfile.memberSince).getFullYear().toString(),
    loyaltyPoints: mockAccountStats.rewardPoints
  };

  const recentOrders = getRecentOrders(3).map((order) => ({
    id: order.id,
    date: new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    total: order.total,
    status: order.status.charAt(0).toUpperCase() + order.status.slice(1),
    items: order.itemCount
  }));

  const stats = [
    { label: 'Total Orders', value: mockAccountStats.totalOrders.toString(), icon: ShoppingBag, modifier: 'purple' },
    { label: 'Wishlist Items', value: '12', icon: Heart, modifier: 'red' },
    { label: 'Loyalty Points', value: mockAccountStats.rewardPoints.toLocaleString(), icon: Star, modifier: 'yellow' },
    { label: 'Saved Addresses', value: '2', icon: MapPin, modifier: 'blue' },
  ];

  return (
    <Layout>
      <Container className="wp-account-dashboard">
        {/* Welcome Header */}
        <div className="wp-account-dashboard__welcome">
          <div className="wp-account-dashboard__welcome-content">
            <div>
              <Typography variant="h1" className="wp-account-dashboard__welcome-title">
                {`Welcome back, ${user.name}!`}
              </Typography>
              <p className="wp-account-dashboard__welcome-meta">
                {`Member since ${user.memberSince} \u2022 ${user.email}`}
              </p>
            </div>
            <Link to="/account/details" className="wp-account-dashboard__edit-profile">
              <User size={18} weight="duotone" />
              <span>Edit Profile</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="wp-account-dashboard__stats">
          {stats.map((stat, index) => (
            <div key={index} className="wp-account-dashboard__stat-card">
              <div className="wp-account-dashboard__stat-header">
                <div className={`wp-account-dashboard__stat-icon wp-account-dashboard__stat-icon--${stat.modifier}`}>
                  <stat.icon size={20} weight="duotone" />
                </div>
              </div>
              <div className="wp-account-dashboard__stat-value">{stat.value}</div>
              <p className="wp-account-dashboard__stat-label">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="wp-account-dashboard__grid">
          {/* Left Column - Main Widgets */}
          <div className="wp-account-dashboard__main">
            {/* Recent Orders Widget */}
            <div className="wp-account-dashboard__widget">
              <div className="wp-account-dashboard__widget-header">
                <div className="wp-account-dashboard__widget-header-left">
                  <Package size={24} weight="duotone" className="wp-account-dashboard__widget-icon" />
                  <Typography variant="h3" className="wp-account-dashboard__widget-title">Recent orders</Typography>
                </div>
                <Link to="/account/orders" className="wp-account-dashboard__widget-link">
                  <small><strong>View All</strong></small>
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>

              <div className="wp-account-dashboard__orders">
                {recentOrders.map((order) => (
                  <Link key={order.id} to={`/account/orders/${order.id}`} className="wp-account-dashboard__order">
                    <div className="wp-account-dashboard__order-info">
                      <div>
                        <h4 className="wp-account-dashboard__order-id">{order.id}</h4>
                        <p className="wp-account-dashboard__order-meta">
                          {`${order.date} \u2022 ${order.items} items`}
                        </p>
                      </div>
                      <div className="wp-account-dashboard__order-summary">
                        <div className="wp-account-dashboard__order-total">{`$${order.total}`}</div>
                        <span className={`wp-account-dashboard__order-status wp-account-dashboard__order-status--${order.status === 'Delivered' ? 'delivered' : 'transit'}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="wp-account-dashboard__widget">
              <Typography variant="h3" className="wp-account-dashboard__widget-title wp-account-dashboard__widget-title--spaced">Quick actions</Typography>
              <div className="wp-account-dashboard__actions-grid">
                {[
                  { to: '/account/orders', icon: Package, label: 'Track Orders' },
                  { to: '/account/wishlist', icon: Heart, label: 'View Wishlist' },
                  { to: '/account/addresses', icon: MapPin, label: 'Manage Addresses' },
                  { to: '/account/details', icon: CreditCard, label: 'Payment Methods' },
                ].map((action) => (
                  <Link key={action.to} to={action.to} className="wp-account-dashboard__action-card">
                    <action.icon size={32} weight="duotone" className="wp-account-dashboard__action-icon" />
                    <p className="wp-account-dashboard__action-label"><small>{action.label}</small></p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="wp-account-dashboard__sidebar">
            {/* Loyalty Points */}
            <div className="wp-account-dashboard__widget wp-account-dashboard__widget--loyalty">
              <div className="wp-account-dashboard__widget-header-left wp-account-dashboard__widget-header-left--standalone">
                <Star size={24} weight="duotone" className="wp-account-dashboard__loyalty-icon" />
                <Typography variant="h4" className="wp-account-dashboard__widget-title">Loyalty rewards</Typography>
              </div>
              <div className="wp-account-dashboard__loyalty-points">
                <div className="wp-account-dashboard__loyalty-value">
                  {user.loyaltyPoints}
                </div>
                <p className="wp-account-dashboard__loyalty-label">
                  <small>points available</small>
                </p>
              </div>
              <div className="wp-account-dashboard__loyalty-progress">
                <div className="wp-account-dashboard__loyalty-progress-header">
                  <span>Next Reward</span>
                  <span className="wp-account-dashboard__loyalty-progress-target">1,500 pts</span>
                </div>
                <div className="wp-account-dashboard__progress-bar">
                  <div
                    className="wp-account-dashboard__progress-fill"
                    style={{ width: '83%' }}
                  />
                </div>
              </div>
              <Link
                to="/promotions/loyalty"
                className="wp-account-dashboard__loyalty-cta"
              >
                <small>View Rewards</small>
              </Link>
            </div>

            {/* Notifications */}
            <div className="wp-account-dashboard__widget">
              <div className="wp-account-dashboard__widget-header-left wp-account-dashboard__widget-header-left--standalone">
                <Bell size={20} weight="duotone" className="wp-account-dashboard__widget-icon" />
                <Typography variant="h4" className="wp-account-dashboard__widget-title">Notifications</Typography>
              </div>
              <div className="wp-account-dashboard__notifications">
                {[
                  { icon: CheckCircle, iconWeight: 'fill' as const, title: 'Order delivered', time: '2 hours ago' },
                  { icon: Gift, iconWeight: 'duotone' as const, title: 'New reward unlocked', time: '1 day ago' },
                  { icon: TrendingUp, iconWeight: 'duotone' as const, title: 'Price drop alert', time: '2 days ago' },
                ].map((notification, idx) => (
                  <div key={idx} className="wp-account-dashboard__notification">
                    <notification.icon size={18} weight={notification.iconWeight} className="wp-account-dashboard__notification-icon" />
                    <div>
                      <p className="wp-account-dashboard__notification-title">
                        <strong>{notification.title}</strong>
                      </p>
                      <p className="wp-account-dashboard__notification-time">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Products */}
            <div className="wp-account-dashboard__widget">
              <Typography variant="h4" className="wp-account-dashboard__widget-title wp-account-dashboard__widget-title--spaced-sm">For you</Typography>
              <p className="wp-account-dashboard__widget-subtitle">
                <small>Based on your shopping history</small>
              </p>
              <Link
                to="/shop"
                className="wp-account-dashboard__recommendations-cta"
              >
                <small><strong>Shop Recommendations</strong></small>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default AccountDashboardWidgets;