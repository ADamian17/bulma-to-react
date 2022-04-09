import React from 'react'
type DeleteType = {
  size: 'is-small' | 'is-medium' | 'is-large'
}

const Delete: React.FC<DeleteType> = ({ size, children }) => (
  <div className={`delete ${size}`}>
    {children}
  </div>
);

export default Delete;
