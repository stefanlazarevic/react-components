import React, { forwardRef, MutableRefObject } from "react";

import "./Avatar.scss";

import { useClassNames } from "../../hooks";

const Avatar = forwardRef(function AvatarComponent(
	props: any,
	ref: MutableRefObject<HTMLDivElement>
) {
	const className = useClassNames("Avatar", props.className);

	return (
		<div
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			title={props.title}
			aria-label={props.name}
		>
      <span>{props.name.charAt(0)}</span>
		</div>
	);
});

Avatar.defaultProps = {
  name: '',
};

Avatar.displayName = "Avatar";

export default Avatar;