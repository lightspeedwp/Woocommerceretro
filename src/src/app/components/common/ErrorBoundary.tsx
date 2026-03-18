/**
 * ErrorBoundary Component
 *
 * React class component for catching rendering errors.
 * Provides error recovery UI with reload and home navigation.
 */

import React, { Component } from 'react';
import { Warning, ArrowsClockwise, House } from '../../utils/phosphor-compat';
import { Link } from 'react-router';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  errorMessage?: string;
  showDetails?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    this.setState({ errorInfo });
  }

  handleReset() {
    this.setState({ hasError: false, error: null, errorInfo: null });
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

      return (
        <div className="wp-error-boundary">
          <div className="wp-error-boundary__card">
            <div className="wp-error-boundary__icon-wrap">
              <Warning className="wp-error-boundary__icon" />
            </div>
            <h2 className="wp-error-boundary__title">Oops! Something went wrong</h2>
            <p className="wp-error-boundary__message">
              {this.props.errorMessage ||
                "We're sorry, but something unexpected happened. Please try refreshing the page or return to the homepage."}
            </p>
            {this.props.showDetails && this.state.error && (
              <div className="wp-error-boundary__details">
                <p className="wp-error-boundary__details-text">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <details className="wp-error-boundary__details-summary">
                    <summary>Stack trace</summary>
                    <pre className="wp-error-boundary__details-pre">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}
            <div className="wp-error-boundary__actions">
              <button
                onClick={this.handleReload}
                className="wp-error-boundary__btn wp-error-boundary__btn--primary"
              >
                <ArrowsClockwise size={18} />
                <span>Reload Page</span>
              </button>
              <Link
                to="/"
                className="wp-error-boundary__btn wp-error-boundary__btn--secondary"
              >
                <House size={18} />
                <span>Go Home</span>
              </Link>
            </div>
            <button
              onClick={this.handleReset}
              className="wp-error-boundary__btn--text"
            >
              Or try again without reloading
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  message?: string;
  error?: Error;
  resetError?: () => void;
}

export const ErrorFallback = ({ message, error, resetError }: ErrorFallbackProps) => {
  return (
    <div className="wp-error-fallback">
      <div className="wp-error-fallback__icon-wrap">
        <Warning className="wp-error-fallback__icon" />
      </div>
      <h3 className="wp-error-fallback__title">Something went wrong</h3>
      <p className="wp-error-fallback__message">
        {message || 'We encountered an unexpected error. Please try again.'}
      </p>
      {error && <p className="wp-error-fallback__error-text">{error.message}</p>}
      {resetError && (
        <button
          onClick={resetError}
          className="wp-error-boundary__btn wp-error-boundary__btn--primary"
        >
          <ArrowsClockwise size={16} />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
}

interface InlineErrorProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const InlineError = ({ message, onRetry, className = '' }: InlineErrorProps) => {
  return (
    <div className={`wp-error-inline ${className}`}>
      <Warning className="wp-error-inline__icon" />
      <p className="wp-error-inline__message">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="wp-error-inline__retry">
          Retry
        </button>
      )}
    </div>
  );
}