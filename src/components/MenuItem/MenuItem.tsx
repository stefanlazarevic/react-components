import React, { forwardRef, MutableRefObject, useMemo } from "react";

import "./MenuItem.scss";

import { keyboard, dom } from "../../helpers";
import { useClassNames, useCombinedRefs } from "../../hooks";

const MenuItem = forwardRef(function MenuItemComponent(
	props: any,
	ref: MutableRefObject<HTMLLIElement>
) {
	const item = useCombinedRefs<HTMLLIElement>(ref);

	const className = useClassNames("MenuItem", props.className);

	const callbackDetails = useMemo(
		() => ({
			id: props.id,
			index: props.index,
		}),
		[props.id, props.index]
	);

	function isDisabled() {
		return props.disabled || props["aria-disabled"];
	}

	function hasPopup() {
		return props.haspopup || props["aria-haspopup"];
  }
  
	function controls() {
		return props.controls || props["aria-controls"];
	}

	function expanded() {
		return props.expanded || props["aria-expanded"];
	}

	function onClick(event: React.MouseEvent<HTMLLIElement>) {
		if (typeof props.onClick === "function") {	
			props.onClick(event, callbackDetails);
		}
	}

	function focusNext() {
		console.info('Focus next');
		let current = item.current.nextElementSibling as HTMLLIElement;

		if (!current) {
			current = item.current.parentNode!.firstElementChild as HTMLLIElement;
		}
		
		while (current !== item.current) {
			if (!dom.isDisabledElement(current)) {
				item.current.setAttribute('tabIndex', '-1');
				current.setAttribute('tabIndex', '0');
				current.focus();

				break;
			}

			current = current.nextElementSibling as HTMLLIElement;

			if (!current) {
				current = item.current.parentNode!.firstElementChild as HTMLLIElement;
			}
		}
	}

	function focusPrevious() {
		console.info('Focus previous');
		let current = item.current.previousElementSibling as HTMLLIElement;

		if (!current) {
			current = item.current.parentNode!.lastElementChild as HTMLLIElement;
		}

		while (current !== item.current) {
			if (!dom.isDisabledElement(current)) {
				item.current.setAttribute('tabIndex', '-1');
				current.setAttribute('tabIndex', '0');
				current.focus();

				break;
			}

			current = current.previousElementSibling as HTMLLIElement;

			if (!current) {
				current = item.current.parentNode!.lastElementChild as HTMLLIElement;
			}
		}
	}

	function onKeyDown(event: React.KeyboardEvent<HTMLLIElement>) {
		const { keyCode } = event;

		if (
			keyCode === keyboard.KeyCode.ARROW_DOWN
		) {
			if (props.orientation === 'vertical') {
				focusNext();
			}
		}

		if (
			keyCode === keyboard.KeyCode.ARROW_UP
		) {
			if (props.orientation === 'vertical') {
			  focusPrevious();
			}
		}

		if (
			keyCode === keyboard.KeyCode.ARROW_LEFT
		) {
			if (props.orientation === 'horizontal') {
				focusPrevious();
			}
		}

		if (
			keyCode === keyboard.KeyCode.ARROW_RIGHT
		) {
			if (props.orientation === 'horizontal') {
				focusNext();
			}
		}

		if (keyCode === keyboard.KeyCode.ESC && typeof props.onEscape === 'function') {
			props.onEscape(event, callbackDetails);
		}

		if (typeof props.onKeyDown === "function") {
			props.onKeyDown(event, callbackDetails);
		}
	}

	return (
		<li
			ref={item}
			id={props.id}
			data-testid={props.testid}
			className={className}
			role={props.role}
			onKeyDown={isDisabled() ? undefined : onKeyDown}
			onClick={isDisabled() ? undefined : onClick}
			aria-disabled={isDisabled()}
      aria-haspopup={hasPopup()}
			aria-controls={controls()}
			aria-expanded={expanded()}
			tabIndex={props.tabIndex}
		>
			{props.children || props.content}
		</li>
	);
});

MenuItem.defaultProps = {
	role: "menuitem",
	haspopup: false,
	tabIndex: -1
};

MenuItem.displayName = "MenuItem";

export default MenuItem;