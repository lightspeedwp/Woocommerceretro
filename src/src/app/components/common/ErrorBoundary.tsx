/**
 * ErrorBoundary Component
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX
 * 2. No TypeScript interfaces or generics
 * 3. var only, no const/let
 * 4. No arrow functions
 * 5. ASCII only
 */

import React from 'react';
var Component = React.Component;
import { Warning as AlertTriangle, ArrowsClockwise as RefreshCw, House as Home } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
var Link = ReactRouterModule.Link;

function IconAlertTriangle(props) { 
  return AlertTriangle ? React.createElement(AlertTriangle, props) : React.createElement('span', { 'aria-hidden': 'true' }, '!'); 
}
function IconRefreshCw(props) { 
  return RefreshCw ? React.createElement(RefreshCw, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'R'); 
}
function IconHome(props) { 
  return Home ? React.createElement(Home, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'H'); 
}

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error
    };
  }

  componentDidCatch(error, errorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    this.setState({ errorInfo: errorInfo });
  }

  handleReset() {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  }

  handleReload() {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      var iconWrap = React.createElement('div', { key: 'icon-wrap', className: 'wp-error-boundary__icon-wrap' },
        React.createElement(IconAlertTriangle, { className: 'wp-error-boundary__icon' })
      );
      
      var title = React.createElement('h2', { key: 'title', className: 'wp-error-boundary__title' }, 'Oops! Something went wrong');
      
      var message = React.createElement('p', { key: 'message', className: 'wp-error-boundary__message' }, 
        this.props.errorMessage || "We're sorry, but something unexpected happened. Please try refreshing the page or return to the homepage."
      );

      var details = null;
      if (this.props.showDetails && this.state.error) {
        var errorText = React.createElement('p', { key: 'err-text', className: 'wp-error-boundary__details-text' }, this.state.error.toString());
        var stack = null;
        if (this.state.errorInfo) {
          stack = React.createElement('details', { key: 'stack', className: 'wp-error-boundary__details-summary' }, [
            React.createElement('summary', { key: 'sum' }, 'Stack trace'),
            React.createElement('pre', { key: 'pre', className: 'wp-error-boundary__details-pre' }, this.state.errorInfo.componentStack)
          ]);
        }
        details = React.createElement('div', { key: 'details', className: 'wp-error-boundary__details' }, [errorText, stack]);
      }

      var reloadBtn = React.createElement('button', {
        key: 'reload',
        onClick: this.handleReload,
        className: 'wp-error-boundary__btn wp-error-boundary__btn--primary'
      }, [
        React.createElement(IconRefreshCw, { key: 'icon', size: 18 }),
        React.createElement('span', { key: 'text' }, 'Reload Page')
      ]);

      var homeLink = React.createElement(Link, {
        key: 'home',
        to: '/',
        className: 'wp-error-boundary__btn wp-error-boundary__btn--secondary'
      }, [
        React.createElement(IconHome, { key: 'icon', size: 18 }),
        React.createElement('span', { key: 'text' }, 'Go Home')
      ]);

      var actions = React.createElement('div', { key: 'actions', className: 'wp-error-boundary__actions' }, [reloadBtn, homeLink]);

      var resetBtn = React.createElement('button', {
        key: 'reset',
        onClick: this.handleReset,
        className: 'wp-error-boundary__btn--text'
      }, 'Or try again without reloading');

      return React.createElement('div', { className: 'wp-error-boundary' },
        React.createElement('div', { className: 'wp-error-boundary__card' }, [
          iconWrap,
          title,
          message,
          details,
          actions,
          resetBtn
        ])
      );
    }

    return this.props.children;
  }
}

export function ErrorFallback(props) {
  var iconWrap = React.createElement('div', { key: 'icon-wrap', className: 'wp-error-fallback__icon-wrap' },
    React.createElement(IconAlertTriangle, { className: 'wp-error-fallback__icon' })
  );
  
  var title = React.createElement('h3', { key: 'title', className: 'wp-error-fallback__title' }, 'Something went wrong');
  
  var message = React.createElement('p', { key: 'message', className: 'wp-error-fallback__message' }, 
    props.message || 'We encountered an unexpected error. Please try again.'
  );

  var errorText = props.error ? React.createElement('p', { key: 'err', className: 'wp-error-fallback__error-text' }, props.error.message) : null;

  var resetBtn = props.resetError ? React.createElement('button', {
    key: 'reset',
    onClick: props.resetError,
    className: 'wp-error-boundary__btn wp-error-boundary__btn--primary'
  }, [
    React.createElement(IconRefreshCw, { key: 'icon', size: 16 }),
    React.createElement('span', { key: 'text' }, 'Try Again')
  ]) : null;

  return React.createElement('div', { className: 'wp-error-fallback' }, [
    iconWrap,
    title,
    message,
    errorText,
    resetBtn
  ]);
}

export function InlineError(props) {
  var icon = React.createElement(IconAlertTriangle, { key: 'icon', className: 'wp-error-inline__icon' });
  var text = React.createElement('p', { key: 'text', className: 'wp-error-inline__message' }, props.message);
  var btn = props.onRetry ? React.createElement('button', {
    key: 'btn',
    onClick: props.onRetry,
    className: 'wp-error-inline__retry'
  }, 'Retry') : null;

  return React.createElement('div', { className: 'wp-error-inline ' + (props.className || '') }, [
    icon,
    text,
    btn
  ]);
}