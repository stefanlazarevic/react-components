import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./AlertDialog.scss";

import { useClassNames } from "../../hooks";

import { AlertDialogProps } from "./AlertDialogProps";

import { Alert } from "../Alert";
import { Button } from "../Button";
import { CloseIcon } from "../Icon";

import { KeyCode } from "../../helpers";

const AlertDialog = forwardRef(function AlertDialogComponent(
  props: AlertDialogProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const className = useClassNames("AlertDialog", props.className);

  const onKeyDown = useCallback(function AlertKeyDownCallback(event: React.KeyboardEvent<HTMLDivElement>) {
    const {keyCode} = event;

    if (typeof props.onClose === 'function' && keyCode === KeyCode.ESC) {
      props.onClose(event as React.SyntheticEvent);
    }
  }, []);

  return (
    <Alert ref={ref} {...props} className={className} role="alertdialog" onKeyDown={onKeyDown}>
      {props.children || props.content || <div />}
      {typeof props.onClose === 'function' && (
        <Button onClick={props.onClose}>
          <CloseIcon size={16} />
        </Button>
      )}
    </Alert>
  );
});

AlertDialog.defaultProps = {
  content: "AlertDialog Content"
};

AlertDialog.displayName = "AlertDialog";

export default AlertDialog;