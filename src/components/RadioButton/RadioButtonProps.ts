import { RadioProps } from "../Radio/RadioProps";
import { ReactNodeLike } from "prop-types";

export interface RadioButtonProps extends RadioProps {
  /**
   *
   */
  children?: ReactNodeLike;
  /**
   *
   */
  content?: string;
  /**
   *
   */
  buttonClassName?: string;
  /**
   *
   */
  title?: string;
}
