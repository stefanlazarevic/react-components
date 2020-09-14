import React, { forwardRef, MutableRefObject, useCallback, useMemo } from "react";

import "./ListboxOption.scss";

import { ListboxOptionProps } from "./ListboxOptionProps";
import { concatenate, not, contains, isFunction } from "../../../../utils";
import { useCombinedRefs, useDescendant } from "../../../../hooks";
import { useListContext } from "../../context/ListContext";
import { keyboard } from "../../../../helpers";

const ListboxOption = forwardRef(function ListboxOptionComponent(
	props: ListboxOptionProps,
	ref: MutableRefObject<HTMLLIElement>
) {
	const className = concatenate("ListboxOption", props.className);

	const option = useCombinedRefs(ref);

	const context = useListContext();

	const {
		multiselectable,
		selectedIndex,
		selectedIndexes,
		focusPreviousDescendant,
		focusNextDescendant,
		selectNextDescendant,
		selectPreviousDescendant,
		selectOption,
		selectOptionsUpToFirst,
		selectOptionsDownToLast,
		setFromMostRecentlySelectedIndex
	} = context;

	const descendant = useMemo(
		() => ({ element: option.current, disabled: props.disabled }),
		[option.current, props.disabled]
	);

	const index = useDescendant(descendant, context);

	const isSelected = useMemo(() => {
		return multiselectable ? contains(index, selectedIndexes) : index === selectedIndex;
	}, [multiselectable, index, selectedIndexes, selectedIndex]);

	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode, ctrlKey, shiftKey, repeat } = event;

		if (keyCode === keyboard.KeyCode.ARROW_DOWN) {
			if (not(shiftKey)) {
				event.preventDefault();
				focusNextDescendant(index);
				return;
			}

			if (repeat) {
				return;
			}

			selectNextDescendant(index);
		}

		if (keyCode === keyboard.KeyCode.ARROW_UP) {
			if (not(shiftKey)) {
				event.preventDefault();
				focusPreviousDescendant(index);
				return;
			}

			if (repeat) {
				return;
			}

			selectPreviousDescendant(index);
		}

		if (keyCode === keyboard.KeyCode.HOME) {
			if (ctrlKey && shiftKey) {
				selectOptionsUpToFirst(event, index);
			}
		}

		if (keyCode === keyboard.KeyCode.END) {
			if (ctrlKey && shiftKey) {
				selectOptionsDownToLast(event, index);
			}
		}

		if (keyCode === keyboard.KeyCode.SPACE) {
			if (shiftKey) {
				setFromMostRecentlySelectedIndex(event, index);
			} else {
				selectOption(event, index);
			}
		}
	}

	function onClick(event: React.MouseEvent) {
		const { shiftKey } = event;

		if (shiftKey) {
			setFromMostRecentlySelectedIndex(event, index);
		} else {
			selectOption(event, index);
		}
	}

	const renderChildren = useCallback(() => {
		if (isFunction(props.children)) {
			return props.children({ index, isSelected });
		}

		return props.children;
	}, [props.children, index, isSelected]);

	return (
		<li
			ref={option}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			role={props.role}
			aria-disabled={props.disabled || undefined}
			onKeyDown={onKeyDown}
			onClick={onClick}
			tabIndex={isSelected ? 0 : -1}
			aria-selected={isSelected}
		>
			{renderChildren()}
		</li>
	);
});

ListboxOption.defaultProps = {
	role: "option"
}

ListboxOption.displayName = "ListboxOption";

export default ListboxOption;

/**
 *
 * selectRange
 * unselectRange
 *
 */