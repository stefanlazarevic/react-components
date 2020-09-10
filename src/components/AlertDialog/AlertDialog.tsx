import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./AlertDialog.scss";

import { AlertDialogProps } from "./AlertDialogProps";

import { Alert } from "../Alert";
import { IconButton } from "../IconButton";
import { CloseIcon } from "../Icon";

import {keyboard} from "../../helpers";
import { concatenate, isFunction } from "../../utils";

const AlertDialog = forwardRef(function AlertDialogComponent(
  props: AlertDialogProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const className = concatenate("AlertDialog", props.className);

  const onKeyDown = useCallback(function AlertKeyDownCallback(event: React.KeyboardEvent<HTMLDivElement>) {
    const {keyCode} = event;

    if (isFunction(props.onClose) && keyCode === keyboard.KeyCode.ESC) {
      props.onClose(event as React.SyntheticEvent);
    }
  }, []);

  return (
    <Alert ref={ref} {...props} className={className} role={props.role} onKeyDown={onKeyDown}>
      {props.children || props.content || <div />}
      {isFunction(props.onClose) && (
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