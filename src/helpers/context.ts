import { createContext, useContext as useContextHook } from "react";

/**
 * Creates React context with provided display name.
 */
export function createNamedContext(displayName: string, defaultValue: any) {
	const Context = createContext(defaultValue);

	Context.displayName = displayName;

	function useContext() {
		const context = useContextHook(Context);

		if (!context) {
			throw new Error(`Context is absent`);
		}

		return context;
	}

	return [Context, useContext] as [React.Context<any>, () => any];
} 