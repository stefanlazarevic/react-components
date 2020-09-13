import React from "react";

import { ListProps } from "./ListProps";
import { createListContext, ListContextProvider } from "./context/ListContext";

function List(props: ListProps) {
	const context = createListContext(props);

	return <ListContextProvider value={context}>{props.children}</ListContextProvider>;
}

List.defaultProps = {
	orientation: "vertical",
	selectedIndexes: []
};

List.displayName = "List";

export default List;