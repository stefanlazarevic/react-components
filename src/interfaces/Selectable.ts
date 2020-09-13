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
	onSelect?: (event: React.SyntheticEvent, details: ISelectableDetails) => void;
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
	onSelect?: (event: React.SyntheticEvent, details: ISelectableDetails) => void;
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