import React from 'react';
import { Link } from 'react-router';
import { Package, Heart, Bag as ShoppingBag, Star, TrendUp as TrendingUp, Gift, MapPin, CreditCard, Bell, User, ArrowRight, Clock, CheckCircle } from '@phosphor-icons/react';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { mockUserProfile, getRecentOrders, mockAccountStats } from '../../data/account';

/**
 * AccountDashboardWidgets Template — Funky Redesign (Phase 10)
 *
 * Modern card-based account dashboard with widget layout.
 * Provides quick overview and access to all account sections.
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
        <div className="wp-account-dashboard__welcome funky-glass-panel">
          <div className="wp-account-dashboard__welcome-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--wp--preset--spacing--30)' }}>
            <div>
              <Typography variant="h1" className="wp-account-dashboard__welcome-title funky-section__heading--gradient" style={{ marginBottom: 'var(--wp--preset--spacing--10)' }}>
                {`Welcome back, ${user.name}!`}
              </Typography>
              <p className="wp-account-dashboard__welcome-meta" style={{ color: 'var(--wp--preset--color--muted-foreground)', margin: 0 }}>
                {`Member since ${user.memberSince} \u2022 ${user.email}`}
              </p>
            </div>
            <Link to="/account/details" className="wp-account-dashboard__edit-profile funky-spring-hover" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--10)', padding: 'var(--wp--preset--spacing--20) var(--wp--preset--spacing--40)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--full)', color: 'var(--wp--preset--color--foreground)', textDecoration: 'none', border: '1px solid var(--wp--preset--color--border)' }}>
              <User size={18} weight="duotone" />
              <span><strong>Edit Profile</strong></span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="wp-account-dashboard__stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--wp--preset--spacing--30)', margin: 'var(--wp--preset--spacing--60) 0' }}>
          {stats.map((stat, index) => (
            <div key={index} className="wp-account-dashboard__stat-card funky-glass-panel funky-spring-hover" style={{ padding: 'var(--wp--preset--spacing--40)', position: 'relative', overflow: 'hidden' }}>
              <div className="wp-account-dashboard__stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--wp--preset--spacing--20)' }}>
                <div className={`wp-account-dashboard__stat-icon wp-account-dashboard__stat-icon--${stat.modifier}`} style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--wp--preset--color--surface)', color: 'var(--wp--preset--color--foreground)' }}>
                  <stat.icon size={20} weight="duotone" />
                </div>
              </div>
              <div className="wp-account-dashboard__stat-value" style={{ fontSize: 'var(--wp--preset--font-size--xx-large)', fontWeight: 'bold', lineHeight: 1, marginBottom: 'var(--wp--preset--spacing--10)' }}>{stat.value}</div>
              <p className="wp-account-dashboard__stat-label" style={{ color: 'var(--wp--preset--color--muted-foreground)', margin: 0, textTransform: 'uppercase', fontSize: 'var(--wp--preset--font-size--small)', letterSpacing: '0.05em' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="wp-account-dashboard__grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--wp--preset--spacing--40)' }}>
          {/* Left Column - Main Widgets */}
          <div className="wp-account-dashboard__main" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--40)' }}>
            {/* Recent Orders Widget */}
            <div className="wp-account-dashboard__widget funky-glass-panel" style={{ padding: 'var(--wp--preset--spacing--40)' }}>
              <div className="wp-account-dashboard__widget-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--wp--preset--color--border)', paddingBottom: 'var(--wp--preset--spacing--30)', marginBottom: 'var(--wp--preset--spacing--40)' }}>
                <div className="wp-account-dashboard__widget-header-left" style={{ display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)' }}>
                  <Package size={24} weight="duotone" className="wp-account-dashboard__widget-icon" style={{ color: 'var(--wp--preset--color--neon-cyan)' }} />
                  <Typography variant="h3" className="wp-account-dashboard__widget-title" style={{ margin: 0 }}>Recent orders</Typography>
                </div>
                <Link to="/account/orders" className="wp-account-dashboard__widget-link funky-spring-hover" style={{ display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--10)', color: 'var(--wp--preset--color--neon-cyan)', textDecoration: 'none' }}>
                  <small><strong>View All</strong></small>
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>

              <div className="wp-account-dashboard__orders" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--20)' }}>
                {recentOrders.map((order) => (
                  <Link key={order.id} to={`/account/orders/${order.id}`} className="wp-account-dashboard__order funky-glass-panel funky-spring-hover" style={{ display: 'block', padding: 'var(--wp--preset--spacing--30)', textDecoration: 'none', background: 'var(--wp--preset--color--surface)', border: '1px solid transparent' }}>
                    <div className="wp-account-dashboard__order-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--wp--preset--spacing--20)' }}>
                      <div>
                        <h4 className="wp-account-dashboard__order-id" style={{ margin: '0 0 var(--wp--preset--spacing--10) 0', color: 'var(--wp--preset--color--foreground)' }}>{order.id}</h4>
                        <p className="wp-account-dashboard__order-meta" style={{ margin: 0, color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)' }}>
                          {`${order.date} \u2022 ${order.items} items`}
                        </p>
                      </div>
                      <div className="wp-account-dashboard__order-summary" style={{ textAlign: 'right' }}>
                        <div className="wp-account-dashboard__order-total" style={{ fontWeight: 'bold', color: 'var(--wp--preset--color--foreground)', marginBottom: 'var(--wp--preset--spacing--10)' }}>{`$${order.total}`}</div>
                        <span className={`wp-account-dashboard__order-status wp-account-dashboard__order-status--${order.status === 'Delivered' ? 'delivered' : 'transit'}`} style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', background: order.status === 'Delivered' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(0, 255, 255, 0.1)', color: order.status === 'Delivered' ? 'var(--wp--preset--color--neon-lime)' : 'var(--wp--preset--color--neon-cyan)' }}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="wp-account-dashboard__widget funky-glass-panel" style={{ padding: 'var(--wp--preset--spacing--40)' }}>
              <Typography variant="h3" className="wp-account-dashboard__widget-title" style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>Quick actions</Typography>
              <div className="wp-account-dashboard__actions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'var(--wp--preset--spacing--20)' }}>
                {[
                  { to: '/account/orders', icon: Package, label: 'Track Orders', color: 'var(--wp--preset--color--neon-purple)' },
                  { to: '/account/wishlist', icon: Heart, label: 'View Wishlist', color: 'var(--wp--preset--color--neon-pink)' },
                  { to: '/account/addresses', icon: MapPin, label: 'Manage Addresses', color: 'var(--wp--preset--color--neon-cyan)' },
                  { to: '/account/details', icon: CreditCard, label: 'Payment Methods', color: 'var(--wp--preset--color--neon-lime)' },
                ].map((action) => (
                  <Link key={action.to} to={action.to} className="wp-account-dashboard__action-card funky-spring-hover" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--30)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--md)', textDecoration: 'none', color: 'var(--wp--preset--color--foreground)' }}>
                    <action.icon size={32} weight="duotone" className="wp-account-dashboard__action-icon" style={{ color: action.color }} />
                    <p className="wp-account-dashboard__action-label" style={{ margin: 0 }}><small>{action.label}</small></p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="wp-account-dashboard__sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--40)' }}>
            {/* Loyalty Points */}
            <div className="wp-account-dashboard__widget wp-account-dashboard__widget--loyalty funky-glass-panel" style={{ padding: 'var(--wp--preset--spacing--40)', background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))', border: '1px solid var(--wp--preset--color--neon-cyan)' }}>
              <div className="wp-account-dashboard__widget-header-left" style={{ display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', marginBottom: 'var(--wp--preset--spacing--30)' }}>
                <Star size={24} weight="duotone" className="wp-account-dashboard__loyalty-icon" style={{ color: 'var(--wp--preset--color--neon-yellow)' }} />
                <Typography variant="h4" className="wp-account-dashboard__widget-title" style={{ margin: 0 }}>Loyalty rewards</Typography>
              </div>
              <div className="wp-account-dashboard__loyalty-points" style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>
                <div className="wp-account-dashboard__loyalty-value funky-section__heading--gradient" style={{ fontSize: 'var(--wp--preset--font-size--xxx-large)', fontWeight: 'bold', lineHeight: 1, marginBottom: 'var(--wp--preset--spacing--10)' }}>
                  {user.loyaltyPoints}
                </div>
                <p className="wp-account-dashboard__loyalty-label" style={{ margin: 0, color: 'var(--wp--preset--color--muted-foreground)', textTransform: 'uppercase', fontSize: 'var(--wp--preset--font-size--small)', letterSpacing: '0.05em' }}>
                  <small>points available</small>
                </p>
              </div>
              <div className="wp-account-dashboard__loyalty-progress" style={{ marginBottom: 'var(--wp--preset--spacing--30)' }}>
                <div className="wp-account-dashboard__loyalty-progress-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--wp--preset--spacing--10)', fontSize: 'var(--wp--preset--font-size--small)' }}>
                  <span>Next Reward</span>
                  <span className="wp-account-dashboard__loyalty-progress-target" style={{ fontWeight: 'bold', color: 'var(--wp--preset--color--foreground)' }}>1,500 pts</span>
                </div>
                <div className="wp-account-dashboard__progress-bar" style={{ height: '8px', background: 'var(--wp--preset--color--surface)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    className="wp-account-dashboard__progress-fill"
                    style={{ width: '83%', height: '100%', background: 'linear-gradient(90deg, var(--wp--preset--color--neon-cyan), var(--wp--preset--color--neon-lime))' }}
                  />
                </div>
              </div>
              <Link
                to="/promotions/loyalty"
                className="wp-account-dashboard__loyalty-cta funky-spring-hover"
                style={{ display: 'inline-flex', justifyContent: 'center', width: '100%', padding: 'var(--wp--preset--spacing--20)', background: 'var(--wp--preset--color--foreground)', color: 'var(--wp--preset--color--background)', textDecoration: 'none', borderRadius: 'var(--wp--preset--border-radius--md)', fontWeight: 'bold' }}
              >
                <small>View Rewards</small>
              </Link>
            </div>

            {/* Notifications */}
            <div className="wp-account-dashboard__widget funky-glass-panel" style={{ padding: 'var(--wp--preset--spacing--40)' }}>
              <div className="wp-account-dashboard__widget-header-left" style={{ display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', marginBottom: 'var(--wp--preset--spacing--30)' }}>
                <Bell size={20} weight="duotone" className="wp-account-dashboard__widget-icon" style={{ color: 'var(--wp--preset--color--neon-purple)' }} />
                <Typography variant="h4" className="wp-account-dashboard__widget-title" style={{ margin: 0 }}>Notifications</Typography>
              </div>
              <div className="wp-account-dashboard__notifications" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--20)' }}>
                {[
                  { icon: CheckCircle, iconColor: 'var(--wp--preset--color--neon-lime)', iconWeight: 'fill' as const, title: 'Order delivered', time: '2 hours ago' },
                  { icon: Gift, iconColor: 'var(--wp--preset--color--neon-pink)', iconWeight: 'duotone' as const, title: 'New reward unlocked', time: '1 day ago' },
                  { icon: TrendingUp, iconColor: 'var(--wp--preset--color--neon-cyan)', iconWeight: 'duotone' as const, title: 'Price drop alert', time: '2 days ago' },
                ].map((notification, idx) => (
                  <div key={idx} className="wp-account-dashboard__notification funky-spring-hover" style={{ display: 'flex', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--20)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--sm)' }}>
                    <notification.icon size={18} weight={notification.iconWeight} className="wp-account-dashboard__notification-icon" style={{ color: notification.iconColor, flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p className="wp-account-dashboard__notification-title" style={{ margin: '0 0 4px 0', fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--foreground)' }}>
                        <strong>{notification.title}</strong>
                      </p>
                      <p className="wp-account-dashboard__notification-time" style={{ margin: 0, fontSize: '12px', color: 'var(--wp--preset--color--muted-foreground)' }}>
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Products */}
            <div className="wp-account-dashboard__widget funky-glass-panel" style={{ padding: 'var(--wp--preset--spacing--40)' }}>
              <Typography variant="h4" className="wp-account-dashboard__widget-title" style={{ margin: '0 0 var(--wp--preset--spacing--10) 0' }}>For you</Typography>
              <p className="wp-account-dashboard__widget-subtitle" style={{ margin: '0 0 var(--wp--preset--spacing--30) 0', color: 'var(--wp--preset--color--muted-foreground)' }}>
                <small>Based on your shopping history</small>
              </p>
              <Link
                to="/shop"
                className="wp-account-dashboard__recommendations-cta funky-spring-hover"
                style={{ display: 'inline-flex', justifyContent: 'center', width: '100%', padding: 'var(--wp--preset--spacing--20)', border: '1px solid var(--wp--preset--color--border)', color: 'var(--wp--preset--color--foreground)', textDecoration: 'none', borderRadius: 'var(--wp--preset--border-radius--md)' }}
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