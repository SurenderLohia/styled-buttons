import React from 'react';
import styled from 'styled-components';

import { StyledButton } from './styles';

function Button(props) {
  const {children, type, onClick} = props;
  return <StyledButton>{children}</StyledButton>
}

Button.defaultProps = {
  type: 'button',
}

export default Button;
