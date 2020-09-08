import React from "react";

import { TabsContext, useTabs } from "./helpers/TabsContext";

function Tabs(props: any) {
	const context = useTabs(props);

	return (
		<TabsContext.Provider value={context}>
			{props.children}
		</TabsContext.Provider>
	);
}

Tabs.defaultProps = {};

Tabs.displayName = "Tabs";

export default Tabs;