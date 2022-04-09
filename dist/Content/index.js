import React from 'react';
const Content = ({ size, children }) => (React.createElement("div", { className: `content ${size}` }, children));
export default Content;
