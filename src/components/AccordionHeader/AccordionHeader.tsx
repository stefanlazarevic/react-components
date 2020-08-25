import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./AccordionHeader.scss";

import { Button } from "../Button";
import { Heading } from "../Heading";

import { useClassNames } from "../../hooks";

const AccordionHeader = forwardRef(function AccordionHeaderComponent(
	props: any,
	ref: MutableRefObject<HTMLHeadingElement>
) {
  const classNames = useClassNames("AccordionHeader", props.className);

  const onClick = useCallback((event: React.SyntheticEvent) => {
    if (typeof props.onClick === 'function') {
      props.onClick(event, props.id);
    }
  }, [props.onClick, props.id]);

	return (
		<Heading
			ref={ref}
			id={props.id}
			test-id={props.testid}
			className={classNames}
			style={props.style}
			level={props.level}
		>
			<Button
				expanded={props.expanded}
				controls={props.controls}
				disabled={props.disabled}
				lang={props.lang}
				dir={props.dir}
				title={props.title}
				onClick={onClick}
			>
				{props.children || props.content}
			</Button>
		</Heading>
	);
});

AccordionHeader.defaultProps = {
	level: 3
};

AccordionHeader.displayName = "AccordionHeader";

export default AccordionHeader;