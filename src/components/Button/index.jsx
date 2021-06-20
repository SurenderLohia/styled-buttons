import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";
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
  children: PropTypes.ReactNode,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isFullWidth: PropTypes.bool,
  size: PropTypes.oneOf[("small", "medium", "large", "extraLarge")],
  color: PropTypes.oneOf[("primary", "info", "success", "warning", "danger")],
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  isFullWidth: false,
};

export default Button;
