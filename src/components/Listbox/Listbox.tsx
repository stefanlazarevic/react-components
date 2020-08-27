import React, {
	forwardRef,
	MutableRefObject,
	useCallback,
	useRef,
	useMemo,
	useLayoutEffect,
} from "react";

import "./Listbox.scss";

import { useClassNames, useCombinedRefs } from "../../hooks";
import { generateRandomString, KeyCode, array_lastIndex } from "../../helpers";
import { Checkbox } from "../Checkbox";

const Listbox = forwardRef(function ListboxComponent(
	props: any,
	ref: MutableRefObject<HTMLUListElement>
) {
	const className = useClassNames("Listbox", props.className);

	const listbox = useCombinedRefs<HTMLUListElement>(ref);

	const options = useRef<HTMLLIElement[]>([]);

	const id = useMemo(() => props.id || generateRandomString(6), [props.id]);

	const focusedIndex = useRef<number>(-1);

	const searchTerm = useRef<string>('');

	const debounceTimer = useRef<NodeJS.Timeout>();

	useLayoutEffect(function ListboxRenderedEffect() {
		if (listbox.current) {
			options.current = Array.from(listbox.current.querySelectorAll('[role="option"]'));

			let focusIndexCandidate = -1;

			for (let index = 0; index < options.current.length; index++) {
				const option = options.current[index];

				const isDisabled = option.getAttribute('aria-disabled') === 'true';
				const isSelected = option.getAttribute('aria-selected') === 'true';

				if (!isDisabled && focusIndexCandidate === -1) {
					focusIndexCandidate = index;
				}

				if (isSelected) {
					focusIndexCandidate = index;
					break;
				}
			}

			focusedIndex.current = focusIndexCandidate;

			const selectedOption = options.current[focusedIndex.current];

			if (selectedOption) {
				selectedOption.setAttribute('tabIndex', '0');

				if (props.autoFocus) {
					selectedOption.focus();
				}
			}
		}

		return () => {
			if (debounceTimer.current) {
				clearTimeout(debounceTimer.current);
			}
		}
	}, [props.children]);

	const onSelect = useCallback((event: React.SyntheticEvent, selectedValue: string) => {
		const focusedOption = options.current[focusedIndex.current];

		if (focusedOption) {
			focusedOption.setAttribute('tabIndex', '-1');
		}

		focusedIndex.current = options.current.findIndex(option => option === event.target);

		const selectedOption = options.current[focusedIndex.current];

		if (selectedOption) {
			selectedOption.setAttribute('tabIndex', '0');
			selectedOption.focus();
		}

		if (typeof props.onSelect === 'function') {
			props.onSelect(event, selectedValue);
		}
	}, [props.onSelect]);

	const search = useCallback(() => {
		const regexp = new RegExp(`^${searchTerm.current.trim()}`, 'i');

		for (let index = 0; index < options.current.length; index++) {
			const option = options.current[index];

			const isDisabled = option.getAttribute('aria-disabled') === 'true';
			const value = option.innerText;

			if (!isDisabled && regexp.test(value)) {
				const focusedOption = options.current[focusedIndex.current];

				if (focusedOption) {
					focusedOption.setAttribute('tabIndex', '-1');
				}

				const matchingOption = options.current[index];

				if (matchingOption) {
					matchingOption.setAttribute('tabIndex', '0');
					matchingOption.focus();
					focusedIndex.current = index;
				}

				break;
			}
		}

		searchTerm.current = '';
	}, []);

	const onKeyDown = useCallback((event: React.KeyboardEvent) => {
		const {keyCode, key} = event;

		let currentIndex = focusedIndex.current;

		const lastOptionIndex = array_lastIndex(options.current);

		if (currentIndex < 0 || currentIndex > lastOptionIndex) {
			console.warn('All options are disabled.');
			return;
		}

		if (keyCode === KeyCode.HOME) {
			event.preventDefault();

			currentIndex = 0;

			while (currentIndex < options.current.length) {	
				const option = options.current[currentIndex];

				const isDisabled = option.getAttribute('aria-disabled') === 'true';

				if (option.hasAttribute('tabIndex') && !isDisabled) {
					const focusedOption = options.current[focusedIndex.current];

					focusedOption.setAttribute('tabIndex', '-1');
					option.setAttribute('tabIndex', '0');

					focusedIndex.current = currentIndex;

					option.focus();

					break;		
				}

				currentIndex++;
			}
		}

		if (keyCode === KeyCode.END) {
			event.preventDefault();

			currentIndex = lastOptionIndex;

			while (currentIndex > 0) {
				const option = options.current[currentIndex];

				const isDisabled = option.getAttribute('aria-disabled') === 'true';

				if (option.hasAttribute('tabIndex') && !isDisabled) {	
					const focusedOption = options.current[focusedIndex.current];

					focusedOption.setAttribute('tabIndex', '-1');
					option.setAttribute('tabIndex', '0');

					focusedIndex.current = currentIndex;

					option.focus();

					break;		
				}

				currentIndex--;
			}
		}

		if (keyCode === KeyCode.ARROW_UP) {
			event.preventDefault();

			currentIndex -= 1;
			
			while (currentIndex !== focusedIndex.current) {
				if (currentIndex < 0) {
					currentIndex = lastOptionIndex;
				}

				const option = options.current[currentIndex];

				const isDisabled = option.getAttribute('aria-disabled') === 'true';

				if (option.hasAttribute('tabIndex') && !isDisabled) {
					const focusedOption = options.current[focusedIndex.current];

					focusedOption.setAttribute('tabIndex', '-1');
					option.setAttribute('tabIndex', '0');

					focusedIndex.current = currentIndex;

					option.focus();

					break;		
				}

				currentIndex--;
			}
		}

		if (keyCode === KeyCode.ARROW_DOWN) {
			event.preventDefault();

			currentIndex += 1;

			while (currentIndex !== focusedIndex.current) {
				if (currentIndex > lastOptionIndex) {
					currentIndex = 0;
				}

				const option = options.current[currentIndex];

				const isDisabled = option.getAttribute('aria-disabled') === 'true';

				if (option.hasAttribute('tabIndex') && !isDisabled) {
					const focusedOption = options.current[focusedIndex.current];

					focusedOption.setAttribute('tabIndex', '-1');
					option.setAttribute('tabIndex', '0');

					focusedIndex.current = currentIndex;

					option.focus();

					break;		
				}

				currentIndex++;
			}
		}

		if (key.length > 0) {
			if (debounceTimer.current) {
				clearTimeout(debounceTimer.current);
			}
	
			searchTerm.current += key;
	
			debounceTimer.current = setTimeout(() => {
				search();
			}, 256);
		}
	}, [search]);

	const renderChildren = useCallback(() => {
		return React.Children.map(props.children, (child, index) => {
			if (props.multiselectable) {
				const children = (
					<div>
						<Checkbox readOnly={true} checked={props.selectedValue === child.props.value} tabIndex={-1} hidden={true} />
						{child.children || child.props.value}
					</div>
				)

				return React.cloneElement(child, {
					id: `${id}-option-${index}`,
					tabIndex: -1,
					selected: props.selectedValue === child.props.value,
					onSelect
				}, children);
			}


			return React.cloneElement(child, {
        id: `${id}-option-${index}`,
				tabIndex: -1,
				selected: props.selectedValue === child.props.value,
				onSelect
			});
		});
	}, [props.children, id, props.selectedValue, onSelect, props.multiselectable]);

	return (
		<ul
			ref={listbox}
			id={id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			role={props.role}
			aria-multiselectable={
				typeof props.multiselectable === "boolean"
					? props.multiselectable
					: props["aria-multiselectable"]
      }
      aria-expanded={
        typeof props.expanded === 'boolean' ? props.expanded : props['aria-expanded']
			}
			onKeyDown={onKeyDown}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
		>
			{renderChildren()}
		</ul>
	);
});

Listbox.defaultProps = {
	selectedValue: "",
	role: "listbox",
	multiselectable: false
};

Listbox.displayName = "Listbox";

export default Listbox;