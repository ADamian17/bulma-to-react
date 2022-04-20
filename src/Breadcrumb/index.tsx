import React from 'react';

type BreadcrumbType = {
  alignment?: 'is-centered' | 'is-right';
  breadcrumbsList: { urlLink: string; urlText: string }[];
  className?: string;
  lastBreadcrumb: string;
  separators?:
    | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';
  size?: 'is-small' | 'is-medium' | 'is-large';
  [key: string]: any;
};

const Breadcrumb: React.FC<BreadcrumbType> = ({
  breadcrumbsList,
  children,
  className = '',
  alignment = '',
  ...rest
}) => {
  return (
    <nav
      className={`breadcrumb ${className} ${alignment}`}
      aria-label="breadcrumbs"
      {...rest}
    >
      {children}
    </nav>
  );
};

export default Breadcrumb;
