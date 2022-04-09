import * as React from 'react';
const Column = ({ size, offset, narrow, children }) => (React.createElement("div", { className: `
    column
    ${size}
    ${offset}
    ${narrow}
  ` }, children));
export default Column;
