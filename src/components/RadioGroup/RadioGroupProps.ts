import { CSSProperties } from "react";

export interface RadioGroupProps {
  /**
   *
   */
  id?: string;
  /**

   * 
   */
  testid?: string;
  /**
   *
   */
  name?: string;
  /**
   *
   */
  selectedValue?: string;
  /**
   * @default radiogroup
   */
  role?: string;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  style?: CSSProperties;
  /**
   *
   */
  children?: JSX.Element[] | JSX.Element;
  /**
   *
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    selectedValue: string
  ) => void;
}