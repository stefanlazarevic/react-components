import { CSSProperties } from "react";
import { ReactNodeLike } from "prop-types";

export interface ButtonProps {
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
  style?: CSSProperties;
  /**
   * @default button
   */
  type?: "button" | "submit" | "reset";
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   *
   */
  title?: string;
  /**
   *
   */
  lang?: string;
  /**
   * @default "auto"
   */
  dir?: "auto" | "ltr" | "rtl";
  /**
   * @default 0
   */
  tabIndex?: number;
  /**
   *
   */
  index?: number;
  /**
   *
   */
  content?: string;
  /**
   *
   */
  autoFocus?: boolean;
  /**
   *
   */
  children?: ReactNodeLike;
  /**
   * @default false
   */
  hidden?: boolean;
  /**
   *
   */
  "aria-hidden"?: boolean;
  /**
   * @default false
   */
  pressed?: boolean;
  /**
   *
   */
  "aria-pressed"?: boolean;
  /**
   *
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    index?: number
  ) => void;
  /**
   *
   */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /**
   *
   */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}