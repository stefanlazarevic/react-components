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
	Dropdown,
	DropdownOption,
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
			<Dropdown ref={ref} autoFocus={true} {...props}>
				<DropdownOption content="Excel" onClick={() => undefined} />
				<DropdownOption content="PDF" onClick={() => undefined} />
				<DropdownOption content="XML" onClick={() => undefined} />
				<DropdownOption content="Markdown" onClick={() => undefined} />
			</Dropdown>
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