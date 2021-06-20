import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import {
  StyledLoaderButton,
  StyledLoaderButtonContent,
  StyledLoaderButtonIcon,
} from "./styles";

const LoaderButton = (props) => {
  const { children, isLoading, color } = props;

  return (
    <StyledLoaderButton color={color}>
      <>
        <StyledLoaderButtonIcon isLoading={isLoading}>
          <FontAwesomeIcon icon={faSpinner} spin />
        </StyledLoaderButtonIcon>
        <StyledLoaderButtonContent isLoading={isLoading}>
          {children}
        </StyledLoaderButtonContent>
      </>
    </StyledLoaderButton>
  );
};

LoaderButton.propTypes = {
  children: PropTypes.ReactNode,
  isLoading: PropTypes.bool,
};

LoaderButton.defaultProps = {
  isLoading: false,
};

export default LoaderButton;
