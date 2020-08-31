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
import { random } from "../../helpers";
import { useCombinedRefs } from "../../hooks";
import { ChevronRightIcon } from "../Icon";

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
		setExpanded((expanded: boolean) => typeof newState === "boolean" ? newState : !expanded);
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

	const onArrowLeft = useCallback((event: React.KeyboardEvent, details: any) => {
		if (expanded) {
			event.stopPropagation();
			collapseAndFocusCaller();
		} else {
			props.onArrowLeft(event, details);
		}
	}, [expanded, collapseAndFocusCaller, props.onArrowLeft]);

	const onArrowRight = useCallback((event: React.KeyboardEvent, details: any) => {
		if (expanded) {
			event.stopPropagation();
			collapseAndFocusCaller();
		} else {
			props.onArrowRight(event, details);
		}
	}, [expanded, collapseAndFocusCaller, props.onArrowRight]);

	const onClick = useCallback((event: React.MouseEvent, details: any) => {
		if (event.target === menuItem.current) {
			event.stopPropagation();
		}

		switchExpandedState();

		props.onClick(event, details);
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
			ref={menuItem}
			{...props}
			haspopup="menu"
			onClick={onClick}
			onEnter={onEnter}
			onEscape={onEscape}
			onArrowLeft={onArrowLeft}
			onArrowRight={onArrowRight}
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