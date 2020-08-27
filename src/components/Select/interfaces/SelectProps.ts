import { CSSProperties } from "react";
import { SelectDataModel } from ".";

export default interface SelectProps {
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
	 * Selected value.
	 */
	value?: string;
	/**
	 *
	 */
	placeholder?: string;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 * Content which will replace selected value on screen.
	 */
	label?: string;
	/**
	 *
	 */
	name?: string;
	/**
	 *
	 */
	multiselectable?: boolean;
	/**
	 *
	 */
	options?: SelectDataModel[];
	/**
	 *
	 */
	onChange?: (event: React.SyntheticEvent, selectedValue: string) => void;
}