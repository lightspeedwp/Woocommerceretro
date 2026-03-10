import React from 'react';
var useState = React.useState;
var useEffect = React.useEffect;
import { Warning as AlertTriangle, CheckCircle, XCircle, Info, Eye, Keyboard, Cursor as MousePointer, SpeakerHigh as Volume2, CircleHalf as Contrast } from '@phosphor-icons/react';

function IconAlertTriangle(props) { 
  return AlertTriangle ? React.createElement(AlertTriangle, props) : React.createElement('span', { 'aria-hidden': 'true' }, '!'); 
}
function IconCheckCircle(props) { 
  return CheckCircle ? React.createElement(CheckCircle, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'V'); 
}
function IconXCircle(props) { 
  return XCircle ? React.createElement(XCircle, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'X'); 
}
function IconInfo(props) { 
  return Info ? React.createElement(Info, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'I'); 
}
function IconEye(props) { 
  return Eye ? React.createElement(Eye, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'E'); 
}
function IconKeyboard(props) { 
  return Keyboard ? React.createElement(Keyboard, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'K'); 
}
function IconMousePointer(props) { 
  return MousePointer ? React.createElement(MousePointer, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'M'); 
}
function IconVolume2(props) { 
  return Volume2 ? React.createElement(Volume2, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'V'); 
}
function IconContrast(props) { 
  return Contrast ? React.createElement(Contrast, props) : React.createElement('span', { 'aria-hidden': 'true' }, 'C'); 
}

export function AccessibilityChecker() {
  var issuesState = useState([]);
  var issues = issuesState[0];
  var setIssues = issuesState[1];
  var isOpenState = useState(false);
  var isOpen = isOpenState[0];
  var setIsOpen = isOpenState[1];
  var activeTabState = useState('all');
  var activeTab = activeTabState[0];
  var setActiveTab = activeTabState[1];

  function runAccessibilityAudit() {
    var foundIssues = [];

    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      if (!img.hasAttribute('alt')) {
        foundIssues.push({
          type: 'error',
          category: 'aria',
          message: "Image #" + (i + 1) + " is missing alt text",
          element: img.src,
          wcagCriterion: 'WCAG 1.1.1 (Level A)'
        });
      }
    }

    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var hasText = btn.textContent ? btn.textContent.trim() : '';
      var hasAriaLabel = btn.hasAttribute('aria-label');
      if (!hasText && !hasAriaLabel) {
        foundIssues.push({
          type: 'error',
          category: 'aria',
          message: "Button #" + (i + 1) + " has no accessible name",
          wcagCriterion: 'WCAG 4.1.2 (Level A)'
        });
      }
    }

    var h1s = document.querySelectorAll('h1');
    if (h1s.length > 1) {
      foundIssues.push({
        type: 'warning',
        category: 'semantic',
        message: "Page has " + h1s.length + " H1 elements - should have only one",
        wcagCriterion: 'WCAG 1.3.1 (Level A)'
      });
    }

    var main = document.querySelector('main');
    if (!main) {
      foundIssues.push({
        type: 'error',
        category: 'semantic',
        message: 'Page is missing <main> landmark',
        wcagCriterion: 'WCAG 1.3.1 (Level A)'
      });
    }

    setIssues(foundIssues);
  }

  useEffect(function() {
    if (isOpen) {
      runAccessibilityAudit();
    }
  }, [isOpen]);

  function getCategoryIcon(category) {
    switch (category) {
      case 'contrast': return React.createElement(IconContrast, { size: 16 });
      case 'keyboard': return React.createElement(IconKeyboard, { size: 16 });
      case 'aria': return React.createElement(IconVolume2, { size: 16 });
      case 'semantic': return React.createElement(IconEye, { size: 16 });
      case 'focus': return React.createElement(IconMousePointer, { size: 16 });
      default: return React.createElement(IconInfo, { size: 16 });
    }
  }

  if (!isOpen) {
    return React.createElement('button', {
      onClick: function() { setIsOpen(true); },
      className: "fixed bottom-4 right-4 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors",
      'aria-label': "Open accessibility checker"
    }, React.createElement(IconEye, { size: 24 }));
  }

  var header = React.createElement('div', { key: 'header', className: "p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" }, [
    React.createElement('div', { key: 'top', className: "flex items-center justify-between mb-3" }, [
      React.createElement('div', { key: 'left', className: "flex items-center gap-2" }, [
        React.createElement(IconEye, { size: 20, className: "text-blue-600 dark:text-blue-400" }),
        React.createElement('h3', { className: "font-bold mb-0" }, "Accessibility Checker")
      ]),
      React.createElement('button', {
        key: 'close',
        onClick: function() { setIsOpen(false); },
        className: "p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
      }, "X")
    ]),
    React.createElement('div', { key: 'tabs', className: "flex gap-2 text-sm" }, [
      React.createElement('button', { key: 'all', onClick: function() { setActiveTab('all'); }, className: "px-3 py-1 rounded " + (activeTab === 'all' ? "bg-blue-600 text-white" : "bg-gray-200") }, "All")
    ])
  ]);

  var list = React.createElement('div', { key: 'list', className: "flex-1 overflow-y-auto p-4 space-y-3" }, 
    issues.length === 0 ? "No issues found!" : issues.map(function(issue, index) {
      return React.createElement('div', { key: index, className: "p-3 rounded-lg border-l-4 " + (issue.type === 'error' ? 'bg-red-50 border-red-600' : 'bg-yellow-50 border-yellow-600') }, [
        React.createElement('div', { key: 'head', className: "flex items-start gap-2" }, [
          getCategoryIcon(issue.category),
          React.createElement('div', { key: 'body' }, [
            React.createElement('p', { className: "font-medium mb-1" }, issue.message),
            issue.element ? React.createElement('p', { className: "text-xs font-mono" }, issue.element) : null
          ])
        ])
      ]);
    })
  );

  return React.createElement('div', { className: "fixed bottom-0 right-0 w-full md:w-96 h-96 bg-white dark:bg-gray-900 border-t-4 border-blue-600 shadow-2xl z-50 flex flex-col" }, [
    header,
    list,
    React.createElement('div', { key: 'foot', className: "p-4 border-t" }, 
      React.createElement('button', { onClick: runAccessibilityAudit, className: "w-full bg-blue-600 text-white p-2 rounded" }, "Re-run Audit")
    )
  ]);
}