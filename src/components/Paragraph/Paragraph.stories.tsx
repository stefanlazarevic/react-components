import React from "react";
import { Paragraph } from "./index";

export default {
  title: "Paragraph",
  component: Paragraph,
};

export const Template = (args: any) => <Paragraph {...args} />;

const content = `
Filter button have 2 different states, a default state and a clicked state.\n 
When in it’s default state, the filter section is hidden.\n
When in it’s clicked state, the filter section is expanded.\n
\n
If they system have only 3-5 filters, always show the filter so users can see what criteria is applied. Only use expand/collapse filter button when there are a lot of filters, and users will benefit by gaining more space reviewing the data.
`;

export const Example = Template.bind({});
Example.args = {
  content
}