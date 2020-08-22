import { ButtonProps } from "../Button";
import { ReactNodeLike } from "prop-types";

export interface IconButtonProps extends ButtonProps {
  /**
   * Single Icon component.
   */
  children?: ReactNodeLike;
}