import * as React from 'react';
import { ColumnType } from './Column.types';

const Column: React.FC<ColumnType> = ({
  className,
  size,
  offset,
  narrow,
  children,
  ...rest
}) => (
  <div
    className={`
    column
    ${className}
    ${size}
    ${offset}
    ${narrow}
  `}
    {...rest}
  >
    {children}
  </div>
);

export default Column;
