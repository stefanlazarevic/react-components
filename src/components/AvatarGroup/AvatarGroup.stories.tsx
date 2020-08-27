import React from "react";

import AvatarGroup from "./AvatarGroup";
import Avatar from "../Avatar/Avatar";

export default {
	title: "AvatarGroup",
	component: AvatarGroup,
	parameters: {
		componentSubtitle: "Logical group for multiple Avatar components.",
	},
};

export const Default = (args: any) => {
  return (
    <AvatarGroup {...args}>
      <Avatar />
      <Avatar />
      <Avatar />
    </AvatarGroup>
  )
}

export const Labelled = (args: any) => {
  return (
    <AvatarGroup>
      <Avatar label="Stefan" />
      <Avatar label="Milica" />
      <Avatar label="Albert" />
      <Avatar label="Konstantin" />
    </AvatarGroup>
  )
}