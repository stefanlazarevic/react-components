import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./AlertDialog.scss";

import { useClassNames } from "../../hooks";

import { AlertDialogProps } from "./AlertDialogProps";

import { Alert } from "../Alert";
import { IconButton } from "../IconButton";
import { CloseIcon } from "../Icon";

import { KeyCode } from "../../helpers";

const AlertDialog = forwardRef(function AlertDialogComponent(
  props: AlertDialogProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const className = useClassNames("Alert AlertDialog", props.className);

  const onKeyDown = useCallback(function AlertKeyDownCallback(event: React.KeyboardEvent<HTMLDivElement>) {
    const {keyCode} = event;

    if (typeof props.onClose === 'function' && keyCode === KeyCode.ESC) {
      props.onClose(event as React.SyntheticEvent);
    }
  }, []);

  return (
    <Alert ref={ref} {...props} className={className} role={props.role} onKeyDown={onKeyDown}>
      {props.children || props.content || <div />}
      {typeof props.onClose === 'function' && (
        <IconButton onClick={props.onClose}>
          <CloseIcon size={18} />
        </IconButton>
      )}
    </Alert>
  );
});

AlertDialog.defaultProps = {
  content: "AlertDialog Content",
  role: "alertdialog"
};

AlertDialog.displayName = "AlertDialog";

export default AlertDialog;