import React from 'react';
import './style.css';

function Block({ color, children, id, ...props }) {
  const extraClass = props.class ?? '';

  return (
    <div {...props} id={id} className={`block ${color} ${extraClass}`}>
      {children}
    </div>
  );
}

export default Block;
