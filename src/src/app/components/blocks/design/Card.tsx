import React from "react";
import { cn } from "../../../utils/cn";

interface CardPartProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Card = ({ className, children, id, onClick, style }: CardPartProps) => {
  return <div data-slot="card" className={cn("wp-block-card", className)} id={id} onClick={onClick} style={style}>{children}</div>;
};

export const CardHeader = ({ className, children, id, style }: CardPartProps) => {
  return <div data-slot="card-header" className={cn("wp-block-card__header", className)} id={id} style={style}>{children}</div>;
};

export const CardTitle = ({ className, children, id, style }: CardPartProps) => {
  return <h4 data-slot="card-title" className={cn("wp-block-card__title", className)} id={id} style={style}>{children}</h4>;
};

export const CardDescription = ({ className, children, id, style }: CardPartProps) => {
  return <p data-slot="card-description" className={cn("wp-block-card__description", className)} id={id} style={style}>{children}</p>;
};

export const CardAction = ({ className, children, id, style }: CardPartProps) => {
  return <div data-slot="card-action" className={cn("wp-block-card__action", className)} id={id} style={style}>{children}</div>;
};

export const CardContent = ({ className, children, id, style }: CardPartProps) => {
  return <div data-slot="card-content" className={cn("wp-block-card__content", className)} id={id} style={style}>{children}</div>;
};

export const CardFooter = ({ className, children, id, style }: CardPartProps) => {
  return <div data-slot="card-footer" className={cn("wp-block-card__footer", className)} id={id} style={style}>{children}</div>;
};
