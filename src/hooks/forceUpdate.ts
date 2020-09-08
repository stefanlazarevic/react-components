import { useState, useCallback } from "react";

/**
 * React hook which provides callback to force re-render of component.
 * This is similar to `forceUpdate` in a class components.
 */
export function useForceUpdate() {
	const [, dispatch] = useState<{}>(Object.create(null));

	return useCallback(function forceUpdate() {
		dispatch(Object.create(null));
	}, []);
} 