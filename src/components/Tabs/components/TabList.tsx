import React from "react";

import { useTabList } from "../helpers/TabsContext";

export default function TabList(props: any) {
	const { ID, orientation, role } = useTabList(props);

	return (
		<ul id={ID} aria-orientation={orientation} role={role}>
			{props.children}
		</ul>
	);
}