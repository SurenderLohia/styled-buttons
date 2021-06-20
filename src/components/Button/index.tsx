import React from 'react';

function Button(props) {
  const {children, type, onClick} = props;
  return <button>{children}</button>
}

Button.defaultProps = {
  type: 'button',
}

export default Button;
