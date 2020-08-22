import React from "react";
import { Switch } from "./index";

export default {
  title: "Switch",
  component: Switch,
};

export const Template = (args: any) => <Switch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};