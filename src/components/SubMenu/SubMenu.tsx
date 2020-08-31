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
		if (!expanded && props.orientation === 'horizontal') {
			// Do nothing, just bubble event.
			props.onArrowLeft(event, details);

			return;
		}

		if (expanded && props.orientation === 'vertical') {
			event.stopPropagation();

			collapseAndFocusCaller();

			return;
		}
	}, [expanded, props.orientation, collapseAndFocusCaller, props.onArrowLeft]);

	const onArrowRight = useCallback((event: React.KeyboardEvent, details: any) => {
		if (!expanded && props.orientation === 'horizontal') {
			// Do nothing, just bubble event.
			props.onArrowRight(event, details);

			return;
		}

		if (!expanded && props.orientation === 'vertical') {
			event.stopPropagation();

			expand();

			return;
		}
	}, [expanded, expand, props.orientation, props.onArrowRight]);

	const onArrowDown = useCallback(function SubMenuArrowDownCallback(event: React.KeyboardEvent, details: any) {
		if (!expanded && props.orientation === 'horizontal') {
			event.stopPropagation();

			expand();
		}

		if (props.orientation === 'vertical') {
			props.onArrowDown(event, details);
		}
	}, [expanded, props.orientation, expand, props.onArrowDown]);

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
			onArrowDown={onArrowDown}
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