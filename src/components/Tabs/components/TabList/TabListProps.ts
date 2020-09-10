import { ReactNodeLike } from "prop-types";

import { IComponentBase } from "../../../../interfaces/ComponentBase";

export interface TabListProps extends IComponentBase {
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 *
	 */
	role?: string;
	/**
	 * @default "horizontal"
	 */
	orientation?: "horizontal" | "vertical";
}