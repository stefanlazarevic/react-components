import { useEffect, useLayoutEffect } from "react";
import { useForceUpdate } from "../forceUpdate";
import { IDescendantContext } from "../../interfaces/DescentantContext";

import { findIndex } from '../../utils/array';
import { IDescendant } from "../../interfaces";
import { not } from "../../utils";

/**
 * A React hook used to control DOM reference of the component.
 */
export function useDescendant(
	descendant: IDescendant,
	context: IDescendantContext
): number {
	const { register, unregister, descendants } = context;

	const forceUpdate = useForceUpdate();

	useEffect(function descendantLayoutEffect() {
		if (not(descendant.element)) {
			forceUpdate();
		}

		register(descendant);

		return function componentWillUnmount() {
			unregister(descendant);
		};
	}, [descendant]);

	return findIndex((currentDescendant) => currentDescendant.element === descendant.element, descendants);
}