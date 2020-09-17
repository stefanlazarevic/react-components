import React from "react";

import { MenuProps } from "./MenuProps";

import { MenuContextProvider, createMenuContext } from "./context/MenuContext";

/**
 * A `menu` is a widget that offers a list of choices to the user, 
 * such as a set of actions or functions. Menu widgets behave like native operating system menus, 
 * such as the menus that pull down from the menubars commonly found at the top of many desktop application windows.
 * 
 * A menu that is visually persistent is a `menubar`. 
 * A menubar is typically horizontal and is often used to create a menu bar similar 
 * to those found near the top of the window in many desktop applications, 
 * offering the user quick access to a consistent set of commands.
 * 
 * @param props 
 */
function Menu(props: MenuProps) {
	const context = createMenuContext(props);

	return <MenuContextProvider value={context}>{props.children}</MenuContextProvider>
};

Menu.defaultProps = {
	orientation: "vertical"
};

Menu.displayName = "Menu";

export default Menu;