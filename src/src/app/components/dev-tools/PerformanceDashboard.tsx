/**
 * PerformanceDashboard Component
 *
 * Real-time performance metrics dashboard for monitoring Web Vitals.
 */

import { useState, useEffect } from 'react';
import {
  getPerformanceSummary,
  clearPerformanceMetrics,
  formatMetricValue,
  WEB_VITALS_THRESHOLDS,
} from '../../utils/performance';

export const PerformanceDashboard = () => {
  const [summary, setSummary] = useState<Record<string, any>>({});
  const [autoRefresh, setAutoRefresh] = useState(true);

  const loadMetrics = () => {
    setSummary(getPerformanceSummary());
  };

  useEffect(() => {
    loadMetrics();

    if (autoRefresh) {
      const interval = setInterval(loadMetrics, 2000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const handleClear = () => {
    clearPerformanceMetrics();
    loadMetrics();
  };

  return (
    <div className="performance-dashboard">
      <div className="performance-dashboard__header">
        <div className="performance-dashboard__title-group">
          <h2 className="performance-dashboard__title">Performance Metrics</h2>
          <p className="performance-dashboard__subtitle">Web Vitals - Core performance indicators</p>
        </div>
        <div className="performance-dashboard__actions">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
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
        {Object.entries(summary).map(([name, metric]) => {
          const threshold = WEB_VITALS_THRESHOLDS[name];

          return (
            <div
              key={name}
              className={`performance-metric performance-metric--${metric?.rating || 'unknown'}`}
            >
              <div className="performance-metric__header">
                <span className="performance-metric__name">{name}</span>
                <span className={`performance-metric__badge performance-metric__badge--${metric?.rating || 'unknown'}`}>
                  {metric?.rating || 'N/A'}
                </span>
              </div>
              <div className="performance-metric__value">
                {metric ? formatMetricValue(name, metric.value) : '\u2014'}
              </div>
              <div className="performance-metric__thresholds">
                <div className="performance-metric__threshold">
                  <span className="performance-metric__threshold-label">Good:</span>
                  <span className="performance-metric__threshold-value">
                    {'< ' + formatMetricValue(name, threshold.good)}
                  </span>
                </div>
                <div className="performance-metric__threshold">
                  <span className="performance-metric__threshold-label">Poor:</span>
                  <span className="performance-metric__threshold-value">
                    {'> ' + formatMetricValue(name, threshold.poor)}
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
            <dd className="performance-dashboard__info-desc">Measures loading performance. Should occur within 2.5s of page start.</dd>
          </div>
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">FID (First Input Delay)</dt>
            <dd className="performance-dashboard__info-desc">Measures interactivity. Should be less than 100ms for good UX.</dd>
          </div>
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">CLS (Cumulative Layout Shift)</dt>
            <dd className="performance-dashboard__info-desc">Measures visual stability. Should be less than 0.1 for stable layouts.</dd>
          </div>
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">FCP (First Contentful Paint)</dt>
            <dd className="performance-dashboard__info-desc">Measures perceived loading speed. Should occur within 1.8s.</dd>
          </div>
          <div className="performance-dashboard__info-item">
            <dt className="performance-dashboard__info-term">TTFB (Time to First Byte)</dt>
            <dd className="performance-dashboard__info-desc">Measures server responsiveness. Should be less than 800ms.</dd>
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