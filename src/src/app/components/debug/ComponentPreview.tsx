/**
 * ComponentPreview - Preview components with error boundary and loading states.
 */

import { Suspense, Component, useState, type ReactNode } from 'react';
import { Eye, WarningCircle as AlertCircle, SpinnerGap as Loader } from '../../utils/phosphor-compat';

/**
 * Error Boundary for Component Previews
 */
interface ErrorBoundaryProps {
  componentName?: string;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class PreviewErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="wp-component-preview__error">
          <AlertCircle className="wp-text-error" size={24} />
          <p className="wp-text-error wp-font-medium">
            <small>Preview Error</small>
          </p>
          <p className="wp-text-error wp-text-micro has-text-align-center">
            {this.state.error?.message || 'Failed to render component'}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Loading Fallback for Component Previews
 */
export const PreviewLoading = () => {
  return (
    <div className="wp-component-preview__loading">
      <Loader className="wp-animate-spin wp-text-muted" size={20} />
      <span className="wp-text-muted">
        <small>Loading preview...</small>
      </span>
    </div>
  );
}

/**
 * No Preview Available Component
 */
interface NoPreviewProps {
  type?: string;
}

export const NoPreviewAvailable = ({ type }: NoPreviewProps) => {
  let message = 'Complex component - see live examples in Template Tester';
  if (type === 'templates') message = 'Full page templates are best viewed in the Template Tester';
  if (type === 'parts') message = 'Global parts require page context to display properly';

  return (
    <div className="wp-component-preview__empty">
      <Eye className="wp-text-muted" size={24} />
      <p className="wp-text-muted wp-font-medium">
        <small>Preview Not Available</small>
      </p>
      <p className="wp-text-muted wp-text-micro has-text-align-center">{message}</p>
    </div>
  );
}

/**
 * Component Preview Window
 */
interface ComponentPreviewProps {
  componentName: string;
  componentType?: string;
  isExpanded?: boolean;
}

export const ComponentPreview = ({ componentName, componentType, isExpanded = false }: ComponentPreviewProps) => {
  const [showPreview, setShowPreview] = useState(false);

  const getPreviewContent = () => {
    return <NoPreviewAvailable type={componentType} />;
  };

  const wrapperClass = `wp-component-preview__content ${isExpanded ? 'wp-component-preview__content--expanded' : 'wp-component-preview__content--compact'}`;

  return (
    <div className="wp-component-preview__wrapper">
      <div className="wp-component-preview__header">
        <div className="wp-component-preview__label">
          <Eye size={16} />
          <span className="wp-font-medium">
            <small>Preview</small>
          </span>
        </div>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="wp-component-preview__toggle"
        >
          {showPreview ? 'Hide' : 'Show'}
        </button>
      </div>

      {showPreview && (
        <div className={wrapperClass}>
          <PreviewErrorBoundary componentName={componentName}>
            <Suspense fallback={<PreviewLoading />}>
              <div className="wp-component-preview__inner">
                {getPreviewContent()}
              </div>
            </Suspense>
          </PreviewErrorBoundary>
        </div>
      )}
    </div>
  );
}

export default ComponentPreview;