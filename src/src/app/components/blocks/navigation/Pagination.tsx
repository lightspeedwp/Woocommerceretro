import React from "react";
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight, DotsThree as MoreHorizontal } from '../../../utils/phosphor-compat';
import { cn } from "../../../utils/cn";

export const Pagination = ({ className, id, style, children }: any) => {
  return <nav id={id} style={style} role="navigation" aria-label="pagination" className={cn("wp-block-pagination", className)}>{children}</nav>;
};

export const PaginationContent = ({ className, id, style, children }: any) => {
  return <ul id={id} style={style} className={cn("wp-block-pagination__list", className)}>{children}</ul>;
};

export const PaginationItem = ({ className, id, style, children }: any) => {
  return <li id={id} style={style} className={cn("wp-block-pagination__item", className)}>{children}</li>;
};

export const PaginationLink = ({ className, isActive, id, style, children, href, onClick }: any) => {
  return (
    <a id={id} href={href} style={style} onClick={onClick} aria-current={isActive ? "page" : undefined}
      className={cn("wp-block-pagination__link", isActive && "wp-block-pagination__link--active", className)}
    >
      {children}
    </a>
  );
};

export const PaginationPrevious = ({ className, id, style, href, onClick }: any) => {
  return (
    <PaginationLink id={id} style={style} href={href} onClick={onClick} aria-label="Go to previous page" className={cn("wp-block-pagination__link--prev", className)}>
      <ChevronLeft size={16} /><span className="wp-block-pagination__label">Previous</span>
    </PaginationLink>
  );
};

export const PaginationNext = ({ className, id, style, href, onClick }: any) => {
  return (
    <PaginationLink id={id} style={style} href={href} onClick={onClick} aria-label="Go to next page" className={cn("wp-block-pagination__link--next", className)}>
      <span className="wp-block-pagination__label">Next</span><ChevronRight size={16} />
    </PaginationLink>
  );
};

export const PaginationEllipsis = ({ className, id, style }: any) => {
  return (
    <span id={id} style={style} aria-hidden="true" className={cn("wp-block-pagination__ellipsis", className)}>
      <MoreHorizontal size={16} /><span className="sr-only">More pages</span>
    </span>
  );
};