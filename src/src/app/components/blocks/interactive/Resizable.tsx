"use client";

import * as React from "react";
import { DotsSixVertical as GripVerticalIcon } from '@phosphor-icons/react';

import * as ResizablePrimitive from "react-resizable-panels";
import * as cnModule from "../../../utils/cn";

var cn = cnModule.cn;

/**
 * @typedef {Object} ResizablePanelGroupProps
 * @property {string} [className]
 * @property {string} [direction]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 * @property {Function} [onLayout]
 */

function ResizablePanelGroup(props) {
  var className = props.className;
  var direction = props.direction;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onLayout = props.onLayout;

  return React.createElement(ResizablePrimitive.PanelGroup, {
    id: id,
    style: style,
    direction: direction,
    onLayout: onLayout,
    "data-slot": "resizable-panel-group",
    className: cn(
      "wp-block-resizable-group",
      className,
    )
  }, children);
}

/**
 * @typedef {Object} ResizablePanelProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 * @property {number} [defaultSize]
 * @property {number} [maxSize]
 * @property {number} [minSize]
 * @property {number} [order]
 * @property {string} [tagName]
 * @property {boolean} [collapsible]
 * @property {Function} [onCollapse]
 * @property {Function} [onExpand]
 * @property {Function} [onResize]
 */

function ResizablePanel(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var defaultSize = props.defaultSize;
  var maxSize = props.maxSize;
  var minSize = props.minSize;
  var order = props.order;
  var tagName = props.tagName;
  var collapsible = props.collapsible;
  var onCollapse = props.onCollapse;
  var onExpand = props.onExpand;
  var onResize = props.onResize;

  return React.createElement(ResizablePrimitive.Panel, {
    id: id,
    style: style,
    defaultSize: defaultSize,
    maxSize: maxSize,
    minSize: minSize,
    order: order,
    tagName: tagName,
    collapsible: collapsible,
    onCollapse: onCollapse,
    onExpand: onExpand,
    onResize: onResize,
    className: className,
    "data-slot": "resizable-panel"
  }, children);
}

/**
 * @typedef {Object} ResizableHandleProps
 * @property {boolean} [withHandle]
 * @property {string} [className]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 * @property {boolean} [disabled]
 * @property {React.ReactNode} [children]
 */

function ResizableHandle(props) {
  var withHandle = props.withHandle;
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var disabled = props.disabled;
  var children = props.children;

  return React.createElement(ResizablePrimitive.PanelResizeHandle, {
    id: id,
    style: style,
    disabled: disabled,
    "data-slot": "resizable-handle",
    className: cn(
      "wp-block-resizable-handle",
      className,
    )
  },
    children,
    withHandle ? React.createElement('div', { className: "wp-block-resizable-handle-icon" },
      React.createElement(GripVerticalIcon, null)
    ) : null
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };