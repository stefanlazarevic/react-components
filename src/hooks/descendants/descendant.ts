import { useLayoutEffect } from "react";
import { useForceUpdate } from "../forceUpdate";
import { IDescendantContext } from "../../interfaces/DescentantContext";

import { findIndex } from '../../utils/array';

/**
 *
 */
export function useDescendant(
	element: HTMLElement | null,
	context: IDescendantContext
): number {
	const { register, unregister, descendants } = context;

	const forceUpdate = useForceUpdate();

	useLayoutEffect(function descendantLayoutEffect() {
		if (!element) {
			forceUpdate();
		}

		register(element);

		return function componentWillUnmount() {
			unregister(element);
		};
	}, [element]);

	return findIndex((descendant) => descendant.element === element, descendants);
}