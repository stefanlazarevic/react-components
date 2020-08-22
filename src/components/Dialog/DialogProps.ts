import PropTypes, { InferProps, Validator, ReactNodeLike } from "prop-types";
import { CSSProperties } from "react";
export const DialogPropTypes = {
  /**
   *
   */
  id: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  testid: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  className: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  lang: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  dir: PropTypes.oneOf(["auto", "ltr", "rtl"]) as Validator<
    "auto" | "ltr" | "rtl" | undefined
  >,
  /**
   *
   */
  style: PropTypes.object as Validator<CSSProperties | undefined>,
  /**
   *
   */
  children: PropTypes.node as Validator<ReactNodeLike>,
  /**
   *
   */
  onEscape: PropTypes.func as Validator<
    ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined
  >,
  /**
   *
   */
  onKeyDown: PropTypes.func as Validator<
    ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined
  >,
};

export type DialogProps = InferProps<typeof DialogPropTypes>;