import React from 'react';
const Icons = ({ children }) => (React.createElement("span", { className: "icon-text" }, children));
const Icon = ({ size, color, children }) => (React.createElement("span", { className: `icon ${size} ${color}` }, children));
export default {
    Icon,
    Icons
};
