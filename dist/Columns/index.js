import * as React from 'react';
const Columns = ({ responsive, gag, options, children }) => (React.createElement("div", { className: `
    columns
    ${gag}
    ${responsive}
    ${options}
  ` }, children));
export default Columns;
