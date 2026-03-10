import React from 'react';
var useState = React.useState;
var useEffect = React.useEffect;
var useRef = React.useRef;
var useCallback = React.useCallback;
import { Heartbeat as Activity, Lightning as Zap, Image, Package, TrendUp as TrendingUp, Clock } from '@phosphor-icons/react';

function IconActivity(props: any) { 
  return Activity ? React.createElement(Activity, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'A'); 
}
function IconZap(props: any) { 
  return Zap ? React.createElement(Zap, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'Z'); 
}
function IconImage(props: any) { 
  return Image ? React.createElement(Image, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'I'); 
}
function IconPackage(props: any) { 
  return Package ? React.createElement(Package, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'P'); 
}
function IconTrendingUp(props: any) { 
  return TrendingUp ? React.createElement(TrendingUp, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'T'); 
}
function IconClock(props: any) { 
  return Clock ? React.createElement(Clock, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'C'); 
}

export function PerformanceMonitor() {
  var openState = useState(false);
  var isOpen = openState[0];
  var setIsOpen = openState[1];
  var metricsState = useState({
    fps: 60,
    memoryUsage: 0,
    componentRenders: 0,
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0
  });
  var metrics = metricsState[0];
  var setMetrics = metricsState[1];
  var issuesState = useState([]);
  var issues = issuesState[0];
  var setIssues = issuesState[1];
  var frameCountRef = useRef(0);
  var lastTimeRef = useRef(performance.now());
  var renderCountRef = useRef(0);

  useEffect(function() {
    if (!isOpen) return;

    var animationFrameId: number;
    function calculateFPS() {
      var now = performance.now();
      var delta = now - lastTimeRef.current;
      
      if (delta >= 1000) {
        var fps = Math.round((frameCountRef.current * 1000) / delta);
        setMetrics(function(prev) {
          var updated = {};
          var keys = Object.keys(prev);
          for (var i = 0; i < keys.length; i++) updated[keys[i]] = prev[keys[i]];
          updated['fps'] = fps;
          return updated as any;
        });
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }
      
      frameCountRef.current++;
      animationFrameId = requestAnimationFrame(calculateFPS);
    }
    
    animationFrameId = requestAnimationFrame(calculateFPS);

    function updateMemory() {
      if ('memory' in performance) {
        var memory = (performance as any).memory;
        var usedMB = memory.usedJSHeapSize / (1024 * 1024);
        setMetrics(function(prev) {
          var updated = {};
          var keys = Object.keys(prev);
          for (var i = 0; i < keys.length; i++) updated[keys[i]] = prev[keys[i]];
          updated['memoryUsage'] = usedMB;
          return updated as any;
        });
      }
    }

    var memoryInterval = setInterval(updateMemory, 2000);
    updateMemory();

    function getLoadMetrics() {
      var perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        var loadTime = perfData.loadEventEnd - perfData.fetchStart;
        setMetrics(function(prev) {
          var updated = {};
          var keys = Object.keys(prev);
          for (var i = 0; i < keys.length; i++) updated[keys[i]] = prev[keys[i]];
          updated['loadTime'] = loadTime;
          return updated as any;
        });
      }

      var paintEntries = performance.getEntriesByType('paint');
      var fcp = 0;
      var lcp = 0;
      for (var i = 0; i < paintEntries.length; i++) {
        if (paintEntries[i].name === 'first-contentful-paint') fcp = paintEntries[i].startTime;
        if (paintEntries[i].name === 'largest-contentful-paint') lcp = paintEntries[i].startTime;
      }
      
      setMetrics(function(prev) {
        var updated = {};
        var keys = Object.keys(prev);
        for (var i = 0; i < keys.length; i++) updated[keys[i]] = prev[keys[i]];
        updated['firstContentfulPaint'] = fcp;
        updated['largestContentfulPaint'] = lcp;
        return updated as any;
      });
    }

    if (document.readyState === 'complete') {
      getLoadMetrics();
    } else {
      window.addEventListener('load', getLoadMetrics);
    }

    return function() {
      cancelAnimationFrame(animationFrameId);
      clearInterval(memoryInterval);
      window.removeEventListener('load', getLoadMetrics);
    };
  }, [isOpen]);

  useEffect(function() {
    if (!isOpen) return;
    renderCountRef.current++;
    setMetrics(function(prev) {
      var updated = {};
      var keys = Object.keys(prev);
      for (var i = 0; i < keys.length; i++) updated[keys[i]] = prev[keys[i]];
      updated['componentRenders'] = renderCountRef.current;
      return updated as any;
    });
  }, [isOpen]);

  var analyzePerformance = useCallback(function() {
    var foundIssues = [];
    var images = document.querySelectorAll('img');
    var imagesWithoutLazy = 0;
    for (var i = 0; i < images.length; i++) {
      var img = images[i] as HTMLImageElement;
      if (!img.loading || img.loading !== 'lazy') {
        var rect = img.getBoundingClientRect();
        if (rect.top > window.innerHeight) imagesWithoutLazy++;
      }
    }

    if (imagesWithoutLazy > 0) {
      foundIssues.push({
        type: 'warning',
        category: 'image',
        message: imagesWithoutLazy + ' images below fold without lazy loading',
        metric: 'loading="lazy"'
      });
    }

    var largeImages = 0;
    for (var i = 0; i < images.length; i++) {
      var img = images[i] as HTMLImageElement;
      if (img.naturalWidth > 2000 || img.naturalHeight > 2000) largeImages++;
    }

    if (largeImages > 0) {
      foundIssues.push({
        type: 'warning',
        category: 'image',
        message: largeImages + ' images larger than 2000px',
        metric: 'optimize images'
      });
    }

    if (metrics.fps < 30) {
      foundIssues.push({
        type: 'error',
        category: 'render',
        message: 'FPS critically low',
        metric: metrics.fps + ' FPS'
      });
    }

    if (metrics.memoryUsage > 100) {
      foundIssues.push({
        type: 'error',
        category: 'memory',
        message: 'High memory usage',
        metric: metrics.memoryUsage.toFixed(1) + ' MB'
      });
    }

    setIssues(foundIssues as any);
  }, [metrics]);

  function getMetricColor(value: number, thresholdGood: number, thresholdWarning: number) {
    if (value <= thresholdGood) return 'text-green-600 dark:text-green-400';
    if (value <= thresholdWarning) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  }

  if (!isOpen) {
    return React.createElement('button', {
      onClick: function() { setIsOpen(true); },
      className: "fixed bottom-20 right-4 z-50 p-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-colors",
      'aria-label': "Open performance monitor"
    }, React.createElement(IconActivity, { size: 24 }));
  }

  var header = React.createElement('div', { key: 'header', className: "p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" }, [
    React.createElement('div', { key: 'top', className: "flex items-center justify-between mb-4" }, [
      React.createElement('div', { key: 'left', className: "flex items-center gap-2" }, [
        React.createElement(IconActivity, { size: 20, className: "text-green-600 dark:text-green-400" }),
        React.createElement('h3', { className: "font-bold mb-0" }, "Performance Monitor")
      ]),
      React.createElement('button', {
        key: 'close',
        onClick: function() { setIsOpen(false); },
        className: "p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
      }, "X")
    ]),
    React.createElement('div', { key: 'grid', className: "grid grid-cols-2 gap-3" }, [
      React.createElement('div', { key: 'fps', className: "bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700" }, [
        React.createElement('span', { className: "text-xs text-gray-600" }, "FPS"),
        React.createElement('div', { className: "text-2xl font-bold " + getMetricColor(60 - metrics.fps, 10, 30) }, metrics.fps)
      ]),
      React.createElement('div', { key: 'mem', className: "bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700" }, [
        React.createElement('span', { className: "text-xs text-gray-600" }, "Memory"),
        React.createElement('div', { className: "text-2xl font-bold " + getMetricColor(metrics.memoryUsage, 30, 50) }, metrics.memoryUsage.toFixed(0) + "MB")
      ])
    ])
  ]);

  var issuesList = React.createElement('div', { key: 'list', className: "flex-1 overflow-y-auto p-4 space-y-2" }, 
    issues.length === 0 ? "Performance looks good!" : issues.map(function(issue: any, index) {
      return React.createElement('div', { key: index, className: "p-2 border-l-4 " + (issue.type === 'error' ? 'border-red-600' : 'border-yellow-600') }, issue.message);
    })
  );

  var footer = React.createElement('div', { key: 'footer', className: "p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" }, 
    React.createElement('button', {
      onClick: analyzePerformance,
      className: "w-full px-4 py-2 bg-green-600 text-white rounded-lg"
    }, "Analyze")
  );

  return React.createElement('div', { className: "fixed bottom-0 right-0 w-full md:w-96 h-96 bg-white dark:bg-gray-900 border-t-4 border-green-600 shadow-2xl z-50 flex flex-col" }, [
    header,
    issuesList,
    footer
  ]);
}