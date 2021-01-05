import { useLayoutEffect } from "react";
import { useForceUpdate } from "../forceUpdate";
import { IDescendantContext } from "../../interfaces/DescentantContext";

import { findIndex } from '../../utils';
import { IDescendant } from "../../interfaces";

/**
 * A React hook used to control DOM reference of the component.
 */
export function useDescendant(
	descendant: IDescendant,
	context: IDescendantContext
): number {
	const { register, unregister, descendants } = context;

	const forceUpdate = useForceUpdate();

	useLayoutEffect(function descendantLayoutEffect() {
		if (!descendant.element) {
			forceUpdate();
		}

		register(descendant);

		return function componentWillUnmount() {
			unregister(descendant);
		};
	}, [descendant]);

	return descendants.findIndex((currentDescendant) => currentDescendant.element === descendant.element);
}