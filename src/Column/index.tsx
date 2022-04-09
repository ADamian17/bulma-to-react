import * as React from 'react';
import { ColumnType } from './Column.types';

const Column: React.FC<ColumnType> = ({
  size,
  offset,
  narrow,
  children
}) => (
  <div className={`
    column
    ${size}
    ${offset}
    ${narrow}
  `}>
    {children}
  </div>
)

export default Column;
