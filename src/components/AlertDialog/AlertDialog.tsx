import React, { forwardRef, MutableRefObject, useCallback, useEffect, useRef } from "react";

import "./AlertDialog.scss";

import { AlertDialogProps } from "./AlertDialogProps";

import { Alert } from "../Alert";
import { IconButton } from "../IconButton";
import { CloseIcon } from "../Icon";

import {keyboard} from "../../helpers";
import { concatenate, isFunction, executeAfter, isNumber, isAbsent } from "../../utils";
import { TimeoutController } from "../../types";

const AlertDialog = forwardRef(function AlertDialogComponent(
  props: AlertDialogProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const className = concatenate("AlertDialog", props.className);

  const timeoutController = useRef<TimeoutController | null>(null);

  const onClose = useCallback(function AlertDialogCloseCallback() {
    if (!isAbsent(timeoutController.current)) {
      timeoutController.current.cancel();
    }

    props.onClose!();
  }, [props.onClose]);

  const onKeyDown = useCallback(function AlertKeyDownCallback(event: React.KeyboardEvent<HTMLDivElement>) {
    const {keyCode} = event;

    if (isFunction(props.onClose) && keyCode === keyboard.KeyCode.ESC) {
      if (!isAbsent(timeoutController.current)) {
        timeoutController.current.cancel();
      }
      
      props.onClose();
    }
  }, []);

  const onMouseEnter = useCallback(function AlertMouseEnterCallback(event: React.MouseEvent<HTMLDivElement>) {
    if (isNumber(props.closeAfter) && !isAbsent(timeoutController.current)) {
      timeoutController.current.pause();
    }

    if (isFunction(props.onMouseEnter)) {
      event.persist();
      props.onMouseEnter(event);
    }
  }, [props.closeAfter, props.onMouseEnter]);

  const onMouseLeave = useCallback(function AlertMouseEnterCallback(event: React.MouseEvent<HTMLDivElement>) {
    if (isNumber(props.closeAfter) && !isAbsent(timeoutController.current)) {
      timeoutController.current.resume();
    }

    if (isFunction(props.onMouseLeave)) {
      event.persist();
      props.onMouseLeave(event);
    }
  }, [props.closeAfter, props.onMouseLeave]);

  useEffect(() => {
    if (isNumber(props.closeAfter) && isFunction(props.onClose)) {
      timeoutController.current = executeAfter(
        props.closeAfter, 
        function AlertDialogClosingTimer() {
          props.onClose!();
        }
      );
    }

    return () => {
      if (!isAbsent(timeoutController.current)) {
        timeoutController.current.cancel();
        timeoutController.current = null;
      }
    }
  }, [props.closeAfter]);

  return (
    <Alert 
      ref={ref} 
      {...props} 
      className={className} 
      role={props.role} 
      onKeyDown={onKeyDown} 
      onMouseEnter={isNumber(props.closeAfter) && isFunction(props.onClose) ? onMouseEnter : props.onMouseEnter}
      onMouseLeave={isNumber(props.closeAfter) && isFunction(props.onClose) ? onMouseLeave : props.onMouseLeave}
    >
      {props.children || props.content || <div />}
      {isFunction(props.onClose) && (
        <IconButton onClick={onClose}>
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