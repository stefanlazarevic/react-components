import React from "react";

import { TabsProps } from "./TabsProps";
import { TabsContextProvider, createTabsContext } from "./context/TabsContext";

/**
 * The parent component of the tab interface.
 * 
 * @param props 
 */
function Tabs(props: TabsProps) {
	const context = createTabsContext(props);

	return (
		<TabsContextProvider value={context}>{props.children}</TabsContextProvider>
	);
}

Tabs.defaultProps = {
	orientation: 'horizontal'
}

Tabs.displayName = "Tabs";

export default Tabs;
