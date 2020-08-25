import { CSSProperties } from "react";
import { ReactNodeLike } from "prop-types";

export interface CollapseProps {
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
	children?: ReactNodeLike;
	/**
	 * @default true
	 */
	hidden?: boolean;
	/**
	 *
	 */
	"aria-hidden"?: boolean;
	/**
	 * @default region
	 */
	role?: string;
	/**
	 *
	 */
	content?: string;
	/**
	 * @default 150
	 */
	duration?: number;
}