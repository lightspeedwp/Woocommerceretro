/**
 * PerformanceMonitor Component
 *
 * Floating dev tool that monitors FPS, memory usage, and performs
 * basic performance analysis (lazy loading, image sizes).
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Heartbeat as Activity, Lightning as Zap, Image, Package, TrendUp as TrendingUp, Clock } from '../../utils/phosphor-compat';

interface Metrics {
  fps: number;
  memoryUsage: number;
  componentRenders: number;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
}

interface PerfIssue {
  type: 'error' | 'warning';
  category: string;
  message: string;
  metric: string;
}

export const PerformanceMonitor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<Metrics>({
    fps: 60,
    memoryUsage: 0,
    componentRenders: 0,
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
  });
  const [issues, setIssues] = useState<PerfIssue[]>([]);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const renderCountRef = useRef(0);
  const metricsRef = useRef<Metrics>(metrics);

  // Keep metricsRef in sync with metrics state
  useEffect(() => {
    metricsRef.current = metrics;
  }, [metrics]);

  useEffect(() => {
    if (!isOpen) return;

    let animationFrameId: number;

    const calculateFPS = () => {
      const now = performance.now();
      const delta = now - lastTimeRef.current;

      if (delta >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / delta);
        setMetrics((prev) => ({ ...prev, fps }));
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      frameCountRef.current++;
      animationFrameId = requestAnimationFrame(calculateFPS);
    };

    animationFrameId = requestAnimationFrame(calculateFPS);

    const updateMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedMB = memory.usedJSHeapSize / (1024 * 1024);
        setMetrics((prev) => ({ ...prev, memoryUsage: usedMB }));
      }
    };

    const memoryInterval = setInterval(updateMemory, 2000);
    updateMemory();

    const getLoadMetrics = () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        const loadTime = perfData.loadEventEnd - perfData.fetchStart;
        setMetrics((prev) => ({ ...prev, loadTime }));
      }

      const paintEntries = performance.getEntriesByType('paint');
      let fcp = 0;
      let lcp = 0;
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') fcp = entry.startTime;
        if (entry.name === 'largest-contentful-paint') lcp = entry.startTime;
      });
      setMetrics((prev) => ({ ...prev, firstContentfulPaint: fcp, largestContentfulPaint: lcp }));
    };

    if (document.readyState === 'complete') {
      getLoadMetrics();
    } else {
      window.addEventListener('load', getLoadMetrics);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(memoryInterval);
      window.removeEventListener('load', getLoadMetrics);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    renderCountRef.current++;
    setMetrics((prev) => ({ ...prev, componentRenders: renderCountRef.current }));
  }, [isOpen]);

  const analyzePerformance = useCallback(() => {
    const foundIssues: PerfIssue[] = [];
    const images = document.querySelectorAll('img');
    let imagesWithoutLazy = 0;
    let largeImages = 0;

    images.forEach((img) => {
      if (!img.loading || img.loading !== 'lazy') {
        const rect = img.getBoundingClientRect();
        if (rect.top > window.innerHeight) imagesWithoutLazy++;
      }
      if (img.naturalWidth > 2000 || img.naturalHeight > 2000) largeImages++;
    });

    if (imagesWithoutLazy > 0) {
      foundIssues.push({
        type: 'warning',
        category: 'image',
        message: `${imagesWithoutLazy} images below fold without lazy loading`,
        metric: 'loading="lazy"',
      });
    }

    if (largeImages > 0) {
      foundIssues.push({
        type: 'warning',
        category: 'image',
        message: `${largeImages} images larger than 2000px`,
        metric: 'optimize images',
      });
    }

    const currentMetrics = metricsRef.current;
    if (currentMetrics.fps < 30) {
      foundIssues.push({ type: 'error', category: 'render', message: 'FPS critically low', metric: `${currentMetrics.fps} FPS` });
    }

    if (currentMetrics.memoryUsage > 100) {
      foundIssues.push({ type: 'error', category: 'memory', message: 'High memory usage', metric: `${currentMetrics.memoryUsage.toFixed(1)} MB` });
    }

    setIssues(foundIssues);
  }, []); // Empty deps - uses metricsRef.current instead

  const getMetricModifier = (value: number, thresholdGood: number, thresholdWarning: number) => {
    if (value <= thresholdGood) return 'good';
    if (value <= thresholdWarning) return 'warn';
    return 'error';
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="wp-dev-monitor__toggle"
        aria-label="Open performance monitor"
      >
        <Activity size={24} />
      </button>
    );
  }

  return (
    <div className="wp-dev-monitor__panel">
      {/* Header */}
      <div className="wp-dev-monitor__header">
        <div className="wp-dev-monitor__header-row">
          <div className="wp-dev-monitor__title-group">
            <Activity size={20} className="wp-dev-monitor__title-icon" />
            <h3 className="wp-dev-monitor__title">Performance Monitor</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="wp-dev-monitor__close"
          >
            X
          </button>
        </div>
        <div className="wp-dev-monitor__metrics">
          <div className="wp-dev-monitor__metric-card">
            <span className="wp-dev-monitor__metric-label">FPS</span>
            <span className={`wp-dev-monitor__metric-value wp-dev-monitor__metric-value--${getMetricModifier(60 - metrics.fps, 10, 30)}`}>{metrics.fps}</span>
          </div>
          <div className="wp-dev-monitor__metric-card">
            <span className="wp-dev-monitor__metric-label">Memory</span>
            <span className={`wp-dev-monitor__metric-value wp-dev-monitor__metric-value--${getMetricModifier(metrics.memoryUsage, 30, 50)}`}>{metrics.memoryUsage.toFixed(0)}MB</span>
          </div>
        </div>
      </div>

      {/* Issues */}
      <div className="wp-dev-monitor__issues">
        {issues.length === 0
          ? 'Performance looks good!'
          : issues.map((issue, index) => (
              <div
                key={index}
                className={`wp-dev-monitor__issue wp-dev-monitor__issue--${issue.type}`}
              >
                {issue.message}
              </div>
            ))}
      </div>

      {/* Footer */}
      <div className="wp-dev-monitor__footer">
        <button onClick={analyzePerformance} className="wp-dev-monitor__action">
          Analyze
        </button>
      </div>
    </div>
  );
}