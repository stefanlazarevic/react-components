import { IDescendant } from "./Descendant";

export interface IDescendantContext {
	descendants: IDescendant[];
	register: (element: HTMLElement | null) => void;
	unregister: (element: HTMLElement | null) => void;
}