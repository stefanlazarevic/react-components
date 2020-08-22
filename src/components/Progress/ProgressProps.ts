import PropTypes, { InferProps, Validator } from "prop-types";
import { CSSProperties, AriaAttributes } from "react";
export const ProgressPropTypes = {
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
   * @default 100
   */
  max: PropTypes.number as Validator<number | undefined>,
  /**
   * @default 0
   */
  value: PropTypes.number as Validator<number | undefined>,
  /**
   *
   */
  labelledby: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  "aria-labelledby": PropTypes.string as Validator<
    AriaAttributes["aria-labelledby"]
  >,
  /**
   *
   */
  label: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  "aria-label": PropTypes.string as Validator<
    AriaAttributes["aria-label"]
  >,
};

export type ProgressProps = InferProps<typeof ProgressPropTypes>;