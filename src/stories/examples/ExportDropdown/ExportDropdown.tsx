import React, {
	useState,
	useCallback,
	useMemo,
	forwardRef,
	useRef,
} from "react";

import "./ExportDropdown.scss";

import {
	IconButton,
	ExportIcon,
	Menu,
	MenuItem,
} from "../../../components";

import { withOutsideClick } from "../../../hoc";

export default function ExportDropdown() {
	const [expanded, setExpanded] = useState(false);
	
	const trigger = useRef<HTMLButtonElement>(null);

	const open = useCallback(() => setExpanded(true), []);

	const close = useCallback(() => {
		setExpanded(false);

		if (trigger.current) {
			trigger.current.focus();
		}
	}, []);
	
	const DropdownComponent = useMemo(() => {
		const DropdownMenu = forwardRef((props: any, ref: any) => (
			<Menu ref={ref} autoFocus={true} {...props}>
				<MenuItem onClick={() => alert("Excel")}>Excel</MenuItem>
				<MenuItem onClick={() => undefined}>PDF</MenuItem>
				<MenuItem onClick={() => undefined}>XML</MenuItem>
				<MenuItem onClick={() => undefined}>Markdown</MenuItem>
			</Menu>
		));

		return withOutsideClick(DropdownMenu);
	}, []);

	return (
		<div className="ExportDropdown">
			<IconButton ref={trigger} title="Export" onClick={open} haspopup={true} expanded={expanded}>
				<ExportIcon />
			</IconButton>
			{expanded && <DropdownComponent onOutsideClick={close} /> }
		</div>
	);
}