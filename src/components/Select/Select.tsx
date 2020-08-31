import React, {
	forwardRef,
	MutableRefObject,
	useState,
	useMemo,
	useCallback,
	useRef,
} from "react";

import "./Select.scss";

import { useClassNames } from "../../hooks";
import { withOutsideClick } from "../../hoc";

import { SelectProps } from "./interfaces";

import { Listbox } from "../Listbox";
import { ListboxOption } from "../ListboxOption";
import { keyboard} from "../../helpers";

const Select = forwardRef(function SelectComponent(
	props: SelectProps,
	ref: MutableRefObject<HTMLDivElement>
) {
	const className = useClassNames("Select", props.className);

	const [expanded, setExpanded] = useState(false);

	const close = useCallback(() => {
		setExpanded(false);

		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const open = useCallback(() => setExpanded(true), []);

	const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
		const {keyCode} = event;

		if (keyCode === keyboard.KeyCode.SPACE || keyCode == keyboard.KeyCode.ENTER || keyCode === keyboard.KeyCode.ARROW_DOWN) {
			open();
		}
	}, [open]);

	const inputRef = useRef<HTMLInputElement>(null);

	const Options = useMemo(() => {
		const SelectOptions = forwardRef((props: SelectProps, ref: any) => {
			return (
				<Listbox ref={ref} selectedValue={props.value} onSelect={props.onChange} autoFocus={true} multiselectable={props.multiselectable}>
					{props.options!.map((option: any) => {
						return (
							<ListboxOption value={option.value} disabled={option.disabled}>{option.label}</ListboxOption>
						);
					})}
				</Listbox>
			);
		});

		SelectOptions.defaultProps = {
			options: [],
		};

		return withOutsideClick(SelectOptions);
	}, [props.options, props.value, props.onChange, props.multiselectable]);

	return (
		<div
			ref={ref}
			data-testid={props.testid}
			className={className}
			style={props.style}
		>
			<input
				ref={inputRef}
				id={props.id}
				type="text"
				onClick={open}
				value={props.label || props.value}
				placeholder={props.placeholder}
				name={props.name}
				readOnly={true}
				disabled={props.disabled || props.options!.length === 0}
				onKeyDown={onKeyDown}
			/>
			{expanded && (
				<Options
					options={props.options}
					value={props.value}
					onOutsideClick={close}
					onChange={props.onChange}
					multiselectable={props.multiselectable}
				/>
			)}
		</div>
	);
});

Select.defaultProps = {
	placeholder: 'Select...',
	options: []
}

Select.displayName = "Select";

export default Select;