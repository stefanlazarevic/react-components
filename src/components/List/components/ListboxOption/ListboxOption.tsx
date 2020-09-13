import React, { forwardRef, MutableRefObject, useMemo } from "react";

import "./ListboxOption.scss";

import { ListboxOptionProps } from "./ListboxOptionProps";
import { concatenate, not, contains } from "../../../../utils";
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
		selectToHome,
		selectToEnd,
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
				selectToHome(event, index);
			}
		}

		if (keyCode === keyboard.KeyCode.END) {
			if (ctrlKey && shiftKey) {
				selectToEnd(event, index);
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

	function onClick(event: React.SyntheticEvent) {
		selectOption(event, index);
	}

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
			{props.children}
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