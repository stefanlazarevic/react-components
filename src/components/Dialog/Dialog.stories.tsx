import React from "react";
import { Dialog } from "./index";

export default {
  title: "Dialog",
  component: Dialog,
};

export const Template = (args: any) => <Dialog {...args} />;
Template.argTypes = { onEscape: { action: "onEscape (close)" }, onKeyDown: {action: "onKeyDown"} };
