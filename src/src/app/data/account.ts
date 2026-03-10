/**
 * Account & User Data Mock Data
 * 
 * Contains account navigation, user profiles, order history, and account stats
 * for customer account pages and dashboards.
 * 
 * **Used By:**
 * - AccountLayout.tsx
 * - AccountSidebarNav pattern
 * - AccountDashboardSection pattern
 * - Account pages
 * 
 * **Data Structure:**
 * - Account navigation items
 * - User profile data
 * - Order history
 * - Account statistics
 * - Download items
 * - Saved addresses
 * 
 * @module data/account
 */

import { SquaresFour as LayoutDashboard, ShoppingBag, Download, MapPin, User, SignOut as LogOut, Bell, Heart, Gear as Settings, Trophy } from '@phosphor-icons/react';

/**
 * Account Navigation Items
 * 
 * Primary navigation for account dashboard.
 */
export var accountNavItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/account',
    icon: LayoutDashboard,
    description: 'Account overview and quick actions'
  },
  {
    id: 'orders',
    label: 'Orders',
    href: '/account/orders',
    icon: ShoppingBag,
    badge: 2,
    description: 'View order history and track shipments'
  },
  {
    id: 'downloads',
    label: 'Downloads',
    href: '/account/downloads',
    icon: Download,
    description: 'Access your digital downloads'
  },
  {
    id: 'addresses',
    label: 'Addresses',
    href: '/account/addresses',
    icon: MapPin,
    description: 'Manage shipping and billing addresses'
  },
  {
    id: 'wishlist',
    label: 'Wishlist',
    href: '/account/wishlist',
    icon: Heart,
    badge: 5,
    description: 'Your saved items'
  },
  {
    id: 'account-details',
    label: 'Account Details',
    href: '/account/details',
    icon: User,
    description: 'Edit your account information'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    href: '/account/notifications',
    icon: Bell,
    badge: 3,
    description: 'Manage notification preferences'
  },
  {
    id: 'loyalty',
    label: 'Loyalty',
    href: '/account/loyalty',
    icon: Trophy,
    description: 'View points, tier status, and rewards'
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/account/settings',
    icon: Settings,
    description: 'Account settings and preferences'
  },
  {
    id: 'logout',
    label: 'Logout',
    href: '/logout',
    icon: LogOut,
    description: 'Sign out of your account'
  }
];

/**
 * Mock User Profile
 * 
 * Sample user profile for development/testing.
 */
export var mockUserProfile = {
  id: 'user-001',
  firstName: 'Sarah',
  lastName: 'Johnson',
  email: 'sarah.johnson@example.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  memberSince: '2023-01-15',
  memberTier: 'Premium',
  emailVerified: true,
  twoFactorEnabled: true
};

/**
 * Mock Order History
 * 
 * Sample recent orders for development/testing.
 */
export var mockOrders = [
  {
    id: '#1847',
    date: '2024-12-20T10:30:00Z',
    status: 'shipped',
    total: 124.99,
    itemCount: 3,
    trackingNumber: '1Z999AA10123456784',
    estimatedDelivery: '2024-12-28',
    items: [
      {
        id: 'item-1',
        name: 'Premium Wireless Headphones',
        quantity: 1,
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200'
      },
      {
        id: 'item-2',
        name: 'USB-C Charging Cable',
        quantity: 2,
        price: 22.50,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=200'
      }
    ]
  },
  {
    id: '1842',
    date: '2024-12-15T14:20:00Z',
    status: 'completed',
    total: 89.99,
    itemCount: 1,
    items: [
      {
        id: 'item-3',
        name: 'Smart Watch',
        quantity: 1,
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200'
      }
    ]
  },
  {
    id: '1839',
    date: '2024-12-10T09:15:00Z',
    status: 'completed',
    total: 234.50,
    itemCount: 5,
    items: [
      {
        id: 'item-4',
        name: 'Laptop Stand',
        quantity: 1,
        price: 49.99
      },
      {
        id: 'item-5',
        name: 'Wireless Mouse',
        quantity: 2,
        price: 35.99
      },
      {
        id: 'item-6',
        name: 'Keyboard',
        quantity: 1,
        price: 79.99
      },
      {
        id: 'item-7',
        name: 'Mouse Pad',
        quantity: 1,
        price: 12.99
      }
    ]
  }
];

/**
 * Mock Download Items
 * 
 * Sample downloadable products for development/testing.
 */
export var mockDownloads = [
  {
    id: 'dl-001',
    name: 'Design System UI Kit',
    orderId: '#1842',
    date: '2024-12-15',
    downloadsRemaining: 5,
    expiresAt: '2025-12-15',
    downloadUrl: '/downloads/ui-kit.zip',
    fileSize: '25.4 MB'
  },
  {
    id: 'dl-002',
    name: 'Premium Icon Pack',
    orderId: '#1839',
    date: '2024-12-10',
    downloadsRemaining: 3,
    expiresAt: '2025-12-10',
    downloadUrl: '/downloads/icon-pack.zip',
    fileSize: '12.8 MB'
  },
  {
    id: 'dl-003',
    name: 'WordPress Theme',
    orderId: '#1835',
    date: '2024-12-01',
    downloadsRemaining: 10,
    expiresAt: '2025-12-01',
    downloadUrl: '/downloads/wp-theme.zip',
    fileSize: '8.2 MB'
  }
];

/**
 * Mock Saved Addresses
 * 
 * Sample addresses for development/testing.
 */
export var mockAddresses = [
  {
    id: 'addr-001',
    type: 'both',
    firstName: 'Sarah',
    lastName: 'Johnson',
    company: 'Design Co.',
    address1: '123 Main Street',
    address2: 'Apt 4B',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94102',
    country: 'United States',
    phone: '+1 (555) 123-4567',
    isDefault: true
  },
  {
    id: 'addr-002',
    type: 'shipping',
    firstName: 'Sarah',
    lastName: 'Johnson',
    address1: '456 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90001',
    country: 'United States',
    phone: '+1 (555) 987-6543',
    isDefault: false
  }
];

/**
 * Mock Account Stats
 * 
 * Sample account statistics for development/testing.
 */
export var mockAccountStats = {
  totalOrders: 24,
  totalSpent: 2847.50,
  memberSince: 'January 2023',
  rewardPoints: 1250,
  nextBillingDate: '2025-01-15',
  activeSubscriptions: 2
};

/**
 * Helper function to get order by ID
 * 
 * @param {string} orderId - Order identifier
 * @returns {Order | undefined}
 */
export function getOrderById(orderId) {
  return mockOrders.find(function(order) {
    return order.id === orderId;
  });
}

/**
 * Helper function to get orders by status
 * 
 * @param {OrderStatus} status - Order status
 * @returns {Order[]}
 */
export function getOrdersByStatus(status) {
  return mockOrders.filter(function(order) {
    return order.status === status;
  });
}

/**
 * Helper function to get recent orders
 * 
 * @param {number} limit - Number of orders to return
 * @returns {Order[]}
 */
export function getRecentOrders(limit) {
  var limitVal = limit || 5;
  return mockOrders.slice(0, limitVal);
}

/**
 * Helper function to get default address
 * 
 * @returns {Address | undefined}
 */
export function getDefaultAddress() {
  return mockAddresses.find(function(addr) {
    return addr.isDefault;
  });
}

/**
 * Helper function to get addresses by type
 * 
 * @param {'shipping' | 'billing' | 'both'} type - Address type
 * @returns {Address[]}
 */
export function getAddressesByType(type) {
  return mockAddresses.filter(function(addr) {
    return addr.type === type || addr.type === 'both';
  });
}

/**
 * Helper function to get navigation item by ID
 * 
 * @param {string} id - Navigation item ID
 * @returns {AccountNavItem | undefined}
 */
export function getNavItemById(id) {
  return accountNavItems.find(function(item) {
    return item.id === id;
  });
}

/**
 * Helper function to calculate total badge count
 * 
 * @returns {number}
 */
export function getTotalBadgeCount() {
  return accountNavItems.reduce(function(total, item) {
    return total + (item.badge || 0);
  }, 0);
}

export default {
  accountNavItems,
  mockUserProfile,
  mockOrders,
  mockDownloads,
  mockAddresses,
  mockAccountStats,
  getOrderById,
  getOrdersByStatus,
  getRecentOrders,
  getDefaultAddress,
  getAddressesByType,
  getNavItemById,
  getTotalBadgeCount,
};