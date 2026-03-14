import React from 'react';

interface TablePartProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export const Table = ({ className = '', children, id, style }: TablePartProps) => {
  return (
    <div data-slot="table-container" className="wp-block-table-container funky-table-container">
      <table id={id} style={style} data-slot="table" className={`wp-block-table funky-table ${className}`}>{children}</table>
    </div>
  );
};

export const TableHeader = ({ className = '', children, id, style }: TablePartProps) => {
  return <thead id={id} style={style} data-slot="table-header" className={`wp-block-table__header funky-table-header ${className}`}>{children}</thead>;
};

export const TableBody = ({ className = '', children, id, style }: TablePartProps) => {
  return <tbody id={id} style={style} data-slot="table-body" className={`wp-block-table__body funky-table-body ${className}`}>{children}</tbody>;
};

export const TableFooter = ({ className = '', children, id, style }: TablePartProps) => {
  return <tfoot id={id} style={style} data-slot="table-footer" className={`wp-block-table__footer funky-table-footer ${className}`}>{children}</tfoot>;
};

export const TableRow = ({ className = '', children, id, style }: TablePartProps) => {
  return <tr id={id} style={style} data-slot="table-row" className={`wp-block-table__row funky-table-row ${className}`}>{children}</tr>;
};

export const TableHead = ({ className = '', children, id, style }: TablePartProps) => {
  return <th id={id} style={style} data-slot="table-head" className={`wp-block-table__head funky-table-head ${className}`}>{children}</th>;
};

export const TableCell = ({ className = '', children, id, style }: TablePartProps) => {
  return <td id={id} style={style} data-slot="table-cell" className={`wp-block-table__cell funky-table-cell ${className}`}>{children}</td>;
};

export const TableCaption = ({ className = '', children, id, style }: TablePartProps) => {
  return <caption id={id} style={style} data-slot="table-caption" className={`wp-block-table__caption funky-table-caption ${className}`}>{children}</caption>;
};
