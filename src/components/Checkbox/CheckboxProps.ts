import { IComponentBase } from "../../interfaces";

export default interface CheckboxProps extends IComponentBase {
	/**
	 *
	 */
	title?: string;
	/**
	 * @default false
	 */
	checked?: "mixed" | boolean;
	/**
	 * @default false
	 */
	defaultChecked?: boolean;
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
	role?: string;
	/**
	 * 
	 */
	invalid?: boolean;
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