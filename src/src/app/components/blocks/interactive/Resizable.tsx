"use client";

import React from "react";
import { DotsSixVertical as GripVerticalIcon } from '../../../utils/phosphor-compat';
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "../../../utils/cn";

export const ResizablePanelGroup = ({ className, direction, children, id, style, onLayout }: any) => {
  return (
    <ResizablePrimitive.PanelGroup id={id} style={style} direction={direction} onLayout={onLayout} data-slot="resizable-panel-group" className={cn("wp-block-resizable-group", className)}>
      {children}
    </ResizablePrimitive.PanelGroup>
  );
}

export const ResizablePanel = ({ className, children, id, style, defaultSize, maxSize, minSize, order, tagName, collapsible, onCollapse, onExpand, onResize }: any) => {
  return (
    <ResizablePrimitive.Panel
      id={id} style={style} defaultSize={defaultSize} maxSize={maxSize} minSize={minSize}
      order={order} tagName={tagName} collapsible={collapsible} onCollapse={onCollapse}
      onExpand={onExpand} onResize={onResize} className={className} data-slot="resizable-panel"
    >
      {children}
    </ResizablePrimitive.Panel>
  );
}

export const ResizableHandle = ({ withHandle, className, id, style, disabled, children }: any) => {
  return (
    <ResizablePrimitive.PanelResizeHandle id={id} style={style} disabled={disabled} data-slot="resizable-handle" className={cn("wp-block-resizable-handle", className)}>
      {children}
      {withHandle && (
        <div className="wp-block-resizable-handle-icon"><GripVerticalIcon /></div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}