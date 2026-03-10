import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Package, Heart, Bag as ShoppingBag, Star, TrendUp as TrendingUp, Gift, MapPin, CreditCard, Bell, User, ArrowRight, Clock, CheckCircle } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as AccountDataModule from '../../data/account';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var mockUserProfile = AccountDataModule.mockUserProfile;
var getRecentOrders = AccountDataModule.getRecentOrders;
var mockAccountStats = AccountDataModule.mockAccountStats;

/**
 * AccountDashboardWidgets Template — Funky Redesign (Phase 10)
 * 
 * Modern card-based account dashboard with widget layout.
 * Provides quick overview and access to all account sections.
 * 
 * Funky treatments (inherited from account-auth-funky.css):
 *   Widget cards:   Glassmorphism panels with neon hover glow
 *   Stats numbers:  Gradient accent text (cyan→pink)
 *   Quick actions:  Neon icon circles, spring hover lift
 *   Progress bars:  Gradient fill (cyan→lime)
 *   Welcome card:   Glass panel with gradient border accent
 * 
 * **WordPress Mapping:** my-account/dashboard-widgets.php
 * **CSS:** `/src/styles/sections/account-auth-funky.css`
 * **Dark Mode:** ✅ Full support via CSS variables
 * 
 * @template
 * @example
 * Route: /account/dashboard-widgets
 */
export function AccountDashboardWidgets() {
  var user = {
    name: mockUserProfile.firstName + ' ' + mockUserProfile.lastName,
    email: mockUserProfile.email,
    memberSince: new Date(mockUserProfile.memberSince).getFullYear().toString(),
    loyaltyPoints: mockAccountStats.rewardPoints
  };

  var recentOrders = getRecentOrders(3).map(function(order) { return {
    id: order.id,
    date: new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    total: order.total,
    status: order.status.charAt(0).toUpperCase() + order.status.slice(1),
    items: order.itemCount
  }; });

  var stats = [
    { label: 'Total Orders', value: mockAccountStats.totalOrders.toString(), icon: ShoppingBag, modifier: 'purple' },
    { label: 'Wishlist Items', value: '12', icon: Heart, modifier: 'red' }, // Wishlist count hardcoded in stats for now
    { label: 'Loyalty Points', value: mockAccountStats.rewardPoints.toLocaleString(), icon: Star, modifier: 'yellow' },
    { label: 'Saved Addresses', value: '2', icon: MapPin, modifier: 'blue' }, // Addresses count hardcoded
  ];

  return React.createElement(Layout, null,
    React.createElement(Container, { className: "wp-account-dashboard" },
      /* Welcome Header */
      React.createElement('div', { className: "wp-account-dashboard__welcome funky-glass-panel" },
        React.createElement('div', { className: "wp-account-dashboard__welcome-content", style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--wp--preset--spacing--30)' } },
          React.createElement('div', null,
            React.createElement(Typography, { variant: "h1", className: "wp-account-dashboard__welcome-title funky-section__heading--gradient", style: { marginBottom: 'var(--wp--preset--spacing--10)' } },
              "Welcome back, " + user.name + "!"
            ),
            React.createElement('p', { className: "wp-account-dashboard__welcome-meta", style: { color: 'var(--wp--preset--color--muted-foreground)', margin: 0 } },
              "Member since " + user.memberSince + " \u2022 " + user.email
            )
          ),
          React.createElement(Link, { to: "/account/details", className: "wp-account-dashboard__edit-profile funky-spring-hover", style: { display: 'inline-flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--10)', padding: 'var(--wp--preset--spacing--20) var(--wp--preset--spacing--40)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--full)', color: 'var(--wp--preset--color--foreground)', textDecoration: 'none', border: '1px solid var(--wp--preset--color--border)' } },
            React.createElement(User, { size: 18, weight: "duotone" }),
            React.createElement('span', null, React.createElement('strong', null, "Edit Profile"))
          )
        )
      ),

      /* Stats Grid */
      React.createElement('div', { className: "wp-account-dashboard__stats", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--wp--preset--spacing--30)', margin: 'var(--wp--preset--spacing--60) 0' } },
        stats.map(function(stat, index) { return (
          React.createElement('div', { key: index, className: "wp-account-dashboard__stat-card funky-glass-panel funky-spring-hover", style: { padding: 'var(--wp--preset--spacing--40)', position: 'relative', overflow: 'hidden' } },
            React.createElement('div', { className: "wp-account-dashboard__stat-header", style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--wp--preset--spacing--20)' } },
              React.createElement('div', { className: 'wp-account-dashboard__stat-icon wp-account-dashboard__stat-icon--' + stat.modifier, style: { width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--wp--preset--color--surface)', color: 'var(--wp--preset--color--foreground)' } },
                React.createElement(stat.icon, { size: 20, weight: "duotone" })
              )
            ),
            React.createElement('div', { className: "wp-account-dashboard__stat-value", style: { fontSize: 'var(--wp--preset--font-size--xx-large)', fontWeight: 'bold', lineHeight: 1, marginBottom: 'var(--wp--preset--spacing--10)' } }, stat.value),
            React.createElement('p', { className: "wp-account-dashboard__stat-label", style: { color: 'var(--wp--preset--color--muted-foreground)', margin: 0, textTransform: 'uppercase', fontSize: 'var(--wp--preset--font-size--small)', letterSpacing: '0.05em' } },
              stat.label
            )
          )
        ); })
      ),

      React.createElement('div', { className: "wp-account-dashboard__grid", style: { display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--wp--preset--spacing--40)' } },
        /* Left Column - Main Widgets */
        React.createElement('div', { className: "wp-account-dashboard__main", style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--40)' } },
          /* Recent Orders Widget */
          React.createElement('div', { className: "wp-account-dashboard__widget funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--40)' } },
            React.createElement('div', { className: "wp-account-dashboard__widget-header", style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--wp--preset--color--border)', paddingBottom: 'var(--wp--preset--spacing--30)', marginBottom: 'var(--wp--preset--spacing--40)' } },
              React.createElement('div', { className: "wp-account-dashboard__widget-header-left", style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)' } },
                React.createElement(Package, { size: 24, weight: "duotone", className: "wp-account-dashboard__widget-icon", style: { color: 'var(--wp--preset--color--neon-cyan)' } }),
                React.createElement(Typography, { variant: "h3", className: "wp-account-dashboard__widget-title", style: { margin: 0 } }, "Recent orders")
              ),
              React.createElement(Link, { to: "/account/orders", className: "wp-account-dashboard__widget-link funky-spring-hover", style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--10)', color: 'var(--wp--preset--color--neon-cyan)', textDecoration: 'none' } },
                React.createElement('small', null, React.createElement('strong', null, "View All")),
                React.createElement(ArrowRight, { size: 14, weight: "bold" })
              )
            ),

            React.createElement('div', { className: "wp-account-dashboard__orders", style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--20)' } },
              recentOrders.map(function(order) { return (
                React.createElement(Link, { key: order.id, to: '/account/orders/' + order.id, className: "wp-account-dashboard__order funky-glass-panel funky-spring-hover", style: { display: 'block', padding: 'var(--wp--preset--spacing--30)', textDecoration: 'none', background: 'var(--wp--preset--color--surface)', border: '1px solid transparent' } },
                  React.createElement('div', { className: "wp-account-dashboard__order-info", style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--wp--preset--spacing--20)' } },
                    React.createElement('div', null,
                      React.createElement('h4', { className: "wp-account-dashboard__order-id", style: { margin: '0 0 var(--wp--preset--spacing--10) 0', color: 'var(--wp--preset--color--foreground)' } }, order.id),
                      React.createElement('p', { className: "wp-account-dashboard__order-meta", style: { margin: 0, color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)' } },
                        order.date + " \u2022 " + order.items + " items"
                      )
                    ),
                    React.createElement('div', { className: "wp-account-dashboard__order-summary", style: { textAlign: 'right' } },
                      React.createElement('div', { className: "wp-account-dashboard__order-total", style: { fontWeight: 'bold', color: 'var(--wp--preset--color--foreground)', marginBottom: 'var(--wp--preset--spacing--10)' } }, "$" + order.total),
                      React.createElement('span', { className: 'wp-account-dashboard__order-status wp-account-dashboard__order-status--' + (order.status === 'Delivered' ? 'delivered' : 'transit'), style: { display: 'inline-block', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', background: order.status === 'Delivered' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(0, 255, 255, 0.1)', color: order.status === 'Delivered' ? 'var(--wp--preset--color--neon-lime)' : 'var(--wp--preset--color--neon-cyan)' } },
                        order.status
                      )
                    )
                  )
                )
              ); })
            )
          ),

          /* Quick Actions */
          React.createElement('div', { className: "wp-account-dashboard__widget funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--40)' } },
            React.createElement(Typography, { variant: "h3", className: "wp-account-dashboard__widget-title", style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "Quick actions"),
            React.createElement('div', { className: "wp-account-dashboard__actions-grid", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'var(--wp--preset--spacing--20)' } },
              React.createElement(Link, { to: "/account/orders", className: "wp-account-dashboard__action-card funky-spring-hover", style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--30)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--md)', textDecoration: 'none', color: 'var(--wp--preset--color--foreground)' } },
                React.createElement(Package, { size: 32, weight: "duotone", className: "wp-account-dashboard__action-icon", style: { color: 'var(--wp--preset--color--neon-purple)' } }),
                React.createElement('p', { className: "wp-account-dashboard__action-label", style: { margin: 0 } }, React.createElement('small', null, "Track Orders"))
              ),
              React.createElement(Link, { to: "/account/wishlist", className: "wp-account-dashboard__action-card funky-spring-hover", style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--30)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--md)', textDecoration: 'none', color: 'var(--wp--preset--color--foreground)' } },
                React.createElement(Heart, { size: 32, weight: "duotone", className: "wp-account-dashboard__action-icon", style: { color: 'var(--wp--preset--color--neon-pink)' } }),
                React.createElement('p', { className: "wp-account-dashboard__action-label", style: { margin: 0 } }, React.createElement('small', null, "View Wishlist"))
              ),
              React.createElement(Link, { to: "/account/addresses", className: "wp-account-dashboard__action-card funky-spring-hover", style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--30)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--md)', textDecoration: 'none', color: 'var(--wp--preset--color--foreground)' } },
                React.createElement(MapPin, { size: 32, weight: "duotone", className: "wp-account-dashboard__action-icon", style: { color: 'var(--wp--preset--color--neon-cyan)' } }),
                React.createElement('p', { className: "wp-account-dashboard__action-label", style: { margin: 0 } }, React.createElement('small', null, "Manage Addresses"))
              ),
              React.createElement(Link, { to: "/account/details", className: "wp-account-dashboard__action-card funky-spring-hover", style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--30)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--md)', textDecoration: 'none', color: 'var(--wp--preset--color--foreground)' } },
                React.createElement(CreditCard, { size: 32, weight: "duotone", className: "wp-account-dashboard__action-icon", style: { color: 'var(--wp--preset--color--neon-lime)' } }),
                React.createElement('p', { className: "wp-account-dashboard__action-label", style: { margin: 0 } }, React.createElement('small', null, "Payment Methods"))
              )
            )
          )
        ),

        /* Right Column - Sidebar Widgets */
        React.createElement('div', { className: "wp-account-dashboard__sidebar", style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--40)' } },
          /* Loyalty Points */
          React.createElement('div', { className: "wp-account-dashboard__widget wp-account-dashboard__widget--loyalty funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--40)', background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))', border: '1px solid var(--wp--preset--color--neon-cyan)' } },
            React.createElement('div', { className: "wp-account-dashboard__widget-header-left", style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement(Star, { size: 24, weight: "duotone", className: "wp-account-dashboard__loyalty-icon", style: { color: 'var(--wp--preset--color--neon-yellow)' } }),
              React.createElement(Typography, { variant: "h4", className: "wp-account-dashboard__widget-title", style: { margin: 0 } }, "Loyalty rewards")
            ),
            React.createElement('div', { className: "wp-account-dashboard__loyalty-points", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('div', { className: "wp-account-dashboard__loyalty-value funky-section__heading--gradient", style: { fontSize: 'var(--wp--preset--font-size--xxx-large)', fontWeight: 'bold', lineHeight: 1, marginBottom: 'var(--wp--preset--spacing--10)' } },
                user.loyaltyPoints
              ),
              React.createElement('p', { className: "wp-account-dashboard__loyalty-label", style: { margin: 0, color: 'var(--wp--preset--color--muted-foreground)', textTransform: 'uppercase', fontSize: 'var(--wp--preset--font-size--small)', letterSpacing: '0.05em' } },
                React.createElement('small', null, "points available")
              )
            ),
            React.createElement('div', { className: "wp-account-dashboard__loyalty-progress", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('div', { className: "wp-account-dashboard__loyalty-progress-header", style: { display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--wp--preset--spacing--10)', fontSize: 'var(--wp--preset--font-size--small)' } },
                React.createElement('span', null, "Next Reward"),
                React.createElement('span', { className: "wp-account-dashboard__loyalty-progress-target", style: { fontWeight: 'bold', color: 'var(--wp--preset--color--foreground)' } }, "1,500 pts")
              ),
              React.createElement('div', { className: "wp-account-dashboard__progress-bar", style: { height: '8px', background: 'var(--wp--preset--color--surface)', borderRadius: '4px', overflow: 'hidden' } },
                React.createElement('div', {
                  className: "wp-account-dashboard__progress-fill",
                  style: { width: '83%', height: '100%', background: 'linear-gradient(90deg, var(--wp--preset--color--neon-cyan), var(--wp--preset--color--neon-lime))' }
                })
              )
            ),
            React.createElement(Link, {
              to: "/promotions/loyalty",
              className: "wp-account-dashboard__loyalty-cta funky-spring-hover",
              style: { display: 'inline-flex', justifyContent: 'center', width: '100%', padding: 'var(--wp--preset--spacing--20)', background: 'var(--wp--preset--color--foreground)', color: 'var(--wp--preset--color--background)', textDecoration: 'none', borderRadius: 'var(--wp--preset--border-radius--md)', fontWeight: 'bold' }
            },
              React.createElement('small', null, "View Rewards")
            )
          ),

          /* Notifications */
          React.createElement('div', { className: "wp-account-dashboard__widget funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--40)' } },
            React.createElement('div', { className: "wp-account-dashboard__widget-header-left", style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement(Bell, { size: 20, weight: "duotone", className: "wp-account-dashboard__widget-icon", style: { color: 'var(--wp--preset--color--neon-purple)' } }),
              React.createElement(Typography, { variant: "h4", className: "wp-account-dashboard__widget-title", style: { margin: 0 } }, "Notifications")
            ),
            React.createElement('div', { className: "wp-account-dashboard__notifications", style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--20)' } },
              React.createElement('div', { className: "wp-account-dashboard__notification funky-spring-hover", style: { display: 'flex', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--20)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--sm)' } },
                React.createElement(CheckCircle, { size: 18, weight: "fill", className: "wp-account-dashboard__notification-icon", style: { color: 'var(--wp--preset--color--neon-lime)', flexShrink: 0, marginTop: '2px' } }),
                React.createElement('div', null,
                  React.createElement('p', { className: "wp-account-dashboard__notification-title", style: { margin: '0 0 4px 0', fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--foreground)' } },
                    React.createElement('strong', null, "Order delivered")
                  ),
                  React.createElement('p', { className: "wp-account-dashboard__notification-time", style: { margin: 0, fontSize: '12px', color: 'var(--wp--preset--color--muted-foreground)' } },
                    "2 hours ago"
                  )
                )
              ),
              React.createElement('div', { className: "wp-account-dashboard__notification funky-spring-hover", style: { display: 'flex', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--20)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--sm)' } },
                React.createElement(Gift, { size: 18, weight: "duotone", className: "wp-account-dashboard__notification-icon", style: { color: 'var(--wp--preset--color--neon-pink)', flexShrink: 0, marginTop: '2px' } }),
                React.createElement('div', null,
                  React.createElement('p', { className: "wp-account-dashboard__notification-title", style: { margin: '0 0 4px 0', fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--foreground)' } },
                    React.createElement('strong', null, "New reward unlocked")
                  ),
                  React.createElement('p', { className: "wp-account-dashboard__notification-time", style: { margin: 0, fontSize: '12px', color: 'var(--wp--preset--color--muted-foreground)' } },
                    "1 day ago"
                  )
                )
              ),
              React.createElement('div', { className: "wp-account-dashboard__notification funky-spring-hover", style: { display: 'flex', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--20)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--sm)' } },
                React.createElement(TrendingUp, { size: 18, weight: "duotone", className: "wp-account-dashboard__notification-icon", style: { color: 'var(--wp--preset--color--neon-cyan)', flexShrink: 0, marginTop: '2px' } }),
                React.createElement('div', null,
                  React.createElement('p', { className: "wp-account-dashboard__notification-title", style: { margin: '0 0 4px 0', fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--foreground)' } },
                    React.createElement('strong', null, "Price drop alert")
                  ),
                  React.createElement('p', { className: "wp-account-dashboard__notification-time", style: { margin: 0, fontSize: '12px', color: 'var(--wp--preset--color--muted-foreground)' } },
                    "2 days ago"
                  )
                )
              )
            )
          ),

          /* Recommended Products */
          React.createElement('div', { className: "wp-account-dashboard__widget funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--40)' } },
            React.createElement(Typography, { variant: "h4", className: "wp-account-dashboard__widget-title", style: { margin: '0 0 var(--wp--preset--spacing--10) 0' } }, "For you"),
            React.createElement('p', { className: "wp-account-dashboard__widget-subtitle", style: { margin: '0 0 var(--wp--preset--spacing--30) 0', color: 'var(--wp--preset--color--muted-foreground)' } },
              React.createElement('small', null, "Based on your shopping history")
            ),
            React.createElement(Link, {
              to: "/shop",
              className: "wp-account-dashboard__recommendations-cta funky-spring-hover",
              style: { display: 'inline-flex', justifyContent: 'center', width: '100%', padding: 'var(--wp--preset--spacing--20)', border: '1px solid var(--wp--preset--color--border)', color: 'var(--wp--preset--color--foreground)', textDecoration: 'none', borderRadius: 'var(--wp--preset--border-radius--md)' }
            },
              React.createElement('small', null, React.createElement('strong', null, "Shop Recommendations"))
            )
          )
        )
      )
    )
  );
}

export default AccountDashboardWidgets;