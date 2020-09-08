import { CSSProperties } from "react";

export interface RadioProps {
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
	disabled?: boolean;
	/**
	 * @default radio
	 */
	type?: string;
	/**
	 *
	 */
	tabIndex?: number;
	/**
	 *
	 */
	name?: string;
	/**
	 *
	 */
	invalid?: boolean;
	/**
	 *
	 */
	hidden?: boolean;
	/**
	 *
	 */
	value: string;
	/**
	 *
	 */
	checked?: boolean;
	/**
	 *
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 *
	 */
	onMouseEnter?: (event: React.MouseEvent<HTMLInputElement>) => void;
	/**
	 *
	 */
	onMouseLeave?: (event: React.MouseEvent<HTMLInputElement>) => void;
}
