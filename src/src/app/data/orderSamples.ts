/**
 * Order Samples Mock Data
 * 
 * Sample/demo order data used for documentation and testing.
 * Optimized for Figma Make parser:
 * 1. No optional chaining, nullish coalescing, or spread at module level
 * 2. ASCII characters only
 */

export const sampleOrderItems = [
  {
    id: 1,
    name: 'Album',
    quantity: 1,
    price: '$15.00',
    link: '/product/album',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Cap',
    quantity: 1,
    price: '$16.00',
    link: '/product/cap',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Long Sleeve Tee',
    quantity: 1,
    price: '$25.00',
    link: '/product/long-sleeve-tee',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200'
  }
];

export const sampleShipping = {
  method: 'Local Pickup',
  cost: 'Free'
};

export const samplePayment = {
  method: 'Credit Card',
  lastFour: '4242'
};

export const sampleTotals = {
  subtotal: '$56.00',
  shipping: '$0.00',
  tax: '$4.48',
  total: '$60.48'
};

export const sampleOrder = {
  items: sampleOrderItems,
  shipping: sampleShipping,
  payment: samplePayment,
  totals: sampleTotals,
  orderNumber: '12345',
  orderDate: 'January 1, 2026'
};

export const largeSampleOrderItems = [
  {
    id: 1,
    name: 'Album',
    quantity: 1,
    price: '$15.00',
    link: '/product/album',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Cap',
    quantity: 1,
    price: '$16.00',
    link: '/product/cap',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Long Sleeve Tee',
    quantity: 1,
    price: '$25.00',
    link: '/product/long-sleeve-tee',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 4,
    name: 'Hoodie',
    quantity: 2,
    price: '$45.00',
    link: '/product/hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 5,
    name: 'Backpack',
    quantity: 1,
    price: '$89.00',
    link: '/product/backpack',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200'
  }
];

export const sampleShippingWithCost = {
  method: 'Express Shipping',
  cost: '$15.00'
};

export const createOrderItem = (params) => {
  return {
    id: params.id,
    name: params.name,
    quantity: params.quantity,
    price: params.price,
    link: params.link,
    image: params.image
  };
}

export const calculateOrderTotals = (items, shippingCost, taxRate) => {
  const sCost = shippingCost || 0;
  const tRate = taxRate || 0.08;
  
  const subtotalCents = items.reduce((sum, item) => {
    const priceValue = parseFloat(item.price.replace('$', ''));
    return sum + Math.round(priceValue * 100) * item.quantity;
  }, 0);

  const taxCents = Math.round(subtotalCents * tRate);
  const totalCents = subtotalCents + sCost + taxCents;

  return {
    subtotal: '$' + (subtotalCents / 100).toFixed(2),
    shipping: '$' + (sCost / 100).toFixed(2),
    tax: '$' + (taxCents / 100).toFixed(2),
    total: '$' + (totalCents / 100).toFixed(2)
  };
}

export default {
  sampleOrderItems: sampleOrderItems,
  sampleShipping: sampleShipping,
  samplePayment: samplePayment,
  sampleTotals: sampleTotals,
  sampleOrder: sampleOrder,
  largeSampleOrderItems: largeSampleOrderItems,
  sampleShippingWithCost: sampleShippingWithCost,
  createOrderItem: createOrderItem,
  calculateOrderTotals: calculateOrderTotals
};