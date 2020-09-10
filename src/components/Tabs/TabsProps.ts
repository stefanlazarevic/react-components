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
	 *
	 */
	onSelect?: (event: React.SyntheticEvent, index: number) => void;
}