import { CSSProperties } from "react";
import { ReactNodeLike } from "prop-types";

export interface DialogHeaderProps {
  /**
   *
   */
  id?: string;
  /**
   *
   */
  testid?: string;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  lang?: string;
  /**
   *
   */
  content?: string;
  /**
   *
   */
  style?: CSSProperties;
  /**
   * @default header
   */
  role?: string;
  /**
   *
   */
  children?: ReactNodeLike;
  /**
   *
   */
  dir?: "auto" | "ltr" | "rtl";
  /**
   *
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}