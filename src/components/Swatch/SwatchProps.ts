import { CSSProperties } from "react";

export interface SwatchProps {
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
	color?: string;
	/**
	 *
	 */
	title?: string;
	/**
	 *
	 */
	tabIndex?: number;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 *
	 */
	"aria-disabled"?: boolean;
	/**
	 *
	 */
	selected?: boolean;
	/**
	 *
	 */
	"aria-selected"?: boolean;
	/**
	 *
	 */
	onClick?: (event: React.SyntheticEvent, color?: string) => void;
}