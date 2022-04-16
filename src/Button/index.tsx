import * as React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isDisabled = false,
  isInverted,
  isLight,
  isLoading,
  isOutlined,
  isResponsive,
  isRounded,
  size,
  variant,
  ...rest
}) => {
  return (
    <button
      className={`button
        ${className} 
        ${isInverted && 'is-inverted'} 
        ${isLight && 'is-light'} 
        ${isLoading && 'is-loading'} 
        ${isOutlined && 'is-outlined'} 
        ${isResponsive && 'is-responsive'} 
        ${isRounded && 'is-rounded'} 
        ${size ? size : ''}
        ${variant} 
      `}
      {...rest}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
