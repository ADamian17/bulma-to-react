import React from 'react';
type DeleteType = {
  className: string;
  size: 'is-small' | 'is-medium' | 'is-large';
  [key: string]: any;
};

const Delete: React.FC<DeleteType> = ({
  size,
  children,
  className,
  ...rest
}) => (
  <div className={`delete ${size}`} {...rest}>
    {children}
  </div>
);

export default Delete;
