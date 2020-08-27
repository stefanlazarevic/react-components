import { AlertProps } from "../Alert";

export interface AlertDialogProps extends AlertProps {
	/**
	 * @default alertdialog
	 */
	role?: string;
	/**
	 *
	 */
	onClose?: (event: React.SyntheticEvent) => void;
}
