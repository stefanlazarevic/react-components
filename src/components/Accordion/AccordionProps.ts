import { ReactNodeLike } from "prop-types";

export interface AccordionProps {
	/**
	 *
	 */
	expanded?: boolean;

	/**
	 *
	 */
	controls?: string;
	/**
	 *
	 */
	onChange?: (event: React.MouseEvent) => void;
	/**
	 *
	 */
	children?: ReactNodeLike;
}
