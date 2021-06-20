import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';
function Button(props) {
  const {children, type, onClick, isFullWidth, size, color} = props;
  return <StyledButton isFullWidth={isFullWidth} size={size} color={color}>{children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.ReactNode,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isFullWidth: PropTypes.bool,
  size: PropTypes.oneOf['small', 'medium', 'large', 'extraLarge'],
  size: PropTypes.oneOf['primary', 'info', 'success', 'warning', 'danger'],
}

Button.defaultProps = {
  type: 'button',
  isFullWidth: false
}

export default Button;
