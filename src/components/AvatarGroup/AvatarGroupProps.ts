import { CSSProperties } from "react";
import { ReactNodeLike } from "prop-types";

export default interface AvatarGroupProps {
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
	children?: ReactNodeLike;
}