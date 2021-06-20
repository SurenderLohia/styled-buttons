import React from 'react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full Width Button',
  isFullWidth: true
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: 'Small Button',
  size: 'small'
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  children: 'Medium Button',
  size: 'medium'
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  children: 'Large Button',
  size: 'large'
};

export const ExtraLargeButton = Template.bind({});
ExtraLargeButton.args = {
  children: 'Extra Large Button',
  size: 'extraLarge'
};
