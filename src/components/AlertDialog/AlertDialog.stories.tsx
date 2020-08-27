import React from "react";
import { AlertDialog } from "./index";
import { Alert } from "../Alert";

export default {
	title: "AlertDialog",
	component: AlertDialog,
	parameters: {
		componentSubtitle: "Dismissable Alert component.",
		subcomponents: { Alert },
	},
};

export const Template = (args: any) => <AlertDialog {...args} />;

export const RTL = Template.bind({});
RTL.args = {
  dir: "rtl",
};

export const Informative = Template.bind({});
Informative.args = {
  kind: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  kind: "warning",
};

export const Error = Template.bind({});
Error.args = {
  kind: "error",
};

export const Success = Template.bind({});
Success.args = {
  kind: "success",
};