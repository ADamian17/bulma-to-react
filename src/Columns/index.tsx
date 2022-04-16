import * as React from 'react';
import { ColumnsType } from './Columns.type';

const Columns: React.FC<ColumnsType> = ({
  responsive,
  gag,
  options,
  className,
  children,
  ...rest
}) => (
  <div
    className={`
    columns
    ${className}
    ${gag}
    ${responsive}
    ${options}
  `}
    {...rest}
  >
    {children}
  </div>
);

export default Columns;
