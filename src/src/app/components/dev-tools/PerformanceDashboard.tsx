/**
 * PerformanceDashboard Component
 *
 * Real-time performance metrics dashboard for monitoring Web Vitals.
 */

import React from 'react';
import * as PerformanceModule from '../../utils/performance';

var getPerformanceSummary = PerformanceModule.getPerformanceSummary;
var clearPerformanceMetrics = PerformanceModule.clearPerformanceMetrics;
var formatMetricValue = PerformanceModule.formatMetricValue;
var WEB_VITALS_THRESHOLDS = PerformanceModule.WEB_VITALS_THRESHOLDS;
// Type reference (JSDoc only - no runtime import needed):
// PerformanceMetric

export function PerformanceDashboard() {
  var summaryState = React.useState({} as Record<string, PerformanceMetric | null>);
  var summary = summaryState[0];
  var setSummary = summaryState[1];
  var refreshState = React.useState(true);
  var autoRefresh = refreshState[0];
  var setAutoRefresh = refreshState[1];

  function loadMetrics() {
    setSummary(getPerformanceSummary());
  }

  React.useEffect(function() {
    loadMetrics();

    if (autoRefresh) {
      var interval = setInterval(loadMetrics, 2000);
      return function() { clearInterval(interval); };
    }
  }, [autoRefresh]);

  function handleClear() {
    clearPerformanceMetrics();
    loadMetrics();
  }

  return (
    <div className="performance-dashboard">
      <div className="performance-dashboard__header">
        <div className="performance-dashboard__title-group">
          <h2 className="performance-dashboard__title">
            Performance Metrics
          </h2>
          <p className="performance-dashboard__subtitle">
            Web Vitals - Core performance indicators
          </p>
        </div>

        <div className="performance-dashboard__actions">
          <button
            onClick={function() { setAutoRefresh(!autoRefresh); }}
            className="performance-dashboard__button performance-dashboard__button--secondary"
          >
            {autoRefresh ? 'Pause' : 'Resume'} Auto-refresh
          </button>
          <button
            onClick={loadMetrics}
            className="performance-dashboard__button performance-dashboard__button--secondary"
          >
            Refresh
          </button>
          <button
            onClick={handleClear}
            className="performance-dashboard__button performance-dashboard__button--danger"
          >
            Clear Data
          </button>
        </div>
      </div>

      <div className="performance-dashboard__grid">
        {Object.entries(summary).map(function(entry) {
          var name = entry[0];
          var metric = entry[1];
          var threshold = (WEB_VITALS_THRESHOLDS as Record<string, any>)[name];

          return (
            <div
              key={name}
              className={'performance-metric performance-metric--' + ((metric && metric.rating) || 'unknown')}
            >
              <div className="performance-metric__header">
                <span className="performance-metric__name">{name}</span>
                <span className={'performance-metric__badge performance-metric__badge--' + ((metric && metric.rating) || 'unknown')}>
                  {(metric && metric.rating) || 'N/A'}
                </span>
              </div>

              <div className="performance-metric__value">
                {metric ? formatMetricValue(name, metric.value) : '\u2014'}
              </div>

              <div className="performance-metric__thresholds">
                <div className="performance-metric__threshold">
                  <span className="performance-metric__threshold-label">Good:</span>
                  <span className="performance-metric__threshold-value">
                    &lt; {formatMetricValue(name, threshold.good)}
                  </span>
                </div>
                <div className="performance-metric__threshold">
                  <span className="performance-metric__threshold-label">Poor:</span>
                  <span className="performance-metric__threshold-value">
                    &gt; {formatMetricValue(name, threshold.poor)}
                  </span>
                </div>
              </div>

              {metric && (
                <div className="performance-metric__timestamp">
                  Recorded: {new Date(metric.timestamp).toLocaleTimeString()}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="performance-dashboard__info">
        <h3 className="performance-dashboard__info-title">About Web Vitals</h3>
        <dl className="performance-dashboard__info-list">
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">LCP (Largest Contentful Paint)</dt>
            <dd className="performance-dashboard__info-desc">
              Measures loading performance. Should occur within 2.5s of page start.
            </dd>
          </div>
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">FID (First Input Delay)</dt>
            <dd className="performance-dashboard__info-desc">
              Measures interactivity. Should be less than 100ms for good UX.
            </dd>
          </div>
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">CLS (Cumulative Layout Shift)</dt>
            <dd className="performance-dashboard__info-desc">
              Measures visual stability. Should be less than 0.1 for stable layouts.
            </dd>
          </div>
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">FCP (First Contentful Paint)</dt>
            <dd className="performance-dashboard__info-desc">
              Measures perceived loading speed. Should occur within 1.8s.
            </dd>
          </div>
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">TTFB (Time to First Byte)</dt>
            <dd className="performance-dashboard__info-desc">
              Measures server responsiveness. Should be less than 800ms.
            </dd>
          </div>
        </dl>
      </div>

      <div className="performance-dashboard__note">
        <strong>Note:</strong> Metrics are collected in real-time and stored in localStorage.
        For production monitoring, integrate with Google Analytics or other analytics platforms.
      </div>
    </div>
  );
}