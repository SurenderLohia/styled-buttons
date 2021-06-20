import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";
function Button(props) {
  const { children, type, onClick, isFullWidth, size, color, isDisabled } =
    props;
  return (
    <StyledButton
      isFullWidth={isFullWidth}
      size={size}
      color={color}
      isDisabled={isDisabled}
      type={type}
      onClick={type}
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
