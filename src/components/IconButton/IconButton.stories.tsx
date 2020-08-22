import React from "react";
import { IconButton } from "./index";
import { CloseIcon } from "../Icon";

export default {
	title: "IconButton",
	component: IconButton,
};

export const Template = (args: any) => (
  <IconButton {...args}>
    <CloseIcon />
  </IconButton>
);

