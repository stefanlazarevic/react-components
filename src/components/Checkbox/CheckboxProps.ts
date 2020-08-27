import { CSSProperties } from "react";

export default interface CheckboxProps {
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
	title?: string;
	/**
	 *
	 */
	style?: CSSProperties;
	/**
	 * @default false
	 */
	checked?: "mixed" | boolean;
	/**
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * @default checkbox
	 */
	type?: string;
	/**
	 *
	 */
	name?: string;
	/**
	 *
	 */
	autoFocus?: boolean;
	/**
	 *
	 */
	readOnly?: boolean;
	/**
	 *
	 */
	tabIndex?: number;
	/**
	 *
	 */
	hidden?: boolean;
	/**
	 *
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 *
	 */
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	/**
	 *
	 */
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};