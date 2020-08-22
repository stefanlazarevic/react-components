import React from "react";
import { RadioButton } from "./index";
import { FormatLeftIcon } from "../Icon";

export default {
  title: "RadioButton",
  component: RadioButton,
};

export const Template = (args: any) => <RadioButton {...args} />;

export const Example = Template.bind({});
Example.args = {
  value: 'RadioButton',
  content: 'RadioButton'
};

export const AlignmentButton = () => (
  <RadioButton value="0" buttonClassName="IconButton">
    <FormatLeftIcon />
  </RadioButton>
);
