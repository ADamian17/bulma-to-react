import React from 'react';
declare type DeleteType = {
    className: string;
    size: 'is-small' | 'is-medium' | 'is-large';
    [key: string]: any;
};
declare const Delete: React.FC<DeleteType>;
export default Delete;
