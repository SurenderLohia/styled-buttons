import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";
import { buttonColors, buttonSizes } from "./constants";
function Button(props) {
  const {
    className,
    children,
    type,
    onClick,
    isFullWidth,
    size,
    color,
    isDisabled,
  } = props;
  return (
    <StyledButton
      className={className}
      isFullWidth={isFullWidth}
      size={size}
      color={color}
      isDisabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isFullWidth: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(buttonSizes)),
  color: PropTypes.oneOf(Object.keys(buttonColors)),
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  isFullWidth: false,
  size: buttonSizes.medium,
  color: buttonColors.primary,
};

export default Button;
