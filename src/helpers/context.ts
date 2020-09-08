import { createContext, useContext as useContextHook } from "react";

/**
 * Creates React context with provided display name.
 */
export function createNamedContext<T>(displayName: string, defaultValue: T) {
	const Context = createContext<T>(defaultValue);

	Context.displayName = displayName;
	
	function useContext() {
		const context = useContextHook(Context);

		if (!context) {
			throw new Error(`Context is absent`);
		}

		return context;
	}

	return [Context.Provider, useContext, Context];
}