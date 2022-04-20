import React from 'react';
declare type ContentType = {
    className: string;
    size: 'is-small' | 'is-medium' | 'is-large';
    [key: string]: any;
};
declare const Content: React.FC<ContentType>;
export default Content;
