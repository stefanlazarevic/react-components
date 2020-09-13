import { IDescendant } from "./Descendant";

export interface IDescendantContext {
	descendants: IDescendant[];
	register: (descendant: IDescendant) => void;
	unregister: (descendant: IDescendant) => void;
	focusFirstDescendant: () => void;
	focusLastDescendant: () => void;
	focusNextDescendant: (currentIndex: number) => void;
	focusPreviousDescendant: (currentIndex: number) => void;
	selectFirstDescendant: () => void;
	selectLastDescendant: () => void;
	selectNextDescendant: (currentIndex: number) => void;
	selectPreviousDescendant: (currentIndex: number) => void;
}