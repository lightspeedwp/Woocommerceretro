/**
 * A/B Testing Service
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. ASCII only
 * 4. var instead of const/let
 * 5. No generics
 */

/* ABTest, ABTestVariant, ABTestResult, ConversionEvent - types removed for parser compatibility */

function assignVariant(variants) {
  var totalWeight = 0;
  for (var i = 0; i < variants.length; i++) {
    totalWeight += (variants[i].weight !== undefined ? variants[i].weight : 1);
  }
  
  var random = Math.random() * totalWeight;
  
  for (var i = 0; i < variants.length; i++) {
    var weight = variants[i].weight !== undefined ? variants[i].weight : 1;
    random -= weight;
    if (random <= 0) {
      return variants[i];
    }
  }
  
  return variants[0];
}

function trackAssignment(testId, variantId) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_assignment', {
      test_id: testId,
      variant_id: variantId,
    });
  }
}

function sendToAnalytics(event) {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    var params = {
      test_id: event.testId,
      variant_id: event.variantId,
      value: event.value,
    };
    if (event.metadata) {
      var keys = Object.keys(event.metadata);
      for (var i = 0; i < keys.length; i++) {
        params[keys[i]] = event.metadata[keys[i]];
      }
    }
    window.gtag('event', 'ab_test_conversion', params);
  }

  if (window.mixpanel) {
    var mParams = {
      testId: event.testId,
      variantId: event.variantId,
      value: event.value,
    };
    if (event.metadata) {
      var mKeys = Object.keys(event.metadata);
      for (var j = 0; j < mKeys.length; j++) {
        mParams[mKeys[j]] = event.metadata[mKeys[j]];
      }
    }
    window.mixpanel.track('A/B Test Conversion', mParams);
  }
}

export function getVariant(test) {
  var now = new Date();
  if (now < test.startDate || (test.endDate && now > test.endDate)) {
    return {
      testId: test.id,
      variant: test.variants[0],
      isInTest: false,
    };
  }

  var trafficAllocation = test.trafficAllocation !== undefined ? test.trafficAllocation : 100;
  var isInTraffic = Math.random() * 100 < trafficAllocation;
  
  if (!isInTraffic) {
    return {
      testId: test.id,
      variant: test.variants[0],
      isInTest: false,
    };
  }

  var storageKey = 'ab_test_' + test.id;
  var existingAssignment = localStorage.getItem(storageKey);
  
  if (existingAssignment) {
    var found = null;
    for (var i = 0; i < test.variants.length; i++) {
      if (test.variants[i].id === existingAssignment) {
        found = test.variants[i];
        break;
      }
    }
    if (found) {
      return {
        testId: test.id,
        variant: found,
        isInTest: true,
      };
    }
  }

  var assignedVariant = assignVariant(test.variants);
  
  try {
    localStorage.setItem(storageKey, assignedVariant.id);
  } catch (error) {
    // Silent
  }

  trackAssignment(test.id, assignedVariant.id);

  return {
    testId: test.id,
    variant: assignedVariant,
    isInTest: true,
  };
}

export function trackConversion(testId, value, metadata) {
  var storageKey = 'ab_test_' + testId;
  var variantId = localStorage.getItem(storageKey);
  
  if (!variantId) {
    return;
  }

  var event = {
    testId: testId,
    variantId: variantId,
    timestamp: new Date(),
    value: value,
    metadata: metadata,
  };

  try {
    var conversionsKey = 'ab_test_conversions';
    var raw = localStorage.getItem(conversionsKey);
    var existing = JSON.parse(raw || '[]');
    existing.push(event);
    localStorage.setItem(conversionsKey, JSON.stringify(existing));
  } catch (error) {
    // Silent
  }

  sendToAnalytics(event);
}

export function resetTestAssignment(testId) {
  var storageKey = 'ab_test_' + testId;
  localStorage.removeItem(storageKey);
}

export function getTestStatistics() {
  try {
    var conversionsKey = 'ab_test_conversions';
    var data = localStorage.getItem(conversionsKey);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}

export function clearAllTestData() {
  var keys = Object.keys(localStorage);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].indexOf('ab_test_') === 0) {
      localStorage.removeItem(keys[i]);
    }
  }
}

export var blogCTAHeadlineTest = {
  id: 'blog-cta-headline-2025-01',
  name: 'Blog CTA Headline Test',
  variants: [
    {
      id: 'control',
      name: 'Control',
      content: {
        title: "Want More Content Like This?",
        description: "Get our latest guides, tips, and industry insights delivered straight to your inbox every week.",
      },
    },
    {
      id: 'variant-urgency',
      name: 'Urgency',
      content: {
        title: "Never Miss an Update",
        description: "Join 10,000+ subscribers getting weekly insights, exclusive guides, and industry news.",
      },
    },
    {
      id: 'variant-benefit',
      name: 'Benefit',
      content: {
        title: "Get Smarter Every Week",
        description: "Expert articles, actionable tips, and industry trends delivered to your inbox. Free forever.",
      },
    },
    {
      id: 'variant-social-proof',
      name: 'Social Proof',
      content: {
        title: "Join 10,000+ Smart Readers",
        description: "Get the weekly newsletter that professionals rely on for insights, trends, and expert advice.",
      },
    },
  ],
  startDate: new Date('2025-01-01'),
  trafficAllocation: 100,
};

export var productCTAButtonTest = {
  id: 'product-cta-button-2025-01',
  name: 'Product CTA Button Text Test',
  variants: [
    { id: 'control', name: 'Control', content: { buttonText: 'Get Expert Help' }, weight: 1 },
    { id: 'variant-action', name: 'Action', content: { buttonText: 'Find My Product' }, weight: 1 },
    { id: 'variant-personal', name: 'Personal', content: { buttonText: 'Talk to a Specialist' }, weight: 1 },
    { id: 'variant-value', name: 'Value', content: { buttonText: 'Get Free Recommendations' }, weight: 1 },
  ],
  startDate: new Date('2025-01-01'),
  trafficAllocation: 100,
};

export var saleCTATest = {
  id: 'sale-cta-messaging-2025-01',
  name: 'Sale CTA Messaging Test',
  variants: [
    {
      id: 'control-urgency',
      name: 'Urgency',
      content: {
        title: "Want Early Access to Sales?",
        description: "Join our VIP list and get notified 24 hours before sales go live, plus exclusive discount codes.",
      },
    },
    {
      id: 'variant-exclusivity',
      name: 'Exclusivity',
      content: {
        title: "Join Our VIP Shopping Circle",
        description: "Get exclusive early access to sales, members-only discounts, and first dibs on limited stock.",
      },
    },
  ],
  startDate: new Date('2025-01-01'),
  endDate: new Date('2025-02-01'),
  trafficAllocation: 100,
};

export default {
  getVariant: getVariant,
  trackConversion: trackConversion,
  resetTestAssignment: resetTestAssignment,
  getTestStatistics: getTestStatistics,
  clearAllTestData: clearAllTestData,
  blogCTAHeadlineTest: blogCTAHeadlineTest,
  productCTAButtonTest: productCTAButtonTest,
  saleCTATest: saleCTATest,
};