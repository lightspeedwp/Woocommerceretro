import React, { useEffect, useState } from 'react';
import * as PerformanceModule from '../../utils/performance';

var setupPerformanceMonitoring = PerformanceModule.setupPerformanceMonitoring;
var getAdaptiveLoadingStrategy = PerformanceModule.getAdaptiveLoadingStrategy;

/**
 * PerformanceMonitor Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declarations
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function PerformanceMonitor(props) {
  var enableWebVitals = props.enableWebVitals !== undefined ? props.enableWebVitals : true;
  var enableLongTaskReporting = props.enableLongTaskReporting !== undefined ? props.enableLongTaskReporting : false;
  var enableLogging = props.enableLogging;
  var onMetrics = props.onMetrics;

  useEffect(function() {
    // Setup performance monitoring
    setupPerformanceMonitoring({
      enableWebVitals: enableWebVitals,
      enableLongTaskReporting: enableLongTaskReporting,
      onMetrics: function(metrics) {
        if (onMetrics) onMetrics(metrics);
        if (enableLogging) logPerformanceMetrics(metrics);
      },
    });
  }, [enableWebVitals, enableLongTaskReporting, enableLogging, onMetrics]);

  return null;
}

function logPerformanceMetrics(metrics) {
  if (metrics.fcp !== undefined) {
    var fcpStatus = metrics.fcp < 1800 ? 'SUCCESS' : metrics.fcp < 3000 ? 'WARNING' : 'ERROR';
    console.log('[Performance] FCP: ' + metrics.fcp.toFixed(0) + 'ms (' + fcpStatus + ')');
  }
}