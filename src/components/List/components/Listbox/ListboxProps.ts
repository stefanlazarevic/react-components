import { ReactNodeLike } from "prop-types";
import { IComponentBase } from "../../../../interfaces/ComponentBase";

export interface ListboxProps extends IComponentBase {
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 * @default "listbox"
	 */
	role?: string;
	/**
	 *
	 */
	labelledby?: string;
}