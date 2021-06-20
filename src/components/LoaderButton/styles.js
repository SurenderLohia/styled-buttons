import styled, { css, keyframes } from "styled-components";

import Button from "./../Button";

export const StyledLoaderButton = styled(Button)`
  position: relative;
`;

export const StyledLoaderButtonContent = styled.span`
  display: inline-block;

  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};
`;

export const StyledLoaderButtonIcon = styled.span`
  position: absolute;
  display: ${({ isLoading }) => (isLoading ? "block" : "none")};
`;
