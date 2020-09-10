import { useCallback, useState, useMemo } from "react";
import { IDescendant } from "../../interfaces/Descendant";
import { IDescendantContext } from "../../interfaces/DescentantContext";

import {
	find,
	not,
	findIndex,
	isHTMLElement,
	concat,
	insertAt,
	filter,
	isAbsent,
} from "../../utils";

/**
 * React hook which is used on component interface level.
 */
export function useDescendants(): IDescendantContext {
	const [descendants, setDescendants] = useState<IDescendant[]>([]);

	/**
	 *
	 */
	const register = useCallback(function registerDescendant(
		element: HTMLElement | null
	) {
		if (!element) {
			return;
		}

		setDescendants(function updateDescendantsState(currentDescendants) {
			if (
				isAbsent(
					find(
						(descendant) => descendant.element === element,
						currentDescendants
					)
				)
			) {
				const index = findIndex((descendant) => {
					if (not(isHTMLElement(descendant)) || isAbsent(element)) return false;

					return Boolean(
						descendant.element.compareDocumentPosition(element) &
							Node.DOCUMENT_POSITION_PRECEDING
					);
				}, currentDescendants);

				if (index === -1) {
					return concat(currentDescendants, { element });
				}

				return insertAt(index, { element }, currentDescendants);
			}

			return currentDescendants;
		});
	},
	[]);

	/**
	 *
	 */
	const unregister = useCallback(function unregisterDescendant(
		element: HTMLElement
	) {
		setDescendants(function updateDescendantsState(currentDescendants) {
			return filter(
				(descendant) => descendant.element !== element,
				currentDescendants
			);
		});
	},
	[]);

	/**
	 *
	 */
	const context = useMemo(
		function cachedDescendantsContext(): IDescendantContext {
			return { descendants, register, unregister };
		},
		[descendants, register, unregister]
	);

	return context;
}