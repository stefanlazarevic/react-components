import { CSSProperties } from "react";

export interface SelectProps {
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
	value: string;
	/**
	 *
	 */
	placeholder?: string;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 *
	 */
	label?: string;
	/**
	 *
	 */
	name?: string;
	/**
	 *
	 */
	options?: { label: string; value: string; disabled?: boolean }[];
	/**
	 *
	 */
	onChange?: (event: React.SyntheticEvent, selectedValue: string) => void;
}