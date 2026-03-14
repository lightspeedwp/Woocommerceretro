import React, { useState, useEffect, useContext, createContext, useCallback, useMemo, isValidElement, cloneElement } from "react";
import { SidebarSimple as PanelLeftIcon } from '@phosphor-icons/react';
import { useIsMobile } from "@/hooks/useMobile";
import { Button } from "@/components/blocks/design/Buttons";
import { Input } from "@/components/blocks/forms/Input";
import { Separator } from "@/components/blocks/design/Separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/blocks/layout/Sheet";
import { Skeleton } from "@/components/blocks/feedback/Skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/blocks/overlay/Tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextValue {
  state: string;
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  isMobile: boolean;
  openMobile: boolean;
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
};

export const SidebarProvider = ({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className = '', style: styleProp, children, id }: any) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp !== undefined ? openProp : _open;

  const setOpen = useCallback((value: boolean | ((prev: boolean) => boolean)) => {
    const openState = typeof value === "function" ? value(open) : value;
    setOpenProp ? setOpenProp(openState) : _setOpen(openState);
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [setOpenProp, open]);

  const toggleSidebar = useCallback(() => {
    isMobile ? setOpenMobile((o) => !o) : setOpen((o) => !o);
  }, [isMobile, setOpen, setOpenMobile]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo(() => ({
    state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar,
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);

  const finalStyle: any = { "--sidebar-width": SIDEBAR_WIDTH, "--sidebar-width-icon": SIDEBAR_WIDTH_ICON, ...styleProp };

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div id={id} data-slot="sidebar-wrapper" style={finalStyle} className={`wp-block-sidebar-wrapper funky-sidebar-wrapper ${className}`}>
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', className = '', children, id, style }: any) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return <div id={id} style={style} data-slot="sidebar" className={`wp-block-sidebar funky-sidebar ${className}`}>{children}</div>;
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent data-sidebar="sidebar" data-slot="sidebar" className="wp-block-sidebar funky-sidebar-mobile" style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE, ...style } as any} side={side}>
          <SheetHeader className="sr-only"><SheetTitle>Sidebar</SheetTitle><SheetDescription>Displays the mobile sidebar.</SheetDescription></SheetHeader>
          <div className="wp-block-sidebar-inner">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div id={id} style={style} className={`wp-block-sidebar-desktop-wrapper funky-sidebar-desktop ${side === 'left' ? 'is-left' : 'is-right'}`} data-state={state} data-collapsible={state === "collapsed" ? collapsible : ""} data-variant={variant} data-side={side} data-slot="sidebar">
      <div data-slot="sidebar-gap" className="wp-block-sidebar-gap" />
      <div data-slot="sidebar-container" className={`wp-block-sidebar-container wp-block-sidebar-container--${side} ${(variant === "floating" || variant === "inset") ? 'wp-block-sidebar-container--floating' : ''} ${className} funky-sidebar-container`} data-side={side}>
        <div data-sidebar="sidebar" data-slot="sidebar-inner" className="wp-block-sidebar-inner">{children}</div>
      </div>
    </div>
  );
};

export const SidebarTrigger = ({ className = '', onClick, id, style }: any) => {
  const { toggleSidebar } = useSidebar();
  return (
    <Button id={id} style={style} data-sidebar="trigger" data-slot="sidebar-trigger" variant="ghost" size="icon" className={`wp-block-sidebar-trigger funky-sidebar-trigger ${className}`} onClick={(event: any) => { onClick?.(event); toggleSidebar(); }}>
      <PanelLeftIcon /><span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export const SidebarRail = ({ className = '', id, style }: any) => {
  const { toggleSidebar } = useSidebar();
  return <button id={id} style={style} data-sidebar="rail" data-slot="sidebar-rail" aria-label="Toggle Sidebar" tabIndex={-1} onClick={toggleSidebar} title="Toggle Sidebar" className={`wp-block-sidebar-rail funky-sidebar-rail ${className}`} />;
};

export const SidebarInset = ({ className = '', id, style, children }: any) => {
  return <main id={id} style={style} data-slot="sidebar-inset" className={`wp-block-sidebar-inset funky-sidebar-inset ${className}`}>{children}</main>;
};

export const SidebarInput = ({ className = '', value, onChange, placeholder, type, id, style }: any) => {
  return <Input id={id} style={style} type={type} value={value} onChange={onChange} placeholder={placeholder} data-slot="sidebar-input" data-sidebar="input" className={`wp-block-sidebar-input funky-sidebar-input ${className}`} />;
};

export const SidebarHeader = ({ className = '', id, style, children }: any) => {
  return <div id={id} style={style} data-slot="sidebar-header" data-sidebar="header" className={`wp-block-sidebar-header funky-sidebar-header ${className}`}>{children}</div>;
};

export const SidebarFooter = ({ className = '', id, style, children }: any) => {
  return <div id={id} style={style} data-slot="sidebar-footer" data-sidebar="footer" className={`wp-block-sidebar-footer funky-sidebar-footer ${className}`}>{children}</div>;
};

export const SidebarSeparator = ({ className = '', id, style }: any) => {
  return <Separator id={id} style={style} data-slot="sidebar-separator" data-sidebar="separator" className={`wp-block-sidebar-separator funky-sidebar-sep ${className}`} />;
};

export const SidebarContent = ({ className = '', id, style, children }: any) => {
  return <div id={id} style={style} data-slot="sidebar-content" data-sidebar="content" className={`wp-block-sidebar-content funky-sidebar-content ${className}`}>{children}</div>;
};

export const SidebarGroup = ({ className = '', id, style, children }: any) => {
  return <div id={id} style={style} data-slot="sidebar-group" data-sidebar="group" className={`wp-block-sidebar-group funky-sidebar-group ${className}`}>{children}</div>;
};

export const SidebarGroupLabel = ({ className = '', asChild = false, children, id, style }: any) => {
  const cls = `wp-block-sidebar-group-label funky-sidebar-group-label ${className}`;
  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", id, style, className: `${cls} ${(children as any).props.className || ''}` });
  }
  return <div id={id} style={style} data-slot="sidebar-group-label" data-sidebar="group-label" className={cls}>{children}</div>;
};

export const SidebarGroupAction = ({ className = '', asChild = false, children, id, style, onClick }: any) => {
  const cls = `wp-block-sidebar-group-action funky-sidebar-group-action ${className}`;
  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, { "data-slot": "sidebar-group-action", "data-sidebar": "group-action", id, style, onClick, className: `${cls} ${(children as any).props.className || ''}` });
  }
  return <button id={id} style={style} onClick={onClick} data-slot="sidebar-group-action" data-sidebar="group-action" className={cls}>{children}</button>;
};

export const SidebarGroupContent = ({ className = '', id, style, children }: any) => {
  return <div id={id} style={style} data-slot="sidebar-group-content" data-sidebar="group-content" className={`wp-block-sidebar-group-content funky-sidebar-group-content ${className}`}>{children}</div>;
};

export const SidebarMenu = ({ className = '', id, style, children }: any) => {
  return <ul id={id} style={style} data-slot="sidebar-menu" data-sidebar="menu" className={`wp-block-sidebar-menu funky-sidebar-menu ${className}`}>{children}</ul>;
};

export const SidebarMenuItem = ({ className = '', id, style, children }: any) => {
  return <li id={id} style={style} data-slot="sidebar-menu-item" data-sidebar="menu-item" className={`wp-block-sidebar-menu-item funky-sidebar-menu-item ${className}`}>{children}</li>;
};

export const SidebarMenuButton = ({ asChild = false, isActive = false, variant = 'default', size = 'default', tooltip: tooltipProp, className = '', children, id, style, onClick }: any) => {
  const { state: sidebarState, isMobile } = useSidebar();
  const cls = `wp-block-sidebar-menu-button wp-block-sidebar-menu-button--${variant} wp-block-sidebar-menu-button--${size} funky-sidebar-menu-btn ${className}`;

  let button: React.ReactNode;
  if (asChild && isValidElement(children)) {
    button = cloneElement(children as React.ReactElement<any>, { id, style, onClick, "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: `${cls} ${(children as any).props?.className || ''}` });
  } else {
    button = <button id={id} style={style} onClick={onClick} data-slot="sidebar-menu-button" data-sidebar="menu-button" data-size={size} data-active={isActive} className={cls}>{children}</button>;
  }

  if (!tooltipProp) return button;
  const tooltipContent = typeof tooltipProp === "string" ? tooltipProp : tooltipProp.children;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={sidebarState !== "collapsed" || isMobile}>{tooltipContent}</TooltipContent>
    </Tooltip>
  );
};

export const SidebarMenuAction = ({ className = '', asChild = false, showOnHover = false, children, id, style, onClick }: any) => {
  const cls = `wp-block-sidebar-menu-action ${showOnHover ? 'wp-block-sidebar-menu-action--show-on-hover' : ''} funky-sidebar-menu-action ${className}`;
  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, { id, style, onClick, "data-slot": "sidebar-menu-action", "data-sidebar": "menu-action", className: `${cls} ${(children as any).props.className || ''}` });
  }
  return <button id={id} style={style} onClick={onClick} data-slot="sidebar-menu-action" data-sidebar="menu-action" className={cls}>{children}</button>;
};

export const SidebarMenuBadge = ({ className = '', id, style, children }: any) => {
  return <div id={id} style={style} data-slot="sidebar-menu-badge" data-sidebar="menu-badge" className={`wp-block-sidebar-menu-badge funky-sidebar-menu-badge ${className}`}>{children}</div>;
};

export const SidebarMenuSkeleton = ({ className = '', showIcon = false, id, style: styleProp }: any) => {
  const width = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  const finalStyle: any = { "--skeleton-width": width, ...styleProp };

  return (
    <div id={id} data-slot="sidebar-menu-skeleton" data-sidebar="menu-skeleton" className={`wp-block-sidebar-menu-skeleton funky-sidebar-skeleton ${className}`}>
      {showIcon && <Skeleton className="wp-block-sidebar-skeleton-icon" />}
      <Skeleton className="wp-block-sidebar-skeleton-text" style={finalStyle} />
    </div>
  );
};

export const SidebarMenuSub = ({ className = '', id, style, children }: any) => {
  return <ul id={id} style={style} data-slot="sidebar-menu-sub" data-sidebar="menu-sub" className={`wp-block-sidebar-menu-sub funky-sidebar-menu-sub ${className}`}>{children}</ul>;
};

export const SidebarMenuSubItem = ({ className = '', id, style, children }: any) => {
  return <li id={id} style={style} data-slot="sidebar-menu-sub-item" data-sidebar="menu-sub-item" className={`wp-block-sidebar-menu-sub-item funky-sidebar-menu-sub-item ${className}`}>{children}</li>;
};

export const SidebarMenuSubButton = ({ asChild = false, size = 'md', isActive = false, className = '', children, id, style, href }: any) => {
  const cls = `wp-block-sidebar-menu-sub-button wp-block-sidebar-menu-sub-button--${size} funky-sidebar-menu-sub-btn ${isActive ? 'is-active' : ''} ${className}`;
  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, { id, style, "data-slot": "sidebar-menu-sub-button", "data-sidebar": "menu-sub-button", "data-size": size, "data-active": isActive, className: `${cls} ${(children as any).props.className || ''}` });
  }
  return <a id={id} style={style} href={href} data-slot="sidebar-menu-sub-button" data-sidebar="menu-sub-button" data-size={size} data-active={isActive} className={cls}>{children}</a>;
};
