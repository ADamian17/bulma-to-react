import * as React from 'react';
declare type ButtonsType = {
    className?: string;
    hasAddons?: boolean;
    alignment?: 'is-centered' | 'is-right';
    [key: string]: any;
};
declare const Buttons: React.FC<ButtonsType>;
export default Buttons;
