import React from "react";
import { Slider } from "./index";

export default {
	title: "Slider",
	component: Slider,
};

export const Template = (args: any) => <Slider {...args} />;

export const Twenty = Template.bind({});
Twenty.args = {
	value: 2,
	max: 10,
};

export const Fifty = Template.bind({});
Fifty.args = {
	value: 5,
	max: 10,
};

export const Hundred = Template.bind({});
Hundred.args = {
	value: 10,
	max: 10,
};