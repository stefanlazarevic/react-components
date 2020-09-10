import React, { forwardRef, MutableRefObject, useCallback, useLayoutEffect } from "react";
import "./Menu.scss";

import { useClassNames, useCombinedRefs } from "../../hooks";
import { keyboard, dom } from "../../helpers";

const Menu = forwardRef(function MenuComponent(
	props: any,
	ref: MutableRefObject<HTMLUListElement>
) {
	const className = concatenate("Menu", props.className);

	const menu = useCombinedRefs(ref);

	const renderChildren = useCallback(
		function renderMenuItems() {
			return React.Children.map(props.children, (child, index: number) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, {
						index,
						orientation: props.orientation,
					} as any);
				}

				return child;
			});
		},
		[
			props.children, 
			props.orientation
		]
	);

	function focusFirst() {
		let current = menu.current.firstElementChild as HTMLLIElement;

		while (current) {
			if (!dom.isDisabledElement(current)) {
				current.setAttribute('tabIndex', '0');
				current.focus();

				break;
			}

			current = current.nextElementSibling as HTMLLIElement;
		}
	}

	function focusLast() {
		let current = menu.current.lastElementChild as HTMLLIElement;

		while (current) {
			if (!dom.isDisabledElement(current)) {
				current.setAttribute('tabIndex', '0');
				current.focus();

				break;
			}

			current = current.previousElementSibling as HTMLLIElement;
		}
	}

	const onKeyDown = useCallback((event: React.KeyboardEvent) => {
		const {keyCode} = event;

		if (keyCode === keyboard.KeyCode.HOME) {
			event.stopPropagation();

			focusFirst();
		}

		if (keyCode === keyboard.KeyCode.END) {
			event.stopPropagation();

			focusLast();
		}

		if (
			props.orientation === 'horizontal' && 
			(keyCode === keyboard.KeyCode.ARROW_RIGHT || keyCode === keyboard.KeyCode.ARROW_LEFT) 
		) {
			event.stopPropagation();
		}

		if (
			props.orientation === 'vertical' && 
			(keyCode === keyboard.KeyCode.ARROW_UP || keyCode === keyboard.KeyCode.ARROW_DOWN) 
		) {
			event.stopPropagation();
		}
	}, []);

	useLayoutEffect(() => {
		focusFirst();
	}, []);

	return (
		<ul
			ref={menu}
			id={props.id}
			data-testid={props.testid}
			className={className}
			role={props.role}
			aria-orientation={props.orientation}
			onBlur={props.onBlur}
			onKeyDown={onKeyDown}
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