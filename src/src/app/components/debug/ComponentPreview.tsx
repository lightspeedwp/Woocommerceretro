import React from 'react';
import { Eye, WarningCircle as AlertCircle, SpinnerGap as Loader } from '@phosphor-icons/react';

var Suspense = React.Suspense;
var Component = React.Component;

/**
 * Error Boundary for Component Previews
 */
export class PreviewErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  render() {
    if (this.state.hasError) {
      return React.createElement('div', { className: "wp-component-preview__error" }, [
        React.createElement(AlertCircle, { key: 'icon', className: "wp-text-error wp-mb-20", size: 24 }),
        React.createElement('p', { key: 'title', className: "wp-text-error wp-font-medium wp-mb-10" }, 
          React.createElement('small', null, "Preview Error")
        ),
        React.createElement('p', { key: 'msg', className: "wp-text-error wp-text-micro has-text-align-center" }, 
          (this.state.error && this.state.error.message) || 'Failed to render component'
        )
      ]);
    }
    return this.props.children;
  }
}

/**
 * Loading Fallback for Component Previews
 */
export function PreviewLoading() {
  return React.createElement('div', { className: "wp-component-preview__loading" }, [
    React.createElement(Loader, { key: 'loader', className: "wp-animate-spin wp-text-muted", size: 20 }),
    React.createElement('span', { key: 'text', className: "wp-ml-20 wp-text-muted" }, 
      React.createElement('small', null, "Loading preview...")
    )
  ]);
}

/**
 * No Preview Available Component
 */
export function NoPreviewAvailable(props) {
  var type = props.type;
  
  var message = 'Complex component - see live examples in Template Tester';
  if (type === 'templates') message = 'Full page templates are best viewed in the Template Tester';
  if (type === 'parts') message = 'Global parts require page context to display properly';
  
  return React.createElement('div', { className: "wp-component-preview__empty" }, [
    React.createElement(Eye, { key: 'icon', className: "wp-text-muted wp-mb-20", size: 24 }),
    React.createElement('p', { key: 'title', className: "wp-text-muted wp-font-medium wp-mb-10" }, 
      React.createElement('small', null, "Preview Not Available")
    ),
    React.createElement('p', { key: 'msg', className: "wp-text-muted wp-text-micro has-text-align-center" }, message)
  ]);
}

/**
 * Component Preview Window
 */
export function ComponentPreview(props) {
  var componentName = props.componentName;
  var componentType = props.componentType;
  var isExpanded = props.isExpanded || false;

  var previewState = React.useState(false);
  var showPreview = previewState[0];
  var setShowPreview = previewState[1];

  function getPreviewContent() {
    return React.createElement(NoPreviewAvailable, { type: componentType });
  }

  var header = React.createElement('div', { key: 'header', className: "wp-component-preview__header" }, [
    React.createElement('div', { key: 'label', className: "wp-component-preview__label" }, [
      React.createElement(Eye, { key: 'icon', size: 16 }),
      React.createElement('span', { key: 'text', className: "wp-font-medium" }, 
        React.createElement('small', null, "Preview")
      )
    ]),
    React.createElement('button', { 
      key: 'btn',
      onClick: function() { setShowPreview(!showPreview); },
      className: "wp-component-preview__toggle"
    }, showPreview ? 'Hide' : 'Show')
  ]);

  var content = null;
  if (showPreview) {
    var wrapperClass = 'wp-component-preview__content ' + (isExpanded ? 'wp-component-preview__content--expanded' : 'wp-component-preview__content--compact');
    
    var inner = React.createElement('div', { className: "wp-component-preview__inner" }, getPreviewContent());
    
    var suspense = React.createElement(Suspense, { 
      fallback: React.createElement(PreviewLoading, null)
    }, inner);
    
    var errorBoundary = React.createElement(PreviewErrorBoundary, { componentName: componentName }, suspense);
    
    content = React.createElement('div', { key: 'content', className: wrapperClass }, errorBoundary);
  }

  return React.createElement('div', { className: "wp-component-preview__wrapper" }, [header, content]);
}

export default ComponentPreview;