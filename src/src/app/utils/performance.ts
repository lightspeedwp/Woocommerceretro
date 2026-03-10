/**
 * Performance Monitoring Utilities
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. Standard function declarations
 * 4. ASCII only
 */

/**
 * @typedef PerformanceMetric
 * @property {string} name
 * @property {number} value
 * @property {'good'|'needs-improvement'|'poor'} rating
 * @property {number} timestamp
 */

/**
 * @typedef PerformanceConfig
 * @property {boolean} enabled
 * @property {boolean} logToConsole
 * @property {function(PerformanceMetric):void} [sendToAnalytics]
 */

/**
 * @type {PerformanceConfig}
 */
var defaultConfig = {
  enabled: true,
  logToConsole: true,
};

export var WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

function getRating(metricName, value) {
  var threshold = WEB_VITALS_THRESHOLDS[metricName];
  if (!threshold) return 'good';
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

function storeMetric(metric) {
  try {
    if (typeof window !== 'undefined') {
      var rawMetrics = localStorage.getItem('webVitals');
      var metrics = JSON.parse(rawMetrics || '[]');
      metrics.push(metric);
      localStorage.setItem('webVitals', JSON.stringify(metrics.slice(-100)));
    }
  } catch (e) {
    // Silent
  }
}

function logMetric(metric, config) {
  if (config.logToConsole) {
    var emoji = '✅';
    if (metric.rating === 'needs-improvement') emoji = '⚠️';
    if (metric.rating === 'poor') emoji = '❌';
    
    console.log(
      emoji + ' [Performance] ' + metric.name + ': ' + metric.value.toFixed(2) + 'ms (' + metric.rating + ')'
    );
  }
}

function measureFCP(config) {
  try {
    var observer = new (window).PerformanceObserver(function(list) {
      var entries = list.getEntries();
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.name === 'first-contentful-paint') {
          var metric = {
            name: 'FCP',
            value: entry.startTime,
            rating: getRating('FCP', entry.startTime),
            timestamp: Date.now(),
          };
          
          logMetric(metric, config);
          storeMetric(metric);
          if (config.sendToAnalytics) config.sendToAnalytics(metric);
          
          observer.disconnect();
        }
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
  } catch (e) {
    // Silent
  }
}

function measureLCP(config) {
  try {
    var observer = new (window).PerformanceObserver(function(list) {
      var entries = list.getEntries();
      var lastEntry = entries[entries.length - 1];
      
      var metric = {
        name: 'LCP',
        value: lastEntry.startTime,
        rating: getRating('LCP', lastEntry.startTime),
        timestamp: Date.now(),
      };
      
      logMetric(metric, config);
      storeMetric(metric);
      if (config.sendToAnalytics) config.sendToAnalytics(metric);
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    
    window.addEventListener('load', function() {
      setTimeout(function() { observer.disconnect(); }, 0);
    });
  } catch (e) {
    // Silent
  }
}

function measureCLS(config) {
  try {
    var clsValue = 0;
    var sessionValue = 0;
    var sessionEntries = [];
    
    var observer = new (window).PerformanceObserver(function(list) {
      var entries = list.getEntries();
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (!entry.hadRecentInput) {
          var firstSessionEntry = sessionEntries[0];
          var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          
          if (
            sessionValue &&
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000
          ) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }
          
          if (sessionValue > clsValue) {
            clsValue = sessionValue;
          }
        }
      }
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
    
    function reportCLS() {
      var metric = {
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue),
        timestamp: Date.now(),
      };
      
      logMetric(metric, config);
      storeMetric(metric);
      if (config.sendToAnalytics) config.sendToAnalytics(metric);
    }
    
    window.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') {
        reportCLS();
        observer.disconnect();
      }
    });
  } catch (e) {
    // Silent
  }
}

function measureFID(config) {
  try {
    var observer = new (window).PerformanceObserver(function(list) {
      var entries = list.getEntries();
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var value = entry.processingStart - entry.startTime;
        var metric = {
          name: 'FID',
          value: value,
          rating: getRating('FID', value),
          timestamp: Date.now(),
        };
        
        logMetric(metric, config);
        storeMetric(metric);
        if (config.sendToAnalytics) config.sendToAnalytics(metric);
        
        observer.disconnect();
      }
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    // Silent
  }
}

function measureTTFB(config) {
  try {
    var navigationEntry = performance.getEntriesByType('navigation')[0];
    
    if (navigationEntry) {
      var ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      
      var metric = {
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        timestamp: Date.now(),
      };
      
      logMetric(metric, config);
      storeMetric(metric);
      if (config.sendToAnalytics) config.sendToAnalytics(metric);
    }
  } catch (e) {
    // Silent
  }
}

export function initPerformanceMonitoring(config) {
  var cfg = config || {};
  var finalConfig = {
    enabled: cfg.enabled !== undefined ? cfg.enabled : defaultConfig.enabled,
    logToConsole: cfg.logToConsole !== undefined ? cfg.logToConsole : defaultConfig.logToConsole,
    sendToAnalytics: cfg.sendToAnalytics,
  };
  
  if (!finalConfig.enabled) return;
  
  if (typeof window === 'undefined' || !window.performance) {
    return;
  }
  
  measureFCP(finalConfig);
  measureLCP(finalConfig);
  measureCLS(finalConfig);
  measureFID(finalConfig);
  measureTTFB(finalConfig);
}

export function getPerformanceMetrics() {
  try {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('webVitals') || '[]');
    }
  } catch (e) {
    // Silent
  }
  return [];
}

export function getPerformanceSummary() {
  var metrics = getPerformanceMetrics();
  
  var summary = {
    LCP: null,
    FID: null,
    CLS: null,
    FCP: null,
    TTFB: null,
  };
  
  var names = ['LCP', 'FID', 'CLS', 'FCP', 'TTFB'];
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var found = null;
    for (var j = 0; j < metrics.length; j++) {
      if (metrics[j].name === name) {
        found = metrics[j];
      }
    }
    summary[name] = found;
  }
  
  return summary;
}

export function clearPerformanceMetrics() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('webVitals');
  }
}

export function getRatingColor(rating) {
  if (rating === 'good') return 'green';
  if (rating === 'needs-improvement') return 'orange';
  if (rating === 'poor') return 'red';
  return 'gray';
}

export function formatMetricValue(name, value) {
  if (name === 'CLS') {
    return value.toFixed(3);
  }
  
  if (value > 1000) {
    return (value / 1000).toFixed(2) + 's';
  }
  
  return value.toFixed(0) + 'ms';
}