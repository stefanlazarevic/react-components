/**
 * 
 */
export interface ISelectable {
	/**
	 *
	 */
	selectedIndex?: number;
	/**
	 *
	 */
	onSelect?: (details: ISelectableDetails, event: React.SyntheticEvent) => void;
}

/**
 *
 */
export interface IMultiSelectable {
	/**
	 *
	 */
	selectedIndexes?: number[];
	/**
	 *
	 */
	onSelect?: (details: ISelectableDetails, event: React.SyntheticEvent) => void;
}

/**
 *
 */
export interface ISelectableDetails {
	/**
	 *
	 */
	selectedIndex?: number;
	/**
	 * 
	 */
	selectedIndexes?: number[];
}