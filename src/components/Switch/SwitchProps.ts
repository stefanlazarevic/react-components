import PropTypes, { InferProps, Validator } from "prop-types";
import { CSSProperties } from "react";
export const SwitchPropTypes = {
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
  title: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  style: PropTypes.object as Validator<CSSProperties | undefined>,
  /**
   * @default false
   */
  checked: PropTypes.bool as Validator<boolean | undefined>,
  /**
   * @default false
   */
  disabled: PropTypes.bool as Validator<boolean | undefined>,
  /**
   * @default checkbox
   */
  type: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  name: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  onChange: PropTypes.func as Validator<
    ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
  >,
  /**
   *
   */
  onFocus: PropTypes.func as Validator<
    ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined
  >,
  /**
   *
   */
  onBlur: PropTypes.func as Validator<
    ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined
  >,
};

export type SwitchProps = InferProps<typeof SwitchPropTypes>;