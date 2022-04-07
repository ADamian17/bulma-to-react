import * as React from 'react';

type ButtonProps = {
  variant: 'is-white' | 'is-light' | 'is-dark' | 'is-black' | 'is-text' | 'is-ghost' |  'is-primary' |  'is-link' | 'is-info' | 'is-success' |  'is-warning' | 'is-dange';
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
  return (
    <button {...rest} className={`button ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
