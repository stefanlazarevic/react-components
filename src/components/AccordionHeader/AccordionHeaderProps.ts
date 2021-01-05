import { ReactNodeLike } from "prop-types";
import { IComponentBase } from "../../interfaces";

export interface AccordionHeaderProps extends IComponentBase {
	/**
	 *
	 */
	role?: string;
	/**
	 *
	 */
	level?: number;
	/**
	 *
	 */
	expanded?: boolean;
	/**
	 *
	 */
	controls?: string;
	/**
	 *
	 */
	lang?: string;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 *
	 */
	title?: string;
	/**
	 *
	 */
	content?: (() => JSX.Element) | string;
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 *
	 */
	dir?: "auto" | "ltr" | "rtl";
	/**
	 * 
	 */
	index?: number;
	/**
	 *
	 */
	onClick?: (event: React.SyntheticEvent, callbackData: object) => void;
}