import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';
function Button(props) {
  const {children, type, onClick, isFullWidth} = props;
  return <StyledButton isFullWidth={isFullWidth}>{children}</StyledButton>
}

Button.propTypes = {
  //children: PropTypes.ReactNote,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isFullWidth: PropTypes.bool
}

Button.defaultProps = {
  type: 'button',
  isFullWidth: false
}

export default Button;
