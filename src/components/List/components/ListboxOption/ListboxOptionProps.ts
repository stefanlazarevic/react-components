import { IComponentBase } from "../../../../interfaces";
import { ReactNodeLike } from "prop-types";

export interface ListboxOptionProps extends IComponentBase {
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 * @default "option"
	 */
	role?: string;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 *
	 */
	selected?: boolean;
}