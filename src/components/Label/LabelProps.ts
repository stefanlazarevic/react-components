import { CSSProperties } from "react";
import { ReactNodeLike } from "prop-types";

export interface LabelProps {
	/**
	 *
	 */
	id?: string;
	/**
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
	htmlFor?: string;
	/**
	 *
	 */
	lang?: string;
	/**
	 *
	 */
	dir?: "auto" | "ltr" | "rtl";
	/**
	 *
	 */
	title?: string;
	/**
	 *
	 */
	content?: string;
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 *
	 */
	required?: boolean;
};