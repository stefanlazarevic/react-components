import { createContext, useContext as useContextHook } from "react";
import { NamedContext } from "../interfaces/NamedContext";

/**
 * Creates React context with provided display name.
 */
export function createNamedContext<T>(displayName: string, defaultValue?: any) {
	const Context = createContext<T>(defaultValue);

	Context.displayName = displayName;

	function useContext() {
		const context = useContextHook(Context);

		if (!context) {
			throw new Error(`Context is absent`);
		}

		return context;
	}

	return [Context.Provider, useContext, Context] as NamedContext<T>;
} 