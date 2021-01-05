import { CSSProperties } from "react";

export interface AlphaChannelSliderProps {
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
	 * @default "slider"
	 */
	role?: string;
	/**
	 * Defines the current value.
	 */
	value?: number;
	/**
	 * Defines the minimum allowed value.
	 *
	 * @default 0
	 */
	min?: number;
	/**
	 * Defines the maximum allowed value.
	 *
	 * @default 100
	 */
	max?: number;
	/**
	 * @default "horizontal"
	 */
	orientation?: "horizontal" | "vertical";
	/**
	 *
	 */
	readOnly?: boolean;
	/**
	 *
	 */
	red?: number;
	/**
	 *
	 */
	green?: number;
	/**
	 *
	 */
	blue?: number;
	/**
	 * @default 0
	 */
	tabIndex?: number;
	/**
	 *
	 */
	label?: string;
	/**
	 *
	 */
	onChange?: (details: {value: number, rgba: string }, event: Event) => void;
}