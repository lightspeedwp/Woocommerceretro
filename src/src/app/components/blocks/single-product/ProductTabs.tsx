import React from 'react';
var useState = React.useState;

/* Tab: { label: string, content: ReactNode } */
/* ProductTabsProps: { tabs: Tab[] } */

/**
 * ProductTabs Component
 */
export function ProductTabs(props) {
  var tabs = props.tabs;
  var _at = useState(0);
  var activeTabIndex = _at[0];
  var setActiveTabIndex = _at[1];

  if (!tabs || tabs.length === 0) return null;

  var renderTabButton = function(tab, index) {
    var isActive = activeTabIndex === index;
    var tabClass = "wc-product-tabs__tab " + (isActive ? 'wc-product-tabs__tab--active' : '');
    
    return React.createElement('button', {
      key: index,
      onClick: function() { setActiveTabIndex(index); },
      className: tabClass,
      "aria-current": isActive ? 'page' : undefined
    }, tab.label);
  };

  var renderTabPanel = function(tab, index) {
    var isActive = activeTabIndex === index;
    var panelClass = "wc-product-tabs__panel " + (isActive ? 'wc-product-tabs__panel--active' : '');
    
    return React.createElement('div', { 
      key: index, 
      className: panelClass,
      role: "tabpanel"
    }, tab.content);
  };

  var renderAccordionItem = function(tab, index) {
    var isActive = activeTabIndex === index;
    var iconClass = "wc-product-tabs__accordion-icon " + (isActive ? 'wc-product-tabs__accordion-icon--expanded' : '');
    var contentClass = "wc-product-tabs__accordion-content " + (isActive ? 'wc-product-tabs__accordion-content--active' : '');

    return React.createElement('div', { key: index, className: "wc-product-tabs__accordion-item" },
      React.createElement('button', { 
        onClick: function() { setActiveTabIndex(isActive ? -1 : index); },
        className: "wc-product-tabs__accordion-trigger",
        "aria-expanded": isActive
      },
        tab.label,
        React.createElement('span', { className: iconClass }, "▼")
      ),
      React.createElement('div', { 
        className: contentClass,
        role: "region"
      }, tab.content)
    );
  };

  return React.createElement('div', { className: "wc-product-tabs" },
    React.createElement('div', { className: "wc-product-tabs__desktop" },
      React.createElement('nav', { className: "wc-product-tabs__nav", "aria-label": "Tabs" },
        tabs.map(renderTabButton)
      ),
      React.createElement('div', { className: "wc-product-tabs__panels" },
        tabs.map(renderTabPanel)
      )
    ),
    React.createElement('div', { className: "wc-product-tabs__mobile" },
      tabs.map(renderAccordionItem)
    )
  );
}

ProductTabs.displayName = 'ProductTabs';