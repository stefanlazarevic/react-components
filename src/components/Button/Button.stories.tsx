import React from "react";
import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
};

export const Template = (args: any) => <Button {...args} />;
Template.args = {content: "Button Content", style: {color: '#fff'}}
Template.argTypes = { onClick: { action: "onClick" } };

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};