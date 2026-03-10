import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import * as PerformanceModule from './app/utils/performance';
var initPerformanceMonitoring = PerformanceModule.initPerformanceMonitoring;

/**
 * Main Entry Point
 */

initPerformanceMonitoring({
  enabled: true,
  logToConsole: true
});

var rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element.');
}

var root = ReactDOM.createRoot(rootElement);
var appElement = React.createElement(App, null);
var strictMode = React.createElement(React.StrictMode, null, appElement);

root.render(strictMode);