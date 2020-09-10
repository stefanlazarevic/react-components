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
	 *
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
}
