import * as React from 'react';

type ButtonsType = {
  className?: string;
  hasAddons?: boolean;
  alignment?: 'is-centered' | 'is-right';
  [key: string]: any;
};

const Buttons: React.FC<ButtonsType> = ({
  className,
  hasAddons,
  alignment,
  children,
  ...rest
}) => {
  return (
    <div className={`buttons ${className} ${hasAddons} ${alignment}`} {...rest}>
      {children}
    </div>
  );
};

export default Buttons;
