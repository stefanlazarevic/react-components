import React, { useState } from "react";
import { insertAt, getRandomNumber, getRandomString } from "../../../utils";
import { Heading, TabList, Tab } from "../../../components";
import Tabs from "../../../components/Tabs/Tabs";

export function Demo() {
    const [tabs, setTabs] = useState([
        'world',
        'tree',
        'test',
        'more'
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    function insertTab() {
        setTabs(currentTabs => insertAt(getRandomNumber(0, tabs.length), getRandomString(6), [...currentTabs]));
    }

    return (
        <Tabs selectedIndex={selectedIndex} onSelect={(e, i) => setSelectedIndex(i)}>
            <TabList style={{marginBottom: 10}}>
                {tabs.map(tab => <Heading><Tab>{tab}</Tab></Heading>)}
            </TabList>
            <button onClick={insertTab}>Add random</button>
        </Tabs>
    )
}