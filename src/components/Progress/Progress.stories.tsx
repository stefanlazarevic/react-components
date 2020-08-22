import React from "react";
import { Progress } from "./index";

export default {
  title: "Progress",
  component: Progress,
};

export const Template = (args: any) => <Progress {...args} />;

export const Example = Template.bind({});
Example.args = {
  value: 50,
};