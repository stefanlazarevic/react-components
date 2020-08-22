import PropTypes, { InferProps, Validator, ReactNodeLike } from "prop-types";
import { CSSProperties } from "react";
export const IconPropTypes = {
  /**
   *
   */
  "aria-hidden": PropTypes.oneOfType([PropTypes.bool]) as Validator<
    React.AriaAttributes["aria-hidden"]
  >,
  /**
   *
   */
  hidden: PropTypes.bool as Validator<boolean | undefined>,
  /**
   *
   */
  className: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  children: PropTypes.node as Validator<ReactNodeLike>,
  /**
   *
   */
  focusable: PropTypes.bool as Validator<boolean | undefined>,
  /**
   *
   */
  fill: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  id: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  style: PropTypes.object as Validator<CSSProperties | undefined>,
  /**
   *
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) as Validator<
    string | number | undefined
  >,
  /**
   *
   */
  stroke: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  strokeWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]) as Validator<string | number | undefined>,
  /**
   *
   */
  strokeLinecap: PropTypes.oneOf([
    "butt",
    "round",
    "square",
    "inherit",
  ]) as Validator<"butt" | "round" | "square" | "inherit" | undefined>,
  /**
   *
   */
  strokeLinejoin: PropTypes.oneOf([
    "round",
    "inherit",
    "miter",
    "bevel",
  ]) as Validator<"round" | "inherit" | "miter" | "bevel" | undefined>,
  /**
   *
   */
  viewBox: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  tabIndex: PropTypes.number as Validator<number | undefined>,
  /**
   *
   */
  testid: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  fallback: PropTypes.node as Validator<any>,
  /**
   *
   */
  icon: PropTypes.string as Validator<string | undefined>,
};

export type IconProps = InferProps<typeof IconPropTypes>;