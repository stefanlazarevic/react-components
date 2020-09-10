import React, { forwardRef, MutableRefObject, useState, useCallback } from "react";

import "./PasswordField.scss";

import { IconButton } from "../IconButton";
import { EyeIcon, EyeAltIcon } from "../Icon";
import { concatenate } from "../../utils";

const PasswordField = forwardRef(function PasswordFieldComponent(
	props: any,
	ref: MutableRefObject<HTMLDivElement>
) {
	const [type, setType] = useState("password");

	const switchType = useCallback(() => {
		setType(type === "password" ? "text" : "password");
  }, [type]);
  
  const className = concatenate("PasswordField", props.className);

	return (
		<div ref={ref} data-testid={props.testid} className={className} style={props.style} data-invalid={props.invalid}>
			<input id={props.id} type={type} name={props.name} placeholder={props.placeholder} value={props.value} aria-invalid={props.invalid} />
			<IconButton onClick={switchType} pressed={type === 'text'} label="Reveal password">
				{type === 'text' ? <EyeAltIcon size={20} /> : <EyeIcon size={20} />}
			</IconButton>
		</div>
	);
});

PasswordField.defaultProps = {
  placeholder: 'Password'
};

PasswordField.displayName = "PasswordField";

export default PasswordField;