import styled, { css } from "styled-components";
import { lighten } from "polished";

import { buttonSizes, buttonColors } from "./constants";

const getButtonColor = (color) => {
  return buttonColors[color] ? buttonColors[color] : buttonColors["primary"];
};

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;

  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;

  cursor: pointer;

  @media screen and (-ms-high-contrast: active) {
    border: 2px solid inherit;
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;

  // Style
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);

  // Size
  padding: 0.5em 1em;
  min-width: 10ch;
  min-height: 44px;

  text-align: center;
  line-height: 1.1;

  transition: 220ms all ease-in-out;

  /* disabled */
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  /* === Variants === */

  /* Color */
  ${({ color, isDisabled }) => {
    const buttonColor = getButtonColor(color);
    return css`
      background-color: ${buttonColor.background};
      color: ${buttonColor.text};

      ${!isDisabled &&
      css`
        &:hover,
        &:active {
          background-color: ${lighten(-0.2, buttonColor.background)};
        }

        &:focus {
          outline-style: solid;
          outline-color: transparent;
          box-shadow: 0 0 0 4px ${lighten(-0.4, buttonColor.background)};
        }
      `}
    `;
  }}

  // Full width
  ${(props) =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}

  // Size
  font-size: ${({ size }) =>
    buttonSizes[size]
      ? `${buttonSizes[size]}rem`
      : `${buttonSizes["medium"]}rem`}
`;

/**
 * Thanks to below creators:
 *
 * Button styles used from below resource
 * https://moderncss.dev/css-button-styling-guide/
 *
 * Button colors & font-family: Used from bulma.io
 */
