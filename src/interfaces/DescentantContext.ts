import { IDescendant } from "./Descendant";

export interface IDescendantContext {
	descendants: IDescendant[];
	register: (descendant: IDescendant) => void;
	unregister: (descendant: IDescendant) => void;
	focusFirstDescendant: (options?: FocusOptions) => void;
	focusLastDescendant: (options?: FocusOptions) => void;
	focusNextDescendant: (currentIndex: number, options?: FocusOptions) => void;
	focusPreviousDescendant: (currentIndex: number, options?: FocusOptions) => void;
	selectFirstDescendant: () => void;
	selectLastDescendant: () => void;
	selectNextDescendant: (currentIndex: number) => void;
	selectPreviousDescendant: (currentIndex: number) => void;
}