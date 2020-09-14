import { IComponentBase } from "../../../../interfaces";
import { ReactNodeLike } from "prop-types";

export type ChildrenCallback = {
	index: number;
	isSelected: boolean;
}

export interface ListboxOptionProps extends IComponentBase {
	/**
	 *
	 */
	children?: ReactNodeLike | ((e: ChildrenCallback) => ReactNodeLike);
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