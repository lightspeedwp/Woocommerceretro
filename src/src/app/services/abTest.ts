/**
 * A/B Testing Service
 *
 * Manages A/B test variant assignment, conversion tracking,
 * and analytics integration (GA4, Mixpanel).
 */

interface ABTestVariant {
  id: string;
  name: string;
  content: Record<string, any>;
  weight?: number;
}

interface ABTest {
  id: string;
  name: string;
  variants: ABTestVariant[];
  startDate: Date;
  endDate?: Date;
  trafficAllocation?: number;
}

interface ABTestResult {
  testId: string;
  variant: ABTestVariant;
  isInTest: boolean;
}

interface ConversionEvent {
  testId: string;
  variantId: string;
  timestamp: Date;
  value?: number;
  metadata?: Record<string, any>;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    mixpanel?: { track: (event: string, props: Record<string, any>) => void };
  }
}

const assignVariant = (variants: ABTestVariant[]): ABTestVariant => {
  const totalWeight = variants.reduce(
    (sum, v) => sum + (v.weight ?? 1),
    0
  );

  let random = Math.random() * totalWeight;

  for (let i = 0; i < variants.length; i++) {
    random -= variants[i].weight ?? 1;
    if (random <= 0) return variants[i];
  }

  return variants[0];
};

const trackAssignment = (testId: string, variantId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ab_test_assignment', {
      test_id: testId,
      variant_id: variantId,
    });
  }
};

const sendToAnalytics = (event: ConversionEvent) => {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    const params: Record<string, any> = {
      test_id: event.testId,
      variant_id: event.variantId,
      value: event.value,
      ...event.metadata,
    };
    window.gtag('event', 'ab_test_conversion', params);
  }

  if (window.mixpanel) {
    window.mixpanel.track('A/B Test Conversion', {
      testId: event.testId,
      variantId: event.variantId,
      value: event.value,
      ...event.metadata,
    });
  }
};

export const getVariant = (test: ABTest): ABTestResult => {
  const now = new Date();
  if (now < test.startDate || (test.endDate && now > test.endDate)) {
    return { testId: test.id, variant: test.variants[0], isInTest: false };
  }

  const trafficAllocation = test.trafficAllocation ?? 100;
  const isInTraffic = Math.random() * 100 < trafficAllocation;

  if (!isInTraffic) {
    return { testId: test.id, variant: test.variants[0], isInTest: false };
  }

  const storageKey = `ab_test_${test.id}`;
  const existingAssignment = localStorage.getItem(storageKey);

  if (existingAssignment) {
    const found = test.variants.find((v) => v.id === existingAssignment);
    if (found) {
      return { testId: test.id, variant: found, isInTest: true };
    }
  }

  const assignedVariant = assignVariant(test.variants);

  try {
    localStorage.setItem(storageKey, assignedVariant.id);
  } catch (error) {
    // Silent
  }

  trackAssignment(test.id, assignedVariant.id);

  return { testId: test.id, variant: assignedVariant, isInTest: true };
};

export const trackConversion = (testId: string, value?: number, metadata?: Record<string, any>) => {
  const storageKey = `ab_test_${testId}`;
  const variantId = localStorage.getItem(storageKey);

  if (!variantId) return;

  const event: ConversionEvent = {
    testId,
    variantId,
    timestamp: new Date(),
    value,
    metadata,
  };

  try {
    const conversionsKey = 'ab_test_conversions';
    const existing: ConversionEvent[] = JSON.parse(localStorage.getItem(conversionsKey) || '[]');
    existing.push(event);
    localStorage.setItem(conversionsKey, JSON.stringify(existing));
  } catch (error) {
    // Silent
  }

  sendToAnalytics(event);
};

export const resetTestAssignment = (testId: string) => {
  localStorage.removeItem(`ab_test_${testId}`);
};

export const getTestStatistics = (): ConversionEvent[] => {
  try {
    const data = localStorage.getItem('ab_test_conversions');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const clearAllTestData = () => {
  Object.keys(localStorage)
    .filter((key) => key.startsWith('ab_test_'))
    .forEach((key) => localStorage.removeItem(key));
};

export const blogCTAHeadlineTest: ABTest = {
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

export const productCTAButtonTest: ABTest = {
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

export const saleCTATest: ABTest = {
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
  getVariant,
  trackConversion,
  resetTestAssignment,
  getTestStatistics,
  clearAllTestData,
  blogCTAHeadlineTest,
  productCTAButtonTest,
  saleCTATest,
};