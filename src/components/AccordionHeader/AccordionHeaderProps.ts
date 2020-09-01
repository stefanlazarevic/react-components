import { CSSProperties } from "react";
import { ReactNodeLike } from "prop-types";

export interface AccordionHeaderProps {
	/**
	 *
	 */
	id?: string;
	/***
	 *
	 */
	testid?: string;
	/**
	 *
	 */
	className?: string;
	/**
	 *
	 */
	style?: CSSProperties;
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
	onClick?: (event: React.SyntheticEvent, callbackData: object) => void;
}