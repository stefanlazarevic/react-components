import React from "react";
import { Label } from "./index";

export default {
  title: "Label",
  component: Label,
};

export const Template = (args: any) => <Label {...args} />;
Template.args = {
  content: "Form label"
}