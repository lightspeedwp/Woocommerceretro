import React from "react";
import * as cnModule from "../../../utils/cn";
var createContext = React.createContext;
var useContext = React.useContext;
var useState = React.useState;
var cn = cnModule.cn;

var TabsContext = createContext(undefined);

export function Tabs(props) {
  var defaultValue = props.defaultValue;
  var controlledValue = props.value;
  var onValueChange = props.onValueChange;
  var className = props.className;
  var children = props.children;

  var state = useState(defaultValue === undefined ? "" : defaultValue);
  var uncontrolledValue = state[0];
  var setUncontrolledValue = state[1];
  var value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

  var handleValueChange = function(newValue) {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return React.createElement(TabsContext.Provider, { value: { value: value, onValueChange: handleValueChange } },
    React.createElement('div', { className: cn("wp-block-tabs", className) }, children)
  );
}

export function TabsList(props) {
  var className = props.className;
  var children = props.children;
  return React.createElement('div', { className: cn("wp-block-tabs__list", className) }, children);
}

export function TabsTrigger(props) {
  var value = props.value;
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var disabled = props.disabled;

  var context = useContext(TabsContext);
  if (!context) return null;

  var isActive = context.value === value;

  return React.createElement('button', {
    id: id,
    style: style,
    disabled: disabled,
    type: "button",
    className: cn("wp-block-tabs__trigger", className),
    'data-state': isActive ? "active" : "inactive",
    onClick: function() { context.onValueChange(value); }
  }, children);
}

export function TabsContent(props) {
  var value = props.value;
  var className = props.className;
  var children = props.children;

  var context = useContext(TabsContext);
  if (!context) return null;

  if (context.value !== value) return null;

  return React.createElement('div', {
    className: cn("wp-block-tabs__content", className),
    'data-state': "active"
  }, children);
}
