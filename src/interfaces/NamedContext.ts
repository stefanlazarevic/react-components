export type NamedContext<T> = [React.Provider<T>, () => T, React.Context<T>];
