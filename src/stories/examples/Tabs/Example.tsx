import React, { useState } from "react";
import { insertAt, getRandomNumber, getRandomString, copyArray, size } from "../../../utils";
import { Heading, TabList, Tab, Tabs } from "../../../components";

export function Example() {
    const [tabs, setTabs] = useState([
        'world',
        'tree',
        'test',
        'more'
    ]);

    const [selectedIndex] = useState(0);

    function insertTab() {
        setTabs(currentTabs => insertAt(getRandomNumber(0, size(tabs)), getRandomString(6), copyArray(currentTabs)));
    }

    return (
        <Tabs selectedIndex={selectedIndex} activation="automatic">
            <TabList style={{marginBottom: 10}}>
                {tabs.map(tab => <Heading><Tab>{tab}</Tab></Heading>)}
            </TabList>
            <button onClick={insertTab}>Add random</button>
        </Tabs>
    );
}