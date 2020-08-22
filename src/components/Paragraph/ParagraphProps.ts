import PropTypes, { InferProps, Validator, ReactNodeLike } from "prop-types";
import { CSSProperties } from "react";
export const ParagraphPropTypes = {
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
  content: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  children: PropTypes.node as Validator<ReactNodeLike>,
};

export type ParagraphProps = InferProps<typeof ParagraphPropTypes>;