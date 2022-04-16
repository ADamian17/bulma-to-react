import React from 'react';

type IconType = {
  className: string;
  size: 'is-small' | 'is-medium' | 'is-large';
  color:
    | 'has-text-info'
    | 'has-text-success'
    | 'has-text-warning'
    | 'has-text-danger';
  [key: string]: any;
};

const Icons: React.FC<{ className: string; [key: string]: any }> = ({
  children,
  className,
  ...rest
}) => (
  <span className={`icon-text ${className}`} {...rest}>
    {children}
  </span>
);

const Icon: React.FC<IconType> = ({
  size,
  color,
  className,
  children,
  ...rest
}) => (
  <span
    className={`
    icon 
    ${className} 
    ${size} 
    ${color}
  `}
    {...rest}
  >
    {children}
  </span>
);

export default {
  Icon,
  Icons,
};
