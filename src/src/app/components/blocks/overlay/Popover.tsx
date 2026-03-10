import React from "react";
import * as cnModule from "@/utils/cn";

var createContext = React.createContext;
var useContext = React.useContext;
var useState = React.useState;
var useRef = React.useRef;
var useEffect = React.useEffect;
var cn = cnModule.cn;

var PopoverContext = createContext(undefined);

export function Popover(props) {
  var controlledOpen = props.open;
  var onOpenChange = props.onOpenChange;
  var children = props.children;
  
  var _so = useState(false);
  var uncontrolledOpen = _so[0];
  var setUncontrolledOpen = _so[1];
  var open = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;
  var triggerRef = useRef(null);

  var handleOpenChange = function(newOpen) {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  useEffect(function() {
    var handleClickOutside = function(event) {
      if (
        open &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target) &&
        !(event.target).closest(".wp-block-popover-content")
      ) {
        handleOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return function() { document.removeEventListener("mousedown", handleClickOutside); };
  }, [open]);

  return React.createElement(PopoverContext.Provider, {
    value: { open: open, onOpenChange: handleOpenChange, triggerRef: triggerRef }
  },
    React.createElement('div', { className: "wp-block-popover-wrapper" }, children)
  );
}

export function PopoverTrigger(props) {
  var children = props.children;
  var className = props.className;
  var id = props.id;
  var style = props.style;

  var context = useContext(PopoverContext);
  if (!context) return null;
  var onOpenChange = context.onOpenChange;
  var triggerRef = context.triggerRef;

  return React.createElement('div', {
    id: id,
    style: style,
    ref: triggerRef,
    onClick: function() { onOpenChange(true); },
    className: cn("wp-block-popover-trigger", className)
  }, children);
}

export function PopoverContent(props) {
  var children = props.children;
  var className = props.className;
  var align = props.align === undefined ? "center" : props.align;
  var sideOffset = props.sideOffset === undefined ? 4 : props.sideOffset;

  var context = useContext(PopoverContext);
  if (!context) return null;
  var open = context.open;

  if (!open) return null;

  var getAlignStyle = function() {
    if (align === 'start') return { left: 0 };
    if (align === 'end') return { right: 0 };
    return { left: '50%', transform: 'translateX(-50%)' };
  };

  var alignStyle = getAlignStyle();

  return React.createElement('div', {
    className: cn("wp-block-popover-content", className),
    'data-state': open ? "open" : "closed",
    style: { 
      marginTop: sideOffset,
      position: 'absolute',
      top: '100%',
      left: alignStyle.left,
      right: alignStyle.right,
      transform: alignStyle.transform
    }
  }, children);
}