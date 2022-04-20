import React from 'react';
declare type BreadcrumbType = {
    alignment?: 'is-centered' | 'is-right';
    breadcrumbsList: {
        urlLink: string;
        urlText: string;
    }[];
    className?: string;
    lastBreadcrumb: string;
    separators?: 'has-arrow-separator' | 'has-bullet-separator' | 'has-dot-separator' | 'has-succeeds-separator';
    size?: 'is-small' | 'is-medium' | 'is-large';
    [key: string]: any;
};
declare const Breadcrumb: React.FC<BreadcrumbType>;
export default Breadcrumb;
