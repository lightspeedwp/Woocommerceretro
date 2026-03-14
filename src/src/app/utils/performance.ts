/**
 * Performance Monitoring Utilities
 *
 * Measures Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
 * and stores results in localStorage for dev-time analysis.
 */

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

interface PerformanceConfig {
  enabled: boolean;
  logToConsole: boolean;
  sendToAnalytics?: (metric: PerformanceMetric) => void;
}

const defaultConfig: PerformanceConfig = {
  enabled: true,
  logToConsole: true,
};

export const WEB_VITALS_THRESHOLDS: Record<string, { good: number; poor: number }> = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

const getRating = (metricName: string, value: number): PerformanceMetric['rating'] => {
  const threshold = WEB_VITALS_THRESHOLDS[metricName];
  if (!threshold) return 'good';
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

const storeMetric = (metric: PerformanceMetric) => {
  try {
    if (typeof window !== 'undefined') {
      const metrics: PerformanceMetric[] = JSON.parse(localStorage.getItem('webVitals') || '[]');
      metrics.push(metric);
      localStorage.setItem('webVitals', JSON.stringify(metrics.slice(-100)));
    }
  } catch (e) {
    // Silent
  }
};

const logMetric = (metric: PerformanceMetric, config: PerformanceConfig) => {
  if (!config.logToConsole) return;

  let emoji = '\u2705';
  if (metric.rating === 'needs-improvement') emoji = '\u26a0\ufe0f';
  if (metric.rating === 'poor') emoji = '\u274c';

  console.log(
    `${emoji} [Performance] ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`
  );
};

const measureFCP = (config: PerformanceConfig) => {
  try {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          const metric: PerformanceMetric = {
            name: 'FCP',
            value: entry.startTime,
            rating: getRating('FCP', entry.startTime),
            timestamp: Date.now(),
          };
          logMetric(metric, config);
          storeMetric(metric);
          config.sendToAnalytics?.(metric);
          observer.disconnect();
        }
      });
    });
    observer.observe({ entryTypes: ['paint'] });
  } catch (e) {
    // Silent
  }
};

const measureLCP = (config: PerformanceConfig) => {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      const metric: PerformanceMetric = {
        name: 'LCP',
        value: lastEntry.startTime,
        rating: getRating('LCP', lastEntry.startTime),
        timestamp: Date.now(),
      };
      logMetric(metric, config);
      storeMetric(metric);
      config.sendToAnalytics?.(metric);
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    window.addEventListener('load', () => {
      setTimeout(() => observer.disconnect(), 0);
    });
  } catch (e) {
    // Silent
  }
};

const measureCLS = (config: PerformanceConfig) => {
  try {
    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries: PerformanceEntry[] = [];

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

          if (
            sessionValue &&
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000
          ) {
            sessionValue += (entry as any).value;
            sessionEntries.push(entry);
          } else {
            sessionValue = (entry as any).value;
            sessionEntries = [entry];
          }

          if (sessionValue > clsValue) {
            clsValue = sessionValue;
          }
        }
      });
    });
    observer.observe({ entryTypes: ['layout-shift'] });

    const reportCLS = () => {
      const metric: PerformanceMetric = {
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue),
        timestamp: Date.now(),
      };
      logMetric(metric, config);
      storeMetric(metric);
      config.sendToAnalytics?.(metric);
    };

    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        reportCLS();
        observer.disconnect();
      }
    });
  } catch (e) {
    // Silent
  }
};

const measureFID = (config: PerformanceConfig) => {
  try {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const value = (entry as any).processingStart - entry.startTime;
        const metric: PerformanceMetric = {
          name: 'FID',
          value,
          rating: getRating('FID', value),
          timestamp: Date.now(),
        };
        logMetric(metric, config);
        storeMetric(metric);
        config.sendToAnalytics?.(metric);
        observer.disconnect();
      });
    });
    observer.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    // Silent
  }
};

const measureTTFB = (config: PerformanceConfig) => {
  try {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      const metric: PerformanceMetric = {
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        timestamp: Date.now(),
      };
      logMetric(metric, config);
      storeMetric(metric);
      config.sendToAnalytics?.(metric);
    }
  } catch (e) {
    // Silent
  }
};

export const initPerformanceMonitoring = (config?: Partial<PerformanceConfig>) => {
  const finalConfig: PerformanceConfig = {
    enabled: config?.enabled ?? defaultConfig.enabled,
    logToConsole: config?.logToConsole ?? defaultConfig.logToConsole,
    sendToAnalytics: config?.sendToAnalytics,
  };

  if (!finalConfig.enabled) return;
  if (typeof window === 'undefined' || !window.performance) return;

  measureFCP(finalConfig);
  measureLCP(finalConfig);
  measureCLS(finalConfig);
  measureFID(finalConfig);
  measureTTFB(finalConfig);
};

export const getPerformanceMetrics = (): PerformanceMetric[] => {
  try {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('webVitals') || '[]');
    }
  } catch (e) {
    // Silent
  }
  return [];
};

export const getPerformanceSummary = (): Record<string, PerformanceMetric | null> => {
  const metrics = getPerformanceMetrics();
  const summary: Record<string, PerformanceMetric | null> = {
    LCP: null,
    FID: null,
    CLS: null,
    FCP: null,
    TTFB: null,
  };

  ['LCP', 'FID', 'CLS', 'FCP', 'TTFB'].forEach((name) => {
    const found = metrics.filter((m) => m.name === name).pop() ?? null;
    summary[name] = found;
  });

  return summary;
};

export const clearPerformanceMetrics = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('webVitals');
  }
};

export const getRatingColor = (rating: string): string => {
  if (rating === 'good') return 'green';
  if (rating === 'needs-improvement') return 'orange';
  if (rating === 'poor') return 'red';
  return 'gray';
};

export const formatMetricValue = (name: string, value: number): string => {
  if (name === 'CLS') return value.toFixed(3);
  if (value > 1000) return `${(value / 1000).toFixed(2)}s`;
  return `${value.toFixed(0)}ms`;
};