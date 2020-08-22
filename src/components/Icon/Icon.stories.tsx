import React from "react";
import { IconGallery, IconItem } from "@storybook/addon-docs/blocks";
import { CloseIcon } from "./index";

export default {
  title: "Icons",
};

export const Icons = (args: any) => {
  return (
    <IconGallery>
      <IconItem name="CloseIcon"><CloseIcon /></IconItem>
    </IconGallery>
  );
}