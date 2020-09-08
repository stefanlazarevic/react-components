import React from "react";
import Tabs from "./Tabs";
import TabList from "./components/TabList";
import Tab from "./components/Tab";

export default {
	title: "Tabs",
	component: Tabs,
};

export const Test = () => {
	return (
    <>
      <Tabs orientation="vertical">
        <TabList>
          <Tab>General</Tab>
          <Tab>Settings</Tab>
        </TabList>
      </Tabs>
      <Tabs orientation="horizontal">
        <TabList>
          <Tab>General</Tab>
          <Tab>Settings</Tab>
        </TabList>
      </Tabs>
    </>
  );
};