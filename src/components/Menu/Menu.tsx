import React, {
	forwardRef,
	MutableRefObject,
	useCallback,
	useMemo,
	createRef,
	useRef,
	useLayoutEffect,
} from "react";
import "./Menu.scss";

import { useClassNames, useCombinedRefs } from "../../hooks";
import { array } from "../../helpers";

const Menu = forwardRef(function MenuComponent(
	props: any,
	ref: MutableRefObject<HTMLUListElement>
) {
	const focusedIndex = useRef<number>(0);

	const className = useClassNames("Menu", props.className);

	const menu = useCombinedRefs(ref);

	const items = useMemo(() => {
		return Array.from({ length: React.Children.count(props.children) }, () => {
			return createRef<HTMLLIElement>();
		});
	}, [props.children]);

	const switchFocus = useCallback(
		(targetIndex: number) => {
			const item = items[targetIndex];

			if (item.current) {
				const focusedItem = items[focusedIndex.current];

				item.current.setAttribute("tabIndex", "0");
				item.current.focus();

				if (focusedItem.current) {
					focusedItem.current.setAttribute("tabIndex", "-1");
				}

				focusedIndex.current = targetIndex;
			}
		},
		[items]
	);

	const onClick = useCallback(function onMenuItemSelect(
		event: React.SyntheticEvent,
		details: any
	) {
		switchFocus(details.index);
	},
	[]);

	const focusNext = useCallback(
		function focusNextMenuItem(event: React.SyntheticEvent, details) {
			event.stopPropagation();

			let currentIndex = details.index + 1;

			while (currentIndex !== focusedIndex.current) {
				if (currentIndex > array.lastIndex(items)) {
					currentIndex = 0;
				}

				const item = items[currentIndex];

				if (item.current) {
					const isDisabled = item.current.getAttribute("aria-disabled");

					if (!isDisabled) {
						switchFocus(currentIndex);
						break;
					}
				}

				currentIndex++;
			}
		},
		[items]
	);

	const focusPrevious = useCallback(
		function focusPreviousMenuItem(event: React.SyntheticEvent, details) {
			event.stopPropagation();

			let currentIndex = details.index - 1;

			while (currentIndex !== focusedIndex.current) {
				if (currentIndex < 0) {
					currentIndex = array.lastIndex(items);
				}

				const item = items[currentIndex];

				if (item.current) {
					const isDisabled = item.current.getAttribute("aria-disabled");

					if (!isDisabled) {
						switchFocus(currentIndex);
						break;
					}
				}

				currentIndex--;
			}
		},
		[items]
	);

	const focusFirst = useCallback(
		function focusFirstMenuItem(event?: React.SyntheticEvent) {
			if (event) {
				event.stopPropagation();
			}

			let currentIndex = 0;

			while (currentIndex <= array.lastIndex(items)) {
				const item = items[currentIndex];

				if (item.current) {
					const isDisabled = item.current.getAttribute("aria-disabled");

					if (!isDisabled) {
						switchFocus(currentIndex);
						break;
					}
				}

				currentIndex++;
			}
		},
		[items]
	);

	const focusLast = useCallback(
		function focusFirstMenuItem(event?: React.SyntheticEvent) {
			if (event) {
				event.stopPropagation();
			}

			const item = array.last(items);

			if (item.current) {
				item.current.setAttribute("tabIndex", "0");
				item.current.focus();

				const focusedItem = items[focusedIndex.current];

				if (focusedItem.current) {
					focusedItem.current.setAttribute("tabIndex", "-1");
				}


				focusedIndex.current = array.lastIndex(items);
			}
		},
		[items]
	);

	const onArrowUp = useCallback(function onMenuItemArrowUpKey(event: React.KeyboardEvent, details: any) {
		if (props.orientation === 'vertical') {
			event.stopPropagation();
			focusPrevious(event, details);
		}
	}, [focusPrevious]);

	const onArrowDown = useCallback(function onMenuItemArrowUpKey(event: React.KeyboardEvent, details: any) {
		if (props.orientation === 'vertical') {
			event.stopPropagation();
			focusNext(event, details);
		}
	}, [focusNext]);

	const onArrowLeft = useCallback(function onMenuItemArrowUpKey(event: React.KeyboardEvent, details: any) {
		if (props.orientation === 'horizontal') {
			event.stopPropagation();
			focusPrevious(event, details);
		}
	}, [focusPrevious]);

	const onArrowRight = useCallback(function onMenuItemArrowUpKey(event: React.KeyboardEvent, details: any) {
		if (props.orientation === 'horizontal') {
			event.stopPropagation();
			focusNext(event, details);
		}
	}, [focusNext]);

	const renderChildren = useCallback(
		function renderMenuItems() {
			return React.Children.map(props.children, (child, index) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						// @ts-ignore
						ref: items[index],
						index,
						orientation: props.orientation,
						onClick,
						onArrowDown,
						onArrowUp,
						onHome: focusFirst,
						onEnd: focusLast,
						onArrowLeft,
						onArrowRight
					});
				}

				return child;
			});
		},
		[
			props.children, 
			props.orientation, 
			onClick, 
			onArrowDown, 
			onArrowUp, 
			onArrowLeft, 
			onArrowRight, 
			focusFirst, 
			focusLast
		]
	);

	useLayoutEffect(() => {
		focusFirst();
	}, [focusFirst]);

	return (
		<ul
			ref={menu}
			id={props.id}
			data-testid={props.testid}
			className={className}
			role={props.role}
			aria-orientation={props.orientation}
			onBlur={props.onBlur}
		>
			{renderChildren()}
		</ul>
	);
});

Menu.defaultProps = {
	role: "menu",
	orientation: "vertical"
};

Menu.displayName = "Menu";

export default Menu;