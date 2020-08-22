import PropTypes, { InferProps, Validator, ReactNodeLike } from "prop-types";
import { CSSProperties } from "react";
export const LabelPropTypes = {
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
  style: PropTypes.object as Validator<CSSProperties | undefined>,
  /**
   *
   */
  htmlFor: PropTypes.string as Validator<string | undefined>,
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
  title: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  content: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  children: PropTypes.node as Validator<ReactNodeLike>,
};

export type LabelProps = InferProps<typeof LabelPropTypes>;