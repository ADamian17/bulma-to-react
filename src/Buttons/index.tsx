import * as React from 'react';

type ButtonsType = {
  hasAddons?: boolean;
  alignment?: 'is-centered' | 'is-right';  
}

const Buttons: React.FC<ButtonsType> = ({ hasAddons, alignment, children }) => {
  return (
    <button className={`buttons ${hasAddons} ${alignment}`}>
      {children}
    </button>
  );
};

export default Buttons;
