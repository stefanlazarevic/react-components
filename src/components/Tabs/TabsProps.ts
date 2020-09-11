import { ReactNodeLike } from "prop-types";

export interface TabsProps {
	/**
	 *
	 */
	orientation?: "horizontal" | "vertical";
	/**
	 *
	 */
	selectedIndex?: number;
	/**
	 *
	 */
	children?: ReactNodeLike;
	/**
	 * Defines widget behavior on keyboard navigation.
	 */
	activation?: "manual" | "automatic";
	/**
	 *
	 */
	onSelect?: (event: React.SyntheticEvent, index: number) => void;
	/**
	 *
	 */
	onDelete?: (event: React.SyntheticEvent, index: number) => void;
}