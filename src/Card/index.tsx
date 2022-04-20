import React from 'react';

export const CardWrapper: React.FC<{ className?: string }> = ({
  children,
  className = '',
}) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<{ className?: string }> = ({
  children,
  className = '',
}) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

type CardImageType = {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  size?: 'is-4by3';
  [key: string]: any;
};

export const CardImage: React.FC<CardImageType> = ({
  size,
  imageSrc,
  className = '',
  ...rest
}) => {
  return (
    <figure className={`image ${size} ${className}`} {...rest}>
      <img src={imageSrc} alt="Placeholder image" />
    </figure>
  );
};

export const CardContent: React.FC<{
  className?: string;
  [key: string]: any;
}> = ({ children, ...rest }) => {
  return (
    <div className="card-content" {...rest}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{
  className?: string;
  [key: string]: any;
}> = ({ children, className, ...rest }) => {
  return (
    <footer className={`card-footer ${className}`} {...rest}>
      {children}
    </footer>
  );
};
