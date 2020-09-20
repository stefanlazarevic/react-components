import { ReactNodeLike } from "prop-types";
import { IComponentBase } from "../../interfaces";

export interface AlertProps extends IComponentBase {
  /**
   *
   */
  lang?: string;
  /**
   * @default "alert"
   */
  role?: string;
  /**
   *
   */
  dir?: "auto" | "ltr" | "rtl";
  /**
   *
   */
  title?: string;
  /**
   *
   */
  tabIndex?: number;
  /**
   *
   */
  content?: string;
  /**
   *
   */
  kind?: "warning" | "info" | "error" | "success";
  /**
   *
   */
  children?: ReactNodeLike;
  /**
   *
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  /**
   *
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /**
   *
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
