/**
 * Order Samples Mock Data
 * 
 * Sample/demo order data used for documentation and testing.
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. No TypeScript types
 * 4. Named functions
 */

export var sampleOrderItems = [
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

export var sampleShipping = {
  method: 'Local Pickup',
  cost: 'Free'
};

export var samplePayment = {
  method: 'Credit Card',
  lastFour: '4242'
};

export var sampleTotals = {
  subtotal: '$56.00',
  shipping: '$0.00',
  tax: '$4.48',
  total: '$60.48'
};

export var sampleOrder = {
  items: sampleOrderItems,
  shipping: sampleShipping,
  payment: samplePayment,
  totals: sampleTotals,
  orderNumber: '12345',
  orderDate: 'January 1, 2026'
};

export var largeSampleOrderItems = [
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

export var sampleShippingWithCost = {
  method: 'Express Shipping',
  cost: '$15.00'
};

export function createOrderItem(params) {
  return {
    id: params.id,
    name: params.name,
    quantity: params.quantity,
    price: params.price,
    link: params.link,
    image: params.image
  };
}

export function calculateOrderTotals(items, shippingCost, taxRate) {
  var sCost = shippingCost || 0;
  var tRate = taxRate || 0.08;
  
  var subtotalCents = items.reduce(function(sum, item) {
    var priceValue = parseFloat(item.price.replace('$', ''));
    return sum + (priceValue * item.quantity * 100);
  }, 0);

  var taxCents = Math.round(subtotalCents * tRate);
  var totalCents = subtotalCents + sCost + taxCents;

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