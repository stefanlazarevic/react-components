import { ReactNodeLike } from "prop-types";
import { CSSProperties } from "react";

export interface AlertProps {
  /**
   * Hello world
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
  style?: CSSProperties;
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
};
