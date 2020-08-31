import React, { forwardRef, MutableRefObject, useMemo } from "react";

import "./MenuItem.scss";

import { keyboard } from "../../helpers";
import { useClassNames } from "../../hooks";

const MenuItem = forwardRef(function MenuItemComponent(
	props: any,
	ref: MutableRefObject<HTMLLIElement>
) {
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

	function onKeyDown(event: React.KeyboardEvent<HTMLLIElement>) {
		const { keyCode } = event;

		if (
			keyCode === keyboard.KeyCode.ARROW_DOWN &&
			typeof props.onArrowDown === "function"
		) {
			props.onArrowDown(event, callbackDetails);
		}

		if (
			keyCode === keyboard.KeyCode.ARROW_UP &&
			typeof props.onArrowUp === "function"
		) {
			props.onArrowUp(event, callbackDetails);
		}

		if (
			keyCode === keyboard.KeyCode.ARROW_LEFT &&
			typeof props.onArrowLeft === "function"
		) {
			props.onArrowLeft(event, callbackDetails);
		}

		if (
			keyCode === keyboard.KeyCode.ARROW_RIGHT &&
			typeof props.onArrowRight === "function"
		) {
			props.onArrowRight(event, callbackDetails);
		}

		if (
			keyCode === keyboard.KeyCode.HOME &&
			typeof props.onHome === "function"
		) {
			props.onHome(event, callbackDetails);
		}

		if (keyCode === keyboard.KeyCode.END && typeof props.onEnd === "function") {
			props.onEnd(event, callbackDetails);
		}

		if (keyCode === keyboard.KeyCode.ESC && typeof props.onEscape === 'function') {
			props.onEscape(event, callbackDetails);
		}

		if (
				(keyCode === keyboard.KeyCode.SPACE) && 
				typeof props.onSpace === "function"
			) {
			props.onSpace(event, callbackDetails);
		}

		if (
				(keyCode === keyboard.KeyCode.ENTER) && 
				typeof props.onEnter === "function"
			) {
			props.onEnter(event, callbackDetails);
		}

		if (typeof props.onKeyDown === "function") {
			props.onKeyDown(event, callbackDetails);
		}
	}

	return (
		<li
			ref={ref}
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
			tabIndex={props.focused ? 0 : -1}
		>
			{props.children || props.content}
		</li>
	);
});

MenuItem.defaultProps = {
	role: "menuitem",
	haspopup: false
};

MenuItem.displayName = "MenuItem";

export default MenuItem;