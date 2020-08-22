import React, { forwardRef, MutableRefObject } from "react";

import "./DialogHeader.scss";

import { useClassNames } from "../../hooks";

import { DialogHeaderProps } from "./DialogHeaderProps";

import { IconButton } from "../IconButton";
import { CloseIcon } from "../Icon";

const DialogHeader = forwardRef(function DialogHeaderComponent(
  props: DialogHeaderProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const className = useClassNames("DialogHeader", props.className);

  return (
    <div
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      lang={props.lang}
      dir={props.dir}
      role={props.role}
    >
      {props.children || props.content}
      <IconButton autoFocus={true} onClick={props.onClose}>
        <CloseIcon size={20} />
      </IconButton>
    </div>
  );
});

DialogHeader.defaultProps = {
  role: "header",
  content: 'Dialog Content'
}

DialogHeader.displayName = "DialogHeader";

export default DialogHeader;