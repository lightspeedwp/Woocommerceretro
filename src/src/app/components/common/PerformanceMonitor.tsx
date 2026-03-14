import { useEffect } from 'react';
import { initPerformanceMonitoring } from '../../utils/performance';

interface PerformanceMonitorProps {
  enableWebVitals?: boolean;
  enableLongTaskReporting?: boolean;
  enableLogging?: boolean;
  onMetrics?: (metrics: any) => void;
}

/**
 * PerformanceMonitor Component
 *
 * Initializes Web Vitals monitoring on mount.
 */
export const PerformanceMonitor = ({
  enableWebVitals = true,
  enableLongTaskReporting = false,
  enableLogging,
  onMetrics,
}: PerformanceMonitorProps) => {
  useEffect(() => {
    if (enableWebVitals) {
      initPerformanceMonitoring({
        enabled: true,
        logToConsole: !!enableLogging,
      });
    }
  }, [enableWebVitals, enableLongTaskReporting, enableLogging, onMetrics]);

  return null;
}