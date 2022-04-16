import * as React from 'react';
const Buttons = ({ hasAddons, alignment, children }) => {
    return (React.createElement("div", { className: `buttons ${hasAddons} ${alignment}` }, children));
};
export default Buttons;
