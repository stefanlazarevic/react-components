import { ReactNodeLike } from "prop-types";
import { ISelectable, ISelectableDetails } from "../../interfaces";
import { Orientation } from "../../types";

export interface TabsProps extends ISelectable {
	/**
	 *
	 */
	orientation?: Orientation;
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 * Defines widget behavior on keyboard navigation.
	 */
	activation?: "manual" | "automatic";
	/**
	 *
	 */
	onDelete?: (event: React.SyntheticEvent, details: ISelectableDetails) => void;
}