import React from 'react';
declare type IconType = {
    className: string;
    size: 'is-small' | 'is-medium' | 'is-large';
    color: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
    [key: string]: any;
};
declare const _default: {
    Icon: React.FC<IconType>;
    Icons: React.FC<{
        [key: string]: any;
        className: string;
    }>;
};
export default _default;
