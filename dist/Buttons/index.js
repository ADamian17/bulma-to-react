import * as React from 'react';
const Buttons = ({ hasAddons, alignment, children }) => {
    return (React.createElement("button", { className: `buttons ${hasAddons} ${alignment}` }, children));
};
export default Buttons;
