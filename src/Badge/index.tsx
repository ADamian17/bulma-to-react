import * as React from 'react';

declare type BadgeProps = {
  value: number;
  [key: string]: any;
};

const Badge: React.FC<BadgeProps> = ({ value, ...rest }) => {
  return (
    <div className={`badge ${!value ? 'badge--none' : ''} `} {...rest}>
      <h4 className="heavy">{value || 0}</h4>
    </div>
  );
};

export default Badge;
