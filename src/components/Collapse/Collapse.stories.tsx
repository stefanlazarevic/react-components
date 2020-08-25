import React from "react";
import { Collapse } from "./index";

export default {
	title: "Collapse",
	component: Collapse,
};

export const Default = (args: any) => <Collapse {...args} />;
Default.args = { content: "Hello world" };

export const Expanded = Default.bind({});
Expanded.args = { hidden: false, content: 'Hello world' };

