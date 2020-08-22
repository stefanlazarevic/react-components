import { CSSProperties } from "react";
import { ReactNodeLike } from "prop-types";

export interface ListboxOptionProps {
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
	title?: string;
	/**
	 *
	 */
	lang?: string;
	/**
	 * @default auto
	 */
	dir?: "auto" | "ltr" | "rtl";
	/**
	 *
	 */
	tabIndex?: number;
	/**
	 *
	 */
	value: string;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 *
	 */
	"aria-disabled"?: boolean;
	/**
	 * @default option
	 */
	role?: string;
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
	children?: ReactNodeLike;
	/**
	 *
	 */
	onSelect?: (event: React.SyntheticEvent, selectedValue: string) => void;
}