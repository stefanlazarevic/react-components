import React from "react";
import { Radio } from "./index";

export default {
  title: "Radio",
  component: Radio,
};

export const Template = (args: any) => <Radio {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  value: "checked",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'disabled'
};
