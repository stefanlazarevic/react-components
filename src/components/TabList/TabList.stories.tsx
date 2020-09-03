import React from "react";

import { TabList } from ".";
import { Tab } from "../Tab";
import HorizontalTabList from "./stories/HorizontalTabs";

export default {
	title: "TabList",
	component: TabList,
};

export const Template = (args: any) => {
  return (
    <TabList>
      <Tab>Music</Tab>
      <Tab>Movies</Tab>
      <Tab>Apps</Tab>
    </TabList>
  )
}

export const Horizontal = (args: any) => <HorizontalTabList />