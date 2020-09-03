import React, { memo, useState, useCallback } from "react";

import { TabList } from "../index";

import { Tab as TabComponent } from "../../Tab";

export default function HorizontalTabList() {
  const [selectedTabId, setSelectedTabId] = useState("");
  
  const Tab = memo(TabComponent);

  const onClick = useCallback((event: React.SyntheticEvent, properties) => {
    event.stopPropagation();

    setSelectedTabId(properties.id);
  }, []);

  return (
    <TabList>
      <Tab key="posts" id="posts" content="Posts" onClick={onClick} selected={"posts" === selectedTabId} />
      <Tab key="followers" id="followers" content="Followers" onClick={onClick} selected={"followers" === selectedTabId} />
      <Tab key="following" id="following" content="Following" onClick={onClick} selected={"following" === selectedTabId} />
    </TabList>
  )
}