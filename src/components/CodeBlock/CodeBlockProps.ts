import { CSSProperties } from "react";

export interface CodeBlockProps {
	/**
	 *
	 */
	testid?: string;
	/**
	 *
	 * @see https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md
	 *
	 * @default "text"
	 */
	language?: string;
	/**
	 *
	 */
	content?: string;
	/**
	 *
	 */
	className?: string;
	/**
	 *
	 */
	id?: string;
	/**
	 *
	 */
	style?: CSSProperties;
	/**
	 *
	 */
	showLines?: boolean;
};
