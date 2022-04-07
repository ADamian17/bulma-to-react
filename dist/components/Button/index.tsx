import React from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
  return (
    <button {...rest} className={`btn btn--${variant} CTA`}>
      {children}
    </button>
  );
};

export default Button;
