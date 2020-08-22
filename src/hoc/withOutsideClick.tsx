import React, {
	forwardRef,
	MutableRefObject,
	useLayoutEffect,
	useCallback,
} from "react";

import { useCombinedRefs } from "../hooks";
import { KeyCode } from "../helpers";

export interface IOutsideClickListenerProps {
	onOutsideClick: (event: Event) => void;
}

export function withOutsideClick<IOutsideClickListenerProps>(
	WrappedComponent:
		| ((props: any & IOutsideClickListenerProps, context?: any) => any)
		| (new (props: any & IOutsideClickListenerProps, context?: any) => any)
) {
	const OutsideClickListener = forwardRef(
		(props: any & IOutsideClickListenerProps, ref: MutableRefObject<any>) => {
			const wrapperRef = useCombinedRefs(ref);

			const handleOutsideClick = useCallback(
				(event: MouseEvent) => {
					if (
						wrapperRef.current &&
						!wrapperRef.current.contains(event.target) &&
						typeof props.onOutsideClick === "function"
					) {
						event.stopPropagation();

						props.onOutsideClick!(event);
					}
				},
				[props.onOutsideClick]
			);

			const handleKeyDown = useCallback((event: KeyboardEvent) => {
				const {keyCode} = event;

				if (keyCode === KeyCode.ESC && typeof props.onOutsideClick === "function") {
					props.onOutsideClick(event)
				}
			}, [props.onOutsideClick]);

			const onBlur = useCallback((event: React.FocusEvent) => {
				if (typeof props.onOutsideClick === "function") {
					props.onOutsideClick(event);
				}
			}, [handleOutsideClick]);

			useLayoutEffect(() => {
				if (document) {
					document.addEventListener("mouseup", handleOutsideClick);
					document.addEventListener('keydown', handleKeyDown);
				}

				return () => {
					document.removeEventListener("mouseup", handleOutsideClick);
					document.removeEventListener('keydown', handleKeyDown);
				};
			}, [handleOutsideClick]);

			return <WrappedComponent ref={wrapperRef} {...props} onBlue={onBlur}/>;
		}
	);

	OutsideClickListener.displayName = "OutsideClickListener";

	return OutsideClickListener;
}
