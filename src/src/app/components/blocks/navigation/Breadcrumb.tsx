import React from "react";
import { CaretRight as ChevronRight, DotsThree as MoreHorizontal } from '../../../utils/phosphor-compat';
import { cn } from "../../../utils/cn";

export const Breadcrumb = ({ className, id, style, children }: any) => {
  return <nav id={id} style={style} aria-label="breadcrumb" className={cn("wp-block-breadcrumb", className)}>{children}</nav>;
};

export const BreadcrumbList = ({ className, id, style, children }: any) => {
  return <ol id={id} style={style} className={cn("wp-block-breadcrumb__list", className)}>{children}</ol>;
};

export const BreadcrumbItem = ({ className, id, style, children }: any) => {
  return <li id={id} style={style} className={cn("wp-block-breadcrumb__item", className)}>{children}</li>;
};

export const BreadcrumbLink = ({ asChild, className, children, href, id, style, onClick }: any) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: cn("wp-block-breadcrumb__link", className, (children as any).props.className), id, style, onClick,
    });
  }
  return <a id={id} href={href} style={style} onClick={onClick} className={cn("wp-block-breadcrumb__link", className)}>{children}</a>;
};

export const BreadcrumbPage = ({ className, id, style, children }: any) => {
  return <span id={id} style={style} role="link" aria-disabled="true" aria-current="page" className={cn("wp-block-breadcrumb__page", className)}>{children}</span>;
};

export const BreadcrumbSeparator = ({ children, className, id, style }: any) => {
  return <li id={id} style={style} role="presentation" aria-hidden="true" className={cn("wp-block-breadcrumb__separator", className)}>{children ?? <ChevronRight size={14} />}</li>;
};

export const BreadcrumbEllipsis = ({ className, id, style }: any) => {
  return (
    <span id={id} style={style} role="presentation" aria-hidden="true" className={cn("wp-block-breadcrumb__item", className)}>
      <MoreHorizontal className="wp-block-breadcrumb__ellipsis-icon" />
      <span className="sr-only">More</span>
    </span>
  );
};