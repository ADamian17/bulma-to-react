import React from 'react'

type ContentType = {
  size: 'is-small' | 'is-medium' | 'is-large'
}

const Content: React.FC<ContentType> = ({ size, children }) => (
  <div className={`content ${size}`}>
    {children}
  </div>
);

export default Content;
