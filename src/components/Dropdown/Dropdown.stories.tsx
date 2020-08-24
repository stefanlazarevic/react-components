import React from "react";
import { Dropdown } from "./index";
import { DropdownOption } from "../DropdownOption";

export default {
	title: "Dropdown",
	component: Dropdown,
};

export const Template = (args: any) => <Dropdown {...args} />;

export const Example = () => (
  <Dropdown autoFocus={true}>
    <DropdownOption>Test</DropdownOption>
    <DropdownOption>Test</DropdownOption>
    <DropdownOption>Test</DropdownOption>
    <DropdownOption>Test</DropdownOption>
  </Dropdown>
)