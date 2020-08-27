import React from "react";

import AlphaChannelSlider from "./AlphaChannelSlider";

export default {
	title: "AlphaChannelSlider",
	component: AlphaChannelSlider,
};

export const Default = (args: any) => <AlphaChannelSlider />;
Default.parameters = {
	docs: {
		source: {
			code: "<AlphaChannelSlider />",
		},
	},
};