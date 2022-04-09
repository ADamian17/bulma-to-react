import React from 'react'

type IconType = {
  size: 'is-small' | 'is-medium' | 'is-large',
  color: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
}

const Icons: React.FC<IconType> = ({ children }) => (
  <span className="icon-text">
    {children}
  </span>
);

const Icon: React.FC<IconType> = ({ size, color, children }) => (
  <span className={`icon ${size} ${color}`}>
    {children}
  </span>
);

export default {
  Icon,
  Icons
};
