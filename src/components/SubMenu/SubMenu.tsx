import React, {
	forwardRef,
	MutableRefObject,
	useState,
	useMemo,
	useRef,
	useCallback,
	useLayoutEffect,
} from "react";

import "./SubMenu.scss";

import { MenuItem } from "../MenuItem";
import { Menu } from "../Menu";
import { random, keyboard } from "../../helpers";
import { useCombinedRefs } from "../../hooks";

const SubMenu = forwardRef(function SubMenuComponent(
	props: any,
	ref: MutableRefObject<HTMLLIElement>
) {
	const [expanded, setExpanded] = useState<boolean>(false);

	const id = useMemo(() => props.id || random.getString(5), [props.id]);

	const menuItem = useCombinedRefs(ref);

	const subMenu = useRef<HTMLUListElement>(null);

	function getContent() {
		if (typeof props.content === 'function') {
			return props.content();
		}

		return props.content;
	}

	const switchExpandedState = useCallback(function onSubMenuVisibilityChange(newState?: boolean) {
		if (React.Children.count(props.children)) {
			setExpanded((expanded: boolean) => typeof newState === "boolean" ? newState : !expanded);
		}
	}, []);

	const expand = useCallback(() => {
		switchExpandedState(true);
	}, []);

	const collapse = useCallback(() => {
		switchExpandedState(false);
	}, []);

	const collapseAndFocusCaller = useCallback(() => {
		collapse();

		if (menuItem.current) {
			menuItem.current.focus();
		}
	}, []);

	const onEnter = useCallback((event: React.KeyboardEvent) => {
		if (event.target === menuItem.current) {
			event.stopPropagation();
			
			if (!expanded) {
				expand();
	
				return;
			}

			collapseAndFocusCaller();

			return;
		}

		collapseAndFocusCaller();
	}, [expanded, expand, collapseAndFocusCaller]);

	const onEscape = useCallback((event: React.KeyboardEvent) => {
		if (expanded) {
			event.stopPropagation();

			collapseAndFocusCaller();
		}
	}, [expanded, collapseAndFocusCaller]);

	const onKeyDown = useCallback((event: React.KeyboardEvent) => {
		const {keyCode} = event;

		if (menuItem.current === event.target) {
			if (keyCode === keyboard.KeyCode.ARROW_DOWN && props.orientation === 'horizontal') {
				event.stopPropagation();

				expand();
			}

			if (keyCode === keyboard.KeyCode.ARROW_UP && props.orientation === 'horizontal') {
				if (expanded) {
					event.stopPropagation();
					
					collapseAndFocusCaller();
				}
			}

			if (keyCode === keyboard.KeyCode.ENTER || keyCode === keyboard.KeyCode.SPACE) {
				event.stopPropagation();

				if (expanded) {
					collapseAndFocusCaller();
				} else {
					expand();
				}
			}
		}

		if (keyCode === keyboard.KeyCode.ARROW_RIGHT && props.orientation === 'vertical') {
			event.stopPropagation();

			expand();
		}

		if (
			(keyCode === keyboard.KeyCode.ARROW_RIGHT || keyCode === keyboard.KeyCode.ARROW_LEFT) && 
			props.orientation === 'horizontal'
		) {
			if (expanded) {
				collapse();
			}
		}

		if (keyCode === keyboard.KeyCode.ARROW_LEFT && props.orientation === 'vertical') {
			if (expanded) {
				event.stopPropagation();

				collapseAndFocusCaller();
			}
		}
	}, [expanded]);

	const onClick = useCallback((event: React.MouseEvent) => {
		if (event.target === menuItem.current) {
			event.stopPropagation();
		}

		switchExpandedState();
	}, [switchExpandedState, props.onClick]);

	const onOutsideClick = useCallback((event) => {
		const hasElement = subMenu.current!.contains(event.target);

		if (!hasElement) {
			collapse();
		}
	}, [collapse]);

	useLayoutEffect(() => {
		if (expanded) {
			document.addEventListener('click', onOutsideClick, false);
		}

		return () => {
			document.removeEventListener('click', onOutsideClick, false);
		}
	}, [expanded, onOutsideClick]);

	return (
		<MenuItem
			{...props}
			ref={menuItem}
			haspopup="menu"
			onClick={onClick}
			onEnter={onEnter}
			onEscape={onEscape}
			onKeyDown={onKeyDown}
			controls={id}
			expanded={expanded}
		>
			{getContent()}
			{expanded && <Menu ref={subMenu} className="SubMenu" id={id}>{props.children}</Menu>}
		</MenuItem>
	);
});

SubMenu.defaultProps = {};

SubMenu.displayName = "SubMenu";

export default SubMenu;