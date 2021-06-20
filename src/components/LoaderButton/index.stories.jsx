import React from "react";

import LoaderButton from "./index";

export default {
  title: "Components/LoaderButton",
  component: LoaderButton,
};

const Template = (args) => <LoaderButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Loader",
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  children: "Is Loading",
  color: "warning",
  isLoading: true,
};
