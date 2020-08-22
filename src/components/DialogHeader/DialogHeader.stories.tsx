import React from "react";
import { DialogHeader } from "./index";

export default {
  title: "DialogHeader",
  component: DialogHeader,
};

export const Template = (args: any) => <DialogHeader {...args} />;
Template.argTypes = { onChange: { action: "onChange" } };