import React from "react";
import { Alert, AlertProps } from "./index";

export default {
  title: "Alert",
  component: Alert,
};

export const Template = (args: AlertProps) => <Alert {...args} />;

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

export const Example = (args: any) => {
  return (
    <Alert {...args} kind="success">
      <strong style={{color: "var(--app-success-color)"}}>Success Message:&nbsp;</strong>
      <span>success message goes here.</span>
    </Alert>
  );
}