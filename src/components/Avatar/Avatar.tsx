import React, { forwardRef, MutableRefObject } from "react";

import "./Avatar.scss";

import { AvatarProps } from "./AvatarProps";

import { concatenate } from "../../utils";

const Avatar = forwardRef(function AvatarComponent(
	props: AvatarProps,
	ref: MutableRefObject<HTMLDivElement>
) {
	const className = concatenate("Avatar", props.className);

	return (
		<div
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			title={props.title || props.label}
			aria-label={props.label}
		>
			<span>{props.content || props.label!.charAt(0)}</span>
		</div>
	);
});

Avatar.defaultProps = {
	label: "",
};

Avatar.displayName = "Avatar";

export default Avatar;