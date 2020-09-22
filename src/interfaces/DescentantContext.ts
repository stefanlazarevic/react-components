import { IDescendant } from "./Descendant";
import { IDescendantOptions } from "./DescendantOptions";

export interface IDescendantContext {
	descendants: IDescendant[];
	register: (descendant: IDescendant) => void;
	unregister: (descendant: IDescendant) => void;
	clear: () => void;
	getFirstDescendant: (options?: IDescendantOptions) => IDescendant | undefined;
	getLastDescendant: (options?: IDescendantOptions) => IDescendant | undefined;
	getNextDescendant: (currentIndex: number, options?: IDescendantOptions) => IDescendant | undefined;
	getPreviousDescendant: (currentIndex: number, options?: IDescendantOptions) => IDescendant | undefined;
	getDescendantAtIndex: (index: number) => IDescendant | undefined;
	focusFirstDescendant: (options?: IDescendantOptions) => void;
	focusLastDescendant: (options?: IDescendantOptions) => void;
	focusNextDescendant: (currentIndex: number, options?: IDescendantOptions) => void;
	focusPreviousDescendant: (currentIndex: number, options?: IDescendantOptions) => void;
	focusDescendantAtIndex: (index: number, options?: IDescendantOptions) => void;
	selectFirstDescendant: () => void;
	selectLastDescendant: () => void;
	selectNextDescendant: (currentIndex: number) => void;
	selectPreviousDescendant: (currentIndex: number) => void;
	selectDescendantAtIndex: (index: number) => void;
}