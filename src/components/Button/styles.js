import styled from 'styled-components';
import { lighten } from 'polished';

const btnColor = '#3e68ff';

export const StyledButton = styled.button`
  font-size: 1.5rem;

  border: none;
  background-color: transparent;

  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;

  padding: 0;
  cursor: pointer;

  @media screen and (-ms-high-contrast: active) {
    border: 2px solid inherit;
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${btnColor};
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);

  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;

  text-align: center;
  line-height: 1.1;

  transition: 220ms all ease-in-out;

  &:hover,
  &:active {
    background-color: ${lighten(-0.2, btnColor)};
  }

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 4px ${lighten(-0.4, btnColor)};
  }
`;

/**
 * Thanks to below creators:
 *
 * Button styles used from below resource
 * https://moderncss.dev/css-button-styling-guide/
 *
 * font-family: Used bulma.io font family style
 */
