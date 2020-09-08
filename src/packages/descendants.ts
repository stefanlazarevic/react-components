import { useState, useCallback, useMemo, useLayoutEffect } from "react";

import {
	not,
	isAbsent,
	find,
	findIndex,
	concat,
	insertAt,
	filter,
} from "../helpers";

import { useForceUpdate } from "../hooks/forceUpdate";

/**
 * React hook which is used on component interface level.
 */
export function useDescendants() {
	const [descendants, setDescendants] = useState<HTMLElement[]>([]);

	/**
	 *
	 */
	const register = useCallback(function registerDescendant(
		element: HTMLElement
	) {
    setDescendants(function updateDescendantsState(currentDescendants) {
      if (isAbsent(find(descendant => descendant === element, currentDescendants))) {
        const index = findIndex(descendant => {
          if (!element) return false;

          return Boolean(descendant.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING);
        }, currentDescendants);

        if (index === -1) {
          return concat(currentDescendants, element);
        }

        return insertAt(index, element, currentDescendants);
      }

      return currentDescendants;
    });
  },
  []);
  
  /**
   * 
   */
  const unregister = useCallback(function unregisterDescendant(element: HTMLElement) {
    setDescendants(function updateDescendantsState(currentDescendants) {
      return filter(descendant => descendant !== element, currentDescendants);
    })
  }, []);

  /**
   * 
   */
  const context = useMemo(function cachedDescendantsContext() {
    return {descendants, register, unregister};
  }, [descendants, register, unregister]);

  return context;
}

/**
 * 
 */
export function useDescendant(element: HTMLElement | null, context: any): number {
  const { register, unregister, descendants } = context

  const forceUpdate = useForceUpdate();
  
  useLayoutEffect(() => {
    if (!element) {
      forceUpdate();
    }

    register(element);

    return function componentWillUnmount() {
      unregister(element);
    }
  }, [element]);

  return findIndex(descendant => descendant === element, descendants);
}