import * as React from 'react';
import { ColumnsType } from './Columns.type';

const Columns: React.FC<ColumnsType> = ({
  responsive, 
  gag, 
  options, 
  children}) => (
  <div className={`
    columns
    ${gag}
    ${responsive}
    ${options}
  `}>
    {children}
  </div>
)

export default Columns;
