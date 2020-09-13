import { ReactNodeLike } from "prop-types";
import { IMultiSelectable, ISelectable } from "../../interfaces";
import { Orientation } from "../../types";

export interface ListProps extends ISelectable, IMultiSelectable {
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 *
	 */
	orientation?: Orientation;
	/**
	 * 
	 */
	multiselectable?: boolean;
}
