import React from "react";
import { Heading } from "./index";

export default {
  title: "Heading",
  component: Heading,
};

export const Template = (args: any) => <Heading {...args} />;

export const One = Template.bind({});
One.args = {
  content: "Heading One",
  level: 1
}

export const Two = Template.bind({});
Two.args = {
  content: "Heading Two",
  level: 2
}

export const Three = Template.bind({});
Three.args = {
  content: "Heading Three",
  level: 3
}

export const Four = Template.bind({});
Four.args = {
  content: "Heading Four",
  level: 4
}

export const Five = Template.bind({});
Five.args = {
  content: "Heading Five",
  level: 5
}

export const Six = Template.bind({});
Six.args = {
  content: "Heading Six",
  level: 6
}

export const Example = Template.bind({});
Example.args = {
  content: "Heading content"
}