import PropTypes, { InferProps, Validator, ReactNodeLike } from "prop-types";
import { CSSProperties, AriaAttributes } from "react";
export const HeadingPropTypes = {
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
  level: PropTypes.number as Validator<number | undefined>,
  /**
   *
   */
  "aria-level": PropTypes.number as Validator<AriaAttributes["aria-level"]>,
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
  content: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  children: PropTypes.node as Validator<ReactNodeLike>,
};

export type HeadingProps = InferProps<typeof HeadingPropTypes>;