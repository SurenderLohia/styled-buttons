import React from "react";

import Button from "./index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonIcon } from "./styles";

const CoffeeIcon = <FontAwesomeIcon icon={faCoffee} />;

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const Info = Template.bind({});
Info.args = {
  children: "Info",
  color: "info",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success",
  color: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning",
  color: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  isDisabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Full Width",
  isFullWidth: true,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: "Small",
  size: "small",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  children: "Medium",
  size: "medium",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  children: "Large",
  size: "large",
};

export const ExtraLargeButton = Template.bind({});
ExtraLargeButton.args = {
  children: "Extra Large",
  size: "extraLarge",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <StyledButtonIcon>{CoffeeIcon}</StyledButtonIcon>
      <span>With Icon</span>
    </>
  ),
};
