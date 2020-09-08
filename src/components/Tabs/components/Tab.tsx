import React from "react";
import { useTab } from "../helpers/TabsContext";

export default function Tab(props: any) {
	const { ref } = useTab(props);

	return <li ref={ref}>{props.children}</li>;
}