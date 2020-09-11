import { ReactNodeLike } from "prop-types";
import { IComponentBase } from "../../../../interfaces/ComponentBase";

export interface TabProps extends IComponentBase {
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 * @default "tab"
	 */
	role?: string;
	/**
	 * Indicates the tab control is active and its associated panel is displayed.
	 */
	selected?: true;
	/**
	 *
	 */
	tabIndex?: number;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 * Refers to the tabpanel ID associated with the tab.
	 */
	controls?: string;
	/**
	 *
	 */
	haspopup?: "menu" | true;
	/**
	 *
	 */
	onContextMenu?: (event: React.SyntheticEvent) => void;
}
