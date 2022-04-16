import React from 'react';

type ContentType = {
  className: string;
  size: 'is-small' | 'is-medium' | 'is-large';
  [key: string]: any;
};

const Content: React.FC<ContentType> = ({
  size,
  className,
  children,
  ...rest
}) => (
  <div className={`content ${className} ${size}`} {...rest}>
    {children}
  </div>
);

export default Content;
