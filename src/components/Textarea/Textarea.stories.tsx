import React from "react";
import { Textarea } from "./index";

export default {
  title: "Textarea",
  component: Textarea,
};

export const Template = (args: any) => <Textarea {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Textarea placeholder"
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
}