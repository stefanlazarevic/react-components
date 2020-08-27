import React from "react";
import { Avatar } from "./index";

export default {
	title: "Avatar",
	component: Avatar,
	parameters: {
		componentSubtitle: "Display user profile as a picture or initials.",
	},
};

export const Default = (args: any) => <Avatar {...args} />;