import PropTypes, { InferProps, Validator } from "prop-types";
import { CSSProperties } from "react";
export const TextareaPropTypes = {
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
   * @default false
   */
  disabled: PropTypes.bool as Validator<boolean | undefined>,
  /**
   *
   */
  name: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  value: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  defaultValue: PropTypes.string as Validator<string | undefined>,
  /**
   *
   */
  placeholder: PropTypes.string as Validator<string | undefined>,
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
  onChange: PropTypes.func as Validator<
    ((event: React.ChangeEvent<HTMLTextAreaElement>) => void) | undefined
  >,
  /**
   *
   */
  onFocus: PropTypes.func as Validator<
    ((event: React.FocusEvent<HTMLTextAreaElement>) => void) | undefined
  >,
  /**
   *
   */
  onBlur: PropTypes.func as Validator<
    ((event: React.FocusEvent<HTMLTextAreaElement>) => void) | undefined
  >,
};

export type TextareaProps = InferProps<typeof TextareaPropTypes>;