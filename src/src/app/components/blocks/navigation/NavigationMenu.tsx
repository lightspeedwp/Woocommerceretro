"use client";

import React, { createContext, useContext, useState, useRef, useCallback, useId } from "react";
import { createPortal } from "react-dom";
import { CaretDown as ChevronDown } from '../../../utils/phosphor-compat';
import { cn } from "../../../utils/cn";

const NavigationMenuContext = createContext<any>(null);
const NavigationMenuItemContext = createContext<any>(null);

export const navigationMenuTriggerStyle = "wp-block-navigation-menu-trigger";

export const NavigationMenu = ({ className, children, viewport = true, defaultValue, value, onValueChange, id, style }: any) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isViewportMounted, setIsViewportMounted] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const isControlled = value !== undefined;
  const actualValue = isControlled ? value : internalValue;

  const handleSetValue = useCallback((newValue: any) => {
    if (!isControlled) setInternalValue(newValue);
    if (onValueChange && newValue !== undefined) onValueChange(newValue);
  }, [isControlled, onValueChange]);

  const handleSetViewportRef = useCallback((node: HTMLDivElement | null) => {
    viewportRef.current = node;
    setIsViewportMounted(!!node);
  }, []);

  return (
    <NavigationMenuContext.Provider value={{ value: actualValue, setValue: handleSetValue, viewportRef, setViewportRef: handleSetViewportRef, isViewportMounted }}>
      <nav id={id} style={style} data-slot="navigation-menu" data-viewport={viewport} className={cn("wp-block-navigation-menu", className)} onMouseLeave={() => handleSetValue(undefined)}>
        {children}
        {viewport && <NavigationMenuViewport key="__viewport" />}
      </nav>
    </NavigationMenuContext.Provider>
  );
};

export const NavigationMenuList = ({ className, children, id, style }: any) => {
  return <ul id={id} style={style} data-slot="navigation-menu-list" className={cn("wp-block-navigation-menu-list", className)}>{children}</ul>;
};

export const NavigationMenuItem = ({ className, value, children, id, style }: any) => {
  const uniqueId = useId();
  const itemValue = value || uniqueId;
  return (
    <NavigationMenuItemContext.Provider value={{ value: itemValue }}>
      <li id={id} style={style} data-slot="navigation-menu-item" className={cn("wp-block-navigation-menu-item", className)}>{children}</li>
    </NavigationMenuItemContext.Provider>
  );
};

export const NavigationMenuTrigger = ({ className, children, onClick, onMouseEnter, id, style }: any) => {
  const navContext = useContext(NavigationMenuContext);
  const itemContext = useContext(NavigationMenuItemContext);
  if (!navContext || !itemContext) return null;

  const isOpen = navContext.value === itemContext.value;

  return (
    <button
      id={id} style={style} data-slot="navigation-menu-trigger" data-state={isOpen ? "open" : "closed"}
      className={cn("wp-block-navigation-menu-trigger", "group", className)}
      onClick={(e) => { navContext.setValue(isOpen ? undefined : itemContext.value); onClick?.(e); }}
      onMouseEnter={(e) => { navContext.setValue(itemContext.value); onMouseEnter?.(e); }}
      aria-expanded={isOpen}
    >
      {children}{" "}
      <ChevronDown className="wp-block-navigation-menu-icon" aria-hidden="true" />
    </button>
  );
};

export const NavigationMenuContent = ({ className, children, id, style }: any) => {
  const navContext = useContext(NavigationMenuContext);
  const itemContext = useContext(NavigationMenuItemContext);
  if (!navContext || !itemContext) return null;

  const isOpen = navContext.value === itemContext.value;
  if (!isOpen) return null;

  const content = <div id={id} style={style} data-slot="navigation-menu-content" data-state="open" className={cn("wp-block-navigation-menu-content", className)}>{children}</div>;

  if (navContext.isViewportMounted && navContext.viewportRef.current) {
    return createPortal(content, navContext.viewportRef.current);
  }
  return content;
};

export const NavigationMenuViewport = ({ className, id, style }: any) => {
  const navContext = useContext(NavigationMenuContext);
  return (
    <div className={cn("wp-block-navigation-menu-viewport-container")}>
      <div id={id} style={style} data-slot="navigation-menu-viewport" ref={navContext?.setViewportRef} className={cn("wp-block-navigation-menu-viewport", className)} />
    </div>
  );
};

export const NavigationMenuLink = ({ className, active, href, id, style, onClick, children }: any) => {
  return <a id={id} style={style} onClick={onClick} data-slot="navigation-menu-link" data-active={active} href={href} className={cn("wp-block-navigation-menu-link", className)}>{children}</a>;
};

export const NavigationMenuIndicator = () => { return null; };