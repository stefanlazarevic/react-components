import React from "react";
import { Alert, AlertProps } from "./index";

export default {
	title: "Alert",
	component: Alert,
	parameters: {
		componentSubtitle:
			"Display an important and time-sensitive message to the user.",
	},
};

export const Template = (args: AlertProps) => <Alert {...args} />;
Template.parameters = {
	docs: {
		source: {
			code: "<Alert />",
		},
	},
};

export const RTL = Template.bind({});
RTL.args = {
	dir: "rtl",
	content: "अलर्ट सामग्री",
};
RTL.parameters = {
	docs: {
		source: {
			code: "<Alert content='अलर्ट सामग्री' dir='rtl' />",
		},
	},
};

export const Informative = Template.bind({});
Informative.args = {
	kind: "info",
};
Informative.parameters = {
	docs: {
		source: {
			code: "<Alert kind='info' />",
		},
	},
};

export const Warning = Template.bind({});
Warning.args = {
	kind: "warning",
};
Warning.parameters = {
	docs: {
		source: {
			code: "<Alert kind='warning' />",
		},
	},
};

export const Error = Template.bind({});
Error.args = {
	kind: "error",
};
Error.parameters = {
	docs: {
		source: {
			code: "<Alert kind='error' />",
		},
	},
};

export const Success = Template.bind({});
Success.args = {
	kind: "success",
};
Success.parameters = {
	docs: {
		source: {
			code: "<Alert kind='success' />",
		},
	},
};