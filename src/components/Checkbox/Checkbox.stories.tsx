import React from "react";
import { Checkbox } from "./index";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Template = (args: any) => <Checkbox {...args} />;
Template.argTypes = { onChange: { action: "onChange" } };

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Mixed = Template.bind({});
Mixed.args = {
  checked: "mixed",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};