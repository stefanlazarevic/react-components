import React from "react";
import { Swatch } from "./index";

export default {
	title: "Swatch",
	component: Swatch,
};

export const Default = (args: any) => <Swatch {...args} />;

export const Solid = Default.bind({});
Solid.args = { color: "#ff0000" };

export const Transparent = Default.bind({});
Transparent.args = { color: "rgba(255, 0, 0, 0.6)" };

export const Selected = Default.bind({});
Selected.args = {
  selected: true,
};