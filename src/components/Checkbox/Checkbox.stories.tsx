import React from "react";
import { Checkbox } from "./index";

export default {
	title: "Checkbox",
	component: Checkbox,
};

export const Default = (args: any) => <Checkbox {...args} />;
Default.argTypes = { onChange: { action: "onChange" } };

export const Checked = Default.bind({});
Checked.args = {
  checked: true,
};

export const Mixed = Default.bind({});
Mixed.args = {
  checked: "mixed",
};

export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true,
};