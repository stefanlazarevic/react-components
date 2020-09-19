import { AlertProps } from "../Alert";

export interface AlertDialogProps extends AlertProps {
	/**
	 * @default alertdialog
	 */
	role?: string;
	/**
	 * Automatically call `onClose` callback after specified time expressed in milliseconds.
	 */
	closeAfter?: number;
	/**
	 *
	 */
	onClose?: () => void;
}
